import {
  faSatelliteDish, faCrosshairs, faTerminal, faBug, faMagnifyingGlass,
  faDatabase, faChartColumn, faNetworkWired, faSkull,
  faFileCode, faMicrochip, faBraille, faServer, faLayerGroup,
  faCodeBranch, faAtom, faBolt, faTableColumns, faDesktop, faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

import nmap from "../assets/tools/nmap.png";
import burpsuite from "../assets/tools/burpsuite.png";
import sqlmap from "../assets/tools/sqlmap.png";
import wireshark from "../assets/tools/wireshark.png";
import metasploit from "../assets/tools/metasploit.png";
import python from "../assets/tools/python.png";
import docker from "../assets/tools/docker.png";
import kali from "../assets/tools/kali.png";
import hashcat from "../assets/tools/hashcat.png";
import splunk from "../assets/tools/splunk.png";
import packettracer from "../assets/tools/packettracer.png";
import cpp from "../assets/tools/cpp.png";
import javascript from "../assets/tools/javascript.png";
import php from "../assets/tools/php.png";
import html5 from "../assets/tools/html5.png";
import css3 from "../assets/tools/css3.png";
import react from "../assets/tools/react.png";
import nodejs from "../assets/tools/nodejs.png";
import mysql from "../assets/tools/mysql.png";
import electron from "../assets/tools/electron.png";
import wordpress from "../assets/tools/wordpress.png";
import git from "../assets/tools/git.png";

// Each tool renders its PNG logo; `fallbackIcon` only shows if the image
// fails to load (see ToolCard.jsx's onError handler), so swapping in real
// logos later needs no code changes, just replacing the file at `logo`.
export const toolCategories = [
  {
    title: "Security Tools",
    tools: [
      { name: "Nmap", logo: nmap, fallbackIcon: faMagnifyingGlass },
      { name: "Burp Suite", logo: burpsuite, fallbackIcon: faBug },
      { name: "SQLMap", logo: sqlmap, fallbackIcon: faDatabase },
      { name: "Wireshark", logo: wireshark, fallbackIcon: faSatelliteDish },
      { name: "Metasploit", logo: metasploit, fallbackIcon: faCrosshairs },
      { name: "Kali Linux", logo: kali, fallbackIcon: faTerminal },
      { name: "Hashcat", logo: hashcat, fallbackIcon: faSkull },
      { name: "Docker", logo: docker, fallbackIcon: faBoxesStacked },
      { name: "Splunk", logo: splunk, fallbackIcon: faChartColumn },
      { name: "Cisco Packet Tracer", logo: packettracer, fallbackIcon: faNetworkWired },
    ],
  },
  {
    title: "Programming Languages",
    tools: [
      { name: "Python", logo: python, fallbackIcon: faFileCode },
      { name: "C / C++", logo: cpp, fallbackIcon: faMicrochip },
      { name: "JavaScript", logo: javascript, fallbackIcon: faBraille },
      { name: "PHP", logo: php, fallbackIcon: faServer },
      { name: "HTML5", logo: html5, fallbackIcon: faLayerGroup },
      { name: "CSS3", logo: css3, fallbackIcon: faCodeBranch },
    ],
  },
  {
    title: "Web Technologies",
    tools: [
      { name: "React", logo: react, fallbackIcon: faAtom },
      { name: "Node.js", logo: nodejs, fallbackIcon: faBolt },
      { name: "MySQL", logo: mysql, fallbackIcon: faTableColumns },
      { name: "Electron", logo: electron, fallbackIcon: faDesktop },
      { name: "WordPress", logo: wordpress, fallbackIcon: faLayerGroup },
      { name: "Git / GitHub", logo: git, fallbackIcon: faGitAlt },
    ],
  },
];
