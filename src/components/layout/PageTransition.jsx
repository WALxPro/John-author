import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { refreshScroll } from "@/lib/gsap";

/*
 * Opacity + y only. No filter/transform is left behind after the enter
 * animation (y:0 renders as `transform: none`), so ScrollTrigger pins
 * inside the page keep working.
 */
const FULL = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};
const REDUCED = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children }) {
  const { reduced } = useApp();
  return (
    <motion.div
      variants={reduced ? REDUCED : FULL}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: reduced ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={(definition) => definition === "animate" && refreshScroll(40)}
    >
      {children}
    </motion.div>
  );
}
