import { LINKS, SOCIALS } from "@/config/links";
import { SOCIAL_ICONS } from "@/components/ui/socialIcons";

export default function AuthorSocials() {
  return (
    <section className="relative py-16 px-5 md:px-8">
      <div className="max-w-5xl mx-auto glass neon p-8 md:p-12 text-center" data-reveal="scale">
        <p className="eyebrow justify-center">Follow the Pack</p>
        <h2 className="h2 font-cinzel"><span className="grad-text">Find John Online</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {SOCIALS.map(({ key, label }) => (
            <a key={key} href={LINKS.social[key]} target="_blank" rel="noopener noreferrer" className="soc-tile">
              <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>{SOCIAL_ICONS[key]}</svg>
              <span className="font-cinzel">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
