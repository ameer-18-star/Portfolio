import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ post, onRead }) => {
  return (
    <article className="glass-panel overflow-hidden hover-lift hover:glow-cyan flex flex-col">
      <button onClick={() => onRead(post)} className="text-left flex flex-col grow" aria-label={`Read overview: ${post.title}`}>
        <div className="aspect-[16/9] overflow-hidden bg-panel">
          <img src={post.image} alt={`${post.title} thumbnail`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 blog-img" />
        </div>
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center justify-between gap-2 font-mono text-[11px] mb-2">
            <span className="text-emerald uppercase tracking-wide">{post.category}</span>
            <span className="text-muted flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} /> ~{post.readTime} min read
            </span>
          </div>
          <h3 className="font-display font-semibold text-lg mb-2 leading-snug">{post.title}</h3>
          <p className="text-muted text-sm leading-relaxed mb-4 grow">{post.excerpt}</p>
          <span className="font-mono text-xs text-cyan">Read overview →</span>
        </div>
      </button>
    </article>
  );
};

export default BlogCard;
