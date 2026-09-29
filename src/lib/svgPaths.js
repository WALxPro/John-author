/* Deterministic SVG generators for forests, ridges and the wolf emblem. */

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pinesPath(seed, count, minH, maxH, W = 1440, H = 300) {
  const r = mulberry32(seed);
  let d = `M0 ${H} L0 ${H - 6} L${W} ${H - 6} L${W} ${H} Z `;
  for (let i = 0; i < count; i++) {
    const x = (i / (count - 1)) * W + (r() - 0.5) * (W / count) * 0.8;
    const h = minH + r() * (maxH - minH);
    const w = h * 0.34;
    const b = H - 4;
    for (let k = 0; k < 3; k++) {
      const top = b - h + k * h * 0.25;
      const bot = b - h * 0.1 - (2 - k) * h * 0.22;
      const hw = w * (0.3 + 0.25 * k);
      d += `M${(x - hw).toFixed(1)} ${bot.toFixed(1)} L${x.toFixed(1)} ${top.toFixed(1)} L${(x + hw).toFixed(1)} ${bot.toFixed(1)} Z `;
    }
    d += `M${(x - 2.5).toFixed(1)} ${H} L${(x - 2.5).toFixed(1)} ${(b - h * 0.1).toFixed(1)} L${(x + 2.5).toFixed(1)} ${(b - h * 0.1).toFixed(1)} L${(x + 2.5).toFixed(1)} ${H} Z `;
  }
  return d;
}

export function ridgePath(seed, W, H, base, amp, steps) {
  const r = mulberry32(seed);
  let d = `M0 ${H} L0 ${base}`;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * W;
    const y = i % 2 === 0 ? base - amp * (0.45 + r() * 0.55) : base - amp * r() * 0.3;
    d += ` L${x.toFixed(0)} ${y.toFixed(0)}`;
  }
  return `${d} L${W} ${H} Z`;
}

export const PINES_BACK = pinesPath(11, 42, 90, 190);
export const PINES_FRONT = pinesPath(29, 30, 140, 280);
export const PINES_COVER = pinesPath(7, 16, 40, 100, 300, 120);
export const RIDGE_BACK = ridgePath(5, 1440, 400, 250, 190, 24);
export const RIDGE_FRONT = ridgePath(8, 1440, 400, 320, 130, 18);

export const WOLF_PATH =
  "M100 58 L74 48 L50 6 L40 66 L18 92 L32 108 L42 136 L70 164 L88 190 L100 196 L112 190 L130 164 L158 136 L168 108 L182 92 L160 66 L150 6 L126 48 Z";
export const WOLF_FACETS =
  "M100 62 L100 150 M74 50 L88 96 M126 50 L112 96 M42 108 L74 104 M158 108 L126 104 M70 164 L100 150 L130 164";
