import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft, faExpand } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/modal/Modal";

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

// Stars are a decorative social-proof motif (every card shows the same
// rating), not a claim of a measured score from a review platform.
const Stars = () => (
  <div className="flex gap-0.5 text-cyan" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <FontAwesomeIcon icon={faStar} key={i} className="text-xs" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const [open, setOpen] = useState(false);
  const isPlaceholder = !!testimonial.placeholder;
  const long = testimonial.quote.length > 180;

  return (
    <div
      className={`testimonial-card glass-panel p-7 sm:p-8 h-full flex flex-col hover-lift hover:glow-cyan ${
        isPlaceholder ? "testimonial-card--placeholder" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-cyan/40 text-2xl" aria-hidden="true" />
        <Stars />
      </div>

      <p className={`text-ink leading-relaxed mb-6 grow ${isPlaceholder ? "italic text-muted" : ""}`}>
        {long ? `${testimonial.quote.slice(0, 170)}...` : testimonial.quote}
      </p>

      {long && (
        <button
          onClick={() => setOpen(true)}
          className="font-mono text-[11px] text-cyan hover:underline self-start mb-5 flex items-center gap-1.5"
        >
          <FontAwesomeIcon icon={faExpand} className="text-[10px]" /> Read full recommendation
        </button>
      )}

      <div className="flex items-center gap-3 pt-5 border-t border-border">
        <div className="testimonial-avatar shrink-0" aria-hidden="true">
          {initials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <p className="font-mono text-cyan text-sm truncate">{testimonial.name}</p>
          <p className="text-muted text-xs mt-0.5 truncate">{testimonial.role}</p>
          <p className="text-emerald font-mono text-[11px] uppercase mt-0.5 truncate">{testimonial.org}</p>
        </div>
      </div>

      {open && (
        <Modal open onClose={() => setOpen(false)} title={testimonial.name} subtitle={`${testimonial.role} | ${testimonial.org}`} labelledBy="testimonial-title">
          <div className="flex items-center gap-2 mb-4"><Stars /></div>
          <p className="text-ink leading-relaxed">{testimonial.quote}</p>
        </Modal>
      )}
    </div>
  );
};

export default TestimonialCard;
