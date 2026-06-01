import type { Product } from "./products";

/** Packaged 40K assets (all flavors are 1280×1280 square WebP) */
export const PACKAGED_IMAGE_WIDTH = 1280;
export const PACKAGED_IMAGE_HEIGHT = 1280;

/** Packaged 40K product photography */
export function usesCenteredDeviceImage(
  product: Pick<Product, "device">,
): boolean {
  return product.device === "LW04-40K";
}

/** Intrinsic image — card height follows the artboard (no crop/zoom) */
export const PACKAGED_IMAGE_CLASS = "block h-auto w-full max-w-full";

export function productHeroImageClassName(
  product: Pick<Product, "device">,
  extra = "",
): string {
  const base = "object-cover object-center";
  return extra ? `${base} ${extra}`.trim() : base;
}

export function productThumbImageClassName(
  product: Pick<Product, "device">,
  extra = "",
): string {
  const base = usesCenteredDeviceImage(product)
    ? "object-contain object-center"
    : "object-cover object-center";
  return extra ? `${base} ${extra}`.trim() : base;
}

export function productImageClassName(
  product: Pick<Product, "device">,
  extra = "",
): string {
  return productHeroImageClassName(product, extra);
}

/** Card matches 1:1 artboard (1280×1280 assets) */
export const PACKAGED_CARD_FRAME_CLASS =
  "relative block w-full overflow-hidden rounded-[32px] border border-brand-ink/10 shadow-brand-card leading-[0] aspect-square";

/** Display size — larger on product page, still fits layout */
export const PACKAGED_HERO_SIZE_CLASS =
  "mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none";

