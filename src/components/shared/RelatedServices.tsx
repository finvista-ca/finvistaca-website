import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import type { ServiceItem } from '../../data/servicesData';
import './RelatedServices.css';

interface RelatedServicesProps {
  services: ServiceItem[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="related-services-wrapper section-padding">
      <div className="container">
        <div className="related-services-header">
          <h2>Related Services</h2>
          <p>Explore other services that might benefit your business growth and compliance.</p>
        </div>
        
        <div className="related-services-grid">
          {services.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index} className="related-service-card">
              <div className="card-icon-wrapper">
                <FileText className="card-icon" />
              </div>
              <div className="card-content">
                <h3>{service.name}</h3>
                <p>Professional {service.name.toLowerCase()} services and consultation.</p>
              </div>
              <div className="card-action">
                <ArrowRight className="action-icon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
