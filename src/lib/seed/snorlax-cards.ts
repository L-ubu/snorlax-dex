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
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Unlimited Jungle Holo" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "1st Edition Holo", rarity: "Rare Holo", category: "snorlax_premium", notes: "1st Edition Jungle Holo" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "No Symbol Error", rarity: "Rare Holo", category: "snorlax_premium", notes: "Early unlimited print missing Jungle set symbol — known error" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "27/64", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "Unlimited Non-Holo Jungle" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "27/64", language: "en", variant: "1st Edition", rarity: "Rare", category: "snorlax_premium", notes: "1st Edition Non-Holo Jungle" },
  { name: "Snorlax", set: "Wizards Black Star Promos", setYear: 1999, cardNumber: "49/53", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: "Pokemon League promo" },
  { name: "Snorlax", set: "Base Set 2", setYear: 2000, cardNumber: "30/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "No 1st Edition exists for Base Set 2" },
  { name: "Rocket's Snorlax", set: "Gym Heroes", setYear: 2000, cardNumber: "33/132", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "Unlimited" },
  { name: "Rocket's Snorlax", set: "Gym Heroes", setYear: 2000, cardNumber: "33/132", language: "en", variant: "1st Edition", rarity: "Rare", category: "snorlax_premium", notes: "1st Edition Gym Heroes" },
  { name: "Snorlax", set: "Legendary Collection", setYear: 2002, cardNumber: "64/110", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Legendary Collection", setYear: 2002, cardNumber: "64/110", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_premium", notes: "Fireworks pattern reverse holo — first set with reverse holos" },
  { name: "Snorlax", set: "Skyridge", setYear: 2003, cardNumber: "100/182", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Skyridge", setYear: 2003, cardNumber: "100/182", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_pokemon", notes: "e-Card refractor pattern reverse holo" },

  // === EX ERA (2004-2006) ===
  { name: "Snorlax", set: "FireRed & LeafGreen", setYear: 2004, cardNumber: "15/116", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "FireRed & LeafGreen", setYear: 2004, cardNumber: "15/116", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Energy symbol background reverse holo" },
  { name: "Rocket's Snorlax ex", set: "Team Rocket Returns", setYear: 2004, cardNumber: "104/111", language: "en", variant: null, rarity: "Rare Holo EX", category: "snorlax_premium", notes: "First Snorlax ex card — no reverse holo for ex" },
  { name: "Snorlax δ", set: "Dragon Frontiers", setYear: 2006, cardNumber: "10/101", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Delta Species — Grass type Snorlax" },
  { name: "Snorlax δ", set: "Dragon Frontiers", setYear: 2006, cardNumber: "10/101", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Delta Species reverse holo with set logo stamp" },

  // === DIAMOND & PEARL / PLATINUM (2007-2011) ===
  { name: "Snorlax", set: "Diamond & Pearl", setYear: 2007, cardNumber: "37/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Diamond & Pearl", setYear: 2007, cardNumber: "37/130", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "33/120", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "33/120", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "33/120", language: "en", variant: "Crosshatch Holo", rarity: "Rare", category: "snorlax_premium", notes: "Pokemon League Rival Season 2009-10 crosshatch promo" },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "81/120", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rising Rivals", setYear: 2009, cardNumber: "81/120", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax LV.X", set: "Rising Rivals", setYear: 2009, cardNumber: "111/120", language: "en", variant: null, rarity: "Rare Holo LV.X", category: "snorlax_premium", notes: "Level X chase card — no reverse holo for LV.X" },
  { name: "Snorlax", set: "Call of Legends", setYear: 2011, cardNumber: "33/106", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Call of Legends", setYear: 2011, cardNumber: "33/106", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Call of Legends", setYear: 2011, cardNumber: "33/106", language: "en", variant: "Prerelease", rarity: "Promo", category: "snorlax_premium", notes: "Prerelease stamp promo" },
  { name: "Snorlax", set: "Call of Legends", setYear: 2011, cardNumber: "33/106", language: "en", variant: "Staff Prerelease", rarity: "Promo", category: "snorlax_premium", notes: "Gold Staff stamp — event organizer exclusive" },

  // === BLACK & WHITE (2012-2013) ===
  { name: "Snorlax", set: "Boundaries Crossed", setYear: 2012, cardNumber: "109/153", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Boundaries Crossed", setYear: 2012, cardNumber: "109/153", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Plasma Storm", setYear: 2013, cardNumber: "101/138", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Plasma Storm", setYear: 2013, cardNumber: "101/138", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === XY ERA (2013-2016) ===
  { name: "Snorlax", set: "Kalos Starter Set", setYear: 2013, cardNumber: "26/39", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: "Fixed product — no reverse holo exists" },
  { name: "Snorlax", set: "XY Black Star Promos", setYear: 2013, cardNumber: "XY179/216", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Flashfire", setYear: 2014, cardNumber: "80/110", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Flashfire", setYear: 2014, cardNumber: "80/110", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "BREAKthrough", setYear: 2015, cardNumber: "118/165", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "BREAKthrough", setYear: 2015, cardNumber: "118/165", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Generations", setYear: 2016, cardNumber: "58/117", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Fates Collide", setYear: 2016, cardNumber: "77/129", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Fates Collide", setYear: 2016, cardNumber: "77/129", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === SUN & MOON (2017-2019) ===
  { name: "Snorlax-GX", set: "SM Black Star Promos", setYear: 2017, cardNumber: "SM05/250", language: "en", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "Snorlax-GX Box promo" },
  { name: "Eevee & Snorlax-GX", set: "SM Black Star Promos", setYear: 2017, cardNumber: "SM169/250", language: "en", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "Tag Team Tin promo" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "120/198", language: "en", variant: null, rarity: "Rare Holo GX", category: "snorlax_premium", notes: "Tag Team GX" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "120/198", language: "en", variant: "Reverse Holo", rarity: "Rare Holo GX", category: "snorlax_premium", notes: "Tag Team GX reverse holo" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "171/198", language: "en", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Full Art Tag Team" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "191/198", language: "en", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Rainbow Rare Tag Team" },
  { name: "Snorlax", set: "Unbroken Bonds", setYear: 2019, cardNumber: "158/234", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Unbroken Bonds", setYear: 2019, cardNumber: "158/234", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Hidden Fates", setYear: 2019, cardNumber: "50/69", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },

  // === SWORD & SHIELD (2019-2023) ===
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH032/304", language: "en", variant: "Cosmos Holo", rarity: "Promo", category: "snorlax_pokemon", notes: "Snorlax Pin Collection cosmos holo" },
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH068/304", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: "Vivid Voltage Build & Battle prerelease" },
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH068/304", language: "en", variant: "Staff Prerelease", rarity: "Promo", category: "snorlax_premium", notes: "Gold Staff stamp — event organizer exclusive" },
  { name: "Snorlax", set: "SWSH Black Star Promos", setYear: 2019, cardNumber: "SWSH119/304", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Sword & Shield", setYear: 2020, cardNumber: "140/216", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Sword & Shield", setYear: 2020, cardNumber: "140/216", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2020, cardNumber: "141/216", language: "en", variant: null, rarity: "Rare Holo V", category: "snorlax_premium", notes: null },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "142/216", language: "en", variant: null, rarity: "Rare Holo VMAX", category: "snorlax_premium", notes: "Gigantamax form" },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2020, cardNumber: "197/216", language: "en", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Full Art V" },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "206/216", language: "en", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Rainbow Rare VMAX" },
  { name: "Snorlax", set: "Rebel Clash", setYear: 2020, cardNumber: "141/209", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rebel Clash", setYear: 2020, cardNumber: "141/209", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Rebel Clash", setYear: 2020, cardNumber: "141/209", language: "en", variant: "Cosmos Holo", rarity: "Rare", category: "snorlax_premium", notes: "Snorlax Knockout Tin cosmos holo" },
  { name: "Snorlax", set: "Vivid Voltage", setYear: 2020, cardNumber: "131/203", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Vivid Voltage", setYear: 2020, cardNumber: "131/203", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Chilling Reign", setYear: 2021, cardNumber: "224/233", language: "en", variant: "Gold Secret", rarity: "Rare Secret", category: "snorlax_premium", notes: "Gold Secret Rare" },
  { name: "Snorlax", set: "Fusion Strike", setYear: 2021, cardNumber: "206/284", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Fusion Strike", setYear: 2021, cardNumber: "206/284", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Pokémon GO", setYear: 2022, cardNumber: "55/88", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Pokémon GO", setYear: 2022, cardNumber: "55/88", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Lost Origin", setYear: 2022, cardNumber: "143/217", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Lost Origin", setYear: 2022, cardNumber: "143/217", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Lost Origin Trainer Gallery", setYear: 2022, cardNumber: "TG10/30", language: "en", variant: "Trainer Gallery", rarity: "Trainer Gallery Rare Holo", category: "snorlax_premium", notes: "Character Rare with Trainer" },
  { name: "Snorlax", set: "Crown Zenith", setYear: 2023, cardNumber: "109/160", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Crown Zenith", setYear: 2023, cardNumber: "109/160", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: "Reverse Glitter Holofoil" },

  // === SCARLET & VIOLET (2023-2026) ===
  { name: "Snorlax", set: "Scarlet & Violet Black Star Promos", setYear: 2023, cardNumber: "51/196", language: "en", variant: "Illustration Rare", rarity: "Promo", category: "snorlax_premium", notes: "151 ETB promo — art by GOSSAN" },
  { name: "Snorlax", set: "Scarlet & Violet Black Star Promos", setYear: 2023, cardNumber: "122/196", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: "Twilight Masquerade blister promo" },
  { name: "Snorlax", set: "151", setYear: 2023, cardNumber: "143/207", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "151", setYear: 2023, cardNumber: "143/207", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Paldean Fates", setYear: 2024, cardNumber: "202/245", language: "en", variant: "Shiny", rarity: "Shiny Rare", category: "snorlax_premium", notes: "Shiny Snorlax" },
  { name: "Snorlax", set: "Twilight Masquerade", setYear: 2024, cardNumber: "136/226", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Twilight Masquerade", setYear: 2024, cardNumber: "136/226", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Surging Sparks", setYear: 2024, cardNumber: "144/252", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Surging Sparks", setYear: 2024, cardNumber: "144/252", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax ex", set: "Prismatic Evolutions", setYear: 2025, cardNumber: "76/180", language: "en", variant: null, rarity: "Double Rare", category: "snorlax_premium", notes: null },
  { name: "Hop's Snorlax", set: "Journey Together", setYear: 2025, cardNumber: "117/190", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Hop's Snorlax", set: "Journey Together", setYear: 2025, cardNumber: "117/190", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Perfect Order", setYear: 2026, cardNumber: "63/124", language: "en", variant: null, rarity: "Common", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Perfect Order", setYear: 2026, cardNumber: "63/124", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_pokemon", notes: null },

  // === SNORLAX ARTWORK — Cards named after Snorlax ===
  { name: "Sleep!", set: "Team Rocket", setYear: 2000, cardNumber: "79/82", language: "en", variant: null, rarity: "Common", category: "snorlax_artwork", notes: "Trainer card featuring sleeping Snorlax" },
  { name: "Snorlax Doll", set: "Paradox Rift", setYear: 2023, cardNumber: "175/182", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_artwork", notes: "ACE SPEC — Snorlax plushie item card" },
  { name: "Snorlax Doll", set: "Paradox Rift", setYear: 2023, cardNumber: "175/182", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_artwork", notes: "ACE SPEC reverse holo" },
  { name: "Leftovers", set: "Great Encounters", setYear: 2008, cardNumber: "99/106", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_artwork", notes: "Trainer Tool — Snorlax-associated item" },
  { name: "Leftovers", set: "Great Encounters", setYear: 2008, cardNumber: "99/106", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_artwork", notes: "Trainer Tool reverse holo" },
  { name: "Leftovers", set: "151", setYear: 2023, cardNumber: "163/165", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_artwork", notes: "Trainer Tool — Snorlax-associated item" },
  { name: "Leftovers", set: "151", setYear: 2023, cardNumber: "163/165", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_artwork", notes: "Trainer Tool reverse holo" },

  // === SNORLAX CAMEO — Non-Snorlax cards with Snorlax in the artwork ===
  { name: "Challenge!", set: "Team Rocket", setYear: 2000, cardNumber: "74/82", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_cameo", notes: "Snorlax prominently visible in group battle scene" },
  { name: "Challenge!", set: "Legendary Collection", setYear: 2002, cardNumber: "106/110", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_cameo", notes: "Reprint — Snorlax in group battle scene" },
  { name: "Challenge!", set: "Legendary Collection", setYear: 2002, cardNumber: "106/110", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_cameo", notes: "Fireworks pattern reverse holo" },
  { name: "Computer Error", set: "Wizards Black Star Promos", setYear: 1999, cardNumber: "16/53", language: "en", variant: null, rarity: "Promo", category: "snorlax_cameo", notes: "Snorlax partially visible in chaotic machine scene" },
  { name: "Arcade Game", set: "Neo Genesis", setYear: 2000, cardNumber: "83/111", language: "en", variant: null, rarity: "Rare", category: "snorlax_cameo", notes: "Snorlax on slot machine reels — Goldenrod Game Corner" },
  { name: "Chespin", set: "BREAKthrough", setYear: 2015, cardNumber: "9/162", language: "en", variant: null, rarity: "Common", category: "snorlax_cameo", notes: "Snorlax visible in background behind Chespin" },
  { name: "Chespin", set: "BREAKthrough", setYear: 2015, cardNumber: "9/162", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_cameo", notes: "Snorlax in background — reverse holo" },
  { name: "Ghetsis", set: "Plasma Freeze", setYear: 2013, cardNumber: "101/116", language: "en", variant: null, rarity: "Rare Holo", category: "snorlax_cameo", notes: "Snorlax visible on background monitor" },
  { name: "Ghetsis", set: "Plasma Freeze", setYear: 2013, cardNumber: "101/116", language: "en", variant: "Reverse Holo", rarity: "Rare Holo", category: "snorlax_cameo", notes: "Snorlax on monitor — reverse holo" },
  { name: "Chansey", set: "Twilight Masquerade", setYear: 2024, cardNumber: "187/167", language: "en", variant: "Illustration Rare", rarity: "Illustration Rare", category: "snorlax_cameo", notes: "Snorlax sitting in Pokemon Center background" },
  { name: "Excadrill", set: "Temporal Forces", setYear: 2024, cardNumber: "174/162", language: "en", variant: "Illustration Rare", rarity: "Illustration Rare", category: "snorlax_cameo", notes: "Snorlax on a can in mining scene" },
  { name: "Milcery", set: "Stellar Crown", setYear: 2024, cardNumber: "152/142", language: "en", variant: "Illustration Rare", rarity: "Illustration Rare", category: "snorlax_cameo", notes: "Snorlax-shaped bowl in candy shop" },
  { name: "Hop's Snorlax", set: "Scarlet & Violet Promos", setYear: 2025, cardNumber: "184", language: "en", variant: null, rarity: "Promo", category: "snorlax_pokemon", notes: "Journey Together Build & Battle prerelease promo" },
  { name: "Hop's Snorlax", set: "Scarlet & Violet Promos", setYear: 2025, cardNumber: "184", language: "en", variant: "Staff Prerelease", rarity: "Promo", category: "snorlax_premium", notes: "Gold Staff stamp — event organizer exclusive" },
  { name: "Hop's Snorlax", set: "Journey Together", setYear: 2025, cardNumber: "117/159", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "Hop's Snorlax — main set version" },
  { name: "Hop's Snorlax", set: "Journey Together", setYear: 2025, cardNumber: "117/159", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: "Hop's Snorlax reverse holo" },

  // === MUNCHLAX (Snorlax pre-evolution) ===
  { name: "Munchlax", set: "Diamond & Pearl", setYear: 2007, cardNumber: "33/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_cameo", notes: "Munchlax — Snorlax pre-evolution" },
  { name: "Munchlax", set: "Diamond & Pearl", setYear: 2007, cardNumber: "33/130", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_cameo", notes: "Munchlax reverse holo" },
  { name: "Munchlax", set: "Majestic Dawn", setYear: 2008, cardNumber: "68/100", language: "en", variant: null, rarity: "Common", category: "snorlax_cameo", notes: "Munchlax — Snorlax pre-evolution" },
  { name: "Munchlax", set: "Majestic Dawn", setYear: 2008, cardNumber: "68/100", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_cameo", notes: "Munchlax reverse holo" },
  { name: "Munchlax", set: "Rising Rivals", setYear: 2009, cardNumber: "69/120", language: "en", variant: null, rarity: "Common", category: "snorlax_cameo", notes: "Munchlax — Snorlax pre-evolution" },
  { name: "Munchlax", set: "Rising Rivals", setYear: 2009, cardNumber: "69/120", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_cameo", notes: "Munchlax reverse holo" },
  { name: "Munchlax", set: "Rising Rivals", setYear: 2009, cardNumber: "70/120", language: "en", variant: null, rarity: "Common", category: "snorlax_cameo", notes: "Munchlax — Snorlax pre-evolution" },
  { name: "Munchlax", set: "Rising Rivals", setYear: 2009, cardNumber: "70/120", language: "en", variant: "Reverse Holo", rarity: "Common", category: "snorlax_cameo", notes: "Munchlax reverse holo" },
  { name: "Munchlax", set: "Unified Minds", setYear: 2019, cardNumber: "173/260", language: "en", variant: null, rarity: "Uncommon", category: "snorlax_cameo", notes: "Munchlax — Snorlax pre-evolution" },
  { name: "Munchlax", set: "Unified Minds", setYear: 2019, cardNumber: "173/260", language: "en", variant: "Reverse Holo", rarity: "Uncommon", category: "snorlax_cameo", notes: "Munchlax reverse holo" },

  // === JAPANESE VERSIONS OF KEY PREMIUM CARDS ===
  { name: "Snorlax", set: "Jungle", setYear: 1997, cardNumber: "11/48", language: "jp", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Japanese Jungle Holo — released 2 years before English" },
  { name: "Snorlax", set: "Jungle", setYear: 1997, cardNumber: "27/48", language: "jp", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: "Japanese Jungle Non-Holo" },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2019, cardNumber: "142/216", language: "jp", variant: null, rarity: "Rare Holo VMAX", category: "snorlax_premium", notes: "Japanese VMAX — Gigantamax form" },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2019, cardNumber: "141/216", language: "jp", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Japanese Full Art V" },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "206/216", language: "jp", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Japanese Rainbow Rare VMAX" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "171/198", language: "jp", variant: "Full Art", rarity: "Rare Ultra", category: "snorlax_premium", notes: "Japanese Full Art Tag Team" },
  { name: "Eevee & Snorlax-GX", set: "Team Up", setYear: 2019, cardNumber: "191/198", language: "jp", variant: "Rainbow Rare", rarity: "Rare Rainbow", category: "snorlax_premium", notes: "Japanese Rainbow Rare Tag Team" },
  { name: "Snorlax", set: "Chilling Reign", setYear: 2021, cardNumber: "224/233", language: "jp", variant: "Gold Secret", rarity: "Rare Secret", category: "snorlax_premium", notes: "Japanese Gold Secret Rare" },
  { name: "Snorlax", set: "Paldean Fates", setYear: 2024, cardNumber: "202/245", language: "jp", variant: "Shiny", rarity: "Shiny Rare", category: "snorlax_premium", notes: "Japanese Shiny Snorlax" },
  { name: "Snorlax ex", set: "Prismatic Evolutions", setYear: 2025, cardNumber: "76/180", language: "jp", variant: null, rarity: "Double Rare", category: "snorlax_premium", notes: "Japanese Snorlax ex" },

  // === JAPANESE EXCLUSIVE CARDS (never released in English) ===
  { name: "LaRousse's Munchlax", set: "Movie VS Pack: Deoxys", setYear: 2004, cardNumber: "006/019", language: "jp", variant: null, rarity: "Rare", category: "snorlax_cameo", notes: "First Gen IV Pokemon card ever printed — JP movie promo exclusive" },
  { name: "PokePark's Munchlax", set: "PokePark Forest", setYear: 2005, cardNumber: "008/009", language: "jp", variant: null, rarity: "Promo", category: "snorlax_cameo", notes: "PokePark attraction exclusive — never released in English" },
  { name: "May's Munchlax", set: "Movie VS Pack: Lucario", setYear: 2005, cardNumber: "008/020", language: "jp", variant: null, rarity: "Rare", category: "snorlax_cameo", notes: "JP movie half-deck exclusive — tied to Lucario and the Mystery of Mew" },
  { name: "Rota's Munchlax", set: "PCG-P Promos", setYear: 2005, cardNumber: "088/PCG-P", language: "jp", variant: null, rarity: "Promo", category: "snorlax_cameo", notes: "McDonald's Japan exclusive promo — never released in English" },

  // === JAPANESE PROMO VARIANTS (distinct printings with unique branding) ===
  { name: "Snorlax", set: "XY-P Promos", setYear: 2015, cardNumber: "149/XY-P", language: "jp", variant: "Marumiya Promo", rarity: "Promo", category: "snorlax_pokemon", notes: "Marumiya food promo — unique logo printing" },
  { name: "Snorlax", set: "XY-P Promos", setYear: 2016, cardNumber: "261/XY-P", language: "jp", variant: "Daiichi Pan Promo", rarity: "Promo", category: "snorlax_pokemon", notes: "Daiichi Pan promo — retro 20th anniversary layout" },
  { name: "Snorlax-GX", set: "SM-P Promos", setYear: 2016, cardNumber: "001/SM-P", language: "jp", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "Sun & Moon game pre-order bonus — first SM promo" },
  { name: "Snorlax", set: "S-P Promos", setYear: 2021, cardNumber: "156/S-P", language: "jp", variant: "CoroCoro Promo", rarity: "Promo", category: "snorlax_pokemon", notes: "CoroCoro Ichiban! magazine insert — unique holofoil" },
  { name: "Eevee & Snorlax-GX", set: "SM-P Promos", setYear: 2019, cardNumber: "297/SM-P", language: "jp", variant: null, rarity: "Promo", category: "snorlax_premium", notes: "Pokemon Card Gym venue promo — Tag Team" },
];
