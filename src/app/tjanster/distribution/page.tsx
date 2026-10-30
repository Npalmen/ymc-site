import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { loadDistribution } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadDistribution();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function DistributionPage() {
  const page = await loadDistribution();
  return (
    <PageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lede={page.lede}
        trail={[{ href: "/tjanster", label: "Tjänster" }]}
      >
        <Button href="/boka?amne=distribution" size="lg">
          Boka nu
        </Button>
      </PageHero>
      <Container className="pb-4">
        <PlaceholderFrame image={page.image} label={page.imageLabel} ratio="16/9" />
        <div className="mt-12 max-w-2xl space-y-12 pb-8">
          {page.blocks.map((block) => (
            <section key={block.id} id={block.id}>
              <h2 className="font-display text-3xl">{block.title}</h2>
              <div className="mt-3 space-y-3 text-body text-ink-muted">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic="distribution" />
    </PageShell>
  );
}
