import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cards, collection } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  const totalCards = await db
    .select({ count: sql<number>`count(*)` })
    .from(cards);

  const ownedCards = await db
    .select({ count: sql<number>`count(*)` })
    .from(collection)
    .where(eq(collection.owned, true));

  const byCategory = await db
    .select({
      category: cards.category,
      total: sql<number>`count(*)`,
      owned: sql<number>`coalesce(sum(case when ${collection.owned} = 1 then 1 else 0 end), 0)`,
    })
    .from(cards)
    .leftJoin(collection, eq(cards.id, collection.cardId))
    .groupBy(cards.category);

  return NextResponse.json({
    totalCards: totalCards[0].count,
    ownedCards: ownedCards[0].count,
    byCategory,
  });
}
