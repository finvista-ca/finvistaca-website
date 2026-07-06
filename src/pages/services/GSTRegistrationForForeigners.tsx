import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTRegistrationForForeignersProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTRegistrationForForeigners: React.FC<GSTRegistrationForForeignersProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Registration for Foreigners",
    intro_title: "Compliance for Non-Residents",
    intro_p1: "GST registration for NRIs is a must if the Non-resident taxable person is making taxable supply in India... Under GST, a non-resident taxable person has to apply for GST registration if he undertakes transactions involving the supply of goods or services or both.",
    intro_p2: "To apply for GST registration, foreign businesses or applicants must identify a person in India to act as its authorized representative for GST compliance and obtain PAN (optional)... The applicant must submit Form GST REG-09 to apply for GST registration in India.",
    features: [
      { title: "Form GST REG-09", desc: "Filing the application electronically 5 days before business commencement.", icon: "Globe" },
      { title: "Authorized Representative", desc: "Appointing and documenting an authorized signatory resident in India.", icon: "Users" },
      { title: "Tax Identification", desc: "Submitting foreign Tax Identification Number or PAN if available.", icon: "FileCheck" },
      { title: "Advance Deposit", desc: "Estimating and depositing the expected tax liability during the registration validity.", icon: "Wallet" },
      { title: "Final Registration", desc: "Transitioning from provisional (REG-09) to final registration (REG-06).", icon: "BadgeCheck" }
    ],
    benefits: [
      { title: "Indian Market Access", desc: "Legally supply goods and services to the emerging Indian economic powerhouse.", icon: "Globe" },
      { title: "Full Compliance", desc: "Strict adherence to the 5-day prior registration mandate.", icon: "ShieldCheck" },
      { title: "Simplified Process", desc: "We handle the authorized representative documentation and PAN complexities.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Appoint Representative",
      "Estimate Tax & Deposit",
      "File REG-09",
      "Provisional Registration",
      "Final REG-06 Issuance"
    ],
    faqs: [{ q: "Does a foreign business need an Indian PAN for GST registration?", a: "No, a Non-resident taxable person can submit their country's Tax Identification Number, though their authorized Indian representative must have a valid PAN." },
    { q: "Is a deposit required for non-resident registration?", a: "Yes, the non-resident must pay an advance deposit equal to the expected tax liability during the registration period." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
