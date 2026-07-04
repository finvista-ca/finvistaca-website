import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface InternationalTaxAdvisoryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const InternationalTaxAdvisory: React.FC<InternationalTaxAdvisoryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "International Tax Advisory / Compliance",
    intro_title: "Navigating Global Taxation",
    intro_p1: "Introduction of international concepts, bringing frequent amendments in the legislation in relation to international transactions with increase in number of tax treaties signed by India with other countries have added significant uncertainties and responsibility on the CFOs and tax heads. As advisors, we help clients in meeting these new challenges and advise them on the appropriate course of action.",
    intro_p2: "More specifically, we provide advice on withholding tax matters, determining the existence of permanent establishment (‘PE’) in India for a non-resident, advising on mitigating the PE exposure, advise on foreign tax credits, filing returns for non-residents and providing tax planning opportunities in relation to any international transaction which are within the legal framework of the law. We also advise clients on any inbound/ outbound investment into/ outside India and help them to choose the right jurisdiction with the right funding option such that the investor yields a higher return.",
    features: [
      { title: "Withholding Tax Advice", desc: "Guidance on cross-border withholding tax and DTAA applicability.", icon: "Globe" },
      { title: "PE Exposure Mitigation", desc: "Determining the existence of a Permanent Establishment (PE) in India and mitigating exposure.", icon: "ShieldCheck" },
      { title: "Foreign Tax Credits", desc: "Advising on the availability and claiming of foreign tax credits.", icon: "FileText" },
      { title: "Non-Resident Returns", desc: "Assistance in filing tax returns for non-residents and foreign companies.", icon: "Building" },
      { title: "Inbound / Outbound Investment", desc: "Advising on cross-border investments and selecting optimal jurisdictions.", icon: "TrendingUp" },
      { title: "Funding Options", desc: "Helping choose the right funding option for foreign investors to yield a higher return.", icon: "Wallet" }
    ],
    benefits: [
      { title: "Cross-border Compliance", desc: "Stay compliant with international tax treaties and complex Indian tax laws.", icon: "Globe" },
      { title: "Risk Mitigation", desc: "Minimize risks associated with Permanent Establishment (PE) and withholding taxes.", icon: "ShieldCheck" },
      { title: "Strategic Structuring", desc: "Innovative solutions for international transactions that meet client requirements.", icon: "BadgeCheck" },
      { title: "Optimal Jurisdiction", desc: "Guidance on choosing the most favorable jurisdictions for your investments.", icon: "TrendingUp" }
    ],
    timeline: [
      "Requirement Analysis",
      "Jurisdictional Strategy",
      "Tax Planning",
      "Documentation",
      "Execution & Compliance"
    ],
    faqs: [
{ q: "What is a Permanent Establishment (PE) and why does it matter?", a: "A PE is a fixed place of business that gives rise to tax liability in another jurisdiction. We help determine if a PE exists for non-residents in India and advise on mitigating exposure." },
    { q: "Do you provide advice on foreign tax credits?", a: "Yes, we advise clients on how to legally claim foreign tax credits in compliance with relevant tax treaties." },
    { q: "Can you assist non-residents with their Indian tax returns?", a: "Absolutely. We specialize in preparing and filing income tax returns for non-residents operating or investing in India." },
    { q: "How do you assist with inbound and outbound investments?", a: "We advise clients on selecting the right jurisdiction and funding option for cross-border investments to maximize returns and ensure compliance." },
    { q: "Do you offer solutions for complex international transactions?", a: "Yes, our main focus is on researching and developing innovative tax solutions for international transactions tailored to client requirements." },
    { q: "Are your international tax strategies legally compliant?", a: "Yes, all our international tax planning and structuring advice is provided strictly within the legal framework of the law and applicable tax treaties." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
