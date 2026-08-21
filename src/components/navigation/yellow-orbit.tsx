import Link from "next/link";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ResonanceBloom } from "@/components/ui/resonance-bloom";
import { Bloomline } from "@/components/ui/bloomline";
import { creativeWorlds, type WorldId } from "@/content/worlds";

type YellowOrbitProps = {
  activeWorldId?: WorldId | null;
  variant?: "nav" | "compact";
  className?: string;
  id?: string;
};

export function YellowOrbit({
  activeWorldId,
  variant = "nav",
  className,
  id = "utforska",
}: YellowOrbitProps) {
  const isCompact = variant === "compact";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-x-clip",
        isCompact ? "py-8" : "bg-surface py-[var(--space-section)] min-[1180px]:py-[var(--space-section-large)]",
        className,
      )}
      aria-label="Yellow Orbit — kreativa världar"
    >
      {!isCompact && (
        <>
          <ResonanceBloom
            intensity="partial"
            className="pointer-events-none absolute -right-16 top-8 hidden h-64 w-64 opacity-[0.08] min-[1180px]:block"
            aria-hidden
          />
          <Bloomline
            variant="direction"
            className="pointer-events-none absolute left-0 top-1/2 hidden h-[min(50vh,420px)] w-16 -translate-y-1/2 opacity-40 min-[1180px]:block"
            aria-hidden
          />
        </>
      )}

      <Container>
        {!isCompact && (
          <header className="max-w-2xl">
            <Eyebrow>Yellow Orbit</Eyebrow>
            <Heading level="display-lg" className="mt-5 max-w-xl text-balance">
              Fem kreativa världar
            </Heading>
            <Text variant="body-lg" className="mt-4 text-ink-muted">
              Välj din väg — varje område har sin egen sida med tydlig vägledning.
            </Text>
          </header>
        )}

        <nav
          className={cn("flex flex-col", isCompact ? "gap-0" : "mt-12 gap-0")}
          aria-label="Kreativa världar"
        >
          {creativeWorlds.map((world) => {
            const active = activeWorldId === world.id;
            return (
              <Link
                key={world.id}
                href={world.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex min-h-[3.25rem] flex-col justify-center border-t border-border py-4 transition-[color,transform] duration-[var(--motion-fast)] first:border-t-0 first:pt-0 hover:translate-x-0.5 motion-reduce:hover:translate-x-0",
                  active && "text-brand",
                  !isCompact && "min-[1180px]:min-h-[4rem]",
                )}
              >
                <span className="text-eyebrow text-ink-subtle">{world.number}</span>
                <span className="text-dropdown-title mt-1">{world.label}</span>
                {!isCompact && (
                  <span className="text-dropdown-description mt-1 line-clamp-2">
                    {world.tagline}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </Container>
    </section>
  );
}
