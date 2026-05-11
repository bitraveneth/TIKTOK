"use client";

import { heroDeck } from "@/lib/products";
import Image from "next/image";
import { useState } from "react";
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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-cream pt-24 md:hidden"
      aria-label="TikTok Vape hero"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-25%] h-[320px] w-[320px] rounded-full bg-brand-red/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-20%] h-[320px] w-[320px] rounded-full bg-brand-red/10 blur-3xl"
      />

      <div className="relative flex flex-1 flex-col px-4 pb-8">
        <div className="relative mt-4 h-[58vh] min-h-[380px] w-full">
          <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-[32px] bg-brand-ink" />
          <div className="relative h-full w-full overflow-hidden rounded-[32px] border-2 border-brand-ink bg-brand-ink shadow-[6px_6px_0_0_#1A0606]">
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
                        active === i
                          ? "animate-[kenburns_7s_ease-out_forwards]"
                          : ""
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-ink/70 via-brand-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-cream/70">
                        Scene
                      </p>
                      <p className="mt-0.5 font-display text-lg leading-tight text-brand-cream">
                        {card.label}
                      </p>
                    </div>
                    <span className="font-display text-sm text-brand-cream/80">
                      0{active + 1}
                      <span className="text-brand-cream/40"> / 0{heroDeck.length}</span>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="relative mt-7 flex flex-col items-start gap-3 px-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-brand-cream px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-ink shadow-[3px_3px_0_0_#1A0606]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Up to 60,000 puffs
          </span>

          <h1 className="font-display text-[44px] leading-[0.95] text-brand-ink text-balance">
            Vape bold.
            <br />
            <span className="text-brand-red">Tap into TikTok.</span>
          </h1>
        </div>
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
          bottom: 64px !important;
          left: 16px !important;
          right: auto !important;
          width: auto !important;
          text-align: left !important;
        }
        .tiktok-mobile-hero .swiper-pagination-bullet {
          background: rgba(255, 243, 226, 0.45);
          opacity: 1;
          width: 18px;
          height: 3px;
          border-radius: 999px;
          margin: 0 3px !important;
          transition: width 0.35s ease, background 0.35s ease;
        }
        .tiktok-mobile-hero .swiper-pagination-bullet-active {
          background: #e22a2a;
          width: 32px;
        }
      `}</style>
    </section>
  );
}
