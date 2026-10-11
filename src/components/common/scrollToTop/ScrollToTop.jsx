import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 sm:right-10 z-40 w-12 h-12 center rounded-full transition-all duration-500 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-obsidian ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FontAwesomeIcon icon={faAngleUp} size="lg" />
    </button>
  );
};

export default ScrollToTop;
