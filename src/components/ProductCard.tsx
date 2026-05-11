import type { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const previewFlavors = product.flavors.slice(0, 5);
  const extraFlavors = product.flavors.length - previewFlavors.length;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-brand-ink/10 bg-white/70 transition hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-brand-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-brand-cream-deep">
        <Image
          src={product.cover}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 50vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {product.tag ? (
          <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cream">
            {product.tag}
          </span>
        ) : null}

        <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-brand-cream/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-ink shadow-brand-card">
          {product.puffs} puffs
        </span>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent p-6 pt-20">
          <p className="font-display text-3xl leading-tight text-brand-cream md:text-4xl">
            {product.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-cream/80">
            {product.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            {product.flavors.length} flavors
          </p>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 transition group-hover:text-brand-red">
            Explore
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 transition group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <ul className="mt-5 flex flex-wrap items-center gap-2">
          {previewFlavors.map((f) => (
            <li
              key={f.id}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-brand-ink/75 transition group-hover:border-brand-red/30"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: f.accent }}
              />
              {f.name}
            </li>
          ))}
          {extraFlavors > 0 ? (
            <li className="inline-flex items-center rounded-full border border-brand-ink/10 bg-brand-cream/50 px-3 py-1 text-[11px] font-semibold text-brand-ink/55">
              +{extraFlavors} more
            </li>
          ) : null}
        </ul>
      </div>
    </Link>
  );
}
