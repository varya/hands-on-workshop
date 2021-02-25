export default function Avatar({ src, alt, size = 400 }) {
  return (
    <div className="relative overflow-hidden pb-1/1">
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="absolute rounded-full object-cover w-full h-full"
      />
    </div>
  );
}
