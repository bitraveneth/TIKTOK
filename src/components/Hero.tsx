import HeroCarousel from "./HeroCarousel";
import MobileHero from "./MobileHero";

export default function Hero() {
  return (
    <div id="top">
      <MobileHero />

      <section className="relative hidden min-h-screen flex-col overflow-hidden bg-brand-cream pt-32 md:flex">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-red/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-[460px] w-[460px] rounded-full bg-brand-red/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-brand-red/10 blur-3xl"
        />

        <div className="relative flex flex-1 flex-col justify-between gap-14 pb-16">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-7xl leading-[0.95] text-brand-ink text-balance lg:text-[88px]">
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
    </div>
  );
}
