"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  floatingZzz,
  pokeBallPulse,
  shimmerGradient,
  shimmerAnimation,
} from "@/lib/animations/variants";

export interface CardData {
  id: number;
  name: string;
  set: string;
  setYear: number;
  cardNumber: string;
  language: string;
  variant: string;
  rarity: string;
  imageUrl: string | null;
  category: string;
}

interface CardTileProps {
  card: CardData;
  owned: boolean;
  onClick: (card: CardData) => void;
}

const HOLO_RARITIES = ["Rare Holo", "Ultra Rare", "Secret Rare"];

export function CardTile({ card, owned, onClick }: CardTileProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(card)}
      aria-label={`${card.name}, ${card.set} ${card.cardNumber}, ${card.language}, ${card.variant}${owned ? ", Caught" : ", Wild"}`}
      className="relative w-full text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-dex-cyan"
      style={{ aspectRatio: "5 / 7" }}
    >
      {owned ? <CaughtTile card={card} /> : <WildTile card={card} />}
    </button>
  );
}

function CaughtTile({ card }: { card: CardData }) {
  const isHolo = HOLO_RARITIES.includes(card.rarity);

  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden rounded-lg"
      style={{
        backgroundColor: "#2b4162",
        border: "2px solid #7ec8e3",
        boxShadow: "0 0 12px rgba(126,200,227,0.4)",
      }}
    >
      {/* Holo shimmer overlay */}
      {isHolo && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-lg"
          style={shimmerGradient}
          animate={shimmerAnimation}
        />
      )}
      {/* Pokeball pulse dot */}
      <motion.div
        className="absolute right-2 top-2 z-10 h-1.5 w-1.5 rounded-full bg-pokeball-red"
        variants={pokeBallPulse}
        initial="initial"
        animate="pulse"
      />
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {card.imageUrl ? (
          <Image
            src={card.imageUrl}
            alt={`${card.name} - ${card.cardNumber}`}
            fill
            loading="lazy"
            quality={75}
            className="object-contain p-1"
            sizes="(max-width: 768px) 25vw, 20vw"
          />
        ) : (
          <CardPlaceholder card={card} caught />
        )}
      </div>
      <div className="flex items-center justify-between px-2 pb-1.5 pt-1">
        <span className="font-mono text-[10px] text-gray-300">
          {card.cardNumber}
        </span>
        <LanguageBadge language={card.language} dimmed={false} />
      </div>
      <div className="pb-1.5 text-center">
        <span className="font-mono text-[9px] font-bold tracking-widest text-pokeball-red">
          CAUGHT
        </span>
      </div>
    </div>
  );
}

function WildTile({ card }: { card: CardData }) {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden rounded-lg"
      style={{
        backgroundColor: "rgba(43,65,98,0.12)",
        border: "1.5px dashed #b8a990",
        opacity: 0.4,
      }}
    >
      {/* Floating zzz */}
      <div className="absolute right-2 top-2 z-10">
        {[0, 0.4, 0.8].map((delay, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-xs"
            style={{
              color: "#9a8b78",
              right: `${i * 6}px`,
              top: `${i * -4}px`,
            }}
            variants={floatingZzz(delay)}
            initial="initial"
            animate="animate"
          >
            z
          </motion.span>
        ))}
      </div>
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {card.imageUrl ? (
          <Image
            src={card.imageUrl}
            alt={`${card.name} - ${card.cardNumber}`}
            fill
            loading="lazy"
            quality={75}
            className="object-contain p-1 grayscale"
            sizes="(max-width: 768px) 25vw, 20vw"
          />
        ) : (
          <CardPlaceholder card={card} caught={false} />
        )}
      </div>
      <div className="flex items-center justify-between px-2 pb-1.5 pt-1">
        <span className="font-mono text-[10px]" style={{ color: "#9a8b78" }}>
          {card.cardNumber}
        </span>
        <LanguageBadge language={card.language} dimmed />
      </div>
      <div className="pb-1.5 text-center">
        <span
          className="font-mono text-[9px] font-bold tracking-widest"
          style={{ color: "#9a8b78" }}
        >
          WILD
        </span>
      </div>
    </div>
  );
}

function CardPlaceholder({
  card,
  caught,
}: {
  card: CardData;
  caught: boolean;
}) {
  const c = caught ? "text-gray-400" : "text-[#9a8b78]";
  return (
    <div
      className={`flex flex-col items-center gap-1 p-3 text-center ${c}`}
    >
      <span className="font-mono text-xs font-semibold">{card.set}</span>
      <span className="font-mono text-[10px]">{card.cardNumber}</span>
      <span className="font-mono text-[9px] italic">{card.variant}</span>
    </div>
  );
}

function LanguageBadge({
  language,
  dimmed,
}: {
  language: string;
  dimmed: boolean;
}) {
  return (
    <span
      className="rounded-full px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase"
      style={{
        backgroundColor: dimmed
          ? "rgba(184,169,144,0.3)"
          : "rgba(126,200,227,0.2)",
        color: dimmed ? "#9a8b78" : "#7ec8e3",
      }}
    >
      {language}
    </span>
  );
}
