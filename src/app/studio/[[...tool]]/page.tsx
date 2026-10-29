import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center bg-canvas px-6 py-16 text-ink">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Studio</p>
        <h1 className="mt-3 font-display text-4xl">Sanity är inte kopplat ännu.</h1>
        <p className="mt-4 text-body text-ink-muted">
          Sätt miljövariablerna NEXT_PUBLIC_SANITY_PROJECT_ID och NEXT_PUBLIC_SANITY_DATASET, bygg om
          sidan, och öppna /studio igen. Tills dess visas webbplatsens lokala texter.
        </p>
      </main>
    );
  }

  const { NextStudio } = await import("next-sanity/studio");
  const { default: config } = await import("../../../../sanity.config");
  return <NextStudio config={config} />;
}
