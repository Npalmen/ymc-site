import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Container } from "@/components/ui/container";
import { educationHub } from "@/content/pages/education";

export const metadata: Metadata = {
  title: educationHub.metaTitle,
  description: educationHub.metaDescription,
};

export default function EducationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={educationHub.eyebrow}
        title={educationHub.title}
        lede={educationHub.lede}
        trail={[{ href: "/tjanster", label: "Tjänster" }]}
      />
      <Container className="pb-6">
        <ul className="border-t border-border">
          {educationHub.courses.map((course) => (
            <li key={course.href} className="border-b border-border">
              <Link href={course.href} className="group flex min-h-[5.5rem] items-center gap-4 py-4">
                <span className="w-8 font-display text-xl italic text-accent">{course.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.6rem] leading-tight">{course.title}</span>
                  <span className="text-meta mt-1 block">{course.note}</span>
                </span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl rounded-[var(--radius-card)] border border-dashed border-accent/40 bg-accent-soft px-4 py-3 text-body-sm">
          {educationHub.praktik}
        </p>
      </Container>
      <PlanningMeeting defaultTopic="musikproduktion" />
    </PageShell>
  );
}
