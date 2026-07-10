import React from 'react';
import { Monitor, Building2, Stethoscope, Factory, ShoppingCart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import './IndustryExpertise.css';

const industries = [
  {
    id: 'technology',
    name: 'Technology & IT',
    icon: Monitor
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Infrastructure',
    icon: Building2
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    icon: Stethoscope
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: ShoppingCart
  },
  {
    id: 'startups',
    name: 'Startups & Unicorns',
    icon: Rocket
  }
];

export const IndustryExpertise: React.FC = () => {
  return (
    <section className="section industry-section dark-section">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Industry Expertise</h2>
          <p className="section-subtitle text-secondary">
            Deep domain knowledge across diverse sectors to provide specialized advisory.
          </p>
        </div>

        <div className="industry-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div 
                key={industry.id} 
                className="industry-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="industry-icon-wrapper">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="industry-name">{industry.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
