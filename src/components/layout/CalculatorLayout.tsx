import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calculator, ArrowRight } from 'lucide-react';
import { calculatorsList } from '../../data/calculatorData';
import '../../pages/Calculator.css';

interface CalculatorLayoutProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({ id, title, description, children }) => {
  const related = calculatorsList.filter((c) => c.id !== id).slice(0, 3);

  return (
    <div className="calculator-detail-page">
      {/* Hero Section */}
      <section className="calculator-hero">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/calculator">Calculators</Link>
            <ChevronRight size={14} />
            <span>{title}</span>
          </div>
          <h1 className="page-title">{title}</h1>
          {description && <p className="page-subtitle">{description}</p>}
        </div>
      </section>

      {/* Calculator */}
      <section className="calculator-main">
        <div className="container">
          <div className="calculator-content-wrapper">
            <div className="calculator-header">
              <Calculator size={24} className="calc-icon" />
              <h2>Interactive Calculator</h2>
            </div>
            <div className="calculator-canvas glass-card">
              {children}
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="related-calculators">
        <div className="container">
          <h2>Related Calculators</h2>
          <div className="calc-grid">
            {related.map((c) => (
              <Link to={`/calculator/${c.id}`} key={c.id} className="calc-card glass-card">
                <div className="calc-card-icon"><Calculator size={28} /></div>
                <h3>{c.title}</h3>
                <div className="calc-card-footer">
                  <span>Calculate Now</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Need help with your taxes or finances?</h2>
              <p>Calculators provide estimates, but our experts provide exact strategies tailored for your business.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
