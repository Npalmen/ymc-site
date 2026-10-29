import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { stepsPage } from "@/content/pages/singing";

export const metadata: Metadata = {
  title: stepsPage.metaTitle,
  description: stepsPage.metaDescription,
};

export default function StepsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={stepsPage.eyebrow}
        title={stepsPage.title}
        lede={stepsPage.lede}
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
          {stepsPage.steps.map((step) => (
            <li key={step.n} className="rise border-t border-border py-7">
              <p className="font-display text-2xl italic text-accent">{step.n}</p>
              <h2 className="mt-2 font-display text-3xl">{step.title}</h2>
              <p className="mt-2 text-body text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
      <PlanningMeeting defaultTopic="planering" />
    </PageShell>
  );
}
