import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ — ${site.name}`,
  description:
    "Common questions about TikTok Vape devices, flavors, nicotine strength, recharging, authenticity, and where to find us.",
  openGraph: {
    title: `FAQ · ${site.name}`,
    description: "Real questions. Straight answers.",
  },
};

export default function FaqPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-brand-cream pt-32 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink/55"
          >
            <Link href="/" className="hover:text-brand-red">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-brand-ink">FAQ</span>
          </nav>
        </div>
      </section>

      <Faq />

      <Footer />
    </main>
  );
}
