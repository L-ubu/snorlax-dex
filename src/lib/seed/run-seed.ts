import { db } from "@/lib/db";
import { cards, collection } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { snorlaxCards } from "./snorlax-cards";

const TCG_API_BASE = "https://api.pokemontcg.io/v2";

interface TcgCard {
  name: string;
  number: string;
  set: { name: string; releaseDate: string; total: number };
  images: { large: string };
  rarity?: string;
}

async function fetchTcgCards(query: string): Promise<TcgCard[]> {
  const all: TcgCard[] = [];
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const res = await fetch(
      `${TCG_API_BASE}/cards?q=${encodeURIComponent(query)}&page=${page}&pageSize=250`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (!res.ok) throw new Error(`TCG API: ${res.status}`);
    const data = await res.json();
    all.push(...data.data);
    hasMore = all.length < data.totalCount;
    page++;
  }
  return all;
}

function buildImageMap(apiCards: TcgCard[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const c of apiCards) {
    // Key by set name + card number (just the number part, no /total)
    const key = `${c.set.name}|${c.number}`.toLowerCase();
    map.set(key, c.images.large);
  }
  return map;
}

function extractNumber(cardNumber: string): string {
  return cardNumber.split("/")[0];
}

interface RunSeedOptions {
  skipApiFetch?: boolean;
}

export async function runSeed(options: RunSeedOptions = {}) {
  // Clear existing data (collection first due to FK)
  await db.delete(collection);
  await db.delete(cards);

  // Insert curated card list
  const insertedCards = await db
    .insert(cards)
    .values(
      snorlaxCards.map((c) => ({
        name: c.name,
        set: c.set,
        setYear: c.setYear,
        cardNumber: c.cardNumber,
        language: c.language,
        variant: c.variant ?? "",
        rarity: c.rarity,
        category: c.category,
        imageUrl: null,
        notes: c.notes,
      }))
    )
    .returning();

  // Fetch images from TCG API
  if (!options.skipApiFetch) {
    try {
      // Fetch all Snorlax-named cards plus known cameo/related cards
      const [snorlaxApi, sleepApi, leftoversApi, munchlaxApi, snorlaxDollApi, cameoApi] = await Promise.all([
        fetchTcgCards('name:"Snorlax"'),
        fetchTcgCards('name:"Sleep!"'),
        fetchTcgCards('name:"Leftovers"'),
        fetchTcgCards('name:"Munchlax"'),
        fetchTcgCards('name:"Snorlax Doll"'),
        // Targeted queries for specific cameo cards
        fetchTcgCards('(name:"Challenge!" OR name:"Computer Error" OR name:"Arcade Game" OR name:"Ghetsis" OR name:"Chespin" OR name:"Chansey" OR name:"Excadrill" OR name:"Milcery")'),
      ]);
      const allApiCards = [...snorlaxApi, ...sleepApi, ...leftoversApi, ...munchlaxApi, ...snorlaxDollApi, ...cameoApi];
      const imageMap = buildImageMap(allApiCards);

      // Only assign images to English cards (TCG API only has EN images)
      for (const dbCard of insertedCards) {
        if (dbCard.language !== "en") continue;
        const num = extractNumber(dbCard.cardNumber);
        const key = `${dbCard.set}|${num}`.toLowerCase();
        const imageUrl = imageMap.get(key);
        if (imageUrl) {
          await db
            .update(cards)
            .set({ imageUrl })
            .where(eq(cards.id, dbCard.id));
        }
      }
    } catch (e) {
      console.warn("TCG API fetch failed, seed continues without images:", e);
    }
  }

  // Create default collection entries (all owned=false)
  await db.insert(collection).values(
    insertedCards.map((c) => ({
      cardId: c.id,
      userId: "default",
      owned: false,
    }))
  );

  return {
    cardsInserted: insertedCards.length,
    collectionEntries: insertedCards.length,
  };
}
