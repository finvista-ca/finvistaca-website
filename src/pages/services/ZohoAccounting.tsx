import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ZohoAccountingProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ZohoAccounting: React.FC<ZohoAccountingProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "ZOHO Accounting Services",
    intro_title: "Expert Zoho Books Implementation",
    intro_p1: "Zoho Books is one of the leading cloud-based accounting platforms designed to simplify financial management for growing businesses. It offers powerful features such as invoicing, expense management, and workflow automation.",
    intro_p2: "Finvista provides professional Zoho Books implementation, customization, migration, bookkeeping, and ongoing support. Our team ensures seamless utilization of Zoho Books to streamline your accounting operations and improve productivity.",
    features: [
      { title: "Zoho Setup", desc: "Complete configuration of Zoho Books tailored to your business structure.", icon: "Settings" },
      { title: "Data Migration", desc: "Secure migration of historical financial data from legacy accounting systems.", icon: "Database" },
      { title: "GST Configuration", desc: "Setting up precise GST tax rates, HSN codes, and e-invoicing integrations.", icon: "FileCheck" },
      { title: "Workflow Automation", desc: "Automating recurring invoices, payment reminders, and bank rules.", icon: "Zap" },
      { title: "Bookkeeping", desc: "Ongoing professional bookkeeping services managed entirely within Zoho Books.", icon: "BookOpen" },
      { title: "Training", desc: "Comprehensive training for your team on how to use Zoho Books efficiently.", icon: "Users" }
    ],
    benefits: [
      { title: "Automated Workflows", desc: "Save hours of manual data entry through smart automation and bank feeds.", icon: "Clock" },
      { title: "Seamless Integrations", desc: "Easily integrate with Zoho CRM, Zoho Inventory, and other third-party apps.", icon: "Link" },
      { title: "GST Compliance", desc: "Generate GST-ready reports and push returns directly to the GST portal.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Business Analysis",
      "Account Configuration",
      "Data Migration",
      "Customization",
      "User Training",
      "Go Live & Support"
    ],
    faqs: [{ q: "Is Zoho Books suitable for startups and SMEs?", a: "Yes, Zoho Books is highly scalable and perfect for startups, SMEs, and service-based businesses in India." },
    { q: "Can Zoho Books handle Indian GST?", a: "Yes, it is fully compliant with Indian GST laws, supporting e-invoicing, e-way bills, and direct return filing." },
    { q: "Can you migrate my data from Tally to Zoho Books?", a: "Yes, our experts can safely migrate your opening balances, chart of accounts, and historical transactions from Tally." },
    { q: "Does Zoho Books have an inventory module?", a: "Yes, it has basic inventory tracking built-in, and seamlessly integrates with Zoho Inventory for advanced warehouse management." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
