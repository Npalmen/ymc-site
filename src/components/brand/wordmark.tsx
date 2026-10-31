import Image from "next/image";

type WordmarkProps = {
  src?: string | null;
  className?: string;
  priority?: boolean;
};

export function Wordmark({ src, className, priority = false }: WordmarkProps) {
  return (
    <Image
      src={src || "/brand/wordmark-1280.webp"}
      alt=""
      width={1280}
      height={239}
      priority={priority}
      className={className}
    />
  );
}
