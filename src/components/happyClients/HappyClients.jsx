import Reveal from "../common/reveal/Reveal";

const metrics = [
  { value: 720, suffix: " pts", label: "Parry Security", sub: "30 of 33 tasks · Rank 14 · Red Teaming track" },
  { value: 130, suffix: "+", label: "Passing Tests", sub: "VaultKeeper automated test suite · pytest" },
  { value: 30, suffix: "M+", label: "Organic Views", sub: "YouTube & Instagram · self-reported · zero paid ads" },
  { value: 3.5, suffix: "/4.0", decimals: 1, label: "CGPA", sub: "BS Information Technology · GC University Faisalabad" },
];

const MetricCard = ({ value, suffix, decimals = 0, label, sub, delay }) => (
  <Reveal className="h-full" style={{ animationDelay: `${delay}ms` }}>
    <div className="glass-panel p-6 sm:p-8 text-center hover:glow-cyan transition-all duration-300 h-full flex flex-col justify-center">
      <div className="font-display font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-cyan to-emerald bg-clip-text text-transparent">
        {decimals > 0 ? value.toFixed(decimals) : value}
        {suffix}
      </div>
      <div className="font-mono text-xs text-muted uppercase tracking-wide mt-3 mb-1">{label}</div>
      <div className="text-xs text-muted/80">{sub}</div>
    </div>
  </Reveal>
);

const HappyClients = () => {
  return (
    <section id="impact" className="content px-4 py-16">
      <span className="section-eyebrow">02 // PROOF OF WORK</span>
      <h2 className="section-title mt-2 mb-3">By the Numbers</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Internship results and project metrics from verified sources. Organic views are
        self-reported; all other figures come from portal data or the test suite.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} {...m} delay={i * 120} />
        ))}
      </div>
    </section>
  );
};

export default HappyClients;