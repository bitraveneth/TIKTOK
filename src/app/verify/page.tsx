import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerifyProduct from "@/components/VerifyProduct";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Verify product — ${site.name}`,
  description:
    "Confirm your TikTok device is authentic. Enter the one-time scratch-off code from your box and we'll verify it instantly.",
  openGraph: {
    title: `Verify product · ${site.name}`,
    description:
      "Every TikTok ships with a one-time scratch-off code. Verify yours in seconds.",
  },
};

export default function VerifyPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-brand-cream-deep pt-32 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink/55"
          >
            <Link href="/" className="hover:text-brand-red">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-brand-ink">Verify product</span>
          </nav>
        </div>
      </section>

      <VerifyProduct />

      <Footer />
    </main>
  );
}
