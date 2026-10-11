import {
  faShieldHalved,
  faUserSecret,
  faMagnifyingGlassChart,
  faNetworkWired,
  faCode,
  faHeadset,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import ciscoBadge from "../assets/badges/cisco-badge.png";
import googleBadge from "../assets/badges/google-badge.png";
import tcmBadge from "../assets/badges/tcm-badge.png";
import ciscoCert from "../assets/certificates/cisco-cert.png";
import tcmCert from "../assets/certificates/tcm-security-cert.png";
// google-cyber-cert.png exists at src/assets/certificates/ but isn't wired
// in yet: the credential below is marked in-progress, not earned, so no
// certificate image is shown for it (see the google-cyber group below).

// Per-course Cisco badges and certificates (real uploads). Courses without
// an individual upload fall back to the generic ciscoBadge/ciscoCert above.
import introToCyberBadge from "../assets/badges/cisco/introduction-to-cybersecurity.png";
import networkingBasicsBadge from "../assets/badges/cisco/networking-basics.png";
import networkingDevicesBadge from "../assets/badges/cisco/networking-devices-and-initial-configuration.png";
import endpointSecurityBadge from "../assets/badges/cisco/endpoint-security.png";
import hardwareBasicsBadge from "../assets/badges/cisco/computer-hardware-basics.png";
import osBasicsBadge from "../assets/badges/cisco/operating-systems-basics.png";
import pythonEssentialsBadge from "../assets/badges/cisco/python-essentials-1.png";
import htmlEssentialsBadge from "../assets/badges/cisco/html-essentials.png";
import cssEssentialsBadge from "../assets/badges/cisco/css-essentials.png";
import itSupportBasicsBadge from "../assets/badges/cisco/it-customer-support-basics.png";
import osSupportBadge from "../assets/badges/cisco/operating-systems-support.png";
import securityConnectivityBadge from "../assets/badges/cisco/security-and-connectivity-support.png";
import hardwareUpgradeBadge from "../assets/badges/cisco/hardware-and-upgrade-support.png";
import itSupportPathBadge from "../assets/badges/cisco/it-support-specialist-career-path.png";

import introToCyberCert from "../assets/certificates/cisco/introduction-to-cybersecurity-cert.png";
import networkingBasicsCert from "../assets/certificates/cisco/networking-basics-cert.png";
import networkingDevicesCert from "../assets/certificates/cisco/networking-devices-and-initial-configuration-cert.png";
import endpointSecurityCert from "../assets/certificates/cisco/endpoint-security-cert.png";
import hardwareBasicsCert from "../assets/certificates/cisco/computer-hardware-basics-cert.png";
import osBasicsCert from "../assets/certificates/cisco/operating-systems-basics-cert.png";
import pythonEssentialsCert from "../assets/certificates/cisco/python-essentials-1-cert.png";
import htmlEssentialsCert from "../assets/certificates/cisco/html-essentials-cert.png";
import cssEssentialsCert from "../assets/certificates/cisco/css-essentials-cert.png";
import itSupportBasicsCert from "../assets/certificates/cisco/it-customer-support-basics-cert.png";
import osSupportCert from "../assets/certificates/cisco/operating-systems-support-cert.png";
import securityConnectivityCert from "../assets/certificates/cisco/security-and-connectivity-support-cert.png";
import hardwareUpgradeCert from "../assets/certificates/cisco/hardware-and-upgrade-support-cert.png";
import itSupportPathCert from "../assets/certificates/cisco/it-support-specialist-career-path-cert.png";

// Per-course TCM badges and certificates (real uploads, full set).
import tcmSecurityLogo from "../assets/badges/tcm/tcm-security-logo.png";
import tcmHelpDeskBadge from "../assets/badges/tcm/practical-help-desk.png";
import tcmSecurityFundamentalsBadge from "../assets/badges/tcm/practical-security-fundamentals.png";
import tcmLinuxBadge from "../assets/badges/tcm/linux-100-fundamentals.png";
import tcmProgrammingBadge from "../assets/badges/tcm/programming-100-fundamentals.png";
import tcmAiBadge from "../assets/badges/tcm/ai-100-fundamentals.png";
import tcmSoftSkillsBadge from "../assets/badges/tcm/soft-skills-for-the-job-market.png";

import tcmHelpDeskCert from "../assets/certificates/tcm/practical-help-desk-cert.png";
import tcmSecurityFundamentalsCert from "../assets/certificates/tcm/practical-security-fundamentals-cert.png";
import tcmLinuxCert from "../assets/certificates/tcm/linux-100-fundamentals-cert.png";
import tcmProgrammingCert from "../assets/certificates/tcm/programming-100-fundamentals-cert.png";
import tcmAiCert from "../assets/certificates/tcm/ai-100-fundamentals-cert.png";
import tcmSoftSkillsCert from "../assets/certificates/tcm/soft-skills-for-the-job-market-cert.png";

const credly = (id) => `https://www.credly.com/badges/${id}/public_url`;

// Status is a display tier, not a claim beyond what's on file:
//   "verified"            has a real, working third-party verify link
//   "certificate-on-file" has a certificate image but no public verify
//                         portal (normal for course-completion certs like
//                         TCM, which don't issue Credly-style public links)
//   "in-progress"         not yet earned
//   "pending"             neither a link nor an image is on file yet
export const deriveStatus = (item) => {
  if (item.inProgress) return "in-progress";
  if (item.verifyUrl) return "verified";
  if (item.certificateImage) return "certificate-on-file";
  return "pending";
};

// verifyUrl: real Credly public URLs taken from the original portfolio.html.
// verifyUrl: null means no public link is on file yet.
// `issued` / `expires` are left null on purpose: no dates were provided, so
// none are invented. The modal tells visitors to read them on the Credly page.
// `badgeIcon` / `certificateImage` passed in `extra` override the group's
// generic fallback image with the course's real one, where uploaded.
const item = (name, id = null, extra = {}) => ({
  name,
  issuer: "Cisco Networking Academy",
  platform: "Credly",
  verifyUrl: id ? credly(id) : null,
  issued: null,
  expires: null,
  ...extra,
});

export const credentialGroups = [
  {
    id: "jr-analyst",
    title: "Junior Cybersecurity Analyst Pathway",
    issuer: "Cisco Networking Academy",
    icon: faShieldHalved,
    badgeIcon: ciscoBadge,
    certificateImage: ciscoCert,
    items: [
      item("Introduction to Cybersecurity", "89c4ed58-a37b-4c91-8b58-54b67bbf7759", {
        badgeIcon: introToCyberBadge,
        certificateImage: introToCyberCert,
      }),
      item("Networking Basics", "8098f891-4e80-49f0-b588-1f85684c5442", {
        badgeIcon: networkingBasicsBadge,
        certificateImage: networkingBasicsCert,
      }),
      item("Networking Devices and Initial Configuration", "a5e8b1dc-7a3e-4c43-821d-af5620dc99f8", {
        badgeIcon: networkingDevicesBadge,
        certificateImage: networkingDevicesCert,
      }),
      item("Endpoint Security", "993130d8-c942-4d2c-825c-b87fbcbceb95", {
        badgeIcon: endpointSecurityBadge,
        certificateImage: endpointSecurityCert,
      }),
      item("Network Defense"),
      item("Cyber Threat Management"),
      item("Junior Cybersecurity Analyst Career Path", null, {
        kind: "In progress not yet completed",
        inProgress: true,
      }),
    ],
  },
  {
    id: "ethical-hacker",
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    icon: faUserSecret,
    badgeIcon: ciscoBadge,
    certificateImage: null,
    // Path is 60% complete. No badge or certificate earned yet.
    // Badge ID left null until the path is finished and a real Credly URL exists.
    items: [
      item("Ethical Hacker", null, {
        kind: "In progress 60% complete",
        inProgress: true,
      }),
    ],
  },
  {
    id: "defense-analyst",
    title: "Cybersecurity Defense Analyst",
    issuer: "Cisco Networking Academy",
    icon: faMagnifyingGlassChart,
    badgeIcon: ciscoBadge,
    certificateImage: ciscoCert,
    // No individual course certs uploaded for this pathway yet; all items
    // fall back to the group's generic Cisco badge/certificate.
    items: [
      item("The Cybersecurity Landscape"),
      item("Understanding Threats and Attacks"),
      item("Security Operations and the Defense Analyst"),
      item("Introduction to Splunk"),
      item("Data and Tools for Defense Analysts"),
      item("The Art of Investigation"),
      item("SOC Essentials: Investigating with Splunk"),
      item("SOC Essentials: Introduction to Threat Hunting"),
      item("Cybersecurity Defense Analyst Pathway", null, {
        kind: "In progress not yet completed",
        inProgress: true,
      }),
    ],
  },
  {
    id: "networking",
    title: "Computer Networking",
    issuer: "Cisco Networking Academy",
    icon: faNetworkWired,
    badgeIcon: ciscoBadge,
    certificateImage: ciscoCert,
    items: [
      item("Networking Basics", "8098f891-4e80-49f0-b588-1f85684c5442", {
        badgeIcon: networkingBasicsBadge,
        certificateImage: networkingBasicsCert,
      }),
      item("Networking Devices and Initial Configuration", "a5e8b1dc-7a3e-4c43-821d-af5620dc99f8", {
        badgeIcon: networkingDevicesBadge,
        certificateImage: networkingDevicesCert,
      }),
      item("Network Addressing and Basic Troubleshooting"),
      item("Network Support and Security"),
      item("Network Technician Career Path", null, {
        kind: "In progress not yet completed",
        inProgress: true,
      }),
    ],
  },
  {
    id: "programming",
    title: "Programming & Web Foundations",
    issuer: "Cisco Networking Academy",
    icon: faCode,
    badgeIcon: ciscoBadge,
    certificateImage: ciscoCert,
    items: [
      item("Python Essentials 1", "f9604a29-27dc-4073-b39e-5f1a6d12377e", {
        badgeIcon: pythonEssentialsBadge,
        certificateImage: pythonEssentialsCert,
      }),
      item("HTML Essentials", "868d8764-96ce-4d62-a08d-9bda304a83ca", {
        badgeIcon: htmlEssentialsBadge,
        certificateImage: htmlEssentialsCert,
      }),
      item("CSS Essentials", "03c8ab46-bb19-4e1f-bfa7-3620a64bb99b", {
        badgeIcon: cssEssentialsBadge,
        certificateImage: cssEssentialsCert,
      }),
    ],
  },
  {
    id: "it-support",
    title: "IT Support Specialist Career Path",
    issuer: "Cisco Networking Academy",
    icon: faHeadset,
    badgeIcon: itSupportPathBadge,
    certificateImage: ciscoCert,
    items: [
      item("Computer Hardware Basics", "88bde4f0-bfe4-4f5c-86e8-87976f7058bf", {
        badgeIcon: hardwareBasicsBadge,
        certificateImage: hardwareBasicsCert,
      }),
      item("Operating System Basics", "b4d553ed-76df-4846-aa50-4a4eff39f3d7", {
        badgeIcon: osBasicsBadge,
        certificateImage: osBasicsCert,
      }),
      item("IT Customer Support Basics", "bb59f709-4094-41bf-9fc1-d890f3f7497c", {
        badgeIcon: itSupportBasicsBadge,
        certificateImage: itSupportBasicsCert,
      }),
      item("Operating Systems Support", "c6c4845c-2a39-4c47-9e75-d4d53b4a5d20", {
        badgeIcon: osSupportBadge,
        certificateImage: osSupportCert,
      }),
      item("Security & Connectivity Support", "2a7c0fad-3825-4a58-bdd8-ab796d3c577e", {
        badgeIcon: securityConnectivityBadge,
        certificateImage: securityConnectivityCert,
      }),
      item("Hardware & Upgrade Support", "1977d543-d6e1-4c74-8a0f-94efe9a96a35", {
        badgeIcon: hardwareUpgradeBadge,
        certificateImage: hardwareUpgradeCert,
      }),
      item("IT Support Specialist Path", "294c9f7e-e255-46cc-93dc-5327d7ceaeb8", {
        badgeIcon: itSupportPathBadge,
        certificateImage: itSupportPathCert,
      }),
    ],
  },
  {
    id: "tcm",
    title: "TCM Security Academy Completions",
    issuer: "TCM Security",
    icon: faGraduationCap,
    badgeIcon: tcmSecurityLogo,
    certificateImage: tcmCert,
    // TCM course completions don't issue a public Credly-style verification
    // link; the certificate image itself is the evidence, so these render
    // as "Certificate on File" rather than "Verified" (see deriveStatus).
    // Every item below now has its own real badge + certificate image.
    items: [
      item("Practical Help Desk (PHD)", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmHelpDeskBadge,
        certificateImage: tcmHelpDeskCert,
      }),
      item("Practical Security Fundamentals", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmSecurityFundamentalsBadge,
        certificateImage: tcmSecurityFundamentalsCert,
      }),
      item("Linux 100 Fundamentals", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmLinuxBadge,
        certificateImage: tcmLinuxCert,
      }),
      item("Programming 100 Fundamentals", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmProgrammingBadge,
        certificateImage: tcmProgrammingCert,
      }),
      item("AI 100 Fundamentals", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmAiBadge,
        certificateImage: tcmAiCert,
      }),
      item("Soft Skills For Working Environment", null, {
        issuer: "TCM Security",
        platform: "TCM Security Academy",
        kind: "Course completion",
        badgeIcon: tcmSoftSkillsBadge,
        certificateImage: tcmSoftSkillsCert,
      }),
    ],
  },
  {
    id: "google-cyber",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    icon: faGoogle,
    badgeIcon: googleBadge,
    certificateImage: null,
    items: [
      item("Google Cybersecurity Professional Certificate", null, {
        issuer: "Google",
        platform: "Coursera",
        kind: "Studying (not yet completed)",
        inProgress: true,
      }),
    ],
  },
  {
    id: "ec-council",
    title: "EC-Council CEH v13 (Studying)",
    issuer: "EC-Council",
    icon: faUserSecret,
    badgeIcon: null,
    certificateImage: null,
    items: [
      item("CEH v13: Certified Ethical Hacker", null, {
        issuer: "EC-Council",
        platform: "EC-Council",
         kind: "In progress exam date TBD",
        inProgress: true,
      }),
    ],
  },
];

// Unique Cisco badges with a working public Credly verification URL on file.
// Path-level badges and in-progress items are excluded automatically because
// their verifyUrl is null. Used by the metrics counter.
export const verifiedCiscoBadgeCount = new Set(
  credentialGroups
    .flatMap((g) => g.items)
    .filter((i) => i.verifyUrl && i.issuer === "Cisco Networking Academy")
    .map((i) => i.verifyUrl)
).size;