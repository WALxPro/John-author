import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import AuroraBackground from "./AuroraBackground";
import { useApp } from "@/context/AppContext";

const DURATION = 1300; // short on purpose  never block the hero

export default function Loader() {
  const { setReady } = useApp();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading → leaving → gone

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        setPhase("leaving");
        setReady(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setReady]);

  useEffect(() => {
    if (phase !== "leaving") return undefined;
    const t = setTimeout(() => setPhase("gone"), 650);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className={`loader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading">
      <AuroraBackground />
      <div className="relative flex flex-col items-center gap-6 px-6">
        <Logo variant="loader" />
        <div className="loader-line"><span style={{ transform: `scaleX(${progress})` }} /></div>
        <div className="loader-pct font-cinzel">{Math.round(progress * 100)}%</div>
      </div>
    </div>
  );
}
