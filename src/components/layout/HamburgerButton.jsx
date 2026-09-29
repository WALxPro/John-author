export default function HamburgerButton({ open, onToggle }) {
  return (
    <button
      type="button"
      className={`burger lg:hidden ${open ? "is-open" : ""}`}
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <span /><span /><span />
    </button>
  );
}
