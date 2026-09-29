import { PINES_COVER } from "@/lib/svgPaths";

/** Styled stand-in shown only when the cover JPEG is missing. */
export default function CoverFallback() {
  return (
    <div className="cover-fallback">
      <div className="cf-sky" />
      <svg className="cf-forest" viewBox="0 0 300 120" preserveAspectRatio="xMidYMax slice" aria-hidden>
        <path d={PINES_COVER} fill="#04050b" />
      </svg>
      <div className="cf-text">
        <div className="font-cinzel cf-title">HOPE<small>— FOR THE —</small>WOLF</div>
        <div className="cf-sub">A Paranormal Romance</div>
        <div className="cf-bottom">
          <span>BOOK ONE</span>
          <b className="font-cinzel">JOHN T. RHOADS</b>
        </div>
      </div>
    </div>
  );
}
