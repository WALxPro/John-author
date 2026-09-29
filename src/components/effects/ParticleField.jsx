import { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

/** Global fireflies (amber/cyan) + rising embers (crimson/violet) on one canvas. */
export default function ParticleField() {
  const canvasRef = useRef(null);
  const { reduced } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, raf, particles = [];

    const make = (type) => ({
      type,
      x: Math.random() * w,
      y: Math.random() * h,
      r: type === "ember" ? Math.random() * 1.5 + 0.6 : Math.random() * 1.7 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: type === "ember" ? -(Math.random() * 0.55 + 0.2) : (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
      color: type === "ember"
        ? (Math.random() < 0.6 ? "244,63,94" : "124,58,237")
        : (Math.random() < 0.6 ? "251,191,36" : "34,211,238"),
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = reduced ? 10 : w < 768 ? 22 : 52;
      particles = Array.from({ length: count }, (_, i) => make(i % 3 === 0 ? "ember" : "fly"));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.phase += 0.02;
        p.x += p.vx + Math.sin(p.phase) * 0.15;
        p.y += p.vy;
        if (p.type === "ember" && p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        const alpha = p.type === "fly" ? (Math.sin(p.phase * 1.7) * 0.5 + 0.5) * 0.9 : 0.55;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${alpha * 0.16})`;
        ctx.arc(p.x, p.y, p.r * 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="particles" aria-hidden />;
}
