export interface TcgApiCard {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[];
  number: string;
  rarity?: string;
  images: { small: string; large: string };
  set: { id: string; name: string; series: string; releaseDate: string };
  nationalPokedexNumbers?: number[];
}

export interface TcgApiResponse {
  data: TcgApiCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface NormalizedCard {
  name: string;
  set: string;
  setYear: number;
  cardNumber: string;
  language: string;
  rarity: string | null;
  imageUrl: string;
}
