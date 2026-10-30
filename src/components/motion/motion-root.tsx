"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { bookingIntent } from "@/components/booking/booking-url";
import { BookingSheet, type BookingCopy } from "@/components/booking/booking-sheet";
import { readScrollY, restoreScroll, scrollToTop, settleSection, unlockPageScroll } from "@/components/motion/route-scroll";

type MotionRootProps = {
  children: React.ReactNode;
  copy: BookingCopy;
  recipient: string;
  label: string;
};

export function MotionRoot({ children, copy, recipient, label }: MotionRootProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("planering");
  const [pill, setPill] = useState(false);
  const positions = useRef(new Map<string, number>());
  const pathRef = useRef(pathname);
  const popped = useRef(false);
  const pendingRestore = useRef<number | null>(null);
  const hashReturn = useRef<number | null>(null);
  const previousHash = useRef("");
  const pendingHash = useRef<string | null>(null);
  const skipFirstScroll = useRef(true);

  const close = useCallback(() => {
    setOpen(false);
    if (window.history.state?.bookingSheet) {
      window.history.back();
      return;
    }
    const url = new URL(window.location.href);
    if (url.searchParams.has("boka")) {
      url.searchParams.delete("boka");
      window.history.replaceState(window.history.state, "", url);
    }
  }, []);

  const openSheet = useCallback((nextTopic: string, push: boolean) => {
    setTopic(nextTopic);
    setOpen(true);
    window.dispatchEvent(new Event("ymu-close-menu"));
    const url = new URL(window.location.href);
    if (url.pathname === "/boka") return;
    url.searchParams.set("boka", "1");
    if (nextTopic && nextTopic !== "planering") url.searchParams.set("amne", nextTopic);
    if (push && !window.history.state?.bookingSheet) {
      window.history.pushState({ bookingSheet: true }, "", url);
    } else {
      window.history.replaceState({ bookingSheet: true }, "", url);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    let frame = 0;
    if (url.searchParams.get("boka") === "1" && url.pathname !== "/boka") {
      const initialTopic = url.searchParams.get("amne") || "planering";
      frame = requestAnimationFrame(() => openSheet(initialTopic, false));
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const intent = bookingIntent(anchor.href, window.location.href);
      if (intent) {
        event.preventDefault();
        event.stopPropagation();
        openSheet(intent.topic, true);
        return;
      }
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      const samePage = destination.pathname === window.location.pathname && destination.search === window.location.search;
      const hash = destination.hash.replace(/^#/, "");
      if (samePage && !hash) return;

      event.preventDefault();
      positions.current.set(window.location.pathname, readScrollY());
      window.dispatchEvent(new Event("ymu-close-menu"));
      unlockPageScroll();
      setOpen(false);

      if (samePage && hash) {
        hashReturn.current = readScrollY();
        previousHash.current = destination.hash;
        window.history.pushState(window.history.state, "", `${destination.pathname}${destination.search}${destination.hash}`);
        requestAnimationFrame(() => settleSection(hash));
        return;
      }

      pendingHash.current = hash;
      const next = `${destination.pathname}${destination.search}${destination.hash}`;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const go = () => router.push(next, { scroll: false });
      if (!reduced && "startViewTransition" in document) {
        const transition = document.startViewTransition(go);
        transition.finished.then(() => {
          if (hash) settleSection(hash);
          else scrollToTop();
        }).catch(() => {
          if (hash) settleSection(hash);
          else scrollToTop();
        });
      } else {
        go();
      }
    };

    const onPop = () => {
      const nextPath = window.location.pathname;
      const nextHash = window.location.hash;
      const saved = positions.current.get(nextPath);
      if (nextPath !== pathRef.current) {
        popped.current = true;
        pendingRestore.current = typeof saved === "number" ? saved : null;
      } else if (!nextHash && previousHash.current && typeof hashReturn.current === "number") {
        const y = hashReturn.current;
        requestAnimationFrame(() => restoreScroll(y));
      } else if (nextHash && !window.history.state?.bookingSheet) {
        requestAnimationFrame(() => settleSection(nextHash.replace(/^#/, "")));
      }
      pathRef.current = nextPath;
      previousHash.current = nextHash;
      const sheet = Boolean(window.history.state?.bookingSheet);
      const query = new URL(window.location.href).searchParams.get("boka") === "1";
      if (sheet || (query && window.location.pathname !== "/boka")) {
        setTopic(new URL(window.location.href).searchParams.get("amne") || "planering");
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
    };
  }, [openSheet, router]);

  useEffect(() => {
    pathRef.current = pathname;
    if (skipFirstScroll.current) {
      skipFirstScroll.current = false;
      const initialHash = window.location.hash.replace(/^#/, "");
      if (initialHash) settleSection(initialHash);
      return;
    }
    if (popped.current) {
      popped.current = false;
      const y = pendingRestore.current;
      pendingRestore.current = null;
      if (typeof y === "number") requestAnimationFrame(() => restoreScroll(y));
      return;
    }
    const hash = pendingHash.current ?? window.location.hash.replace(/^#/, "");
    pendingHash.current = null;
    if (hash) settleSection(hash);
    else scrollToTop();
  }, [pathname]);

  useEffect(() => {
    const save = () => {
      if (document.body.style.position === "fixed") return;
      positions.current.set(pathname, window.scrollY);
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headings = () => document.querySelectorAll<HTMLElement>("main h1, main h2.text-section, main h2.text-hero");
    const collectText = (node: Node, bucket: Text[]) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) bucket.push(child as Text);
        else if (child.nodeType === Node.ELEMENT_NODE && !(child as Element).classList.contains("reveal-word")) {
          collectText(child, bucket);
        }
      });
    };
    const enhance = (heading: HTMLElement) => {
      if (heading.dataset.reveal === "1" || reduced) return;
      heading.dataset.reveal = "1";
      const texts: Text[] = [];
      collectText(heading, texts);
      let index = 0;
      for (const text of texts) {
        const accent = text.parentElement?.tagName === "EM";
        const parts = text.data.split(/(\s+)/);
        const fragment = document.createDocumentFragment();
        for (const part of parts) {
          if (!part) continue;
          if (!part.trim()) {
            fragment.append(part);
            continue;
          }
          const span = document.createElement("span");
          span.className = accent ? "reveal-word is-accent" : "reveal-word";
          span.style.setProperty("--delay", `${index * 42 + (accent ? 220 : 0)}ms`);
          span.textContent = part;
          fragment.append(span);
          index += 1;
        }
        text.parentNode?.replaceChild(fragment, text);
      }
      heading.classList.add("reveal-heading");
    };

    const nodes = headings();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        }
      },
      { threshold: 0.35 },
    );
    nodes.forEach((heading) => {
      enhance(heading);
      observer.observe(heading);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    let frame = 0;
    let footerNear = false;
    const update = () => {
      const menu = document.body.hasAttribute("data-menu-open");
      const past = window.scrollY > 520;
      const onBookingPage = window.location.pathname === "/boka";
      setPill(past && !footerNear && !menu && !open && !onBookingPage);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const footerObserver = footer
      ? new IntersectionObserver(([entry]) => {
          footerNear = Boolean(entry?.isIntersecting);
          update();
        })
      : null;
    if (footer) footerObserver?.observe(footer);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const menuObserver = new MutationObserver(update);
    menuObserver.observe(document.body, { attributes: true, attributeFilter: ["data-menu-open"] });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      footerObserver?.disconnect();
      menuObserver.disconnect();
    };
  }, [open]);

  return (
    <>
      {children}
      <button
        type="button"
        className={`sticky-book glass${pill ? " is-visible" : ""}`}
        tabIndex={pill ? 0 : -1}
        aria-hidden={pill ? undefined : true}
        onClick={() => openSheet("planering", true)}
      >
        {label}
      </button>
      <BookingSheet open={open} topic={topic} copy={copy} recipient={recipient} onClose={close} />
    </>
  );
}
