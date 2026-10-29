import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { serviceGroups } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Sånglektioner, utbildning och distribution hos Yellow Music United i Uppsala.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tjänster"
        title={[
          { text: "Välj var du vill " },
          { text: "börja", accent: true },
          { text: "." },
        ]}
        lede="Tre dörrar. Sång om du vill utveckla rösten. Utbildning om du vill lära dig producera eller skriva. Distribution om musiken ska ut, och fortfarande vara din."
      />
      <Container className="pb-16">
        <ul className="border-t border-border">
          {serviceGroups.map((group) => (
            <li key={group.href} className="border-b border-border py-6">
              <Link href={group.href} className="font-display text-3xl hover:text-accent">
                {group.label}
              </Link>
              <p className="text-meta mt-1 max-w-lg">{group.description}</p>
              {group.children.length > 0 ? (
                <ul className="mt-3 flex flex-col">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="inline-flex min-h-11 items-center text-body text-ink-muted hover:text-ink">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </PageShell>
  );
}
