import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PayrollManagementProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PayrollManagement: React.FC<PayrollManagementProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Payroll Management",
    intro_title: "End-to-End Payroll Solutions",
    intro_p1: "Efficient payroll management is essential for maintaining employee satisfaction and ensuring compliance with labor laws, income tax regulations, and statutory requirements.",
    intro_p2: "Managing salaries, deductions, reimbursements, PF, ESI, professional tax, and TDS can be time-consuming and prone to errors. Finvista offers end-to-end Payroll Management Services that automate processing and ensure complete confidentiality.",
    features: [
      { title: "Salary Processing", desc: "Accurate calculation of monthly salaries, bonuses, and reimbursements.", icon: "Banknote" },
      { title: "PF & ESI Compliance", desc: "Calculation, deduction, and timely filing of Provident Fund and ESI contributions.", icon: "ShieldCheck" },
      { title: "TDS Deduction", desc: "Accurate calculation and deduction of Tax Deducted at Source for employees.", icon: "Calculator" },
      { title: "Payslip Generation", desc: "Automated generation and distribution of secure digital payslips to employees.", icon: "FileText" },
      { title: "Payroll Reports", desc: "Detailed monthly payroll summaries and variance reports for management.", icon: "BarChart" },
      { title: "Year-End Computations", desc: "Issuance of Form 16 and handling employee investment declarations.", icon: "Calendar" }
    ],
    benefits: [
      { title: "Automated Compliance", desc: "Avoid penalties by ensuring all statutory dues (PF, ESI, TDS) are paid on time.", icon: "BadgeCheck" },
      { title: "Data Confidentiality", desc: "Maintain strict confidentiality of employee salaries and executive compensation.", icon: "Lock" },
      { title: "Employee Satisfaction", desc: "Ensure on-time, accurate salary disbursements resulting in higher employee morale.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Employee Onboarding",
      "Investment Declaration",
      "Attendance Processing",
      "Salary Computation",
      "Statutory Deductions",
      "Payslip Distribution"
    ],
    faqs: [
{ q: "How often is payroll processed?", a: "Payroll is typically processed on a monthly basis, aligned with your company's salary disbursement cycle." },
    { q: "Can statutory deductions be automated?", a: "Yes, our systems automatically calculate and track PF, ESI, Professional Tax, and TDS deductions accurately." },
    { q: "Do you help with employee queries?", a: "Yes, we can provide a dedicated helpdesk to resolve employee queries regarding their tax deductions and payslips." },
    { q: "Is Form 16 provided to employees?", a: "Yes, as part of our year-end process, we generate and distribute Form 16 to all eligible employees." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
