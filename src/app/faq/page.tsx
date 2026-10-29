import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { FaqList } from "@/components/sections/faq-list";
import { Container } from "@/components/ui/container";
import { loadFaqPage } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadFaqPage();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function FaqRoute() {
  const page = await loadFaqPage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <Container className="pb-8">
        <FaqList items={page.items} />
      </Container>
      <ExtraSections sections={page.extraSections} />
    </PageShell>
  );
}
