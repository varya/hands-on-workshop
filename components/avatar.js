import Image from "next/image";

export default function Avatar({ src, alt, size = 400 }) {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={size}
      height={size}
      objectFit="cover"
      className="rounded-full"
    />
  );
}
