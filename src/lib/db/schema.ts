import { pgTable, serial, text, integer, boolean, unique } from "drizzle-orm/pg-core";

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
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

export const collection = pgTable(
  "collection",
  {
    id: serial("id").primaryKey(),
    cardId: integer("card_id")
      .notNull()
      .references(() => cards.id),
    userId: text("user_id").notNull().default("default"),
    owned: boolean("owned").notNull().default(false),
  },
  (table) => [unique().on(table.cardId, table.userId)]
);
