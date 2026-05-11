"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={clsx(
            "flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "border-brand-ink/10 bg-brand-cream/85 backdrop-blur shadow-brand-card"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo size="md" />

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-brand-ink/75 transition hover:text-brand-red"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#products"
              className="hidden rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-brand-cream transition hover:bg-brand-red md:inline-flex"
            >
              Shop now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-ink/15 bg-brand-cream md:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-brand-ink"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={clsx(
          "fixed inset-x-0 top-[72px] z-40 mx-4 origin-top rounded-3xl border border-brand-ink/10 bg-brand-cream p-6 shadow-brand-card transition-all duration-300 md:hidden",
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-brand-ink hover:bg-brand-red/10 hover:text-brand-red"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#products"
          onClick={() => setOpen(false)}
          className="mt-3 block rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-brand-cream"
        >
          Shop now
        </a>
      </div>
    </header>
  );
}
