import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTAnnualReturnProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTAnnualReturn: React.FC<GSTAnnualReturnProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Annual Return",
    intro_title: "Year-End GST Compliance",
    intro_p1: "All entities having GST registration are required to file GST annual returns... GST annual return filing is mandatory for all entities having GST registration, irrespective of business activity or sales or profitability during the return filing period. Hence, even a dormant business that obtained GST registration must file GST return.",
    intro_p2: "Before filing GST annual return the taxpayer must have filed all GSTR-1 or GSTR-3B or GSTR-4 returns... In case there are overdue GST returns... the GST registration holder will not be allowed to file GST annual return.",
    features: [
      { title: "GSTR-9 Preparation", desc: "Filing mandatory annual return for regular taxpayers.", icon: "FileText" },
      { title: "GSTR-9A Preparation", desc: "Annual return for taxpayers opted for the GST Composition Scheme.", icon: "FileCheck" },
      { title: "GSTR-9C Reconciliation", desc: "Filing reconciliation statement between Annual Return and Audited Financials.", icon: "BarChart" },
      { title: "GST Audit Support", desc: "For taxpayers with aggregate turnover above Rs. 2 crores requiring CA certification.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Mandatory Compliance", desc: "Meet the mandatory year-end filing requirement for all entities.", icon: "BadgeCheck" },
      { title: "Reconciliation Accuracy", desc: "Ensure your GSTR-9 precisely matches your audited financial statements.", icon: "TrendingUp" },
      { title: "Audit Ready", desc: "Seamless preparation of GSTR-9C by qualified professionals.", icon: "Briefcase" }
    ],
    timeline: [
      "Monthly Returns Verification",
      "Financial Statement Review",
      "Drafting GSTR-9",
      "GSTR-9C Reconciliation",
      "Final Filing"
    ],
    faqs: [
{ q: "Is the GST Annual Return mandatory for dormant businesses?", a: "Yes, GST annual return filing is mandatory irrespective of business activity, sales, or profitability." },
    { q: "What is GSTR-9C?", a: "Form GSTR-9C is a reconciliation statement between the Annual Return (GSTR-9) and the Audited Financial Statements, required for turnover above Rs. 2 crores." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
