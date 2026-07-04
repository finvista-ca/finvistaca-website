import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, ShieldCheck, TrendingUp, Clock, Building2, ArrowRight } from 'lucide-react';
import './ServiceCTA.css';

interface ServiceCTAProps {
  serviceName: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ serviceName }) => {
  return (
    <section className="service-cta-wrapper section-padding">
      <div className="container">
        <div className="service-cta-container">
          <div className="cta-left-column">
            <span className="cta-badge">Let's Get Started</span>
            <h2>Ready to Register your {serviceName}?</h2>
            <p>Empower your business with a solid foundation. Ensure accountability, transparency, and strategic growth from day one.</p>
            <ul className="cta-benefits-list">
              <li><CheckCircle2 className="benefit-icon" /> Expert Guidance</li>
              <li><CheckCircle2 className="benefit-icon" /> 100% Compliance</li>
              <li><CheckCircle2 className="benefit-icon" /> Quick & Hassle-Free Process</li>
              <li><CheckCircle2 className="benefit-icon" /> End-to-End Support</li>
            </ul>
            <div className="cta-buttons-container">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started Today <ArrowRight className="icon-right" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="cta-center-column">
            <div className="feature-card">
              <Award className="feature-icon" />
              <span>Legal Recognition</span>
            </div>
            <div className="feature-card">
              <ShieldCheck className="feature-icon" />
              <span>Compliance Support</span>
            </div>
            <div className="feature-card">
              <TrendingUp className="feature-icon" />
              <span>Tax Benefits</span>
            </div>
            <div className="feature-card">
              <Clock className="feature-icon" />
              <span>Faster Registration</span>
            </div>
          </div>
          
          <div className="cta-right-column">
            <div className="illustration-wrapper">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="illustration-main">
                <Building2 size={64} className="main-icon" />
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>

          <div className="decorative-blob blob-1"></div>
          <div className="decorative-blob blob-2"></div>
          <div className="decorative-plus plus-1">+</div>
          <div className="decorative-plus plus-2">+</div>
          <div className="decorative-circle circle-1"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
