import { useRef } from "react";
import AuroraBackground from "@/components/effects/AuroraBackground";
import Stars from "@/components/effects/Stars";
import WolfHead from "@/components/effects/WolfHead";
import ForestSilhouette from "@/components/effects/ForestSilhouette";
import Button from "@/components/ui/Button";
import useReveal from "@/hooks/useReveal";
import useEyeTracking from "@/hooks/useEyeTracking";
import usePageTitle from "@/hooks/usePageTitle";

export default function NotFound() {
  const ref = useRef(null);
  const eyes = useRef(null);
  usePageTitle("Page Not Found");
  useEyeTracking(eyes, 5);
  useReveal(ref);

  return (
    <div ref={ref}>
      <section className="nf relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <AuroraBackground />
          <Stars count={70} />
        </div>
        <div ref={eyes} className="nf-wolf" aria-hidden><WolfHead className="w-full h-full" fillOpacity={0.4} /></div>
        <ForestSilhouette variant="front" className="nf-forest" />

        <div className="relative text-center px-5">
          <h1 className="nf-code font-cinzel" data-reveal="blur"><span className="grad-text">404</span></h1>
          <p className="h2 font-cinzel mt-2" data-reveal>This Trail Has Gone Cold</p>
          <p className="lead max-w-lg mx-auto mt-4" data-reveal>Page not found. It may have moved — or it never existed at all.</p>
          <div className="mt-9" data-reveal><Button to="/">Return Home</Button></div>
        </div>
      </section>
    </div>
  );
}
