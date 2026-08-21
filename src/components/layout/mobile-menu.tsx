"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ResonanceBloom } from "@/components/ui/resonance-bloom";
import { mobileMenuCta, mobileMenuSections } from "@/content/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  preview?: boolean;
};

export function MobileMenu({ open, onClose, preview = false }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  const sections = preview
    ? [
        {
          id: "preview",
          label: "Preview",
          items: [{ label: "Design system", href: "/design-system" }],
        },
      ]
    : mobileMenuSections;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] min-[1024px]:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={cn(
          "absolute inset-0 bg-ink/15 transition-opacity duration-[var(--motion-base)] motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Stäng meny"
        tabIndex={-1}
        onClick={handleClose}
      />

      <div
        ref={dialogRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigeringsmeny"
        className={cn(
          "absolute inset-x-0 top-[4rem] bottom-0 flex flex-col bg-canvas transition-[opacity,transform] duration-[var(--motion-base)] motion-reduce:transition-none sm:top-[4.25rem]",
          open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        )}
      >
        <ResonanceBloom
          intensity="whisper"
          className="pointer-events-none absolute -right-24 top-24 h-56 w-56 opacity-[0.04]"
          aria-hidden
        />

        <Container className="flex flex-1 flex-col overflow-y-auto py-8">
          {sections.map((section) => (
            <div key={section.id} className="mb-10 last:mb-6">
              <p className="text-eyebrow text-ink-subtle">{section.label}</p>
              <nav className="mt-4" aria-label={section.label}>
                <ul>
                  {section.items.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="flex min-h-[3.25rem] items-center py-2 text-dropdown-title text-ink transition-colors hover:text-ink-muted active:text-brand"
                        onClick={handleClose}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          <div className="mt-auto border-t border-border pt-8">
            <p className="text-eyebrow mb-4 text-ink-subtle">Boka</p>
            <Button href={preview ? "/boka" : mobileMenuCta.href} size="lg" className="w-full">
              {preview ? "Boka" : mobileMenuCta.label}
            </Button>
            <button
              type="button"
              className="text-body-sm mt-5 w-full py-2 text-center text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
              onClick={handleClose}
            >
              Stäng · ångra
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
