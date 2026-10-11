import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Reveal from "../components/common/reveal/Reveal";
import Hero from "../components/hero/Hero";
import Profile from "../components/profile/Profile";
import HappyClients from "../components/happyClients/HappyClients";
import Profession from "../components/profession/Profession";
import Internship from "../components/internship/Internship";
import Portfolio from "../components/portfolio/Portfolio";
import WorkProcess from "../components/workProcess/WorkProcess";
import CoreTooling from "../components/tooling/CoreTooling";
import CurrentlyLearning from "../components/workProcess/CurrentlyLearning";
import WorkTogether from "../components/workTogether/WorkTogether";
import CtfRanges from "../components/ctf/CtfRanges";
import Credentials from "../components/credentials/Credentials";
import Blog from "../components/blog/Blog";
import Faq from "../components/faq/Faq";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";

const HOME_TITLE = "Ali Ameer | IT Support, Cybersecurity Associate & Aspiring Red Team Operator";

const Home = () => {
  const { state } = useLocation();

  useEffect(() => {
    document.title = HOME_TITLE;
  }, []);

  // Arrived from /projects, /blog or 404 via a nav item: scroll to that section.
  useEffect(() => {
    if (!state?.scrollTo) return undefined;
    const t = setTimeout(
      () => scroller.scrollTo(state.scrollTo, { smooth: true, duration: 700, offset: -90 }),
      150
    );
    return () => clearTimeout(t);
  }, [state]);

  // Each block gets its own background shade + grid overlay (see index.css).
  return (
    <div className="relative">
      <div className="sec sec-hero"><Hero /></div>
      <Reveal className="sec sec-about"><Profile /></Reveal>
      <Reveal className="sec sec-impact"><HappyClients /></Reveal>
      <Reveal className="sec sec-skills"><Profession /></Reveal>
      <Reveal className="sec sec-internship"><Internship /></Reveal>
      <Reveal className="sec sec-projects"><Portfolio /></Reveal>
      <Reveal className="sec sec-skills"><WorkProcess /><CurrentlyLearning /></Reveal>
      <Reveal className="sec sec-tooling"><CoreTooling /></Reveal>
      <Reveal className="sec sec-credentials"><CtfRanges variant="home" index="12" /></Reveal>
      <Reveal className="sec sec-terminal"><WorkTogether /></Reveal>
      <Reveal className="sec sec-credentials"><Credentials /></Reveal>
      <Reveal className="sec sec-blog"><Blog /></Reveal>
      <Reveal className="sec sec-faq"><Faq /></Reveal>
      <Reveal className="sec sec-testimonial"><Testimonial /></Reveal>
      <Reveal className="sec sec-contact"><Contact /></Reveal>
    </div>
  );
};

export default Home;
