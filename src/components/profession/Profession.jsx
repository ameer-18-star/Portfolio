import Roles from "./Roles";

const timeline = [
  {
    title: "CS & ICT Instructor | Matric & Intermediate",
    date: "2026 – Present",
    org: "Officer's Science Academy | Pakistan",
    desc: "Teaching Computer Science and ICT to Matric and Intermediate students: hands-on Python, AI, Machine Learning, Data Science, IT Support and Cybersecurity.",
  },
  {
    title: "CS & ICT Instructor | Matric & Intermediate",
    date: "2026 – Present",
    org: "Grammar Model School Academy | Pakistan",
    desc: "Teaching Computer Science and ICT to Matric and Intermediate students: hands-on Python, AI, Machine Learning, Data Science, IT Support and Cybersecurity.",
  },
  {
    title: "IT & CS Instructor",
    date: "2025 – Present",
    org: "Sir Syed Scholars Inn | Pakistan",
    desc: "Teaching Computer Science and IT foundations to higher-secondary students: digital literacy, programming, networking, OS, IT support and cybersecurity.",
  },
  {
    title: "Founder / Creator",
    date: "2024 – Present",
    org: "VMSOIT | Remote, Pakistan",
    desc: "Authored a CompTIA A+ (220-1201) course syllabus on YouTube. Grew the channel and blog (vmsoit.blogspot.com) to 30M+ organic views and 35K+ site visits (self-reported, zero paid ads).",
  },
  {
    title: "Computer Lab Administrator & Tech Support",
    date: "2022 – 2023",
    org: " VMSOIT| Pakistan",
    desc: "Maintained network routing and hardware security for a 50-workstation academic lab, resolving complex diagnostics.",
  },
  {
    title: "BS Information Technology",
    date: "2021 – 2025",
    org: "GC University Faisalabad (GCUF)",
    desc: "CGPA 3.5/4.0. Data Communications, Network Security, Cybersecurity, Database Architecture.",
  },
];

const experience = [
  {
    title: "Founder / Creator",
    org: "VMSOIT (own project) // Apr 2024 – Present",
    points: [
      "Authored CompTIA A+ (220-1201) course syllabus covering hardware, OS, networking and security.",
      "Grew the YouTube channel and blog to 30M+ organic views and 35K+ site visits (self-reported, zero paid ads).",
      "Produce cybersecurity education content the same material tested in personal labs to help young learners understand how attacks and defences work.",
    ],
  },
  {
    title: "Computer Lab Administrator",
    org: " VMSOIT// Feb 2022 – Apr 2023",
    points: [
      "Managed uptime and configuration for a 50-workstation environment.",
      "Diagnosed software faults, network collisions, and connectivity drops.",
      "Instructed non-technical lab members on safety and operating guidelines.",
    ],
  },
  {
    title: "IT Instructor",
    org: "Sir Syed Scholars Inn // Jan 2025 – Present",
    points: [
      "Taught technical concepts via storytelling and the CLEAR technique.",
      "Delivered hands-on labs across Networking, Cybersecurity and OS (Windows & Linux).",
    ],
  },
  {
    title: "CS & ICT Instructor",
    org: "Officer's Science Academy // 2026 – Present",
    points: [
      "Guided students on industry-relevant practice over textbook theory.",
      "Hands-on: Python, AI/ML, Data Science, IT Support, Cybersecurity.",
    ],
  },
  {
    title: "CS & ICT Instructor",
    org: "Grammar Model School Academy // 2026 – Present",
    points: [
      "Teaching Computer Science and ICT at Matric and Intermediate levels.",
      "Hands-on modules: Python, AI, Machine Learning, Data Science, IT Support and Cybersecurity.",
      "Bridges classroom theory to practical skills relevant to today's tech landscape.",
    ],
  },
];

const focusAreas = [
  {
    title: "Red Team Fundamentals",
    desc: "Completed Parry Security's Red Teaming track: Active Directory attack paths, Linux privilege escalation, wireless, mobile, OSINT and pentest reporting. 30 of 33 tasks reviewed, 720 points, Rank 14.",
  },
  {
    title: "Web Application Security",
    desc: "Completed a 4-week web application assessment at VortexTech against OWASP Juice Shop (a deliberately vulnerable practice app) using Burp Suite, SQLMap and Nmap. Working knowledge of OWASP Top 10.",
  },
  {
    title: "Security Education & Tooling",
    desc: "Teaching cybersecurity to secondary and higher-secondary students at two institutions. Building Python security tools VaultKeeper, NetSniff, ScopeSentry to deepen hands-on understanding of the concepts I teach.",
  },
];

const Profession = () => {
  return (
    <>
      <section className="content px-4 py-20 pb-8">
        <span className="section-eyebrow">03 // FOCUS AREAS</span>
        <h2 className="section-title mt-2 mb-10">Security Work Labs, Internships & Teaching</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((f) => (
            <div key={f.title} className="glass-panel p-6 hover:glow-cyan transition-all duration-300">
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="content px-4 py-12">
        <span className="section-eyebrow">04 // BACKGROUND</span>
        <h2 className="section-title mt-2 mb-10">Career Timeline</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((t) => (
            <Roles role={t} key={t.title} />
          ))}
        </div>
      </section>

      <section className="content px-4 py-10 pb-20">
        <span className="section-eyebrow">05 // EXPERIENCE</span>
        <h2 className="section-title mt-2 mb-10">Professional Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((e) => (
            <div key={e.title} className="glass-panel border-l-4 border-l-cyan p-6 hover:glow-cyan transition-all duration-300">
              <h3 className="font-display font-semibold text-xl mb-1">{e.title}</h3>
              <p className="font-mono text-sm text-cyan mb-4">{e.org}</p>
              <ul className="space-y-2">
                {e.points.map((p, i) => (
                  <li key={i} className="text-muted text-sm flex gap-2">
                    <span className="text-emerald">&gt;</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profession;
