import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ImageFrame } from "@/components/ui/image-frame";
import { Button } from "@/components/ui/button";

type FeatureBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageLabel: string;
  cta?: { label: string; href: string };
};

export function FeatureBlock({ eyebrow, title, body, imageLabel, cta }: FeatureBlockProps) {
  return (
    <Container>
      <div className="editorial-feature editorial-feature-reverse">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="heading-lg" className="mt-5">
            {title}
          </Heading>
          <Text variant="body-lg" className="mt-5 max-w-md text-ink-muted">
            {body}
          </Text>
          {cta ? (
            <div className="mt-10">
              <Button href={cta.href} variant="secondary">
                {cta.label}
              </Button>
            </div>
          ) : null}
        </div>
        <ImageFrame layout="editorial-landscape" label={imageLabel} caption="Editorial crop · 16:10" />
      </div>
    </Container>
  );
}
