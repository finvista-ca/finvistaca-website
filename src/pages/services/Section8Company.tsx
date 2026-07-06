import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface Section8CompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Section8Company: React.FC<Section8CompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Section 8 Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Section 8 Incorporation", desc: "Registration of NGOs/NPOs under Section 8 of the Companies Act.", icon: "HeartHandshake" },
      { title: "License Procurement", desc: "Obtaining the mandatory Section 8 License from the Central Government.", icon: "FileSignature" },
      { title: "Drafting Trust Deeds/MoA", desc: "Specialized drafting emphasizing non-profit objectives.", icon: "FileText" },
      { title: "12A & 80G Registration", desc: "Filing for income tax exemptions and donor deduction benefits.", icon: "ShieldCheck" },
      { title: "FCRA Registration", desc: "Assistance with FCRA if you intend to receive foreign contributions.", icon: "Globe" }
    ],
    benefits: [
      { title: "Tax Exemptions", desc: "Eligible for massive tax exemptions under section 12A and 80G.", icon: "Wallet" },
      { title: "No Minimum Capital", desc: "Can be formed without any minimum paid-up share capital requirement.", icon: "TrendingUp" },
      { title: "Corporate Identity", desc: "Enjoys better credibility with government bodies and donors compared to Trusts/Societies.", icon: "BadgeCheck" },
      { title: "No Title Required", desc: "Exempted from using 'Private Limited' or 'Limited' in its name.", icon: "CheckCircle" }
    ],
    timeline: [
      "DSC & DIN for Directors",
      "Name Approval (must include words like Foundation, Forum, Association)",
      "Applying for Section 8 License (Form INC-12)",
      "Filing Incorporation forms (SPICe+)",
      "Applying for 12A & 80G registrations post-incorporation"
    ],
    faqs: [
      { q: "What is a Section 8 Company?", a: "It is a company registered for charitable or not-for-profit purposes, where profits are applied solely toward promoting its objectives, and no dividends are paid to members." },
      { q: "Can directors draw a salary?", a: "Generally, directors in a Section 8 company work in an honorary capacity, but they may be remunerated for professional services rendered if permitted by the AoA." },
      { q: "What happens if a Section 8 company closes?", a: "Upon winding up, any remaining assets cannot be distributed to members; they must be transferred to another Section 8 company with similar objects." },
      { q: "Is 12A and 80G registration automatic?", a: "No, after incorporating the company, separate applications must be made to the Income Tax Department for these exemptions." },
      { q: "Can a Section 8 company receive foreign funds?", a: "Yes, but only after obtaining an FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
