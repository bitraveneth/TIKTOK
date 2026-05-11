"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 700);
  };

  return (
    <section className="relative bg-brand-cream pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-brand-ink px-6 py-14 text-center text-brand-cream md:px-12 md:py-20">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-red/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-red/30 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cream/20 bg-brand-cream/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cream">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              The drop list
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-[1.0] sm:text-5xl md:text-6xl">
              First taste of every new flavor.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-brand-cream/70">
              Subscribers get early access to limited drops, 10% off their
              first order, and zero spam — ever.
            </p>

            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-brand-cream/20 bg-brand-cream/10 px-5 py-3.5 text-sm text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-brand-cream transition hover:bg-brand-red-dark disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Subscribe"}
              </button>
            </form>

            <div
              role="status"
              aria-live="polite"
              className={`mt-4 text-sm transition ${
                status === "ok"
                  ? "text-brand-cream"
                  : "text-transparent"
              }`}
            >
              Welcome to the list. Check your inbox.
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-brand-cream/40">
              21+ only. Nicotine is an addictive chemical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
