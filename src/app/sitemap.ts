import type { MetadataRoute } from "next";
import { site } from "@/content/site";

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

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-29"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
