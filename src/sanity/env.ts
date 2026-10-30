/** Public Sanity project. Not a secret. */
export const SANITY_PROJECT_ID = "vjv9ko18";
export const SANITY_DATASET = "production";

export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01";

export function sanityProjectId() {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || SANITY_PROJECT_ID;
}

export function sanityDataset() {
  return process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || SANITY_DATASET;
}

/** The public project id is in source. A fetch error or an unseeded dataset still falls back to src/content. */
export function isSanityConfigured() {
  return sanityProjectId().length > 0;
}
