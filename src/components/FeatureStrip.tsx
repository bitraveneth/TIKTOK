const features = [
  {
    stat: "60K",
    statSub: "PUFFS",
    title: "Longest in the game",
    desc: "Pull on it for weeks. Our flagship 60K outlasts everything in its class — no charger, no refill, no excuses.",
    accent: "#E22A2A",
    tilt: "-2deg",
  },
  {
    stat: "0",
    statSub: "SETUP",
    title: "Open & rip",
    desc: "Every device ships pre-filled and pre-charged. Crack the seal, take a draw, you're in.",
    accent: "#1A0606",
    tilt: "1.5deg",
  },
  {
    stat: "11",
    statSub: "FLAVORS",
    title: "Chef-blended drops",
    desc: "Real fruit-forward profiles, mesh-coil smooth, salt-nic mellow. No mystery aftertaste.",
    accent: "#FFD93D",
    tilt: "-1deg",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-16 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-ink/15 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Why TikTok
            </span>
            <h2 className="mt-3 font-display text-4xl leading-[1.0] text-brand-ink sm:text-5xl md:text-6xl">
              Built loud. <span className="text-brand-red">Built to last.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-brand-ink/65 md:text-right">
            Three reasons our devices stay on top of every For You feed — no
            gimmicks, just the receipts.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="relative"
              style={{ transform: `rotate(${f.tilt})` }}
            >
              <div className="absolute -inset-1 -z-10 rounded-[28px] bg-brand-ink sm:-inset-1.5" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border-2 border-brand-ink bg-brand-cream p-6 shadow-[5px_5px_0_0_#1A0606] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1A0606] sm:p-7">
                <div className="absolute -right-3 top-5 rotate-[8deg] rounded-md border-2 border-brand-ink bg-brand-cream px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-ink shadow-[2px_2px_0_0_#1A0606]">
                  №0{i + 1}
                </div>

                <div className="flex items-end gap-2">
                  <span
                    className="font-display text-[80px] leading-none tracking-tight sm:text-[96px]"
                    style={{ color: f.accent }}
                  >
                    {f.stat}
                  </span>
                  <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/55">
                    {f.statSub}
                  </span>
                </div>

                <div
                  aria-hidden
                  className="mt-2 h-1.5 w-12 origin-left rounded-full"
                  style={{ background: f.accent }}
                />

                <h3 className="mt-5 font-display text-2xl text-brand-ink sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70 sm:text-[15px]">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink/50 sm:mt-12">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Mesh coil
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Salt nicotine
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Lab tested
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            21+ only
          </span>
        </div>
      </div>
    </section>
  );
}
