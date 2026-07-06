import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface SocietyRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const SocietyRegistration: React.FC<SocietyRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Society Registration",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Society Registration", desc: "Registering under the Societies Registration Act, 1860.", icon: "Building" },
      { title: "Drafting MoA & Rules", desc: "Drafting the Memorandum and Rules & Regulations.", icon: "FileSignature" },
      { title: "State Level Processing", desc: "Filing and liaising with the local Registrar of Societies.", icon: "FileText" },
      { title: "12A & 80G Approval", desc: "Applying for tax exemption certificates.", icon: "ShieldCheck" },
      { title: "NITI Aayog Registration", desc: "Registering on NGO Darpan for government grants.", icon: "Globe" }
    ],
    benefits: [
      { title: "Legal Recognition", desc: "Provides a formal structure for charitable, literary, or scientific purposes.", icon: "BadgeCheck" },
      { title: "Tax Benefits", desc: "Eligible for income tax exemptions and donor benefits.", icon: "Wallet" },
      { title: "Government Grants", desc: "Eligible to receive state and central government funding.", icon: "TrendingUp" },
      { title: "Democratic Control", desc: "Operates through a governing body elected by members.", icon: "Users" }
    ],
    timeline: [
      "Finalizing Name and Objectives",
      "Drafting Memorandum and Rules & Regulations",
      "Gathering Affidavits and KYC from 7 Members",
      "Submission to Registrar of Societies",
      "Issuance of Registration Certificate"
    ],
    faqs: [
      { q: "How many members are required to form a Society?", a: "A minimum of 7 members are required to form a state-level society. For a national-level society, members from at least 7 different states are required." },
      { q: "What is the difference between a Trust and a Society?", a: "A Trust is managed by a Board of Trustees with usually permanent tenure, whereas a Society operates democratically with a governing body elected periodically." },
      { q: "Can family members form a Society?", a: "No, most Registrars require that members of the governing body should not be related by blood or marriage to prevent conflict of interest." },
      { q: "Does a Society need to file annual returns?", a: "Yes, a Society must file an annual list of governing body members and audited financials with the Registrar of Societies." },
      { q: "Can a Society be dissolved?", a: "Yes, a Society can be dissolved by a vote of at least 3/5ths of its members. Assets must be given to another similar society, not to members." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
