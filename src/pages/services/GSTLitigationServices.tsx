import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTLitigationServicesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTLitigationServices: React.FC<GSTLitigationServicesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Litigation Services",
    intro_title: "Robust Tax Defense",
    intro_p1: "We assist clients in providing the following services with respect to GST litigation services: Drafting appeals, submissions and replies to notices. Representing before adjudication and appellate authorities up to the tribunal.",
    intro_p2: "Briefing legal counsel for appearance before High Court & Supreme Court.",
    features: [
      { title: "Appeals & Submissions", desc: "Drafting appeals, comprehensive submissions, and precise replies to notices.", icon: "FileSignature" },
      { title: "Appellate Representation", desc: "Representing you before adjudication and appellate authorities up to the tribunal.", icon: "Landmark" },
      { title: "High Court & Supreme Court", desc: "Briefing expert legal counsel for appearance before highest courts.", icon: "Briefcase" }
    ],
    benefits: [
      { title: "Strong Defense", desc: "Robustly drafted submissions and replies to tax notices.", icon: "ShieldCheck" },
      { title: "Expert Representation", desc: "Professional representation across all levels of GST adjudication.", icon: "Users" },
      { title: "Counsel Coordination", desc: "Seamless briefing of senior legal counsel for high stakes litigation.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Notice Review",
      "Factual Analysis",
      "Drafting Submissions",
      "Authority Representation",
      "Appellate Briefing"
    ],
    faqs: [{ q: "Do you represent clients before the GST tribunal?", a: "Yes, we represent clients before adjudication and appellate authorities up to the tribunal." },
    { q: "Can you help with notices received from GST officers?", a: "Absolutely, we specialize in drafting appeals, submissions, and precise replies to GST notices." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
