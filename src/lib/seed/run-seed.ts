import { db } from "@/lib/db";
import { cards, collection } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { snorlaxCards } from "./snorlax-cards";
import {
  fetchSnorlaxCards,
  matchApiCardToSeedCard,
} from "@/lib/tcg-api/client";
import type { SeedCard } from "@/lib/tcg-api/client";

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

  // Fetch images from TCG API and match to seed entries
  if (!options.skipApiFetch) {
    try {
      const apiCards = await fetchSnorlaxCards();
      const seedsForMatch: SeedCard[] = insertedCards.map((c) => ({
        name: c.name,
        set: c.set,
        cardNumber: c.cardNumber,
        language: c.language,
      }));

      for (const apiCard of apiCards) {
        const match = matchApiCardToSeedCard(apiCard, seedsForMatch);
        if (match) {
          const dbCard = insertedCards.find(
            (c) =>
              c.set === match.set &&
              c.cardNumber === match.cardNumber &&
              c.language === match.language
          );
          if (dbCard) {
            await db
              .update(cards)
              .set({ imageUrl: apiCard.imageUrl })
              .where(eq(cards.id, dbCard.id));
          }
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
