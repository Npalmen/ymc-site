import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Container } from "@/components/ui/container";
import { packagesPage } from "@/content/pages/singing";

export const metadata: Metadata = {
  title: packagesPage.metaTitle,
  description: packagesPage.metaDescription,
};

export default function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={packagesPage.eyebrow}
        title={packagesPage.title}
        lede={packagesPage.lede}
        trail={[
          { href: "/tjanster", label: "Tjänster" },
          { href: "/tjanster/sanglektioner", label: "Sånglektioner" },
        ]}
      />
      <Container className="pb-8">
        <PricingCards />
      </Container>
      <PlanningMeeting defaultTopic="prova-pa" />
    </PageShell>
  );
}
