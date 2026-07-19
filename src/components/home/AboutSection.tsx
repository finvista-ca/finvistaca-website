import React from 'react';
import { Award, Target, Users } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About FinvistaCA</h2>
          <p className="about-desc">
            With over 15 years of industry-leading experience, FinvistaCA stands as a pillar of trust and professional excellence in the field of Chartered Accountancy. We specialize in delivering meticulous compliance, robust auditing, and strategic financial advisory to a diverse portfolio of clients ranging from innovative startups to established enterprises.
          </p>
          <p className="about-desc">
            Our firm is built on the unwavering commitment to ethical practices, up-to-date regulatory knowledge, and personalized client success.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon"><Award size={20} /></div>
              <span>Uncompromising Quality</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} /></div>
              <span>Strategic Precision</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Users size={20} /></div>
              <span>Client-Centric Approach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
