import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calculator, ArrowRight } from 'lucide-react';
import '../../pages/Calculator.css';

interface CalculatorLayoutProps {
  title: string;
  description?: string;
  iframeUrl: string;
}

export const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({ title, description, iframeUrl }) => {
  return (
    <>
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

      {/* Main Content Area */}
      <section className="calculator-main">
        <div className="container">
          <div className="calculator-content-wrapper">
            <div className="calculator-header">
              <Calculator size={24} className="calc-icon" />
              <h2>Interactive Calculator</h2>
            </div>
            
            <div className="calculator-iframe-container glass-card">
              <iframe 
                src={iframeUrl} 
                title={title}
                className="calculator-iframe"
                scrolling="yes"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
    </>
  );
};
