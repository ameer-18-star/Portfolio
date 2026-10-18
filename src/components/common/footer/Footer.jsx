import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../socialMedia/SocialMedia";

const links = [
  { name: "About", url: "about" },
  { name: "Journey", url: "journey" },
  { name: "Internships", url: "internships" },
  { name: "Projects", url: "projects" },
  { name: "Skills", url: "skills" },
  { name: "Tooling", url: "tooling" },
  { name: "Learning", url: "learning" },
  { name: "Console", url: "terminal" },
  { name: "Credentials", url: "credentials" },
  { name: "Insights", url: "insights" },
  { name: "Contact", url: "contact" },
];

const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-panel">
      <div className="content px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="font-display font-extrabold text-lg">
          ALI AMEER<span className="text-cyan">.</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-5 font-mono text-xs text-muted">
          {links.map((l) =>
            isHome ? (
              <li key={l.name}>
                <ScrollLink to={l.url} smooth duration={700} offset={-90} className="nav-link hover:text-cyan cursor-pointer">
                  {l.name.toUpperCase()}
                </ScrollLink>
              </li>
            ) : (
              <li key={l.name}>
                <Link to="/" state={{ scrollTo: l.url }} className="nav-link hover:text-cyan cursor-pointer">
                  {l.name.toUpperCase()}
                </Link>
              </li>
            )
          )}
          <li aria-hidden="true" className="w-px self-stretch bg-border" />
          <li>
            <Link to="/instructor" className="nav-link hover:text-cyan cursor-pointer">
              INSTRUCTOR
            </Link>
          </li>
          <li>
            <Link to="/pentester" className="nav-link hover:text-cyan cursor-pointer">
              PENTESTER
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <SocialMedia />
        </div>
      </div>
      <div className="content px-4 pb-6 flex flex-wrap justify-center gap-3 border-t border-border pt-6">
        <a
          href="/Ali_Ameer_Instructor_Resume.pdf"
          download
          className="btn-outline-glow px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} /> Instructor Resume
        </a>
        <a
          href="/Ali_Ameer_Pentester_Resume.pdf"
          download
          className="btn-outline-glow px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} /> Pentester Resume
        </a>
      </div>
      <div className="content px-4 pb-8 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] text-muted border-t border-border pt-5">
        <span>&copy; {year} Ali Ameer. All rights reserved.</span>
        <span>Securing infrastructure and training minds.</span>
        <img
          src="https://hits.sh/ameer-18-star.github.io/Portfolio.svg?style=flat-square&label=Visitors&color=22d3ee&labelColor=0a0f1d"
          alt="Visitor count"
          loading="lazy"
          className="h-5"
        />
      </div>
    </footer>
  );
};

export default Footer;