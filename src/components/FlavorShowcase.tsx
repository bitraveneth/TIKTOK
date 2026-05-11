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
      className="relative block h-full w-full"
      style={{ transform: `rotate(${tilt})` }}
    >
      <div className="absolute -inset-1 -z-10 rounded-[26px] bg-brand-ink sm:-inset-1.5 sm:rounded-[28px]" />
      <div
        className={`relative h-full overflow-hidden rounded-[20px] border-2 border-brand-ink bg-brand-cream transition hover:-translate-x-0.5 hover:-translate-y-0.5 sm:rounded-[24px] ${
          isHero
            ? "shadow-[6px_6px_0_0_#1A0606] sm:shadow-[8px_8px_0_0_#1A0606]"
            : "shadow-[4px_4px_0_0_#1A0606] sm:shadow-[5px_5px_0_0_#1A0606]"
        }`}
      >
        <div className="relative aspect-[3/4] h-full w-full">
          <Image
            src={flavor.image}
            alt={flavor.name}
            fill
            sizes={
              isHero
                ? "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 80vw"
                : "(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 45vw"
            }
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-transparent to-transparent" />

          <span
            aria-hidden
            className={`absolute -left-1.5 top-3 rotate-[-8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2 py-0.5 font-display shadow-[2px_2px_0_0_#1A0606] sm:-left-2 sm:top-4 sm:px-2.5 ${
              isHero ? "text-sm sm:text-base" : "text-[10px] sm:text-xs"
            }`}
          >
            {badge}
          </span>

          <span
            aria-hidden
            className={`absolute right-2.5 top-2.5 grid place-items-center rounded-full border-2 border-brand-ink shadow-[2px_2px_0_0_#1A0606] sm:right-3 sm:top-3 sm:shadow-[3px_3px_0_0_#1A0606] ${
              isHero ? "h-10 w-10 sm:h-14 sm:w-14" : "h-7 w-7 sm:h-10 sm:w-10"
            }`}
            style={{ background: flavor.accent }}
          >
            <span className="h-2 w-2 rounded-full bg-brand-cream sm:h-2.5 sm:w-2.5" />
          </span>

          <div className={`absolute inset-x-0 bottom-0 ${isHero ? "p-3 sm:p-5" : "p-2.5 sm:p-3"}`}>
            <p
              className={`font-semibold uppercase tracking-[0.16em] text-brand-cream/75 sm:tracking-[0.18em] ${
                isHero ? "text-[10px]" : "text-[8px] sm:text-[9px]"
              }`}
            >
              {flavor.productName}
            </p>
            <p
              className={`mt-0.5 font-display leading-tight text-brand-cream sm:mt-1 ${
                isHero ? "text-2xl sm:text-3xl md:text-4xl" : "text-sm sm:text-lg md:text-xl"
              }`}
            >
              {flavor.name}
            </p>
            {isHero ? (
              <p className="mt-1 hidden text-[10px] uppercase tracking-[0.16em] text-brand-cream/70 sm:mt-1.5 sm:block">
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
      className="relative overflow-hidden bg-brand-cream py-16 sm:py-20 md:py-24"
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
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <div className="relative inline-flex items-center gap-2 rounded-full bg-brand-ink px-4 py-1.5 text-brand-cream sm:gap-2.5 sm:px-5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em]">
              Combo of the month
            </span>
            <span className="absolute -right-2 -top-2.5 rounded-full bg-brand-red px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-cream sm:-right-3 sm:-top-3 sm:px-2 sm:text-[10px]">
              HOT
            </span>
          </div>

          <h2 className="relative font-display text-[40px] leading-[0.92] text-brand-ink text-balance sm:text-6xl md:text-7xl lg:text-[100px]">
            <span className="relative inline-block">
              Three drops,
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-1.5 origin-left -rotate-1 rounded-full bg-brand-red sm:h-2 md:h-2.5"
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

          <p className="mt-1 max-w-xl text-sm text-brand-ink/70 sm:mt-2 sm:text-base">
            Our signature flavor pinned in the middle, surrounded by two
            rotating picks. Watch the combo shuffle every few seconds.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16">
          <div className="mx-auto flex max-w-[280px] sm:max-w-xs md:hidden">
            <div className="relative w-full">
              <FlavorCard
                flavor={ANCHOR_FLAVOR}
                badge="ANCHOR"
                tilt="0deg"
                size="hero"
              />
              <Starburst
                className="pointer-events-none absolute -bottom-3 -right-3 rotate-[15deg]"
                size={44}
                fill="#FFD93D"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
            <div className="relative aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`L-m-${leftFlavor.productSlug}-${leftFlavor.flavorId}`}
                  {...cardMotion}
                  className="absolute inset-0"
                >
                  <FlavorCard
                    flavor={leftFlavor}
                    badge={`№${String(leftIndex + 1).padStart(2, "0")}`}
                    tilt="-2deg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`R-m-${rightFlavor.productSlug}-${rightFlavor.flavorId}`}
                  {...cardMotion}
                  className="absolute inset-0"
                >
                  <FlavorCard
                    flavor={rightFlavor}
                    badge={`№${String(rightIndex + 1).padStart(2, "0")}`}
                    tilt="2deg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-6 lg:gap-8">
            <div className="relative aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`L-d-${leftFlavor.productSlug}-${leftFlavor.flavorId}`}
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

            <div className="relative aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`R-d-${rightFlavor.productSlug}-${rightFlavor.flavorId}`}
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
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center sm:mt-12 md:mt-14">
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:flex-wrap sm:justify-center">
            <Link
              href="/products/tiktok-60k"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-ink bg-brand-red px-6 py-3 font-display text-base text-brand-cream shadow-[4px_4px_0_0_#1A0606] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1A0606] sm:px-7 sm:py-3.5 sm:shadow-[5px_5px_0_0_#1A0606] sm:hover:shadow-[7px_7px_0_0_#1A0606] md:text-lg"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-ink bg-brand-cream px-6 py-3 font-display text-base text-brand-ink shadow-[4px_4px_0_0_#1A0606] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1A0606] sm:px-7 sm:shadow-[5px_5px_0_0_#1A0606] sm:hover:shadow-[7px_7px_0_0_#1A0606] md:text-lg"
            >
              See all flavors
            </Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/55 sm:tracking-[0.22em]">
            Anchor stays fixed · Sides shuffle every 3 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
