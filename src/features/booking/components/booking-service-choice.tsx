import { cn } from "@/lib/cn";

type ServiceOption = {
  id: string;
  title: string;
  description: string;
  duration?: string;
  selected?: boolean;
};

type BookingServiceChoiceProps = {
  options: ServiceOption[];
  className?: string;
};

export function BookingServiceChoice({ options, className }: BookingServiceChoiceProps) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)} role="radiogroup" aria-label="Välj tjänst">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={option.selected}
          className={cn(
            "group relative min-h-[6.25rem] overflow-hidden rounded-[var(--radius-md)] border px-5 py-5 text-left transition-[border-color,background-color,box-shadow] duration-[var(--motion-base)] motion-reduce:transition-none",
            option.selected
              ? "border-brand bg-brand-soft shadow-[var(--shadow-subtle)]"
              : "border-border bg-surface hover:border-border-strong hover:bg-canvas-subtle",
          )}
        >
          <span
            className={cn(
              "absolute inset-y-0 left-0 w-1 transition-opacity",
              option.selected ? "bg-brand opacity-100" : "bg-brand/0 opacity-0 group-hover:bg-brand/30 group-hover:opacity-100",
            )}
            aria-hidden
          />
          <span className="text-heading-sm block">{option.title}</span>
          <span className="text-body-sm mt-1.5 block text-ink-muted">{option.description}</span>
          {option.duration ? (
            <span className="text-meta mt-3 block">{option.duration}</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
