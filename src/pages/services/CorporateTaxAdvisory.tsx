import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface CorporateTaxAdvisoryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const CorporateTaxAdvisory: React.FC<CorporateTaxAdvisoryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Corporate Tax Advisory / Compliance",
    intro_title: "Optimizing Corporate Tax",
    intro_p1: "We assist corporates to deal with the various challenges arising from a complex tax environment. We assist companies across a spectrum of matters relating to applicability of withholding tax, deductibility of any expenditure, availability of exemption or enhanced deduction or tax holiday on any particular source of income or expenditure or investment. We also undertake corporate tax compliances ranging from advance tax computations, preparation and filing of tax returns, assistance with documentation requirements to support the planning and positions adopted for corporate and withholding tax matters.",
    intro_p2: "We assist companies in reducing their effective tax rates within the legal framework and providing them clear guidelines for implementation. We keep track of decisions of Tribunals and Courts and use such learning into our planning, advisory and compliance services. We also frequently update our clients on any change in the tax regulations or on receipt of any particular judicial decision which could have an impact on the client or the industry.",
    features: [
      { title: "Withholding Tax Advisory", desc: "Expert guidance on the applicability of withholding tax across different transactions.", icon: "Building" },
      { title: "Exemptions & Tax Holidays", desc: "Availability of exemptions, enhanced deductions, or tax holidays on specific sources of income.", icon: "Briefcase" },
      { title: "Advance Tax Computations", desc: "Accurate advance tax computations to ensure complete compliance and avoid penalties.", icon: "FileText" },
      { title: "Tax Return Filing", desc: "End-to-end preparation and filing of corporate tax returns.", icon: "CheckCircle" },
      { title: "Documentation Support", desc: "Comprehensive documentation requirements to support adopted tax positions.", icon: "FileSignature" },
      { title: "Industry Tax Updates", desc: "Frequent updates on changing tax regulations and judicial decisions impacting your industry.", icon: "TrendingUp" }
    ],
    benefits: [
      { title: "Reduced Effective Tax Burden", desc: "Strategic planning to legally minimize your corporate tax liability.", icon: "CheckCircle" },
      { title: "Full Regulatory Compliance", desc: "Stay 100% compliant with changing Indian corporate tax laws.", icon: "ShieldCheck" },
      { title: "Expert Planning", desc: "Insights based on the latest Tribunal and Court decisions.", icon: "BadgeCheck" },
      { title: "Proactive Updates", desc: "Immediate notifications on judicial decisions that impact your business.", icon: "Zap" }
    ],
    timeline: [
      "Consultation",
      "Assessment",
      "Planning",
      "Compliance",
      "Ongoing Advisory"
    ],
    faqs: [
{ q: "What corporate tax compliance services do you provide?", a: "We handle advance tax computations, preparation and filing of tax returns, and provide assistance with documentation to support corporate and withholding tax positions." },
    { q: "Can you help reduce our company's effective tax rate?", a: "Yes, we assist companies in reducing their effective tax rates within the legal framework and provide clear guidelines for implementation." },
    { q: "Do you provide updates on new tax regulations?", a: "Absolutely. We frequently update our clients on any changes in tax regulations or new judicial decisions that could impact their industry." },
    { q: "Do you handle withholding tax applicability matters?", a: "Yes, we advise on the applicability of withholding tax, deductibility of expenditure, and availability of exemptions or tax holidays." },
    { q: "How do you incorporate Court decisions into your advisory?", a: "We keep track of decisions from Tribunals and Courts and proactively integrate such learnings into our tax planning, advisory, and compliance services." },
    { q: "Are your tax strategies legally sound?", a: "Yes, all our tax planning opportunities and advisory services are strictly within the legal framework of the law." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
