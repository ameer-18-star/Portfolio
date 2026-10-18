import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faDownload,
  faChalkboardTeacher,
  faShieldHalved,
  faCircleCheck,
  faVideo,
  faLaptop,
  faLocationDot,
  faCode,
  faNetworkWired,
  faBrain,
  faDatabase,
  faDesktop,
  faBookOpen,
  faArrowUpRightFromSquare,
  faTrophy,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Reveal from "../components/common/reveal/Reveal";
import Modal from "../components/common/modal/Modal";
import BlogCard from "../components/blog/BlogCard";
import BlogModal from "../components/blog/BlogModal";
import "../components/blog/blog.css";
import { blogPosts } from "../data/blogPosts";
import bestTeacherAward2026 from "../assets/awards/best-teacher-award-2026-osa.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30M+", label: "Organic Views", sub: "YouTube & Instagram · self-reported" },
  { value: "35K+", label: "Site Visits",   sub: "vmsoit.blogspot.com · self-reported" },
  { value: "3",    label: "Institutions",  sub: "Currently teaching CS & ICT" },
  { value: "3+",   label: "Years",         sub: "IT training & support since 2022" },
];

const philosophy = [
  {
    icon: faCircleCheck,
    title: "Isolate → Document → Fix",
    desc: "Running a 50-workstation lab built one habit: isolate the problem, document each step, fix with evidence. Every lesson I teach follows the same method students leave with a repeatable process, not just an answer.",
  },
  {
    icon: faShieldHalved,
    title: "Security through understanding",
    desc: "I teach how attacks work because it is the only honest foundation for teaching defence. A student who understands ARP spoofing configures a switch differently to one who only memorised the rule.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Real tools in real labs",
    desc: "Theory without practice produces students who can answer exam questions but cannot configure a router. Every class I run includes a hands-on component Python scripts, Packet Tracer topologies, Linux terminals.",
  },
];

const institutions = [
  {
    title: "CS & ICT Instructor",
    period: "2026 – Present",
    org: "Officer's Science Academy",
    location: "Pakistan",
    subjects: ["Python", "AI & Machine Learning", "Data Science", "IT Support", "Cybersecurity"],
    highlight:
      "Matric and Intermediate levels. Guided students on industry-relevant practice over textbook theory.",
  },
  {
    title: "CS & ICT Instructor",
    period: "2026 – Present",
    org: "Grammar Model School Academy",
    location: "Pakistan",
    subjects: ["Computer Science", "ICT", "Python", "AI", "Data Science"],
    highlight:
      "Matric and Intermediate levels. Hands-on CS and ICT instruction bridging classroom theory to practical skills.",
  },
  {
    title: "IT & CS Instructor",
    period: "2025 – Present",
    org: "Sir Syed Scholars Inn",
    location: "Pakistan",
    subjects: ["Networking", "Cybersecurity", "OS (Windows & Linux)", "IT Support", "Programming"],
    highlight:
      "Delivered structured labs using the CLEAR technique; taught digital literacy through to network security fundamentals.",
  },
  {
    title: "Computer Lab Administrator & Tech Support",
    period: "2022 – 2023",
    org: "MIEHS",
    location: "Pakistan",
    subjects: ["Network Administration", "Hardware Diagnostics", "Technical Training"],
    highlight:
      "Maintained uptime and configuration for a 50-workstation academic lab. Trained non-technical users on safety and operating guidelines.",
  },
];

const courses = [
  { name: "CompTIA A+ (220-1201)", icon: faLaptop,    note: "Full syllabus authored on VMSOIT YouTube" },
  { name: "Python Programming",     icon: faCode,      note: "Hands-on scripting projects" },
  { name: "Computer Networking",    icon: faNetworkWired, note: "TCP/IP, subnetting, Cisco Packet Tracer" },
  { name: "Cybersecurity Fundamentals", icon: faShieldHalved, note: "Threats, defence, real-world examples" },
  { name: "AI & Machine Learning",  icon: faBrain,     note: "Practical ML concepts for secondary students" },
  { name: "Data Science",           icon: faDatabase,  note: "Data analysis and visualisation" },
  { name: "IT Support",             icon: faDesktop,   note: "Hardware, OS, help desk fundamentals" },
  { name: "Operating Systems",      icon: faDesktop,   note: "Windows and Linux administration" },
  { name: "ICT Fundamentals",       icon: faBookOpen,  note: "Digital literacy and information technology" },
];

