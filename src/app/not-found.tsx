import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <PageShell>
      <Container className="py-24">
        <p className="font-display italic text-accent">404</p>
        <h1 className="text-hero mt-3 max-w-[10em]">Sidan finns inte.</h1>
        <p className="mt-4 max-w-md text-body text-ink-muted">
          Länken kan vara gammal. Sång, utbildning och utgivning finns under tjänster.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/">Till startsidan</Button>
          <Button href="/tjanster" variant="secondary">
            Tjänster
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
