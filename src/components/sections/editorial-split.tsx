import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ImageFrame } from "@/components/ui/image-frame";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";

type EditorialSplitProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageLabel: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
};

export function EditorialSplit({
  eyebrow,
  title,
  body,
  imageLabel,
  reverse,
  cta,
}: EditorialSplitProps) {
  return (
    <Container variant="wide">
      <div className={cn("editorial-feature", reverse && "editorial-feature-reverse")}>
        <div className={cn(reverse && "min-[1180px]:order-2")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="heading-xl" className="mt-5 max-w-lg">
            {title}
          </Heading>
          <Text variant="body-lg" className="mt-6 max-w-lg text-ink-muted">
            {body}
          </Text>
          {cta ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Button href={cta.href}>{cta.label}</Button>
              <TextLink href="#">Läs mer</TextLink>
            </div>
          ) : null}
        </div>
        <ImageFrame layout="editorial-landscape" label={imageLabel} bleed />
      </div>
    </Container>
  );
}
