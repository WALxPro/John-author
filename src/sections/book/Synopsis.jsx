import { SYNOPSIS, SYNOPSIS_CLOSE } from "@/data/book";

export default function Synopsis() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-4xl mx-auto glass neon synopsis p-8 md:p-14" data-reveal="scale">
        <p className="eyebrow">Synopsis</p>
        <h2 className="h2 font-cinzel mb-8"><span className="grad-text">Love Beyond the Cage</span></h2>
        <div className="space-y-5">
          {SYNOPSIS.map((p, i) => <p key={i} className={`lead ${i === 0 ? "dropcap" : ""}`}>{p}</p>)}
        </div>
        <p className="synopsis-close font-cinzel mt-8">{SYNOPSIS_CLOSE}</p>
      </div>
    </section>
  );
}
