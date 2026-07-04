import React, { useEffect, useState } from 'react';
import './StatisticsSection.css';

const stats = [
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Clients Served', value: 5000, suffix: '+' },
  { label: 'GST Experts', value: 25, suffix: '+' },
  { label: 'Business Compliance', value: 100, suffix: '%' }
];

export const StatisticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple intersection observer for triggering animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="section stats-section">
      <div className="container">
        <div className={`stats-grid ${isVisible ? 'animate-fade-in' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number-wrapper">
                <span className="stat-number">
                  {isVisible ? stat.value : 0}
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
