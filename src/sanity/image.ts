import { createImageUrlBuilder } from "@sanity/image-url";
import { isSanityConfigured, sanityDataset, sanityProjectId } from "@/sanity/env";

export type CmsImage = {
  alt?: string | null;
  asset?: { _ref?: string; _type?: string } | null;
  hotspot?: { x: number; y: number; height: number; width: number } | null;
  crop?: { top: number; bottom: number; left: number; right: number } | null;
};

export function hasCmsImage(image: CmsImage | null | undefined): image is CmsImage {
  return Boolean(image?.asset?._ref);
}

export function cmsImageUrl(image: CmsImage, width = 1600) {
  if (!isSanityConfigured() || !image.asset?._ref) return null;
  return createImageUrlBuilder({ projectId: sanityProjectId(), dataset: sanityDataset() })
    .image(image)
    .width(width)
    .auto("format")
    .fit("crop")
    .url();
}
