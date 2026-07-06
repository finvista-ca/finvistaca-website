import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface XeroAccountingProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const XeroAccounting: React.FC<XeroAccountingProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "XERO Accounting Services",
    intro_title: "Global Cloud Accounting Solutions",
    intro_p1: "Xero is a globally recognized cloud accounting software trusted by businesses across the world for its simplicity, automation, and real-time financial management capabilities.",
    intro_p2: "It enables organizations to manage invoicing, bank reconciliation, and multi-currency transactions efficiently. Finvista offers comprehensive Xero Accounting Services, including software implementation, migration, and ongoing support.",
    features: [
      { title: "Xero Implementation", desc: "Expert setup and configuration of Xero tailored to your international operations.", icon: "Settings" },
      { title: "Multi-currency Accounting", desc: "Flawless management of foreign exchange gains/losses and foreign bank accounts.", icon: "Globe" },
      { title: "Bank Feeds", desc: "Setting up secure, direct integrations with global banks for daily transaction feeds.", icon: "Landmark" },
      { title: "Financial Reports", desc: "Customizing the Xero dashboard and generating insightful management reports.", icon: "BarChart" },
      { title: "Payroll Integration", desc: "Integrating third-party payroll apps with Xero for seamless journal entries.", icon: "Users" },
      { title: "App Ecosystem", desc: "Connecting Xero with powerful apps like Hubdoc, Stripe, and Dext.", icon: "Link" }
    ],
    benefits: [
      { title: "Global Capabilities", desc: "Perfect for businesses dealing with international clients and multiple currencies.", icon: "Globe" },
      { title: "Beautiful Interface", desc: "Enjoy a clean, intuitive, and user-friendly interface that simplifies accounting.", icon: "Smile" },
      { title: "Faster Reconciliation", desc: "Reconcile hundreds of bank transactions in minutes using Xero's smart matching.", icon: "Zap" }
    ],
    timeline: [
      "Requirement Gathering",
      "Xero Setup",
      "Bank Feed Connection",
      "Data Migration",
      "App Integration",
      "Ongoing Bookkeeping"
    ],
    faqs: [{ q: "Is Xero suitable for Indian businesses?", a: "While Xero doesn't have native Indian GST modules like Zoho, it is highly preferred by Indian businesses that export services or have overseas clients due to its excellent multi-currency features." },
    { q: "Can Xero manage international transactions?", a: "Yes, Xero handles over 160 currencies and automatically updates exchange rates hourly." },
    { q: "How does bank reconciliation work in Xero?", a: "Xero connects directly to your bank, importing transactions automatically. Its smart AI suggests matches, making reconciliation a one-click process." },
    { q: "Can you handle my day-to-day bookkeeping in Xero?", a: "Yes, our certified professionals can act as your outsourced accounting department, managing everything inside your Xero account." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
