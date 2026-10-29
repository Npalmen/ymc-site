import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { loadSimpleService } from "@/sanity/load";

type Params = { slug: string[] };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await loadSimpleService(`/tjanster/${slug.join("/")}`);
  return { title: page?.title ?? "Tjänst", description: page?.lede };
}

export default async function SimpleServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = await loadSimpleService(`/tjanster/${slug.join("/")}`);
  if (!page) notFound();
  return (
    <PageShell>
      <PageHero
        eyebrow="Tjänster"
        title={[{ text: page.title }]}
        lede={page.lede || page.description || ""}
        trail={[{ href: "/tjanster", label: "Tjänster" }]}
      >
        {page.ctaLabel && page.ctaHref ? (
          <Button href={page.ctaHref} size="lg">
            {page.ctaLabel}
          </Button>
        ) : null}
      </PageHero>
      <Container className="pb-8">
        <PlaceholderFrame image={page.image} label={page.imageLabel || page.title} ratio="16/9" />
        <div className="mt-8 max-w-2xl space-y-4 text-body text-ink-muted">
          {(page.paragraphs ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {page.points?.length ? (
          <ul className="mt-6 max-w-2xl space-y-3">
            {page.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-success" aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock />
    </PageShell>
  );
}
