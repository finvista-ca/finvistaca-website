import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface IndianSubsidiaryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const IndianSubsidiary: React.FC<IndianSubsidiaryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Indian Subsidiary",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Subsidiary Incorporation", desc: "Registration of an Indian subsidiary for a foreign parent company.", icon: "Building" },
      { title: "FEMA/RBI Compliance", desc: "Ensuring strict compliance with FDI guidelines, FEMA, and RBI reporting.", icon: "Globe" },
      { title: "Cross-Border Tax Advisory", desc: "Structuring to optimize withholding taxes and transfer pricing.", icon: "FileSignature" },
      { title: "Statutory Setup", desc: "Obtaining PAN, TAN, GST, and IEC codes.", icon: "Briefcase" },
      { title: "Drafting MoA & AoA", desc: "Drafting constitution documents tailored for wholly owned subsidiaries.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "Market Entry", desc: "Establish a legal presence in one of the world's fastest-growing economies.", icon: "TrendingUp" },
      { title: "Limited Liability", desc: "The foreign parent company's liability is limited to its shareholding in the Indian entity.", icon: "ShieldCheck" },
      { title: "FDI Benefits", desc: "100% FDI is allowed in most sectors under the automatic route.", icon: "BadgeCheck" },
      { title: "Local Operations", desc: "Can easily hire local talent, open bank accounts, and acquire property.", icon: "Users" }
    ],
    timeline: [
      "Notarization & Apostilling of Parent Company Documents",
      "DSC Generation for Foreign Directors",
      "Name Approval with MCA",
      "Filing Incorporation Forms with MCA",
      "FDI Reporting to RBI (FC-GPR) post-incorporation"
    ],
    faqs: [
      { q: "Can a foreign company own 100% of an Indian Subsidiary?", a: "Yes, a Wholly Owned Subsidiary (WOS) is allowed in sectors where 100% FDI is permitted under the automatic route." },
      { q: "Do the documents of the foreign parent need to be notarized?", a: "Yes, board resolutions, ID proofs, and incorporation documents from the foreign country must be notarized and apostilled/consularized." },
      { q: "Are resident Indian directors required?", a: "Yes, the Indian subsidiary must have at least two directors, and at least one of them must be an Indian resident." },
      { q: "What are the RBI reporting requirements?", a: "Upon receiving share capital from the foreign parent, the company must report the transaction to the RBI using the FC-GPR form within 30 days." },
      { q: "How are profits repatriated?", a: "Profits can be repatriated in the form of dividends to the parent company, subject to applicable Dividend Distribution Taxes and FEMA guidelines." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
