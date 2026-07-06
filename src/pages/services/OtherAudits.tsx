import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OtherAuditsProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OtherAudits: React.FC<OtherAuditsProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Other Audits",
    intro_title: "Internal & Operational Audits",
    intro_p1: "Beyond statutory requirements, organizations need specialized internal audits to evaluate risks, project efficiency, and operational structures. We provide assurance on internal controls and procedures.",
    intro_p2: "Our risk-based approach focuses on evaluating existing business processes, identifying revenue leakages, and recommending practical solutions for up-gradation and policy revision.",
    features: [
      { title: "Internal Audit", desc: "Evaluating risks and making suggestions for policy up-gradation.", icon: "Search" },
      { title: "Concurrent Audit", desc: "Systematic and timely examination of financial transactions on a regular basis.", icon: "Clock" },
      { title: "Operational Audit", desc: "Determining whether internal policies produce an optimum level of efficiency.", icon: "Settings" },
      { title: "Project Audits", desc: "Phased assessment of inputs (cost/material) and outcomes of project milestones.", icon: "Briefcase" },
      { title: "Risk Assessment", desc: "Identifying risk factors and generating a comprehensive Risk Mitigation Report.", icon: "ShieldAlert" },
      { title: "Fund Utilization Review", desc: "Providing assurance to contributors that trust funds are utilized properly.", icon: "Wallet" }
    ],
    benefits: [
      { title: "Stronger Internal Controls", desc: "Identify weaknesses and implement improved methods of operations.", icon: "ShieldCheck" },
      { title: "Cost Reduction", desc: "Identify areas of revenue leakages and enforce practical cost reductions.", icon: "TrendingDown" },
      { title: "Early Warning Signals", desc: "Provides signals about company sickness or operational failure beforehand.", icon: "Activity" }
    ],
    timeline: [
      "Process Understanding",
      "Risk Identification",
      "Test of Controls",
      "Substantive Checking",
      "Management Reporting"
    ],
    faqs: [{ q: "What is a Concurrent Audit?", a: "It is a systematic examination of financial transactions on a regular basis emphasizing substantial checking rather than test checking." },
    { q: "How does Operational Audit help?", a: "It evaluates business SOPs and structures to determine if policies are producing an optimum level of efficiency and effectiveness." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
