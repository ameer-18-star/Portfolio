import card1 from "../assets/images/portfolio-images/card-1.png";
import card2 from "../assets/images/portfolio-images/card-2.png";
import card3 from "../assets/images/portfolio-images/card-3.png";
import card4 from "../assets/images/portfolio-images/card-4.png";
import card5 from "../assets/images/portfolio-images/card-5.png";
import card6 from "../assets/images/portfolio-images/card-6.png";
import vaultKeeperImg from "../assets/images/portfolio-images/vault-keeper.png";
import sqlTerminalImg from "../assets/images/portfolio-images/sql-terminal.png";
import netSniffImg from "../assets/images/portfolio-images/netsniff.png";
import scopeSentryImg from "../assets/images/portfolio-images/scopesentry.png";
import keyloggerImg from "../assets/images/portfolio-images/keylogger.png";
import daybookImg from "../assets/images/portfolio-images/daybook-django.png";
import fraudImg from "../assets/images/portfolio-images/credit-card-fraud-detection.png";
import suiteImg from "../assets/images/portfolio-images/ameer-cybersecurity-projects.png";
import carouselImg from "../assets/images/portfolio-images/carousel-gens.png";
import htmlSlidesImg from "../assets/images/portfolio-images/html-slides.png";

export const GH_USER = "https://github.com/ameer-18-star";
const SUITE = `${GH_USER}/Ameer-s_CyberSecurity_Projects`;

export const projectCategories = [
  "Offensive Security",
  "DevSecOps & Automation",
  "Web AppSec",
  "Web Utilities",
];

