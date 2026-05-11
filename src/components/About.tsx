import StorySlideshow from "./StorySlideshow";

const stats = [
  { value: "60K", label: "Puffs per device" },
  { value: "11+", label: "Signature flavors" },
  { value: "5%", label: "Salt nicotine" },
  { value: "98%", label: "Customers re-order" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <StorySlideshow />

            <div className="absolute -bottom-6 -right-4 z-10 rounded-3xl border border-brand-ink/10 bg-brand-cream px-5 py-4 shadow-brand-card md:-right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                Made in
              </p>
              <p className="font-display text-2xl text-brand-ink">Portland, OR</p>
            </div>
            <div className="absolute -top-6 -left-4 z-10 hidden rotate-[-6deg] rounded-3xl border border-brand-red/30 bg-brand-red px-5 py-4 text-brand-cream shadow-brand-card md:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream/80">
                Since
              </p>
              <p className="font-display text-2xl">2021</p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Our story
            </span>
            <h2 className="mt-3 font-display text-4xl leading-[1.0] text-brand-ink sm:text-5xl md:text-6xl">
              Bold flavor.
              <br />
              <span className="text-brand-red">Built to last.</span>
            </h2>
            <p className="mt-5 max-w-xl text-brand-ink/70">
              TikTok Vape was born from a simple idea: a disposable should taste
              better, last longer, and look way cooler than anything in the
              corner store. Eleven flavors, two devices, zero compromises.
            </p>
            <p className="mt-4 max-w-xl text-brand-ink/70">
              Every device is lab-tested for purity and consistency, with a
              smart LED dashboard, mesh coil, and up to 60,000 puffs per pod.
              No leaks, no burnt hits, no surprises.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-brand-red pl-4"
                >
                  <dt className="font-display text-4xl text-brand-ink">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
