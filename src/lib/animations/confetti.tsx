"use client";

import { motion, AnimatePresence } from "framer-motion";
import { confettiBurst } from "./variants";

const COLORS = ["#e94560", "#7ec8e3", "#f0e6d3", "#ffd700", "#4ade80"];

export function Confetti({
  active,
  originX = 0,
  originY = 0,
}: {
  active: boolean;
  originX?: number;
  originY?: number;
}) {
  return (
    <AnimatePresence>
      {active && (
        <div
          className="pointer-events-none absolute z-50"
          style={{ left: originX, top: originY }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
              variants={confettiBurst(i)}
              initial="initial"
              animate="burst"
              exit={{ opacity: 0 }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
