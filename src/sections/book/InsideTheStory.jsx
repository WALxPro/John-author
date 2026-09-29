import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { STORY_CARDS } from "@/data/book";

export default function InsideTheStory() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <SectionHeading eyebrow="Inside the Story" title="Enter Their World" />
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14" data-stagger>
        {STORY_CARDS.map((card) => <FeatureCard key={card.title} {...card} />)}
      </div>
    </section>
  );
}
