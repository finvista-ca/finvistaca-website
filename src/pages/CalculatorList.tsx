import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SmartSearch } from '../components/search/SmartSearch';
import { calculatorsList } from '../data/calculatorData';
import { Calculator, ChevronRight, Star } from 'lucide-react';
import './Services.css';

const popularResources = [
  { name: 'Equated Monthly Installment (EMI)', slug: 'emi', category: 'LOAN' },
  { name: 'Income Tax Calculator', slug: 'income-tax', category: 'TAX' },
  { name: 'Home Loan Calculator', slug: 'home-loan', category: 'LOAN' },
  { name: 'House Rent Allowance (HRA)', slug: 'hra', category: 'TAX' }
];

const quickLinks = [
  { name: 'Popular Calculators', hash: '#popular' },
  { name: 'All Calculators', hash: '#all' },
  { name: 'Tax Consultation', hash: '#consultation' }
];

export const CalculatorList: React.FC = () => {
  const allCalculators = useMemo(() => {
    return calculatorsList.map(calc => ({
      name: calc.title,
      slug: calc.id,
      keywords: calc.keywords,
      category: 'CALCULATOR'
    }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-directory">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="container">
          <div className="service-badge">
            <Calculator size={16} />
            <span>Calculators</span>
          </div>
          <h1 className="service-title">Financial & Tax Calculators</h1>
          <p className="service-subtitle">
            Plan your finances better with our free online calculators for EMI, Home Loans, Income Tax, and more.
          </p>
          
          <div className="search-section">
            <SmartSearch 
              services={allCalculators} 
              basePath="/calculator"
              placeholder="Search calculators (e.g. EMI, HRA)..."
            />
          </div>
        </div>
        <div className="services-hero-pattern"></div>
      </div>

      <div className="services-categories-section">
        <div className="container">
          {/* Quick Navigation */}
          <div className="quick-navigation" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {quickLinks.map(link => (
              <a 
                href={link.hash} 
                key={link.name} 
                className="category-item-card glass-card" 
                style={{ padding: '0.8rem 1.5rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--brand-primary)', border: '1px solid rgba(18, 52, 133, 0.1)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="categories-grid">
            
            {/* Popular Resources Section */}
            <div className="category-block" id="popular">
              <h2 className="category-title">POPULAR CALCULATORS</h2>
              <div className="category-items-grid">
                {popularResources.map((item, idx) => (
                  <Link to={`/calculator/${item.slug}`} key={idx} className="category-item-card glass-card">
                    <div className="category-item-icon">
                      <Star size={20} />
                    </div>
                    <div className="category-item-content">
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem', display: 'block' }}>{item.category}</span>
                      <h4>{item.name}</h4>
                      <span className="category-item-link">Calculate Now <ChevronRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Categories */}
            <div className="category-block" id="all">
              <h2 className="category-title">ALL CALCULATORS</h2>
              <div className="category-items-grid">
                {calculatorsList.map((calc, idx) => (
                  <Link to={`/calculator/${calc.id}`} key={idx} className="category-item-card glass-card">
                    <div className="category-item-icon">
                      <Calculator size={20} />
                    </div>
                    <div className="category-item-content">
                      <h4>{calc.title}</h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem', lineHeight: '1.4' }}>{calc.description}</span>
                      <span className="category-item-link">Calculate <ChevronRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section" id="consultation">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Looking for personalized financial advice?</h2>
              <p>Our experienced Chartered Accountants can help you optimize your tax strategy and investments.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
