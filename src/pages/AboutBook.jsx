import { useRef } from "react";
import PageHero from "@/components/shared/PageHero";
import RetailerMarquee from "@/components/shared/RetailerMarquee";
import BuyCTA from "@/components/shared/BuyCTA";
import Button from "@/components/ui/Button";
import BookShowcase from "@/sections/book/BookShowcase";
import Synopsis from "@/sections/book/Synopsis";
import InsideTheStory from "@/sections/book/InsideTheStory";
import Excerpt from "@/sections/book/Excerpt";
import BookDetails from "@/sections/book/BookDetails";
import useReveal from "@/hooks/useReveal";
import usePageTitle from "@/hooks/usePageTitle";
import { gsap, useGSAP } from "@/lib/gsap";
import { LINKS } from "@/config/links";

export default function AboutBook() {
  const ref = useRef(null);
  usePageTitle("About the Book");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".pb-bg", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".page-hero", start: "top top", end: "bottom top", scrub: true } });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );
  useReveal(ref);

  const scrollToExcerpt = () => document.getElementById("excerpt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={ref}>
      <PageHero coverBackdrop badge="Book One" eyebrow="A Paranormal Romance" title="Hope for the Wolf" sub="Blood, devotion and the unbreakable bond of the pack.">
        <div className="flex flex-wrap gap-4 justify-center mt-9" data-reveal>
          <Button href={LINKS.retailers.amazon}>Buy on Amazon</Button>
          <Button variant="ghost" onClick={scrollToExcerpt}>Read an Excerpt</Button>
        </div>
      </PageHero>
      <BookShowcase />
      <Synopsis />
      <InsideTheStory />
      <Excerpt />
      <BookDetails />
      <RetailerMarquee />
      <BuyCTA />
    </div>
  );
}
