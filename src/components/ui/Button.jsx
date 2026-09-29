import { Link } from "react-router-dom";

/**
 * Gradient button with shimmer + claw-scratch hover.
 * `to` → internal route · `href` → external (new tab) · otherwise <button>.
 * variants: primary | ghost | light
 */
export default function Button({ to, href, variant = "primary", className = "", children, type = "button", ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  const label = <span className="btn-label">{children}</span>;

  if (to) return <Link to={to} className={cls} {...rest}>{label}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>{label}</a>;
  return <button type={type} className={cls} {...rest}>{label}</button>;
}
