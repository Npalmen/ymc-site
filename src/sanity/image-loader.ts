import type { ImageLoaderProps } from "next/image";

/** Sanity CDN already resizes. Other sources are returned unchanged so Vercel and Cloudflare both work. */
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.includes("cdn.sanity.io")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  if (!url.searchParams.has("fit")) url.searchParams.set("fit", "max");
  return url.toString();
}
