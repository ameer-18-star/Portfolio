import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelopeOpenText, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

// Email card is hidden until a real address is set. LinkedIn handle is
// unverified update href when the real profile URL is confirmed.
const EMAIL = "ali.ameer.it@proton.me";

const methods = [
  { icon: faGithub, title: "GitHub", value: "ameer-18-star", href: "https://github.com/ameer-18-star" },
  { icon: faLinkedin, title: "LinkedIn", value: "ali-ameer-811786302", href: "https://www.linkedin.com/in/ali-ameer-811786302/" },
  { icon: faDownload, title: "Instructor Resume", value: "Download PDF", href: "/Ali_Ameer_Instructor_Resume.pdf" },
  { icon: faDownload, title: "Pentester Resume", value: "Download PDF", href: "/Ali_Ameer_Pentester_Resume.pdf" },
  ...(EMAIL ? [{ icon: faEnvelopeOpenText, title: "Email", value: EMAIL, href: `mailto:${EMAIL}` }] : []),
];

// Set this to your real Google Form URL (Google Forms -> Send -> link icon)
// before deploying. Left null, the button below renders disabled instead of
// linking nowhere.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdQ_KUnOTv_jg0Dws_8sYMEHL2ghPDxy6A4L9PckkltCtla7g/viewform";

const Contact = () => {
  return (
    <section id="contact" className="content px-4 py-20">
      <span className="section-eyebrow">17 // CONNECT</span>
      <h2 className="section-title mt-2 mb-10">Encrypted Communication Panel</h2>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <h3 className="font-display font-semibold text-xl mb-3">Secure Gateway Channel</h3>
          <p className="text-muted text-sm mb-6">
            Reach out for security discussions, training proposals, or opportunities. Use the official
            contact form for structured intake, or the methods below for anything direct.
          </p>

          {GOOGLE_FORM_URL ? (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm mb-6 hover-lift"
            >
              Open Official Google Contact Form <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm mb-6 border border-border text-muted cursor-not-allowed"
              title="Set GOOGLE_FORM_URL in Contact.jsx"
            >
              Google Contact Form not configured yet
            </span>
          )}

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {methods.map((m) => (
              <Address item={m} key={m.title} />
            ))}
          </div>
          <SocialMedia />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;