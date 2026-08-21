import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getWorld, type WorldId } from "@/content/worlds";

type OrbitContextProps = {
  worldId: WorldId;
  className?: string;
};

/** Active-world marker on hub pages — 01 — SÅNG */
export function OrbitContext({ worldId, className }: OrbitContextProps) {
  const world = getWorld(worldId);

  return (
    <Eyebrow className={cn("mb-0", className)}>
      {world.number} — {world.label}
    </Eyebrow>
  );
}
