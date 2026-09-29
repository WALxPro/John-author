import BookCover3D from "@/components/book/BookCover3D";
import RetailerButtons from "@/components/ui/RetailerButtons";

export default function BookShowcase() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center" data-reveal="left">
          <div className="stage3d"><BookCover3D className="book-lg" /></div>
        </div>
        <div className="text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" data-reveal>Get Your Copy</p>
          <h2 className="h2 font-cinzel" data-reveal="blur"><span className="grad-text">Run With the Pack</span></h2>
          <p className="lead mt-5 mb-8" data-reveal>Choose your favorite store and start reading tonight.</p>
          <RetailerButtons />
        </div>
      </div>
    </section>
  );
}
