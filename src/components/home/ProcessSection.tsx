import React from 'react';
import { MessageSquare, Target, Zap, CheckCircle2 } from 'lucide-react';
import './ProcessSection.css';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Initial assessment of your financial standing and regulatory requirements.',
    icon: MessageSquare
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Development of a tailored financial and compliance roadmap.',
    icon: Target
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Precise implementation of tax, audit, or corporate structuring plans.',
    icon: Zap
  },
  {
    id: 4,
    title: 'Review',
    description: 'Continuous monitoring and optimization of financial performance.',
    icon: CheckCircle2
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Engagement Process</h2>
          <p className="section-subtitle">
            A systematic, outcome-driven approach to every engagement.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="process-step">
                <div className="process-icon-wrapper">
                  <Icon size={32} strokeWidth={1.5} className="process-icon" />
                  <div className="process-number">{step.id}</div>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
