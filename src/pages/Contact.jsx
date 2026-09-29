import { useRef } from "react";
import AuroraBackground from "@/components/effects/AuroraBackground";
import Stars from "@/components/effects/Stars";
import WolfHead from "@/components/effects/WolfHead";
import ContactForm from "@/sections/contact/ContactForm";
import ContactSidebar from "@/sections/contact/ContactSidebar";
import useReveal from "@/hooks/useReveal";
import useEyeTracking from "@/hooks/useEyeTracking";
import usePageTitle from "@/hooks/usePageTitle";

export default function Contact() {
  const ref = useRef(null);
  const eyes = useRef(null);
  usePageTitle("Contact");
  useEyeTracking(eyes, 5);
  useReveal(ref);

  return (
    <div ref={ref}>
      <section className="contact-sec relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <AuroraBackground />
          <Stars count={60} />
        </div>
        <div ref={eyes} className="contact-eyes" aria-hidden>
          <WolfHead className="w-full h-full" fillOpacity={0.28} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full">
          <header className="text-center mb-12">
            <p className="eyebrow justify-center" data-reveal>Contact</p>
            <h1 className="page-title font-cinzel" data-reveal="blur"><span className="grad-text">Send a Howl</span></h1>
            <p className="lead max-w-xl mx-auto mt-4" data-reveal>Questions, media, reviews or collaborations — the den is listening.</p>
          </header>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7"><ContactForm /></div>
            <div className="lg:col-span-5"><ContactSidebar /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
