import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Shared accessible modal: portal to <body> (so transformed ancestors can't
// break position:fixed), ESC to close, backdrop click, scroll lock.
// `size="xl"` is for content that needs real room to breathe (full-res
// certificate/badge renders): a near-viewport panel (92vw x 88vh, capped at
// 1200x900) instead of the default max-w-* column width.
const Modal = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-2xl",
  size = "default",
  labelledBy = "modal-title",
}) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <div
        className={
          size === "xl"
            ? "glass-panel modal-xl overflow-y-auto p-6 sm:p-8 glow-cyan"
            : `glass-panel w-full ${maxWidth} max-h-[88vh] overflow-y-auto p-6 sm:p-8 glow-cyan`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-4 mb-5">
          <div>
            <h3 id={labelledBy} className="font-display font-semibold text-xl text-cyan">
              {title}
            </h3>
            {subtitle && <p className="font-mono text-xs text-muted mt-1">{subtitle}</p>}
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 center shrink-0 rounded-md border border-border text-muted hover:text-cyan hover:border-cyan transition-all duration-300"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
