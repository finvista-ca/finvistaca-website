import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    title: 'Expert Professionals',
    description: 'A team of seasoned CAs, CSs, and legal experts with decades of combined experience.',
    icon: Award,
  },
  {
    title: 'Timely Compliance',
    description: 'Automated tracking and proactive alerts ensure you never miss a statutory deadline.',
    icon: Clock,
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication, transparent pricing, and real-time status updates on all services.',
    icon: Shield,
  },
  {
    title: 'Dedicated Support',
    description: 'Personalized relationship managers providing responsive support when you need it most.',
    icon: Users,
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose Finvista</h2>
          <p className="section-subtitle">
            We deliver value beyond compliance, focusing on strategic growth and long-term financial health for our clients.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
