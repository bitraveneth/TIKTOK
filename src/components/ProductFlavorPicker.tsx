"use client";

import type { Flavor, Product } from "@/lib/products";
import Image from "next/image";
import { useState } from "react";

type Meter = { key: string; label: string; value: number };

function getFeelMeters(flavor: Flavor): Meter[] {
  const text = `${flavor.notes} ${flavor.description}`.toLowerCase();
  const matches = (re: RegExp) => (text.match(re)?.length ?? 0);

  const sweet = Math.min(
    95,
    35 + matches(/strawberry|peach|watermelon|mango|berry|sugar|nectar|jammy|ripe|sweet|honey/g) * 18,
  );
  const cool = Math.min(
    95,
    15 + matches(/ice|mint|menthol|cool|arctic|chill|frozen|crisp|peppermint|spearmint/g) * 28,
  );
  const bold = Math.min(
    95,
    35 + matches(/razz|sour|tart|tropical|bold|punch|lemon|grape|blackberry|tangy/g) * 22,
  );
  const smooth = Math.min(
    95,
    40 + matches(/cream|velvet|smooth|silky|soft|nectar|wash|gentle|mellow/g) * 18,
  );

  return [
    { key: "sweet", label: "Sweet", value: sweet },
    { key: "cool", label: "Cool", value: cool },
    { key: "bold", label: "Bold", value: bold },
    { key: "smooth", label: "Smooth", value: smooth },
  ];
}

const moodPool = [
  { icon: "🌊", label: "Beach day", tag: "BPM 92" },
  { icon: "🌙", label: "Late night drives", tag: "BPM 76" },
  { icon: "🎧", label: "Studio time", tag: "BPM 110" },
  { icon: "🎢", label: "Festival weekend", tag: "BPM 128" },
  { icon: "🌅", label: "Sunset cruise", tag: "BPM 88" },
  { icon: "🛹", label: "Skate block", tag: "BPM 118" },
  { icon: "🏝️", label: "Pool float", tag: "BPM 80" },
  { icon: "🌃", label: "After hours", tag: "BPM 132" },
  { icon: "🛋️", label: "Couch zone", tag: "BPM 70" },
  { icon: "🌶️", label: "Hot afternoons", tag: "BPM 95" },
  { icon: "🎮", label: "Game night", tag: "BPM 100" },
  { icon: "🎬", label: "Movie marathon", tag: "BPM 65" },
];

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function getMoods(flavor: Flavor) {
  const seed = hashStr(flavor.id);
  return [0, 1, 2].map((i) => moodPool[(seed + i * 7) % moodPool.length]);
}

