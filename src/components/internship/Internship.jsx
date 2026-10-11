import { useState } from "react";
import { internships } from "../../data/internships";
import InternshipCard from "./InternshipCard";
import CertificateModal from "./CertificateModal";
import TaskBreakdownModal from "./TaskBreakdownModal";
import "./internship.css";

const Internship = () => {
  const [certificate, setCertificate] = useState(null);
  const [taskInternship, setTaskInternship] = useState(null);

  return (
    <section id="internships" className="content px-4 py-20">
      <span className="section-eyebrow">06 // INTERNSHIPS</span>
      <h2 className="section-title mt-2 mb-3">Remote Cybersecurity Internships</h2>
      <p className="text-muted text-sm mb-10 max-w-2xl">
        Two remote programs completed in 2024–2025. Each card shows the actual result, the tools
        used and the status of the certificate link. Tags mark what is verified, on file or still
        pending.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {internships.map((i) => (
          <InternshipCard key={i.id} internship={i} onViewCertificate={setCertificate} onViewTasks={setTaskInternship} />
        ))}
      </div>

      <CertificateModal certificate={certificate} onClose={() => setCertificate(null)} />
      <TaskBreakdownModal internship={taskInternship} onClose={() => setTaskInternship(null)} />
    </section>
  );
};

export default Internship;
