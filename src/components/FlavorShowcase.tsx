"use client";

import { products } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type FlavorEntry = {
  productSlug: string;
  productName: string;
  flavorId: string;
  name: string;
  notes: string;
  image: string;
  accent: string;
};

const allFlavors: FlavorEntry[] = products.flatMap((p) =>
  p.flavors.map((f) => ({
    productSlug: p.slug,
    productName: p.name,
    flavorId: f.id,
    name: f.name,
    notes: f.notes,
    image: f.image,
    accent: f.accent,
  })),
);

const ANCHOR_FLAVOR = allFlavors.find(
  (f) => f.flavorId === "blue-razz" && f.productSlug === "tiktok-60k",
)!;

const rotatables: FlavorEntry[] = allFlavors.filter(
  (f) => !(f.flavorId === ANCHOR_FLAVOR.flavorId && f.productSlug === ANCHOR_FLAVOR.productSlug),
);

function Starburst({
  className,
  size = 64,
  fill = "#FFD93D",
}: {
  className?: string;
  size?: number;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <polygon
        fill={fill}
        points="50,0 60,30 92,15 75,45 100,55 70,62 88,90 56,75 50,100 44,75 12,90 30,62 0,55 25,45 8,15 40,30"
      />
    </svg>
  );
}

function FlavorCard({
  flavor,
  badge,
  tilt,
  size = "side",
}: {
  flavor: FlavorEntry;
  badge: string;
  tilt: string;
  size?: "side" | "hero";
}) {
  const isHero = size === "hero";

  return (
    <Link
      href={`/products/${flavor.productSlug}`}
      className="relative block"
      style={{ transform: `rotate(${tilt})` }}
    >
      <div className="absolute -inset-1.5 -z-10 rounded-[28px] bg-brand-ink" />
      <div
        className={`relative overflow-hidden rounded-[24px] border-2 border-brand-ink bg-brand-cream transition hover:-translate-x-0.5 hover:-translate-y-0.5 ${
          isHero ? "shadow-[8px_8px_0_0_#1A0606]" : "shadow-[5px_5px_0_0_#1A0606]"
        }`}
      >
        <div className={`relative ${isHero ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
          <Image
            src={flavor.image}
            alt={flavor.name}
            fill
            sizes={isHero ? "(min-width: 1024px) 30vw, 70vw" : "(min-width: 1024px) 22vw, 45vw"}
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-transparent to-transparent" />

          <span
            aria-hidden
            className={`absolute -left-2 top-4 rotate-[-8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2.5 py-0.5 font-display shadow-[2px_2px_0_0_#1A0606] ${
              isHero ? "text-base" : "text-xs"
            }`}
          >
            {badge}
          </span>

          <span
            aria-hidden
            className={`absolute right-3 top-3 grid place-items-center rounded-full border-2 border-brand-ink shadow-[3px_3px_0_0_#1A0606] ${
              isHero ? "h-14 w-14" : "h-10 w-10"
            }`}
            style={{ background: flavor.accent }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cream" />
          </span>

          <div className={`absolute inset-x-0 bottom-0 ${isHero ? "p-5" : "p-3"}`}>
            <p
              className={`font-semibold uppercase tracking-[0.18em] text-brand-cream/75 ${
                isHero ? "text-[10px]" : "text-[9px]"
              }`}
            >
              {flavor.productName}
            </p>
            <p
              className={`mt-1 font-display leading-tight text-brand-cream ${
                isHero ? "text-3xl md:text-4xl" : "text-lg md:text-xl"
              }`}
            >
              {flavor.name}
            </p>
            {isHero ? (
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-brand-cream/70">
                {flavor.notes}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FlavorShowcase() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setLeftIndex((i) => (i + 2) % rotatables.length);
      setRightIndex((i) => (i + 2) % rotatables.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const leftFlavor = rotatables[leftIndex];
  const rightFlavor = rotatables[rightIndex];

  const cardMotion = {
    initial: { opacity: 0, y: 30, scale: 0.92 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.92 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section
      id="flavors"
      className="relative overflow-hidden bg-brand-cream py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(226,42,42,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative inline-flex items-center gap-2.5 rounded-full bg-brand-ink px-5 py-1.5 text-brand-cream">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
              Combo of the month
            </span>
            <span className="absolute -right-3 -top-3 rounded-full bg-brand-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-cream">
              HOT
            </span>
          </div>

          <h2 className="relative font-display text-5xl leading-[0.9] text-brand-ink text-balance sm:text-6xl md:text-7xl lg:text-[100px]">
            <span className="relative inline-block">
              Three drops,
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-2 origin-left -rotate-1 rounded-full bg-brand-red md:h-2.5"
              />
            </span>{" "}
            <br className="md:hidden" />
            <span className="relative inline-block text-brand-red">
              one combo
              <Starburst
                className="absolute -right-12 -top-6 hidden md:block"
                size={56}
                fill="#FFD93D"
              />
            </span>
          </h2>

          <p className="mt-2 max-w-xl text-brand-ink/70">
            Our signature flavor pinned in the middle, surrounded by two
            rotating picks. Watch the combo shuffle every few seconds.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-6 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="relative h-[360px] md:h-[480px] lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`L-${leftFlavor.productSlug}-${leftFlavor.flavorId}`}
                {...cardMotion}
                className="absolute inset-0"
              >
                <FlavorCard
                  flavor={leftFlavor}
                  badge={`№${String(leftIndex + 1).padStart(2, "0")}`}
                  tilt="-3deg"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 md:scale-110">
            <div className="relative">
              <FlavorCard
                flavor={ANCHOR_FLAVOR}
                badge="ANCHOR"
                tilt="0deg"
                size="hero"
              />
              <Starburst
                className="pointer-events-none absolute -bottom-4 -right-4 rotate-[15deg]"
                size={56}
                fill="#FFD93D"
              />
            </div>
          </div>

          <div className="relative h-[360px] md:h-[480px] lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`R-${rightFlavor.productSlug}-${rightFlavor.flavorId}`}
                {...cardMotion}
                className="absolute inset-0"
              >
                <FlavorCard
                  flavor={rightFlavor}
                  badge={`№${String(rightIndex + 1).padStart(2, "0")}`}
                  tilt="3deg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-14">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products/tiktok-60k"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-red px-7 py-3.5 font-display text-base text-brand-cream shadow-[5px_5px_0_0_#1A0606] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1A0606] md:text-lg"
            >
              Taste the combo
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-cream px-7 py-3 font-display text-base text-brand-ink shadow-[5px_5px_0_0_#1A0606] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1A0606] md:text-lg"
            >
              See all flavors
            </Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
            Anchor stays fixed · Sides shuffle every 3 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
