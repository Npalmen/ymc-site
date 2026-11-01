import type { Metadata } from "next";
import { site } from "@/content/site";

const DEFAULT_OG = {
  url: "/brand/og.png",
  width: 1200,
  height: 630,
  alt: "Yellow Music United — musikbolag i Uppsala",
};

/** Canonical origin. Production domain by default, overridable for a later host. */
export function siteUrl() {
  return site.url;
}

export function productionHost() {
  try {
    return new URL(siteUrl()).host.toLowerCase();
  } catch {
    return "yellowmusicunited.se";
  }
}

/** Preview hosts (vercel.app, workers.dev, localhost) must not be indexed. */
export function isIndexableHost(hostHeader: string | null) {
  if (!hostHeader) return false;
  const host = hostHeader.split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
  const production = productionHost();
  return host === production || host === `www.${production}`;
}

export function serviceJson(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl()}${input.path}`,
    areaServed: "Uppsala",
    provider: {
      "@type": "MusicSchool",
      name: "Yellow Music United AB",
      url: siteUrl(),
    },
  };
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: { url: string; alt: string; width?: number; height?: number } | null;
}): Metadata {
  const description = input.description.trim();
  const image = input.image?.url
    ? {
        url: input.image.url,
        alt: input.image.alt || DEFAULT_OG.alt,
        width: input.image.width ?? 1200,
        height: input.image.height ?? 630,
      }
    : DEFAULT_OG;
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description,
    alternates: { canonical: input.path === "/" ? "/" : input.path },
    openGraph: {
      title: input.title,
      description,
      url: input.path,
      siteName: site.name,
      locale: "sv_SE",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description,
      images: [image.url],
    },
  };
}
