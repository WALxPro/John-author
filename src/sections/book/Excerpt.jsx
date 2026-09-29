import SectionHeading from "@/components/ui/SectionHeading";
import Typewriter from "@/components/ui/Typewriter";
import Icon from "@/components/ui/Icon";
import WolfHead from "@/components/effects/WolfHead";
import { EXCERPT } from "@/data/book";
import { SITE } from "@/config/site";

export default function Excerpt() {
  return (
    <section id="excerpt" className="relative py-20 md:py-28 px-5 md:px-8">
      <SectionHeading eyebrow="Excerpt" title={`Chapter One — ${EXCERPT.chapter}`} />
      <div className="open-book max-w-6xl mx-auto mt-14" data-reveal="scale">
        <div className="ob-page ob-left">
          <p className="ob-kicker font-cinzel">{SITE.bookTitle}</p>
          <div className="ob-orn" aria-hidden><Icon name="paw" className="w-7 h-7" /></div>
          <h3 className="ob-chapter font-cinzel">{EXCERPT.chapter}</h3>
          <p className="ob-note">{EXCERPT.note}</p>
          <WolfHead className="ob-wolf" eyes={false} fillOpacity={0.12} />
        </div>
        <div className="ob-spine" aria-hidden />
        <div className="ob-page ob-right"><Typewriter text={EXCERPT.text} /></div>
      </div>
    </section>
  );
}
