import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PublicLimitedCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PublicLimitedCompany: React.FC<PublicLimitedCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Public Limited Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Public Company Incorporation", desc: "Complete assistance in registering a Public Limited Company.", icon: "Building" },
      { title: "DSC & DIN", desc: "Procurement of Digital Signatures and Director Identification Numbers for all 3+ directors.", icon: "ShieldCheck" },
      { title: "MoA & AoA Drafting", desc: "Customized drafting of Memorandum and Articles complying with the Companies Act.", icon: "FileSignature" },
      { title: "Statutory Registrations", desc: "PAN, TAN, GST, and PF/ESI registrations.", icon: "Briefcase" },
      { title: "Compliance Setup", desc: "Guidance on rigorous ROC and SEBI (if listed) compliance.", icon: "TrendingUp" }
    ],
    benefits: [
      { title: "Limited Liability", desc: "Shareholder liability is limited to their investment.", icon: "ShieldCheck" },
      { title: "Massive Fundraising", desc: "Ability to raise capital from the general public via IPOs or public deposits.", icon: "TrendingUp" },
      { title: "High Credibility", desc: "Public companies enjoy the highest level of corporate transparency and trust.", icon: "BadgeCheck" },
      { title: "Easy Transferability", desc: "Shares of a public company are freely transferable.", icon: "Users" }
    ],
    timeline: [
      "DSC & DIN for all Minimum 3 Directors",
      "Name Approval (RUN/SPICe+ Part A)",
      "Drafting specialized MoA & AoA for Public Companies",
      "Filing Incorporation forms (SPICe+ Part B) with MCA",
      "Obtaining COI, PAN, and TAN"
    ],
    faqs: [
      { q: "What is the minimum requirement for a Public Limited Company?", a: "It requires a minimum of 3 directors and 7 shareholders. There is no minimum capital requirement." },
      { q: "Can a Private Limited Company be converted to a Public Limited Company?", a: "Yes, by passing a special resolution, altering the MoA and AoA, and increasing the number of members to 7 and directors to 3." },
      { q: "Is listing on a stock exchange mandatory?", a: "No, a Public Limited Company can be unlisted. Listing on the BSE/NSE is a separate process known as an Initial Public Offering (IPO)." },
      { q: "What are the compliance burdens?", a: "Public companies have strict compliance norms including mandatory audits, quarterly reporting (if listed), appointing KMPs, and holding statutory meetings." },
      { q: "Can a public company raise funds from the public?", a: "Yes, subject to SEBI regulations, a public company can issue a prospectus and invite the public to subscribe to its shares." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
