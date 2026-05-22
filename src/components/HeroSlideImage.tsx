import Image from "next/image";

/** Marketing posters (LW03/LW04) are large PNG/JPG — native img avoids blank Swiper slides; same cover fit as other hero cards. */
export function isHeroMarketingPoster(src: string) {
  return src.includes("/lw03/") || src.includes("/lw04/");
}

export default function HeroSlideImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  if (isHeroMarketingPoster(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 820px, (min-width: 1024px) 680px, (min-width: 768px) 560px, (min-width: 640px) 420px, 280px"
      className="object-cover"
      priority={priority}
    />
  );
}
