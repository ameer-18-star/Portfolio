import { useRef, useState } from "react";

const startupTime = Date.now();

const commands = {
  help: `Available commands:
  whoami          Identity & status
  about           Biography & background
  education       Academic record
  experience      Professional work history
  skills          Technical capabilities
  tools           Core tooling, grouped by category
  projects        Active projects & repos
  live            Projects with a live hosted demo
  credentials     Verified certifications summary
  research        Security study log topics
  ctf             TryHackMe & Hack The Box stats
  blog            Write-ups & research posts
  social          Social & professional links
  contact         How to reach me
  resume          Resume download info
  stats           Cumulative impact metrics
  languages       Spoken language proficiency
  banner          Reprint the CLI banner
  date            Print current date & time
  uptime          Terminal session uptime
  echo [text]     Print text back to the terminal
  nmap            Simulated scan (demo only)
  cat flag.txt    You already know
  sudo            Try your luck
  clear           Clear the terminal screen`,

  whoami: `ali_ameer_sec
  Role    : Junior Penetration Tester (in training) | IT & CS Instructor
  Status  : Open to junior pentest or security analyst roles remote
  Location: Pakistan · UTC+5`,

  about: `BS Information Technology graduate, GC University Faisalabad (CGPA 3.5/4.0).
  3+ years in IT training and support, moving into offensive security.
  Parry Security Red Teaming internship: 30/33 tasks, 720 pts, Rank 14.
  VortexTech: 4/4 weeks, 100% completion.
  Five Python security projects on GitHub.
  I haven't done paid client work. Everything here comes from labs,
  internships and my own projects, and I label each one.`,

  education: `[2021-2025] BS Information Technology
              GC University Faisalabad | CGPA 3.5/4.0
  Relevant coursework: Network Security, Database Systems, Web Engineering,
  Software Engineering, Operating Systems, Data Structures`,

  experience: `[2026-Present] CS & ICT Instructor | Officer's Science Academy
  [2026-Present] CS & ICT Instructor | Grammar Model School Academy
  [2025-Present] IT & CS Instructor | Sir Syed Scholars Inn
  [2024-Present] Founder / Creator | VMSOIT (own education blog & channel)
  [2022-2023]    Computer Lab Administrator |  VMSOIT(50-workstation lab)`,

  skills: `[Proven linked to a project or internship]
    Burp Suite, SQLMap, Nmap          → VortexTech web app assessment
    Wireshark / packet analysis       → NetSniff + Parry PCAP labs
    Python                            → VaultKeeper, NetSniff, ScopeSentry
    Cryptography basics (PBKDF2)      → VaultKeeper
    ELK SIEM basics                   → labs repo
    WireGuard VPN                     → Parry / Oracle Cloud lab
    Technical teaching                → CompTIA A+ course, 30M+ views

  [Working knowledge labs, no public artifact yet]
    Kali Linux, Active Directory (module), Linux CLI,
    TCP/IP, subnetting, MITRE ATT&CK, Cisco Packet Tracer

  [Studying now]
    CEH v13 (exam date TBD) · Cisco Ethical Hacker (60%)

  [Tools Working On]
    Metasploit · Hashcat · Docker · Splunk · Bash · C/C++ · PHP`,

  tools: `[Security Tools]
    Nmap, Burp Suite, SQLMap, Wireshark, Metasploit, Kali Linux,
    Hashcat, Docker, Splunk, Cisco Packet Tracer

  [Programming Languages]
    Python, C/C++, JavaScript, PHP, HTML5, CSS3

  [Web Technologies]
    React, Node.js, MySQL, Electron, WordPress, Git/GitHub

  Full grid with logos: scroll to the Core Tooling section.`,

  projects: `Security projects (GitHub: ameer-18-star)
  1. VaultKeeper   | CLI password manager · PBKDF2 + Fernet · 130 passing tests
  2. NetSniff      | Educational packet sniffer · Scapy · BPF filters
  3. ScopeSentry   | Defensive WiFi monitor · PyQt6 · early prototype
  4. Fraud pipeline| ML anomaly detection · 284K transactions · metrics pending
  All built with AI assistance features designed, tested and explainable.
  Type "social" for the GitHub link.`,

  live: `Projects with a live hosted demo:
  1. JSON to Instagram Carousel Post Generator → ameer-18-star.github.io/Instagram-Carousel-Gens
  2. HTML Slides Presentation Template         → ameer-18-star.github.io/HTML-Slides-Template
  3. Custom Security Web Components            → ameer-18-star.github.io/Web-Pages
  Full project grid: scroll to the Projects section, or visit /projects.`,

  credentials: `Cisco Networking Academy | badges with public Credly links (see Credentials section)
  TCM Security Academy    | 4 security-relevant completions + 2 supplementary
  EC-Council CEH v13      | in progress exam date TBD
  Parry Security          | Red Teaming Track completion certificate
  VortexTech              | 4-week internship completion certificate
  Full detail: scroll to the Credentials section.`,

  research: `Completed internship modules (Parry Security Red Teaming track):
  - Active Directory & Windows Attacks
  - Linux Privilege Escalation
  - Web Security & Web Application Security
  - Wireless, Mobile & OSINT
  - Pentest Methodology & Reporting
  - WireGuard VPN lab (Oracle Cloud + VirtualBox)
  - SOC & Threat Hunting, DFIR, GRC & Risk Management
  Studying: CEH v13 · OWASP Top 10 (2025) · NIST SP 800-61`,

  ctf: `TryHackMe   : Top 15% rank · 38 rooms completed · 6 badges · @ameer18
  Hack The Box: Level 3 · 70 points · HTB Academy (Beginner track)
  Full breakdown: scroll to the Hands-On Ranges section, or see /pentester.`,

  blog: `[Security Research]        Red, Blue & Purple Team Reading Roadmap
  [Certifications & Notes]   Certification Deep Dives & Exam Notes
  [Roadmaps]                 The 90-Day InfoSec & Ethical Hacking Mastery Roadmap
  [Certifications & Notes]   185+ Free Cybersecurity Resources & Badges Vault
  [Certifications & Notes]   CS Study Guides & Exam Question Banks (Grades 9-12)
  [Security Research]        Security 101 Series: Practical Fundamentals
  Full write-ups: scroll to the Insights section, or visit /blog.`,

  social: `GitHub    : github.com/ameer-18-star
  LinkedIn  : (link in the Contact section)`,

  contact: `Use the message form in the Contact section of this page,
  or reach out via GitHub: github.com/ameer-18-star
  Email and LinkedIn links are in the Contact section.`,

  resume: `Resume:
  Download the PDF from the hero section ("Download CV") or the
  Connect section's Resume card.
  File: Ali_Ameer_Resume.pdf`,

  stats: `Parry Security internship : 30/33 tasks · 720 pts · Rank 14 of 74 scoring
  VortexTech internship     : 4/4 weeks · 100% completion
  VaultKeeper tests         : 130 passing (pytest)
  Organic views (self-rptd) : 30M+ (YouTube & Instagram)
  Organic visits (self-rptd): 35K+ (vmsoit.blogspot.com)
  Workstations managed      : 50 (VMSOIT lab, 2022-2023)
  Academic grade            : 3.5 / 4.0 CGPA`,

  languages: `Urdu    ████████████ Native      (100%)
  Punjabi ████████████ Native      (100%)
  English █████████░░░ Professional (85%)`,

  banner: `Ali Ameer | Junior Pentester in Training | CLI v1.0.0
  Type "help" to see available commands.`,

  date: () => {
    const now = new Date();
    return `System Date: ${now.toDateString()}  ${now.toLocaleTimeString()}
  Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
  },

  uptime: () => {
    const diff = Math.floor((Date.now() - startupTime) / 1000);
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;
    return `Terminal Uptime: ${mins}m ${secs}s // Active Session`;
  },

  nmap: `Starting simulated scan (this is a portfolio demo, not a live scanner)...
  PORT     STATE  SERVICE
  22/tcp   open   ssh
  80/tcp   open   http
  443/tcp  open   https
  Nmap done: 1 host up (simulated).`,

  "cat flag.txt": `guest@ali-ameer-sec:~$ cat flag.txt
  Permission denied. Nice try. Try "help" instead.`,

  sudo: `[sudo] password for guest: ************
  Permission denied: guest is not in the sudoers file.
  This incident has been reported. Just kidding, nice try though.`,
};

