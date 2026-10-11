import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { blogPosts, blogCategories } from "../data/blogPosts";
import BlogCard from "../components/blog/BlogCard";
import BlogModal from "../components/blog/BlogModal";
import "../components/blog/blog.css";

const filters = ["All", ...blogCategories];

const AllBlogsPage = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = "Research & Write-Ups | Ali Ameer";
    window.scrollTo(0, 0);
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      const haystack = `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
  }, [category, query]);

  return (
    <main className="sec sec-blog min-h-screen">
      <div className="content px-4 py-16 md:py-20">
        <Link to="/" className="nav-link font-mono text-xs text-cyan hover:underline inline-flex items-center gap-2 mb-8">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to portfolio
        </Link>

        <span className="section-eyebrow block">ALL WRITE-UPS</span>
        <h1 className="section-title mt-2 mb-3">Research, Notes & Roadmaps</h1>
        <p className="text-muted text-sm max-w-2xl mb-8">
          Security write-ups, certification notes and roadmaps, each backed by a public GitHub repository.
          Reading times are estimates.
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <label className="flex items-center gap-2 rounded-md border border-border bg-panel-2 px-3 py-2.5 font-mono text-xs md:w-80 focus-within:border-cyan transition-colors">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-cyan" />
            <span className="sr-only">Search write-ups</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, tags, topics"
              className="bg-transparent outline-none flex-1 text-ink placeholder:text-muted"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={category === f}
                onClick={() => setCategory(f)}
                className={`font-mono text-xs px-3.5 py-2 rounded-md border transition-all duration-300 hover:-translate-y-1 ${
                  category === f ? "border-cyan text-cyan bg-cyan/10" : "border-border text-muted hover:text-cyan hover:border-cyan/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="font-mono text-xs text-muted mb-5" aria-live="polite">
          {visible.length} result{visible.length === 1 ? "" : "s"}
        </p>

        {visible.length === 0 ? (
          <div className="glass-panel p-10 text-center font-mono text-sm text-muted">
            No write-ups match your search. Try a different keyword or category.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((p) => (
              <BlogCard key={p.id} post={p} onRead={setActive} />
            ))}
          </div>
        )}
      </div>

      <BlogModal post={active} onClose={() => setActive(null)} />
    </main>
  );
};

export default AllBlogsPage;
