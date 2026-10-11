 const tracks = [
  {
    title: "EC-Council CEH v13",
    org: "Certified Ethical Hacker",
    pct: 45,
    status: "Studying Now",
    note: "Self-paced · Exam date TBD · Primary certification target",
  },
  {
    title: "Cisco: Ethical Hacker Path",
    org: "Cisco Networking Academy",
    pct: 60,
    status: "Studying Now",
    note: "Skill-based pathway · Multi-course track · In progress",
  },
  {
    title: "CompTIA A+ (220-1201)",
    org: "CompTIA Self-Study",
    pct: 90,
    status: "Teaching",
    note: "Full syllabus authored and taught on VMSOIT YouTube channel · No exam sat yet",
  },
  {
    title: "Junior Cybersecurity Analyst",
    org: "Cisco Networking Academy",
    pct: 35,
    status: "In Progress",
    note: "Career pathway · SOC analyst focus",
  },
  {
    title: "Cisco: Network Technician Path",
    org: "Cisco Networking Academy",
    pct: 25,
    status: "In Progress",
    note: "Routing & switching fundamentals",
  },
  {
    title: "Cisco: Cyber Defender Pathway",
    org: "Cisco Networking Academy",
    pct: 20,
    status: "In Progress",
    note: "Defensive security & incident response",
  },
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="content px-4 py-20">
      <span className="section-eyebrow">10 // TRAINING & CERTIFICATIONS</span>
      <h2 className="section-title mt-2 mb-3">Currently Studying</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Two active study tracks CEH v13 and Cisco Ethical Hacker plus ongoing Cisco pathways.
        CompTIA A+ content is fully authored and taught; no exam has been sat yet.
        Progress percentages are self-assessed.
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tracks.map((t) => (
          <div key={t.title} className="glass-panel p-5 hover:glow-cyan transition-all duration-300">
            <div className="flex justify-between items-start gap-2 mb-3">
              <div>
                <p className="font-display font-semibold text-base">{t.title}</p>
                <p className="font-mono text-[11px] text-emerald mt-0.5">{t.org}</p>
              </div>
              <span className={`font-mono text-[10px] px-2 py-1 rounded-full border whitespace-nowrap ${
                t.status === "Studying Now"
                  ? "border-cyan/60 text-cyan bg-cyan/10"
                  : t.status === "Teaching"
                  ? "border-emerald/60 text-emerald bg-emerald/10"
                  : "border-border text-muted"
              }`}>
                {t.status.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between font-mono text-xs text-muted mb-1.5">
              <span>Completion</span>
              <span className="text-cyan font-semibold">{t.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-panel overflow-hidden mb-3">
              <div className="h-full bg-gradient-to-r from-cyan to-emerald" style={{ width: `${t.pct}%` }} />
            </div>
            <p className="text-muted text-xs">{t.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
