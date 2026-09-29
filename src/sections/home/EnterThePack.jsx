import { useRef } from "react";
import PackCard from "./PackCard";
import AuroraBackground from "@/components/effects/AuroraBackground";
import { gsap, useGSAP } from "@/lib/gsap";
import { PACK_CARDS } from "@/data/pack";

/*
 * Pinned horizontal story (desktop). Scroll distance = measured track width,
 * so there is no blank space and the pin releases right after the last card.
 * Mobile / reduced motion: natural vertical stack (no .is-horizontal class).
 */
export default function EnterThePack() {
  const section = useRef(null);
  const pin = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        section.current.classList.add("is-horizontal");
        const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth);

        const tween = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        gsap.fromTo(bar.current, { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: pin.current, start: "top top", end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        });

        gsap.utils.toArray(".pack-num").forEach((num) => {
          gsap.fromTo(num, { xPercent: 25 }, {
            xPercent: -25,
            ease: "none",
            scrollTrigger: { trigger: num.closest(".pack-card"), containerAnimation: tween, start: "left right", end: "right left", scrub: true },
          });
        });

        return () => section.current?.classList.remove("is-horizontal");
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section ref={section} className="pack-section relative" aria-label="Enter the Pack">
      <div ref={pin} className="pack-pin relative">
        <div className="absolute inset-0 pack-bg" aria-hidden><AuroraBackground /></div>

        <div ref={track} className="pack-track relative" data-stagger>
          <div className="pack-intro">
            <p className="eyebrow">Four Instincts</p>
            <h2 className="pack-heading font-cinzel"><span className="grad-text">ENTER THE PACK</span></h2>
            <p className="lead mt-5 max-w-md">
              Love, loyalty, family and the wild pull of freedom — the instincts that drive every wolf in <em>Hope for the Wolf</em>.
            </p>
            <p className="pack-hint mt-8 hidden lg:flex">Keep scrolling to run with them <span aria-hidden>→</span></p>
          </div>
          {PACK_CARDS.map((card, i) => <PackCard key={card.title} index={i} {...card} />)}
        </div>

        <div className="pack-progress hidden lg:block" aria-hidden><span ref={bar} /></div>
      </div>
    </section>
  );
}
