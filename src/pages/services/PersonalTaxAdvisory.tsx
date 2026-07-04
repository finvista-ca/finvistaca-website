import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PersonalTaxAdvisoryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PersonalTaxAdvisory: React.FC<PersonalTaxAdvisoryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Personal Tax Advisory",
    intro_title: "Tailored Personal Taxation",
    intro_p1: "We assist clients in providing the following personnel tax services in relation to expatriates, non-residents and high net-worth individuals (HNIs):",
    intro_p2: "Our specialized services include the review of tax computation and preparation of tax returns, identifying tax planning opportunities with respect to salary payments, and review of documentation to ensure that the position adopted by the clients are appropriate. We also provide assistance in filing of quarterly withholding tax returns in relation to salary payments, issuance of Form 16 to expats, and representation before the tax authorities in relation to these categories.",
    features: [
      { title: "Tax Computation & Returns", desc: "Review of tax computation and preparation of complex personal tax returns.", icon: "FileText" },
      { title: "Salary Tax Planning", desc: "Identifying advanced tax planning opportunities with respect to salary payments.", icon: "TrendingUp" },
      { title: "Documentation Review", desc: "Ensuring adopted tax positions are fully supported by appropriate documentation.", icon: "ShieldCheck" },
      { title: "Withholding Tax Returns", desc: "Assistance in filing quarterly withholding tax returns related to salary payments.", icon: "CheckCircle" },
      { title: "Form 16 for Expats", desc: "Assistance in the accurate issue of Form 16 to expatriate employees.", icon: "Briefcase" },
      { title: "Tax Authority Representation", desc: "Professional representation before tax authorities for NRIs and HNIs.", icon: "Landmark" }
    ],
    benefits: [
      { title: "Tailored for HNIs & Expats", desc: "Specialized services designed for high net-worth individuals and non-residents.", icon: "Globe" },
      { title: "Maximum Tax Efficiency", desc: "Strategic salary planning to optimize your personal tax liabilities.", icon: "TrendingUp" },
      { title: "Hassle-Free Filing", desc: "Seamless preparation of returns and quarterly withholding requirements.", icon: "CheckCircle" },
      { title: "Audit Protection", desc: "Thorough documentation reviews and representation to mitigate risks.", icon: "ShieldCheck" }
    ],
    timeline: [
      "Individual Assessment",
      "Salary Tax Planning",
      "Document Review",
      "Return Filing",
      "Representation"
    ],
    faqs: [
{ q: "Who do your personal tax advisory services cater to?", a: "We specialize in providing personal tax services for expatriates, non-residents (NRIs), and high net-worth individuals (HNIs)." },
    { q: "Can you help optimize the tax on my salary payments?", a: "Yes, we identify and implement tax planning opportunities with respect to salary payments to maximize your tax efficiency." },
    { q: "Do you assist with filing tax returns?", a: "Absolutely. We handle the review of tax computations and the end-to-end preparation of your personal tax returns." },
    { q: "Can you help employers issue Form 16 to expatriates?", a: "Yes, we provide specialized assistance in the issuance of Form 16 to expatriate employees." },
    { q: "Do you handle withholding tax returns for salaries?", a: "We assist in the accurate filing of quarterly withholding tax returns in relation to salary payments." },
    { q: "Will you represent me before tax authorities if needed?", a: "Yes, we offer assistance in representation before tax authorities for expats, non-residents, and HNIs regarding their tax matters." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
