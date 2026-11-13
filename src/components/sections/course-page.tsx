import { PricingCards } from "@/components/sections/pricing-cards";
import type { CoursePageContent } from "@/content/pages/education";
import { ExtraSections } from "@/components/sections/extra-sections";
import type { CmsImage } from "@/sanity/image";
import type { ExtraSection } from "@/sanity/load";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PageHero } from "@/components/sections/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { PlanningBlock } from "@/components/sections/planning-block";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceJson } from "@/lib/seo";
export function CourseView({
  course,
  path,
}: {
  course: CoursePageContent & { image?: CmsImage | null; extraSections?: ExtraSection[] };
  path: string;
}) {
  return (
    <PageShell>
      <JsonLd data={serviceJson({ name: course.metaTitle, description: course.metaDescription, path })} />
      <PageHero
        eyebrow={course.eyebrow}
        title={course.title}
        lede={course.lede}
        path={path}
        trail={[
          { href: "/tjanster", label: "Tjänster" },
          { href: "/tjanster/utbildning", label: "Utbildning" },
        ]}
      >
        <Button href={course.cta.href} size="lg">
          {course.cta.label}
        </Button>
      </PageHero>
      <Container className="pb-8">
        <PlaceholderFrame image={course.image} label={course.imageLabel} ratio="16/9" />
        <div className="mt-10 max-w-[40rem] space-y-8">
          {course.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-3xl">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-body text-ink-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-[40rem]">
          <PricingCards notice="" packages={[{
            id: course.topic, title: course.metaTitle, summary: course.cardDescription,
            price: course.price || "Pris saknas", priceMissing: !course.price,
            paymentInfo: course.paymentInfo, note: course.note, points: [],
            cta: course.cta.label, href: course.cta.href,
          }]} />
        </div>
      </Container>
      <ExtraSections sections={course.extraSections} />
      <PlanningBlock defaultTopic={course.topic} />
    </PageShell>
  );
}
