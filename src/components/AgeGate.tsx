"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vapr_age_ok";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const [denied, setDenied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const ok = window.localStorage.getItem(STORAGE_KEY);
      if (ok !== "1") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open || denied ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, denied, mounted]);

  if (!mounted) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setOpen(false);
  };

  const decline = () => {
    setDenied(true);
    setOpen(false);
  };

  if (denied) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/95 px-6 text-center">
        <div className="max-w-md">
          <p className="font-display text-3xl text-brand-cream md:text-4xl">
            Come back when you&apos;re 21+
          </p>
          <p className="mt-4 text-brand-cream/70">
            You must be of legal smoking age in your jurisdiction to access this
            site.
          </p>
        </div>
      </div>
    );
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/85 px-4 backdrop-blur"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-brand-cream/20 bg-brand-cream p-8 text-center shadow-brand-lg md:p-12">
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-red/15" />
        <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-brand-red/10" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Age verification
          </span>

          <h2
            id="age-gate-title"
            className="mt-6 font-display text-4xl leading-[0.95] text-brand-ink md:text-5xl"
          >
            Are you 21 <br /> or older?
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm text-brand-ink/70 md:text-base">
            This site contains products with nicotine. Nicotine is an addictive
            chemical. You must be 21+ to enter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={accept}
              className="rounded-full bg-brand-red px-7 py-3.5 font-semibold text-brand-cream shadow-brand-lg transition hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-cream"
            >
              Yes, I&apos;m 21 or older
            </button>
            <button
              onClick={decline}
              className="rounded-full border-2 border-brand-ink/15 bg-transparent px-7 py-3.5 font-semibold text-brand-ink/70 transition hover:border-brand-ink/40 hover:text-brand-ink"
            >
              No, take me back
            </button>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-widest text-brand-ink/40">
            WARNING: This product contains nicotine.
          </p>
        </div>
      </div>
    </div>
  );
}
