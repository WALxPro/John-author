import { LINKS, MARQUEE_RETAILERS } from "@/config/links";

/** Infinite text-only retailer marquee. Pauses on hover. */
export default function RetailerMarquee({ label = "Available Now At" }) {
  const half = [...MARQUEE_RETAILERS, ...MARQUEE_RETAILERS];
  const items = [...half, ...half]; // second half duplicates for a seamless -50% loop

  return (
    <section className="retail-strip relative py-12 md:py-14" aria-label={label}>
      <p className="eyebrow justify-center mb-6" data-reveal>{label}</p>
      <div className="marquee" data-reveal>
        <div className="marquee-track">
          {items.map((r, i) => {
            const duplicate = i >= half.length;
            return (
              <a
                key={i}
                href={LINKS.retailers[r.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="pill font-cinzel"
                aria-hidden={duplicate}
                tabIndex={duplicate ? -1 : 0}
              >
                <span className="pill-dot" />
                {r.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
