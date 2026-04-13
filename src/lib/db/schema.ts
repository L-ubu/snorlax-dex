import { sqliteTable, text, integer, unique } from "drizzle-orm/sqlite-core";

export const cards = sqliteTable("cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  set: text("set").notNull(),
  setYear: integer("set_year").notNull(),
  cardNumber: text("card_number").notNull(),
  language: text("language").notNull(),
  variant: text("variant").notNull(),
  rarity: text("rarity"),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  notes: text("notes"),
});

export const collection = sqliteTable(
  "collection",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    cardId: integer("card_id")
      .notNull()
      .references(() => cards.id),
    userId: text("user_id").notNull().default("default"),
    owned: integer("owned", { mode: "boolean" }).notNull().default(false),
  },
  (table) => [unique().on(table.cardId, table.userId)]
);
