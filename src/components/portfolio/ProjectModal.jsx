import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/modal/Modal";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <Modal open onClose={onClose} title={project.title} subtitle={`${project.category} | ${project.status}`} maxWidth="max-w-2xl" labelledBy="project-title">
      <img src={project.image} alt={`${project.title} preview`} className="w-full rounded-lg border border-border mb-5" />

      <h4 className="font-mono text-xs text-emerald uppercase tracking-wide mb-2">Deep dive</h4>
      <p className="text-muted text-sm leading-relaxed mb-4">{project.writeup}</p>
      <p className="font-mono text-xs text-muted border border-border rounded px-3 py-2 mb-6">
        All projects on this site are built with AI assistance. Features are designed, run and
        tested by the owner, who can explain how each part works.
      </p>

      <h4 className="font-mono text-xs text-emerald uppercase tracking-wide mb-3">Architecture</h4>
      <ol className="arch-flow mb-6" aria-label="Architecture flow">
        {project.architecture.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="arch-node">{step}</span>
            {i < project.architecture.length - 1 && <FontAwesomeIcon icon={faChevronRight} className="text-cyan text-xs" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <h4 className="font-mono text-xs text-emerald uppercase tracking-wide mb-3">Tech stack</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((t) => (
          <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} /> View on GitHub
          </a>
        )}
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline-glow px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live demo
          </a>
        ) : (
          <span className="px-4 py-2 rounded-md font-mono text-xs border border-border text-muted">No hosted demo yet</span>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
