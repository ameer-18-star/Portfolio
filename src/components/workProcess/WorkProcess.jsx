import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import WorkSteps from "./WorkSteps";

const framework = [
  {
    step: "01",
    title: "Reconnaissance & OSINT",
    desc: "Asset mapping, footprinting and passive intelligence gathering. Practiced in the Parry Security OSINT module and VortexTech Week 2 multi-subnet Nmap recon.",
  },
  {
    step: "02",
    title: "Enumeration & Exploitation",
    desc: "Service discovery, vulnerability identification and exploitation on lab targets. Tools used: Nmap, Burp Suite, SQLMap. Target: OWASP Juice Shop (deliberately vulnerable practice app).",
  },
  {
    step: "03",
    title: "Findings & Evidence",
    desc: "Documenting what was found, how, and what it means. Practiced across Parry task submissions and the VortexTech OWASP Top 5 research report and NIST SP 800-61 incident response plan.",
  },
  {
    step: "04",
    title: "Remediation & Teaching",
    desc: "Turning lab findings into clear write-ups and defensive recommendations the same skill used when teaching cybersecurity to secondary students at two institutions.",
  },
];

const skillCategories = [
  {
    title: "Proven linked to a project or internship",
    skills: [
      "Web testing basics Burp Suite, SQLMap, Nmap (VortexTech)",
      "Cryptography basics PBKDF2, Fernet (VaultKeeper)",
      "Packet analysis Scapy, Wireshark PCAP (NetSniff + labs)",
      "SIEM basics ELK stack lab",
      "VPN WireGuard lab (Parry, Oracle Cloud)",
      "Technical teaching CompTIA A+ course, 30M+ views",
    ],
  },
  {
    title: "Working knowledge no public artifact yet",
    skills: [
      "Kali Linux",
      "Active Directory (Parry module level, no box write-up yet)",
      "Linux CLI",
      "TCP/IP & subnetting",
      "MITRE ATT&CK mapping",
      "Cisco Packet Tracer",
      "Wireless defense ScopeSentry (prototype)",
    ],
  },
  {
    title: "Studying now",
    skills: [
      "CEH v13 exam date TBD",
      "Cisco Ethical Hacker 60%",
    ],
  },
  {
    title: "Programming / Scripting",
    skills: ["Python", "Bash", "C / C++", "JavaScript", "Git / GitHub", "PHP"],
  },
];

const RadarChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    chartRef.current = new Chart(canvasRef.current, {
      type: "radar",
      data: {
        // Self-assessed study/practice level, not a certification claim.
        labels: ["Web AppSec", "Networking", "Python / Tools", "Teaching", "IT Support"],
        datasets: [
          {
            label: "Self-assessed level (lab + internship based)",
            data: [45, 75, 65, 90, 88],
            backgroundColor: "rgba(34, 211, 238, 0.15)",
            borderColor: "#22d3ee",
            borderWidth: 2,
            pointBackgroundColor: "#22d3ee",
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          r: {
            angleLines: { color: "rgba(148,178,214,0.15)" },
            grid: { color: "rgba(148,178,214,0.15)" },
            pointLabels: { color: "#7c8ba1", font: { family: "JetBrains Mono", size: 10 } },
            ticks: { display: false, max: 100, min: 0 },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} className="max-w-80 max-h-80" />;
};

const WorkProcess = () => {
  return (
    <>
      <section className="content px-4 py-20 pb-10">
        <span className="section-eyebrow">08 // METHODOLOGY</span>
        <h2 className="section-title mt-2 mb-10">How I Work Through a Security Problem</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {framework.map((f) => (
            <div key={f.step} className="glass-panel p-6 hover:glow-cyan transition-all duration-300">
              <div className="font-display font-extrabold text-3xl text-cyan/50 mb-3">{f.step}</div>
              <h3 className="font-display font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted text-xs font-mono mt-6">
          Steps practiced in Parry Security's Red Teaming internship and the VortexTech web application assessment lab and internship environments only. Not a claim of client engagement history.
        </p>
      </section>

      <section id="skills" className="content px-4 py-10 pb-20">
        <span className="section-eyebrow">09 // SKILLS & EVIDENCE</span>
        <h2 className="section-title mt-2 mb-10">Skills → Evidence</h2>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="glass-panel p-6 center">
            <RadarChart />
          </div>
          <div className="space-y-8">
            {skillCategories.map((c) => (
              <WorkSteps category={c} key={c.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
