import { useId } from "react";

/** Neon claw marks. Hero animates `.claw-path` stroke-dashoffset with GSAP. */
export default function ClawScratch() {
  const id = useId().replace(/:/g, "");
  return (
    <svg className="claw-svg" viewBox="0 0 400 300" aria-hidden>
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset=".5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#F43F5E" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="claw-path"
          d={`M${110 + i * 48} ${30 + i * 6} C ${150 + i * 48} 120, ${185 + i * 48} 190, ${245 + i * 48} ${270 - i * 4}`}
          stroke={`url(#${id}g)`}
          strokeWidth={9 - i * 1.5}
          strokeLinecap="round"
          fill="none"
          style={{ strokeDasharray: 600, strokeDashoffset: 600 }}
        />
      ))}
    </svg>
  );
}
