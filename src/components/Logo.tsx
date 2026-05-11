import { site } from "@/lib/site";
import Image from "next/image";
import clsx from "clsx";

export default function Logo({
  className,
  tone = "ink",
  size = "md",
}: {
  className?: string;
  tone?: "ink" | "cream";
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { w: 70, h: 28 },
    md: { w: 100, h: 40 },
    lg: { w: 160, h: 64 },
  }[size];

  return (
    <a
      href="#top"
      aria-label={`${site.name} home`}
      className={clsx("inline-flex items-center", className)}
    >
      <Image
        src="/brand/tiktok-vape-logo.png"
        alt={site.name}
        width={dims.w * 4}
        height={dims.h * 4}
        priority
        className={clsx(
          "object-contain transition-[filter] duration-300",
          tone === "cream" && "brightness-0 invert",
        )}
        style={{ width: dims.w, height: dims.h }}
      />
    </a>
  );
}
