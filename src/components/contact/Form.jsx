import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const inputClass =
  "w-full bg-panel border border-border focus:border-cyan focus:outline-none rounded-md px-4 py-3 text-sm text-ink placeholder:text-muted transition-colors";

// Sign up at https://formspree.io, create a form, and paste its endpoint
// below (e.g. "https://formspree.io/f/xxxxxxx"). Until it's set, submitting
// falls back to opening the visitor's email client instead.
const FORM_ENDPOINT = null;
const FALLBACK_EMAIL = "ali.ameer.it@proton.me";

const Form = () => {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.target);
    const email = (data.get("email") || "").toString().trim();
    const name = (data.get("name") || "").toString().trim();
    const topic = (data.get("topic") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "Please fill in your name, a valid email, and a message." });
      return;
    }

    if (!FORM_ENDPOINT) {
      // No backend configured yet — open the visitor's email client instead,
      // pre-filled with what they wrote.
      const subject = encodeURIComponent(`Portfolio contact: ${topic || "General"}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({ type: "success", text: "Opening your email client to send this message." });
      e.target.reset();
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus({ type: "success", text: "Got it. I'll reply within two working days." });
        e.target.reset();
      } else {
        setStatus({ type: "error", text: "Something went wrong sending that. Try again or email me directly." });
      }
    } catch {
      setStatus({ type: "error", text: "Something went wrong sending that. Try again or email me directly." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 flex flex-col gap-4">
      <input name="name" type="text" placeholder="Your name" className={inputClass} required />
      <input name="email" type="email" placeholder="Work email" className={inputClass} required />
      <select name="topic" className={inputClass} defaultValue="">
        <option value="" disabled>What's this about?</option>
        <option value="job">Job opportunity</option>
        <option value="training">Security training</option>
        <option value="project">Project</option>
        <option value="other">Other</option>
      </select>
      <textarea name="message" rows={5} placeholder="Role, team, and anything I should read first" className={inputClass} required />
      <button
        type="submit"
        disabled={sending}
        className="btn-primary rounded-md py-3 font-mono text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : <><FontAwesomeIcon icon={faPaperPlane} /> Send message</>}
      </button>
      {status && (
        <p className={`font-mono text-xs ${status.type === "error" ? "text-red-400" : "text-emerald"}`}>
          {status.text}
        </p>
      )}
    </form>
  );
};

export default Form;