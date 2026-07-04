import React from 'react';
import { Landmark } from 'lucide-react';
import './Associations.css';

const institutions = [
  'ICAI', 'Ministry of Corporate Affairs', 'GST Network', 'Income Tax Department',
  'MSME / Udyam', 'Startup India', 'EPFO', 'RBI',
];

export const Associations: React.FC = () => {
  return (
    <section className="section associations-section">
      <div className="container">
        <div className="associations-header">
          <div className="associations-icon"><Landmark size={28} /></div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Association with Leading Financial Institutions</h2>
          <p className="section-subtitle" style={{ margin: 0 }}>
            We work closely with regulators, statutory bodies and financial platforms to keep your compliance seamless.
          </p>
        </div>

        <div className="associations-grid">
          {institutions.map((name) => (
            <div key={name} className="association-badge glass-card">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
