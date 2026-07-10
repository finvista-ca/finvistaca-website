import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, TrendingUp, ShieldCheck, PieChart, Briefcase } from 'lucide-react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section dark-section">
      <div className="hero-bg-effects">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-trusted-badge">
            <ShieldCheck size={18} strokeWidth={2.5} />
            PREMIER CHARTERED ACCOUNTANTS
          </h2>
          
          <h1 className="hero-title" style={{ color: '#ffffff' }}>
            Authoritative Financial & <br />
            <span style={{ color: '#1E5EFF' }}>Legal Compliance.</span>
          </h1>
          
          <p className="hero-description" style={{ color: '#D1D5DB', maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
            Partner with premier Chartered Accountants for comprehensive Taxation, GST, Auditing, and Corporate Advisory services. We deliver absolute compliance and strategic financial leadership.
          </p>
          
          <div className="hero-feature-grid">
            <div className="hero-feature-item">
              <div className="feature-icon-box">
                <ShieldCheck size={22} color="#C8A45D" strokeWidth={1.5} />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Strategic Tax Advisory</h3>
                <p className="feature-desc">Optimized tax strategies for individuals and businesses.</p>
              </div>
            </div>
            
            <div className="hero-feature-item">
              <div className="feature-icon-box">
                <Briefcase size={22} color="#C8A45D" strokeWidth={1.5} />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Business Compliance</h3>
                <p className="feature-desc">End-to-end compliance to keep your business future-ready.</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon-box">
                <TrendingUp size={22} color="#C8A45D" strokeWidth={1.5} />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Corporate Consulting</h3>
                <p className="feature-desc">Solutions that drive growth, efficiency, and value.</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon-box">
                <PieChart size={22} color="#C8A45D" strokeWidth={1.5} />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Investment Guidance</h3>
                <p className="feature-desc">Smart investment strategies aligned with your goals.</p>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg action-btn">
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary-gold btn-lg action-btn">
              Explore Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bento-grid">
            <div className="bento-card bento-main glass-card">
              <div className="bento-header">
                <PieChart className="text-brand" size={24} />
                <span className="bento-title">Tax & Audit Excellence</span>
              </div>
              <div className="bento-body">
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="progress-bg" />
                    <circle cx="50" cy="50" r="40" className="progress-value" strokeDasharray="251.2" strokeDashoffset="40" />
                  </svg>
                  <div className="progress-text">
                    <strong>95%</strong>
                    <span>Resolved</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bento-column">
              <div className="bento-card bento-stat glass-card">
                <div className="stat-header">
                  <TrendingUp className="text-success" size={20} />
                  <span className="stat-label">Client Savings</span>
                </div>
                <div className="stat-value text-success">+24.5%</div>
                <div className="mini-trendline">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0 30 Q 20 20 40 25 T 70 10 T 100 5" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0 30 Q 20 20 40 25 T 70 10 T 100 5 L 100 30 L 0 30 Z" fill="rgba(34, 197, 94, 0.1)" />
                  </svg>
                </div>
              </div>
              
              <div className="bento-card bento-stat glass-card">
                <div className="stat-header">
                  <ShieldCheck className="text-brand" size={20} />
                  <span className="stat-label">Compliance Rate</span>
                </div>
                <div className="stat-value">99.8%</div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '99.8%' }}></div>
                </div>
              </div>
            </div>
            
            <Link to="/services?category=advisory" className="bento-card bento-wide glass-card">
              <div className="bento-wide-content">
                <div className="icon-wrapper bg-brand">
                  <Briefcase size={20} color="white" />
                </div>
                <div>
                  <div className="bento-title">Premium Advisory Services</div>
                  <div className="bento-desc">Strategic financial leadership</div>
                </div>
              </div>
              <div className="bento-action-arrow">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
