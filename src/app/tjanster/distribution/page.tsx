import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { distributionPage } from "@/content/pages/distribution";

export const metadata: Metadata = {
  title: distributionPage.metaTitle,
  description: distributionPage.metaDescription,
};

export default function DistributionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={distributionPage.eyebrow}
        title={distributionPage.title}
        lede={distributionPage.lede}
        trail={[{ href: "/tjanster", label: "Tjänster" }]}
      >
        <Button href="/boka?amne=distribution" size="lg">
          Boka nu
        </Button>
      </PageHero>
      <Container className="pb-4">
        <PlaceholderFrame label={distributionPage.imageLabel} ratio="16/9" />
        <div className="mt-12 max-w-2xl space-y-12 pb-8">
          {distributionPage.blocks.map((block) => (
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
      <PlanningMeeting defaultTopic="distribution" />
    </PageShell>
  );
}
