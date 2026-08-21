import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HubPage } from "@/components/sections/hub/hub-page";
import { sangHub } from "@/content/areas/sang";

export const metadata: Metadata = {
  title: `${sangHub.metaTitle} · Yellow Music`,
  description: sangHub.metaDescription,
};

export default function SangPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HubPage content={sangHub} />
      </main>
      <SiteFooter />
    </>
  );
}
