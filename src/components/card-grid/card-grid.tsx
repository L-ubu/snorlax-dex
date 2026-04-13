"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CardTile, type CardData } from "@/components/card-tile/card-tile";
import { SetDivider } from "./set-divider";
import { CategoryTile } from "./category-tile";
import { ZoomControls } from "./zoom-controls";
import {
  staggerChildren,
  staggerItem,
  setDividerSlide,
} from "@/lib/animations/variants";
import type { CaughtFilter, ViewMode } from "@/hooks/use-filters";

interface CardWithOwnership extends CardData {
  owned: boolean;
}

interface CardGridProps {
  cards: CardWithOwnership[];
  zoom: number;
  viewMode: ViewMode;
  caughtFilter: CaughtFilter;
  onCardClick: (card: CardData) => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
}

function groupBySet(cards: CardWithOwnership[]) {
  const m = new Map<string, { year: number; cards: CardWithOwnership[] }>();
  for (const c of cards) {
    const e = m.get(c.set);
    if (e) e.cards.push(c);
    else m.set(c.set, { year: c.setYear, cards: [c] });
  }
  return m;
}

function groupByCategory(cards: CardWithOwnership[]) {
  const m = new Map<string, { caught: number; total: number }>();
  for (const c of cards) {
    const e = m.get(c.category);
    if (e) {
      e.total++;
      if (c.owned) e.caught++;
    } else {
      m.set(c.category, { caught: c.owned ? 1 : 0, total: 1 });
    }
  }
  return m;
}

const GRID: Record<number, string> = {
  2: "grid grid-cols-4 gap-2 md:grid-cols-5",
  3: "grid grid-cols-2 gap-3 md:grid-cols-3",
  4: "grid grid-cols-1 gap-4 md:grid-cols-2",
};

export function CardGrid({
  cards,
  zoom,
  viewMode,
  caughtFilter,
  onCardClick,
  onZoomIn,
  onZoomOut,
}: CardGridProps) {
  const filtered = useMemo(() => {
    if (caughtFilter === "all") return cards;
    return cards.filter((c) =>
      caughtFilter === "caught" ? c.owned : !c.owned
    );
  }, [cards, caughtFilter]);

  if (zoom === 1) {
    const cats = groupByCategory(cards);
    return (
      <div className="relative">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from(cats.entries()).map(([cat, { caught, total }]) => (
            <CategoryTile
              key={cat}
              title={cat}
              caught={caught}
              total={total}
              onClick={() => {}}
            />
          ))}
        </div>
        {onZoomIn && onZoomOut && (
          <ZoomControls zoom={zoom} zoomIn={onZoomIn} zoomOut={onZoomOut} />
        )}
      </div>
    );
  }

  const gridClass = GRID[zoom] || GRID[3];
  const setGroups = groupBySet(filtered);

  return (
    <div className="relative">
      <motion.div
        className={gridClass}
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {Array.from(setGroups.entries()).map(
          ([setName, { year, cards: setCards }]) => (
            <SetGroupSection
              key={setName}
              setName={setName}
              year={year}
              cards={setCards}
              onCardClick={onCardClick}
            />
          )
        )}
      </motion.div>
      {onZoomIn && onZoomOut && (
        <ZoomControls zoom={zoom} zoomIn={onZoomIn} zoomOut={onZoomOut} />
      )}
    </div>
  );
}

function SetGroupSection({
  setName,
  year,
  cards,
  onCardClick,
}: {
  setName: string;
  year: number;
  cards: CardWithOwnership[];
  onCardClick: (card: CardData) => void;
}) {
  return (
    <>
      <motion.div className="col-span-full" variants={setDividerSlide}>
        <SetDivider setName={setName} year={year} />
      </motion.div>
      {cards.map((card) => (
        <motion.div key={card.id} variants={staggerItem}>
          <CardTile
            card={card}
            owned={card.owned}
            onClick={onCardClick}
          />
        </motion.div>
      ))}
    </>
  );
}
