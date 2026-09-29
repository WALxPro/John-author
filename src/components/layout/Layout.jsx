import Header from "./Header";
import Footer from "./Footer";
import Loader from "@/components/effects/Loader";
import ParticleField from "@/components/effects/ParticleField";
import Grain from "@/components/effects/Grain";
import CursorFollower from "@/components/effects/CursorFollower";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <Loader />
      <Header />
      <main id="main" className="min-h-screen">{children}</main>
      <Footer />
      <ParticleField />
      <Grain />
      <CursorFollower />
    </div>
  );
}
