import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

let refreshTimer;
/** Debounced sort + refresh, called after images/fonts/route transitions settle. */
export function refreshScroll(delay = 150) {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  }, delay);
}

export { gsap, ScrollTrigger, useGSAP };
