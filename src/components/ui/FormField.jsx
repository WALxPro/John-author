import { cloneElement, useId } from "react";

/** Label + control + error. Passes id / aria attributes into the child control. */
export default function FormField({ label, error, children }) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="field-label font-cinzel">{label}</label>
      {cloneElement(children, {
        id,
        "aria-invalid": !!error,
        "aria-describedby": error ? errorId : undefined,
        className: `field ${error ? "has-err" : ""}`,
      })}
      {error && <span id={errorId} className="field-err" role="alert">{error}</span>}
    </div>
  );
}
