import { site } from "@/lib/site";
import clsx from "clsx";

const sizeMap = {
  sm: 18,
  md: 24,
  lg: 36,
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
  const fontSize = sizeMap[size];
  const primary = tone === "ink" ? "text-brand-red" : "text-brand-cream";
  const accent =
    tone === "ink" ? "text-brand-red-dark" : "text-brand-cream-deep";

  return (
    <a
      href="#top"
      aria-label={`${site.name} home`}
      className={clsx(
        "inline-flex items-baseline gap-1.5 leading-none whitespace-nowrap",
        className,
      )}
      style={{ fontSize }}
    >
      <span className={clsx("font-display", primary)}>TikTok</span>
      <span className={clsx("font-display", accent)}>Vape</span>
    </a>
  );
}
