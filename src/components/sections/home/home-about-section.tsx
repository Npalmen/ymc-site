import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Text } from "@/components/ui/text";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bloomline } from "@/components/ui/bloomline";
import { homepage } from "@/content/homepage";

export function HomeAboutSection() {
  const { about } = homepage;

  return (
    <section
      id="om"
      className="relative overflow-x-clip bg-canvas py-12 sm:py-16 min-[1180px]:py-[var(--space-section-expressive)]"
    >
      <Container variant="wide">
        <div className="editorial-feature editorial-portrait">
          <ImageFrame
            layout="founder-portrait"
            label={about.imageLabel}
            caption={about.role}
          />
          <div>
            <Eyebrow>Människan bakom</Eyebrow>
            {about.quote ? (
              <blockquote className="relative mt-5 sm:mt-6">
                <Bloomline
                  variant="stem"
                  className="pointer-events-none absolute -left-1 top-0 hidden h-16 w-8 opacity-40 min-[1180px]:block min-[1180px]:h-20 min-[1180px]:w-10"
                />
                <p className="text-quote max-w-2xl text-balance text-ink">
                  {about.quote}
                </p>
              </blockquote>
            ) : null}
            <Text variant="body-lg" className="mt-6 max-w-2xl text-ink-muted sm:mt-8">
              {about.body}
            </Text>
            <div className="mt-8 border-t border-border pt-5 sm:mt-10">
              <Text variant="dropdown-title" as="p">
                {about.name}
              </Text>
              <Text variant="meta" className="mt-1">
                {about.role}
              </Text>
              <TextLink href={about.moreHref} className="mt-5">
                Läs hela Yellow Music-historien
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
