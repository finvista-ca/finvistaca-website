import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.service ? `[Service: ${formData.service}]\n${formData.message}` : formData.message
      };
      
      const response = await fetch('https://finvistaca-backend-ebon.vercel.app/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      
      setSent(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err: any) {
      alert(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
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
            {sent ? (
              <div className="cta-form-success" style={{ textAlign: 'center', padding: '2rem 1rem', color: '#fff' }}>
                <CheckCircle2 size={48} style={{ color: '#4ade80', marginBottom: '0.75rem' }} />
                <h3 style={{ margin: '0 0 0.5rem' }}>Request received!</h3>
                <p style={{ margin: 0, opacity: 0.9 }}>Thank you. Our experts will contact you shortly to schedule your consultation.</p>
              </div>
            ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select name="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.9)', color: 'var(--text-primary)', outline: 'none' }}>
                  <option value="" disabled>Service Required</option>
                  <option value="taxation">Taxation</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="gst">GST Compliance</option>
                  <option value="advisory">Financial Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required rows={3} style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.9)', color: 'var(--text-primary)', resize: 'none', outline: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Request Consultation'} <ArrowRight size={18} />
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
