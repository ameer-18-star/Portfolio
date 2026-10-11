import { useEffect, useRef, useState } from "react";

// Scroll-driven fade-in-up wrapper (pure CSS keyframes, see index.css).
const Reveal = ({ children, className = "", threshold = 0.08, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Reveal;
