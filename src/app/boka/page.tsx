import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TextLink } from "@/components/ui/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Boka · Yellow Music",
  description: "Bokning — kommer snart.",
};

export default function BokaPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Container className="py-[var(--space-section)] text-center">
          <Heading level="heading-xl" className="text-balance">
            Boka
          </Heading>
          <Text variant="body-lg" className="mx-auto mt-5 max-w-md text-ink-muted">
            Bokningsflöde är inte implementerat ännu. Planering finns i dokumentationen för
            Area 04.
          </Text>
          <Text variant="body-sm" className="mx-auto mt-8 max-w-md text-ink-muted">
            Tills vidare:{" "}
            <a
              href={`mailto:${site.contact.email}?subject=Planeringsm%C3%B6te`}
              className="text-ink underline-offset-4 hover:text-brand hover:underline"
            >
              {site.contact.email}
            </a>
          </Text>
          <TextLink href="/" className="mx-auto mt-10 justify-center">
            Tillbaka till startsidan
          </TextLink>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
