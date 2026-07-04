import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface AnnualCompliancePrivateLimitedCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const AnnualCompliancePrivateLimitedCompany: React.FC<AnnualCompliancePrivateLimitedCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Annual Compliance for Private Limited Company",
    intro_title: "Maintain Your Active Status",
    intro_p1: "A Private Company is a legal institute enjoying a separate personality which requires controlling its active status through the regular filing with MCA. For every business, it is compulsory to file an annual return and audited financial reports with MCA for every fiscal year.",
    intro_p2: "The RoC filing is necessary irrespective of the turnover, whether it is zero or in crore. Whether a single business is undertaken or none, annual compliances for private limited are compulsory for every certified company.",
    features: [
      { title: "First Board Meeting", desc: "Held within 30 days of Incorporation.", icon: "Users" },
      { title: "Subsequent Board Meetings", desc: "Minimum of 4 Board Meetings to be held every year.", icon: "Calendar" },
      { title: "First Auditor Appointment", desc: "Designate the first Auditor within 30 days of Incorporation.", icon: "FileSignature" },
      { title: "Annual General Meeting", desc: "Must be held on or before 30th September every year.", icon: "Mic" },
      { title: "Form MGT-7 Filing", desc: "File the Annual Return within 60 days of the AGM.", icon: "FileText" },
      { title: "Form AOC-4 Filing", desc: "File the Financial Statements within 30 days of the AGM.", icon: "BarChart" }
    ],
    benefits: [
      { title: "Company Credibility", desc: "Consistency in compliance is vital to measure the reliability of an organization.", icon: "BadgeCheck" },
      { title: "Invite Investors", desc: "Investors demand financial histories before settling funding proposals.", icon: "TrendingUp" },
      { title: "Maintain Active State", desc: "Avoid constant failures that turn company status to defunct.", icon: "ShieldCheck" },
      { title: "Avoid Punishments", desc: "Escape heavy supplementary fees of ₹100 for each day of delay.", icon: "ShieldAlert" }
    ],
    timeline: [
      "Board Meetings",
      "Statutory Audit of Accounts",
      "Annual General Meeting",
      "AOC-4 Filing",
      "MGT-7 Filing"
    ],
    faqs: [
{ q: "Is ROC filing necessary if my company has zero turnover?", a: "Yes, RoC filing is necessary irrespective of the turnover, whether it is zero or in crore." },
    { q: "What happens if a company fails to file annual returns?", a: "Constant failure in filing the return charges it with heavy penalties, and the company may also be disclosed as defunct." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
