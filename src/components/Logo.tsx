import { site } from "@/lib/site";
import clsx from "clsx";

const sizeMap = {
  sm: {
    font: 28,
    stroke: 1.5,
    shadow: 2,
    vape: 8,
    vapeX: 4,
    vapeY: 1,
    swooshScale: 0.65,
  },
  md: {
    font: 42,
    stroke: 2,
    shadow: 3,
    vape: 10,
    vapeX: 6,
    vapeY: 2,
    swooshScale: 0.85,
  },
  lg: {
    font: 64,
    stroke: 3,
    shadow: 5,
    vape: 14,
    vapeX: 9,
    vapeY: 3,
    swooshScale: 1,
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

  const fill = "#FFF3E2";
  const outline = tone === "ink" ? "#1A0606" : "#1A0606";
  const drop = tone === "ink" ? "#E22A2A" : "#1A0606";
  const swooshColor = tone === "ink" ? "#E22A2A" : "#1A0606";
  const pillBg = tone === "ink" ? "#1A0606" : "#1A0606";
  const pillText = "#FFF3E2";

  return (
    <a
      href="#top"
      aria-label={`${site.name} home`}
      className={clsx(
        "group relative inline-flex flex-col items-center leading-none",
        className,
      )}
    >
      <span
        className="block select-none font-script italic transition-transform duration-300 group-hover:-rotate-1"
        style={{
          fontSize: s.font,
          color: fill,
          WebkitTextStroke: `${s.stroke}px ${outline}`,
          textShadow: `${s.shadow}px ${s.shadow}px 0 ${drop}`,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          paddingTop: s.shadow,
          paddingRight: s.shadow,
        }}
      >
        TikTok
      </span>

      <span
        className="pointer-events-none relative block"
        style={{
          marginTop: -Math.round(s.font * 0.18),
          height: Math.round(s.font * 0.32),
          width: Math.round(s.font * 2.6),
        }}
      >
        <svg
          viewBox="0 0 260 32"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="logo-swoosh" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor={swooshColor} stopOpacity="0" />
              <stop offset="15%" stopColor={swooshColor} stopOpacity="1" />
              <stop offset="85%" stopColor={swooshColor} stopOpacity="1" />
              <stop offset="100%" stopColor={swooshColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M2 18 C 40 6, 90 4, 130 12 S 230 28, 258 14"
            stroke="url(#logo-swoosh)"
            strokeWidth={Math.max(2, s.stroke + 1)}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <span
          className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center rounded-md border-2 font-sans font-black uppercase"
          style={{
            paddingLeft: s.vapeX,
            paddingRight: s.vapeX,
            paddingTop: s.vapeY,
            paddingBottom: s.vapeY,
            background: pillBg,
            color: pillText,
            borderColor: outline,
            fontSize: s.vape,
            letterSpacing: "0.35em",
            lineHeight: 1,
          }}
        >
          VAPE
        </span>
      </span>
    </a>
  );
}
