import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface AgreedUponProceduresProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const AgreedUponProcedures: React.FC<AgreedUponProceduresProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Agreed Upon Procedures",
    intro_title: "Tailored Factual Findings",
    intro_p1: "In the day-to-day operations of today’s business, we are required to issue a report of factual findings based on specified procedures. We perform on specified subject matter of specified elements as required by the clients.",
    intro_p2: "Having adequate knowledge of the business and industry, we help with specific procedures such as transactions with related parties, sales, and profit of specific segments to carve out precise financial statements.",
    features: [
      { title: "Scope Definition", desc: "Client and auditor jointly agree on the exact procedures to be performed.", icon: "Target" },
      { title: "Related Party Transactions", desc: "Specific checking of transactions involving related parties.", icon: "Users" },
      { title: "Segment Profitability", desc: "Deep dive into the sales and profit metrics of a specific business segment.", icon: "BarChart" },
      { title: "Factual Reporting", desc: "Delivering a report based strictly on factual findings without formal assurance.", icon: "FileText" }
    ],
    benefits: [
      { title: "Highly Customizable", desc: "You pay only for the exact procedures and checks you need.", icon: "Settings" },
      { title: "Targeted Insights", desc: "Get precise factual data on specific departments or transactions.", icon: "Search" },
      { title: "Clear Deliverables", desc: "Receive a transparent report of factual findings for internal management use.", icon: "CheckCircle" }
    ],
    timeline: [
      "Scope Agreement",
      "Procedure Definition",
      "Execution",
      "Factual Analysis",
      "Report of Findings"
    ],
    faqs: [{ q: "How is an Agreed Upon Procedure different from an Audit?", a: "In an AUP, the auditor simply performs the procedures agreed with the client and reports factual findings without expressing an audit opinion or assurance." },
    { q: "When should I use Agreed Upon Procedures?", a: "When you need an independent professional to verify specific financial elements, like accounts receivable or related party transactions, without needing a full audit." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
