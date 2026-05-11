"use client";

import { heroDeck } from "@/lib/products";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination, Keyboard]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        keyboard={{ enabled: true }}
        slidesPerView="auto"
        initialSlide={2}
        speed={900}
        spaceBetween={16}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 16,
          stretch: 0,
          depth: 160,
          modifier: 1.1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="tiktok-coverflow !pt-6 !pb-2"
      >
        {heroDeck.map((card) => (
          <SwiperSlide
            key={card.id}
            className="!w-[260px] sm:!w-[420px] md:!w-[560px] lg:!w-[680px] xl:!w-[820px]"
          >
            {({ isActive }) => (
              <div
                className={`group relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-brand-cream-deep transition-all duration-500 ${
                  isActive
                    ? "shadow-[0_40px_80px_-20px_rgba(226,42,42,0.45)] ring-2 ring-brand-red/50"
                    : "shadow-brand-card"
                }`}
                style={{ aspectRatio: "16 / 9" }}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(min-width: 1280px) 820px, (min-width: 1024px) 680px, (min-width: 768px) 560px, (min-width: 640px) 420px, 280px"
                  className="object-cover"
                  priority
                />

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/20 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-75"
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream/70 md:text-xs">
                      {card.sub}
                    </p>
                    <p className="mt-1 font-display text-xl leading-tight text-brand-cream md:text-3xl">
                      {card.label}
                    </p>
                  </div>

                  <span
                    className={`hidden items-center gap-2 rounded-full border border-brand-cream/30 bg-brand-cream/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream backdrop-blur transition md:inline-flex ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                    Featured
                  </span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .tiktok-coverflow {
          overflow: visible !important;
        }
        .tiktok-coverflow .swiper-wrapper {
          align-items: center;
        }
        .tiktok-coverflow .swiper-pagination {
          position: relative;
          margin-top: 1.5rem;
        }
        .tiktok-coverflow .swiper-pagination-bullet {
          width: 28px;
          height: 4px;
          border-radius: 999px;
          background: rgba(26, 6, 6, 0.18);
          opacity: 1;
          transition: background 0.3s, width 0.3s;
        }
        .tiktok-coverflow .swiper-pagination-bullet-active {
          background: #e22a2a;
          width: 44px;
        }
        .tiktok-coverflow .swiper-slide {
          transition: opacity 0.6s ease;
        }
        .tiktok-coverflow .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
