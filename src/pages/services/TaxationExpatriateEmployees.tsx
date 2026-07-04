import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TaxationExpatriateEmployeesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TaxationExpatriateEmployees: React.FC<TaxationExpatriateEmployeesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Taxation of Expatriate Employees",
    intro_title: "Global Mobility & Payroll Tax",
    intro_p1: "The taxation of expatriate employees involves specialized tax planning and compliance for foreign nationals working in India as well as Indian employees deputed abroad. Factors such as residential status, DTAA, and social security impact tax liability.",
    intro_p2: "Employers must also comply with payroll taxation, withholding tax obligations, and reporting requirements under Indian laws. Finvista provides comprehensive expatriate taxation services, helping both employers and employees manage international assignments efficiently.",
    features: [
      { title: "Salary Structuring", desc: "Structuring expat compensation packages for maximum tax efficiency in India.", icon: "TrendingUp" },
      { title: "Tax Equalization", desc: "Advisory on tax equalization policies for globally mobile employees.", icon: "Settings" },
      { title: "Payroll Compliance", desc: "Assistance with calculating and deducting accurate TDS on expat payroll.", icon: "Wallet" },
      { title: "Social Security & PF", desc: "Guidance on Indian Provident Fund applicability and Social Security Agreements (SSA).", icon: "ShieldCheck" },
      { title: "Return Filing", desc: "Filing complex income tax returns declaring global income and foreign assets.", icon: "FileText" },
      { title: "Tax Clearance (NOC)", desc: "Obtaining the mandatory tax clearance certificate before the expat departs India.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "Employer Compliance", desc: "Ensure the company meets all statutory withholding and reporting obligations.", icon: "BadgeCheck" },
      { title: "Avoid Double Taxation", desc: "Leverage DTAAs to prevent the employee from being taxed in both countries.", icon: "Globe" },
      { title: "Employee Satisfaction", desc: "Provide expats with a seamless, stress-free tax experience during their deputation.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Arrival Consultation",
      "Residential Status Check",
      "Payroll Structuring",
      "Monthly TDS Compliance",
      "Annual Return Filing",
      "Departure NOC"
    ],
    faqs: [
{ q: "How is an expatriate's residential status determined?", a: "It depends on the number of days they stay in India during the current financial year and the preceding four years." },
    { q: "Is the global income of an expat taxable in India?", a: "It depends. If the expat qualifies as a 'Resident and Ordinarily Resident' (ROR), their global income becomes taxable in India." },
    { q: "Do expats need to contribute to Indian Provident Fund?", a: "Yes, foreign workers are classified as 'International Workers' and must contribute to PF unless covered under a Social Security Agreement (SSA)." },
    { q: "What happens when the expatriate leaves India?", a: "They must obtain a Tax Clearance Certificate (NOC) from the Income Tax authorities before departing." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
