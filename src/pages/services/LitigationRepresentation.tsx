import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface LitigationRepresentationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const LitigationRepresentation: React.FC<LitigationRepresentationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Litigation / Representation Assistance",
    intro_title: "Expert Tax Representation",
    intro_p1: "We represent clients at all stages from assessments proceedings to appellate proceedings (as well as Authority for Advance Rulings) to resolve tax disputes (including transfer pricing disputes). With respect to representation before High Court and Supreme Court, we have also liaised with the counsel for arguing the matter before the said Court.",
    intro_p2: "We also assist clients in preparing legal and factual submissions to be made before the tax authorities/ appellate authorities in order to support their claim in the assessment/ litigation process.",
    features: [
      { title: "Assessment Proceedings", desc: "Representation during initial tax assessments and scrutiny.", icon: "Briefcase" },
      { title: "Appellate Proceedings", desc: "Filing appeals and representing clients before appellate authorities and AAR.", icon: "FileSignature" },
      { title: "High/Supreme Court Liaison", desc: "Liaising with specialized counsel for arguing matters in higher courts.", icon: "Landmark" },
      { title: "Factual Submissions", desc: "Drafting precise legal and factual submissions to support your tax claims.", icon: "FileText" },
      { title: "Transfer Pricing Disputes", desc: "Specialized assistance in resolving complex transfer pricing disputes.", icon: "TrendingUp" },
      { title: "End-to-End Support", desc: "Comprehensive support throughout the entire tax litigation process.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Expert Representation", desc: "Professional representation across all stages of tax proceedings.", icon: "BadgeCheck" },
      { title: "Fact-Driven Defense", desc: "Meticulously prepared submissions to robustly defend your claims.", icon: "ShieldCheck" },
      { title: "Seamless Counsel Liaison", desc: "Smooth coordination with senior counsel for High Court and Supreme Court matters.", icon: "HeartHandshake" },
      { title: "Dispute Resolution", desc: "Focused approach to resolving disputes efficiently.", icon: "CheckCircle" }
    ],
    timeline: [
      "Dispute Analysis",
      "Preparation of Submissions",
      "Authority Representation",
      "Appellate Representation",
      "Case Resolution"
    ],
    faqs: [
{ q: "What stages of tax litigation do you handle?", a: "We represent clients at all stages, from assessment proceedings to appellate proceedings, including the Authority for Advance Rulings." },
    { q: "Do you represent clients in Transfer Pricing disputes?", a: "Yes, our litigation assistance includes specialized representation for resolving complex transfer pricing disputes." },
    { q: "Do you argue cases before the High Court and Supreme Court?", a: "For matters before the High Court and Supreme Court, we assist in preparing the case and liaise closely with specialized counsel who argue the matter." },
    { q: "How do you help with tax authority submissions?", a: "We assist in preparing robust legal and factual submissions to be presented before tax or appellate authorities to support your claims." },
    { q: "What is the Authority for Advance Rulings (AAR)?", a: "The AAR provides binding rulings on the tax liability of non-residents and certain residents, helping to avoid prolonged litigation. We represent clients before this authority." },
    { q: "Can you assist with an ongoing tax scrutiny assessment?", a: "Yes, we step in to provide expert representation and factual submissions during ongoing assessment proceedings." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
