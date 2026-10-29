import type { CoursePageContent } from "@/content/pages/education";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PageHero } from "@/components/sections/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import type { PlanningTopic } from "@/content/pages/shared";

export function CourseView({ course }: { course: CoursePageContent }) {
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
        <PlaceholderFrame label={course.imageLabel} ratio="16/9" />
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
      <PlanningMeeting defaultTopic={course.topic as PlanningTopic} />
    </PageShell>
  );
}
