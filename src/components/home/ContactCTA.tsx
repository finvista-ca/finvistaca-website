import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="cta-wrapper glass-card-dark">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Elevate Your Financial Strategy?</h2>
            <p className="cta-description">
              Partner with Finvista for enterprise-grade tax advisory, auditing, and business compliance services. Let our experts handle the complexity while you focus on growth.
            </p>
            <div className="cta-contact-info" style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <strong>Phone:</strong> +91 8143505094
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <strong>Email:</strong> <a href="mailto:caramakishore@gmail.com" style={{ color: 'inherit' }}>caramakishore@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="cta-form-container">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select required style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.9)', color: 'var(--text-primary)', outline: 'none' }}>
                  <option value="" disabled selected>Service Required</option>
                  <option value="taxation">Taxation</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="gst">GST Compliance</option>
                  <option value="advisory">Financial Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Message" required rows={3} style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.9)', color: 'var(--text-primary)', resize: 'none', outline: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg submit-btn">
                Request Consultation <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
