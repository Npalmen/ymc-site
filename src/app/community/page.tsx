import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HubPage } from "@/components/sections/hub/hub-page";
import { communityHub } from "@/content/areas/community";

export const metadata: Metadata = {
  title: `${communityHub.metaTitle} · Yellow Music`,
  description: communityHub.metaDescription,
};

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HubPage content={communityHub} />
      </main>
      <SiteFooter />
    </>
  );
}
