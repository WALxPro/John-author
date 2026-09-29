import FeatureCard from "@/components/shared/FeatureCard";
import { AUTHOR_CARDS } from "@/data/author";

export default function AuthorCards() {
  return (
    <section className="relative py-20 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6" data-stagger>
        {AUTHOR_CARDS.map((card) => <FeatureCard key={card.title} {...card} />)}
      </div>
    </section>
  );
}
