import SmartImage from "@/components/ui/SmartImage";
import { ASSETS } from "@/config/assets";
import { SITE } from "@/config/site";
import { AUTHOR_BIO } from "@/data/author";

export default function Biography() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 flex justify-center" data-reveal="left">
          <div className="photo-frame">
            <div className="photo-inner">
              <SmartImage
                src={ASSETS.authorPhoto}
                alt={`Portrait of ${SITE.author}`}
                className="photo-img"
                fallback={<div className="author-fallback photo-img font-cinzel">JTR<small>Author portrait</small></div>}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow" data-reveal>Biography</p>
          <h2 className="h2 font-cinzel" data-reveal="blur"><span className="grad-text">The Story Behind the Storyteller</span></h2>
          <div className="space-y-5 mt-7">
            {AUTHOR_BIO.map((p, i) => (
              <p key={i} className="lead" data-reveal>
                {p.placeholder && <span className="ph">[Placeholder] </span>}
                {p.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
