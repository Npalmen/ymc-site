"use client";

import { useEffect, useId, useRef } from "react";
import { PlanningMeeting } from "@/components/sections/planning-meeting";
import type { PlanningTopic } from "@/content/pages/shared";
import type { RichLine } from "@/content/rich-text";

export type BookingCopy = {
  eyebrow: string;
  title: RichLine;
  lede: string;
  points: readonly string[];
  note: string;
  topics: readonly { value: string; label: string }[];
};

type BookingSheetProps = {
  open: boolean;
  topic: string;
  copy: BookingCopy;
  recipient: string;
  onClose: () => void;
};

export function BookingSheet({ open, topic, copy, recipient, onClose }: BookingSheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const drag = useRef({ active: false, startY: 0, pointer: 0 });

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusable = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a, button, input, select, textarea") ?? []).filter(
        (node) => !node.hasAttribute("disabled"),
      );
    const focusFrame = requestAnimationFrame(() => focusable()[0]?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
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
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;
    if (!panel) return;
    const onHandle = (event.target as HTMLElement).closest("[data-sheet-handle]");
    if (!onHandle && panel.scrollTop > 4) return;
    drag.current = { active: true, startY: event.clientY, pointer: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;
    if (!drag.current.active || !panel || event.pointerId !== drag.current.pointer) return;
    const dy = Math.max(0, event.clientY - drag.current.startY);
    panel.classList.add("is-dragging");
    panel.style.transform = `translateY(${dy}px)`;
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;
    if (!drag.current.active || event.pointerId !== drag.current.pointer) return;
    const dy = Math.max(0, event.clientY - drag.current.startY);
    drag.current.active = false;
    if (!panel) return;
    panel.classList.remove("is-dragging");
    panel.style.transform = "";
    if (dy > 110) onClose();
  }

  return (
    <div className="sheet-root">
      <button type="button" className="sheet-backdrop" aria-label="Stäng bokning" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="sheet-panel glass is-open"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="sheet-handle" data-sheet-handle>
          <span />
        </div>
        <div className="px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1">
          <h2 id={titleId} className="font-display text-3xl">
            Boka nu
          </h2>
          <p className="mt-2 text-body-sm text-ink-muted">{copy.lede}</p>
          <PlanningMeeting
            key={topic}
            variant="sheet"
            defaultTopic={topic as PlanningTopic}
            copy={copy}
            topics={copy.topics}
            recipient={recipient}
          />
        </div>
      </div>
    </div>
  );
}
