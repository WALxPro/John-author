import { PULL_QUOTE } from "@/data/author";

export default function PullQuote() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      <div className="quote-glow" aria-hidden />
      <figure className="max-w-5xl mx-auto text-center relative">
        <span className="quote-mark font-cinzel" aria-hidden data-reveal="scale">“</span>
        <blockquote className="pull-quote font-cinzel" data-stagger>
          {PULL_QUOTE.text.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-3"><span className="grad-text">{word}</span></span>
          ))}
        </blockquote>
        <figcaption className="text-lavender mt-8 tracking-widest uppercase text-sm" data-reveal>
           {PULL_QUOTE.attribution}, <em>{PULL_QUOTE.source}</em>
        </figcaption>
      </figure>
    </section>
  );
}
