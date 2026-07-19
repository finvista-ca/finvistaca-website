import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NGODarpanProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NGODarpan: React.FC<NGODarpanProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "NGO Darpan Registration",
    intro_title: "NITI Aayog Recognition",
    intro_p1: "NGO Darpan Registration is an online registration system managed by NITI Aayog that enables NGOs, Trusts, and Societies to establish credibility and become eligible for various government grants and schemes.",
    intro_p2: "Registration creates a unique identification number that is mandatory for receiving assistance from Central Government Ministries. FinvistaCA assists NGOs throughout the registration process, profile creation, and compliance guidance.",
    features: [
      { title: "Profile Creation", desc: "Setting up a comprehensive and accurate profile on the Darpan Portal.", icon: "UserCheck" },
      { title: "Document Verification", desc: "Ensuring all trust deeds, society registrations, and PAN details are verified.", icon: "FileCheck" },
      { title: "Unique ID Generation", desc: "Securing the mandatory Unique Identification Number for government grants.", icon: "BadgeCheck" },
      { title: "Compliance Guidance", desc: "Advisory on maintaining transparency and good governance.", icon: "ShieldCheck" },
      { title: "Grant Application Support", desc: "Assistance in navigating government schemes post-registration.", icon: "TrendingUp" },
      { title: "Update Management", desc: "Regular updates of FCRA, board members, and operational sectors on the portal.", icon: "Settings" }
    ],
    benefits: [
      { title: "Government Grants", desc: "Become eligible to apply for schemes from various Central Government Ministries.", icon: "Wallet" },
      { title: "Enhanced Credibility", desc: "Establishes immense trust and operational transparency in the public domain.", icon: "HeartHandshake" },
      { title: "FCRA Prerequisites", desc: "Darpan ID is highly recommended and often required for FCRA registrations.", icon: "Globe" }
    ],
    timeline: [
      "Document Collation",
      "Portal Registration",
      "Data Entry",
      "Aadhaar Authentication",
      "Unique ID Generation"
    ],
    faqs: [
{ q: "What is NGO Darpan?", a: "It is a platform maintained by NITI Aayog that serves as a centralized database of NGOs in India." },
    { q: "Who can register on NGO Darpan?", a: "Registered Trusts, Societies, and Section 8 Companies operating as NGOs can register." },
    { q: "Is it mandatory to register?", a: "Yes, it is mandatory if the NGO intends to receive grants or funding from the Central Government or its ministries." },
    { q: "What is required for registration?", a: "PAN of the NGO, Registration Certificate, and PAN/Aadhaar details of at least three governing board members." },
    { q: "Do I have to pay renewal fees?", a: "No, NGO Darpan registration is a one-time process and does not require renewal, though profile updates are recommended." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
