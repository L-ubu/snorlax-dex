import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

export function createTestDb() {
  const sqlite = new Database(":memory:");
  const db = drizzle(sqlite, { schema });

  sqlite.exec(`
    CREATE TABLE cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      "set" TEXT NOT NULL,
      set_year INTEGER NOT NULL,
      card_number TEXT NOT NULL,
      language TEXT NOT NULL,
      variant TEXT NOT NULL,
      rarity TEXT,
      category TEXT NOT NULL,
      image_url TEXT,
      notes TEXT
    );

    CREATE TABLE collection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      card_id INTEGER NOT NULL REFERENCES cards(id),
      user_id TEXT NOT NULL DEFAULT 'default',
      owned INTEGER NOT NULL DEFAULT 0,
      UNIQUE(card_id, user_id)
    );
  `);

  return { db, sqlite };
}
