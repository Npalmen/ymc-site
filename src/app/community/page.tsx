import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { pageMetadata } from "@/lib/seo";
import { loadCommunity, loadSite } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  if (!(await loadSite()).communityEnabled) notFound();
  const page = await loadCommunity();
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: "/community" });
}

export default async function CommunityPage() {
  if (!(await loadSite()).communityEnabled) notFound();
  const page = await loadCommunity();
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} path="/community">
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
