import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTReturnsProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTReturns: React.FC<GSTReturnsProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Returns",
    intro_title: "Timely & Accurate Tax Returns",
    intro_p1: "Persons or entities in India involved in the supply of goods or services must obtain GST registration when the threshold limit for registration is crossed... In addition to the turnover limit, GST registration is compulsory for all persons undertaking eCommerce sales.",
    intro_p2: "Yes, all taxpayers having GST registration should file GST returns on the 10th, 15th and 20th of each month. Even if there was no business activity or transaction during a month, the taxpayer must still log in to the GST portal and file NIL GST return to avoid penalty.",
    features: [
      { title: "GSTR-3B (Monthly)", desc: "Simplified summary return due on the 20th of each month. Nil return mandatory if no activity.", icon: "FileCheck" },
      { title: "GSTR-1 (Monthly)", desc: "Monthly return of outward supplies due on the 11th for revenue > Rs.1.5 crores.", icon: "TrendingUp" },
      { title: "GSTR-1 (Quarterly)", desc: "Quarterly return due on the 13th for revenue < Rs.1.5 crores.", icon: "Clock" },
      { title: "CMP-08 (Composition)", desc: "Quarterly payment for composition scheme taxpayers due on the 18th.", icon: "CreditCard" },
      { title: "Nil Returns", desc: "Filing mandatory NIL returns to avoid daily penalty fees.", icon: "XOctagon" },
      { title: "Penalty Avoidance", desc: "Avoid late fees of Rs.50/day and 18% interest on late payments.", icon: "ShieldAlert" }
    ],
    benefits: [
      { title: "100% Compliance", desc: "Never miss a deadline with our systematic filing process.", icon: "ShieldCheck" },
      { title: "Zero Penalties", desc: "Avoid late fees and 18% interest on late payments.", icon: "BadgeCheck" },
      { title: "Accurate ITC", desc: "Reconcile outward supplies properly to ensure smooth ITC flow.", icon: "Wallet" },
      { title: "Hassle-free Filing", desc: "We handle GSTR-1, GSTR-3B, and CMP-08 for you.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Data Collation",
      "Invoice Reconciliation",
      "Draft Return Preparation",
      "Client Approval",
      "Final Submission"
    ],
    faqs: [
{ q: "Do I have to file a GST return if I had no sales?", a: "Yes, a Nil GSTR-3B return must be filed even if there is no business activity to avoid penalties." },
    { q: "What is the penalty for late filing?", a: "Failure to file leads to a penalty of Rs.50 per day (Rs.20 for Nil returns), plus 18% interest on late tax payment." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
