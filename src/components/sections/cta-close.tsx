import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";

type CtaCloseProps = {
  title: string;
  body: string;
};

export function CtaClose({ title, body }: CtaCloseProps) {
  return (
    <Container variant="default">
      <div className="relative overflow-hidden border-y border-border-strong py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(255_242_212_/_55%),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow variant="minimal" className="text-center">
            Nästa steg
          </Eyebrow>
          <hr className="rule-center mx-auto mt-6 max-w-lg" />
          <Heading level="display-lg" className="mt-8">
            {title}
          </Heading>
          <Text variant="body-lg" className="mx-auto mt-5 max-w-xl text-ink-muted">
            {body}
          </Text>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/boka" size="lg">
              Boka
            </Button>
            <TextLink href="mailto:info@yellowmusicunited.se">info@yellowmusicunited.se</TextLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
