import { Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import NewsletterForm from "@/components/ui/NewsletterForm";
import AuroraBackground from "@/components/effects/AuroraBackground";
import { NAV_ITEMS } from "@/config/navigation";
import { LINKS, RETAILERS } from "@/config/links";
import { SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden">
      <AuroraBackground className="footer-aurora" />
      <div className="footer-topline" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Home"><Logo variant="footer" /></Link>
            <p className="text-lavender mt-5 leading-relaxed text-sm max-w-sm">
              {SITE.tagline} <span className="text-white">{SITE.bookTitle}</span>  Book One  is out now.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div className="lg:col-span-2">
            <h4 className="foot-h font-cinzel">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map(({ to, label }) => (
                <li key={to}><Link to={to} className="foot-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="foot-h font-cinzel">Get the Book</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {RETAILERS.map(({ key, label }) => (
                <a key={key} href={LINKS.retailers[key]} target="_blank" rel="noopener noreferrer" className="pill pill-sm font-cinzel">
                  <span className="pill-dot" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="foot-h font-cinzel">Join the Pack</h4>
            <p className="text-lavender text-sm mt-5 mb-4">News, excerpts and release updates  straight from the den.</p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="footer-bottom mt-16 pt-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
          <p className="text-lavender">© {SITE.copyrightYear} {SITE.author}. All rights reserved.</p>
          <p className="text-lavender">
            Website designed and developed by{" "}
            <a href={LINKS.credit} target="_blank" rel="noopener noreferrer" className="credit-link">{SITE.creditName}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
