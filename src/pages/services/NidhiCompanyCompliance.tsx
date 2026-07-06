import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NidhiCompanyComplianceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NidhiCompanyCompliance: React.FC<NidhiCompanyComplianceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Nidhi Company Compliance",
    intro_title: "Secure Mutual Benefit Finance",
    intro_p1: "Like every company, Nidhi Company also consists of a few annual compliances popularly known as Nidhi Company Compliances. The statutory compliances are disclosed in Nidhi Rules 2014 and the Companies Act 2013.",
    intro_p2: "It is necessary for Nidhi Company to meet all the compliances to give a clear picture of the work status and performance of the company during a period.",
    features: [
      { title: "NDH-1 Return", desc: "Return of Statutory Compliances filed within 90 days from the end of the financial year.", icon: "FileText" },
      { title: "NDH-3 Return", desc: "Half-yearly return form filed by the Nidhi Company.", icon: "Calendar" },
      { title: "NDH-2 Form", desc: "Appeal for time extension if failing to add 200 members.", icon: "Clock" },
      { title: "AOC-4 Filing", desc: "Filing financial statements with the MCA.", icon: "BarChart" },
      { title: "MGT-7 Filing", desc: "Filing the Annual Return with the Registrar.", icon: "FileCheck" },
      { title: "Income Tax Returns", desc: "Annual income tax return filing by 30th September.", icon: "Wallet" }
    ],
    benefits: [
      { title: "Clear Insights", desc: "Compliances help in forming exact insights about the company’s working performance.", icon: "TrendingUp" },
      { title: "Stakeholder Protection", desc: "Protects the interest of its stakeholders as required for public companies.", icon: "ShieldCheck" },
      { title: "Avoid Penalties", desc: "Prevent fines up to Rs 5000 and Rs 500 continuously for non-compliance.", icon: "ShieldAlert" }
    ],
    timeline: [
      "NDH-3 (Half Yearly)",
      "NDH-1 (90 Days from FY End)",
      "AGM (Before 30th Sept)",
      "AOC-4 (30 days post AGM)",
      "MGT-7 (60 days post AGM)"
    ],
    faqs: [{ q: "What happens if a Nidhi company fails to add 200 members?", a: "The company must file form NDH-2 with the Regional Director to appeal for a time extension." },
    { q: "What is the penalty for non-compliance in a Nidhi company?", a: "Officials will be fined up to Rs 5000 initially, with an additional fine of Rs 500 per day if the infringement continues." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
