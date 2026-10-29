import { homePage } from "@/content/pages/home";
import { Button } from "@/components/ui/button";

export function SoulSplit() {
  const { soul } = homePage;
  return (
    <div className="relative">
      <section className="bg-canvas" aria-labelledby="sjal-rubrik">
        <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(6.75rem,0.82fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.9fr)]">
          <div className="px-4 py-10 sm:px-8 lg:px-14 lg:py-20">
            <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
              {soul.eyebrow}
            </p>
            <h2
              id="sjal-rubrik"
              className="mt-4 font-display text-[clamp(1.85rem,7.2vw,3.4rem)] font-normal uppercase leading-[1.02] tracking-[0.03em] text-ink"
            >
              {soul.title}
            </h2>
            <p className="mt-4 max-w-md text-body-sm text-ink-muted sm:text-body">{soul.lede}</p>
            <ul className="mt-8 border-t border-border">
              {soul.points.map((point) => (
                <li
                  key={point}
                  className="border-b border-border py-4 font-display text-[1.05rem] italic leading-snug text-ink sm:text-xl"
                >
                  <span className="mr-2 text-ink-subtle not-italic" aria-hidden>
                    —
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[18rem]">
            <div
              className="photo-pending sticky flex h-[calc(100svh-var(--header-height))] flex-col justify-between p-3 pb-16 lg:p-6 lg:pb-24"
              style={{ top: "var(--header-height)" }}
            >
              <span className="w-fit rounded-[var(--radius-pill)] border border-dashed border-ink/30 bg-surface/90 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em]">
                Foto saknas
              </span>
              <span className="text-[0.75rem] font-medium leading-snug text-ink sm:text-body-sm">
                {soul.imageLabel}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 -mt-8 rounded-t-[1.75rem] bg-studio text-ink-inverse motion-reduce:mt-0 motion-reduce:rounded-none sm:-mt-14">
        <div className="mx-auto max-w-[var(--container-default)] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-right font-display text-sm italic text-brand">{soul.dark.label}</p>
          <h2 className="mt-3 max-w-[12em] font-display text-[clamp(2.1rem,8vw,4.2rem)] font-normal uppercase leading-[0.98] tracking-[0.02em]">
            {soul.dark.title}
          </h2>
          <p className="mt-5 max-w-lg text-body text-ink-inverse/75">{soul.dark.body}</p>
          <div className="mt-8">
            <Button href={soul.dark.cta.href}>{soul.dark.cta.label}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
