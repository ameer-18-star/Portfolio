import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Written to directly answer the questions people (and AI answer engines)
// are most likely to ask about Ali Ameer. Keep these honest: this is the
// content that ChatGPT/Perplexity/Google AI Overviews are most likely to
// quote verbatim.
 const faqs = [
  {
    q: "Who is Ali Ameer?",
    a: "Ali Ameer is a BS Information Technology graduate from GC University Faisalabad (CGPA 3.5/4.0), based in Pakistan. He has three years of experience in IT training and support, and is moving into offensive security. He completed Parry Security's Red Teaming internship (30 of 33 tasks, 720 points, Rank 14 on the cohort leaderboard) and all four weeks of the VortexTech cybersecurity internship. He currently teaches CS and ICT at three institutions while studying for CEH v13.",
  },
  {
    q: "What security internships has Ali Ameer completed?",
    a: "Two remote cybersecurity internships: Parry Security's Red Teaming track (30 of 33 tasks reviewed, 720 points, Rank 14 of 74 scoring participants, about 7th in the Red Teaming track) and VortexTech's Advanced Cybersecurity track (4 of 4 weeks, 100% task completion). The VortexTech assessment was against OWASP Juice Shop, a deliberately vulnerable practice app not a real client target. He has not done paid client penetration testing work.",
  },
  {
    q: "What certifications does Ali Ameer hold or study?",
    a: "He holds multiple Cisco Networking Academy badges with public Credly verification links, and TCM Security Academy course completions. He is currently studying EC-Council CEH v13 (exam date TBD) and the Cisco Ethical Hacker path (60% complete). He does not currently hold OSCP, CEH, PNPT or other advanced offensive-security certifications.",
  },
  {
    q: "Is Ali Ameer available for work?",
    a: "Yes, open to junior penetration tester or security analyst roles, remote, UTC+5 (Pakistan). See the Contact section. He is also available for IT training and cybersecurity education work.",
  },
  {
    q: "What has Ali Ameer built?",
    a: "Five Python security projects on GitHub: VaultKeeper (encrypted CLI password manager, PBKDF2 + Fernet, 130 passing tests), NetSniff (educational packet sniffer, Scapy, BPF filters), ScopeSentry (defensive WiFi monitoring GUI, early prototype), a credit card fraud detection ML pipeline (284K transactions, real Kaggle dataset, results pending), and a SQL terminal for teaching database fundamentals. All built with AI assistance features designed, tested and explainable by the owner.",
  },
  {
    q: "What is Ali Ameer's teaching background?",
    a: "He is the founder and creator of VMSOIT, his own education blog and YouTube channel (vmsoit.blogspot.com), where he authored a full CompTIA A+ (220-1201) course syllabus. The channel has reached 30M+ organic views and 35K+ site visits (self-reported). He currently teaches CS and ICT at Sir Syed Scholars Inn, Officer's Science Academy and Grammar Model School Academy, and previously administered a 50-workstation lab at  VMSOIT(2022–2023).",
  },
  {
    q: "How can I contact Ali Ameer?",
    a: "Via the contact form or email link in the Contact section of this site, or through GitHub: github.com/ameer-18-star. LinkedIn and resume links are also in the Contact section.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="content px-4 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="section-eyebrow">15 // FAQ</span>
      <h2 className="section-title mt-2 mb-10">Frequently Asked Questions</h2>
      <div className="grid sm:grid-cols-2 gap-5 items-start max-w-5xl mx-auto">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass-panel overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex justify-between items-center gap-4 p-5 text-left"
              aria-expanded={open === i}
            >
              <span className="font-display font-semibold text-base">{f.q}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-cyan transition-transform duration-300 shrink-0 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
