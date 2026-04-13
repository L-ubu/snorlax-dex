import type { TcgApiCard, TcgApiResponse, NormalizedCard } from "./types";

const BASE_URL = "https://api.pokemontcg.io/v2";
const API_KEY = process.env.POKEMON_TCG_API_KEY;

async function fetchFromApi(endpoint: string): Promise<TcgApiResponse> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (API_KEY) headers["X-Api-Key"] = API_KEY;

  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
  if (!response.ok) {
    throw new Error(
      `TCG API error: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

async function fetchAllPages(endpoint: string): Promise<TcgApiCard[]> {
  const allCards: TcgApiCard[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const sep = endpoint.includes("?") ? "&" : "?";
    const response = await fetchFromApi(
      `${endpoint}${sep}page=${page}&pageSize=250`
    );
    allCards.push(...response.data);
    hasMore = allCards.length < response.totalCount;
    page++;
  }

  return allCards;
}

function normalizeCard(apiCard: TcgApiCard): NormalizedCard {
  return {
    name: apiCard.name,
    set: apiCard.set.name,
    setYear: parseInt(apiCard.set.releaseDate.split("/")[0], 10),
    cardNumber: apiCard.number,
    language: "en",
    rarity: apiCard.rarity ?? null,
    imageUrl: apiCard.images.large,
  };
}

export async function fetchSnorlaxCards(): Promise<NormalizedCard[]> {
  return (await fetchAllPages('/cards?q=name:"Snorlax"')).map(normalizeCard);
}

export async function fetchFullArtCards(
  language: "en" | "jp"
): Promise<NormalizedCard[]> {
  const query =
    'name:"Snorlax" (rarity:"Illustration Rare" OR rarity:"Special Art Rare" OR rarity:"Art Rare" OR rarity:"Ultra Rare")';
  return (
    await fetchAllPages(`/cards?q=${encodeURIComponent(query)}`)
  ).map((c) => ({ ...normalizeCard(c), language }));
}

export interface SeedCard {
  name: string;
  set: string;
  cardNumber: string;
  language: string;
  imageUrl?: string | null;
}

export function matchApiCardToSeedCard(
  apiCard: NormalizedCard,
  seedCards: SeedCard[]
): SeedCard | null {
  return (
    seedCards.find(
      (s) =>
        s.set === apiCard.set &&
        s.cardNumber === apiCard.cardNumber &&
        s.language === apiCard.language
    ) ?? null
  );
}
