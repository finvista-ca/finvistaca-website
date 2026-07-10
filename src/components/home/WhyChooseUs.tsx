import React from 'react';
import { Award, Shield, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const features = [
  {
    title: 'Executive Intelligence',
    description: 'A team of experienced chartered accountants and financial consultants with deep expertise across taxation, audits, compliance, and business advisory. We deliver practical, insight-driven solutions that help organizations make informed financial decisions with confidence.',
    highlight: 'Strategic Advisory • Tax Expertise • Financial Leadership',
    icon: Award,
  },
  {
    title: 'Data-Driven Insights',
    description: 'We combine financial expertise with modern analytics to transform business data into meaningful insights. Our recommendations help clients improve operational efficiency, manage risk, optimize taxation, and drive sustainable long-term growth.',
    highlight: 'Analytics • Planning • Performance',
    icon: BarChart3,
  },
  {
    title: 'Absolute Compliance',
    description: 'From statutory filings and GST compliance to corporate governance and regulatory reporting, we ensure every obligation is handled accurately and on time. Our proactive approach minimizes risk and provides complete peace of mind.',
    highlight: 'GST • ROC • Income Tax • Audit',
    icon: Shield,
  },
  {
    title: 'Strategic Partnership',
    description: 'We believe in building long-term relationships rather than delivering one-time services. As your financial advisory partner, we continuously support your business through every stage of growth with strategic guidance and proactive consultation.',
    highlight: 'Long-Term Partnership • Business Growth',
    icon: Users,
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us dark-section relative" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid" style={{ opacity: 0.05 }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">The Finvista Difference</h2>
          <p className="section-subtitle text-secondary">
            Beyond traditional accounting—we deliver strategic financial leadership.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="feature-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
                {feature.highlight && (
                  <div className="feature-highlight">{feature.highlight}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
