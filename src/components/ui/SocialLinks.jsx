import { LINKS, SOCIALS } from "@/config/links";
import { SOCIAL_ICONS } from "./socialIcons";

export default function SocialLinks({ size = "md", className = "", tabIndex }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIALS.map(({ key, label }) => (
        <a
          key={key}
          href={LINKS.social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          tabIndex={tabIndex}
          className={`soc soc-${size}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden>{SOCIAL_ICONS[key]}</svg>
        </a>
      ))}
    </div>
  );
}
