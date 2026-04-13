export interface SeedCardEntry {
  name: string;
  set: string;
  setYear: number;
  cardNumber: string;
  language: string;
  variant: string | null;
  rarity: string;
  category: "snorlax_pokemon" | "snorlax_premium" | "snorlax_artwork" | "snorlax_cameo";
  notes: string | null;
}

/**
 * Static fallback list used when TCG API is unavailable.
 * When the API IS available, run-seed.ts fetches all Snorlax cards dynamically.
 */
export const snorlaxCards: SeedCardEntry[] = [
  // === VINTAGE (1999-2003) ===
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Original Jungle Holo" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "27/64", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "Non-Holo Jungle" },
  { name: "Snorlax", set: "Wizards Black Star Promos", setYear: 1999, cardNumber: "49/53", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Base Set 2", setYear: 2000, cardNumber: "30/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Rocket's Snorlax", set: "Gym Heroes", setYear: 2000, cardNumber: "33/132", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Legendary Collection", setYear: 2002, cardNumber: "64/110", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Skyridge", setYear: 2003, cardNumber: "100/182", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },

  // === EX ERA (2004-2006) ===
  { name: "Snorlax", set: "FireRed & LeafGreen", setYear: 2004, cardNumber: "15/116", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Rocket's Snorlax ex", set: "Team Rocket Returns", setYear: 2004, cardNumber: "104/111", language: "en", variant: null, rarity: "Rare Holo EX", category: "snorlax_premium", notes: "First Snorlax ex card" },
  { name: "Snorlax δ", set: "Dragon Frontiers", setYear: 2006, cardNumber: "10/101", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Delta Species — Grass type Snorlax" },

  // === DIAMOND & PEARL / PLATINUM (2007-2011) ===
  { name: "Snorlax", set: "Diamond & Pearl", setYear: 2007, cardNumber: "37/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "33/120", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "81/120", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax LV.X", set: "Rising Rivals", setYear: 2009, cardNumber: "111/120", language: "en", variant: null, rarity: "Rare Holo LV.X", category: "snorlax_premium", notes: "Level X chase card" },
  { name: "Snorlax", set: "Call of Legends", setYear: 2011, cardNumber: "33/106", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === BLACK & WHITE (2012-2013) ===
  { name: "Snorlax", set: "Boundaries Crossed", setYear: 2012, cardNumber: "109/153", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Plasma Storm", setYear: 2013, cardNumber: "101/138", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === XY ERA (2013-2016) ===
  { name: "Snorlax", set: "Kalos Starter Set", setYear: 2013, cardNumber: "26/39", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "XY Black Star Promos", setYear: 2013, cardNumber: "XY179/216", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Flashfire", setYear: 2014, cardNumber: "80/110", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "BREAKthrough", setYear: 2015, cardNumber: "118/165", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Generations", setYear: 2016, cardNumber: "58/117", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Fates Collide", setYear: 2016, cardNumber: "77/129", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === SUN & MOON (2017-2019) ===
  { name: "Snorlax-GX", set: "SM Black Star Promos", setYear: 2017, cardNumber: "SM05/250", language: "en", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "GX promo" },
  { name: "Eevee & Snorlax-GX", set: "SM Black Star Promos", setYear: 2017, cardNumber: "SM169/250", language: "en", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "Tag Team promo" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "120/198", language: "en", variant: null, rarity: "Rare Holo GX", category: "snorlax_premium", notes: "Tag Team GX" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "171/198", language: "en", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Full Art Tag Team" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "191/198", language: "en", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Rainbow Rare Tag Team" },
  { name: "Snorlax", set: "Unbroken Bonds", setYear: 2019, cardNumber: "158/234", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Hidden Fates", setYear: 2019, cardNumber: "50/69", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === SWORD & SHIELD (2019-2023) ===
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH032/304", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH068/304", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH119/304", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Sword & Shield", setYear: 2020, cardNumber: "140/216", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2020, cardNumber: "141/216", language: "en", variant: null, rarity: "Rare Holo V", category: "snorlax_premium", notes: null },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "142/216", language: "en", variant: null, rarity: "Rare Holo VMAX", category: "snorlax_premium", notes: "Gigantamax form" },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2020, cardNumber: "197/216", language: "en", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Full Art V" },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "206/216", language: "en", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Rainbow Rare VMAX" },
  { name: "Snorlax", set: "Rebel Clash", setYear: 2020, cardNumber: "141/209", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Vivid Voltage", setYear: 2020, cardNumber: "131/203", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Chilling Reign", setYear: 2021, cardNumber: "224/233", language: "en", variant: "Gold Secret", rarity: "Rare Secret", category: "snorlax_premium", notes: "Gold Secret Rare" },
  { name: "Snorlax", set: "Fusion Strike", setYear: 2021, cardNumber: "206/284", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Pokémon GO", setYear: 2022, cardNumber: "55/88", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Lost Origin", setYear: 2022, cardNumber: "143/217", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Lost Origin Trainer Gallery", setYear: 2022, cardNumber: "TG10/30", language: "en", variant: "Trainer Gallery", rarity: "Trainer Gallery Rare Holo", category: "snorlax_premium", notes: "Character Rare with Trainer" },
  { name: "Snorlax", set: "Crown Zenith", setYear: 2023, cardNumber: "109/160", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === SCARLET & VIOLET (2023-2026) ===
  { name: "Snorlax", set: "Scarlet & Violet Black Star Promos", setYear: 2023, cardNumber: "51/196", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Scarlet & Violet Black Star Promos", setYear: 2023, cardNumber: "122/196", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "151", setYear: 2023, cardNumber: "143/207", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Paldean Fates", setYear: 2024, cardNumber: "202/245", language: "en", variant: "Shiny", rarity: "Shiny Rare", category: "snorlax_premium", notes: "Shiny Snorlax" },
  { name: "Snorlax", set: "Twilight Masquerade", setYear: 2024, cardNumber: "136/226", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Surging Sparks", setYear: 2024, cardNumber: "144/252", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax ex", set: "Prismatic Evolutions", setYear: 2025, cardNumber: "76/180", language: "en", variant: null, rarity: "Double Rare", category: "snorlax_premium", notes: null },
  { name: "Hop's Snorlax", set: "Journey Together", setYear: 2025, cardNumber: "117/190", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Perfect Order", setYear: 2026, cardNumber: "63/124", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },

  // === SNORLAX ARTWORK / CAMEO — Trainer cards featuring Snorlax ===
  { name: "Sleep!", set: "Team Rocket", setYear: 2000, cardNumber: "79/82", language: "en", variant: null, rarity: "Common", category: "snorlax_artwork", notes: "Trainer card featuring Snorlax" },
  { name: "Snorlax Doll", set: "Paradox Rift", setYear: 2023, cardNumber: "175/266", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_artwork", notes: "Trainer item — Snorlax Doll" },
  { name: "Leftovers", set: "Great Encounters", setYear: 2008, cardNumber: "99/106", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_cameo", notes: "Trainer Tool — Snorlax in artwork" },
  { name: "Leftovers", set: "151", setYear: 2023, cardNumber: "163/207", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_cameo", notes: "Trainer Tool — Snorlax eating in artwork" },
  { name: "Hop's Snorlax", set: "Scarlet & Violet Promos", setYear: 2022, cardNumber: "184/148", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: "Hop's Snorlax promo" },
];
