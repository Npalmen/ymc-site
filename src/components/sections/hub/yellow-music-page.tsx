import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bloomline } from "@/components/ui/bloomline";
import { RelatedWorlds } from "@/components/navigation/related-worlds";
import { yellowMusicPage } from "@/content/areas/yellow-music";

export function YellowMusicPage() {
  const { founder, values, cta, secondaryCta, relatedWorldIds } = yellowMusicPage;

  return (
    <>
      <section className="relative overflow-x-clip bg-canvas py-12 sm:py-16 min-[1180px]:py-[var(--space-section-expressive)]">
        <Bloomline
          variant="stem"
          className="pointer-events-none absolute -left-1 top-24 hidden h-32 w-10 opacity-40 min-[1180px]:block"
          aria-hidden
        />
        <Container variant="wide">
          <Eyebrow>Yellow Music</Eyebrow>
          <Heading level="display-lg" className="mt-6 max-w-3xl text-balance sm:mt-8">
            Din navigator genom musikbranschen
          </Heading>
          <Text variant="body-lg" className="mt-5 max-w-2xl text-ink-muted sm:mt-6">
            Yellow Music United grundades 2020 med målet att förena musik med människor — med
            positivitet och genuinitet.
          </Text>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Button href={cta.href} size="lg" className="w-full sm:w-auto">
              {cta.label}
            </Button>
            <TextLink href={secondaryCta.href} className="justify-center sm:justify-start">
              {secondaryCta.label}
            </TextLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-12 sm:py-14 min-[1180px]:py-16">
        <Container variant="wide">
          <div className="editorial-feature editorial-portrait">
            <div id="grundare">
              <ImageFrame
                layout="founder-portrait"
                label={founder.imageLabel}
                caption={founder.role}
              />
            </div>
            <div>
              <blockquote>
                <p className="text-quote max-w-2xl text-balance">{founder.quote}</p>
              </blockquote>
              <Text variant="body-lg" className="mt-6 max-w-2xl text-ink-muted sm:mt-8">
                {founder.body}
              </Text>
              <div className="mt-8 border-t border-border pt-5">
                <Text variant="dropdown-title" as="p">
                  {founder.name}
                </Text>
                <Text variant="meta" className="mt-1">
                  {founder.role}
                </Text>
              </div>
              <TextLink href="/studio" className="mt-8">
                Läs mer om Starlight Studios
              </TextLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-canvas py-12 sm:py-14">
        <Container>
          <Eyebrow>Värderingar</Eyebrow>
          <ul className="mt-8 grid gap-6 min-[1180px]:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border-t border-border pt-5">
                <Text variant="dropdown-title" as="p">
                  {v.title}
                </Text>
                <Text variant="body-sm" className="mt-2 text-ink-muted">
                  {v.summary}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <RelatedWorlds relatedIds={relatedWorldIds} />
    </>
  );
}
