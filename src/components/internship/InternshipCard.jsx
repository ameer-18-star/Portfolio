import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faAward } from "@fortawesome/free-solid-svg-icons";

const InternshipCard = ({ internship, onViewCertificate, onViewTasks }) => {
  const red = internship.badgeColor === "red";
  return (
    <article className="glass-panel border-l-4 border-l-emerald p-6 sm:p-8 hover-lift hover:glow-cyan flex flex-col">
      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
        <div>
          <h3 className="font-display font-semibold text-xl">{internship.title}</h3>
          <p className="font-mono text-sm text-cyan mt-1">{internship.track}</p>
        </div>
        <span
          className={`font-mono text-[11px] px-2.5 py-1 rounded uppercase tracking-wide border ${
            red ? "bg-red-500/10 text-red-400 border-red-500/30" : "bg-cyan/10 text-cyan border-cyan/30"
          }`}
        >
          {internship.badge}
        </span>
      </div>

      <p className="text-muted text-sm mb-5">{internship.summary}</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {internship.metrics.map((m) => (
          <div key={m.label} className="rounded-md border border-border bg-panel px-4 py-3">
            <div className="font-display font-bold text-lg text-cyan flex items-center gap-2">
              <FontAwesomeIcon icon={m.icon} className="text-sm" /> {m.value}
            </div>
            <div className="font-mono text-[11px] text-muted mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <button onClick={() => onViewCertificate(internship.certificate)} className="btn-primary px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
          <FontAwesomeIcon icon={faAward} /> {internship.certificate.buttonLabel}
        </button>
        <button onClick={() => onViewTasks(internship)} className="btn-outline-glow px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
          <FontAwesomeIcon icon={faFileLines} /> Inspect Task Breakdown
        </button>
      </div>
    </article>
  );
};

export default InternshipCard;
