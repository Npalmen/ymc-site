/** Read the page offset, including the booking sheet's fixed-body lock. */
export function readScrollY() {
  if (document.body.style.position === "fixed") {
    const top = Number.parseFloat(document.body.style.top || "0");
    if (Number.isFinite(top)) return Math.abs(top);
  }
  return window.scrollY;
}

/** Drop the sheet/menu scroll lock without writing an old offset back. */
export function unlockPageScroll() {
  const locked = document.body.style.position === "fixed" || document.documentElement.classList.contains("sheet-open");
  if (locked) document.documentElement.dataset.skipScrollRestore = "1";
  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.documentElement.classList.remove("sheet-open");
}

export function scrollToTop() {
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
}

/** Repeat for a few frames so a late browser restore cannot leave the page mid-scroll. */
export function restoreScroll(y: number) {
  let frames = 0;
  const step = () => {
    document.documentElement.style.scrollBehavior = "auto";
    if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y);
    frames += 1;
    if (frames < 10) requestAnimationFrame(step);
  };
  step();
}

export function scrollToSection(id: string) {
  const node = document.getElementById(id);
  if (!node) return false;
  document.documentElement.style.scrollBehavior = "auto";
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 0) + 12;
  const top = node.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo(0, Math.max(0, top));
  return true;
}

/** Re-apply after view transitions and the heading reveal, unless the person scrolls. */
export function settleSection(id: string) {
  let frames = 0;
  let stopped = false;
  const stop = () => {
    stopped = true;
  };
  window.addEventListener("wheel", stop, { passive: true, once: true });
  window.addEventListener("touchmove", stop, { passive: true, once: true });
  const step = () => {
    if (stopped) return;
    scrollToSection(id);
    frames += 1;
    if (frames < 24) requestAnimationFrame(step);
  };
  step();
  window.setTimeout(() => {
    if (!stopped) scrollToSection(id);
  }, 480);
}
