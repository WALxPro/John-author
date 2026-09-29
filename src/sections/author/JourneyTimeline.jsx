import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap, useGSAP } from "@/lib/gsap";
import { TIMELINE } from "@/data/author";

export default function JourneyTimeline() {
  const section = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".tl-fill", { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".timeline", start: "top 75%", end: "bottom 60%", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section ref={section} className="relative py-20 md:py-28 px-5 md:px-8">
      <SectionHeading eyebrow="The Journey" title="From Spark to Book One" sub="Placeholder milestones  to be replaced with the author's real journey." />
      <ol className="timeline max-w-4xl mx-auto mt-16 relative">
        <div className="tl-line" aria-hidden><span className="tl-fill" /></div>
        {TIMELINE.map((m, i) => (
          <li key={m.title} className={`tl-item ${i % 2 ? "tl-right" : "tl-left"}`} data-reveal={i % 2 ? "right" : "left"}>
            <span className="tl-node" aria-hidden />
            <div className="tl-card glass">
              <span className="tl-step font-cinzel">Chapter {i + 1}</span>
              <h3 className="font-cinzel tl-t">{m.title}</h3>
              <p className="text-lavender mt-2 text-sm leading-relaxed">{m.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
