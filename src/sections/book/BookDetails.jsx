import SectionHeading from "@/components/ui/SectionHeading";
import { BOOK_DETAILS } from "@/data/book";

export default function BookDetails() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <SectionHeading eyebrow="Book Details" title="The Particulars" />
      <dl className="max-w-3xl mx-auto mt-12 glass neon details" data-reveal="scale">
        {BOOK_DETAILS.map(([label, value]) => (
          <div key={label} className="detail-row">
            <dt className="font-cinzel detail-k">{label}</dt>
            <dd className="detail-v">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
