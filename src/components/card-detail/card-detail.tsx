"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CardDetailCard {
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

interface CardDetailProps {
  card: CardDetailCard | null;
  onClose: () => void;
  onToggleCaught: (cardId: number) => void;
}

export function CardDetail({ card, onClose, onToggleCaught }: CardDetailProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!card) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [card, onClose]);

  const mobileV = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 },
    },
    exit: { y: "100%" },
  };
  const desktopV = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 },
    },
    exit: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {card && (
        <>
          <motion.div
            data-testid="card-detail-backdrop"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Details for ${card.name}`}
            tabIndex={-1}
            className={
              isDesktop
                ? "fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-snorlax-body shadow-2xl outline-none"
                : "fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-2xl bg-snorlax-body shadow-2xl outline-none"
            }
            variants={isDesktop ? desktopV : mobileV}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-snorlax-belly/20 text-snorlax-belly"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex justify-center">
                <div className="relative aspect-[5/7] w-full max-w-[280px] overflow-hidden rounded-xl bg-snorlax-belly/10">
                  {card.imageUrl ? (
                    <Image
                      src={card.imageUrl}
                      alt={card.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-mono text-sm text-snorlax-belly/20">
                      No image
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-snorlax-belly">
                  {card.name}
                </h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-snorlax-belly/70">Set</span>
                    <p className="font-medium text-snorlax-belly">
                      {card.set} ({card.setYear})
                    </p>
                  </div>
                  <div>
                    <span className="text-snorlax-belly/70">Number</span>
                    <p className="font-medium text-snorlax-belly">
                      {card.cardNumber}
                    </p>
                  </div>
                  <div>
                    <span className="text-snorlax-belly/70">Language</span>
                    <p className="font-medium text-snorlax-belly">
                      {card.language}
                    </p>
                  </div>
                  <div>
                    <span className="text-snorlax-belly/70">Variant</span>
                    <p className="font-medium text-snorlax-belly">
                      {card.variant}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-snorlax-belly/70">Rarity</span>
                    <p className="font-medium text-snorlax-belly">
                      {card.rarity}
                    </p>
                  </div>
                </div>
                {card.notes && (
                  <div>
                    <span className="text-sm text-snorlax-belly/70">Notes</span>
                    <p className="text-sm text-snorlax-belly">{card.notes}</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => onToggleCaught(card.id)}
                aria-label={card.caught ? "Release" : "Catch"}
                className={`flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-bold ${
                  card.caught
                    ? "bg-snorlax-belly/20 text-snorlax-belly"
                    : "bg-pokeball-red text-white shadow-lg shadow-pokeball-red/30"
                }`}
              >
                {card.caught ? "RELEASE" : "CATCH"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
