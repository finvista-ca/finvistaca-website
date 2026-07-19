import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TaxClearanceCertificateProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TaxClearanceCertificate: React.FC<TaxClearanceCertificateProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Tax Clearance Certificate",
    intro_title: "Form 15CA & 15CB Advisory",
    intro_p1: "A Tax Clearance Certificate (TCC) certifies that an individual or business has fulfilled applicable tax obligations before remitting funds outside India or completing certain overseas financial transactions.",
    intro_p2: "It plays an important role in ensuring compliance with Indian Income Tax regulations, particularly for NRIs, foreign companies, and entities making overseas remittances. FinvistaCA provides complete certification and filing assistance to minimize compliance risks.",
    features: [
      { title: "Form 15CB Certification", desc: "Professional certification by a Chartered Accountant validating the withholding tax rate.", icon: "FileSignature" },
      { title: "Form 15CA Filing", desc: "Filing the mandatory declaration on the Income Tax portal for foreign remittances.", icon: "FileText" },
      { title: "Tax Clearance Advisory", desc: "Guidance on the taxability of the remittance under domestic law and DTAA.", icon: "Search" },
      { title: "RBI Compliance", desc: "Ensuring the overseas remittance adheres to FEMA and RBI guidelines.", icon: "Landmark" },
      { title: "NOC for Expatriates", desc: "Assistance with obtaining No Objection Certificates for expats leaving India.", icon: "UserCheck" },
      { title: "DTAA Applicability", desc: "Determining the correct lower tax rate applicable under tax treaties.", icon: "Globe" }
    ],
    benefits: [
      { title: "Smooth Remittances", desc: "Transfer funds abroad without bank rejections or regulatory holds.", icon: "TrendingUp" },
      { title: "Penalty Prevention", desc: "Avoid heavy penalties for non-deduction of TDS on foreign payments.", icon: "ShieldAlert" },
      { title: "Accurate Tax Deduction", desc: "Ensure you don't overpay taxes by correctly applying DTAA benefits.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Document Collection",
      "Taxability Analysis",
      "Form 15CB Issuance",
      "Form 15CA Filing",
      "Bank Submission",
      "Funds Remitted"
    ],
    faqs: [{ q: "Who needs a Tax Clearance Certificate?", a: "NRIs selling property and remitting funds, foreign citizens leaving India, and companies remitting income abroad." },
    { q: "What is Form 15CB?", a: "Form 15CB is a certificate issued by a Chartered Accountant determining the rate and amount of TDS to be deducted on a foreign remittance." },
    { q: "Is Form 15CB required for all foreign payments?", a: "No, it is generally required if the remittance exceeds Rs. 5 Lakhs in a financial year and is taxable in India." },
    { q: "What is Form 15CA?", a: "Form 15CA is a declaration filed online by the remitter using the information certified in Form 15CB." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
