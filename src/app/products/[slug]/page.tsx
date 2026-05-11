import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductFlavorPicker from "@/components/ProductFlavorPicker";
import {
  deviceGallery,
  getProduct,
  getOtherProduct,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: `${site.name} — Not found` };
  return {
    title: `${product.name} — ${site.name}`,
    description: product.description,
    openGraph: {
      title: `${product.name} · ${product.tagline}`,
      description: product.description,
      images: [product.cover],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const gallery = deviceGallery[product.device];
  const other = getOtherProduct(product.slug);

  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden bg-brand-cream pt-32 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-brand-red/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 md:pb-32">
          <nav
            aria-label="breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink/55"
          >
            <Link href="/" className="hover:text-brand-red">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-brand-red">
              Lineup
            </Link>
            <span>/</span>
            <span className="text-brand-ink">{product.name}</span>
          </nav>

          <ProductFlavorPicker product={product} />
        </div>
      </section>

      <section className="relative bg-brand-cream-deep/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-brand-ink/10 bg-brand-cream-deep shadow-brand-card">
            <Image
              src={product.heroLifestyle}
              alt={`${product.name} lifestyle`}
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              The device
            </span>
            <h2 className="mt-3 font-display text-4xl leading-[1.0] text-brand-ink sm:text-5xl md:text-6xl">
              {product.headline}
            </h2>
            <p className="mt-5 max-w-xl text-brand-ink/70">
              {product.description}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-brand-red pl-4"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-brand-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative bg-brand-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            From the studio
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.0] text-brand-ink sm:text-4xl md:text-5xl">
            {product.name} in the wild
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
            {[...gallery.lifestyle, ...gallery.angles].slice(0, 6).map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-brand-cream-deep ${
                  i === 0
                    ? "col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`${product.name} gallery ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {other ? (
        <section className="relative bg-brand-cream pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  Also in the lineup
                </span>
                <h2 className="mt-3 font-display text-3xl leading-[1.0] text-brand-ink sm:text-4xl md:text-5xl">
                  Check out {other.name}
                </h2>
              </div>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink/15 px-6 py-3 text-sm font-semibold text-brand-ink/80 transition hover:border-brand-ink/40 hover:text-brand-ink"
              >
                Back to lineup
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
              </Link>
            </div>

            <div className="mt-10 max-w-2xl">
              <ProductCard product={other} />
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}
