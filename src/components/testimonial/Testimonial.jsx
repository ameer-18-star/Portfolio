import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";
import "./testimonial.css";

// Testimonials are shown only when a real name, role, org and LinkedIn
// profile link exist. Anonymous or unverifiable quotes are not shown.
// To add one: { quote, name, role, org, linkedIn } all five required.
const testimonialData = [];

const proofLinks = [
  {
    label: "GitHub ameer-18-star",
    sub: "VaultKeeper, NetSniff, ScopeSentry, labs repo",
    href: "https://github.com/ameer-18-star",
  },
  {
    label: "Parry Security leaderboard",
    sub: "Rank 14 · 720 pts · 30 of 33 tasks",
    href: null, // add leaderboard URL or screenshot link when available
  },
  {
    label: "VortexTech internship tasks",
    sub: "4 of 4 weeks · 100% completion · repo linked",
    href: "https://github.com/ameer-18-star/Vortextech_Cybersecurity_Internship_Tasks",
  },
  {
    label: "VMSOIT CompTIA A+ course",
    sub: "Full syllabus on YouTube · 30M+ organic views (self-reported)",
    href: null, // add YouTube playlist URL when available
  },
];

const Testimonial = () => {
  const hasTestimonials = testimonialData.length > 0;

  return (
    <section className="content px-4 py-20">
      <span className="section-eyebrow block text-center">16 // SOCIAL PROOF</span>
      <h2 className="section-title mt-2 mb-4 text-center">Proof You Can Check</h2>
      <p className="text-muted text-sm text-center mb-10 max-w-xl mx-auto">
        Named LinkedIn recommendations will appear here once received. Until then, here is
        verifiable proof every link opens a real page.
      </p>

      {hasTestimonials ? (
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
          }}
          className="testimonial-swiper max-w-5xl mx-auto pb-12"
        >
          {testimonialData.map((t, i) => (
            <SwiperSlide key={i} className="h-auto pb-1">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {proofLinks.map((p) => (
            <div key={p.label} className="glass-panel p-5 hover:glow-cyan hover:border-cyan/40 transition-all duration-300">
              <p className="font-display font-semibold text-sm mb-1">{p.label}</p>
              <p className="text-muted text-xs mb-3">{p.sub}</p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-cyan hover:underline"
                >
                  Open ↗
                </a>
              ) : (
                <span className="font-mono text-xs text-muted">Link pending</span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonial;
