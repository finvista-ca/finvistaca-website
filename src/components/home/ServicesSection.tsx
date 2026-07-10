import React from 'react';
import { FileSearch, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const coreServices = [
  {
    id: 'direct-tax',
    title: 'Taxation Services',
    description: 'Comprehensive tax planning, compliance, and dispute resolution for individuals and corporations.',
    icon: FileSearch,
    path: '/services?category=direct-tax',
    features: ['Corporate Tax Planning', 'International Taxation', 'Transfer Pricing', 'Tax Representation']
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    description: 'Rigorous statutory and internal audits ensuring compliance, transparency, and operational efficiency.',
    icon: ShieldCheck,
    path: '/services?category=audit',
    features: ['Statutory Audit', 'Internal Audit', 'Information Systems Audit', 'Due Diligence']
  },
  {
    id: 'advisory',
    title: 'Corporate Advisory',
    description: 'Strategic financial consulting to drive growth, optimize capital structure, and navigate complex transactions.',
    icon: Calculator,
    path: '/services?category=advisory',
    features: ['Mergers & Acquisitions', 'Valuation Services', 'Financial Restructuring', 'Risk Management']
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="section services-section bg-light">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Strategic capabilities designed to address the most complex financial and regulatory challenges.
          </p>
        </div>

        <div className="services-alternating">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className={`service-row ${isEven ? '' : 'row-reverse'}`}>
                {/* Visual Side */}
                <motion.div 
                  className="service-visual"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="service-visual-inner">
                    <Icon size={120} strokeWidth={1} className="service-large-icon" />
                    <div className="visual-decoration"></div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="service-content"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="service-icon-small">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-row-title">{service.title}</h3>
                  <p className="service-row-desc">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <Link to={service.path} className="btn-primary" style={{ display: 'inline-flex', marginTop: '2rem', gap: '0.5rem' }}>
                    Explore Practice <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
