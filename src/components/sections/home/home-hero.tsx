import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bloomline } from "@/components/ui/bloomline";
import { ResonanceBloom } from "@/components/ui/resonance-bloom";
import { homepage } from "@/content/homepage";

export function HomeHero() {
  const { hero } = homepage;

  return (
    <section className="relative overflow-x-clip bg-canvas">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgb(255_242_212_/_50%),transparent_58%)]"
        aria-hidden
      />
      <ResonanceBloom
        intensity="partial"
        className="pointer-events-none absolute -right-20 top-16 hidden h-56 w-56 opacity-[0.28] min-[1180px]:block min-[1180px]:h-72 min-[1180px]:w-72 min-[1180px]:opacity-[0.32]"
      />

      <Container variant="wide" className="relative pt-6 pb-10 sm:pt-8 sm:pb-12 min-[1180px]:pt-10 min-[1180px]:pb-[var(--space-section)]">
        <div className="editorial-feature">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading level="display-xl" className="mt-4 max-w-[14ch] text-balance sm:mt-5">
              {hero.headline}
            </Heading>
            <Text variant="body-lg" className="mt-4 max-w-lg text-ink-muted sm:mt-5">
              {hero.subheadline}
            </Text>

            <div className="mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <Button href={hero.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <TextLink href={hero.secondaryCta.href} className="justify-center sm:justify-start">
                {hero.secondaryCta.label}
              </TextLink>
            </div>

            <Text variant="body" className="mt-6 max-w-xl text-ink-muted min-[1180px]:mt-8">
              {hero.body}
            </Text>
          </div>

          <div className="relative w-full">
            <Bloomline
              variant="hero"
              className="pointer-events-none absolute -left-2 bottom-8 hidden h-[min(55vh,480px)] w-20 opacity-40 min-[1180px]:block min-[1180px]:h-[min(65vh,520px)] min-[1180px]:w-24 min-[1180px]:opacity-50"
            />
            <ImageFrame
              layout="hero-media"
              label={hero.imageLabel}
              caption="Solros · varumärkesfotografi"
            />
          </div>
        </div>
      </Container>

      <div className="rule-accent mx-auto max-w-[var(--container-wide)] opacity-60" aria-hidden />
    </section>
  );
}
