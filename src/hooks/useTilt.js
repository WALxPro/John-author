import { useCallback, useRef } from "react";
import { useApp } from "@/context/AppContext";

/** 3D mouse tilt via CSS variables (--rx, --ry, --gx, --gy). */
export default function useTilt(maxTilt = 14) {
  const ref = useRef(null);
  const { isTouch, reduced } = useApp();

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || isTouch || reduced) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-y * maxTilt).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * maxTilt).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(0)}%`);
      el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(0)}%`);
    },
    [isTouch, reduced, maxTilt]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
