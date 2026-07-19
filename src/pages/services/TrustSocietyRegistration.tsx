import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TrustSocietyRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TrustSocietyRegistration: React.FC<TrustSocietyRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Trust & Society Registration",
    intro_title: "Establish Your Charitable Organization",
    intro_p1: "Trust and Society Registration provides legal recognition to organizations established for charitable, educational, religious, cultural, social, or public welfare purposes, enhancing credibility and facilitating fundraising.",
    intro_p2: "Choosing the right legal structure depends on the objectives and governance model. FinvistaCA offers comprehensive advisory and registration services, including drafting trust deeds, bye-laws, and post-registration compliance.",
    features: [
      { title: "Trust Registration", desc: "Registration of Public Charitable Trusts under the Indian Trusts Act.", icon: "Landmark" },
      { title: "Society Registration", desc: "Registration of Societies under the Societies Registration Act, 1860.", icon: "Users" },
      { title: "Drafting Deeds", desc: "Professional drafting of Trust Deeds and Memorandum of Association.", icon: "FileSignature" },
      { title: "Bye-Laws Creation", desc: "Structuring operational rules and governance bye-laws for societies.", icon: "Settings" },
      { title: "Tax Exemptions", desc: "Guidance on subsequent 12A and 80G registrations for tax benefits.", icon: "Wallet" },
      { title: "Compliance Support", desc: "Post-registration advisory to ensure smooth and transparent operations.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Legal Recognition", desc: "Operate legally as a recognized entity capable of holding property and assets.", icon: "BadgeCheck" },
      { title: "Fundraising Ability", desc: "Receive donations, grants, and government support securely.", icon: "TrendingUp" },
      { title: "Tax Exemptions", desc: "Eligible to apply for income tax exemptions under Sections 12A and 80G.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Structure Advisory",
      "Drafting Deed/MOA",
      "Document Collation",
      "Sub-Registrar Submission",
      "Certificate Issuance"
    ],
    faqs: [
{ q: "What is the difference between a Trust and a Society?", a: "A Trust is usually formed by a smaller group with a specific property for charity, while a Society is a more democratic setup of members working for a common cause." },
    { q: "How many members are needed?", a: "A minimum of 2 trustees are needed for a Trust, and a minimum of 7 members are needed for a Society." },
    { q: "Is the registration valid across India?", a: "Trusts can operate across India. Societies usually operate state-wide unless registered as a National Level Society." },
    { q: "Do Trusts need to pay income tax?", a: "Trusts are taxable unless they apply and obtain a 12A registration from the Income Tax Department." },
    { q: "Can family members be trustees?", a: "Yes, but to obtain tax exemptions like 80G, it is highly recommended to have a majority of non-blood relative trustees." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
