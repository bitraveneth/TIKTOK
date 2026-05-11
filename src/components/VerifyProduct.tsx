"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "checking" | "valid" | "invalid";

const VALID_PREFIXES = ["TT", "TIK", "VP", "TKV"];

function normalize(raw: string) {
  return raw.trim().toUpperCase().replace(/[\s-]/g, "");
}

function isAuthentic(raw: string) {
  const code = normalize(raw);
  if (code.length < 8) return false;
  return VALID_PREFIXES.some((p) => code.startsWith(p));
}

const trustPoints = [
  {
    k: "01",
    t: "Lab-tested batches",
    s: "Every run checked for purity, dosage, and consistency.",
  },
  {
    k: "02",
    t: "Unique per device",
    s: "No two TikToks share the same authentication code.",
  },
  {
    k: "03",
    t: "Tamper-evident wrap",
    s: "If the seal is broken or off-color, walk away.",
  },
  {
    k: "04",
    t: "We've got your back",
    s: "Bad code? Email us with a photo — we'll make it right.",
  },
];

export default function VerifyProduct() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!code.trim() || status === "checking") return;
    setStatus("checking");
    window.setTimeout(() => {
      setStatus(isAuthentic(code) ? "valid" : "invalid");
    }, 900);
  };

  const reset = () => {
    setCode("");
    setStatus("idle");
  };

  return (
    <section
      id="verify"
      className="relative overflow-hidden bg-brand-cream-deep py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-ink/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-brand-cream px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[3px_3px_0_0_#1A0606]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Authenticity check
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.95] text-brand-ink sm:text-5xl lg:text-6xl">
            Spot the real <span className="text-brand-red">TikTok</span>.
          </h2>
          <p className="mt-5 max-w-xl text-base text-brand-ink/70 sm:text-lg">
            Counterfeits are everywhere in this category. Every TikTok device
            ships with a one-time scratch-off code under the wrap — drop it in
            below, and we'll tell you in seconds whether it came straight from
            our facility or is a knockoff pretending to be.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((b) => (
              <li
                key={b.k}
                className="rounded-2xl border border-brand-ink/10 bg-brand-cream/80 p-4 shadow-[3px_3px_0_0_#1A0606] backdrop-blur"
              >
                <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-red">
                  {b.k}
                </p>
                <p className="mt-1 font-display text-base text-brand-ink">
                  {b.t}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-ink/65">
                  {b.s}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-brand-ink" />
          <div className="relative rounded-[28px] border-2 border-brand-ink bg-brand-cream p-6 shadow-[6px_6px_0_0_#1A0606] sm:p-8">
            <div className="flex items-center justify-between">
              <p className="font-display text-[11px] uppercase tracking-[0.28em] text-brand-ink/70">
                Verifier · live
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-brand-cream">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cream" />
                Online
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl leading-tight text-brand-ink sm:text-3xl">
              Enter your device code.
            </h3>
            <p className="mt-2 text-sm text-brand-ink/65">
              Look on the side of the box, under the silver scratch panel.
            </p>

            <form onSubmit={onSubmit} className="mt-6">
              <label
                htmlFor="verify-code"
                className="block text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/60"
              >
                Authentication code
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-stretch">
                <input
                  id="verify-code"
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    if (status === "valid" || status === "invalid")
                      setStatus("idle");
                  }}
                  placeholder="TT-X9F2-K7Q1"
                  disabled={status === "checking"}
                  autoComplete="off"
                  spellCheck={false}
                  className="flex-1 rounded-2xl border-2 border-brand-ink bg-white px-4 py-3 font-display text-lg uppercase tracking-[0.14em] text-brand-ink placeholder:text-brand-ink/30 focus:outline-none focus:ring-4 focus:ring-brand-red/30 disabled:opacity-60"
                  aria-label="Product authentication code"
                />
                <button
                  type="submit"
                  disabled={status === "checking" || !code.trim()}
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-6 py-3 font-display text-sm uppercase tracking-[0.2em] text-brand-cream transition hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "checking" ? "Checking…" : "Verify"}
                </button>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {status === "valid" && (
                  <motion.div
                    key="valid"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5 flex items-start gap-3 rounded-2xl border-2 border-brand-ink bg-brand-red p-4 text-brand-cream shadow-[4px_4px_0_0_#1A0606]"
                  >
                    <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-brand-cream text-brand-red">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base leading-snug">
                        Authentic. Welcome to the drop.
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-brand-cream/85">
                        This code matches a TikTok device manufactured at our
                        facility. Enjoy every puff.
                      </p>
                    </div>
                    <button
                      onClick={reset}
                      type="button"
                      className="ml-auto flex-shrink-0 self-start text-[11px] font-semibold uppercase tracking-[0.16em] underline underline-offset-2"
                    >
                      New code
                    </button>
                  </motion.div>
                )}
                {status === "invalid" && (
                  <motion.div
                    key="invalid"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5 flex items-start gap-3 rounded-2xl border-2 border-brand-ink bg-white p-4 text-brand-ink shadow-[4px_4px_0_0_#1A0606]"
                  >
                    <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-brand-ink text-brand-cream">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base leading-snug">
                        We couldn't verify that code.
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-brand-ink/65">
                        Double-check the digits, or email{" "}
                        <a
                          className="font-semibold text-brand-red underline underline-offset-2"
                          href="mailto:hello@tiktokvape.co"
                        >
                          hello@tiktokvape.co
                        </a>{" "}
                        with a photo of the device.
                      </p>
                    </div>
                    <button
                      onClick={reset}
                      type="button"
                      className="ml-auto flex-shrink-0 self-start text-[11px] font-semibold uppercase tracking-[0.16em] underline underline-offset-2"
                    >
                      Retry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-brand-cream-deep/60 p-3 text-xs leading-relaxed text-brand-ink/70">
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-red"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5" />
                <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
              </svg>
              <p>
                Each TikTok ships with a single, one-time-use code. Once
                verified it can't be checked again from a new device — that's
                how we keep counterfeiters out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
