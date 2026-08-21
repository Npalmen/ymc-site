import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type SectionIntroProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <Eyebrow variant="minimal" className={align === "center" ? "justify-center" : undefined}>
        {label}
      </Eyebrow>
      <hr className="rule-accent mt-4 max-w-md" />
      <Heading level="heading-lg" className="mt-6">
        {title}
      </Heading>
      {description ? (
        <Text variant="body-lg" className="mt-4 text-ink-muted prose-width">
          {description}
        </Text>
      ) : null}
    </div>
  );
}
