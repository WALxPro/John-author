import { useId } from "react";
import { RIDGE_BACK, RIDGE_FRONT } from "@/lib/svgPaths";

export default function MountainRange({ className = "w-full h-full" }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b1b66" />
          <stop offset="1" stopColor="#0d0a26" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1245" />
          <stop offset="1" stopColor="#090818" />
        </linearGradient>
      </defs>
      <path d={RIDGE_BACK} fill={`url(#${id}a)`} stroke="rgba(34,211,238,.35)" strokeWidth="1.5" />
      <path d={RIDGE_FRONT} fill={`url(#${id}b)`} stroke="rgba(244,63,94,.28)" strokeWidth="1.2" />
    </svg>
  );
}
