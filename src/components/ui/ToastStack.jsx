import Icon from "./Icon";

export default function ToastStack({ toasts }) {
  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          <span className="toast-icon"><Icon name="paw" className="w-4 h-4" /></span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
