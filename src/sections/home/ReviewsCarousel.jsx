import { useCallback, useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useApp } from "@/context/AppContext";
import { REVIEWS } from "@/data/reviews";

const INTERVAL = 4500;

export default function ReviewsCarousel() {
  const { reduced } = useApp();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);
  const n = REVIEWS.length;

  const go = useCallback((dir) => setActive((i) => (i + dir + n) % n), [n]);

  useEffect(() => {
    if (paused || reduced) return undefined;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
  }, [paused, reduced, go]);

  const offsetOf = (i) => {
    let off = i - active;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    return off;
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="px-5 md:px-8">
        <SectionHeading
          eyebrow="Reader Reviews"
          title="Howls from the Pack"
          sub="Placeholder reviews for design purposes only  replace with genuine reader feedback."
        />
      </div>

      <div
        className="rev-stage mt-14"
        data-reveal
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          setPaused(false);
        }}
      >
        {REVIEWS.map((review, i) => (
          <ReviewCard key={i} review={review} offset={offsetOf(i)} onSelect={() => setActive(i)} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button type="button" className="rev-nav" onClick={() => go(-1)} aria-label="Previous review">‹</button>
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button key={i} type="button" className={`rev-dot ${i === active ? "is-active" : ""}`} onClick={() => setActive(i)} aria-label={`Show review ${i + 1}`} />
          ))}
        </div>
        <button type="button" className="rev-nav" onClick={() => go(1)} aria-label="Next review">›</button>
      </div>
    </section>
  );
}
