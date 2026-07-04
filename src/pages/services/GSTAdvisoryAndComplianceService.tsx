import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTAdvisoryAndComplianceServiceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTAdvisoryAndComplianceService: React.FC<GSTAdvisoryAndComplianceServiceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Advisory And Compliance Services",
    intro_title: "Expert Guidance on GST",
    intro_p1: "We assist clients in providing the following advisory services on GST: Advising on GST on matters relating outward supplies, input tax credit availability, valuation mechanism, time and place of supply, changes in tax rates etc. and its impact on the business operations. Giving opinions on tax issues.",
    intro_p2: "We assist clients in providing the following compliance services on GST: Assistance in obtaining registrations under GST. Preparation / Review of GST Returns including refunds. Undertaking comprehensive Review of business operations to identify Opportunities and Compliance Gaps, if any. Review of the GST implementation done by the company. Preparation of annual reconciliation statements, i.e. returns with audited financial statements.",
    features: [
      { title: "GST Opinions", desc: "Giving expert opinions on complex tax issues.", icon: "FileSignature" },
      { title: "Compliance Review", desc: "Comprehensive review of business operations to identify gaps.", icon: "CheckCircle" },
      { title: "GST Implementation", desc: "Detailed review of the GST implementation done by the company.", icon: "Settings" },
      { title: "Annual Reconciliation", desc: "Preparation of annual reconciliation statements with audited financial statements.", icon: "FileText" },
      { title: "Input Tax Credit", desc: "Advising on the availability of input tax credit.", icon: "Wallet" },
      { title: "Supply Mechanisms", desc: "Valuation mechanism, time and place of supply guidance.", icon: "Globe" }
    ],
    benefits: [
      { title: "Expert Guidance", desc: "Stay informed on changes in tax rates and their impact on operations.", icon: "ShieldCheck" },
      { title: "Risk Mitigation", desc: "Identify compliance gaps before they become costly penalties.", icon: "ShieldAlert" },
      { title: "End-to-End Support", desc: "From registration assistance to refund processing.", icon: "HeartHandshake" },
      { title: "Seamless Reconciliation", desc: "Ensure your GST returns perfectly match audited statements.", icon: "FileCheck" }
    ],
    timeline: [
      "Initial Consultation",
      "Operations Review",
      "Gap Analysis",
      "Implementation & Structuring",
      "Ongoing Compliance"
    ],
    faqs: [
{ q: "What does your GST compliance service include?", a: "Assistance in registration, review of GST returns including refunds, gap analysis, and annual reconciliation." },
    { q: "Do you advise on Input Tax Credit availability?", a: "Yes, we advise on matters relating to outward supplies, ITC availability, valuation mechanism, and time and place of supply." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
