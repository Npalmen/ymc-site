import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bloomline } from "@/components/ui/bloomline";
import { homepage } from "@/content/homepage";

export function HomeFeatured() {
  const { featured } = homepage;

  return (
    <section className="relative border-t border-border bg-canvas py-12 sm:py-16 min-[1180px]:py-[var(--space-section)]">
      <Bloomline
        variant="stem"
        className="pointer-events-none absolute right-0 top-12 hidden h-40 w-12 opacity-35 min-[1180px]:block"
        aria-hidden
      />
      <Container variant="wide">
        <div className="editorial-feature editorial-feature-reverse">
          <div>
            <Eyebrow>{featured.eyebrow}</Eyebrow>
            <Heading level="display-lg" className="mt-5 max-w-lg text-balance">
              {featured.title}
            </Heading>
            <Text variant="body-lg" className="mt-5 max-w-lg text-ink-muted">
              {featured.body}
            </Text>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Button href={featured.cta.href} className="w-full sm:w-auto">
                {featured.cta.label}
              </Button>
              <TextLink href={featured.secondaryCta.href} className="justify-center sm:justify-start">
                {featured.secondaryCta.label}
              </TextLink>
            </div>
          </div>
          <ImageFrame
            layout="editorial-portrait"
            label={featured.imageLabel}
            caption={featured.imageCaption}
          />
        </div>
      </Container>
    </section>
  );
}
