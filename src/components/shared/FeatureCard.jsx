import Icon from "@/components/ui/Icon";
import ClawMarks from "./ClawMarks";

export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card glass" data-hover>
      <div className="feature-icon"><Icon name={icon} className="w-8 h-8" /></div>
      <h3 className="font-cinzel feature-title">{title}</h3>
      <p className="text-lavender mt-3 leading-relaxed text-sm">{text}</p>
      <ClawMarks />
    </article>
  );
}
