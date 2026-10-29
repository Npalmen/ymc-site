import { Container } from "@/components/ui/container";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import type { ExtraSection } from "@/sanity/load";

export function ExtraSections({ sections }: { sections?: ExtraSection[] }) {
  if (!sections?.length) return null;
  return (
    <section className="bg-canvas pb-8">
      <Container className="space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-3xl">{section.heading}</h2>
            {section.text ? <p className="mt-3 max-w-2xl text-body text-ink-muted">{section.text}</p> : null}
            {section.image ? (
              <div className="mt-5 max-w-3xl">
                <PlaceholderFrame image={section.image} label={section.heading} ratio="16/9" />
              </div>
            ) : null}
          </div>
        ))}
      </Container>
    </section>
  );
}
