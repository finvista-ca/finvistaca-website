// src/components/home/ContactCTA.tsx

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { servicesData, auditServicesData } from '../../data/servicesData';
import { otherServicesData } from '../../data/otherServicesData';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    phone: '+91 9908285223',
    email: 'finvistaca@gmail.com'
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Fetch dynamic contact details from your backend settings API on load
  useEffect(() => {
    async function fetchContactSettings() {
      try {
        const backendUrl = "https://finvistaca-backend-ebon.vercel.app"; // Update with your backend production URL if needed
        const response = await fetch(`${backendUrl}/api/settings`);
        if (response.ok) {
          const data = await response.json();
          if (data.settings) {
            setContactInfo({
              phone: data.settings.primary_phone || '+91 9908285223',
              email: data.settings.support_email || 'finvistaca@gmail.com'
            });
          }
        }
      } catch (err) {
        console.error("Failed to load contact info settings", err);
      }
    }
    fetchContactSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const backendUrl = "https://finvistaca-backend-ebon.vercel.app";
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        branch: "Home Page",
        message: formData.message,
        service: formData.service
      };
      
      const response = await fetch(`${backendUrl}/api/contact`, {
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
              Partner with FinvistaCA for enterprise-grade tax advisory, auditing, and business compliance services. Let our experts handle the complexity while you focus on growth.
            </p>
            <div className="cta-contact-info" style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`} style={{ color: 'inherit' }}>{contactInfo.phone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} style={{ color: 'inherit' }}>{contactInfo.email}</a>
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
            <form className="cta-form contact-page-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
              </div>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="phone" style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label htmlFor="service" style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Services</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} required>
                  <option value="" disabled>Select a service you are enquiring about</option>
                  {[...servicesData, ...auditServicesData, ...otherServicesData].map((column) =>
                    column.categories.map((category) => (
                      <optgroup key={category.title} label={category.title}>
                        {category.items.map((item) => (
                          <option key={item.slug} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    ))
                  )}
                </select>
              </div>
              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label htmlFor="message" style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required rows={3}></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={loading} style={{ width: '100%', padding: '1rem', marginTop: '1.5rem', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderRadius: '0.5rem' }}>
                <Send size={18} strokeWidth={1.5} /> {loading ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};