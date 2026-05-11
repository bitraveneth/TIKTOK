import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col overflow-hidden bg-brand-cream pt-24 sm:pt-28 md:min-h-screen md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-red/10 blur-3xl sm:h-[460px] sm:w-[460px] md:h-[560px] md:w-[560px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[280px] w-[280px] rounded-full bg-brand-red/15 blur-3xl sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 hidden h-[360px] w-[360px] rounded-full bg-brand-red/10 blur-3xl sm:block"
      />

      <div className="relative flex flex-1 flex-col justify-between gap-8 pb-10 sm:gap-10 sm:pb-12 md:gap-14 md:pb-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-[40px] leading-[0.95] text-brand-ink text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
            Vape bold.
            <br />
            <span className="text-brand-red">Tap into TikTok.</span>
          </h1>
        </div>

        <div className="flex flex-1 items-center">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
