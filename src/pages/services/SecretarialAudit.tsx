import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface SecretarialAuditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const SecretarialAudit: React.FC<SecretarialAuditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Secretarial Audit",
    intro_title: "Corporate Governance & Compliance",
    intro_p1: "The Secretarial Audit is an audit where the Secretarial Auditor expresses an opinion as to whether there exist appropriate systems and processes to check compliance with applicable laws, rules, regulations, and guidelines.",
    intro_p2: "It is an independent process intended to add value and improve the operations of the company, providing necessary comfort to management, regulators, and stakeholders regarding good governance.",
    features: [
      { title: "Listed Companies", desc: "Mandatory secretarial audit for every listed company.", icon: "Landmark" },
      { title: "Paid-up Capital > 50 Cr", desc: "Applicable to public companies with paid-up capital of Rs 50 crore or more.", icon: "BarChart" },
      { title: "Turnover > 250 Cr", desc: "Applicable to public companies with a turnover of Rs 250 crore or more.", icon: "TrendingUp" },
      { title: "Borrowings > 100 Cr", desc: "Applicable to companies having a borrowing of Rs 100 crores or more.", icon: "Wallet" },
      { title: "Companies Act 2013", desc: "Verification of records under the Act and rules made thereunder.", icon: "BookOpen" },
      { title: "SEBI & FEMA", desc: "Checking compliances associated with SEBI Regulations and FEMA.", icon: "Globe" }
    ],
    benefits: [
      { title: "Effective Due Diligence", desc: "Provides comfort to prospective acquirers or joint venture partners.", icon: "Search" },
      { title: "Risk Indemnification", desc: "Indemnifies owners that affairs are conducted legally without undue risk.", icon: "ShieldCheck" },
      { title: "Investor Confidence", desc: "Shows the right path to investors by showcasing your clean legal records.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Appointment of Auditor",
      "Preliminary Discussions",
      "Audit Plan Finalization",
      "Testing & Analysis",
      "Submission of Report"
    ],
    faqs: [
{ q: "Who can be appointed as a Secretarial Auditor?", a: "Only members of the ICSI holding a valid certificate of practice can conduct a Secretarial Audit." },
    { q: "What happens if there are false statements in the audit?", a: "Under Section 448 of the Companies Act, making false material statements is subject to severe penalties under Section 447." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
