import Link from "next/link";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getRelatedWorlds, getWorld, type WorldId } from "@/content/worlds";

type RelatedWorldsProps = {
  currentWorldId?: WorldId;
  relatedIds: WorldId[];
  className?: string;
  inverse?: boolean;
};

export function RelatedWorlds({
  currentWorldId,
  relatedIds,
  className,
  inverse = false,
}: RelatedWorldsProps) {
  const worlds = currentWorldId
    ? getRelatedWorlds(currentWorldId, relatedIds)
    : relatedIds.map((id) => getWorld(id));
  if (worlds.length === 0) return null;

  return (
    <section className={cn("border-t border-border py-12 sm:py-14 min-[1180px]:py-16", className)}>
      <Container>
        <Eyebrow className={inverse ? "text-ink-inverse/50" : undefined}>
          Fortsätt utforska
        </Eyebrow>
        <nav className="mt-6 flex flex-col" aria-label="Relaterade världar">
          {worlds.map((world) => (
            <Link
              key={world.id}
              href={world.href}
              className={cn(
                "group flex min-h-[3.25rem] flex-col justify-center border-b py-4 transition-[color,transform] duration-[var(--motion-fast)] hover:translate-x-0.5 motion-reduce:hover:translate-x-0",
                inverse
                  ? "border-ink-inverse/15 text-ink-inverse hover:text-ink-inverse/80"
                  : "border-border text-ink hover:text-ink-muted",
              )}
            >
              <span className="text-eyebrow text-ink-subtle">{world.number}</span>
              <span className="text-dropdown-title mt-1">{world.label}</span>
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
