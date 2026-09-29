import { useState } from "react";
import Button from "./Button";
import { useToast } from "@/context/ToastContext";
import { isEmail } from "@/lib/validation";

/** Frontend-only signup. Hook your provider (Mailchimp, ConvertKit…) into `onSubscribe`. */
export default function NewsletterForm({ compact = false, buttonLabel = "Join", onSubscribe }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    await onSubscribe?.(email.trim());
    toast("Welcome to the pack! Thanks for subscribing.");
    setEmail("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className={`news-form ${compact ? "is-compact" : ""}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="Your email address"
          aria-label="Email address"
          aria-invalid={!!error}
          className="news-input"
        />
        <Button type="submit" className="news-btn">{buttonLabel}</Button>
      </div>
      {error && <p className="field-err mt-2" role="alert">{error}</p>}
    </form>
  );
}
