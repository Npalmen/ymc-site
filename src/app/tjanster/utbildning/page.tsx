import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Container } from "@/components/ui/container";
import { loadEducation } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await loadEducation();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function EducationPage() {
  const { page, courses, extraSections } = await loadEducation();
  return (
    <PageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lede={page.lede}
        trail={[{ href: "/tjanster", label: "Tjänster" }]}
      />
      <Container className="pb-6">
        <ul className="border-t border-border">
          {courses.map((course) => (
            <li key={course.href} className="border-b border-border">
              <Link href={course.href} className="group flex min-h-[5.5rem] items-center gap-4 py-4">
                <span className="nums w-8 font-sans text-xl font-semibold text-accent">{course.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sans text-[1.6rem] font-semibold leading-tight">{course.title}</span>
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
          {page.praktik}
        </p>
      </Container>
      <ExtraSections sections={extraSections} />
      <PlanningBlock defaultTopic="musikproduktion" />
    </PageShell>
  );
}
