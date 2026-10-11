import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHourglassHalf,
  faStamp,
  faArrowUpRightFromSquare,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { deriveStatus } from "../../data/credentials";
import Modal from "../common/modal/Modal";

 const STATUS_META = {
  verified: { label: "Verified ↗", icon: faCircleCheck, cls: "badge-status--verified" },
  "certificate-on-file": { label: "Certificate on File", icon: faStamp, cls: "badge-status--onfile" },
  "in-progress": { label: "In Progress not yet earned", icon: faHourglassHalf, cls: "badge-status--progress" },
  pending: { label: "Pending no link on file yet", icon: faHourglassHalf, cls: "badge-status--pending" },
};

const StatusPill = ({ item }) => {
  const meta = STATUS_META[deriveStatus(item)];
  return (
    <span className={`badge-status ${meta.cls}`}>
      <FontAwesomeIcon icon={meta.icon} /> {meta.label}
    </span>
  );
};

const VerifyLine = ({ item, certImage }) =>
  item.verifyUrl ? (
    <a
      href={item.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-md font-mono text-xs"
    >
      Verify on {item.platform} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
    </a>
  ) : (
    <p className="mt-5 font-mono text-[11px] text-muted max-w-sm">
      {item.inProgress
        ? "Not yet earned no credential to verify. Status will update when the course or exam is completed."
        : certImage
          ? "This issuer does not provide a public verification portal. The certificate image above is the evidence on file."
          : "No public verification link or certificate image is on file yet for this item."}
    </p>
  );

// Single credential selected: large two-column hero, full-res certificate
// render on the left, details on the right. This is the "legible without
// scrolling" view the enlarged modal exists for.
const ItemHero = ({ item, group }) => {
  const certImage = item.certificateImage || group.certificateImage;
  const badgeIcon = item.badgeIcon || group.badgeIcon;

  return (
    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
      <div className="rounded-lg border border-border bg-obsidian center overflow-hidden h-72 sm:h-96 lg:h-[60vh]">
        {certImage ? (
          <img src={certImage} alt={`${item.name} certificate`} className="max-w-full max-h-full object-contain" />
        ) : (
          <div className="text-muted font-mono text-xs flex flex-col items-center gap-3">
            <FontAwesomeIcon icon={faCertificate} className="text-3xl" />
            Certificate image not yet on file
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="badge-hex badge-hex--lg shrink-0" aria-hidden="true">
            {badgeIcon ? (
              <img src={badgeIcon} alt="" className="w-full h-full object-contain" />
            ) : (
              <FontAwesomeIcon icon={faCertificate} />
            )}
          </div>
          <div>
            <p className="font-mono text-xs text-muted">{item.issuer} | {item.platform}</p>
            <div className="mt-2"><StatusPill item={item} /></div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4 font-mono text-xs border-t border-border pt-4">
          <div>
            <dt className="text-muted uppercase">Issued</dt>
            <dd className="text-ink mt-1">{item.issued || "See the credential page"}</dd>
          </div>
          <div>
            <dt className="text-muted uppercase">Expires</dt>
            <dd className="text-ink mt-1">{item.expires || "See the credential page"}</dd>
          </div>
          {item.kind && (
            <div className="col-span-2">
              <dt className="text-muted uppercase">Type</dt>
              <dd className="text-ink mt-1">{item.kind}</dd>
            </div>
          )}
        </dl>

        <VerifyLine item={item} certImage={certImage} />
      </div>
    </div>
  );
};

// Group overview (category click): compact rows so all items are scannable
// at once, each still clickable through to its own ItemHero via the parent
// list in Credentials.jsx (this modal just lists them read-only here).
const ItemRow = ({ item, group }) => {
  const certImage = item.certificateImage || group.certificateImage;
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-panel p-4">
      <div className="w-16 h-16 rounded-md border border-border bg-obsidian center overflow-hidden shrink-0">
        {certImage ? (
          <img src={certImage} alt="" className="max-w-full max-h-full object-contain" />
        ) : (
          <FontAwesomeIcon icon={faCertificate} className="text-muted" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-display font-semibold text-sm truncate">{item.name}</h4>
        <div className="mt-1.5"><StatusPill item={item} /></div>
      </div>
      {item.verifyUrl && (
        <a
          href={item.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-cyan hover:underline shrink-0 flex items-center gap-1"
        >
          Verify <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
        </a>
      )}
    </div>
  );
};

// `target` is either { group } (category click) or { item, group } (item click).
const BadgeModal = ({ target, onClose }) => {
  if (!target) return null;
  const { group, item } = target;

  return (
    <Modal
      open
      onClose={onClose}
      title={item ? item.name : group.title}
      subtitle={item ? group.title : `${group.issuer} | ${group.items.length} item${group.items.length === 1 ? "" : "s"}`}
      size="xl"
      labelledBy="badge-title"
    >
      {item ? (
        <ItemHero item={item} group={group} />
      ) : (
        <div className="space-y-3">
          {group.items.map((it) => (
            <ItemRow key={it.name} item={it} group={group} />
          ))}
        </div>
      )}
    </Modal>
  );
};

export default BadgeModal;
