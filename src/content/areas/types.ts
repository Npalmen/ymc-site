import type { WorldId } from "@/content/worlds";

export type HubService = {
  title: string;
  summary: string;
  bookingIntent?: string;
};

export type HubContent = {
  id: WorldId;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  whoFor: string;
  approach: string;
  difference: string;
  services: HubService[];
  servicesHeading: string;
  imageLabel: string;
  imageCaption: string;
  tone: "warm" | "studio" | "structured" | "directional" | "community" | "editorial";
  relatedWorldIds: WorldId[];
  cta: { label: string; href: string; bookingIntent?: string };
  secondaryCta?: { label: string; href: string };
};
