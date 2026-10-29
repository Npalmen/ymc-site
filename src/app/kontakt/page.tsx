import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ExtraSections } from "@/components/sections/extra-sections";
import { PageHero } from "@/components/sections/page-hero";
import { PlanningBlock } from "@/components/sections/planning-block";
import { Container } from "@/components/ui/container";
import { loadContact, loadSite } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadContact();
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ContactPage() {
  const [page, current] = await Promise.all([loadContact(), loadSite()]);
  const facts = [
    { label: "Telefon", value: current.contact.phone, href: current.contact.phoneHref },
    { label: "E-post", value: current.contact.email, href: `mailto:${current.contact.email}` },
    {
      label: "Postadress",
      value: `${current.addresses.registered.street}, ${current.addresses.registered.postalCode} ${current.addresses.registered.city}`,
    },
    {
      label: "Studio",
      value: `${current.addresses.studio.label}, ${current.addresses.studio.street}, ${current.addresses.studio.area}, ${current.addresses.studio.city}`,
    },
  ];
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
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
      <ExtraSections sections={page.extraSections} />
      <PlanningBlock defaultTopic="planering" />
    </PageShell>
  );
}
