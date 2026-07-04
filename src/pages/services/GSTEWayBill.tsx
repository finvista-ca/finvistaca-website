import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTEWayBillProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTEWayBill: React.FC<GSTEWayBillProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST E-Way Bill",
    intro_title: "Seamless Goods Tracking",
    intro_p1: "GST eWay Bill is a document for tracking of goods in transit introduced under the Goods and Services Tax. Under GST, a taxable person registered under GST transporting goods with a value of over Rs.50,000 is required to possess an eWay Bill generated from the GST Portal.",
    intro_p2: "The LEDGERS eWay Bill tool is synced to GST invoices, bill of supply, purchase invoices and customer or supplier accounts. So you can now seamlessly at the click of a button generate eWay Bill and share with your customers or suppliers.",
    features: [
      { title: "Supply Generation", desc: "Generate E-Way bill when supplying goods valued over Rs.50,000.", icon: "Globe" },
      { title: "Inter-godown Transfer", desc: "Mandatory E-Way bill for transferring goods over Rs.50,000 between godowns.", icon: "Building" },
      { title: "Unregistered Purchases", desc: "Generate bill when purchasing from unregistered persons.", icon: "UserPlus" },
      { title: "API Integration", desc: "Seamless generation via LEDGERS tool synced to GST invoices.", icon: "Zap" }
    ],
    benefits: [
      { title: "Transit Compliance", desc: "Ensure smooth transit of goods without inspection delays.", icon: "ShieldCheck" },
      { title: "Automated Generation", desc: "Generate bills at the click of a button synced to your invoices.", icon: "Zap" },
      { title: "Transporter Coordination", desc: "Furnish Part A, allowing transporters to easily update Part B.", icon: "Users" },
      { title: "Clear Validity", desc: "Track 1-day validity per 100km accurately to prevent lapses.", icon: "Clock" }
    ],
    timeline: [
      "Invoice Creation",
      "API Authentication",
      "Part A Generation",
      "Transporter Details",
      "E-Way Bill Issuance"
    ],
    faqs: [
{ q: "When is a GST E-Way Bill required?", a: "It is required when a taxable person causes the movement of goods with a consignment value exceeding Rs.50,000." },
    { q: "What is the validity of an E-Way Bill?", a: "Generally, the validity is 1 day for every 100 km (for other than Over Dimensional Cargo)." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
