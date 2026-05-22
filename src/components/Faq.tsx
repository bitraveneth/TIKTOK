"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type FaqItem = { q: string; a: ReactNode };

const faqs: FaqItem[] = [
  {
    q: "How long does a TikTok device last?",
    a: "The TikTok 50K delivers up to 50,000 puffs, the 60K up to 60,000 — that's two to three months for an average daily user. A full LED display on the front shows your e-liquid and battery levels in real time, so you'll never get caught dry.",
  },
  {
    q: "Are the flavors made with real ingredients?",
    a: "Every flavor is blended in-house using food-grade flavorings, then lab-tested for purity and matched to the fruit (or dessert, or candy) on the label. No artificial sweeteners, no fillers — just the taste you came for.",
  },
  {
    q: "How do I verify my product is authentic?",
    a: (
      <>
        Every TikTok ships with a one-time-use scratch-off code under the wrap.
        Drop it into the{" "}
        <Link
          href="/verify"
          className="font-semibold text-brand-red underline underline-offset-2"
        >
          product verifier
        </Link>{" "}
        and we&apos;ll instantly confirm it came from our facility. If the seal is
        broken, the box looks off, or the code fails — it&apos;s not real. Walk away.
      </>
    ),
  },
  {
    q: "What's the nicotine strength?",
    a: "Every TikTok device is loaded with 5% (50mg) salt nicotine for a smooth, satisfying hit. Salt nic is gentler on the throat than freebase, which is why we use it across the whole lineup.",
  },
  {
    q: "Can I recharge a TikTok device?",
    a: "Yes — both the 50K and 60K ship with USB-C ports and rechargeable batteries. A full charge takes around 25 minutes. You're not throwing it away; you're using it until the juice runs out.",
  },
  {
    q: "Where can I buy a TikTok Vape?",
    a: "We don't sell directly on this site. TikTok is stocked at independent vape retailers across the US — check with your local shop, or DM us on Instagram and we'll point you to the closest one.",
  },
  {
    q: "Is TikTok Vape affiliated with the social media platform?",
    a: "Nope. We're an independent vape brand. The name is a nod to the rhythm of how you use a disposable — quick taps, all day. We're not affiliated with, endorsed by, or related to TikTok Inc. in any way.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-cream py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-brand-cream px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[3px_3px_0_0_#1A0606]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              FAQ
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] text-brand-ink sm:text-5xl lg:text-6xl">
              Real questions.
              <br />
              <span className="text-brand-red">Straight answers.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-brand-ink/70 sm:text-base">
            Still curious? DM us on Instagram or email{" "}
            <a
              href="mailto:hello@tiktokvape.co"
              className="font-semibold text-brand-red underline underline-offset-2"
            >
              hello@tiktokvape.co
            </a>{" "}
            — a real human reads every one.
          </p>
        </div>

        <ul className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <li
                key={item.q}
                className={clsx(
                  "rounded-2xl border-2 border-brand-ink bg-brand-cream transition-shadow",
                  isOpen
                    ? "shadow-[6px_6px_0_0_#1A0606]"
                    : "shadow-[4px_4px_0_0_#1A0606]",
                )}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="group flex w-full items-center gap-4 px-5 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className={clsx(
                      "grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border-2 border-brand-ink font-display text-sm transition-colors",
                      isOpen
                        ? "bg-brand-red text-brand-cream"
                        : "bg-brand-cream text-brand-ink group-hover:bg-brand-cream-deep",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base leading-snug text-brand-ink sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={clsx(
                      "grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border-2 border-brand-ink transition-transform duration-300",
                      isOpen
                        ? "rotate-45 bg-brand-red text-brand-cream"
                        : "bg-brand-cream text-brand-ink",
                    )}
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="ml-[56px] border-l-2 border-dashed border-brand-ink/20 py-2 pl-4 sm:ml-[60px]">
                          <p className="text-sm leading-relaxed text-brand-ink/75 sm:text-base">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-brand-ink bg-brand-red p-6 text-brand-cream shadow-[6px_6px_0_0_#1A0606] sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-cream/70">
              Didn&apos;t find your answer?
            </p>
            <p className="mt-1 font-display text-xl leading-tight sm:text-2xl">
              Slide into our inbox — we reply within a day.
            </p>
          </div>
          <a
            href="mailto:hello@tiktokvape.co"
            className="inline-flex items-center gap-2 rounded-full bg-brand-cream px-5 py-3 font-display text-sm uppercase tracking-[0.18em] text-brand-ink transition hover:bg-brand-cream-deep"
          >
            Email us
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
