"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { bookingNavigation, serviceGroups, topLinks, type NavLink, type ServiceGroup } from "@/content/navigation";
import { site } from "@/content/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  groups?: ServiceGroup[];
  links?: NavLink[];
  booking?: NavLink;
  phone?: string;
  phoneHref?: string;
  email?: string;
};

export function MobileMenu({
  open,
  onClose,
  groups = serviceGroups,
  links = topLinks,
  booking = bookingNavigation,
  phone = site.contact.phone,
  phoneHref = site.contact.phoneHref,
  email = site.contact.email,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    if (!root) return;

    const focusable = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>("a, button, [href], input, select, textarea"),
      ).filter((node) => !node.hasAttribute("disabled"));

    const frame = requestAnimationFrame(() => focusable()[0]?.focus({ preventScroll: true }));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = focusable();
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-menu-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Meny"
      className="glass fixed inset-x-0 bottom-0 z-40 flex flex-col min-[1080px]:hidden"
      style={{ top: "var(--header-height)" }}
    >
      <nav className="flex-1 overflow-y-auto px-5 pb-6 pt-4" aria-label="Mobilmeny">
        <div className="border-b border-border">
          <button
            type="button"
            className="flex min-h-14 w-full items-center justify-between text-left font-sans text-[2rem] font-semibold leading-none text-ink"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((value) => !value)}
          >
            Tjänster
            <span aria-hidden className="font-sans text-base text-ink-muted">
              {servicesOpen ? "–" : "+"}
            </span>
          </button>
          {servicesOpen ? (
            <ul className="flex flex-col gap-4 pb-5">
              {groups.map((group) => (
                <li key={group.href}>
                  <Link
                    href={group.href}
                    onClick={onClose}
                    className="font-sans text-[1.45rem] font-semibold leading-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
                  >
                    {group.label}
                  </Link>
                  {group.children.length > 0 ? (
                    <ul className="mt-1.5 flex flex-col">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="inline-flex min-h-11 items-center text-body text-ink-muted"
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
          ) : null}
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="border-b border-border">
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex min-h-14 items-center font-sans text-[2rem] font-semibold leading-none text-ink",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-border px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Button href={booking.href} fullWidth size="lg">
          {booking.label}
        </Button>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          <a className="inline-flex min-h-11 items-center text-body-sm font-medium" href={phoneHref}>
            {phone}
          </a>
          <a className="inline-flex min-h-11 items-center text-body-sm text-ink-muted" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
