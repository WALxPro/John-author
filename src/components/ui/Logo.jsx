import SmartImage from "./SmartImage";
import { ASSETS } from "@/config/assets";
import { SITE } from "@/config/site";

const SIZES = { header: "logo-header", footer: "logo-footer", loader: "logo-loader" };

export default function Logo({ variant = "header" }) {
  const size = SIZES[variant] ?? SIZES.header;
  return (
    <SmartImage
      src={ASSETS.logo}
      alt={SITE.author}
      loading="eager"
      className={`logo ${size}`}
      fallback={
        <span className={`logo-fallback font-cinzel ${size}`}>
          <i className="lf-claw" aria-hidden><b /><b /><b /></i>
          {SITE.author.toUpperCase()}
        </span>
      }
    />
  );
}
