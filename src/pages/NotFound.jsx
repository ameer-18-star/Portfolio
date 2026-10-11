import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTerminal } from "@fortawesome/free-solid-svg-icons";

const lines = [
  "guest@ali-ameer-sec:~$ cd /requested-path",
  "bash: cd: /requested-path: No such file or directory",
  "guest@ali-ameer-sec:~$ curl -I .",
  "HTTP/1.1 404 Not Found",
];

const NotFound = () => {
  const [typed, setTyped] = useState([]);

  useEffect(() => {
    document.title = "404: Page Not Found | Ali Ameer";
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(lines.slice(0, i));
      if (i >= lines.length) clearInterval(interval);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="sec sec-terminal min-h-screen center px-4 py-24">
      <div className="glass-panel glow-cyan max-w-lg w-full p-8 sm:p-10 text-center">
        <div className="font-display font-extrabold text-6xl sm:text-7xl mb-2 bg-gradient-to-r from-cyan to-emerald bg-clip-text text-transparent">
          404
        </div>
        <p className="font-mono text-sm text-cyan mb-6 uppercase tracking-widest">Resource Not Found</p>

        <div className="glass-panel bg-panel text-left p-4 mb-8 font-mono text-xs sm:text-sm space-y-1.5 min-h-32">
          {typed.map((l, i) => (
            <pre key={i} className={`whitespace-pre-wrap ${l.startsWith("HTTP") ? "text-red-400" : "text-muted"}`}>
              {l}
            </pre>
          ))}
        </div>

        <p className="text-muted text-sm mb-8">
          This page, project or resource does not exist, or it moved. Let's get you back to somewhere real.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary px-5 py-3 rounded-md font-mono text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} /> Back to Home
          </Link>
          <Link to="/" state={{ scrollTo: "terminal" }} className="btn-outline-glow px-5 py-3 rounded-md font-mono text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faTerminal} /> Open Console
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
