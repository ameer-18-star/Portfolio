import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { projects, projectCategories } from "../data/projects";
import "../components/portfolio/portfolio.css";

const tabs = ["All", ...projectCategories];

const AllProjectsPage = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
     document.title = "All Projects | Ali Ameer Junior Penetration Tester";
    window.scrollTo(0, 0);
  }, []);

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="sec sec-projects min-h-screen">
      <div className="content px-4 py-16 md:py-20">
        <Link to="/" className="nav-link font-mono text-xs text-cyan hover:underline inline-flex items-center gap-2 mb-8">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>

        <span className="section-eyebrow block">ALL PROJECTS</span>
        <h1 className="section-title mt-2 mb-3">Security Tools, Automation & Web Builds</h1>
        <p className="text-muted text-sm max-w-2xl mb-8">
          Every project with its architecture, stack and repository link. Security projects are
          built with AI assistance features designed, run and tested by the owner, who can
          explain how each part works. Live demo links appear only when a hosted URL exists.
          Off-target web utilities are in the Web Utilities tab.
        </p>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project categories">
          {tabs.map((t) => {
            const count = t === "All" ? projects.length : projects.filter((p) => p.category === t).length;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`font-mono text-xs px-3.5 py-2 rounded-md border transition-all duration-300 hover:-translate-y-1 ${
                  active === t ? "border-cyan text-cyan bg-cyan/10" : "border-border text-muted hover:text-cyan hover:border-cyan/50"
                }`}
              >
                {t} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {visible.map((p) => (
            <article key={p.id} className="glass-panel overflow-hidden hover-lift hover:glow-cyan flex flex-col">
              <div className="relative aspect-[16/8] overflow-hidden bg-panel">
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="w-full h-full object-cover project-img transition-transform duration-500" />
                <span className={`status-chip ${p.status === "LIVE TOOL" ? "status-chip--live" : p.status === "ACTIVE REPO" ? "status-chip--repo" : "status-chip--lab"}`}>
                  <span className="status-dot" /> {p.status}
                </span>
              </div>

              <div className="p-6 flex flex-col grow">
                <p className="font-mono text-[11px] text-emerald uppercase tracking-wide">{p.category}</p>
                <h2 className="font-display font-semibold text-xl mt-1 mb-2">{p.title}</h2>
                <p className="text-muted text-sm leading-relaxed mb-4">{p.writeup}</p>

                <h3 className="font-mono text-[11px] text-emerald uppercase tracking-wide mb-2">
                  Architecture design intent
                </h3>
                <ol className="arch-flow mb-5" aria-label={`${p.title} architecture`}>
                  {p.architecture.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="arch-node">{step}</span>
                      {i < p.architecture.length - 1 && <FontAwesomeIcon icon={faChevronRight} className="text-cyan text-xs" aria-hidden="true" />}
                    </li>
                  ))}
                </ol>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-sm mt-auto">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-cyan transition-colors">
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  )}
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-cyan transition-colors">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live demo
                    </a>
                  ) : (
                    <span className="text-muted text-xs self-center font-mono">Lab / local only</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjectsPage;
