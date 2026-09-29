import { PINES_BACK, PINES_FRONT } from "@/lib/svgPaths";

const LAYERS = {
  back: { d: PINES_BACK, fill: "#150f36" },
  front: { d: PINES_FRONT, fill: "#05060d" },
};

export default function ForestSilhouette({ variant = "front", className = "w-full h-full" }) {
  const layer = LAYERS[variant];
  return (
    <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <path d={layer.d} fill={layer.fill} />
    </svg>
  );
}
