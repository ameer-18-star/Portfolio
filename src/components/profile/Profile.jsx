import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleCheck, faGraduationCap, faClock } from "@fortawesome/free-solid-svg-icons";

const highlights = [
  { icon: faLocationDot, label: "Location", value: "Pakistan · UTC+5" },
  { icon: faCircleCheck, label: "Availability", value: "Open to Junior Roles" },
  { icon: faGraduationCap, label: "Education", value: "BS IT · GCUF · 3.5/4.0" },
  { icon: faClock, label: "Background", value: "3+ Yrs IT Training" },
];

const Profile = () => {
  return (
    <section id="about" className="content px-4 py-20 md:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
      <div>
        <span className="section-eyebrow">01 // PROFILE</span>
        <h2 className="section-title mt-2 mb-6">About Ali Ameer</h2>
        <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
          <p>
            I'm a BS IT graduate from GC University Faisalabad (CGPA 3.5/4.0) moving from IT
            training into offensive security. I wrote a CompTIA A+ course, administered a
            50-workstation lab, and spent three years teaching networking and cybersecurity to
            students who were afraid of the material. That work built one habit: isolate the
            problem, document each step, explain it clearly. A pentest report follows the same logic.
          </p>
          <p>
            I teach because I believe understanding how attacks work is the only honest foundation
            for teaching people to defend against them. VMSOIT my own education channel and blog
            has reached 30M+ organic views and 35K+ site visits
            {" "}<span className="font-mono text-xs text-muted">(self-reported)</span>. I currently
            teach CS and ICT at Sir Syed Scholars Inn and Officer's Science Academy, and the
            security content I build for those classes is the same material I test in my own labs.
          </p>
          <p>
            In Parry Security's Red Teaming internship I completed 30 of 33 tasks 720 points,
            Rank 14 on the leaderboard and finished all four weeks of the VortexTech web
            application assessment. I haven't done paid client work. Everything here comes from
            labs, internships and my own projects, and I label each one. Now studying CEH v13
            and looking for a remote junior penetration tester or security analyst role.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {highlights.map((h) => (
          <div key={h.label} className="glass-panel p-5 hover:glow-cyan hover:border-cyan/40 transition-all duration-300">
            <div className="w-10 h-10 center rounded-md bg-cyan/10 text-cyan text-lg mb-3">
              <FontAwesomeIcon icon={h.icon} />
            </div>
            <div className="font-mono text-xs text-muted uppercase tracking-wide mb-1">{h.label}</div>
            <div className="font-display font-semibold text-lg">{h.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
