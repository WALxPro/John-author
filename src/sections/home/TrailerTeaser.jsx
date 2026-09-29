import Button from "@/components/ui/Button";
import ClawMarks from "@/components/shared/ClawMarks";

const TRAILER_URL = "https://res.cloudinary.com/daterfw1n/video/upload/v1790687491/wolfVideo_msnotj.mp4";

/** Compact cinematic trailer section designed specifically for the home page. */
export default function TrailerTeaser() {
  return (
    <section className="home-trailer relative overflow-hidden py-20 md:py-28">
      <div className="home-trailer-glow" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7" data-reveal="left">
          <div className="home-trailer-frame glass" data-hover>
            <ClawMarks />
            <div className="home-trailer-topline" aria-hidden>
              <span>Official Trailer</span><span>Play Film</span>
            </div>
            <video className="home-trailer-video" controls playsInline preload="metadata" poster="/assets/John%20Book%20Cover%20Variation%201%20of%20Concept%201.jpeg">
              <source src={TRAILER_URL} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>

        <div className="lg:col-span-5 text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" data-reveal>Watch the trailer</p>
          <h2 className="h2 font-cinzel" data-reveal="blur"><span className="grad-text">The pack is calling.</span></h2>
          <p className="lead mt-5" data-reveal>
            Witness the danger, devotion and wild pull of <em>Hope for the Wolf</em> before you turn the first page.
          </p>
          <div className="mt-8" data-reveal><Button to="/book-trailer">Watch Full Trailer</Button></div>
        </div>
      </div>
    </section>
  );
}
