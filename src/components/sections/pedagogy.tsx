import { pedagogy } from "@/content/pages/pedagogy";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";

const icons: Record<string, string> = {
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  note: "M9 18V5l12-2v13M9 8l12-2M9 18c0 4-6 4-6 1s6-4 6-1Zm12-2c0 4-6 4-6 1s6-4 6-1Z",
  plant: "M12 21v-9M7 21h10M12 16C5 16 3 12 3 8c6 0 9 3 9 8Zm0-5c0-6 4-8 9-8 0 5-3 8-9 8Z",
  microphone: "M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5ZM5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8",
  sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
};

export function Pedagogy({ data = pedagogy }: { data?: typeof pedagogy }) {
  return (
    <section className="bg-canvas py-14 sm:py-20" aria-labelledby="pedagogy-title">
      <Container>
        <Pill>{data.eyebrow}</Pill>
        <h2 id="pedagogy-title" className="text-section mt-5 max-w-[18em]">{data.title}</h2>
        <p className="mt-5 max-w-2xl text-body text-ink-muted">{data.lede}</p>
        <ol className="mt-9 max-w-3xl border-t border-border">
          {data.points.map((point, index) => (
            <li key={point.id} className="flex gap-4 border-b border-border py-7 sm:gap-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-accent sm:size-14">
                <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={icons[point.icon] ?? icons.sun} /></svg>
              </span>
              <div>
                <h3 className="font-sans text-xl font-semibold sm:text-2xl"><span className="text-accent">{String(index + 1).padStart(2, "0")}.</span> {point.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
