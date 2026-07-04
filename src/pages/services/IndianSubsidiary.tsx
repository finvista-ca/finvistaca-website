import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface IndianSubsidiaryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const IndianSubsidiary: React.FC<IndianSubsidiaryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Indian Subsidiary",
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
