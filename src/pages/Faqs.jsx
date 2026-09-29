import { useRef } from "react";
import PageHero from "@/components/shared/PageHero";
import BuyCTA from "@/components/shared/BuyCTA";
import FaqAccordion from "@/sections/faq/FaqAccordion";
import useReveal from "@/hooks/useReveal";
import usePageTitle from "@/hooks/usePageTitle";

export default function Faqs() {
  const ref = useRef(null);
  usePageTitle("FAQs");
  useReveal(ref);

  return (
    <div ref={ref}>
      <PageHero eyebrow="Questions & Answers" title="FAQs" sub="Everything you need to know about Hope for the Wolf." />
      <FaqAccordion />
      <BuyCTA title="Ready to Run With the Pack?" />
    </div>
  );
}
