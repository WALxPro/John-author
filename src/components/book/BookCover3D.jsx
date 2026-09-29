import SmartImage from "@/components/ui/SmartImage";
import CoverFallback from "./CoverFallback";
import useTilt from "@/hooks/useTilt";
import { useApp } from "@/context/AppContext";
import { ASSETS } from "@/config/assets";

/** Book cover with 3D mouse tilt, float, glow, spine and moving sheen. */
export default function BookCover3D({ className = "", float = true, maxTilt = 14, eager = false }) {
  const { reduced } = useApp();
  const { ref, onMouseMove, onMouseLeave } = useTilt(maxTilt);

  return (
    <div className={`book3d-wrap ${className}`} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} data-hover>
      <div className="book3d-glow" />
      <div className={`book3d-float ${float && !reduced ? "is-floating" : ""}`}>
        <div ref={ref} className="book3d">
          <SmartImage
            src={ASSETS.cover}
            alt="Hope for the Wolf book cover"
            className="book3d-img"
            loading={eager ? "eager" : "lazy"}
            fallback={<CoverFallback />}
          />
          <div className="book3d-spine" />
          <div className="book3d-sheen" />
        </div>
      </div>
    </div>
  );
}
