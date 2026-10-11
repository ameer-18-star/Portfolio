import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/modal/Modal";

// PNG-only certificate viewer: no PDF toggle. High-resolution image render,
// a direct image download, and an external verification link when one exists.
const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <Modal open onClose={onClose} title={certificate.title} subtitle={certificate.issuer} size="xl" labelledBy="cert-title">
      <div className="rounded-lg border border-border bg-panel center overflow-hidden mb-5 h-72 sm:h-96 lg:h-[65vh]">
        <img src={certificate.image} alt={`${certificate.title} certificate`} className="max-w-full max-h-full object-contain" />
      </div>

      <div className="flex flex-wrap gap-3">
        <a href={certificate.image} download className="btn-outline-glow px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
          <FontAwesomeIcon icon={faDownload} /> Download Certificate Image
        </a>
        {certificate.verifyUrl ? (
          <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2">
            <FontAwesomeIcon icon={faLink} /> External Verification
          </a>
        ) : (
          <span className="px-4 py-2 rounded-md font-mono text-xs flex items-center gap-2 border border-border text-muted cursor-not-allowed">
            <FontAwesomeIcon icon={faLink} /> Verification link pending
          </span>
        )}
      </div>
    </Modal>
  );
};

export default CertificateModal;
