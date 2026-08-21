import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HubPage } from "@/components/sections/hub/hub-page";
import { studioHub } from "@/content/areas/studio";

export const metadata: Metadata = {
  title: `${studioHub.metaTitle} · Yellow Music`,
  description: studioHub.metaDescription,
};

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HubPage content={studioHub} />
      </main>
      <SiteFooter />
    </>
  );
}
