"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { NavDropdownGroup } from "@/content/navigation";

type NavDropdownProps = {
  group: NavDropdownGroup;
  align?: "left" | "right";
  onNavigate?: () => void;
};

export function NavDropdown({ group, align = "left", onNavigate }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, close]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) openMenu();
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(hover: hover)").matches) scheduleClose();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "inline-flex min-h-10 items-center gap-1.5 px-2 text-nav text-ink-muted transition-colors duration-[var(--motion-fast)]",
          "hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
          open && "text-ink",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{group.label}</span>
        <span
          className={cn(
            "text-meta transition-transform duration-[var(--motion-fast)] motion-reduce:transition-none",
            open && "rotate-180",
          )}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute top-[calc(100%+0.625rem)] z-50 w-[min(100vw-2rem,28rem)] origin-top transition-[opacity,transform] duration-[var(--motion-base)] motion-reduce:transition-none",
          align === "right" ? "right-0" : "left-0",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          aria-label={group.label}
          className="border border-border bg-canvas px-6 py-7 shadow-[0_4px_24px_rgb(44_40_32_/_4%)]"
        >
          <p className="text-eyebrow text-ink-subtle">{group.label}</p>
          {group.intro ? (
            <p className="text-body-sm mt-2 max-w-sm text-ink-muted">{group.intro}</p>
          ) : null}
          <ul className="mt-5">
            {group.items.map((item, index) => (
              <li
                key={`${item.href}-${item.label}`}
                className={cn(
                  "border-b border-border/70 py-3.5 last:border-b-0",
                  index === group.items.length - 1 && "pb-0",
                )}
              >
                <Link
                  href={item.href}
                  className="group block transition-[color,transform] duration-[var(--motion-fast)] hover:translate-x-0.5 hover:text-ink focus-visible:outline-none motion-reduce:hover:translate-x-0"
                  onClick={() => {
                    close();
                    onNavigate?.();
                  }}
                >
                  <span className="text-dropdown-title text-ink group-hover:underline group-hover:decoration-brand/50 group-hover:underline-offset-4">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="text-dropdown-description mt-1 block">{item.description}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
