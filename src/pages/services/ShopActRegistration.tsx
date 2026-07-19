import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ShopActRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ShopActRegistration: React.FC<ShopActRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Shop & Establishment Registration",
    intro_title: "State Commercial Compliance",
    intro_p1: "Shop and Establishment Registration is a mandatory registration governed by respective State Acts, applicable to businesses operating commercial establishments, shops, offices, restaurants, and service providers.",
    intro_p2: "This registration regulates working conditions, employee rights, business hours, and wages. At FinvistaCA, we provide complete assistance in obtaining the registration, renewals, and amendments to ensure your business operates legally.",
    features: [
      { title: "New Registration", desc: "Filing applications for new shops, offices, and commercial establishments.", icon: "Building" },
      { title: "License Renewal", desc: "Assistance with periodic renewals as per specific state regulations.", icon: "Clock" },
      { title: "Amendments", desc: "Updating details like change in address, employees, or business activity.", icon: "Settings" },
      { title: "Compliance Support", desc: "Guidance on maintaining required registers for wages, holidays, and working hours.", icon: "FileText" },
      { title: "Legal Proof", desc: "Obtaining the certificate that acts as a primary proof of business existence.", icon: "CheckCircle" },
      { title: "Closure Intimation", desc: "Filing necessary forms for the cancellation or closure of the establishment.", icon: "XOctagon" }
    ],
    benefits: [
      { title: "Legal Proof of Entity", desc: "Serves as essential legal proof for opening bank accounts and obtaining other licenses.", icon: "BadgeCheck" },
      { title: "Avoid Penalties", desc: "Strict compliance with state laws prevents heavy fines and sudden closure.", icon: "ShieldAlert" },
      { title: "Employee Trust", desc: "Demonstrates commitment to employee welfare and statutory working conditions.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Document Collection",
      "Application Drafting",
      "State Portal Submission",
      "Inspector Verification",
      "Certificate Issued"
    ],
    faqs: [
{ q: "Who needs a Shop Act License?", a: "Any commercial establishment, shop, office, restaurant, or hotel operating within the municipal limits of a state." },
    { q: "Is it required if I work from home?", a: "If you are running a registered business or employing staff from a residential premise, it may be required depending on state rules." },
    { q: "How long is the license valid?", a: "Validity varies by state. Some issue it for a lifetime, while others require annual or 3-year renewals." },
    { q: "Can I open a current bank account with this?", a: "Yes, the Shop and Establishment certificate is widely accepted by banks as valid proof of business existence." },
    { q: "When should I apply for the license?", a: "Normally, you must apply within 30 days of commencing business operations." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
