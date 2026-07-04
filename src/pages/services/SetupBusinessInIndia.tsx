import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface SetupBusinessInIndiaProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const SetupBusinessInIndia: React.FC<SetupBusinessInIndiaProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Setup Business in India",
    intro_title: "Foreign Direct Investment & Expansion",
    intro_p1: "India has emerged as one of the world's fastest-growing economies, offering significant opportunities for foreign investors, multinational corporations, and entrepreneurs seeking rapid market expansion.",
    intro_p2: "Establishing a business in India requires careful planning, entity selection, and compliance with FEMA, RBI, Companies Act, and Income Tax provisions. Finvista provides complete, seamless assistance for foreign entities setting up operations in India.",
    features: [
      { title: "Entity Selection", desc: "Advising on the best structure: Subsidiary, Branch Office, or Liaison Office.", icon: "Building" },
      { title: "Company Incorporation", desc: "End-to-end registration of the Indian entity with the Ministry of Corporate Affairs.", icon: "CheckCircle" },
      { title: "FDI & FEMA Compliance", desc: "Ensuring foreign direct investments comply with RBI and FEMA guidelines.", icon: "Globe" },
      { title: "Tax Registrations", desc: "Obtaining PAN, TAN, and GST registrations for the newly formed entity.", icon: "FileText" },
      { title: "RBI Approvals", desc: "Assistance with mandatory RBI reporting (FC-GPR, FLA) for foreign capital infusion.", icon: "Landmark" },
      { title: "Ongoing Compliance", desc: "Post-incorporation support for accounting, payroll, and statutory audits.", icon: "Settings" }
    ],
    benefits: [
      { title: "Seamless Market Entry", desc: "Establish your Indian operations quickly and without regulatory roadblocks.", icon: "TrendingUp" },
      { title: "100% Legal Compliance", desc: "Ensure your foreign investment is fully compliant with complex RBI rules.", icon: "ShieldCheck" },
      { title: "Professional Representation", desc: "Rely on expert Chartered Accountants to handle local authorities and filings.", icon: "Users" }
    ],
    timeline: [
      "Consultation & Strategy",
      "Name Approval",
      "Company Registration",
      "Bank Account Opening",
      "FDI Reporting (RBI)",
      "Ongoing Support"
    ],
    faqs: [
{ q: "Can foreigners own a 100% subsidiary in India?", a: "Yes, 100% Foreign Direct Investment (FDI) is allowed in most sectors under the automatic route without prior government approval." },
    { q: "What is the difference between a Subsidiary and a Branch Office?", a: "A Subsidiary is a separate legal Indian entity, while a Branch Office is simply an extension of the foreign parent company and has restricted activities." },
    { q: "How long does incorporation take?", a: "If all foreign documents are properly apostilled/notarized, incorporation usually takes 15-20 working days." },
    { q: "Do foreign directors need to visit India for registration?", a: "No, the entire incorporation process is online, though documents need to be notarized in the home country." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
