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
export function CourseView({
  course,
}: {
  course: CoursePageContent & { image?: CmsImage | null; extraSections?: ExtraSection[] };
}) {
  return (
    <PageShell>
      <PageHero
        eyebrow={course.eyebrow}
        title={course.title}
        lede={course.lede}
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
        <ul className="mt-8 max-w-[40rem] space-y-3">
          {course.points.map((point) => (
            <li key={point} className="flex gap-3 text-body">
              <span className="text-success" aria-hidden>
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[40rem] rounded-[var(--radius-card)] border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-body-sm">
          {course.missing}
        </p>
      </Container>
      <ExtraSections sections={course.extraSections} />
      <PlanningBlock defaultTopic={course.topic} />
    </PageShell>
  );
}
