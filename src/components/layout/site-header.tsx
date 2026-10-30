"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { bookingNavigation, serviceGroups, topLinks } from "@/content/navigation";
import { Wordmark } from "@/components/brand/wordmark";
import { MobileMenu } from "@/components/layout/mobile-menu";

type SiteHeaderProps = {
  className?: string;
  preview?: boolean;
  groups?: typeof serviceGroups;
  links?: typeof topLinks;
  booking?: typeof bookingNavigation;
  phone?: string;
  phoneHref?: string;
  email?: string;
  logo?: string | null;
};

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function BrandMark({ logo }: { logo?: string | null }) {
  return (
    <Link
      href="/"
      className="flex min-h-11 min-w-0 items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
      aria-label="Yellow Music United, startsida"
    >
      <Wordmark src={logo} priority className="brand-wordmark" />
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
      {open ? (
        <path d="M3.2 3.2 12.8 12.8M12.8 3.2 3.2 12.8" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M2.5 5.25h11M2.5 10.75h11" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}

function ServicesMenu({ groups }: { groups: typeof serviceGroups }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const panelId = useId();
  const active = pathname.startsWith("/tjanster");

  useEffect(() => {
    if (!open) return;
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[0.9375rem] font-medium",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
          active ? "text-ink" : "text-ink-muted hover:text-ink",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        Tjänster
        <span aria-hidden className={cn("text-[0.7rem] transition-transform", open && "rotate-180")}>
          ▾
        </span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-[calc(100%-0.25rem)] z-50 w-[min(24rem,70vw)] pt-3"
      >
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-3 shadow-[var(--shadow-soft)]">
          <ul className="flex flex-col">
            {groups.map((group) => (
              <li key={group.href} className="border-b border-border/80 py-2 last:border-b-0">
                <Link
                  href={group.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <span className="block font-display text-xl text-ink">{group.label}</span>
                  <span className="text-meta mt-0.5 block">{group.description}</span>
                </Link>
                {group.children.length > 0 ? (
                  <ul className="mt-1 flex flex-col px-3 pb-1">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="inline-flex min-h-10 items-center text-body-sm text-ink-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            href="/tjanster"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex min-h-11 items-center px-3 text-body-sm font-medium text-ink hover:text-accent"
          >
            Alla tjänster
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({
  className,
  preview = false,
  groups = serviceGroups,
  links = topLinks,
  booking = bookingNavigation,
  phone,
  phoneHref,
  email,
  logo = null,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const y = window.scrollY;
    document.body.style.overflow = open ? "hidden" : "";
    if (window.scrollY !== y) window.scrollTo(0, y);
    document.body.toggleAttribute("data-menu-open", open);
    const nodes = document.querySelectorAll("main, footer");
    nodes.forEach((node) => {
      if (open) node.setAttribute("inert", "");
      else node.removeAttribute("inert");
    });
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-menu-open");
      nodes.forEach((node) => node.removeAttribute("inert"));
    };
  }, [open]);

  useEffect(() => {
    const closeFromSheet = () => setOpen(false);
    window.addEventListener("ymu-close-menu", closeFromSheet);
    return () => window.removeEventListener("ymu-close-menu", closeFromSheet);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuTriggerRef.current?.focus({ preventScroll: true }));
  };

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={cn(
          "sticky top-0 z-50 border-b border-border/70 bg-canvas/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md",
          className,
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[var(--container-wide)] items-center justify-between gap-3 px-4 sm:px-6">
          <BrandMark logo={logo} />
          <nav className="hidden items-center min-[1080px]:flex" aria-label="Primär">
            <ServicesMenu groups={groups} />
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-3 text-[0.9375rem] font-medium",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
                  isActive(pathname, link.href) ? "text-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {preview ? (
              <span className="hidden text-meta min-[1080px]:inline">Designsystem</span>
            ) : null}
            <Button href={booking.href}>{booking.label}</Button>
            <button
              ref={menuTriggerRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink/15 bg-surface text-ink min-[1080px]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        open={open}
        onClose={closeMenu}
        groups={groups}
        links={links}
        booking={booking}
        phone={phone}
        phoneHref={phoneHref}
        email={email}
      />
    </>
  );
}
