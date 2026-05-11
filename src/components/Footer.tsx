import { site, navLinks } from "@/lib/site";
import Logo from "./Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "#products" },
      { label: "New arrivals", href: "#products" },
      { label: "Flavors", href: "#flavors" },
      { label: "Devices", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Lab reports", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: `mailto:${site.email}` },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-red text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo tone="cream" size="lg" />
            <p className="mt-5 max-w-sm text-brand-cream/80">
              {site.description}
            </p>

            <div className="mt-6 flex gap-3">
              {(["instagram", "twitter", "tiktok"] as const).map((s) => (
                <a
                  key={s}
                  href={site.social[s]}
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/30 text-brand-cream transition hover:bg-brand-cream hover:text-brand-red"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {s === "instagram" && (
                      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 1.8.25 2.23.42.55.21.94.46 1.36.88.42.42.67.81.88 1.36.17.42.36 1.06.42 2.23.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.25 1.8-.42 2.23-.21.55-.46.94-.88 1.36-.42.42-.81.67-1.36.88-.42.17-1.06.36-2.23.42-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.36-.88 3.7 3.7 0 0 1-.88-1.36c-.17-.42-.36-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.25-1.8.42-2.23.21-.55.46-.94.88-1.36.42-.42.81-.67 1.36-.88.42-.17 1.06-.36 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.53 0-4.77.07-1.06.05-1.64.22-2.02.37-.51.2-.87.43-1.25.81-.38.38-.62.74-.81 1.25-.15.38-.32.96-.37 2.02-.07 1.24-.07 1.61-.07 4.77s0 3.53.07 4.77c.05 1.06.22 1.64.37 2.02.19.51.43.87.81 1.25.38.38.74.62 1.25.81.38.15.96.32 2.02.37 1.24.07 1.61.07 4.77.07s3.53 0 4.77-.07c1.06-.05 1.64-.22 2.02-.37.51-.2.87-.43 1.25-.81.38-.38.62-.74.81-1.25.15-.38.32-.96.37-2.02.07-1.24.07-1.61.07-4.77s0-3.53-.07-4.77c-.05-1.06-.22-1.64-.37-2.02a3.36 3.36 0 0 0-.81-1.25 3.36 3.36 0 0 0-1.25-.81c-.38-.15-.96-.32-2.02-.37C15.53 4 15.16 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
                    )}
                    {s === "twitter" && (
                      <path d="M18.244 2H21l-6.55 7.49L22.5 22h-6.49l-5.09-6.65L4.99 22H2.232l7.018-8.018L1.5 2h6.65l4.6 6.08L18.244 2zm-2.27 18h1.83L7.18 4H5.22l10.755 16z" />
                    )}
                    {s === "tiktok" && (
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-2.83-.91 4.85 4.85 0 0 1-2-3.78H11v13.27a2.79 2.79 0 0 1-5.06 1.59 2.78 2.78 0 0 1 2.34-4.32 2.85 2.85 0 0 1 .87.14V8.85a6.13 6.13 0 0 0-.87-.06A6.11 6.11 0 1 0 14.46 15V8.95a8.16 8.16 0 0 0 5.13 1.84V6.69z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cream/60">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-brand-cream/90 transition hover:text-brand-cream"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-brand-cream/20 bg-brand-cream/5 p-5 text-xs leading-relaxed text-brand-cream/75">
          <strong className="font-semibold text-brand-cream">WARNING:</strong>{" "}
          This product contains nicotine. Nicotine is an addictive chemical.
          Products on this site are intended for adults of legal smoking age
          (21+) only. California Proposition 65: this product can expose you to
          chemicals including nicotine, which is known to the State of
          California to cause birth defects or other reproductive harm.
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-brand-cream/20 pt-6 text-xs text-brand-cream/70 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-brand-cream">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="hover:text-brand-cream">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-cream">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
