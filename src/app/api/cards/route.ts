import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cards } from "@/lib/db/schema";
import { eq, like, or, and, type SQL } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const language = searchParams.get("language");
  const set = searchParams.get("set");
  const rarity = searchParams.get("rarity");
  const variant = searchParams.get("variant");
  const search = searchParams.get("search");

  const conditions: SQL[] = [];
  if (category) conditions.push(eq(cards.category, category));
  if (language) conditions.push(eq(cards.language, language));
  if (set) conditions.push(eq(cards.set, set));
  if (rarity) conditions.push(eq(cards.rarity, rarity));
  if (variant) conditions.push(eq(cards.variant, variant));
  if (search) {
    const pattern = `%${search}%`;
    conditions.push(
      or(
        like(cards.name, pattern),
        like(cards.set, pattern),
        like(cards.cardNumber, pattern),
        like(cards.notes, pattern)
      )!
    );
  }

  const result =
    conditions.length > 0
      ? await db.select().from(cards).where(and(...conditions))
      : await db.select().from(cards);

  return NextResponse.json(result);
}
