import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

type BookingReviewShellProps = {
  service: string;
  datetime: string;
  name: string;
  email: string;
  confirmed?: boolean;
};

export function BookingReviewShell({
  service,
  datetime,
  name,
  email,
  confirmed = false,
}: BookingReviewShellProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border border-border-strong bg-surface shadow-[var(--shadow-subtle)]">
      <div className="h-1 bg-gradient-to-r from-brand via-brand-muted to-brand-soft" aria-hidden />
      <div className="p-6 sm:p-8">
        {confirmed ? (
          <p className="text-label text-success">Bokning bekräftad — visuellt tillstånd</p>
        ) : (
          <p className="text-label text-ink-muted">Granska bokning</p>
        )}
        <Heading level="heading-md" className="mt-4">
          {confirmed ? "Tack — vi ses snart" : "Kontrollera bokningen"}
        </Heading>
        <dl className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="border-t border-border pt-4">
            <dt className="text-label text-ink-subtle">Tjänst</dt>
            <dd className="text-body mt-2 font-semibold">{service}</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="text-label text-ink-subtle">Datum & tid</dt>
            <dd className="text-body mt-2 font-semibold">{datetime}</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="text-label text-ink-subtle">Namn</dt>
            <dd className="text-body mt-2 font-semibold">{name}</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="text-label text-ink-subtle">E-post</dt>
            <dd className="text-body mt-2 font-semibold">{email}</dd>
          </div>
        </dl>
        {!confirmed ? (
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
            <Button type="button">Bekräfta bokning</Button>
            <Button type="button" variant="ghost">
              Tillbaka
            </Button>
          </div>
        ) : null}
        <Text variant="body-sm" className="mt-6 text-ink-subtle">
          Fixture — ingen bokningslogik. Personuppgifter är exempeldata.
        </Text>
      </div>
    </div>
  );
}