// `status` overlays: "LIVE TOOL" | "ACTIVE REPO" | "LAB DEMO".
// `demo` is null until a real deployed URL exists (no fake links).
// `architecture` renders as a left-to-right pipeline diagram.
// `image` falls back to the generated placeholders in src/assets/images.
export const projects = [
  {
    id: "suite",
    featured: true,
    title: "Cybersecurity Project Suite",
    category: "Offensive Security",
    status: "ACTIVE REPO",
    image: suiteImg,
    stack: ["Python", "Scapy", "SQLite", "PyQt6", "pytest"],
    summary:
      "A monorepo of five Python security tools: VaultKeeper, ScopeSentry, NetSniff, a fraud-detection ML pipeline and a SQL terminal. Built with AI assistance; each tool is designed, tested and explainable.",
    writeup:
      "Each tool lives in its own folder with a README and tests where applicable. The suite covers packet capture and protocol decoding, encrypted credential storage, defensive WiFi monitoring and anomaly detection. All tools built with AI assistance features designed, tested and explainable by the owner. Lab and education use only, on systems you own.",
    architecture: ["CLI / GUI", "Tool modules", "Scapy / SQLite / sklearn", "Reports & logs"],
    repo: SUITE,
    demo: null,
  },
  {
    id: "carousel",
    featured: false,
    title: "JSON to Instagram Carousel Post Generator",
    category: "Web Utilities",
    status: "LIVE TOOL",
    image: carouselImg,
    stack: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Content utility that converts JSON datasets into styled carousel slides for technical tutorials.",
    writeup:
      "Paste a structured JSON document and the tool renders each slide in one of four layouts, ready for high-resolution export. No dependencies, no build step, runs entirely in the browser.",
    architecture: ["JSON input", "Schema parser", "Layout renderer", "PNG export"],
    repo: `${GH_USER}/Instagram-Carousel-Gens`,
    demo: "https://ameer-18-star.github.io/Instagram-Carousel-Gens/",
  },
  {
    id: "slides",
    featured: false,
    title: "HTML Slides Presentation Template",
    category: "Web Utilities",
    status: "LIVE TOOL",
    image: htmlSlidesImg,
    stack: ["HTML5", "CSS3"],
    summary:
      "Lightweight, hacker-aesthetic slide framework for presenting vulnerability disclosures and threat reports.",
    writeup:
      "A dependency-free deck template with a dark UI, monospace type and keyboard navigation, meant for security briefings and lab write-ups.",
    architecture: ["Slide markup", "CSS theme", "Keyboard nav", "Present / print"],
    repo: `${GH_USER}/HTML-Slides-Template`,
    demo: "https://ameer-18-star.github.io/HTML-Slides-Template/",
  },
  {
    id: "vortextech",
    featured: true,
    title: "VortexTech Cybersecurity Tasks",
    category: "Web AppSec",
    status: "LAB DEMO",
    image: card4,
    stack: ["OWASP Juice Shop", "Burp Suite", "SQLMap", "Nmap", "Python"],
    summary:
      "Deliverables from the 4-week VortexTech internship: a Juice Shop assessment, tooling and recon, OWASP Top 5 research and an incident response plan.",
    writeup:
      "Week 1 is a hands-on assessment of a local Juice Shop instance, Week 2 covers a Python password checker and multi-subnet Nmap scans, Week 3 is an OWASP Top 5 (2025) research report, and Week 4 is a NIST SP 800-61 incident response plan.",
    architecture: ["Recon", "Exploit (lab)", "Findings report", "NIST IR plan"],
    repo: `${GH_USER}/Vortextech_Cybersecurity_Internship_Tasks`,
    demo: null,
  },
  {
    id: "habit",
    featured: false,
    title: "Advanced Habit & Workflow Tracker",
    category: "Web Utilities",
    status: "ACTIVE REPO",
    image: card5,
    stack: ["Electron", "React 18", "Zustand", "Dexie.js"],
    summary:
      "Desktop app for tracking research goals, lab hours and certification prep, with profile-isolated IndexedDB databases.",
    writeup:
      "Per-profile storage, SVG progress rings, activity heatmaps, OS notifications and PIN locks. State lives in Zustand and persists through Dexie.",
    architecture: ["React UI", "Zustand store", "Dexie / IndexedDB", "Electron shell"],
    repo: `${GH_USER}/Advanced-Habit-Tracker`,
    demo: null,
  },
  {
    id: "webcomponents",
    featured: false,
    title: "Custom Security Web Components",
    category: "Web Utilities",
    status: "LIVE TOOL",
    image: card6,
    stack: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Landing pages, interface widgets and mini-apps built as scaffolding for security tool demos.",
    writeup:
      "A collection of small self-contained pages and widgets used to prototype interfaces for security tooling.",
    architecture: ["Widget markup", "Styles", "Vanilla JS", "Drop-in embed"],
    repo: `${GH_USER}/Web-Pages`,
    demo: "https://ameer-18-star.github.io/Web-Pages/",
  },

  // ---- Additional projects (shown on /projects) ----
  {
    id: "vaultkeeper",
    featured: true,
    title: "VaultKeeper",
    category: "DevSecOps & Automation",
    status: "ACTIVE REPO",
    image: vaultKeeperImg,
    stack: ["Python", "SQLite", "Fernet", "PBKDF2", "TOTP"],
    summary: "Encrypted CLI password manager built to understand how credential storage and encryption work. Local vault, TOTP codes, brute-force lockout and a password-audit command.",
    writeup:
      "A single SQLite file protected by one master password (PBKDF2-HMAC-SHA256, 260K iterations, Fernet encryption). The master password is never stored a decrypted canary string verifies it. Includes reuse and weak-password audits, lockout throttling, encrypted backup and restore, and 130 passing pytest tests. What I'd change: raise iterations to 600K (current OWASP guidance) or move to Argon2. Built with AI assistance; I designed the features, ran and tested it, and can explain how it works.",
    architecture: ["Master password", "PBKDF2 key derivation", "Fernet encryption", "SQLite vault"],
    repo: `${SUITE}/tree/main/Vault-Keeper`,
    demo: null,
  },
  {
    id: "scopesentry",
    featured: true,
    title: "ScopeSentry",
    category: "DevSecOps & Automation",
    status: "LAB DEMO",
    image: scopeSentryImg,
    stack: ["Python", "PyQt6", "tshark", "airodump-ng"],
    summary: "Defensive WiFi monitoring GUI early prototype. Designed to flag rogue APs and deauth floods against your own authorized baseline. Blue team only, no attack code.",
    writeup:
      "Designed to parse airodump-ng output, watch deauth rates against a baseline with tshark, flag rogue or evil-twin APs by BSSID and channel mismatch, and keep a hash-chained evidence log gated by an authorization manifest. PyQt6 GUI with Dashboard, Engagement, Defense, Evidence, Results, Logs and Settings tabs. Status: early prototype first test on my own router did not work well; improvements are in progress. Defensive monitoring only; this is not a hacking tool. Built with AI assistance; I designed the features, ran and tested it, and can explain how it works.",
    architecture: ["Passive capture", "Baseline compare", "Detectors", "Evidence log"],
    repo: `${SUITE}/tree/main/Scopesentry`,
    demo: null,
  },
  {
    id: "netsniff",
    featured: true,
    title: "NetSniff",
    category: "Offensive Security",
    status: "LAB DEMO",
    image: netSniffImg,
    stack: ["Python", "Scapy", "rich", "Wireshark"],
    summary: "Educational packet sniffer built to understand how protocols work. Rich terminal UI, BPF filters and 12+ protocol decoders. A learning tool not a Wireshark replacement.",
    writeup:
      "Built because advanced tools were hard to remember and the goal was to understand how packets actually work. Live capture with BPF filters, DNS and TCP flag decoding, hex and ASCII payload view, PCAP and JSON export, and an end-of-session summary with top talkers and throughput. Captures validated against Wireshark. Built with AI assistance; I designed the features, ran and tested it, and can explain how it works.",
    architecture: ["Scapy capture", "Filter engine", "Protocol decoders", "PCAP / JSON export"],
    repo: `${SUITE}/tree/main/NetSniff`,
    demo: null,
  },
  {
    id: "keylogger",
    title: "Educational Keylogger Demo",
    category: "Offensive Security",
    status: "LAB DEMO",
    image: keyloggerImg,
    stack: ["Python", "pynput", "Flask"],
    summary: "Lab-only: offline keylogger demonstration for security awareness training. Run only on systems you own and control.",
    writeup:
      "Streams keystrokes to a local Flask dashboard so students can see exactly how keyloggers work. Paired with defensive lessons on anti-malware, password managers, virtual keyboards and 2FA. Nothing leaves the machine. Lab-only demo do not run on systems you do not own or have explicit permission to test.",
    architecture: ["pynput hook", "Local buffer", "Flask dashboard", "Defense notes"],
    repo: `${SUITE}/tree/main/Keylogger`,
    demo: null,
  },
  {
    id: "fraud",
    featured: true,
    title: "Credit Card Fraud Detection ML Pipeline",
    category: "DevSecOps & Automation",
    status: "ACTIVE REPO",
    image: fraudImg,
    stack: ["Python", "scikit-learn", "XGBoost", "SMOTE"],
    summary: "Anomaly detection plus SOC-style severity triage on a real Kaggle dataset (284,807 transactions, 0.172% fraud rate). No synthetic results published.",
    writeup:
      "Unsupervised detectors (Isolation Forest, LOF, One-Class SVM) and supervised models balanced with SMOTE. Transactions are scored into CRITICAL, HIGH, MEDIUM and CLEAR tiers and exported as JSON alerts. Real Kaggle-data metrics are pending no results table is shown until confirmed numbers exist. Built with AI assistance; I designed the pipeline, ran and tested it, and can explain how it works.",
    architecture: ["Ingest", "Anomaly + classifiers", "Severity triage", "SIEM JSON export"],
    repo: `${SUITE}/tree/main/credit_card_fraud_detection_ml_pipeline`,
    demo: null,
  },
  {
    id: "sqlterm",
    title: "SQL Terminal",
    category: "DevSecOps & Automation",
    status: "ACTIVE REPO",
    image: sqlTerminalImg,
    stack: ["Python", "sqlite3", "rich"],
    summary: "Interactive SQL shell over SQLite with rich table output, built for teaching database fundamentals.",
    writeup:
      "Full DML and DQL, multi-line queries and meta commands (.tables, .schema, .reset) with three pre-loaded demo tables.",
    architecture: ["Prompt loop", "SQLite engine", "rich renderer", "Meta commands"],
    repo: `${SUITE}/tree/main/sql-terminal`,
    demo: null,
  },
  {
    id: "lms",
    title: "PHP-Based Academic LMS",
    category: "Web AppSec",
    status: "LAB DEMO",
    image: card4,
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    summary: "Graduation project: role-based LMS with course builder, progress metrics and formal database QA.",
    writeup:
      "Demonstrates prepared statements, role and access tables, and course progression tracking.",
    architecture: ["Auth roles", "PHP controllers", "MySQL", "Progress metrics"],
    repo: null,
    demo: null,
  },
  {
    id: "daybook",
    title: "DayBook Django",
    category: "Web Utilities",
    status: "ACTIVE REPO",
    image: daybookImg,
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    summary: "Self-hosted task manager and habit tracker with journal, statistics, gamification and email reports.",
    writeup:
      "One-off and recurring tasks, three habit types, a swimlane day timeline and email reports, all behind one login.",
    architecture: ["Django views", "ORM models", "Timeline UI", "Email reports"],
    repo: GH_USER,
    demo: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
