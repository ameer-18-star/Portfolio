import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable (private mode etc.) */
  }
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

// Applies the theme to <html>: data-theme attribute AND the `dark` class,
// so both CSS-variable and class-based styling stay in sync.
const applyTheme = (theme) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "dark");
  document.body?.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#05070d" : "#eaf0f7");
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next)}
      className="w-9 h-9 center rounded-md border border-border text-ink hover:border-cyan hover:text-cyan transition-all duration-300 hover:-translate-y-1"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
