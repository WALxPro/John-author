const PATHS = {
  heart: <path d="M12 20.5s-7.2-4.4-9.3-9.1A5.3 5.3 0 0 1 12 6.2a5.3 5.3 0 0 1 9.3 5.2c-2.1 4.7-9.3 9.1-9.3 9.1z" />,
  shield: <path d="M12 2.8l8 3v6.1c0 4.9-3.4 8.2-8 9.3-4.6-1.1-8-4.4-8-9.3V5.8z M8.5 12l2.4 2.4 4.6-4.8" />,
  paw: (
    <g>
      <ellipse cx="6.2" cy="9.5" rx="1.9" ry="2.5" />
      <ellipse cx="10" cy="6.2" rx="1.9" ry="2.6" />
      <ellipse cx="14" cy="6.2" rx="1.9" ry="2.6" />
      <ellipse cx="17.8" cy="9.5" rx="1.9" ry="2.5" />
      <path d="M12 11.5c-3 0-5.5 3.4-5.5 5.6 0 1.7 1.3 2.6 2.8 2.6 1.1 0 1.8-.5 2.7-.5s1.6.5 2.7.5c1.5 0 2.8-.9 2.8-2.6 0-2.2-2.5-5.6-5.5-5.6z" />
    </g>
  ),
  wind: <path d="M3 8.5h11a3 3 0 1 0-3-3 M3 12.5h15.5a3 3 0 1 1-3 3 M3 16.5h7" />,
  tree: <path d="M12 2.5l5 7h-2.6l4 5.5h-3l3.6 5H5l3.6-5h-3l4-5.5H7z M12 20v2" />,
};
const FILLED = new Set(["paw"]);

export default function Icon({ name, className = "w-6 h-6" }) {
  const filled = FILLED.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
