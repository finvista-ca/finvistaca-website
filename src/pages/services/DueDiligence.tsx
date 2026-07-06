import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface DueDiligenceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const DueDiligence: React.FC<DueDiligenceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Due Diligence",
    intro_title: "Business Transaction Assessment",
    intro_p1: "Due diligence is an inspection and risk assessment of an upcoming business transaction. It is a background check to make sure that the parties to the transaction have the required information they need to proceed.",
    intro_p2: "A proper due diligence reveals misrepresentation and fraudulent dealings in major transactions like Mergers & Acquisitions, Partnerships, and Joint Enterprises.",
    features: [
      { title: "Mergers & Acquisitions", desc: "Comprehensive analysis of financials, litigation, and patents for buyers/sellers.", icon: "Briefcase" },
      { title: "Joint Ventures", desc: "Reliability checks and technical/financial collaboration assessments.", icon: "Users" },
      { title: "Capitalization Analysis", desc: "Examining company value, stock price volatility, and destination markets.", icon: "TrendingUp" },
      { title: "Tax Due Diligence", desc: "Uncovering tax exposures, liabilities, and structuring tax-efficient deals.", icon: "FileText" },
      { title: "Risk Assessment", desc: "Identifying industry-wide and company-specific short and long-term risks.", icon: "ShieldAlert" },
      { title: "Data Room Creation", desc: "Establishing secure virtual data rooms for confidential document exchange.", icon: "Lock" }
    ],
    benefits: [
      { title: "Deal Breakers Identified", desc: "Uncover glaring non-compliances or criminal proceedings before signing.", icon: "XOctagon" },
      { title: "Deal Diluters Quantified", desc: "Identify violations that could result in diminishing the value of the company.", icon: "TrendingDown" },
      { title: "Future Protection", desc: "Negotiate robust protection mechanisms based on factual reporting.", icon: "ShieldCheck" }
    ],
    timeline: [
      "Pre-Diligence & NDA",
      "Data Room Creation",
      "Diligence Process",
      "Report Generation",
      "Post-Diligence Negotiation"
    ],
    faqs: [{ q: "How is Due Diligence different from Statutory Audit?", a: "Unlike a statutory audit which relies on historical data and is mandatory, due diligence covers future growth prospects, business plans, and is transaction-based." },
    { q: "What is a Deal Cautioner?", a: "It covers findings that may not impact financials but require the investor to proceed cautiously with fixable non-compliances." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
