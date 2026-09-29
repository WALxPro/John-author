import { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

const HOVER_TARGETS = "a,button,input,textarea,select,[data-hover]";

/** Glowing dot + lagging ring. Desktop only, disabled for reduced motion. */
export default function CursorFollower() {
  const { isTouch, reduced } = useApp();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (isTouch || reduced) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, rx = x, ry = y, raf, visible = false;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) { visible = true; dot.style.opacity = 1; ring.style.opacity = 1; }
      ring.classList.toggle("is-hover", !!e.target.closest?.(HOVER_TARGETS));
    };
    const onLeave = () => { visible = false; dot.style.opacity = 0; ring.style.opacity = 0; };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouch, reduced]);

  if (isTouch || reduced) return null;
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
