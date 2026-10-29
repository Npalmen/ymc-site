import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SoulSplit } from "@/components/sections/soul-split";
import { ReviewRail } from "@/components/sections/review-rail";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { RichLine } from "@/components/ui/rich-line";
import { homePage } from "@/content/pages/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.shortName} — Musikbolag i Uppsala` },
  description: site.description,
};

export default function HomePage() {
  const { hero, paths, founder, close } = homePage;
  return (
    <PageShell>
      <section className="pb-8 pt-8 sm:pt-14">
        <Container>
          <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.72fr)] lg:items-end lg:gap-12">
            <div>
              <Pill>{hero.eyebrow}</Pill>
              <h1 className="text-hero mt-5 max-w-[11em]">
                <RichLine parts={hero.title} />
              </h1>
              <p className="text-body-lg mt-5 max-w-[36rem] text-ink-muted">{hero.lede}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={hero.primary.href} size="lg">
                  {hero.primary.label}
                </Button>
                <Button href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </Button>
              </div>
              <ul className="mt-8 flex flex-col gap-1 text-body-sm text-ink-muted sm:flex-row sm:gap-6">
                {hero.meta.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <PlaceholderFrame label={hero.imageLabel} caption={hero.imageCaption} ratio="4/5" />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-6" aria-labelledby="vagar-rubrik">
        <Container>
          <h2 id="vagar-rubrik" className="sr-only">
            Vägar in
          </h2>
          <ul className="border-t border-border">
            {paths.map((path) => (
              <li key={path.href} className="border-b border-border">
                <Link
                  href={path.href}
                  className="group flex min-h-[5.25rem] items-center gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
                >
                  <span className="w-8 font-display text-xl italic text-accent">{path.n}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.7rem] leading-tight">{path.title}</span>
                    <span className="text-meta mt-0.5 block">{path.note}</span>
                  </span>
                  <span
                    aria-hidden
                    className="text-xl transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href={homePage.communityLink.href} className="inline-flex min-h-11 items-center font-medium">
              {homePage.communityLink.label} →
            </Link>
          </p>
        </Container>
      </section>

      <SoulSplit />
      <ReviewRail />

      <section className="bg-canvas py-16 sm:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center lg:gap-12">
            <div>
              <Pill>{founder.eyebrow}</Pill>
              <h2 className="text-section mt-5 max-w-[14em]">
                <RichLine parts={founder.title} />
              </h2>
              <p className="mt-4 max-w-xl text-body text-ink-muted">{founder.body}</p>
              <div className="mt-6">
                <Button href={founder.cta.href} variant="secondary">
                  {founder.cta.label}
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <PlaceholderFrame label={founder.imageLabel} ratio="3/4" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-accent-soft py-16 sm:py-20">
        <Container>
          <h2 className="text-section max-w-[12em]">
            <RichLine parts={close.title} />
          </h2>
          <p className="mt-4 max-w-lg text-body text-ink-muted">{close.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/boka" size="lg">
              Boka nu
            </Button>
            <Button href="/kontakt" variant="secondary" size="lg">
              Kontakt
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
