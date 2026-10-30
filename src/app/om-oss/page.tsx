import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PlanningBlock } from "@/components/sections/planning-block";
import { PrinciplesCard } from "@/components/sections/principles-card";
import { StoryBlock } from "@/components/sections/story-block";
import { Timeline } from "@/components/sections/timeline";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { loadAbout } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadAbout();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function AboutPage() {
  const page = await loadAbout();
  return (
    <PageShell>
      <StoryBlock about={page} portrait={page.portrait} />
      <Timeline items={page.timeline} title={page.timelineTitle} />
      <PrinciplesCard principles={page.principles} valuesLine={page.valuesLine} />
      <section id="starlight" className="bg-canvas py-16 sm:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <Pill>{page.studio.eyebrow}</Pill>
              <h2 className="text-section mt-5">{page.studio.title}</h2>
              <div className="mt-4 space-y-3 text-body text-ink-muted">
                {page.studio.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <PlaceholderFrame image={page.studioImage} label={page.studio.imageLabel} ratio="4/5" />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-display text-3xl">Samarbeten</h2>
            <p className="text-meta mt-2 max-w-xl">
              Logotyper visas inte här. Rätten att använda partnernas märken är inte klar.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.partners.map((partner) => (
                <li key={partner.name} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                  <h3 className="font-display text-2xl">{partner.name}</h3>
                  <p className="mt-2 text-body-sm text-ink-muted">{partner.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic="planering" />
    </PageShell>
  );
}