export default function ProductFlavorPicker({ product }: { product: Product }) {
  const [active, setActive] = useState<Flavor>(product.flavors[0]);
  const meters = getFeelMeters(active);
  const moods = getMoods(active);
  const notes = active.notes.split(" · ");
  const noteIntensities = [92, 78, 64, 55];

  return (
    <div className="space-y-12 md:space-y-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-brand-ink/10 bg-brand-cream-deep shadow-brand-card">
          <Image
            key={active.id}
            src={active.image}
            alt={`${product.name} — ${active.name}`}
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="animate-[fadeIn_500ms_ease] object-cover"
            priority
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent p-6 pt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream/80">
              Now showing
            </p>
            <p className="mt-1 font-display text-3xl leading-tight text-brand-cream md:text-4xl">
              {active.name}
            </p>
          </div>

          <style jsx global>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: scale(1.02);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            {product.name}
            {product.tag ? (
              <span className="ml-2 inline-flex items-center rounded-full bg-brand-red px-2.5 py-0.5 text-brand-cream">
                {product.tag}
              </span>
            ) : null}
          </div>

          <h1 className="mt-3 font-display text-5xl leading-[0.95] text-brand-ink md:text-6xl lg:text-7xl">
            {product.headline}
          </h1>

          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-brand-ink/55">
            {product.tagline}
          </p>

          <p className="mt-6 max-w-xl text-brand-ink/75">{product.description}</p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            {product.specs.slice(0, 3).map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-brand-ink/10 bg-white/60 px-4 py-3"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-xl text-brand-ink">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              Choose your flavor — {product.flavors.length} available
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {product.flavors.map((f) => {
                const isActive = f.id === active.id;
                return (
                  <li key={f.id}>
                    <button
                      onClick={() => setActive(f)}
                      aria-pressed={isActive}
                      className={`group/flavor flex w-full items-center gap-3 rounded-2xl border-2 px-3 py-2.5 text-left transition ${
                        isActive
                          ? "border-brand-red bg-brand-red/5 shadow-brand-card"
                          : "border-brand-ink/10 bg-white/60 hover:border-brand-red/40"
                      }`}
                    >
                      <span
                        className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl"
                        style={{ background: f.accent }}
                      >
                        <Image
                          src={f.image}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-brand-ink">
                          {f.name}
                        </span>
                        <span className="block truncate text-[10px] uppercase tracking-[0.16em] text-brand-ink/55">
                          {f.notes.split(" · ").slice(0, 2).join(" · ")}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-brand-ink shadow-[3px_3px_0_0_#1A0606]"
            style={{ background: active.accent }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cream" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
              The deep dive
            </p>
            <p className="font-display text-2xl leading-tight text-brand-ink md:text-3xl">
              Inside {active.name}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-3">
          <article className="relative">
            <div className="absolute -inset-1 -z-10 rounded-[28px] bg-brand-ink sm:-inset-1.5" />
            <div className="relative h-full overflow-hidden rounded-[24px] border-2 border-brand-ink bg-brand-cream p-6 shadow-[5px_5px_0_0_#1A0606] sm:p-7">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[2px_2px_0_0_#1A0606]">
                  Tasting profile
                </span>
                <span className="rotate-[8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2 py-0.5 font-display text-sm shadow-[2px_2px_0_0_#1A0606]">
                  №01
                </span>
              </div>

              <p className="mt-5 text-[15px] italic leading-relaxed text-brand-ink/80">
                &ldquo;{active.description}&rdquo;
              </p>

              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
                  Note breakdown
                </p>
                <div className="mt-3 space-y-2">
                  {notes.map((note, i) => {
                    const intensity = noteIntensities[i] ?? 70;
                    return (
                      <div
                        key={note}
                        className="relative overflow-hidden rounded-xl border-2 border-brand-ink bg-brand-cream-deep/40"
                      >
                        <div
                          className="absolute inset-y-0 left-0 transition-all duration-500"
                          style={{
                            width: `${intensity}%`,
                            background: `${active.accent}33`,
                          }}
                        />
                        <div className="relative flex items-center justify-between px-3.5 py-2.5">
                          <span className="flex items-center gap-2 font-display text-base text-brand-ink">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ background: active.accent }}
                            />
                            {note}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
                            {intensity}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>

          <article className="relative">
            <div className="absolute -inset-1 -z-10 rounded-[28px] bg-brand-ink sm:-inset-1.5" />
            <div className="relative h-full overflow-hidden rounded-[24px] border-2 border-brand-ink bg-brand-cream p-6 shadow-[5px_5px_0_0_#1A0606] sm:p-7">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[2px_2px_0_0_#1A0606]">
                  How it hits
                </span>
                <span className="rotate-[8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2 py-0.5 font-display text-sm shadow-[2px_2px_0_0_#1A0606]">
                  №02
                </span>
              </div>

              <p className="mt-5 font-display text-2xl leading-tight text-brand-ink">
                The vibe meters
              </p>
              <p className="mt-1 text-sm text-brand-ink/65">
                How this flavor lands on the palate.
              </p>

              <div className="mt-6 space-y-4">
                {meters.map((m) => (
                  <div key={m.key}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-lg text-brand-ink">
                        {m.label}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
                        {m.value}/100
                      </span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full border-2 border-brand-ink bg-brand-cream-deep/60">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${m.value}%`,
                          background: active.accent,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="relative">
            <div className="absolute -inset-1 -z-10 rounded-[28px] bg-brand-ink sm:-inset-1.5" />
            <div className="relative h-full overflow-hidden rounded-[24px] border-2 border-brand-ink bg-brand-cream p-6 shadow-[5px_5px_0_0_#1A0606] sm:p-7">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[2px_2px_0_0_#1A0606]">
                  Made for
                </span>
                <span className="rotate-[8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2 py-0.5 font-display text-sm shadow-[2px_2px_0_0_#1A0606]">
                  №03
                </span>
              </div>

              <p className="mt-5 font-display text-2xl leading-tight text-brand-ink">
                Moments that hit
              </p>
              <p className="mt-1 text-sm text-brand-ink/65">
                Where {active.name} fits best.
              </p>

              <ul className="mt-6 space-y-3">
                {moods.map((m) => (
                  <li
                    key={m.label}
                    className="flex items-center gap-3 rounded-2xl border-2 border-brand-ink bg-brand-cream-deep/40 px-3 py-2.5"
                  >
                    <span
                      aria-hidden
                      className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border-2 border-brand-ink bg-brand-cream text-xl shadow-[2px_2px_0_0_#1A0606]"
                    >
                      {m.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-base text-brand-ink">
                        {m.label}
                      </span>
                      <span className="block truncate text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
                        {m.tag}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-brand-ink/20 bg-brand-cream/60 px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              21+ only
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Contains nicotine
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Lab-tested for purity
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink/45">
            Nicotine is an addictive chemical
          </p>
        </div>
      </div>
    </div>
  );
}
