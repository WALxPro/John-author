import Icon from "@/components/ui/Icon";

export default function ReviewCard({ review, offset, onSelect }) {
  const dist = Math.abs(offset);
  const style = {
    transform: `translateX(-50%) translateX(${offset * 72}%) translateZ(${-dist * 180}px) rotateY(${-offset * 28}deg) scale(${1 - dist * 0.06})`,
    opacity: dist > 2 ? 0 : 1 - dist * 0.35,
    zIndex: 10 - dist,
    pointerEvents: dist > 1 ? "none" : "auto",
  };
  return (
    <article
      className={`rev-card ${offset === 0 ? "is-active" : ""}`}
      style={style}
      onClick={onSelect}
      aria-hidden={offset !== 0}
    >
      <span className="rev-badge">Reader Review</span>
      <div className="rev-stars" aria-label="5 out of 5 stars">
        ★★★★★
      </div>
      <p className="rev-q font-cinzel">“{review.quote}”</p>
      <div className="rev-meta">
        <span className="rev-avatar">
          <img src={review.image} alt={review.name} />
        </span>{" "}
        <div>
          <b>{review.name}</b>
          <small>{review.source}</small>
        </div>
      </div>
    </article>
  );
}
