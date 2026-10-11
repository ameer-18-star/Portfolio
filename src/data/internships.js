import { faTrophy, faListCheck, faCircleCheck, faClock, faCalendarCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import parryCert from "../assets/certificates/parry-security-cert.png";
import vortexCert from "../assets/certificates/vortextech-cert.png";

const VORTEX_REPO = "https://github.com/ameer-18-star/Vortextech_Cybersecurity_Internship_Tasks";

// Certificate PDFs and verification URLs are placeholders until real ones
// exist: put PDFs in /public/certificates/ and set verifyUrl.
export const internships = [
  {
    id: "parry",
    type: "scored",
    title: "Parry Security",
    track: "Red Teaming Track Intern",
    summary:
      "Remote internship focused on offensive security across web, infrastructure, Active Directory and defensive operations. 30 of 33 tasks reviewed; three not completed (Apollo Linux pentest, Web Security Week-2, and a Wireshark task marked needs changes).",
    badge: "Rank 7 in Red Team · 720 pts · 30 of 33 tasks",
    badgeColor: "red",
    issued: "August 17, 2026",
    metrics: [
      { label: "Leaderboard Rank", value: "14 of 74", icon: faTrophy },
      { label: "Tasks Reviewed", value: "30 / 33", icon: faListCheck },
      { label: "Total Points", value: "720 pts", icon: faCircleCheck },
      { label: "Track", value: "Red Teaming", icon: faShieldHalved },
    ],
    certificate: {
      title: "Parry Security: Red Teaming Track",
      issuer: "Issued August 17, 2026",
      image: parryCert,
      verifyUrl: null,
      verifyStatus: "Completed",
      buttonLabel: "Verify certificate ↗",
    },
    repoLink: null,
    categories: [
      {
        title: "Core Penetration Testing & Exploitation",
        tasks: [
          { name: "Web Security", earned: 50, total: 50 },
          { name: "Parry Chat", earned: 50, total: 50 },
          { name: "Web Application Security", earned: 10, total: 50 },
          { name: "Penetration Testing Methodology & Reporting", earned: 20, total: 20 },
          { name: "Linux Privilege Escalation", earned: 20, total: 20 },
        ],
      },
      {
        title: "Infrastructure, Active Directory & Cloud",
        tasks: [
          { name: "WireGuard Remote Access VPN Lab", earned: 50, total: 50 },
          { name: "Container & Kubernetes Security", earned: 40, total: 40 },
          { name: "IoT/OT & ICS Security", earned: 40, total: 40 },
          { name: "Active Directory & Windows Attacks", earned: 40, total: 40 },
          { name: "AD & Windows Attacks", earned: 20, total: 20 },
          { name: "Cloud Security", earned: 20, total: 20 },
          { name: "Wireless Security", earned: 20, total: 20 },
          { name: "Mobile Security", earned: 20, total: 20 },
        ],
      },
      {
        title: "Threat Intelligence & Security Engineering",
        tasks: [
          { name: "Security Automation with Python", earned: 30, total: 30 },
          { name: "Threat Intelligence", earned: 30, total: 30 },
          { name: "Identity & Access Management", earned: 30, total: 30 },
          { name: "Malware Analysis & RE", earned: 20, total: 20 },
          { name: "Cryptography", earned: 15, total: 15 },
          { name: "Master Python Cybersecurity", earned: 10, total: 10 },
          { name: "Network", earned: 10, total: 10 },
          { name: "Wireshark Analysis", earned: 10, total: 10 },
        ],
      },
      {
        title: "Defense, IR & Operations",
        tasks: [
          { name: "SOC & Threat Hunting", earned: 20, total: 20 },
          { name: "DFIR", earned: 20, total: 20 },
          { name: "OSINT", earned: 20, total: 20 },
          { name: "Social Engineering & Phishing", earned: 20, total: 20 },
          { name: "GRC & Risk Management", earned: 20, total: 20 },
          { name: "Linux Projects", earned: 20, total: 20 },
          { name: "Linux Game", earned: 15, total: 15 },
          { name: "Install Kali Linux in VirtualBox", earned: 10, total: 10 },
          { name: "Linux Journey", earned: 10, total: 20 },
        ],
      },
    ],
  },
  {
    id: "vortextech",
    type: "weekly",
    title: "VortexTech",
    track: "Cybersecurity Intern | Advanced Track",
    summary:
      "4-week intensive covering web application assessment against a deliberately vulnerable practice app (OWASP Juice Shop), tooling and recon, OWASP Top 5 research and incident response planning. No real organisation was tested.",
    badge: "4 / 4 weeks · 100% completion · Lab target: OWASP Juice Shop",
    badgeColor: "emerald",
    issued: null,
    metrics: [
      { label: "Duration", value: "4 Weeks", icon: faCalendarCheck },
      { label: "Task Completion", value: "100%", icon: faCircleCheck },
      { label: "Findings (W1, lab target)", value: "11", icon: faShieldHalved },
      { label: "Weeks Delivered", value: "4 / 4", icon: faListCheck },
    ],
    certificate: {
      title: "VortexTech: Cybersecurity Internship",
      issuer: "4-Week Advanced Track Completion",
      image: vortexCert,
      verifyUrl: null,
      verifyStatus: "Pending",
      buttonLabel: "Verify certificate ↗",
    },
    repoLink: VORTEX_REPO,
    weeks: [
      {
        week: "Week 1",
        title: "OWASP Juice Shop Web App Security Assessment",
        tasks:
          "Lab target: OWASP Juice Shop (a deliberately vulnerable practice app). Full hands-on AppSec evaluation of a locally hosted instance. 11 findings identified: SQLi auth bypass, data exfiltration, MD5 hash cracking, DOM XSS, IDOR / broken access control and insecure JWT tokens. Severity method and findings table pending.",
        tools: ["Burp Suite Community", "SQLMap", "FFUF", "Hashcat", "CrackStation"],
        artifacts: [
          { label: "report.html", href: VORTEX_REPO },
          { label: "report.pdf", href: VORTEX_REPO },
        ],
      },
      {
        week: "Week 2",
        title: "Hands-On Tooling & Network Reconnaissance",
        tasks:
          "Built password_checker.py, a CLI password strength evaluator with 6-point scoring and masked input. Ran multi-subnet Nmap port scans with service version detection (-sV) on localhost (127.0.0.1) and 192.168.1.0/24.",
        tools: ["Python 3", "Nmap", "Linux terminal"],
        artifacts: [
          { label: "password_checker.py", href: VORTEX_REPO },
          { label: "localhost_scan.txt", href: VORTEX_REPO },
          { label: "network_scan.txt", href: VORTEX_REPO },
          { label: "report.md", href: VORTEX_REPO },
        ],
      },
      {
        week: "Week 3",
        title: "OWASP Top 5 (2025) Research Report",
        tasks:
          "A 10-pillar interrogation framework applied to A01:2025 through A05:2025: architectural flaws, exploit mechanics, SAST/DAST automation rules, code review, WAF bypass tactics and PCI / SOC 2 compliance matrices. 80+ page report.",
        tools: ["Multi-tier research pipeline", "OWASP Top 10 (2025)"],
        artifacts: [{ label: "research report (.md/.pdf)", href: VORTEX_REPO }],
      },
      {
        week: "Week 4",
        title: "Mini Incident Response Plan (NIST SP 800-61)",
        tasks:
          "Corporate incident response plan for a simulated breach of 120,000 customer records caused by a staging authentication misconfiguration. All six NIST IR phases mapped, plus an internal and external communication timeline.",
        tools: ["NIST SP 800-61", "HTML dashboard"],
        artifacts: [
          { label: "VortexTech_Week4_IncidentResponsePlan_AliAmeer.html", href: VORTEX_REPO },
        ],
      },
    ],
  },
];
