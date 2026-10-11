import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/modal/Modal";

const Bar = ({ earned, total }) => {
  const pct = total ? Math.round((earned / total) * 100) : 0;
  const filled = Math.round(pct / 10);
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex-1 h-2 rounded-full bg-panel overflow-hidden"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full bg-gradient-to-r from-cyan to-emerald" style={{ width: `${pct}%` }} />
      </div>
      <span className="font-mono text-[11px] text-muted w-40 text-right hidden sm:block">
        [{"█".repeat(filled)}{"░".repeat(10 - filled)}] {pct}%
      </span>
      <span className="font-mono text-[11px] text-muted w-16 text-right">
        {earned}/{total}
      </span>
    </div>
  );
};

const Scored = ({ internship }) => {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const categories = useMemo(
    () =>
      internship.categories
        .map((c) => ({ ...c, tasks: c.tasks.filter((t) => !q || t.name.toLowerCase().includes(q)) }))
        .filter((c) => c.tasks.length),
    [internship, q]
  );

  return (
    <>
      <label className="flex items-center gap-2 mb-6 rounded-md border border-border bg-panel px-3 py-2 font-mono text-xs">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-cyan" />
        <span className="sr-only">Search tasks</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="grep -i task name..."
          className="bg-transparent outline-none flex-1 text-ink placeholder:text-muted"
        />
      </label>
      {categories.length === 0 && <p className="font-mono text-xs text-muted">No tasks match "{query}".</p>}
      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h4 className="font-mono text-xs text-emerald uppercase tracking-wide mb-3">{cat.title}</h4>
            <div className="space-y-3">
              {cat.tasks.map((t) => (
                <div key={t.name}>
                  <div className="text-sm text-ink mb-1">{t.name}</div>
                  <Bar earned={t.earned} total={t.total} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Weekly = ({ internship }) => (
  <div className="space-y-6">
    {internship.weeks.map((w) => (
      <div key={w.week} className="rounded-lg border border-border bg-panel p-5">
        <div className="font-mono text-xs text-emerald uppercase tracking-wide mb-1">{w.week}</div>
        <h4 className="font-display font-semibold text-base mb-2">{w.title}</h4>
        <p className="text-muted text-sm leading-relaxed mb-3">{w.tasks}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {w.tools.map((t) => (
            <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {w.artifacts.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-cyan hover:border-cyan transition-all duration-300 flex items-center gap-1.5"
            >
              {a.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
            </a>
          ))}
        </div>
      </div>
    ))}
    <p className="font-mono text-[11px] text-muted">Artifact links open the repository; browse the week folders there for each file.</p>
  </div>
);

const TaskBreakdownModal = ({ internship, onClose }) => {
  if (!internship) return null;
  return (
    <Modal open onClose={onClose} title={`${internship.title}: Task Breakdown`} subtitle={internship.track} maxWidth="max-w-3xl" labelledBy="task-title">
      {internship.type === "scored" ? <Scored internship={internship} /> : <Weekly internship={internship} />}
      {internship.repoLink && (
        <a href={internship.repoLink} target="_blank" rel="noopener noreferrer" className="btn-outline-glow inline-block mt-6 px-4 py-2 rounded-md font-mono text-xs">
          View deliverables on GitHub →
        </a>
      )}
    </Modal>
  );
};

export default TaskBreakdownModal;
