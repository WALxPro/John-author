import { useRef } from "react";
import AuthorHero from "@/sections/author/AuthorHero";
import Biography from "@/sections/author/Biography";
import AuthorCards from "@/sections/author/AuthorCards";
import JourneyTimeline from "@/sections/author/JourneyTimeline";
import PullQuote from "@/sections/author/PullQuote";
import AuthorSocials from "@/sections/author/AuthorSocials";
import BuyCTA from "@/components/shared/BuyCTA";
import Button from "@/components/ui/Button";
import useReveal from "@/hooks/useReveal";
import usePageTitle from "@/hooks/usePageTitle";
import { gsap, useGSAP } from "@/lib/gsap";

export default function AboutAuthor() {
  const ref = useRef(null);
  usePageTitle("About the Author");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = { trigger: ".author-hero", start: "top top", end: "bottom top", scrub: true };
        gsap.to(".ah-glow", { yPercent: 25, scale: 1.15, ease: "none", scrollTrigger: st });
        gsap.to(".ah-cut", { y: 60, ease: "none", scrollTrigger: { ...st } });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );
  useReveal(ref);

  return (
    <div ref={ref}>
      <AuthorHero />
      <Biography />
      <AuthorCards />
      <JourneyTimeline />
      <PullQuote />
      <AuthorSocials />
      <BuyCTA
        title="Read Hope for the Wolf"
        text="Step into the storm with Fred, Angie and the pack — Book One is waiting."
        secondary={<Button to="/about-the-book" variant="ghost">About the Book</Button>}
      />
    </div>
  );
}
