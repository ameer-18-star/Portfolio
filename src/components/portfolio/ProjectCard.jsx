import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExpand, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const statusClass = {
  "LIVE TOOL": "status-chip status-chip--live",
  "ACTIVE REPO": "status-chip status-chip--repo",
  "LAB DEMO": "status-chip status-chip--lab",
};

const ProjectCard = ({ project, onDetails }) => {
  return (
    <article className="glass-panel overflow-hidden hover-lift hover:glow-cyan flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-panel">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 project-img"
        />
        <span className={statusClass[project.status]}>
          <span className="status-dot" /> {project.status}
        </span>
      </div>

      <div className="p-6 flex flex-col grow">
        <p className="font-mono text-[11px] text-emerald uppercase tracking-wide">{project.category}</p>
        <h3 className="font-display font-semibold text-lg mt-1 mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 grow">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
          ))}
          {project.stack.length > 4 && <span className="pill text-xs py-1 px-2.5">+{project.stack.length - 4}</span>}
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-cyan transition-colors">
              <FontAwesomeIcon icon={faGithub} /> Repo
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-cyan transition-colors">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live demo
            </a>
          )}
          <button onClick={() => onDetails(project)} className="flex items-center gap-2 text-ink hover:text-cyan transition-colors">
            <FontAwesomeIcon icon={faExpand} /> Read the case study →
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
