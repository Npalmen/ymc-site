import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

/** Visibility is checked for both the page and its metadata. */
export async function requireVisiblePage(enabled: boolean) {
  const preview = (await draftMode()).isEnabled;
  if (!enabled && !preview) notFound();
  return preview;
}
