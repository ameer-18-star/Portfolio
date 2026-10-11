import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHourglassHalf, faStamp, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { credentialGroups, deriveStatus } from "../../data/credentials";
import BadgeModal from "./BadgeModal";
import "./credentials.css";

const ROW_ICON = {
  verified: faCircleCheck,
  "certificate-on-file": faStamp,
  "in-progress": faHourglassHalf,
  pending: faHourglassHalf,
};
const ROW_CLASS = {
  verified: "text-emerald",
  "certificate-on-file": "text-cyan",
  "in-progress": "text-amber-400",
  pending: "text-muted",
};

const Credentials = () => {
  const [target, setTarget] = useState(null);

  return (
    <section id="credentials" className="content px-4 py-20">
      <span className="section-eyebrow">14 // CREDENTIALS</span>
      <h2 className="section-title mt-2 mb-3">Credentials & Certifications</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Click any category or item to see its certificate preview and verification status. Each item
        carries one of four tags: <span className="text-emerald font-mono text-xs">Verified</span> a
        working public link exists; <span className="text-cyan font-mono text-xs">Certificate on File</span> a
        certificate image exists but the issuer has no public portal (normal for TCM completions);{" "}
        <span className="text-amber-400 font-mono text-xs">In Progress</span> not yet earned;{" "}
        <span className="font-mono text-xs text-muted">Pending</span> neither a link nor an image
        is on file yet. Nothing in progress is shown as earned.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {credentialGroups.map((group) => (
          <div key={group.id} className="glass-panel p-6 hover-lift hover:glow-cyan flex flex-col">
            <button
              onClick={() => setTarget({ group })}
              className="flex items-start gap-4 text-left mb-4 group"
              aria-label={`Open details for ${group.title}`}
            >
              <div className="badge-hex shrink-0" aria-hidden="true">
                {group.badgeIcon ? (
                  <img src={group.badgeIcon} alt="" className="w-full h-full object-contain" />
                ) : (
                  <FontAwesomeIcon icon={group.icon || faCertificate} />
                )}
              </div>
              <div>
                <div className="font-mono text-[11px] text-emerald uppercase tracking-wide">{group.issuer}</div>
                <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-cyan transition-colors">
                  {group.title}
                </h3>
              </div>
            </button>

            <ul className="space-y-1.5">
              {group.items.map((it) => {
                const status = deriveStatus(it);
                return (
                  <li key={it.name}>
                    <button
                      onClick={() => setTarget({ group, item: it })}
                      className="w-full flex items-center gap-2 text-left text-sm text-muted hover:text-cyan transition-all duration-300 hover:translate-x-1"
                    >
                      <FontAwesomeIcon icon={ROW_ICON[status]} className={ROW_CLASS[status]} />
                      <span className="flex-1">{it.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <BadgeModal target={target} onClose={() => setTarget(null)} />
    </section>
  );
};

export default Credentials;
