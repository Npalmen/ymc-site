import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { bookingPage } from "@/content/pages/contact";
import { planningTopics, type PlanningTopic } from "@/content/pages/shared";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: bookingPage.metaTitle,
  description: bookingPage.metaDescription,
};

function resolveTopic(value: string | string[] | undefined): PlanningTopic {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw && planningTopics.some((topic) => topic.value === raw)) {
    return raw as PlanningTopic;
  }
  return "planering";
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ amne?: string | string[] }>;
}) {
  const params = await searchParams;
  return (
    <PageShell>
      <PageHero eyebrow={bookingPage.eyebrow} title={bookingPage.title} lede={bookingPage.lede}>
        <Button href={site.contact.phoneHref} variant="secondary" size="lg">
          Ring {site.contact.phone}
        </Button>
      </PageHero>
      <PlanningMeeting defaultTopic={resolveTopic(params.amne)} />
    </PageShell>
  );
}
