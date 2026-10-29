import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { FaqList } from "@/components/sections/faq-list";
import { Container } from "@/components/ui/container";
import { faqPage } from "@/content/pages/contact";

export const metadata: Metadata = {
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
};

export default function FaqRoute() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPage.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={faqPage.eyebrow} title={faqPage.title} lede={faqPage.lede} />
      <Container className="pb-20">
        <FaqList />
      </Container>
    </PageShell>
  );
}
