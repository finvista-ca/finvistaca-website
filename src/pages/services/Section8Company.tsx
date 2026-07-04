import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface Section8CompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Section8Company: React.FC<Section8CompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Section 8 Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
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
