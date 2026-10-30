import { lessonPackages, packagesPage } from "@/content/pages/singing";
import { Button } from "@/components/ui/button";

type PackageCard = {
  id: string;
  title: string;
  summary: string;
  price: string;
  priceMissing: boolean;
  note: string;
  points: readonly string[];
  cta: string;
  href: string;
};

export function PricingCards({
  packages = lessonPackages,
  notice = packagesPage.priceNotice,
}: {
  packages?: readonly PackageCard[];
  notice?: string;
}) {
  return (
    <div>
      <p className="rounded-[var(--radius-card)] border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-body-sm text-ink">
        {notice}
      </p>
      <div className="mt-8 flex flex-col gap-12">
        {packages.map((pack) => (
          <article key={pack.id} className="package-card">
            <div className="rounded-[var(--radius-card)] border border-border bg-surface px-5 py-6 sm:px-7">
              <h3 className="font-display text-[1.85rem] leading-tight text-ink">{pack.title}</h3>
              <p className="mt-3 max-w-prose text-body text-ink-muted">{pack.summary}</p>
              <hr className="my-5 border-border" />
              <p className="text-body-sm text-ink-muted">Investering</p>
              {pack.priceMissing ? (
                <p className="mt-1 inline-flex rounded-[var(--radius-pill)] border border-dashed border-accent/60 bg-accent-soft px-3 py-1 font-sans text-base font-semibold not-italic text-ink">
                  {pack.price}
                </p>
              ) : (
                <p className="font-display text-[2.4rem] italic leading-none text-accent">{pack.price}</p>
              )}
              <p className="mt-2 text-body-sm text-ink">{pack.note}</p>
            </div>
            <ul className="mt-5 space-y-3 px-1">
              {pack.points.map((point) => (
                <li key={point} className="flex gap-3 text-body">
                  <span className="mt-0.5 text-success" aria-hidden>
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={pack.href} variant="ink" fullWidth size="lg">
                {pack.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
