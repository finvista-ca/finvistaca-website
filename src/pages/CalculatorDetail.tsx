import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Calculator, ArrowRight } from 'lucide-react';
import { calculatorsList } from '../data/calculatorData';
import './Calculator.css';

export const CalculatorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const calculator = calculatorsList.find(c => c.id === id);

  if (!calculator) {
    return <Navigate replace to="/calculator" />;
  }

  // Get 3 related calculators
  const relatedCalculators = calculatorsList
    .filter(c => c.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="calculator-page">
      {/* Hero Section */}
      <section className="calculator-hero">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/calculator">Calculators</Link>
            <ChevronRight size={14} />
            <span>{calculator.title}</span>
          </div>
          <h1 className="page-title">{calculator.title}</h1>
          <p className="page-subtitle">{calculator.description}</p>
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
                src={calculator.iframeUrl} 
                title={calculator.title}
                className="calculator-iframe"
                scrolling="yes"
              ></iframe>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="related-calculators">
            <h2>Related Calculators</h2>
            <div className="calc-grid">
              {relatedCalculators.map(calc => (
                <Link to={`/calculator/${calc.id}`} key={calc.id} className="calc-card glass-card">
                  <div className="calc-card-icon"><Calculator size={24} /></div>
                  <h3>{calc.title}</h3>
                  <p>{calc.description}</p>
                  <div className="calc-card-footer">
                    <span>Use Calculator</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
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
    </div>
  );
};
