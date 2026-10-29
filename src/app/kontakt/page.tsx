import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { Container } from "@/components/ui/container";
import { contactPage } from "@/content/pages/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
};

const facts = [
  { label: "Telefon", value: site.contact.phone, href: site.contact.phoneHref },
  { label: "E-post", value: site.contact.email, href: `mailto:${site.contact.email}` },
  {
    label: "Postadress",
    value: `${site.addresses.registered.street}, ${site.addresses.registered.postalCode} ${site.addresses.registered.city}`,
  },
  {
    label: "Studio",
    value: `Starlight Studios, ${site.addresses.studio.street}, ${site.addresses.studio.area}, ${site.addresses.studio.city}`,
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lede={contactPage.lede} />
      <Container className="pb-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <li key={fact.label} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">{fact.label}</p>
              {fact.href ? (
                <a href={fact.href} className="mt-2 inline-flex min-h-11 items-center text-lg font-medium">
                  {fact.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-medium">{fact.value}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
      <PlanningMeeting defaultTopic="planering" />
    </PageShell>
  );
}
