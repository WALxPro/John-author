import AuroraBackground from "@/components/effects/AuroraBackground";
import Stars from "@/components/effects/Stars";
import MountainRange from "@/components/effects/MountainRange";
import ForestSilhouette from "@/components/effects/ForestSilhouette";
import { ASSETS } from "@/config/assets";

/*
 * Layer stack (back → front). Outer .px-* layers get GSAP scroll parallax;
 * inner .mouse-l* layers get CSS mouse parallax from --mx/--my.
 * No moon: all glow comes from aurora gradients.
 */
export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden>
      <img className="hero-cover-art" src={ASSETS.cover} alt="" />
      <div className="hero-moon" />
      <div className="hero-base" />
      <div className="layer px-aurora inset-0"><div className="mouse-l1 absolute inset-0"><AuroraBackground /></div></div>
      <div className="layer inset-0"><Stars count={80} /></div>
      {/* <div className="layer px-mtn mtn-layer"><div className="mouse-l2 w-full h-full"><MountainRange /></div></div> */}
      <div className="fog" style={{ bottom: "16%" }} />
      {/* <div className="layer px-forest1 forest1"><div className="mouse-l3 w-full h-full"><ForestSilhouette variant="back" /></div></div> */}
      {/* <div className="layer px-forest2 forest2"><div className="mouse-l4 w-full h-full"><ForestSilhouette variant="front" /></div></div> */}
      <div className="fog fog-front" />
      <div className="hero-vignette" />
    </div>
  );
}
