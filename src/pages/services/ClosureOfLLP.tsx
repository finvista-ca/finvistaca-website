import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ClosureOfLLPProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ClosureOfLLP: React.FC<ClosureOfLLPProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Closure of LLP",
    intro_title: "Strike Off Defunct LLPs",
    intro_p1: "The Ministry of Corporate Affairs launched LLP Form 24 via an alteration in the Limited Liability Partnership Rules. The LLP which is not leading on any business plan since incorporation or terminates carrying on the profession for one year can apply to ROC to strike off the name.",
    intro_p2: "The failure penalty for LLPs defaulting in any sanctioned filing return is Rs.100 per day. Therefore, it is the most desirable option to windup dormant LLPs to avoid needless penalty.",
    features: [
      { title: "LLP Form 24", desc: "Filing the official form to remove the name of the LLP.", icon: "FileText" },
      { title: "Cease Commercial Activity", desc: "The LLP must originally cease all business ventures before applying.", icon: "XOctagon" },
      { title: "Close Bank Accounts", desc: "Evidencing cessation letter of the closed bank account from the bank.", icon: "Building" },
      { title: "Indemnity Bonds", desc: "Partners must perform a statement of fact and Indemnity Bond.", icon: "ShieldCheck" },
      { title: "CA Certificate", desc: "Account statement revealing zero assets/liabilities approved by a CA.", icon: "BadgeCheck" },
      { title: "Clear Pending Returns", desc: "Ensure Form 8 and Form 11 are filed up to the cessation date.", icon: "FileSignature" }
    ],
    benefits: [
      { title: "Avoid Huge Penalties", desc: "Stop the endless Rs.100 per day penalty for non-filing of dormant LLP returns.", icon: "ShieldAlert" },
      { title: "Legal Closure", desc: "Formally strike off the LLP name from the MCA register.", icon: "BadgeCheck" },
      { title: "Clean Slate", desc: "Free the partners from ongoing statutory obligations.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Cease Business",
      "Close Bank Accounts",
      "Draft Declarations & Bonds",
      "Obtain CA Certificate",
      "File Form 24"
    ],
    faqs: [
{ q: "Who is eligible to file for closure?", a: "An LLP not carrying on business for one year or longer, with no liabilities or open bank accounts." },
    { q: "Do I need to file pending returns before closing?", a: "Yes, any delayed return in Form 8 and Form 11 up to the financial year of cessation must be filed." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
