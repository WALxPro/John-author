import { useState } from "react";
import { refreshScroll } from "@/lib/gsap";

/** <img> that swaps to `fallback` if the file is missing, and refreshes ScrollTrigger on load. */
export default function SmartImage({ src, alt, className, style, fallback = null, loading = "lazy" }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      onLoad={() => refreshScroll()}
    />
  );
}
