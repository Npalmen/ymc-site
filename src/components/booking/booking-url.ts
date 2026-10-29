/** Returns a topic when this link should open the booking sheet instead of navigating. */
export function bookingIntent(href: string, currentHref: string): { topic: string } | null {
  let url: URL;
  let current: URL;
  try {
    url = new URL(href, currentHref);
    current = new URL(currentHref);
  } catch {
    return null;
  }
  if (url.origin !== current.origin) return null;
  const topic = url.searchParams.get("amne") || "planering";
  if (url.pathname === "/boka") {
    if (current.pathname === "/boka") return null;
    return { topic };
  }
  if (url.searchParams.get("boka") === "1") return { topic };
  return null;
}
