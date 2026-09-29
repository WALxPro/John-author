const LINES = ["HOPE", "FOR THE", "WOLF"];

/** Split into .hero-letter spans for the GSAP letter reveal. */
export default function HeroTitle() {
  let index = 0;
  return (
    <h1 className="hero-title font-cinzel" aria-label="Hope for the Wolf">
      {LINES.map((line, li) => (
        <span key={li} className={`hero-line ${li === 1 ? "hero-line-sm" : ""}`} aria-hidden>
          {line.split("").map((ch, ci) => {
            if (ch === " ") return <span key={ci} className="hero-space"> </span>;
            index += 1;
            return (
              <span key={ci} className="hero-letter grad-text" style={{ animationDelay: `${-index * 0.35}s` }}>
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
