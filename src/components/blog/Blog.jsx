import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import "./blog.css";

const Blog = () => {
  const [active, setActive] = useState(null);
  const shown = blogPosts.slice(0, 4);

  return (
    <section id="insights" className="content px-4 py-20">
      <span className="section-eyebrow">14 // WRITE-UPS & REPOS</span>
      <h2 className="section-title mt-2 mb-3">Blog & Insights</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Roadmaps, study notes and security fundamentals, backed by real GitHub repositories. These are
        learning resources, not published exploit disclosures.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {shown.map((p) => (
          <BlogCard key={p.id} post={p} onRead={setActive} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-mono text-sm">
          Explore All Research & Write-Ups →
        </Link>
      </div>

      <BlogModal post={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Blog;
