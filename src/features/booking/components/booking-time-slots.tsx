import { cn } from "@/lib/cn";

type TimeSlot = {
  time: string;
  selected?: boolean;
  disabled?: boolean;
};

type BookingTimeSlotsProps = {
  dateLabel: string;
  slots: TimeSlot[];
  className?: string;
};

export function BookingTimeSlots({ dateLabel, slots, className }: BookingTimeSlotsProps) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="text-label text-ink-muted">Datum</p>
          <p className="text-heading-sm mt-1">{dateLabel}</p>
        </div>
        <p className="text-meta">Stockholm tid</p>
      </div>
      <div
        className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4"
        role="radiogroup"
        aria-label={dateLabel}
      >
        {slots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            role="radio"
            disabled={slot.disabled}
            aria-checked={slot.selected}
            className={cn(
              "min-h-12 rounded-[var(--radius-sm)] border px-2 text-body-sm font-semibold tracking-wide transition-[border-color,background-color,color] duration-[var(--motion-base)] motion-reduce:transition-none",
              slot.disabled &&
                "cursor-not-allowed border-border/80 bg-canvas-subtle text-ink-subtle line-through",
              slot.selected &&
                !slot.disabled &&
                "border-brand bg-brand-soft text-ink shadow-[inset_0_0_0_1px_var(--color-brand)]",
              !slot.selected &&
                !slot.disabled &&
                "border-border bg-surface hover:border-brand/40 hover:bg-canvas-subtle",
            )}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}
