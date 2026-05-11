"use client";

import { site } from "@/lib/site";
import clsx from "clsx";
import { motion, type Variants } from "framer-motion";

const sizeMap = {
  sm: {
    primary: 24,
    label: 8,
    labelPadX: 6,
    labelPadY: 1,
    gap: 3,
    tracking: "0.38em",
    dotSize: 3,
  },
  md: {
    primary: 36,
    label: 10,
    labelPadX: 8,
    labelPadY: 2,
    gap: 4,
    tracking: "0.45em",
    dotSize: 3.5,
  },
  lg: {
    primary: 56,
    label: 13,
    labelPadX: 10,
    labelPadY: 3,
    gap: 6,
    tracking: "0.5em",
    dotSize: 5,
  },
};

const wordVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  hover: {
    transition: { staggerChildren: 0.04 },
  },
};

const letterVariants: Variants = {
  hidden: { y: -30, opacity: 0, rotate: -10 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 380, damping: 16 },
  },
  hover: {
    y: [0, -8, 0],
    rotate: [0, -4, 0],
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const bannerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0, rotate: -2 },
  visible: {
    scaleX: 1,
    opacity: 1,
    rotate: -2,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
      delay: 0.4,
    },
  },
  hover: {
    rotate: 0,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 14, delay: 0.55 },
  },
  hover: {
    scale: [1, 1.6, 1],
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Logo({
  className,
  tone = "ink",
  size = "md",
}: {
  className?: string;
  tone?: "ink" | "cream";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];
  const primaryDark = tone === "ink" ? "text-brand-ink" : "text-brand-cream";
  const primaryAccent =
    tone === "ink" ? "text-brand-red" : "text-brand-cream-deep";
  const bannerBg = tone === "ink" ? "bg-brand-red" : "bg-brand-cream";
  const bannerText = tone === "ink" ? "text-brand-cream" : "text-brand-red";
  const bannerDot = tone === "ink" ? "bg-brand-cream/70" : "bg-brand-red/70";

  const tik = "Tik".split("");
  const tok = "Tok".split("");

  return (
    <motion.a
      href="/"
      aria-label={`${site.name} home`}
      className={clsx("group inline-block leading-none", className)}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.span
        className={clsx("flex items-baseline font-display leading-none")}
        style={{ fontSize: s.primary }}
        variants={wordVariants}
      >
        <span className={clsx("flex items-baseline", primaryDark)}>
          {tik.map((c, i) => (
            <motion.span
              key={`tik-${i}`}
              variants={letterVariants}
              className="inline-block"
              style={{ transformOrigin: "50% 100%" }}
            >
              {c}
            </motion.span>
          ))}
        </span>
        <span className={clsx("flex items-baseline", primaryAccent)}>
          {tok.map((c, i) => (
            <motion.span
              key={`tok-${i}`}
              variants={letterVariants}
              className="inline-block"
              style={{ transformOrigin: "50% 100%" }}
            >
              {c}
            </motion.span>
          ))}
        </span>
      </motion.span>

      <motion.div
        className="origin-left"
        style={{ marginTop: s.gap }}
        variants={bannerVariants}
      >
        <div
          className={clsx(
            "flex items-center justify-center rounded-[3px] font-display uppercase leading-none",
            bannerBg,
            bannerText,
          )}
          style={{
            fontSize: s.label,
            paddingInline: s.labelPadX,
            paddingBlock: s.labelPadY,
            letterSpacing: s.tracking,
          }}
        >
          <motion.span
            className={clsx("rounded-full", bannerDot)}
            style={{
              height: s.dotSize,
              width: s.dotSize,
              marginRight: s.labelPadX,
            }}
            variants={dotVariants}
            aria-hidden
          />
          Vape
          <motion.span
            className={clsx("rounded-full", bannerDot)}
            style={{
              height: s.dotSize,
              width: s.dotSize,
              marginLeft: s.labelPadX,
            }}
            variants={dotVariants}
            aria-hidden
          />
        </div>
      </motion.div>
    </motion.a>
  );
}
