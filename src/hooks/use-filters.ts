"use client";

import { useState, useCallback, useMemo } from "react";

export type ViewMode = "bySet" | "byCard";
export type CaughtFilter = "all" | "wild" | "caught";

export function useFilters() {
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [rarity, setRarity] = useState("");
  const [variant, setVariant] = useState("");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("bySet");
  const [caughtFilter, setCaughtFilter] = useState<CaughtFilter>("all");

  const computeFilterParams = useCallback(() => {
    const p: Record<string, string> = {};
    if (category) p.category = category;
    if (language) p.language = language;
    if (rarity) p.rarity = rarity;
    if (variant) p.variant = variant;
    if (search) p.search = search;
    return p;
  }, [category, language, rarity, variant, search]);

  return useMemo(
    () => ({
      category,
      setCategory,
      language,
      setLanguage,
      rarity,
      setRarity,
      variant,
      setVariant,
      search,
      setSearch,
      viewMode,
      setViewMode,
      caughtFilter,
      setCaughtFilter,
      computeFilterParams,
    }),
    [
      category,
      language,
      rarity,
      variant,
      search,
      viewMode,
      caughtFilter,
      computeFilterParams,
    ]
  );
}
