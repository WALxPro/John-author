import WolfHead from "@/components/effects/WolfHead";
import NewsletterForm from "@/components/ui/NewsletterForm";
import Button from "@/components/ui/Button";
import { LINKS } from "@/config/links";

const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  delay: `${(i % 6) * 0.9}s`,
  duration: `${6 + (i % 5)}s`,
}));

export default function JoinThePack() {
  return (
    <section className="relative py-16 md:py-24 px-5 md:px-8">
      <div className="join max-w-7xl mx-auto" data-reveal="scale">
        <div className="join-shade" aria-hidden />
        <div className="join-sparks" aria-hidden>
          {SPARKS.map((s, i) => <i key={i} style={{ left: s.left, animationDelay: s.delay, animationDuration: s.duration }} />)}
        </div>
        <WolfHead className="join-wolf" fillOpacity={0.35} />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">
          <div className="text-center lg:text-left">
            <p className="eyebrow eyebrow-light justify-center lg:justify-start">Newsletter</p>
            <h2 className="join-title font-cinzel">JOIN THE PACK</h2>
            <p className="join-text mt-4 mx-auto lg:mx-0">
              Be first to hear about new releases, exclusive excerpts and news from the woods. No spam — just the howl.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <NewsletterForm buttonLabel="Join the Pack" />
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="join-or">or</span>
              <Button href={LINKS.retailers.amazon} variant="light">Buy on Amazon</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
