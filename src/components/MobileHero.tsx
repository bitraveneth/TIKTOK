"use client";

import { heroDeck } from "@/lib/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function MobileHero() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-brand-ink md:hidden"
      aria-label="TikTok Vape hero"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1100}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(s: SwiperClass) => setActive(s.realIndex)}
        className="tiktok-mobile-hero h-full w-full"
      >
        {heroDeck.map((card, i) => (
          <SwiperSlide key={card.id} className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`absolute inset-0 ${
                  active === i ? "animate-[kenburns_7s_ease-out_forwards]" : ""
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-brand-ink via-brand-ink/70 to-transparent" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-24">
        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cream/30 bg-brand-cream/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cream backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Up to 60,000 puffs
          </span>

          <h1 className="font-display text-[52px] leading-[0.92] text-brand-cream text-balance">
            Vape bold.
            <br />
            <span className="text-brand-red">Tap into TikTok.</span>
          </h1>

          <div className="mt-1 flex items-center gap-3 text-brand-cream/75">
            <span className="font-display text-base">
              0{active + 1}
              <span className="text-brand-cream/40"> / 0{heroDeck.length}</span>
            </span>
            <span className="h-px flex-1 bg-brand-cream/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cream/70">
              {heroDeck[active]?.label}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <span className="flex items-center gap-1.5 rounded-full border border-brand-cream/25 bg-brand-cream/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-brand-cream/80 backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 7l-4 5 4 5" />
            <path d="M16 7l4 5-4 5" />
          </svg>
          Swipe
        </span>
      </div>

      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1.12);
          }
        }
        .tiktok-mobile-hero .swiper-pagination {
          bottom: 90px !important;
          left: 24px !important;
          width: auto !important;
          text-align: left !important;
        }
        .tiktok-mobile-hero .swiper-pagination-bullet {
          background: rgba(255, 243, 226, 0.45);
          opacity: 1;
          width: 22px;
          height: 3px;
          border-radius: 999px;
          margin: 0 4px !important;
          transition: width 0.35s ease, background 0.35s ease;
        }
        .tiktok-mobile-hero .swiper-pagination-bullet-active {
          background: #e22a2a;
          width: 36px;
        }
      `}</style>
    </section>
  );
}
