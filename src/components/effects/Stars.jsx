import { useMemo } from "react";

const COLORS = ["#ffffff", "#ffffff", "#C7C9E6", "#22D3EE"];

export default function Stars({ count = 70 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 62,
        size: Math.random() < 0.12 ? 2.6 : Math.random() * 1.5 + 0.7,
        duration: (Math.random() * 3 + 2).toFixed(1),
        delay: (Math.random() * 4).toFixed(1),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            "--d": `${s.duration}s`,
            "--dl": `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
