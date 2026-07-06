import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PrivateLimitedCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PrivateLimitedCompany: React.FC<PrivateLimitedCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Private Limited Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Company Incorporation", desc: "End-to-end assistance in registering your Private Limited Company with MCA.", icon: "Building" },
      { title: "Name Approval", desc: "Checking name availability and filing RUN/SPICe+ for name reservation.", icon: "CheckCircle" },
      { title: "DSC & DIN Allotment", desc: "Acquiring Digital Signature Certificates and Director Identification Numbers.", icon: "ShieldCheck" },
      { title: "MoA & AoA Drafting", desc: "Expert drafting of the Memorandum and Articles of Association.", icon: "FileSignature" },
      { title: "PAN, TAN & GST", desc: "Simultaneous application for PAN, TAN, and GSTIN via agile pro.", icon: "Briefcase" },
      { title: "Compliance Setup", desc: "Initial setup of mandatory ROC compliance frameworks.", icon: "TrendingUp" }
    ],
    benefits: [
      { title: "Limited Liability", desc: "Personal assets are protected; liability is limited to the shares held.", icon: "ShieldCheck" },
      { title: "Separate Legal Entity", desc: "The company can own property, incur debt, and sue in its own name.", icon: "Landmark" },
      { title: "Fundraising", desc: "Easier to raise capital from venture capitalists, angel investors, and banks.", icon: "TrendingUp" },
      { title: "Credibility", desc: "Enhances trust among customers, suppliers, and stakeholders.", icon: "BadgeCheck" },
      { title: "Perpetual Succession", desc: "The company continues to exist irrespective of changes in directors or shareholders.", icon: "Users" }
    ],
    timeline: [
      "DSC Generation for Directors",
      "Name Approval via SPICe+ Part A",
      "Drafting MoA & AoA",
      "Filing SPICe+ Part B with MCA",
      "Issuance of Certificate of Incorporation (COI), PAN & TAN"
    ],
    faqs: [
      { q: "How many directors are required to form a Private Limited Company?", a: "A minimum of 2 directors and a maximum of 15 directors are allowed. At least one director must be an Indian resident." },
      { q: "What is the minimum capital requirement?", a: "There is no minimum paid-up capital requirement to start a Private Limited Company in India anymore." },
      { q: "Do I need a commercial space for the registered office?", a: "No, a residential address can also be used as the registered office by providing a No Objection Certificate (NOC) from the owner." },
      { q: "Can a foreign national be a director?", a: "Yes, a foreign national or NRI can be a director, provided at least one director is an Indian resident." },
      { q: "What are the annual compliance requirements?", a: "Annual compliances include holding Board/General Meetings, filing Annual Returns (MGT-7), Financial Statements (AOC-4), and Income Tax Returns." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
