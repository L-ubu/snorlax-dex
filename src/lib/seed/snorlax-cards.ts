export interface SeedCardEntry {
  name: string;
  set: string;
  setYear: number;
  cardNumber: string;
  language: "en" | "jp";
  variant: string | null;
  rarity: string;
  category: "snorlax_pokemon" | "snorlax_artwork";
  notes: string | null;
}

export const snorlaxCards: SeedCardEntry[] = [
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "Holo 1st Edition", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "1st Edition Jungle Holo" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "11/64", language: "en", variant: "Holo Unlimited", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Jungle", setYear: 1997, cardNumber: "11/64", language: "jp", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: "Japanese Jungle Holo" },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "27/64", language: "en", variant: "Non-Holo 1st Edition", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Jungle", setYear: 1999, cardNumber: "27/64", language: "en", variant: "Non-Holo Unlimited", rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Base Set 2", setYear: 2000, cardNumber: "30/130", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Legendary Collection", setYear: 2002, cardNumber: "64/110", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Legendary Collection", setYear: 2002, cardNumber: "64/110", language: "en", variant: "Reverse Holo", rarity: "Rare", category: "snorlax_pokemon", notes: "Box topper pattern" },
  { name: "Snorlax", set: "Skyridge", setYear: 2003, cardNumber: "100/144", language: "en", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "FireRed & LeafGreen", setYear: 2004, cardNumber: "15/112", language: "en", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "FireRed & LeafGreen", setYear: 2004, cardNumber: "15/112", language: "jp", variant: "Holo", rarity: "Rare Holo", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax LV.X", set: "Rising Rivals", setYear: 2009, cardNumber: "111/111", language: "en", variant: null, rarity: "Ultra Rare", category: "snorlax_pokemon", notes: null },
  { name: "Sleep!", set: "Team Rocket", setYear: 2000, cardNumber: "79/82", language: "en", variant: "1st Edition", rarity: "Common", category: "snorlax_artwork", notes: "Trainer card featuring Snorlax" },
  { name: "Sleep!", set: "Team Rocket", setYear: 2000, cardNumber: "79/82", language: "en", variant: "Unlimited", rarity: "Common", category: "snorlax_artwork", notes: null },
  { name: "Snorlax", set: "Base Set 2", setYear: 2000, cardNumber: "30/130", language: "jp", variant: null, rarity: "Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax V", set: "Sword & Shield", setYear: 2020, cardNumber: "141/202", language: "en", variant: null, rarity: "Ultra Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "142/202", language: "en", variant: null, rarity: "Ultra Rare", category: "snorlax_pokemon", notes: "Gigantamax form" },
  { name: "Snorlax VMAX", set: "Sword & Shield", setYear: 2020, cardNumber: "142/202", language: "jp", variant: null, rarity: "Ultra Rare", category: "snorlax_pokemon", notes: null },
  { name: "Snorlax", set: "Obsidian Flames", setYear: 2023, cardNumber: "224/197", language: "en", variant: null, rarity: "Illustration Rare", category: "snorlax_pokemon", notes: "Sleeping in meadow art" },
  { name: "Snorlax", set: "Obsidian Flames", setYear: 2023, cardNumber: "224/197", language: "jp", variant: null, rarity: "Art Rare", category: "snorlax_pokemon", notes: null },
];
