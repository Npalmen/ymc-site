import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { DifferenceTable } from "@/components/sections/difference-table";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { singingAlso, singingPage } from "@/content/pages/singing";

export const metadata: Metadata = {
  title: singingPage.metaTitle,
  description: singingPage.metaDescription,
};

export default function SingingPage() {
  return (
    <PageShell>
      <PageHero eyebrow={singingPage.eyebrow} title={singingPage.title} lede={singingPage.lede}>
        <Button href="/tjanster/sanglektioner/lektionspaket" size="lg">
          Mina lektionspaket
        </Button>
        <Button href="/tjanster/sanglektioner/steg-for-steg" variant="secondary" size="lg">
          Steg för steg
        </Button>
      </PageHero>
      <Container className="pb-4">
        <PlaceholderFrame label={singingPage.imageLabel} ratio="16/9" caption="Fyrislund · Uppsala" />
      </Container>
      <DifferenceTable />
      <section id="pedagogik" className="bg-canvas pb-8">
        <Container>
          <h2 className="font-display text-3xl">Också inom sången</h2>
          <p className="mt-3 max-w-xl text-body text-ink-muted">
            De här spåren finns i pedagogiken. De har inga egna sidor ännu, och bokas via samma samtal.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {singingAlso.map((item) => (
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
      <PlanningMeeting defaultTopic="prova-pa" />
    </PageShell>
  );
}
