import { faFlag, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const ctfPlatforms = [
  {
    id: "thm",
    icon: faFlag,
    label: "TryHackMe",
    handle: "@ameer18",
    stat: "Top 15%",
    subStats: [
      "38 rooms completed · 6 badges",
      "[0x7] Adept rank",
      "Networking, web, Linux/Windows, SOC basics",
    ],
    color: "text-crimson",
    border: "border-crimson/40",
    href: "https://tryhackme.com/p/ameer18",
  },
  {
    id: "htb",
    icon: faGraduationCap,
    label: "Hack The Box",
    handle: "@Hello1399",
    stat: "Level 3",
    subStats: [
      "70 points · HTB Academy",
      "Beginner track, Grade 1 of 3",
      "General security modules in progress",
    ],
    color: "text-emerald",
    border: "border-emerald/40",
    href: "https://profile.hackthebox.com/profile/019e7c18-2fb0-7280-a91c-0b84c30a0522?utm_medium=copy_url",
  },
];

// TryHackMe rooms grouped by topic, for the full write-up on /pentester only.
export const roomCategories = [
  {
    title: "Networking & Protocols",
    items: ["Networking Concepts", "DNS & HTTP in Detail", "Network Services I & II", "OpenVPN"],
  },
  {
    title: "Linux & Windows Fundamentals",
    items: ["Linux Fundamentals Part 1", "Windows Fundamentals 1 & 2", "Windows Command Line", "Operating Systems: Introduction"],
  },
  {
    title: "Web Application Security",
    items: ["Web Application Basics", "Guided Pentest: Web", "OWASP Top 10 (2025)"],
  },
  {
    title: "Offensive & Wireless",
    items: ["Offensive Security Intro", "Wifi Hacking 101", "Android Hacking 101", "Printer Hacking 101"],
  },
  {
    title: "Cryptography & Data",
    items: ["Cryptography Concepts", "Cryptography Basics", "Data Representation", "Data Encoding"],
  },
  {
    title: "SOC & Blue Team Basics",
    items: ["SOC Fundamentals", "SOC L1 Alert Triage", "Defensive Security Intro"],
  },
];