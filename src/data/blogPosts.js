import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import rbpBookshelfCover from "../assets/images/blog/rbp-bookshelf-cover.png";
import roadmap90Cover from "../assets/images/blog/roadmap-90-cover.png";
import freeResourcesCover from "../assets/images/blog/free-resources-cover.png";
import certNotesCover from "../assets/images/blog/cert-notes-cover.png";
import csNotesCover from "../assets/images/blog/cs-ict-9-12-notes.png";
import { GH_USER } from "./projects";

const thumbs = [blog1, blog2, blog3, blog4];

// readTime values are rough estimates for the repo READMEs and notes.
// Adjust them (or the repo names) to match your real repositories.
const raw = [
  {
    id: "rbp-bookshelf",
    image: rbpBookshelfCover,
    title: "Red Team, Blue Team & Purple Team Reading Roadmap",
    category: "Security Research",
    readTime: 12,
    repo: "Red_Blue_Purple_Team_Operators_Bookshelf",
    liveUrl: "TODO-paste-your-live-url-here",
    tags: ["Red Team", "Blue Team", "Purple Team", "AI Security"],
    excerpt:
      "A skill-first reading roadmap covering Red, Blue and Purple Team security, including AI security frameworks, ordered by offensive and defensive phase.",
    body: [
      "Books and frameworks are grouped by the skill they build instead of by publisher, so you can pick a phase (recon, initial access, detection, response) and follow a clear path.",
      "The roadmap also covers AI security frameworks and how they map onto the offensive and defensive phases.",
    ],
  },
  {
    id: "cert-notes",
    image: certNotesCover,
    title: "Certification Deep Dives & Exam Notes (Cisco CEH, EC-Council EHE/NDE, Google)",
    category: "Certifications & Notes",
    readTime: 25,
    repo: "Cisco-Ethical-Hacking-CEH",
    tags: ["Cisco", "EC-Council", "Google Cybersecurity"],
    excerpt:
      "Practical notes, lab write-ups and study guides for Cisco Ethical Hacking, EC-Council EHE and NDE, and the Google Cybersecurity Professional Certificate.",
    body: [
      "Each course has its own repository with structured notes, lab write-ups and revision material.",
      "Related repositories: EC-Council-Ethical-Hacking-Essentials-EHE, EC-Council-Network-Defense-Essentials-NDE and Google-Cybersecurity-Professional-Certificate.",
    ],
  },
  {
    id: "roadmap-90",
    image: roadmap90Cover,
    title: "The 90-Day InfoSec & Ethical Hacking Mastery Roadmap",
    category: "Roadmaps",
    readTime: 15,
    repo: "Ethical_Hacking_90_Days_Roadmap",
    tags: ["Roadmap", "Linux", "Networking", "Active Directory"],
    excerpt:
      "A step-by-step 90-day learning path from networking and Linux command-line foundations up to Active Directory exploitation.",
    body: [
      "The plan is split into weekly goals: networking and Linux first, then web fundamentals, then exploitation and Active Directory practice in a lab.",
      "Related repositories: 90-Days-InfoSec-CyberSec-Roadmaps and CyberSecurity_Roadmap.",
    ],
  },
  {
    id: "free-resources",
    image: freeResourcesCover,
    title: "185+ Free Cybersecurity Resources & Badges Vault",
    category: "Certifications & Notes",
    readTime: 10,
    repo: "185_Plus_Free_CyberSecurity_Resources",
    tags: ["Free Resources", "Badges", "Labs"],
    excerpt:
      "A curated directory of free certifications, digital badges, hands-on lab platforms and repository guides.",
    body: [
      "Resources are sorted by type: free certifications, badge programs, lab platforms and learning repositories.",
    ],
  },
  {
    id: "cs-notes",
    image: csNotesCover,
    title: "Computer Science Study Guides & Exam Question Banks (Grades 9–12)",
    category: "Certifications & Notes",
    readTime: 30,
    repo: "Computer_Science_Notes_9_To_12",
    tags: ["Computer Science", "Education", "Exam Prep"],
    excerpt:
      "Foundational CS study material covering hardware, low-level logic, network fundamentals and structured programming, with exam question banks.",
    body: [
      "Notes follow the classroom syllabus and are paired with practice questions for each chapter.",
    ],
  },
  {
    id: "security-101",
    title: "Security 101 Series: Practical Fundamentals",
    category: "Security Research",
    readTime: 14,
    repo: "Security_101_Series",
    tags: ["TCP/IP", "ARP Spoofing", "DNS", "Cryptography"],
    excerpt:
      "Core security concepts broken down: the TCP/IP handshake, ARP spoofing, DNS resolution flaws and basic cryptography.",
    body: [
      "Each topic explains how the protocol works first, then how it can be abused, then how to defend against it.",
    ],
  },
];

// Posts that set their own `image` keep it; everything else still falls
// back to the generic thumb cycle until a real/custom cover is added.
// `liveUrl` is optional — only set it on posts with an actual hosted page
// (e.g. GitHub Pages). Posts without one simply omit the field.
export const blogPosts = raw.map((p, i) => ({
  ...p,
  image: p.image || thumbs[i % thumbs.length],
  url: `${GH_USER}/${p.repo}`,
}));

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];