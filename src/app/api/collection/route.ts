import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cards, collection } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const userId =
    new URL(request.url).searchParams.get("userId") ?? "default";

  const result = await db
    .select({
      collectionId: collection.id,
      owned: collection.owned,
      card: cards,
    })
    .from(collection)
    .innerJoin(cards, eq(collection.cardId, cards.id))
    .where(eq(collection.userId, userId));

  return NextResponse.json(result);
}
