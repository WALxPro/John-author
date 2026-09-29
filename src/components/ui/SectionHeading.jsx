export default function SectionHeading({ eyebrow, title, sub, align = "center", as: Tag = "h2" }) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-center lg:text-left"}`}>
      {eyebrow && (
        <p className={`eyebrow ${centered ? "justify-center" : "justify-center lg:justify-start"}`} data-reveal>
          {eyebrow}
        </p>
      )}
      <Tag className="h2 font-cinzel" data-reveal="blur">
        <span className="grad-text">{title}</span>
      </Tag>
      {sub && <p className="lead mt-5" data-reveal data-delay=".08">{sub}</p>}
    </div>
  );
}
