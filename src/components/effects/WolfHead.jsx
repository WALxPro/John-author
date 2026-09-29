import { useId } from "react";
import { WOLF_FACETS, WOLF_PATH } from "@/lib/svgPaths";

/** Geometric wolf emblem. Pupils follow --ex/--ey set by useEyeTracking on an ancestor. */
export default function WolfHead({ className = "", fillOpacity = 1, eyes = true }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#33246e" />
          <stop offset="1" stopColor="#0b0920" />
        </linearGradient>
        <radialGradient id={`${id}e`}>
          <stop offset="0" stopColor="#FFF6CC" />
          <stop offset=".45" stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F43F5E" />
        </radialGradient>
      </defs>
      <path d={WOLF_PATH} fill={`url(#${id}f)`} fillOpacity={fillOpacity} stroke="rgba(124,58,237,.55)" strokeWidth="1.2" />
      <path d={WOLF_FACETS} stroke="rgba(199,201,230,.13)" strokeWidth="1" fill="none" />
      <path d="M92 174 L108 174 L100 184Z" fill="#05040d" />
      {eyes && (
        <g className="wolf-eyes">
          <path className="eye" d="M60 104 Q74 92 88 104 Q74 112 60 104Z" fill={`url(#${id}e)`} />
          <path className="eye" d="M112 104 Q126 92 140 104 Q126 112 112 104Z" fill={`url(#${id}e)`} />
          <circle className="pupil" cx="74" cy="103" r="2.6" fill="#1a0710" />
          <circle className="pupil" cx="126" cy="103" r="2.6" fill="#1a0710" />
        </g>
      )}
    </svg>
  );
}
