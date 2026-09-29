import Icon from "@/components/ui/Icon";
import ClawMarks from "@/components/shared/ClawMarks";

export default function PackCard({ index, icon, title, text }) {
  return (
    <article className={`pack-card pc-${index}`} data-hover>
      <div className="pack-card-bg" aria-hidden />
      <span className="pack-num font-cinzel" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
      <div className={`pack-icon pi-${icon}`}><Icon name={icon} className="w-12 h-12" /></div>
      <h3 className="pack-title font-cinzel"><span className="grad-text">{title}</span></h3>
      <p className="pack-text">{text}</p>
      <ClawMarks />
    </article>
  );
}
