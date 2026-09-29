/** Animated aurora blobs + ribbons. Pure CSS  no celestial imagery. */
export default function AuroraBackground({ className = "" }) {
  return (
    <div className={`aurora ${className}`} aria-hidden>
      <div className="aurora-blob ab1" />
      <div className="aurora-blob ab2" />
      <div className="aurora-blob ab3" />
      <div className="aurora-ribbon" />
      <div className="aurora-ribbon r2" />
    </div>
  );
}