const WorkTogether = () => {
  const [lines, setLines] = useState([
    "Ali Ameer Secure Interface CLI v1.0.0. Type \"help\" to begin.",
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bodyRef = useRef(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  };

  const run = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const partial = value.trim().toLowerCase();
      if (!partial) return;
      const matches = Object.keys(commands).filter((c) => c.startsWith(partial));
      if (matches.length === 1) setValue(matches[0]);
      return;
    }
    if (e.key !== "Enter") return;

    const raw = value.trim();
    const cmd = raw.toLowerCase();
    const newLines = [...lines, `guest@ali-ameer-sec:~$ ${raw}`];

    if (raw !== "") {
      setHistory((h) => [...h, raw]);
      setHistoryIndex(-1);
    }

    if (cmd === "clear") {
      setLines(["Ali Ameer Secure Interface CLI v1.0.0. Type \"help\" to begin."]);
    } else if (cmd.startsWith("echo ")) {
      newLines.push(raw.slice(5));
      setLines(newLines);
    } else if (cmd in commands) {
      const resp = commands[cmd];
      newLines.push(typeof resp === "function" ? resp() : resp);
      setLines(newLines);
    } else if (cmd !== "") {
      newLines.push(`Error: command not found: "${raw}". Type "help" to view options.`);
      setLines(newLines);
    }
    setValue("");
    scrollToBottom();
  };

  return (
    <section id="terminal" className="content px-4 py-20">
      <span className="section-eyebrow">13 // TERMINAL</span>
      <h2 className="section-title mt-2 mb-8">Interactive CLI</h2>
      <div className="glass-panel overflow-hidden glow-cyan">
        <div className="bg-panel border-b border-border px-4 py-3 font-mono text-xs text-muted">
          bash guest@ali-ameer-sec junior pentester in training
        </div>
        <div ref={bodyRef} onClick={() => document.getElementById("term-input")?.focus()} className="p-5 h-80 overflow-y-auto font-mono text-sm space-y-2">
          {lines.map((l, i) => (
            <pre key={i} className="whitespace-pre-wrap text-ink">{l}</pre>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-emerald">guest@ali-ameer-sec</span>
            <span>:</span>
            <span className="text-cyan">~</span>
            <span>$</span>
            <input
              id="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={run}
              autoComplete="off"
              spellCheck={false}
              className="bg-transparent outline-none flex-1 text-ink"
            />
          </div>
        </div>
        <div className="border-t border-border px-4 py-2 font-mono text-[11px] text-muted">
          ↑/↓ history · Tab autocomplete · try "help"
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
