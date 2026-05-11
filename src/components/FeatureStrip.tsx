const features = [
  {
    title: "Premium hardware",
    desc: "Aerospace-grade alloys and ceramic coils for cleaner, smoother draws every time.",
    icon: (
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
    ),
  },
  {
    title: "Curated flavors",
    desc: "Twelve signature profiles, batched in small runs and blended by chefs.",
    icon: (
      <>
        <path d="M5 4h14v4a7 7 0 0 1-14 0V4z" />
        <path d="M12 15v6" />
        <path d="M8 21h8" />
      </>
    ),
  },
  {
    title: "Fast, discreet shipping",
    desc: "Free in the US over $50, plain packaging, signed for at the door — 21+ only.",
    icon: (
      <>
        <path d="M3 7h13v10H3z" />
        <path d="M16 10h4l1 3v4h-5" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-white/60 p-7 transition hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-brand-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-brand-cream">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl text-brand-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
