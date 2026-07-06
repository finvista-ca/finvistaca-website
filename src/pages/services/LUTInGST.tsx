import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface LUTInGSTProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const LUTInGST: React.FC<LUTInGSTProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "LUT in GST",
    intro_title: "Export Without IGST",
    intro_p1: "LUT in GST: Full form/meaning is Letter of Undertaking. It is prescribed to be furnished in the form GST RFD 11 under rule 96 A, whereby the exporter declares that he or she will fulfill all the requirement that is prescribed under GST while exporting without making IGST payment.",
    intro_p2: "GST LUT is to be submitted by all GST registered goods and service exporters. Here the motive of the government was to expand the export base by providing reliefs on exports... They intend to supply goods or services to India or overseas or SEZs.",
    features: [
      { title: "Export Without IGST", desc: "Export goods or services without the upfront payment of integrated tax.", icon: "Globe" },
      { title: "Zero-Rated SEZ Supply", desc: "Use LUT for zero-rated supply to Special Economic Zones (SEZ).", icon: "Building" },
      { title: "Form RFD-11 Filing", desc: "Complete preparation and filing of Form GST RFD-11.", icon: "FileSignature" },
      { title: "Export Bonds", desc: "Furnishing export bonds and bank guarantees for ineligible exporters.", icon: "Briefcase" }
    ],
    benefits: [
      { title: "Working Capital Relief", desc: "Avoid blocking working capital by exporting without IGST payment.", icon: "Wallet" },
      { title: "One-Year Validity", desc: "File once and enjoy LUT privileges for the entire financial year.", icon: "Clock" },
      { title: "Running Bonds", desc: "Use running bonds to avoid executing bonds for every single transaction.", icon: "Zap" }
    ],
    timeline: [
      "Eligibility Check",
      "Document Collation",
      "Form RFD-11 Preparation",
      "Department Verification",
      "LUT Acknowledgment"
    ],
    faqs: [{ q: "What does an LUT allow an exporter to do?", a: "A Letter of Undertaking allows an exporter to supply goods or services overseas or to SEZs without paying IGST." },
    { q: "Who is ineligible for filing an LUT?", a: "Persons prosecuted for tax evasion exceeding Rs. 250 lakhs under CGST/IGST Acts are ineligible and must furnish an Export Bond instead." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
