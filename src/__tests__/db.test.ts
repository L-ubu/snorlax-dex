import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { eq } from "drizzle-orm";
import { cards, collection } from "@/lib/db/schema";
import { createTestDb } from "@/lib/db/test-db";

describe("Database schema", () => {
  const { db, sqlite } = createTestDb();

  afterAll(() => {
    sqlite.close();
  });

  it("has cards and collection table definitions", () => {
    expect(cards.id).toBeDefined();
    expect(cards.name).toBeDefined();
    expect(cards.category).toBeDefined();
    expect(collection.cardId).toBeDefined();
    expect(collection.owned).toBeDefined();
  });

  it("inserts and reads back a card + collection entry", async () => {
    const inserted = await db
      .insert(cards)
      .values({
        name: "Snorlax",
        set: "Base Set",
        setYear: 1999,
        cardNumber: "11/102",
        language: "en",
        variant: "Normal",
        category: "snorlax_pokemon",
        rarity: "Holo Rare",
        imageUrl: null,
        notes: null,
      })
      .returning();

    expect(inserted).toHaveLength(1);
    expect(inserted[0].name).toBe("Snorlax");

    const col = await db
      .insert(collection)
      .values({
        cardId: inserted[0].id,
        userId: "default",
        owned: true,
      })
      .returning();

    expect(col[0].cardId).toBe(inserted[0].id);
    expect(col[0].owned).toBe(true);

    const readBack = await db
      .select()
      .from(cards)
      .where(eq(cards.id, inserted[0].id));

    expect(readBack).toHaveLength(1);
    expect(readBack[0].name).toBe("Snorlax");
  });
});
