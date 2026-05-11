"use client";

import type { Flavor, Product } from "@/lib/products";
import Image from "next/image";
import { useState } from "react";

export default function ProductFlavorPicker({ product }: { product: Product }) {
  const [active, setActive] = useState<Flavor>(product.flavors[0]);

  return (
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

        <div className="mt-10 rounded-3xl border border-brand-ink/10 bg-white/50 p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            {active.name} tasting profile
          </p>
          <p className="mt-3 text-sm text-brand-ink/75">{active.description}</p>
          <div className="mt-5 space-y-3">
            {active.notes.split(" · ").map((note, i) => {
              const intensity = [92, 78, 64, 55][i] ?? 70;
              return (
                <div key={note} className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: active.accent }}
                  />
                  <span className="flex-1 text-sm text-brand-ink/80">
                    {note}
                  </span>
                  <div className="hidden h-1.5 w-32 overflow-hidden rounded-full bg-brand-ink/10 sm:block">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${intensity}%`,
                        background: active.accent,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-brand-ink/45">
          21+ only · Contains nicotine · Lab-tested for purity
        </p>
      </div>
    </div>
  );
}