const awards = [
  {
    id: "best-teacher-2026-osa",
    image: bestTeacherAward2026,
    title: "Best Teacher Award",
    org: "Officer's Science Academy",
    year: "2026",
    details:
      "Awarded for outstanding classroom delivery and measurable student outcomes across CS, ICT and IT support coursework at Officer's Science Academy.",
  },
  // Add more awards here as they come in — same shape (include a `details` string), new image import above.
];

const VMSOIT_URL  = "https://vmsoit.blogspot.com";
const YOUTUBE_URL = null; // set to the A+ playlist URL when confirmed

const educationPosts = blogPosts.filter((p) =>
  ["cs-notes", "roadmap-90", "free-resources"].includes(p.id)
);

// ─── Sub-components ───────────────────────────────────────────────────────────

const StatCard = ({ value, label, sub }) => (
  <div className="glass-panel p-6 sm:p-8 text-center hover:glow-cyan transition-all duration-300">
    <div className="font-display font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-cyan to-emerald bg-clip-text text-transparent">
      {value}
    </div>
    <div className="font-mono text-xs text-muted uppercase tracking-wide mt-3 mb-1">{label}</div>
    <div className="text-xs text-muted/80">{sub}</div>
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const InstructorPage = () => {
  const [activePost, setActivePost] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);
  const awardsScrollRef = useRef(null);

  const scrollAwards = (dir) => {
    const el = awardsScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };


  useEffect(() => {
    document.title = "IT & CS Instructor | Ali Ameer";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="sec sec-hero">
        <section className="content px-4 pt-20 pb-16 min-h-[58vh] flex flex-col justify-center">
          <Link
            to="/"
            className="nav-link font-mono text-xs text-cyan hover:underline inline-flex items-center gap-2 mb-8 w-fit"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to portfolio
          </Link>

          <span className="section-eyebrow mb-4 block">
            IT &amp; CS INSTRUCTOR · PAKISTAN · UTC+5
          </span>

          <h1 className="section-title mb-4 max-w-3xl">
            Teaching how technology works and why it matters.
          </h1>

          <p className="text-muted text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            Three years of IT training and support across three institutions. CompTIA A+
            syllabus authored and published on YouTube. 30M+ organic views (self-reported).
            Teaching CS and ICT to secondary and higher-secondary students and using every
            lab session to deepen my own understanding of how systems break.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "3 Institutions",
              "CompTIA A+ Syllabus",
              "30M+ Organic Views (self-reported)",
              "3+ Years Teaching",
            ].map((chip) => (
              <span key={chip} className="pill text-xs">{chip}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="btn-primary px-6 py-3 rounded-md font-mono text-sm inline-flex items-center gap-2"
            >
              Get in touch <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="/pentester"
              className="btn-outline-glow px-6 py-3 rounded-md font-mono text-sm"
            >
              View security work →
            </Link>
            <a
              href="/Ali_Ameer_Instructor_Resume.pdf"
              download
              className="btn-outline-glow px-6 py-3 rounded-md font-mono text-sm inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </section>
      </div>

      {/* ── 01 Impact ─────────────────────────────────────────────────────── */}
      <Reveal className="sec sec-impact">
        <section className="content px-4 py-16">
          <span className="section-eyebrow">01 // IMPACT</span>
          <h2 className="section-title mt-2 mb-3">By the Numbers</h2>
          <p className="text-muted text-sm mb-10 max-w-2xl">
            Views and visits are self-reported. All other figures are based on employment records.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── 02 Philosophy ─────────────────────────────────────────────────── */}
      <Reveal className="sec sec-about">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">02 // APPROACH</span>
          <h2 className="section-title mt-2 mb-10">Teaching Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="glass-panel p-6 hover:glow-cyan transition-all duration-300"
              >
                <div className="w-10 h-10 center rounded-md bg-cyan/10 text-cyan text-lg mb-4">
                  <FontAwesomeIcon icon={p.icon} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── 03 Institutions ───────────────────────────────────────────────── */}
      <Reveal className="sec sec-internship">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">03 // EXPERIENCE</span>
          <h2 className="section-title mt-2 mb-10">Institutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {institutions.map((inst) => (
              <div
                key={inst.org}
                className="glass-panel border-l-4 border-l-emerald p-6 hover:glow-cyan transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg">{inst.title}</h3>
                    <p className="font-mono text-sm text-emerald mt-0.5">{inst.org}</p>
                  </div>
                  <span className="font-mono text-[11px] text-muted whitespace-nowrap mt-1">
                    {inst.period}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-muted mb-3">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {inst.location}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">{inst.highlight}</p>

                <div className="flex flex-wrap gap-2">
                  {inst.subjects.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── 04 Courses ────────────────────────────────────────────────────── */}
      <Reveal className="sec sec-skills">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">04 // CURRICULUM</span>
          <h2 className="section-title mt-2 mb-3">Courses Taught</h2>
          <p className="text-muted text-sm mb-10 max-w-2xl">
            Subjects delivered across current and past institutions. CompTIA A+ is the only course
            with a publicly published syllabus (VMSOIT YouTube); all others are delivered in the
            classroom.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((c) => (
              <div
                key={c.name}
                className="glass-panel p-5 flex items-start gap-4 hover:glow-cyan hover:border-cyan/40 transition-all duration-300"
              >
                <div className="w-9 h-9 center rounded-md bg-cyan/10 text-cyan shrink-0">
                  <FontAwesomeIcon icon={c.icon} />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{c.name}</p>
                  <p className="text-muted text-xs mt-0.5 leading-relaxed">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── 05 VMSOIT ─────────────────────────────────────────────────────── */}
      <Reveal className="sec sec-projects">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">05 // VMSOIT</span>
          <h2 className="section-title mt-2 mb-10">VMSOIT Education Channel & Blog</h2>

          <div className="glass-panel p-8 max-w-3xl">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 center rounded-xl bg-cyan/10 text-cyan text-2xl shrink-0">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl">VMSOIT</h3>
                <p className="font-mono text-sm text-emerald mt-0.5">
                  Founder / Creator · 2024 – Present
                </p>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed mb-6">
              VMSOIT is my own education blog and YouTube channel. I authored a full CompTIA
              A+ (220-1201) course syllabus covering hardware, OS, networking and security, and
              published it across YouTube and the blog at{" "}
              <a
                href={VMSOIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline font-mono text-xs"
              >
                vmsoit.blogspot.com ↗
              </a>
              . Organic reach has grown to 30M+ views and 35K+ site visits (self-reported, zero
              paid ads) through consistent, structured content that explains hard topics to
              beginners.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Organic Views", value: "30M+",      note: "Self-reported" },
                { label: "Site Visits",   value: "35K+",      note: "Self-reported" },
                { label: "Course",        value: "CompTIA A+", note: "220-1201 syllabus" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-panel rounded-lg p-4 text-center border border-border"
                >
                  <p className="font-display font-bold text-xl text-cyan">{m.value}</p>
                  <p className="font-mono text-xs text-muted mt-1">{m.label}</p>
                  <p className="font-mono text-[10px] text-muted/60 mt-0.5">{m.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={VMSOIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-md font-mono text-xs inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Visit blog
              </a>
              {YOUTUBE_URL && (
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glow px-5 py-2.5 rounded-md font-mono text-xs inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faYoutube} /> A+ playlist
                </a>
              )}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── 06 Featured videos ────────────────────────────────────────────── */}
      <Reveal className="sec sec-about">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">06 // FEATURED VIDEOS</span>
          <h2 className="section-title mt-2 mb-3">From the VMSOIT Channel</h2>
          <p className="text-muted text-sm mb-10 max-w-2xl">
            Sample lessons from the CompTIA A+ series on YouTube. Part of the full syllabus
            published at VMSOIT.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                id: "YT9YhLowiaA",
                si: "XfeqLD4Ss3FrwUm3",
                title: "CompTIA A+ lesson — Ali Ameer, VMSOIT",
              },
              {
                id: "gd8MFPcvZvo",
                si: "n3ZHz2diYWjtQ9-I",
                title: "CompTIA A+ lesson — Ali Ameer, VMSOIT",
              },
            ].map((v) => (
              <div key={v.id} className="glass-panel overflow-hidden hover:glow-cyan transition-all duration-300">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?si=${v.si}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            ))}
          </div>
          {YOUTUBE_URL && (
            <div className="mt-8 text-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow px-6 py-3 rounded-md font-mono text-sm inline-flex items-center gap-2"
              >
                View full A+ playlist →
              </a>
            </div>
          )}
        </section>
      </Reveal>

      {/* ── 07 Achievements & awards ──────────────────────────────────────── */}
      <Reveal className="sec sec-credentials">
        <section className="content px-4 py-20">
          <span className="section-eyebrow">07 // ACHIEVEMENTS & AWARDS</span>
          <h2 className="section-title mt-2 mb-3">Recognition</h2>
          <p className="text-muted text-sm mb-10 max-w-2xl">
            Awards and formal recognition from the institutions I've taught at. Scroll to see more.
          </p>

          <div className="relative">
            <div
              ref={awardsScrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            >
              {awards.map((a) => (
                <div
                  key={a.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedAward(a)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedAward(a);
                    }
                  }}
                  className="glass-panel overflow-hidden hover:glow-cyan transition-all duration-300 shrink-0 snap-center w-[280px] sm:w-[320px] cursor-pointer text-left"
                  aria-label={`View details for ${a.title}`}
                >
                  <div className="aspect-[4/3] bg-panel overflow-hidden">
                    <img
                      src={a.image}
                      alt={`${a.title} — ${a.org}, ${a.year}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5">
                    <div className="w-9 h-9 center rounded-md bg-cyan/10 text-cyan mb-3">
                      <FontAwesomeIcon icon={faTrophy} />
                    </div>
                    <h3 className="font-display font-semibold text-base leading-snug">{a.title}</h3>
                    <p className="font-mono text-xs text-emerald mt-1">{a.org}</p>
                    <p className="font-mono text-[11px] text-muted mt-0.5">{a.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {awards.length > 1 && (
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => scrollAwards(-1)}
                  className="w-9 h-9 center rounded-md border border-border hover:border-cyan hover:text-cyan transition-colors"
                  aria-label="Scroll awards left"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollAwards(1)}
                  className="w-9 h-9 center rounded-md border border-border hover:border-cyan hover:text-cyan transition-colors"
                  aria-label="Scroll awards right"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            )}
          </div>

          <Modal
            open={!!selectedAward}
            onClose={() => setSelectedAward(null)}
            title={selectedAward?.title}
            subtitle={selectedAward ? `${selectedAward.org} · ${selectedAward.year}` : undefined}
            size="xl"
            labelledBy="award-title"
          >
            {selectedAward && (
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
                <div className="rounded-lg border border-border bg-obsidian center overflow-hidden h-72 sm:h-96 lg:h-[60vh]">
                  <img
                    src={selectedAward.image}
                    alt={`${selectedAward.title} — ${selectedAward.org}, ${selectedAward.year}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div>
                  <div className="w-9 h-9 center rounded-md bg-cyan/10 text-cyan mb-4">
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>

                  <dl className="grid grid-cols-2 gap-4 font-mono text-xs border-t border-border pt-4">
                    <div>
                      <dt className="text-muted uppercase">Issuer</dt>
                      <dd className="text-ink mt-1">{selectedAward.org}</dd>
                    </div>
                    <div>
                      <dt className="text-muted uppercase">Year</dt>
                      <dd className="text-ink mt-1">{selectedAward.year}</dd>
                    </div>
                  </dl>

                  {selectedAward.details && (
                    <p className="text-muted text-sm leading-relaxed mt-5">{selectedAward.details}</p>
                  )}
                </div>
              </div>
            )}
          </Modal>
        </section>
      </Reveal>

      {/* ── 08 Study guides ───────────────────────────────────────────────── */}
      {educationPosts.length > 0 && (
        <Reveal className="sec sec-blog">
          <section className="content px-4 py-20">
            <span className="section-eyebrow">08 // RESOURCES</span>
            <h2 className="section-title mt-2 mb-3">Study Guides & Roadmaps</h2>
            <p className="text-muted text-sm mb-10 max-w-2xl">
              Publicly available education resources each backed by a GitHub repository.
              Learning resources and personal notes, not published research.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {educationPosts.map((p) => (
                <BlogCard key={p.id} post={p} onRead={setActivePost} />
              ))}
            </div>
            <BlogModal post={activePost} onClose={() => setActivePost(null)} />
          </section>
        </Reveal>
      )}

      {/* ── 09 CTA ────────────────────────────────────────────────────────── */}
      <Reveal className="sec sec-contact">
        <section className="content px-4 py-20 text-center">
          <span className="section-eyebrow block mb-4">09 // WORK WITH ME</span>
          <h2 className="section-title mb-4">
            Available for training and education work.
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto mb-8">
            Open to IT training collaborations, cybersecurity education partnerships and curriculum
            consulting. Remote and in-person (Pakistan, UTC+5).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="btn-primary px-7 py-3.5 rounded-md font-mono text-sm inline-flex items-center gap-2"
            >
              Get in touch <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="/pentester"
              className="btn-outline-glow px-7 py-3.5 rounded-md font-mono text-sm"
            >
              View security work →
            </Link>
          </div>
        </section>
      </Reveal>

    </div>
  );
};

export default InstructorPage;