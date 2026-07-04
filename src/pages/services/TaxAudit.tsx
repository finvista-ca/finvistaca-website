import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TaxAuditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TaxAudit: React.FC<TaxAuditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Tax Audit",
    intro_title: "Section 44AB Tax Compliance",
    intro_p1: "Income Tax law has made 'Tax Audit' compulsory to review accounts of business or any profession, making the process of income computation for filling of return of income easier.",
    intro_p2: "Section 44AB has made tax audit mandatory if annual gross turnover or receipts exceed specified limits. The tax auditor presents the report in specified forms like Form 3CA or Form 3CB along with 3CD.",
    features: [
      { title: "Business Turnover > Rs 1 Crore", desc: "Mandatory tax audit if annual gross turnover exceeds Rs 1 Crore.", icon: "TrendingUp" },
      { title: "Profession Receipts > Rs 50 Lakh", desc: "Mandatory tax audit if gross professional income exceeds Rs 50 Lakh.", icon: "BarChart" },
      { title: "Section 44AD Presumptive Taxation", desc: "For businesses with turnover up to Rs 2 Crore opting for 8% or 6% presumptive income.", icon: "FileCheck" },
      { title: "Section 44ADA Presumptive Taxation", desc: "For professionals earning up to Rs 50 Lakhs opting for 50% presumptive income.", icon: "Wallet" },
      { title: "Form 3CA / 3CB", desc: "Filing accurate audit reports based on whether accounts are audited under other laws.", icon: "FileText" },
      { title: "Penalty Avoidance", desc: "Avoid penalties of 0.5% of total sales or Rs 1,50,000 for non-filing.", icon: "ShieldAlert" }
    ],
    benefits: [
      { title: "Accurate Income Computation", desc: "Ensures books of accounts accurately show the income and claim deductions.", icon: "Calculator" },
      { title: "Penalty Prevention", desc: "Timely filing prevents severe penalties under the Income Tax Act.", icon: "ShieldCheck" },
      { title: "Business Credibility", desc: "Gives credibility to information published for authorities and investors.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Data Collection",
      "Books Verification",
      "Draft 3CA/3CB & 3CD",
      "Taxpayer Review",
      "Upload on Income Tax Portal"
    ],
    faqs: [
{ q: "What is the penalty for delay in filing a tax audit report?", a: "The penalty is 0.5% of the total sales, turnover, or gross receipts, subject to a maximum of Rs 1,50,000." },
    { q: "When is the due date for a tax audit?", a: "Taxpayers covered under section 44AB must obtain the audit reports on or before 30th September of that assessment year." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
