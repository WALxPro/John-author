import { useRef } from "react";
import { NavLink } from "react-router-dom";
import AuroraBackground from "@/components/effects/AuroraBackground";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/config/navigation";
import { LINKS } from "@/config/links";
import { gsap, useGSAP } from "@/lib/gsap";
import { useApp } from "@/context/AppContext";

export default function MobileMenu({ open, onClose }) {
  const ref = useRef(null);
  const { reduced } = useApp();
  const tab = open ? 0 : -1;

  useGSAP(
    () => {
      if (!open || reduced) return;
      gsap.fromTo(".mm-item", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "power3.out", delay: 0.1 });
    },
    { scope: ref, dependencies: [open, reduced] }
  );

  return (
    <div id="mobile-menu" ref={ref} className={`mmenu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <AuroraBackground />
      <div className="relative h-full flex flex-col justify-center px-8 gap-8">
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              tabIndex={tab}
              onClick={onClose}
              className={({ isActive }) => `mm-item mm-link font-cinzel ${isActive ? "active" : ""}`}
            >
              <span className="mm-num">0{i + 1}</span>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="mm-item"><SocialLinks tabIndex={tab} /></div>
        <div className="mm-item"><Button href={LINKS.retailers.amazon} tabIndex={tab}>Buy on Amazon</Button></div>
      </div>
    </div>
  );
}
