"use client";

import type { ViewMode, CaughtFilter } from "@/hooks/use-filters";

interface FilterBarProps {
  language: string;
  setLanguage: (v: string) => void;
  rarity: string;
  setRarity: (v: string) => void;
  variant: string;
  setVariant: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  caughtFilter: CaughtFilter;
  setCaughtFilter: (v: CaughtFilter) => void;
}

const CAUGHT_FILTERS: { label: string; value: CaughtFilter }[] = [
  { label: "ALL", value: "all" },
  { label: "WILD", value: "wild" },
  { label: "CAUGHT", value: "caught" },
];

export function FilterBar({
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
}: FilterBarProps) {
  const pillClass = (active: boolean) =>
    `rounded-full px-3 py-1 text-xs font-bold tracking-wider transition-colors ${
      active
        ? "bg-snorlax-body text-dex-cyan"
        : "bg-transparent hover:bg-snorlax-belly-dark"
    }`;
  const pillStyle = (active: boolean) =>
    active
      ? { border: "1px solid transparent" }
      : { border: "1px solid #c4b8a8" };

  return (
    <div
      className="flex flex-col gap-3 rounded-lg border p-4 font-mono"
      style={{ borderColor: "#c4b8a8", color: "#6b5c4c" }}
    >
      {/* Row 1: Caught + Language + View mode */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-1">
          {CAUGHT_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              aria-pressed={caughtFilter === value}
              onClick={() => setCaughtFilter(value)}
              className={pillClass(caughtFilter === value)}
              style={pillStyle(caughtFilter === value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          className="mx-1 h-5 w-px"
          style={{ backgroundColor: "#c4b8a8" }}
        />
        <div className="flex gap-1">
          {["EN", "JP"].map((lang) => (
            <button
              key={lang}
              type="button"
              aria-pressed={language === lang}
              onClick={() => setLanguage(language === lang ? "" : lang)}
              className={pillClass(language === lang)}
              style={pillStyle(language === lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <div
          className="mx-1 h-5 w-px"
          style={{ backgroundColor: "#c4b8a8" }}
        />
        <div className="flex gap-1">
          {(["bySet", "byCard"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              aria-pressed={viewMode === mode}
              onClick={() => setViewMode(mode)}
              className={pillClass(viewMode === mode)}
              style={pillStyle(viewMode === mode)}
            >
              {mode === "bySet" ? "BY SET" : "BY CARD"}
            </button>
          ))}
        </div>
      </div>
      {/* Row 2: Dropdowns + Search */}
      <div className="flex flex-wrap items-center gap-2">
        <select
          aria-label="Rarity"
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
          className="rounded border bg-transparent px-2 py-1 font-mono text-xs"
          style={{ borderColor: "#c4b8a8" }}
        >
          <option value="">All Rarities</option>
          {[
            "Common",
            "Uncommon",
            "Rare",
            "Rare Holo",
            "Ultra Rare",
            "Secret Rare",
          ].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          aria-label="Variant"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          className="rounded border bg-transparent px-2 py-1 font-mono text-xs"
          style={{ borderColor: "#c4b8a8" }}
        >
          <option value="">All Variants</option>
          {["Normal", "Holo", "Reverse Holo", "Full Art", "Alt Art"].map(
            (v) => (
              <option key={v} value={v}>
                {v}
              </option>
            )
          )}
        </select>
        <div className="relative ml-auto flex-1" style={{ minWidth: "180px" }}>
          <input
            type="text"
            placeholder="Search cards..."
            aria-label="Search cards by name, set, or number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border bg-transparent py-1 pl-3 pr-3 font-mono text-xs placeholder:text-[#9a8b78]"
            style={{ borderColor: "#c4b8a8" }}
          />
        </div>
      </div>
    </div>
  );
}
