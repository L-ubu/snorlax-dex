import type { Variants } from "framer-motion";

export const cardFlip: Variants = {
  initial: { rotateY: 0 },
  flip: {
    rotateY: 360,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

export const confettiBurst = (i: number): Variants => {
  const angle = (i / 12) * Math.PI * 2;
  const dist = 60 + Math.random() * 40;
  return {
    initial: { x: 0, y: 0, scale: 1, opacity: 1 },
    burst: {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist - 30,
      scale: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };
};

export const floatingZzz = (delay: number): Variants => ({
  initial: { y: 0, opacity: 0.7 },
  animate: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
});

export const pokeBallPulse: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.15, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const setDividerSlide: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

export const shimmerGradient = {
  backgroundSize: "200% 200%",
  backgroundImage:
    "linear-gradient(135deg, rgba(255,0,0,0.08), rgba(255,165,0,0.08), rgba(255,255,0,0.08), rgba(0,255,0,0.08), rgba(0,127,255,0.08), rgba(139,0,255,0.08), rgba(255,0,0,0.08))",
};

export const shimmerAnimation = {
  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear" as const,
  },
};
