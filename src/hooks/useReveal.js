import { gsap, useGSAP } from "@/lib/gsap";
import { useApp } from "@/context/AppContext";

const FROM = {
  up: { y: 40 },
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.9, y: 20 },
  blur: { y: 24, filter: "blur(10px)", clearProps: "filter" },
};

/**
 * One-time reveals for [data-reveal] and [data-stagger] children inside `scope`.
 * Starts near the viewport (top 85–88%), runs < 1s, never re-hides content.
 * Call this in the PAGE component so child pins are created first.
 */
export default function useReveal(scope) {
  const { reduced } = useApp();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;
      const root = scope.current;

      root.querySelectorAll("[data-reveal]").forEach((el) => {
        const type = el.dataset.reveal || "up";
        gsap.from(el, {
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: parseFloat(el.dataset.delay || 0),
          ...(FROM[type] || FROM.up),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      root.querySelectorAll("[data-stagger]").forEach((el) => {
        gsap.from(el.children, {
          opacity: 0,
          y: 36,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
    },
    { scope, dependencies: [reduced], revertOnUpdate: true }
  );
}
