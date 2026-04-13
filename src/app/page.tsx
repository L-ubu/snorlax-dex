"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/header/header";
import { FilterBar } from "@/components/filters/filter-bar";
import { CardGrid } from "@/components/card-grid/card-grid";
import { CardDetail } from "@/components/card-detail/card-detail";
import { useFilters } from "@/hooks/use-filters";
import { useZoom } from "@/hooks/use-zoom";
import type { CardData } from "@/components/card-tile/card-tile";

interface CardWithOwnership extends CardData {
  owned: boolean;
}

interface SelectedCard {
  id: number;
  name: string;
  set: string;
  setYear: number;
  cardNumber: string;
  language: string;
  variant: string;
  rarity: string;
  notes?: string | null;
  imageUrl?: string | null;
  caught: boolean;
}

export default function HomePage() {
  const filters = useFilters();
  const { zoom, zoomIn, zoomOut } = useZoom();
  const [cards, setCards] = useState<CardWithOwnership[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<SelectedCard | null>(null);

  const fetchCards = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams(filters.computeFilterParams());
      const [cardsRes, colRes] = await Promise.all([
        fetch(`/api/cards?${params}`),
        fetch("/api/collection"),
      ]);
      const cardsData: CardData[] = await cardsRes.json();
      const colData: { collectionId: number; owned: boolean; card: CardData }[] =
        await colRes.json();
      const ownedIds = new Set(
        colData.filter((c) => c.owned).map((c) => c.card.id)
      );
      setCards(cardsData.map((c) => ({ ...c, owned: ownedIds.has(c.id) })));
    } finally {
      setLoading(false);
    }
  }, [filters.computeFilterParams]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleCardClick = useCallback(
    (card: CardData) => {
      const withOwnership = cards.find((c) => c.id === card.id);
      setSelectedCard({
        ...card,
        caught: withOwnership?.owned ?? false,
      });
    },
    [cards]
  );

  const handleToggleCaught = useCallback(
    async (cardId: number) => {
      await fetch("/api/collection/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId }),
      });
      setCards((prev) =>
        prev.map((c) => (c.id === cardId ? { ...c, owned: !c.owned } : c))
      );
      setSelectedCard((prev) =>
        prev && prev.id === cardId ? { ...prev, caught: !prev.caught } : prev
      );
    },
    []
  );

  const caught = cards.filter((c) => c.owned).length;

  return (
    <>
      <Header caught={caught} total={cards.length} />
      <main className="belly-gradient min-h-screen pt-40">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-6">
          <FilterBar
            language={filters.language}
            setLanguage={filters.setLanguage}
            rarity={filters.rarity}
            setRarity={filters.setRarity}
            variant={filters.variant}
            setVariant={filters.setVariant}
            search={filters.search}
            setSearch={filters.setSearch}
            viewMode={filters.viewMode}
            setViewMode={filters.setViewMode}
            caughtFilter={filters.caughtFilter}
            setCaughtFilter={filters.setCaughtFilter}
          />
          <div className="mt-6">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <span
                  className="animate-pulse font-mono text-sm"
                  style={{ color: "#9a8b78" }}
                >
                  zzz... loading cards...
                </span>
              </div>
            ) : (
              <CardGrid
                cards={cards}
                zoom={zoom}
                viewMode={filters.viewMode}
                caughtFilter={filters.caughtFilter}
                onCardClick={handleCardClick}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
              />
            )}
          </div>
        </div>
      </main>
      <CardDetail
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onToggleCaught={handleToggleCaught}
      />
    </>
  );
}
