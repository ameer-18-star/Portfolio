import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://pk.linkedin.com/in/ali-ameer-811786302" },
  { icon: faGithub, link: "https://github.com/ameer-18-star" },
  { icon: faYoutube, link: "https://www.youtube.com/channel/UC-r2rQxVCfvV_8UasGBPPug" },
];

const SocialMedia = ({ className = "" }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 center rounded-md border border-border text-muted hover:text-cyan hover:border-cyan transition-all duration-300"
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
