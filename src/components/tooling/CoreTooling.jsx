import { toolCategories } from "../../data/tools";
import ToolCard from "./ToolCard";
import "./tooling.css";

const CoreTooling = () => {
  return (
    <section id="tooling" className="content px-4 py-20">
      <span className="section-eyebrow">11 // CORE TOOLING</span>
      <h2 className="section-title mt-2 mb-3">My Core Skills</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Tools are grouped by evidence tier. Proven tools link to a project or internship.
        Working-knowledge tools have been used in labs or coursework but have no public artifact yet.
        Tools with no linked project are not listed here.
      </p>
      <div className="space-y-6">
        {toolCategories.map((cat) => (
          <div key={cat.title} className="glass-panel p-6">
            <h3 className="font-mono text-sm text-emerald uppercase tracking-wide mb-5 pb-3 border-b border-border">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {cat.tools.map((t) => (
                <ToolCard tool={t} key={t.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTooling;
