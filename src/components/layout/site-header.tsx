"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { MobileMenu } from "@/components/layout/mobile-menu";
import {
  bookingNavigation,
  desktopLeftNavGroups,
  desktopRightNavGroups,
} from "@/content/navigation";

type SiteHeaderProps = {
  className?: string;
  preview?: boolean;
};

function BrandMark({ preview }: { preview?: boolean }) {
  return (
    <Link
      href={preview ? "/design-system" : "/"}
      className="group flex flex-col items-center justify-center text-center"
      aria-label="Yellow Music United — startsida"
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-[3px] bg-surface">
        <span className="text-button-label text-brand-contrast tracking-[0.14em]">YM</span>
      </span>
      <span className="mt-1.5 hidden text-nav text-ink sm:block">Yellow Music</span>
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex size-6 items-center justify-center" aria-hidden>
      <span
        className={cn(
          "absolute h-px w-5 bg-ink transition-[transform,opacity] duration-[var(--motion-base)] motion-reduce:transition-none",
          open ? "translate-y-0 rotate-45" : "-translate-y-[5px]",
        )}
      />
      <span
        className={cn(
          "absolute h-px w-5 bg-ink transition-[transform,opacity] duration-[var(--motion-base)] motion-reduce:transition-none",
          open ? "translate-y-0 -rotate-45" : "translate-y-[5px]",
        )}
      />
    </span>
  );
}

export function SiteHeader({ className, preview = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuTriggerRef.current?.focus());
  };

  const openMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border/60 bg-canvas/95 supports-[backdrop-filter]:bg-canvas/92 supports-[backdrop-filter]:backdrop-blur-sm",
          className,
        )}
      >
        <Container className="h-[4rem] sm:h-[4.25rem] min-[1024px]:h-[4.5rem]">
          {/* Mobile: Boka | Logo | Menu */}
          <div className="grid h-full grid-cols-[4rem_minmax(0,1fr)_4rem] items-center min-[1024px]:hidden">
            <div className="flex items-center justify-start">
              <Link
                href="/boka"
                className="text-nav text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                onClick={() => setOpen(false)}
              >
                Boka
              </Link>
            </div>
            <div className="flex justify-center">
              <BrandMark preview={preview} />
            </div>
            <div className="flex items-center justify-end">
              <button
                ref={menuTriggerRef}
                type="button"
                className="inline-flex size-10 items-center justify-center text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                aria-expanded={open}
                aria-controls="mobile-menu-panel"
                onClick={() => (open ? closeMenu() : openMenu())}
              >
                <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
                <MenuIcon open={open} />
              </button>
            </div>
          </div>

          {/* Desktop: Utforska/Tjänster | Logo | Yellow Music/Boka */}
          <div className="hidden h-full min-[1024px]:grid min-[1024px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[1024px]:items-center">
            <nav className="flex items-center justify-end gap-1 pr-6" aria-label="Primär navigering vänster">
              {preview ? (
                <span className="text-nav text-ink-subtle">Design system</span>
              ) : (
                desktopLeftNavGroups.map((group) => (
                  <NavDropdown key={group.id} group={group} align="left" />
                ))
              )}
            </nav>

            <div className="flex justify-center px-8">
              <BrandMark preview={preview} />
            </div>

            <div className="flex items-center justify-start gap-4 pl-6">
              {!preview &&
                desktopRightNavGroups.map((group) => (
                  <NavDropdown key={group.id} group={group} align="right" />
                ))}
              <Button href={bookingNavigation.href} size="md">
                {bookingNavigation.label}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={closeMenu} preview={preview} />
    </>
  );
}
