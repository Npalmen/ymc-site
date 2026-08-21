import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ResonanceBloom } from "@/components/ui/resonance-bloom";

type HomeCtaCloseProps = {
  title: string;
  body: string;
};

export function HomeCtaClose({ title, body }: HomeCtaCloseProps) {
  return (
    <section className="relative overflow-x-clip bg-brand-soft py-12 sm:py-16 lg:py-[var(--space-section-expressive)]">
      <ResonanceBloom
        intensity="full"
        className="pointer-events-none absolute left-1/2 top-2 h-44 w-44 -translate-x-1/2 opacity-[0.38] sm:top-4 sm:h-52 sm:w-52 sm:opacity-[0.42] lg:h-64 lg:w-64 lg:opacity-45"
      />
      <Container variant="default" className="relative">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <Eyebrow variant="minimal" className="text-center">
            Nästa steg
          </Eyebrow>
          <hr className="rule-center mx-auto mt-5 max-w-xs sm:mt-6 sm:max-w-md" />
          <Heading level="display-lg" className="mt-6 text-balance sm:mt-8">
            {title}
          </Heading>
          <Text variant="body-lg" className="mx-auto mt-4 max-w-lg text-ink-muted sm:mt-5">
            {body}
          </Text>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <Button href="/boka" size="lg" className="w-full sm:w-auto">
              Boka
            </Button>
            <TextLink href={`mailto:info@yellowmusicunited.se`} className="justify-center">
              Kontakta oss
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
