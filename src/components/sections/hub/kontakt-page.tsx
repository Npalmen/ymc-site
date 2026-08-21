import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { kontaktPage } from "@/content/areas/kontakt";

export function KontaktPageContent() {
  const { contact, cta, note } = kontaktPage;

  return (
    <>
      <section className="bg-canvas py-12 sm:py-16 lg:py-[var(--space-section)]">
        <Container>
          <Eyebrow>{kontaktPage.eyebrow}</Eyebrow>
          <Heading level="display-lg" className="mt-5 max-w-xl">
            {kontaktPage.headline}
          </Heading>
          <Text variant="body-lg" className="mt-5 max-w-2xl text-ink-muted">
            {kontaktPage.intro}
          </Text>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-12 sm:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Kontaktvägar</Eyebrow>
              <ul className="mt-6 space-y-4 text-body-lg">
                <li>
                  <a href={contact.phoneHref} className="hover:text-brand">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:text-brand">
                    {contact.email}
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <Button href={cta.href} size="lg">
                  {cta.label}
                </Button>
              </div>
            </div>
            <div className="border border-border bg-canvas p-6">
              <p className="text-label text-ink-subtle">Adress</p>
              <Text variant="body" className="mt-3 text-ink-muted">
                {note}
              </Text>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
