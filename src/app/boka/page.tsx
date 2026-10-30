import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Button } from "@/components/ui/button";
import { loadBooking, loadPlanning, loadSite } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadBooking();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ amne?: string | string[] }>;
}) {
  const [params, page, planning, current] = await Promise.all([
    searchParams,
    loadBooking(),
    loadPlanning(),
    loadSite(),
  ]);
  const raw = Array.isArray(params.amne) ? params.amne[0] : params.amne;
  const topic = raw && planning.topics.some((item) => item.value === raw) ? raw : "planering";
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede}>
        <Button href={current.contact.phoneHref} variant="secondary" size="lg">
          Ring {current.contact.phone}
        </Button>
      </PageHero>
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic={topic} />
    </PageShell>
  );
}
