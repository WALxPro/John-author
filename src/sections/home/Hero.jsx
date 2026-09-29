import { useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import ClawScratch from "@/components/effects/ClawScratch";
import BookCover3D from "@/components/book/BookCover3D";
import Button from "@/components/ui/Button";
import useEyeTracking from "@/hooks/useEyeTracking";
import { gsap, useGSAP } from "@/lib/gsap";
import { useApp } from "@/context/AppContext";
import { LINKS } from "@/config/links";
import { SITE } from "@/config/site";

export default function Hero() {
  const root = useRef(null);
  const { ready, reduced } = useApp();
  useEyeTracking(root, 4);

  useGSAP(
    () => {
      if (!ready || reduced) return;

      // Intro — total ≈ 1.5s, starts the moment the loader exits.
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-letter", { opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)", duration: 0.7, stagger: 0.045, clearProps: "transform,filter" })
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
        .from(".hero-author, .hero-tag", { opacity: 0, y: 16, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .from(".hero-cta > *", { opacity: 0, y: 18, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-book", { opacity: 0, scale: 0.8, rotateY: -35, rotateZ: -6, duration: 1.1, ease: "expo.out" }, 0.2)
        .fromTo(".claw-path", { strokeDashoffset: 600 }, { strokeDashoffset: 0, duration: 0.5, stagger: 0.09, ease: "power2.inOut" }, 0.4)
        .to(".claw-svg", { opacity: 0, duration: 0.9 }, "+=0.5");

      // Subtle scroll parallax — small px values, nothing leaves the viewport.
      const drift = (y) => ({
        y,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".px-aurora", drift(150));
        gsap.to(".px-wolf", drift(120));
        gsap.to(".px-mtn", drift(80));
        gsap.to(".px-forest1", drift(45));
        gsap.to(".px-forest2", drift(15));
        gsap.to(".px-content", drift(70));
      });
      mm.add("(max-width: 767px)", () => {
        gsap.to(".px-aurora", drift(60));
        gsap.to(".px-mtn", drift(30));
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [ready, reduced], revertOnUpdate: true }
  );

  return (
    <section ref={root} className="hero">
      <HeroBackground />
      <ClawScratch />

      <div className="px-content relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <HeroTitle />
            <p className="hero-sub font-cinzel">A Paranormal Romance, Book One</p>
            <p className="hero-author">by <span className="font-cinzel text-white">{SITE.author}</span></p>
            <p className="hero-tag text-lavender">{SITE.shortTagline}</p>
            <div className="hero-cta flex flex-wrap gap-4 justify-center lg:justify-start mt-9">
              <Button href={LINKS.retailers.amazon}>Buy on Amazon</Button>
              <Button to="/about-the-book" variant="ghost">About the Book</Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="stage3d">
              <div className="hero-book"><BookCover3D className="hero-cover" eager /></div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="scroll-ind"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.92, behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <span className="mouse"><i /></span>
        <span className="scroll-txt">Scroll</span>
      </button>
    </section>
  );
}
