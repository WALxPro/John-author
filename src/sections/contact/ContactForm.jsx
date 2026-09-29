import { useState } from "react";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import { isEmail } from "@/lib/validation";

const SUBJECTS = ["General enquiry", "Media request", "Review request", "Interview request", "Collaboration"];
const EMPTY = { name: "", email: "", subject: SUBJECTS[0], message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email.";
  if (!values.subject) errors.subject = "Please choose a subject.";
  if (values.message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

/** Frontend-only. Wire `onSend` to Formspree / Netlify Forms / your API before launch. */
export default function ContactForm({ onSend }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    await onSend?.(values);
    toast("Thank you  your message has been sent.");
    setValues(EMPTY);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="glass neon contact-form p-7 md:p-10" data-reveal="left">
      <div className="grid sm:grid-cols-2 gap-x-5">
        <FormField label="Name" error={errors.name}>
          <input value={values.name} onChange={update("name")} autoComplete="name" />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <input type="email" value={values.email} onChange={update("email")} autoComplete="email" />
        </FormField>
      </div>
      <FormField label="Subject" error={errors.subject}>
        <select value={values.subject} onChange={update("subject")}>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </FormField>
      <FormField label="Message" error={errors.message}>
        <textarea rows={6} value={values.message} onChange={update("message")} />
      </FormField>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
