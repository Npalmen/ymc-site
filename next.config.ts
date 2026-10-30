import type { NextConfig } from "next";

const legacyRedirects: [string, string][] = [
  ["/sang", "/tjanster/sanglektioner"],
  ["/studio", "/om-oss"],
  ["/utbildning", "/tjanster/utbildning"],
  ["/ge-ut-musik", "/tjanster/distribution"],
  ["/yellow-music", "/om-oss"],
  ["/tjänster", "/tjanster"],
  ["/distribution", "/tjanster/distribution"],
  ["/musikutgivning", "/tjanster/distribution"],
  ["/podcast", "/tjanster/distribution"],
  ["/sångpedagogik", "/tjanster/sanglektioner"],
  ["/sangpedagogik", "/tjanster/sanglektioner"],
  ["/sanglektioner-uppsala", "/tjanster/sanglektioner"],
  ["/scencoachning", "/tjanster/sanglektioner"],
  ["/fonationsteknik", "/tjanster/sanglektioner"],
  ["/hälsosamsångteknik", "/tjanster/sanglektioner"],
  ["/halsosamsangteknik", "/tjanster/sanglektioner"],
  ["/sångochkomp", "/tjanster/sanglektioner"],
  ["/sangochkomp", "/tjanster/sanglektioner"],
  ["/låtskrivande", "/tjanster/utbildning/latskrivning"],
  ["/latskrivande", "/tjanster/utbildning/latskrivning"],
  ["/musikproduktionskurs-för-tjejer", "/tjanster/utbildning/musikproduktion-for-tjejer"],
  ["/musikproduktionskurs-for-tjejer", "/tjanster/utbildning/musikproduktion-for-tjejer"],
  ["/praktik", "/tjanster/utbildning"],
  ["/yellowmusic-blogg", "/community"],
  ["/yellowmusic-blogg/:path*", "/community"],
  ["/post/:path*", "/community"],
];

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/sanity/image-loader.ts",
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
