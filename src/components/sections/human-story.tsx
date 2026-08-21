import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Text } from "@/components/ui/text";
import { ImageFrame } from "@/components/ui/image-frame";
import { cn } from "@/lib/cn";

type HumanStoryProps = {
  name: string;
  role: string;
  quote?: string;
  body: string;
};

export function HumanStory({ name, role, quote, body }: HumanStoryProps) {
  return (
    <Container variant="wide">
      <div className="editorial-feature editorial-portrait">
        <div>
          <ImageFrame layout="founder-portrait" label={`Porträtt — ${name}`} caption={role} />
          <div className="mt-5 border-t border-border pt-4">
            <Text variant="dropdown-title" as="p">
              {name}
            </Text>
            <Text variant="meta" className="mt-1">
              {role}
            </Text>
          </div>
        </div>
        <div>
          <Eyebrow>Människan bakom</Eyebrow>
          {quote ? (
            <blockquote className="mt-6 max-w-3xl">
              <p className="text-quote text-ink">{quote}</p>
            </blockquote>
          ) : null}
          <Text variant="body-lg" className={cn(quote ? "mt-8" : "mt-6", "max-w-2xl text-ink-muted")}>
            {body}
          </Text>
        </div>
      </div>
    </Container>
  );
}
