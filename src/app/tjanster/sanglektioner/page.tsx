import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { DifferenceTable } from "@/components/sections/difference-table";
import { PlanningBlock } from "@/components/sections/planning-block";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { RichLine } from "@/components/ui/rich-line";
import { loadPackages, loadSinging, loadSteps } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await loadSinging();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function SingingPage() {
  const [{ page, difference, also, image, extraSections }, steps, packages] = await Promise.all([
    loadSinging(),
    loadSteps(),
    loadPackages(),
  ]);
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede}>
        <Button href="#lektionspaket" size="lg">
          Mina lektionspaket
        </Button>
        <Button href="#steg-for-steg" variant="secondary" size="lg">
          Steg för steg
        </Button>
      </PageHero>
      <Container className="pb-4">
        <PlaceholderFrame image={image} label={page.imageLabel} ratio="16/9" caption="Fyrislund · Uppsala" />
      </Container>
      <DifferenceTable data={difference} />
      <section id="steg-for-steg" className="section-anchor bg-canvas py-16 sm:py-20">
        <Container>
          <p className="text-meta">{steps.eyebrow}</p>
          <h2 className="text-section mt-3 max-w-[14em]">
            <RichLine parts={steps.title} />
          </h2>
          <p className="mt-4 max-w-xl text-body text-ink-muted">{steps.lede}</p>
          <ol className="mt-8 max-w-xl">
            {steps.steps.map((step) => (
              <li key={step.n} className="border-t border-border py-7">
                <p className="nums font-sans text-2xl font-semibold text-accent">{step.n}</p>
                <h3 className="mt-2 font-display text-3xl">{step.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section id="lektionspaket" className="section-anchor bg-surface py-16 sm:py-20">
        <Container>
          <p className="text-meta">{packages.page.eyebrow}</p>
          <h2 className="text-section mt-3 max-w-[14em]">
            <RichLine parts={packages.page.title} />
          </h2>
          <p className="mt-4 max-w-xl text-body text-ink-muted">{packages.page.lede}</p>
          <div className="mt-8">
            <PricingCards packages={packages.packages} notice={packages.page.priceNotice} />
          </div>
        </Container>
      </section>
      <section id="pedagogik" className="section-anchor bg-canvas pb-8">
        <Container>
          <h2 className="font-display text-3xl">Också inom sången</h2>
          <p className="mt-3 max-w-xl text-body text-ink-muted">
            De här spåren finns i pedagogiken. De har inga egna sidor ännu, och bokas via samma samtal.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {also.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                <h3 className="font-sans text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-body-sm text-ink-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/tjanster/utbildning" className="inline-flex min-h-11 items-center font-medium">
              Vidare till utbildning →
            </Link>
          </p>
        </Container>
      </section>
      <ExtraSections sections={extraSections} />
      <PlanningBlock defaultTopic="prova-pa" />
    </PageShell>
  );
}
