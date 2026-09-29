import Button from "@/components/ui/Button";
import BookCover3D from "@/components/book/BookCover3D";
import AuroraBackground from "@/components/effects/AuroraBackground";
import { LINKS } from "@/config/links";

export default function BuyCTA({
  title = "Answer the Call of the Wild",
  text = "Hope for the Wolf  Book One  is waiting. Run with the pack tonight.",
  secondary = null,
}) {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="cta-banner max-w-6xl mx-auto overflow-hidden" data-reveal="scale">
        <AuroraBackground />
        <div className="relative grid md:grid-cols-12 gap-10 items-center p-8 md:p-14">
          <div className="md:col-span-7 text-center md:text-left">
            <p className="eyebrow justify-center md:justify-start">Book One · Out Now</p>
            <h2 className="h2 font-cinzel mt-2"><span className="grad-text">{title}</span></h2>
            <p className="lead mt-4">{text}</p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <Button href={LINKS.retailers.amazon}>Buy on Amazon</Button>
              {secondary}
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <BookCover3D className="cta-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
