import { createClient, type SanityClient } from "next-sanity";
import { isSanityConfigured, sanityApiVersion, sanityDataset, sanityProjectId } from "@/sanity/env";

export const sanityClient: SanityClient | null = isSanityConfigured()
  ? createClient({
      projectId: sanityProjectId(),
      dataset: sanityDataset(),
      apiVersion: sanityApiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { tags: ["content"] },
    });
  } catch (error) {
    console.error("Sanity kunde inte läsas. Lokalt innehåll används.", error);
    return null;
  }
}
