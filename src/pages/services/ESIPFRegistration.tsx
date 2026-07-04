import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ESIPFRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ESIPFRegistration: React.FC<ESIPFRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "ESI & PF Registration",
    intro_title: "Employee Social Security",
    intro_p1: "Employee State Insurance (ESI) and Employees' Provident Fund (EPF) registrations are essential statutory compliances for businesses employing eligible workers in India, providing vital social security benefits.",
    intro_p2: "Failure to comply can result in significant penalties. Finvista offers end-to-end assistance with ESI and EPF registration, employee onboarding, monthly return filing, and ongoing compliance to safeguard employee welfare.",
    features: [
      { title: "EPF Registration", desc: "Mandatory registration for businesses with 20 or more employees.", icon: "Users" },
      { title: "ESI Registration", desc: "Mandatory registration for businesses with 10 or more employees earning under Rs 21,000.", icon: "ShieldCheck" },
      { title: "Employee Onboarding", desc: "Generating UAN and ESI Pehchan cards for new employees.", icon: "CheckCircle" },
      { title: "Monthly Return Filing", desc: "Accurate calculation and filing of monthly EPF and ESI contributions.", icon: "Calendar" },
      { title: "Inspection Support", desc: "Guidance and representation during labor department inspections.", icon: "FileText" },
      { title: "Compliance Management", desc: "Continuous monitoring of changing labor laws and contribution rates.", icon: "Settings" }
    ],
    benefits: [
      { title: "Social Security", desc: "Provides employees with medical care, maternity benefits, and retirement savings.", icon: "HeartHandshake" },
      { title: "Legal Compliance", desc: "Fulfill legal obligations efficiently while avoiding severe penalties and prosecution.", icon: "BadgeCheck" },
      { title: "Employee Retention", desc: "Offering statutory benefits significantly improves employee satisfaction and retention.", icon: "TrendingUp" }
    ],
    timeline: [
      "Document Gathering",
      "Portal Registration",
      "Employer Code Generation",
      "Employee UAN Generation",
      "First Return Filing"
    ],
    faqs: [
{ q: "When is PF Registration mandatory?", a: "It is mandatory for businesses having 20 or more employees." },
    { q: "When is ESI Registration mandatory?", a: "It is mandatory for businesses with 10 or more employees, where employees earn up to Rs 21,000 per month." },
    { q: "Can I register voluntarily if I have fewer employees?", a: "Yes, businesses can opt for voluntary EPF and ESI registration to provide benefits to their employees." },
    { q: "What happens if I delay monthly contributions?", a: "Delayed payments attract penal damages and interest, and can lead to legal action by the department." },
    { q: "Do you provide monthly compliance services?", a: "Yes, we handle monthly challan generation, return filing, and employee KYC updates." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
