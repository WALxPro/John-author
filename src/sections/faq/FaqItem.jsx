import { useRef } from "react";
import { gsap, refreshScroll, useGSAP } from "@/lib/gsap";
import { useApp } from "@/context/AppContext";

export default function FaqItem({ id, question, answer, open, onToggle }) {
  const body = useRef(null);
  const { reduced } = useApp();

  useGSAP(
    () => {
      gsap.to(body.current, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: reduced ? 0 : 0.45,
        ease: "power3.out",
        onComplete: () => refreshScroll(0),
      });
    },
    { dependencies: [open, reduced] }
  );

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={open} aria-controls={id}>
        <span className="font-cinzel">{question}</span>
        <span className="faq-icon" aria-hidden>+</span>
      </button>
      <div id={id} ref={body} className="faq-a" style={{ height: 0, opacity: 0 }} role="region">
        <p>{answer}</p>
      </div>
    </div>
  );
}
