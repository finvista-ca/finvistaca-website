import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ProprietorshipProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Proprietorship: React.FC<ProprietorshipProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Proprietorship Registration",
    intro_title: "Start your solo entrepreneurial journey",
    intro_p1: "A Sole Proprietorship is the simplest and most common business structure in India...",
    intro_p2: "It is ideal for unorganized sectors, freelancers, and small traders who want to start a business quickly with minimal compliance. Since the business and the owner are considered the same entity, the proprietor has complete control over operations and profits.",
    features: [

    ],
    benefits: [

    ],
    timeline: [

    ],
    faqs: [

    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
