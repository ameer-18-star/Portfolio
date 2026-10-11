import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./portfolio.css";

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="content px-4 py-20">
      <span className="section-eyebrow">07 // PROJECTS</span>
      <h2 className="section-title mt-2 mb-3">Security Tools & Projects</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Five Python security projects built to understand how the underlying techniques work not
        as claims of client experience. Each card links to the GitHub repo and notes where AI
        assistance was used.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onDetails={setActive} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-mono text-sm">
          View All Projects & Architecture →
        </Link>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Portfolio;
