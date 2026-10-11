import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ctfPlatforms, roomCategories } from "../../data/ctf";

// variant="home" -> compact teaser: two stat cards, no category breakdown
// variant="full" -> full write-up: stat cards + category breakdown (Pentester page)
// index -> the section-eyebrow number, passed in so it always matches the
//          surrounding page's own numbering instead of being guessed here.
const CtfRanges = ({ variant = "home", index }) => {
  const isFull = variant === "full";

  return (
    <section id="ctf-ranges" className="content px-4 py-20">
      <span className="section-eyebrow">{index} // HANDS-ON RANGES</span>
      <h2 className="section-title mt-2 mb-3">
        {isFull ? "CTFs & Practice Ranges" : "Active on TryHackMe & Hack The Box"}
      </h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        {isFull
          ? "Ongoing hands-on practice outside of internships and coursework. Stats link directly to each public profile, and HTB Academy progress is shown as-is rather than rounded up."
          : "Day-to-day lab practice between internships and coursework. Live stats, pulled from each public profile."}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {ctfPlatforms.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel p-6 border ${p.border} hover:glow-cyan transition-all duration-300 flex flex-col`}
          >
            <div className={`w-10 h-10 center rounded-md bg-cyan/10 ${p.color} text-lg mb-4`}>
              <FontAwesomeIcon icon={p.icon} />
            </div>
            <p className={`font-mono text-[11px] uppercase tracking-wide ${p.color} mb-1`}>
              {p.label}
            </p>
            <p className="font-display font-extrabold text-3xl mb-3">{p.stat}</p>
            <ul className="space-y-1 mb-4 grow">
              {p.subStats.map((s) => (
                <li key={s} className="text-muted text-xs flex items-start gap-2">
                  <span className="text-emerald mt-0.5">›</span> {s}
                </li>
              ))}
            </ul>
            <span className={`font-mono text-[10px] px-2 py-1 rounded-full border ${p.border} ${p.color} self-start inline-flex items-center gap-1.5`}>
              {p.handle} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
            </span>
          </a>
        ))}
      </div>

      {isFull && (
        <div className="glass-panel p-6 mt-6">
          <h3 className="font-mono text-xs uppercase tracking-wide mb-5 pb-3 border-b border-border text-crimson">
            TryHackMe rooms, grouped by topic
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {roomCategories.map((cat) => (
              <div key={cat.title} className="bg-panel rounded-lg px-4 py-3 border border-border">
                <p className="font-display font-semibold text-sm mb-1">{cat.title}</p>
                <p className="font-mono text-[11px] text-muted leading-relaxed">
                  {cat.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CtfRanges;