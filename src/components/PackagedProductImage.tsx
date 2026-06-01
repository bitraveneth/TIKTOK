"use client";

import {
  PACKAGED_IMAGE_CLASS,
  PACKAGED_IMAGE_HEIGHT,
  PACKAGED_IMAGE_WIDTH,
} from "@/lib/product-image-styles";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Native img so the card is exactly the rendered bitmap size (no Next/Image fill/crop).
 */
export default function PackagedProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={PACKAGED_IMAGE_WIDTH}
      height={PACKAGED_IMAGE_HEIGHT}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`${PACKAGED_IMAGE_CLASS} ${className}`.trim()}
    />
  );
}
