import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClock, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/modal/Modal";

// Reading overlay: a quick overview without leaving the page, with the
// full write-up one click away on GitHub.
const BlogModal = ({ post, onClose }) => {
  if (!post) return null;
  return (
    <Modal open onClose={onClose} title={post.title} subtitle={post.category} maxWidth="max-w-2xl" labelledBy="blog-title">
      <img src={post.image} alt={`${post.title} thumbnail`} className="w-full rounded-lg border border-border mb-5" />
      <p className="font-mono text-xs text-muted flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faClock} /> ~{post.readTime} min read
      </p>
      <p className="text-ink text-sm leading-relaxed mb-4">{post.excerpt}</p>
      {post.body.map((para) => (
        <p key={para} className="text-muted text-sm leading-relaxed mb-4">{para}</p>
      ))}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((t) => (
          <span key={t} className="pill text-xs py-1 px-2.5">{t}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-xs">
          <FontAwesomeIcon icon={faGithub} /> Read the full write-up on GitHub
        </a>
        {post.liveUrl && (
          <a href={post.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-xs">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> View Live
          </a>
        )}
      </div>
    </Modal>
  );
};

export default BlogModal;
