import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bloomline } from "@/components/ui/bloomline";
import { ResonanceBloom } from "@/components/ui/resonance-bloom";
import { OrbitContext } from "@/components/navigation/orbit-context";
import { RelatedWorlds } from "@/components/navigation/related-worlds";
import type { HubContent } from "@/content/areas/types";
import type { MediaLayout } from "@/components/ui/image-frame";

const toneShell: Record<HubContent["tone"], string> = {
  warm: "bg-canvas",
  studio: "surface-studio text-ink-inverse",
  structured: "bg-surface",
  directional: "bg-canvas",
  community: "bg-surface",
  editorial: "bg-canvas",
};

const toneBloom: Record<
  HubContent["tone"],
  "stem" | "rhythm" | "path" | "direction" | "bloom"
> = {
  warm: "stem",
  studio: "rhythm",
  structured: "path",
  directional: "direction",
  community: "bloom",
  editorial: "stem",
};

const toneMediaLayout: Record<HubContent["tone"], MediaLayout> = {
  warm: "editorial-portrait",
  studio: "studio-landscape",
  structured: "editorial-portrait",
  directional: "editorial-portrait",
  community: "editorial-landscape",
  editorial: "founder-portrait",
};

type HubPageProps = {
  content: HubContent;
};

export function HubPage({ content }: HubPageProps) {
  const isStudio = content.tone === "studio";
  const bloomVariant = toneBloom[content.tone];
  const mediaLayout = toneMediaLayout[content.tone];

  return (
    <>
      <section
        className={cn(
          "relative overflow-x-clip py-12 sm:py-16 min-[1180px]:py-[var(--space-section-expressive)]",
          toneShell[content.tone],
        )}
      >
        {content.tone === "directional" && (
          <Bloomline
            variant="direction"
            className="pointer-events-none absolute right-0 top-16 hidden h-48 w-[min(40vw,360px)] opacity-40 min-[1180px]:block"
            aria-hidden
          />
        )}
        {isStudio && (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-canvas to-transparent opacity-90"
              aria-hidden
            />
            <ResonanceBloom
              intensity="whisper"
              className="pointer-events-none absolute -right-12 top-20 h-48 w-48 opacity-[0.15]"
              aria-hidden
            />
          </>
        )}

        <Container variant="wide">
          <OrbitContext worldId={content.id} />
          <Heading
            level="display-lg"
            className={cn(
              "mt-6 max-w-3xl text-balance sm:mt-8",
              isStudio && "text-ink-inverse",
            )}
          >
            {content.headline}
          </Heading>
          <Text
            variant="body-lg"
            className={cn("mt-5 max-w-2xl sm:mt-6", isStudio ? "text-ink-inverse/75" : "text-ink-muted")}
          >
            {content.intro}
          </Text>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Button href={content.cta.href} size="lg" className="w-full sm:w-auto">
              {content.cta.label}
            </Button>
            {content.secondaryCta ? (
              <TextLink
                href={content.secondaryCta.href}
                variant={isStudio ? "inverse" : "default"}
                className="justify-center sm:justify-start"
              >
                {content.secondaryCta.label}
              </TextLink>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-canvas py-12 sm:py-14 min-[1180px]:py-16">
        <Container variant="wide">
          <div className="editorial-feature">
            <ImageFrame
              layout={mediaLayout}
              label={content.imageLabel}
              caption={content.imageCaption}
              variant={isStudio ? "studio" : "default"}
            />
            <div>
              <Eyebrow>Vem det är för</Eyebrow>
              <Text variant="body-lg" className="mt-4 max-w-xl text-ink-muted">
                {content.whoFor}
              </Text>
              <hr className="rule-accent my-8 max-w-xs" />
              <Eyebrow>Vår approach</Eyebrow>
              <Text variant="body" className="mt-4 max-w-xl text-ink-muted">
                {content.approach}
              </Text>
              <Text variant="body" className="mt-4 max-w-xl">
                {content.difference}
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-12 sm:py-14 min-[1180px]:py-16">
        <Container>
          <div className="flex items-start gap-4">
            <Bloomline
              variant={bloomVariant}
              className="pointer-events-none hidden h-14 w-8 shrink-0 opacity-40 min-[1180px]:block"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <Eyebrow>{content.servicesHeading}</Eyebrow>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {content.services.map((service) => (
                  <li key={service.title} className="py-5 sm:py-6">
                    <Text variant="dropdown-title" as="p">
                      {service.title}
                    </Text>
                    <Text variant="body-sm" className="mt-2 max-w-2xl text-ink-muted">
                      {service.summary}
                    </Text>
                    {service.bookingIntent ? (
                      <Text variant="meta" className="mt-3">
                        Detaljsida planerad · boka via{" "}
                        <a href="/boka" className="text-ink underline-offset-2 hover:text-brand hover:underline">
                          Boka
                        </a>
                      </Text>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <RelatedWorlds currentWorldId={content.id} relatedIds={content.relatedWorldIds} />
    </>
  );
}
