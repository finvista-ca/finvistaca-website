import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface FinancialReportingAdvisoryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const FinancialReportingAdvisory: React.FC<FinancialReportingAdvisoryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Financial Reporting & Accounting Advisory Services",
    intro_title: "Complex Accounting Solutions",
    intro_p1: "In the current global environment, there are many challenges from an accounting perspective as shareholders and regulators take a greater interest in how companies report and disclose their financial results.",
    intro_p2: "Our partners have in-depth technical accounting knowledge and industry insight to advise clients on challenging, complex issues arising from transactions, business decisions, and regulatory changes.",
    features: [
      { title: "GAAP to IFRS Conversions", desc: "In-depth technical conversions addressing tax relationships and disclosures.", icon: "Globe" },
      { title: "M&A Accounting", desc: "Preparing opening balance sheets, carve-outs, and pro forma statements.", icon: "Briefcase" },
      { title: "IPO Readiness", desc: "Comprehensive financial structuring and reporting for Initial Public Offerings.", icon: "TrendingUp" },
      { title: "Restructure Advice", desc: "Guiding the interaction of accounting requirements with merger relief laws.", icon: "Layers" }
    ],
    benefits: [
      { title: "Regulatory Compliance", desc: "Meet stringent additional disclosure requirements from standard setters.", icon: "BadgeCheck" },
      { title: "Optimized Transactions", desc: "Address key regulatory challenges correctly during major acquisitions.", icon: "Settings" },
      { title: "Global Consistency", desc: "Deliver consistent, cost-effective accounting backed by worldwide resources.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Issue Identification",
      "Impact Analysis",
      "Strategic Modeling",
      "Implementation",
      "Post-Reporting Support"
    ],
    faqs: [
{ q: "What does accounting advisory cover?", a: "It covers GAAP conversions, transaction reporting, IPO readiness, and complex restructuring advice." },
    { q: "Why is GAAP conversion difficult?", a: "It requires understanding accounting differences alongside business implications like tax relationships and staff training." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
