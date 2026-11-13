import Image from "next/image";

export function LineArt({ src, opacity = 0.06 }: { src: string | null; opacity?: number }) {
  if (!src) return null;
  return <div className="site-line-art" aria-hidden style={{ opacity: Math.min(0.2, Math.max(0, opacity)) }}>
    <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
  </div>;
}
