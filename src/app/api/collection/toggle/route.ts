import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { collection } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const { cardId, userId = "default" } = await request.json();

  if (!cardId) {
    return NextResponse.json({ error: "cardId is required" }, { status: 400 });
  }

  const existing = await db
    .select()
    .from(collection)
    .where(
      and(eq(collection.cardId, cardId), eq(collection.userId, userId))
    );

  if (existing.length === 0) {
    const inserted = await db
      .insert(collection)
      .values({ cardId, userId, owned: true })
      .returning();
    return NextResponse.json(inserted[0]);
  }

  const updated = await db
    .update(collection)
    .set({ owned: !existing[0].owned })
    .where(
      and(eq(collection.cardId, cardId), eq(collection.userId, userId))
    )
    .returning();

  return NextResponse.json(updated[0]);
}
