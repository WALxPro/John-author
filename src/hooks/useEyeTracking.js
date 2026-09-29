import { useEffect } from "react";
import { useApp } from "@/context/AppContext";

/**
 * Writes --ex/--ey (pupil offset px) and --mx/--my (-1..1) onto `ref`,
 * relative to the element centre. Desktop only; disabled for reduced motion.
 */
export default function useEyeTracking(ref, strength = 4) {
  const { isTouch, reduced } = useApp();

  useEffect(() => {
    if (isTouch || reduced) return undefined;
    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)));
        el.style.setProperty("--ex", `${(dx * strength).toFixed(2)}px`);
        el.style.setProperty("--ey", `${(dy * strength * 0.6).toFixed(2)}px`);
        el.style.setProperty("--mx", dx.toFixed(3));
        el.style.setProperty("--my", dy.toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [ref, strength, isTouch, reduced]);
}
