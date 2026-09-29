import { useRef } from "react";
import AuthorPortrait from "@/components/shared/AuthorPortrait";
import Button from "@/components/ui/Button";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE } from "@/config/site";

export default function AuthorTeaser() {
  const section = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = { trigger: section.current, start: "top bottom", end: "bottom top", scrub: true };
        gsap.fromTo(".author-cut-inner", { y: 50 }, { y: -40, ease: "none", scrollTrigger: st });
        gsap.fromTo(".author-glow", { scale: 0.85 }, { scale: 1.12, ease: "none", scrollTrigger: { ...st } });
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section ref={section} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative flex justify-center" data-reveal="scale">
          <div className="author-glow" aria-hidden />
          <div className="author-cut-inner relative"><AuthorPortrait /></div>
        </div>

        <div className="text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" data-reveal>About the Author</p>
          <h2 className="h2 font-cinzel" data-reveal="blur"><span className="grad-text">The Voice Behind the Howl</span></h2>
          <p className="lead mt-6" data-reveal>
            {SITE.author} is the author of <span className="text-white">{SITE.bookTitle}</span>, a dark paranormal romance where love, loyalty and the wolf collide.
          </p>
          <p className="lead mt-4" data-reveal data-delay=".05">
            A fuller author biography is on its way — the story behind the storyteller, in his own words.
          </p>
          <div className="mt-9" data-reveal><Button to="/about-the-author">Meet the Author</Button></div>
        </div>
      </div>
    </section>
  );
}
