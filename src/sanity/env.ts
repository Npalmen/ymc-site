export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01";

export function sanityProjectId() {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";
}

export function sanityDataset() {
  return process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
}

/** True when the public project id is set. The site still builds without it. */
export function isSanityConfigured() {
  return sanityProjectId().length > 0;
}
