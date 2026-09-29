import SmartImage from "@/components/ui/SmartImage";
import { ASSETS } from "@/config/assets";
import { SITE } from "@/config/site";

/** Cutout → photo → styled placeholder, in that order of preference. */
export default function AuthorPortrait({ label = "Author photo" }) {
  const placeholder = (
    <div className="author-fallback font-cinzel">
      JTR<small>{label}</small>
    </div>
  );
  return (
    <SmartImage
      src={ASSETS.authorCutout}
      alt={SITE.author}
      className="author-cut"
      fallback={<SmartImage src={ASSETS.authorPhoto} alt={SITE.author} className="author-cut author-cut-rect" fallback={placeholder} />}
    />
  );
}
