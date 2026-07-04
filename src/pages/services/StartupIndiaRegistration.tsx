import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface StartupIndiaRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const StartupIndiaRegistration: React.FC<StartupIndiaRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Startup India Registration",
    intro_title: "DPIIT Recognition for Startups",
    intro_p1: "Startup India Registration enables eligible startups to receive recognition from the Department for Promotion of Industry and Internal Trade (DPIIT), unlocking a wide range of government benefits, tax exemptions, and funding opportunities.",
    intro_p2: "Finvista assists entrepreneurs in obtaining Startup India recognition by evaluating eligibility, preparing documentation, filing applications, and providing end-to-end advisory support for compliance and fundraising readiness.",
    features: [
      { title: "Eligibility Evaluation", desc: "Checking if your business meets the innovative and scalable criteria for DPIIT.", icon: "Search" },
      { title: "Application Filing", desc: "Drafting the pitch deck and filing the DPIIT recognition application.", icon: "FileText" },
      { title: "Tax Exemption Support", desc: "Assistance in applying for Section 80IAC tax holidays.", icon: "Wallet" },
      { title: "IP Protection", desc: "Guidance on fast-tracking trademark and patent applications with reduced fees.", icon: "ShieldCheck" },
      { title: "Fundraising Readiness", desc: "Advisory on business structuring to attract angel investors and VCs.", icon: "TrendingUp" },
      { title: "Compliance Management", desc: "Guidance on self-certification for labour and environmental laws.", icon: "Settings" }
    ],
    benefits: [
      { title: "Tax Holidays", desc: "Eligible startups can claim a 100% tax rebate on profit for 3 consecutive years.", icon: "BadgeCheck" },
      { title: "Easier Funding", desc: "Access to government fund of funds, angel tax exemptions, and easier investments.", icon: "Wallet" },
      { title: "Public Procurement", desc: "Easier access to government tenders with exemption from prior experience criteria.", icon: "Briefcase" }
    ],
    timeline: [
      "Pitch Deck Preparation",
      "Application Drafting",
      "DPIIT Submission",
      "Clarifications (If any)",
      "Recognition Granted"
    ],
    faqs: [
{ q: "Who is eligible for Startup India?", a: "Private Limited Companies, LLPs, and Registered Partnerships working towards innovation, development, or scalable business models." },
    { q: "What are the tax benefits?", a: "Recognized startups can apply for an income tax exemption for 3 consecutive years under Section 80IAC." },
    { q: "Is the DPIIT recognition permanent?", a: "An entity is considered a startup up to 10 years from the date of its incorporation." },
    { q: "Can I get help with trademark registration?", a: "Yes, recognized startups receive an 80% rebate on patent filings and a 50% rebate on trademark filings." },
    { q: "Do I need to submit a business plan?", a: "Yes, a brief note or pitch deck explaining the innovativeness and scalability of your product/service is required." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
