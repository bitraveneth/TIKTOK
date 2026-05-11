import { site } from "@/lib/site";
import clsx from "clsx";

const sizeMap = {
  sm: {
    primary: 20,
    secondary: 8,
    tracking: 0.32,
    gap: -3,
    paddingLeft: 1,
  },
  md: {
    primary: 30,
    secondary: 11,
    tracking: 0.34,
    gap: -5,
    paddingLeft: 2,
  },
  lg: {
    primary: 48,
    secondary: 16,
    tracking: 0.36,
    gap: -8,
    paddingLeft: 3,
  },
};

export default function Logo({
  className,
  tone = "ink",
  size = "md",
}: {
  className?: string;
  tone?: "ink" | "cream";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];
  const primary = tone === "ink" ? "text-brand-ink" : "text-brand-cream";
  const accent = tone === "ink" ? "text-brand-red" : "text-brand-ink";

  return (
    <a
      href="#top"
      aria-label={`${site.name} home`}
      className={clsx(
        "group inline-flex flex-col leading-none transition",
        className,
      )}
    >
      <span
        className={clsx(
          "font-display tracking-tight leading-none whitespace-nowrap",
          primary,
        )}
        style={{ fontSize: s.primary }}
      >
        TIK
        <span
          aria-hidden
          className={clsx(accent, "inline-block transition-transform duration-300 group-hover:rotate-[-12deg]")}
        >
          ·
        </span>
        TOK
      </span>
      <span
        className={clsx("font-display leading-none whitespace-nowrap", accent)}
        style={{
          fontSize: s.secondary,
          letterSpacing: `${s.tracking}em`,
          marginTop: s.gap,
          paddingLeft: s.paddingLeft,
        }}
      >
        VAPE
      </span>
    </a>
  );
}
