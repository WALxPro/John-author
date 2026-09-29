import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { refreshScroll } from "@/lib/gsap";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isTouch = useMediaQuery("(hover: none), (pointer: coarse)");
  const [ready, setReady] = useState(false); // true once the loader exits

  useEffect(() => {
    document.fonts?.ready.then(() => refreshScroll());
    const onLoad = () => refreshScroll();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const value = useMemo(() => ({ reduced, isTouch, ready, setReady }), [reduced, isTouch, ready]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
