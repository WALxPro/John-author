import { useRef } from "react";
import BookCover3D from "@/components/book/BookCover3D";
import Button from "@/components/ui/Button";
import { gsap, useGSAP } from "@/lib/gsap";
import { GENRE_TAGS, TEASER } from "@/data/book";

/*
 * Short desktop-only pin (+=45%). Text is revealed normally and stays visible
 * the whole time; only the cover rotation/glow is scrubbed.
 */
export default function BookTeaser() {
  const section = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({
          scrollTrigger: { trigger: section.current, start: "top top", end: "+=45%", pin: true, scrub: 1, invalidateOnRefresh: true },
        })
          .fromTo(".teaser-book", { rotateY: -26, rotateZ: -4, scale: 0.9 }, { rotateY: 0, rotateZ: 0, scale: 1, ease: "none" }, 0)
          .fromTo(".teaser-glow", { scale: 0.75, opacity: 0.45 }, { scale: 1.15, opacity: 1, ease: "none" }, 0)
          .fromTo(".teaser-diamond", { rotate: 45 }, { rotate: 135, ease: "none" }, 0);
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section ref={section} className="teaser-sec relative flex items-center overflow-hidden">
      <div className="absolute inset-0 teaser-bg" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-14 items-center py-24">
        <div className="flex justify-center" data-reveal="left">
          <div className="stage3d relative">
            <div className="teaser-glow" aria-hidden />
            <div className="teaser-diamond" aria-hidden />
            <div className="teaser-book"><BookCover3D className="teaser-cover" /></div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" data-reveal>About the Book</p>
          <h2 className="h2 font-cinzel" data-reveal="blur"><span className="grad-text">Some loves are born in the storm.</span></h2>
          <p className="lead mt-6" data-reveal>{TEASER}</p>
          <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start" data-stagger>
            {GENRE_TAGS.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="mt-9" data-reveal><Button to="/about-the-book">Discover the Book</Button></div>
        </div>
      </div>
    </section>
  );
}
