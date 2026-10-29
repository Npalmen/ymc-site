import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { DifferenceTable } from "@/components/sections/difference-table";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { loadSinging } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await loadSinging();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function SingingPage() {
  const { page, difference, also, image, extraSections } = await loadSinging();
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede}>
        <Button href="/tjanster/sanglektioner/lektionspaket" size="lg">
          Mina lektionspaket
        </Button>
        <Button href="/tjanster/sanglektioner/steg-for-steg" variant="secondary" size="lg">
          Steg för steg
        </Button>
      </PageHero>
      <Container className="pb-4">
        <PlaceholderFrame image={image} label={page.imageLabel} ratio="16/9" caption="Fyrislund · Uppsala" />
      </Container>
      <DifferenceTable data={difference} />
      <section id="pedagogik" className="bg-canvas pb-8">
        <Container>
          <h2 className="font-display text-3xl">Också inom sången</h2>
          <p className="mt-3 max-w-xl text-body text-ink-muted">
            De här spåren finns i pedagogiken. De har inga egna sidor ännu, och bokas via samma samtal.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {also.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
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
