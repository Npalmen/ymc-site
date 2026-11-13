import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { loadSite } from "@/sanity/load";
import { isPublicHref } from "@/content/visibility";

const paths = [
  "/",
  "/tjanster",
  "/tjanster/sanglektioner",
  "/tjanster/sanglektioner/steg-for-steg",
  "/tjanster/sanglektioner/lektionspaket",
  "/tjanster/utbildning",
  "/tjanster/utbildning/musikproduktion-for-tjejer",
  "/tjanster/utbildning/latskrivning",
  "/tjanster/distribution",
  "/community",
  "/om-oss",
  "/kontakt",
  "/boka",
  "/faq",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await loadSite();
  return paths.filter((path) => isPublicHref(path, settings.communityEnabled)).map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-29"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
