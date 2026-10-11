import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faDownload } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatar.png";
import "./hero.css";

const roles = [
  "Junior Penetration Tester (in training)",
  "IT Trainer & Content Creator",
  "Security Researcher (learning)",
  "CompTIA A+ & Network+ Instructor",
];

// Particle + mesh canvas. Colors come from the active theme's CSS variables.
const MeshCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = false; // particle motion always runs, regardless of OS/browser preference
    let particles = [];
    let frame;
    let colors = { a: "#22d3ee", b: "#10b981" };
    const mouse = { x: null, y: null };
    const LINK_DIST = 120;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = {
        a: cs.getPropertyValue("--color-cyan").trim() || "#22d3ee",
        b: cs.getPropertyValue("--color-emerald").trim() || "#10b981",
      };
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = rect.width < 768 ? 55 : 130;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        useB: Math.random() > 0.75,
      }));
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          if (mouse.x !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < 110 && d > 0) {
              p.x += (dx / d) * 1.2;
              p.y += (dy / d) * 1.2;
            }
          }
        }
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = p.useB ? colors.b : colors.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // mesh links between nearby particles
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.a;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.globalAlpha = (1 - d / LINK_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    readColors();
    resize();
    draw();

    const section = canvas.parentElement;
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
};

const Typewriter = () => {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const current = roles[idx.current];
      char.current += deleting.current ? -1 : 1;
      setText(current.substring(0, char.current));

      let delay = deleting.current ? 45 : 110;
      if (!deleting.current && char.current === current.length) {
        delay = 1800;
        deleting.current = true;
      } else if (deleting.current && char.current === 0) {
        deleting.current = false;
        idx.current = (idx.current + 1) % roles.length;
        delay = 400;
      }
      timeout = setTimeout(tick, delay);
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="font-mono text-emerald text-lg xs:text-xl" aria-live="off">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="introduction" className="relative min-h-screen overflow-hidden hero-bg pt-16 pb-12 flex items-center">
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />
      <MeshCanvas />
      <div className="content relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] gap-12 xl:gap-16 items-center px-4">
        <div>
          <span className="section-eyebrow inline-block mb-4">OPEN TO JUNIOR PENTEST & IT INSTRUCTOR ROLES · REMOTE · UTC+5</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Hi, I'm Ali Ameer<span className="text-cyan">_</span>
          </h1>
          <div className="mb-6 h-8">
            <Typewriter />
          </div>
          <p className="text-muted text-base sm:text-lg max-w-xl mb-6">
            Junior penetration tester in training. 30 of 33 tasks and 720 points in Parry Security's
            red teaming internship, a web app assessment at VortexTech, and five Python security
            projects on GitHub. Before security, I taught IT and my videos have 30M+ organic views.
          </p>
          <p className="font-mono text-sm text-cyan border-l-2 border-cyan pl-4 mb-8 max-w-xl">
            Studying: CEH v13 (exam date TBD) · Cisco Ethical Hacker (60%) · MITRE ATT&amp;CK framework
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="contact" smooth duration={700} className="btn-primary px-6 py-3 rounded-md font-mono text-sm cursor-pointer flex items-center gap-2">
              <FontAwesomeIcon icon={faShieldHalved} /> Email me
            </Link>
            <a href="Ali_Ameer_Resume.pdf" download className="btn-outline-glow px-6 py-3 rounded-md font-mono text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
            <span className="font-mono text-xs text-muted">Focused pages:</span>
            <RouterLink
              to="/pentester"
              className="font-mono text-xs text-cyan hover:underline"
            >
              Security & pentesting →
            </RouterLink>
            <RouterLink
              to="/instructor"
              className="font-mono text-xs text-cyan hover:underline"
            >
              Teaching & instruction →
            </RouterLink>
          </div>
        </div>

        {/* Card column: avatar, card border and terminal all share one width */}
        <div className="hero-card w-full mx-auto lg:mx-0">
          <div className="hero-avatar glass-panel glow-cyan">
            <img src={avatar} alt="Ali Ameer portrait" className="hero-avatar-img" />
            <div className="hud-corner hud-tl" />
            <div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" />
            <div className="hud-corner hud-br" />
          </div>
          <div className="glass-panel p-5 mt-5 font-mono text-xs sm:text-[13px] leading-relaxed">
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <p className="text-muted">$ whoami</p>
            <p className="text-cyan">ali_ameer IT instructor moving into offensive security</p>
            <p className="text-muted mt-2">$ cat status.txt</p>
            <p className="text-emerald">✓ Parry Security: 30/33 tasks · 720 pts · Rank 14</p>
            <p className="text-emerald">✓ CEH v13 self-study in progress</p>
            <p className="text-muted mt-2">$ echo $ROLE</p>
            <p className="text-cyan">junior-pentester-in-training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
