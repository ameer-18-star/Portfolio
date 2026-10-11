const WorkSteps = ({ category }) => {
  return (
    <div>
      <div className="font-mono text-xs text-emerald uppercase tracking-wide mb-3">{category.title}</div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
    </div>
  );
};

export default WorkSteps;
