"use client";

import PackagedProductImage from "@/components/PackagedProductImage";
import { productHeroImageClassName, usesCenteredDeviceImage } from "@/lib/product-image-styles";
import type { Product } from "@/lib/products";
import Image from "next/image";

type Props = {
  product: Product;
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function ProductPackagedImage({
  product,
  src,
  alt,
  sizes,
  priority,
  className = "",
}: Props) {
  if (usesCenteredDeviceImage(product)) {
    return (
      <PackagedProductImage
        src={src}
        alt={alt}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={productHeroImageClassName(product, className)}
    />
  );
}
