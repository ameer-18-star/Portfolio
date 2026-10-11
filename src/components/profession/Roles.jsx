const Roles = ({ role }) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      <span className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-obsidian border-2 border-cyan" />
      <span className="absolute left-[6.5px] top-4 bottom-0 w-px bg-border" />
      <div className="glass-panel p-5 sm:p-6 hover:border-cyan/40 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg">{role.title}</h3>
          <span className="font-mono text-xs text-emerald bg-emerald/10 px-2 py-1 rounded">{role.date}</span>
        </div>
        <p className="font-mono text-sm text-cyan mb-3">{role.org}</p>
        <p className="text-muted text-sm leading-relaxed">{role.desc}</p>
      </div>
    </div>
  );
};

export default Roles;
