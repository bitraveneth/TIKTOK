import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="relative bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              The lineup
            </span>
            <h2 className="mt-3 font-display text-4xl leading-[1.0] text-brand-ink sm:text-5xl md:text-6xl">
              Two devices. <span className="text-brand-red">Eleven flavors.</span>
            </h2>
            <p className="mt-4 text-brand-ink/65">
              Pick your puff count and your favourite drop. Every device ships
              ready to vape — no charging, no refills, no nonsense.
            </p>
          </div>
          <a
            href="#flavors"
            className="hidden items-center gap-2 rounded-full border-2 border-brand-ink/15 px-6 py-3 text-sm font-semibold text-brand-ink/80 transition hover:border-brand-ink/40 hover:text-brand-ink md:inline-flex"
          >
            See this month&apos;s pairing
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
