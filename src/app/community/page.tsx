import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { communityPage } from "@/content/pages/community";

export const metadata: Metadata = {
  title: communityPage.metaTitle,
  description: communityPage.metaDescription,
};

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHero eyebrow={communityPage.eyebrow} title={communityPage.title} lede={communityPage.lede}>
        <Button href="/kontakt" size="lg">
          Hör av dig
        </Button>
      </PageHero>
      <Container className="pb-8">
        <PlaceholderFrame label={communityPage.imageLabel} ratio="16/9" />
        <div className="mt-8 max-w-2xl space-y-4 text-body text-ink-muted">
          {communityPage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {communityPage.points.map((point) => (
            <li key={point.title} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
              <h2 className="font-display text-2xl">{point.title}</h2>
              <p className="mt-2 text-body-sm text-ink-muted">{point.body}</p>
            </li>
          ))}
        </ul>
      </Container>
      <PlanningMeeting defaultTopic="community" />
    </PageShell>
  );
}
