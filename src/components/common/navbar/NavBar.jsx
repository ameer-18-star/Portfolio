import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faDownload } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "../theme/ThemeToggle";

const navItems = [
  { id: 1, name: "About", url: "about" },
  { id: 2, name: "Impact", url: "impact" },
  { id: 3, name: "Journey", url: "journey" },
  { id: 4, name: "Internships", url: "internships" },
  { id: 5, name: "Projects", url: "projects" },
  { id: 6, name: "Skills", url: "skills" },
  { id: 7, name: "Tooling", url: "tooling" },
  { id: 8, name: "Learning", url: "learning" },
  { id: 9, name: "Console", url: "terminal" },
  { id: 10, name: "Credentials", url: "credentials" },
  { id: 11, name: "Insights", url: "insights" },
];

const NavItem = ({ item, isHome, onClick, className }) =>
  isHome ? (
    <ScrollLink
      to={item.url}
      smooth
      duration={700}
      offset={-90}
      spy
      activeClass="text-cyan"
      onClick={onClick}
      className={className}
    >
      {item.name}
    </ScrollLink>
  ) : (
    <Link to="/" state={{ scrollTo: item.url }} onClick={onClick} className={className}>
      {item.name}
    </Link>
  );

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const menuId = "primary-mobile-menu";
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape, return focus to the toggle button
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = "nav-link px-2 py-2 text-muted hover:text-cyan cursor-pointer transition-colors";

  return (
    <header className="sticky top-0 z-50">
      {!dismissed && (
        <div className="w-full bg-emerald/10 border-b border-emerald/20 text-emerald font-mono text-[11px] xs:text-xs px-4 py-2 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            OPEN TO JUNIOR PENTEST ROLES · REMOTE · UTC+5
          </span>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-muted hover:text-emerald ms-3"
            aria-label="Dismiss status banner"
          >
            ✕
          </button>
        </div>
      )}
      
      <nav
        aria-label="Primary"
        className={`transition-all duration-500 border-b ${
          scrolled || !isHome ? "bg-obsidian/90 backdrop-blur-lg border-border" : "bg-transparent border-transparent"
        }`}
      >
        <div className="content relative flex items-center justify-between px-4 py-4 w-full">

          {/* ── Left: logo ─────────────────────────────────── */}
          <Link to="/" className="font-display font-extrabold text-xl shrink-0" aria-label="Ali Ameer, home">
            ALI AMEER<span className="text-cyan">.</span>
          </Link>

          {/* ── Center: nav items ──────────────────────────── */}
          {/* Replaced absolute positioning with flex-1 and justify-center to prevent overlap */}
          <div className="hidden xl:flex flex-1 justify-center px-4">
            <ul className="flex items-center gap-1 font-mono text-[13px] whitespace-nowrap">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavItem item={item} isHome={isHome} className={linkClass} />
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: action buttons ──────────────────────── */}
          {/* Added shrink-0 to ensure buttons stay fully pushed to the right and don't compress */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center font-mono text-[13px]">
              <Link
                to="/instructor"
                aria-current={pathname === "/instructor" ? "page" : undefined}
                className={`nav-link px-2 py-2 transition-colors ${
                  pathname === "/instructor" ? "text-cyan" : "text-muted hover:text-cyan"
                }`}
              >
                Instructor
              </Link>
              <Link
                to="/pentester"
                aria-current={pathname === "/pentester" ? "page" : undefined}
                className={`nav-link px-2 py-2 transition-colors ${
                  pathname === "/pentester" ? "text-cyan" : "text-muted hover:text-cyan"
                }`}
              >
                Pentester
              </Link>
            </div>
            <span className="hidden xl:block w-px h-4 bg-border shrink-0" />
            
            <ThemeToggle />
            
            <a
              href="/Ali_Ameer_Resume.pdf"
              download
              className="hidden md:flex items-center gap-2 btn-outline-glow px-4 py-2 rounded-md font-mono text-sm shrink-0"
            >
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
            
            {isHome ? (
              <ScrollLink to="contact" smooth duration={700} className="hidden sm:block btn-primary px-5 py-2 rounded-md font-mono text-sm cursor-pointer shrink-0">
                Hire Me
              </ScrollLink>
            ) : (
              <Link to="/" state={{ scrollTo: "contact" }} className="hidden sm:block btn-primary px-5 py-2 rounded-md font-mono text-sm shrink-0">
                Hire Me
              </Link>
            )}
            
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border shrink-0"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={menuId}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile menu remains exactly the same */}
        {open && (
          <ul id={menuId} className="xl:hidden flex flex-col px-4 pb-4 font-mono text-sm bg-obsidian border-t border-border">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavItem item={item} isHome={isHome} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-cyan cursor-pointer" />
              </li>
            ))}
            <li className="border-t border-border mt-1 pt-1">
              <Link
                to="/instructor"
                onClick={() => setOpen(false)}
                className="block py-3 text-muted hover:text-cyan font-mono text-sm"
              >
                Instructor page →
              </Link>
            </li>
            <li>
              <Link
                to="/pentester"
                onClick={() => setOpen(false)}
                className="block py-3 text-muted hover:text-cyan font-mono text-sm"
              >
                Pentester page →
              </Link>
            </li>
            <li className="border-t border-border mt-1 pt-1">
              <a href="/Ali_Ameer_Resume.pdf" download className="block py-3 text-muted hover:text-cyan">
                Download Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;