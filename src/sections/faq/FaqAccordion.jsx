import { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQS } from "@/data/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="relative py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-4" data-stagger>
        {FAQS.map((f, i) => (
          <FaqItem
            key={f.q}
            id={`faq-${i}`}
            question={f.q}
            answer={f.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
