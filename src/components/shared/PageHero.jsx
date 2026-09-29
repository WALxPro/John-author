import AuroraBackground from "@/components/effects/AuroraBackground";
import Stars from "@/components/effects/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { ASSETS } from "@/config/assets";

/** Inner-page hero. `coverBackdrop` adds the blurred cover as a parallax layer (.pb-bg). */
export default function PageHero({ eyebrow, title, sub, badge, coverBackdrop = false, children }) {
  return (
    <section className="page-hero relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        {coverBackdrop && (
          <div className="pb-bg absolute inset-0">
            <SmartImage src={ASSETS.cover} alt="" className="pb-img" loading="eager" fallback={<div className="pb-img pb-fallback" />} />
          </div>
        )}
        <AuroraBackground />
        <Stars count={40} />
        <div className="page-hero-fade" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
        {badge && <span className="badge font-cinzel" data-reveal="scale">{badge}</span>}
        {eyebrow && <p className="eyebrow justify-center mt-6" data-reveal>{eyebrow}</p>}
        <h1 className="page-title font-cinzel" data-reveal="blur"><span className="grad-text">{title}</span></h1>
        {sub && <p className="lead mx-auto max-w-2xl mt-6" data-reveal data-delay=".1">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
