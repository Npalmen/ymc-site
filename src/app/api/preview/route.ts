import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = process.env.PREVIEW_SECRET;
  if (!secret || url.searchParams.get("secret") !== secret) {
    return new Response("Ogiltig förhandslänk", { status: 401 });
  }
  const slug = url.searchParams.get("slug");
  // An explicit allowlist prevents external redirects and unexpected preview routes.
  if (slug !== "/community" && slug !== "/tjanster/distribution") {
    return new Response("Ogiltig sida", { status: 400 });
  }
  (await draftMode()).enable();
  const response = NextResponse.redirect(new URL(slug, request.url));
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
