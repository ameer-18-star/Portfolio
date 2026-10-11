import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const inputClass =
  "w-full bg-panel border border-border focus:border-cyan focus:outline-none rounded-md px-4 py-3 text-sm text-ink placeholder:text-muted transition-colors";

const Form = () => {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.target);
    const email = (data.get("email") || "").toString().trim();
    const name = (data.get("name") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setStatus({ type: "success", text: "Got it. I'll reply within two working days." });
      return;
    }
    setStatus({ type: "success", text: "Got it. I'll reply within two working days." });
    e.target.reset();
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
