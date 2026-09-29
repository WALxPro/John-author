import { useRef } from "react";
import Button from "@/components/ui/Button";
import ClawMarks from "@/components/shared/ClawMarks";
import usePageTitle from "@/hooks/usePageTitle";
import useReveal from "@/hooks/useReveal";
import { LINKS } from "@/config/links";

const TRAILER_URL = "https://res.cloudinary.com/daterfw1n/video/upload/v1790687491/wolfVideo_msnotj.mp4";

export default function BookTrailer() {
  const ref = useRef(null);
  usePageTitle("Book Trailer");
  useReveal(ref);

  return (
    <main ref={ref} className="trailer-page">
      <div className="trailer-ambient trailer-ambient-a" aria-hidden />
      <div className="trailer-ambient trailer-ambient-b" aria-hidden />

      <section className="trailer-hero">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow justify-center" data-reveal>Enter the world of the pack</p>
          <span className="trailer-kicker font-cinzel" data-reveal data-delay=".05">Official Book Trailer</span>
          <h1 className="trailer-title font-cinzel" data-reveal="blur">
            <span className="grad-text">Hope for the Wolf</span>
          </h1>
          <p className="lead max-w-2xl mx-auto mt-5" data-reveal data-delay=".1">
            Love. Loyalty. Survival. Step inside the dark, dangerous world where the pack never lets go.
          </p>
        </div>
      </section>

      <section className="trailer-stage max-w-6xl mx-auto px-5 md:px-8 pb-20 md:pb-28" data-reveal="scale">
        <div className="trailer-frame glass neon" data-hover>
          <ClawMarks />
          <div className="trailer-labels" aria-hidden>
            <span>Play the trailer</span><span>Book One</span>
          </div>
          <video className="trailer-video" controls playsInline preload="metadata" poster="/assets/John%20Book%20Cover%20Variation%201%20of%20Concept%201.jpeg">
            <source src={TRAILER_URL} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>

        <div className="trailer-after text-center" data-reveal>
          <p className="trailer-note font-cinzel">The hunt begins with a single howl.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Button href={LINKS.retailers.amazon}>Get the Book</Button>
            <Button to="/about-the-book" variant="ghost">Discover the Story</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
