import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TransferPricingStudyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TransferPricingStudy: React.FC<TransferPricingStudyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Transfer Pricing Study / Documentation",
    intro_title: "Arm's Length Accuracy",
    intro_p1: "The Indian transfer pricing regulations requires the pricing of any international transactions between related parties to be at arm’s length and needs to be justified using the prescribed methods. Transfer pricing requires a strong understanding of the facts of the company as well as the industry in order to determine the appropriate arms’ length price.",
    intro_p2: "Since these are fact driven, there are generally disputed by the tax authorities at lower level if the same are not adequately captured in the documentation. Transfer pricing is one of the most challenging tax issues in India and across the world and has a key influence on a company’s worldwide tax burden. Further, with action plans and amendment in the local laws and treaty to address the Base Erosion and Profit Shifting (BEPS) and General Anti Avoidance Provisions, maintaining of robust documentation & have the substance in place becomes very crucial for the corporate to defend its arm’s length test. We assist clients in determining the arm’s length price, maintaining documentation to support the price adopted by the company before the tax authorities, providing planning opportunities at a group level. We also help clients in determining the right supply chain model or business model to optimize the effective tax rate at the Group level.",
    features: [
      { title: "Arm's Length Pricing", desc: "Determining accurate arm's length prices using prescribed methods.", icon: "CheckCircle" },
      { title: "Robust Documentation", desc: "Creating comprehensive transfer pricing documentation to defend your pricing.", icon: "FileText" },
      { title: "BEPS Compliance", desc: "Ensuring compliance with Base Erosion and Profit Shifting (BEPS) regulations.", icon: "ShieldCheck" },
      { title: "Supply Chain Optimization", desc: "Determining the right supply chain model to optimize the effective tax rate.", icon: "TrendingUp" },
      { title: "Group Level Planning", desc: "Providing strategic tax planning opportunities at a corporate group level.", icon: "Building" },
      { title: "Tax Authority Defense", desc: "Supporting the price adopted by the company before tax authorities.", icon: "Briefcase" }
    ],
    benefits: [
      { title: "Defend Against Tax Authorities", desc: "Robust, fact-driven documentation that withstands lower-level tax scrutiny.", icon: "ShieldCheck" },
      { title: "Optimize Global Tax Rate", desc: "Smart supply chain modeling to optimize your group's effective tax rate.", icon: "TrendingUp" },
      { title: "BEPS Defense", desc: "Stay compliant with Base Erosion and Profit Shifting (BEPS) action plans.", icon: "CheckCircle" },
      { title: "Industry Specific Insight", desc: "Arm's length analysis tailored to the specific facts of your industry.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Initial Assessment",
      "Economic Analysis",
      "Arm's Length Pricing",
      "Documentation & Reporting",
      "Ongoing Support"
    ],
    faqs: [
{ q: "What is an arm's length price?", a: "An arm's length price is the price that would be paid for a transaction between unrelated parties. Indian transfer pricing regulations require international transactions between related parties to be justified at this price." },
    { q: "Why is transfer pricing documentation so important?", a: "Transfer pricing is highly fact-driven and often disputed by tax authorities. Robust documentation is crucial to defend the arm's length price adopted by your company." },
    { q: "How do you help with BEPS compliance?", a: "We ensure your company maintains the necessary robust documentation and 'substance' to address amendments related to Base Erosion and Profit Shifting (BEPS) and General Anti Avoidance Provisions." },
    { q: "Can you assist with group-level tax optimization?", a: "Yes, we help clients determine the right supply chain or business model to optimize the effective tax rate at the Group level." },
    { q: "Do you support companies during tax authority audits?", a: "Absolutely. We maintain documentation and provide support to defend the adopted arm's length price before tax authorities." },
    { q: "How do you determine the appropriate arm's length price?", a: "We develop a strong understanding of your company's facts and industry dynamics to apply the prescribed methods and determine the correct price." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
