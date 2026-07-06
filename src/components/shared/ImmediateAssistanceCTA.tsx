import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import './ImmediateAssistanceCTA.css';

export const ImmediateAssistanceCTA: React.FC = () => {
  return (
    <section className="immediate-cta-section">
      <div className="container">
        <motion.div 
          className="immediate-cta-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="cta-decoration shape-1"></div>
          <div className="cta-decoration shape-2"></div>
          
          <div className="immediate-cta-grid">
            {/* Left Side */}
            <div className="immediate-cta-left">
              <h2 className="cta-heading">Need Immediate Assistance?</h2>
              <p className="cta-description">
                Our experienced Chartered Accountants are ready to assist you with taxation, audits, compliance, registrations, GST, business advisory, and financial consulting.
              </p>
              
              <div className="cta-badges">
                <div className="cta-badge">
                  <CheckCircle2 size={18} className="badge-icon" />
                  <span>Expert CA Guidance</span>
                </div>
                <div className="cta-badge">
                  <CheckCircle2 size={18} className="badge-icon" />
                  <span>Quick Response</span>
                </div>
                <div className="cta-badge">
                  <CheckCircle2 size={18} className="badge-icon" />
                  <span>Trusted Financial Advisors</span>
                </div>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="immediate-cta-right">
              <div className="premium-contact-card">
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="info-icon-wrapper">
                      <Phone size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Call Us</span>
                      <a href="tel:+918143505094" className="info-value">+91 8143505094</a>
                      <a href="tel:+917993856920" className="info-value">+91 7993856920</a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="info-icon-wrapper">
                      <Mail size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Email</span>
                      <a href="mailto:caramakishore@gmail.com" className="info-value">caramakishore@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="info-icon-wrapper">
                      <Clock size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Working Hours</span>
                      <span className="info-value">Mon – Sat</span>
                      <span className="info-value">9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="cta-action-buttons">
                  <a href="tel:+918143505094" className="btn btn-primary cta-btn-primary">
                    <Phone size={18} /> Call Now
                  </a>
                  <a href="mailto:caramakishore@gmail.com" className="btn btn-outline cta-btn-secondary">
                    <Mail size={18} /> Email Us
                  </a>
                </div>
                
                <div className="cta-response-time">
                  <Clock size={14} />
                  <span>Usually responds within 24 business hours.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
