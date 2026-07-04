import React from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

const relatedCalcList = [
  {
    "id": "emi",
    "title": "Equated Monthly Installment (EMI)",
    "iframeUrl": "https://catheme.saginfotech.com/calc/Calculators-EMI.html"
  },
  {
    "id": "home-loan",
    "title": "Home Loan Calculator",
    "iframeUrl": "https://catheme.saginfotech.com/calc/Calculators-HomeLoan.html"
  },
  {
    "id": "auto-loan",
    "title": "Auto Loan Calculator",
    "iframeUrl": "https://catheme.saginfotech.com/calc/Calculators-AutoLoan.html"
  }
];

export const NscCalculator: React.FC = () => {
  return (
    <div className="calculator-detail-page">
      <CalculatorLayout 
        title="National Saving Certificates (NSC)" 
        iframeUrl="https://catheme.saginfotech.com/calc/Calculators-NSC.html" 
      />
      
      {/* Related Calculators */}
      <section className="related-calculators" style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', color: '#0f172a' }}>
            Related Calculators
          </h2>
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedCalcList.map(c => (
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
    </div>
  );
};
