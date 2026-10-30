import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { loadSteps } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadSteps();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function StepsPage() {
  const page = await loadSteps();
  return (
    <PageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lede={page.lede}
        trail={[
          { href: "/tjanster", label: "Tjänster" },
          { href: "/tjanster/sanglektioner", label: "Sånglektioner" },
        ]}
      >
        <Button href="/boka?amne=planering" size="lg">
          Boka nu
        </Button>
      </PageHero>
      <Container className="pb-8">
        <ol className="max-w-xl">
          {page.steps.map((step) => (
            <li key={step.n} className="rise border-t border-border py-7">
              <p className="font-sans text-2xl font-semibold text-accent">{step.n}</p>
              <h2 className="mt-2 font-display text-3xl">{step.title}</h2>
              <p className="mt-2 text-body text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic="planering" />
    </PageShell>
  );
}
