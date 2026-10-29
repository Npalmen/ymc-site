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
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const drag = useRef({
    active: false,
    tracking: false,
    pointer: -1,
    startY: 0,
    lastY: 0,
    lastT: 0,
    velocity: 0,
    shift: 0,
  });

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.documentElement.classList.add("sheet-open");
    const panel = panelRef.current;
    const place = () => {
      const node = panelRef.current;
      const root = rootRef.current;
      const viewport = window.visualViewport;
      if (!node || !root || !viewport) return;
      const rootRect = root.getBoundingClientRect();
      const hangBelow = Math.max(0, Math.round(rootRect.bottom - viewport.height));
      const visible = Math.round(viewport.height);
      node.style.bottom = `max(${hangBelow}px, env(safe-area-inset-bottom, 0px))`;
      node.style.maxHeight = `${Math.round(visible * 0.82)}px`;
    };
    place();
    const placeFrame = requestAnimationFrame(place);
    window.visualViewport?.addEventListener("resize", place);
    window.visualViewport?.addEventListener("scroll", place);
    const body = bodyRef.current;
    const onTouchMove = (event: TouchEvent) => {
      if (!drag.current.active) return;
      const touch = event.touches[0];
      if (!touch || !body) return;
      const dy = touch.clientY - drag.current.startY;
      if (!drag.current.tracking) {
        if (dy > 0 && body.scrollTop <= 0) drag.current.tracking = true;
        else return;
      }
      if (event.cancelable) event.preventDefault();
    };
    panel?.addEventListener("touchmove", onTouchMove, { passive: false });
    const focusFrame = requestAnimationFrame(() => {
      place();
      panel?.focus({ preventScroll: true });
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = Array.from(
        panel.querySelectorAll<HTMLElement>("a, button, input, select, textarea"),
      ).filter((node) => !node.hasAttribute("disabled"));
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
      cancelAnimationFrame(placeFrame);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.documentElement.classList.remove("sheet-open");
      window.scrollTo(0, scrollY);
      window.visualViewport?.removeEventListener("resize", place);
      window.visualViewport?.removeEventListener("scroll", place);
      panel?.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  function applyShift(shift: number) {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;
    drag.current.shift = shift;
    panel.style.transform = `translate3d(0, ${shift}px, 0)`;
    const height = panel.getBoundingClientRect().height || 1;
    const progress = Math.max(0, Math.min(1, shift / height));
    if (backdrop) backdrop.style.opacity = String(1 - progress);
  }

  function beginDrag(event: React.PointerEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("input, textarea, select, option, a, button, label")) return;
    const fromHandle = Boolean(target.closest("[data-sheet-handle]"));
    const body = bodyRef.current;
    if (!fromHandle && body && body.scrollTop > 0) return;
    drag.current = {
      active: true,
      tracking: fromHandle,
      pointer: event.pointerId,
      startY: event.clientY,
      lastY: event.clientY,
      lastT: performance.now(),
      velocity: 0,
      shift: 0,
    };
    if (fromHandle) event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: React.PointerEvent<HTMLElement>) {
    if (!drag.current.active || event.pointerId !== drag.current.pointer) return;
    const dy = event.clientY - drag.current.startY;
    const body = bodyRef.current;
    if (!drag.current.tracking) {
      if (dy > 8 && body && body.scrollTop <= 0) {
        drag.current.tracking = true;
        event.currentTarget.setPointerCapture(event.pointerId);
      } else if (dy < -8) {
        drag.current.active = false;
        return;
      } else {
        return;
      }
    }
    const now = performance.now();
    const dt = now - drag.current.lastT;
    if (dt > 0) drag.current.velocity = (event.clientY - drag.current.lastY) / dt;
    drag.current.lastY = event.clientY;
    drag.current.lastT = now;
    const panel = panelRef.current;
    panel?.classList.remove("is-entering");
    panel?.classList.add("is-dragging");
    const shift = dy < 0 ? dy * 0.28 : dy;
    applyShift(shift);
  }

  function endDrag(event: React.PointerEvent<HTMLElement>) {
    if (!drag.current.active || event.pointerId !== drag.current.pointer) return;
    const tracked = drag.current.tracking;
    const velocity = drag.current.velocity;
    drag.current.active = false;
    drag.current.tracking = false;
    const panel = panelRef.current;
    if (!panel || !tracked) return;
    const height = panel.getBoundingClientRect().height || 1;
    const shift = drag.current.shift;
    panel.classList.remove("is-dragging");
    panel.classList.add("is-settling");
    const flick = velocity > 0.55 && shift > 24;
    if (shift > height * 0.25 || flick) {
      applyShift(height + 24);
      window.setTimeout(() => onClose(), 280);
      return;
    }
    applyShift(0);
    window.setTimeout(() => panel.classList.remove("is-settling"), 480);
  }

  return (
    <div ref={rootRef} className="sheet-root">
      <button ref={backdropRef} type="button" className="sheet-backdrop" aria-label="Stäng bokning" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="sheet-panel glass is-entering"
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.classList.remove("is-entering");
        }}
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="sheet-handle" data-sheet-handle>
          <span />
        </div>
        <div ref={bodyRef} className="sheet-body">
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
