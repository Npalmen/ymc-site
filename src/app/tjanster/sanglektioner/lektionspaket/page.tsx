import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Container } from "@/components/ui/container";
import { loadPackages } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await loadPackages();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function PackagesPage() {
  const { page, packages, extraSections } = await loadPackages();
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
      />
      <Container className="pb-8">
        <PricingCards packages={packages} notice={page.priceNotice} />
      </Container>
      <ExtraSections sections={extraSections} />
      <PlanningBlock defaultTopic="prova-pa" />
    </PageShell>
  );
}
