import AuroraBackground from "@/components/effects/AuroraBackground";
import Stars from "@/components/effects/Stars";
import AuthorPortrait from "@/components/shared/AuthorPortrait";
import SocialLinks from "@/components/ui/SocialLinks";
import { SITE } from "@/config/site";

export default function AuthorHero() {
  return (
    <section className="author-hero relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <AuroraBackground />
        <Stars count={50} />
        <div className="ah-glow" />
        <div className="page-hero-fade" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" data-reveal>About the Author</p>
          <h1 className="author-name font-cinzel" data-reveal="blur">
            <span className="grad-text">JOHN T.</span><br /><span className="grad-text">RHOADS</span>
          </h1>
          <p className="lead mt-6 max-w-xl mx-auto lg:mx-0" data-reveal data-delay=".1">{SITE.tagline}</p>
          <div className="mt-8 flex justify-center lg:justify-start" data-reveal><SocialLinks /></div>
        </div>
        <div className="lg:col-span-5 flex justify-center" data-reveal="scale">
          <div className="ah-cut relative"><AuthorPortrait /></div>
        </div>
      </div>
    </section>
  );
}
