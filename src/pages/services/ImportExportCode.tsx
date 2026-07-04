import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ImportExportCodeProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ImportExportCode: React.FC<ImportExportCodeProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Import & Export Code (IEC)",
    intro_title: "Global Trade Registration",
    intro_p1: "The Import Export Code (IEC) is a mandatory business identification number issued by the Directorate General of Foreign Trade (DGFT) for businesses involved in importing or exporting goods and services from India.",
    intro_p2: "Finvista provides end-to-end assistance in obtaining IEC registration for proprietorships, partnerships, LLPs, and companies. Our professionals guide clients through documentation, DGFT compliance, and digital authentication.",
    features: [
      { title: "DGFT Registration", desc: "New IEC application filing with the Directorate General of Foreign Trade.", icon: "Globe" },
      { title: "IEC Amendment", desc: "Modification of existing IEC details like address, directors, or bank accounts.", icon: "Settings" },
      { title: "Annual IEC Update", desc: "Mandatory yearly update of your IEC to keep it active and valid.", icon: "Clock" },
      { title: "Export Compliance", desc: "Comprehensive guidance on maintaining export-import legal compliance.", icon: "ShieldCheck" },
      { title: "Digital Authentication", desc: "Assistance with DSC (Digital Signature Certificate) linking for DGFT portals.", icon: "Lock" },
      { title: "Post-Registration Support", desc: "Ongoing advisory for smooth customs clearance and international trade.", icon: "HeartHandshake" }
    ],
    benefits: [
      { title: "Global Expansion", desc: "Legally engage in international trade and expand your market reach.", icon: "Globe" },
      { title: "Foreign Currency", desc: "Receive foreign currency payments for exports smoothly without hurdles.", icon: "Wallet" },
      { title: "Lifetime Validity", desc: "IEC has lifetime validity and requires no constant renewal, only annual updates.", icon: "CheckCircle" }
    ],
    timeline: [
      "Consultation",
      "Document Collection",
      "Digital Authentication",
      "DGFT Submission",
      "IEC Certificate Issued"
    ],
    faqs: [
{ q: "Is IEC mandatory for all businesses?", a: "It is mandatory only for businesses importing or exporting goods and services from India." },
    { q: "Can IEC be modified?", a: "Yes, modifications to address, partners, or bank details can be done through the DGFT portal." },
    { q: "Is there a renewal process for IEC?", a: "IEC does not require renewal, but it is mandatory to update your IEC profile annually between April and June." },
    { q: "Do I need a GST registration to apply for an IEC?", a: "No, PAN is the primary requirement, though having GST is highly recommended for commercial exports." },
    { q: "How long does it take to get an IEC?", a: "Once all documents are submitted correctly, the IEC is usually issued within 2 to 5 working days." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
