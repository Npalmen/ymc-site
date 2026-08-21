import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Bloomline } from "@/components/ui/bloomline";

type HomeTrustProps = {
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export function HomeTrust({ eyebrow, title, body, cta }: HomeTrustProps) {
  return (
    <section className="relative overflow-x-clip border-y border-border bg-[linear-gradient(180deg,var(--color-canvas-subtle)_0%,var(--color-canvas)_100%)] py-12 sm:py-[var(--space-section)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level="heading-lg" className="mt-4 text-balance sm:mt-5">
              {title}
            </Heading>
            <Text variant="body-lg" className="mt-4 text-ink-muted">
              {body}
            </Text>
            <div className="mt-7 sm:mt-8">
              <Button href={cta.href} variant="secondary" external className="w-full sm:w-auto">
                {cta.label}
              </Button>
              <p className="text-meta mt-3">Källa: Trustpilot — inget betyg inbäddat</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-md)] border border-border-strong bg-surface p-5 sm:p-6">
              <p className="text-label text-ink-subtle">Framtida omdömesyta</p>
              <p className="text-body-sm mt-2 text-ink-muted">
                Struktur för verifierade recensioner — Google Business Profile eller andra källor
                kan integreras här utan att ändra sidans ton.
              </p>
              <div className="mt-5 space-y-3" aria-hidden>
                {[1, 2, 3].map((slot) => (
                  <div
                    key={slot}
                    className="rounded-[var(--radius-sm)] border border-dashed border-border bg-canvas-subtle/80 px-4 py-3"
                  >
                    <span className="text-meta text-ink-subtle">Omdömesplats {slot} — reserverad</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Bloomline
        variant="direction"
        className="pointer-events-none absolute bottom-6 right-4 hidden h-8 w-40 opacity-35 min-[768px]:block lg:right-[10%]"
      />
    </section>
  );
}
