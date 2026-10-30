import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { loadCommunity } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadCommunity();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function CommunityPage() {
  const page = await loadCommunity();
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede}>
        <Button href="/kontakt" size="lg">
          Hör av dig
        </Button>
      </PageHero>
      <Container className="pb-8">
        <PlaceholderFrame image={page.image} label={page.imageLabel} ratio="16/9" />
        <div className="mt-8 max-w-2xl space-y-4 text-body text-ink-muted">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {page.points.map((point) => (
            <li key={point.title} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
              <h2 className="font-sans text-2xl font-semibold">{point.title}</h2>
              <p className="mt-2 text-body-sm text-ink-muted">{point.body}</p>
            </li>
          ))}
        </ul>
      </Container>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic="community" />
    </PageShell>
  );
}
