import SocialLinks from "@/components/ui/SocialLinks";
import { LINKS } from "@/config/links";

const TOPICS = [
  ["Media requests", "Press kits, features and coverage."],
  ["Review requests", "Reader copies for reviewers and bloggers."],
  ["Interview requests", "Podcasts, blogs and video interviews."],
  ["Collaboration", "Events, partnerships and creative projects."],
];

export default function ContactSidebar() {
  return (
    <aside className="flex flex-col gap-6" data-stagger>
      <div className="glass p-7">
        <p className="eyebrow">Email</p>
        <a href={`mailto:${LINKS.email}`} className="contact-mail font-cinzel">{LINKS.email}</a>
        <p className="text-lavender text-sm mt-2">Placeholder address — replace with the official contact email.</p>
      </div>

      <div className="glass p-7">
        <p className="eyebrow">Get in touch for</p>
        <ul className="mt-3 space-y-3">
          {TOPICS.map(([title, text]) => (
            <li key={title} className="flex gap-3">
              <span className="ci-dot" />
              <div>
                <b className="font-cinzel text-white text-sm">{title}</b>
                <p className="text-lavender text-sm">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass p-7">
        <p className="eyebrow">Follow</p>
        <SocialLinks className="mt-3" />
      </div>
    </aside>
  );
}
