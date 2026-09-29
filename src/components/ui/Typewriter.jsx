import { useEffect, useRef, useState } from "react";
import { useApp } from "@/context/AppContext";

/**
 * Types `text` once it enters the viewport. A hidden full copy reserves the
 * final height, so the layout never jumps and there is no blank space.
 */
export default function Typewriter({ text, speed = 16, step = 3 }) {
  const { reduced } = useApp();
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduced) { setCount(text.length); return undefined; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); io.disconnect(); }
    }, { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [reduced, text.length]);

  useEffect(() => {
    if (!started || count >= text.length) return undefined;
    const t = setTimeout(() => setCount((c) => Math.min(text.length, c + step)), speed);
    return () => clearTimeout(t);
  }, [started, count, text.length, speed, step]);

  const done = count >= text.length;

  return (
    <div ref={ref}>
      <div className="relative">
        <p className="tw-text invisible" aria-hidden>{text}</p>
        <p className="tw-text absolute inset-0" aria-label={text}>
          {text.slice(0, count)}
          {!done && <span className="caret" aria-hidden />}
        </p>
      </div>
      {!done && (
        <button type="button" className="tw-skip" onClick={() => setCount(text.length)}>
          Show full excerpt
        </button>
      )}
    </div>
  );
}
