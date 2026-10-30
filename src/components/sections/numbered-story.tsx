import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type StoryStep = {
  number: string;
  title: string;
  body: string;
};

type NumberedStoryProps = {
  title: string;
  steps: StoryStep[];
};

export function NumberedStory({ title, steps }: NumberedStoryProps) {
  return (
    <Container>
      <Eyebrow>Tre vägar</Eyebrow>
      <Heading level="heading-xl" className="mt-4 max-w-xl">
        {title}
      </Heading>
      <ol className="mt-14 grid gap-0 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className="relative border-t border-border px-0 py-8 md:border-t-0 md:border-l md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0"
          >
            <span
              className="nums pointer-events-none absolute -top-6 left-0 text-[clamp(4rem,8vw,6rem)] font-medium leading-none text-brand-soft md:-top-8"
              aria-hidden
            >
              {step.number}
            </span>
            <p className="text-label text-brand-line">{step.number}</p>
            <Heading level="heading-md" className="mt-4">
              {step.title}
            </Heading>
            <Text variant="body" className="mt-3 text-ink-muted">
              {step.body}
            </Text>
            {index < steps.length - 1 ? (
              <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-border md:block" />
            ) : null}
          </li>
        ))}
      </ol>
    </Container>
  );
}
