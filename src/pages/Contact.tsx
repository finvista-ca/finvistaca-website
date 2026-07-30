import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Building, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImmediateAssistanceCTA } from '../components/shared/ImmediateAssistanceCTA';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import { servicesData, auditServicesData } from '../data/servicesData';
import { otherServicesData } from '../data/otherServicesData';
import './Contact.css';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState<any[]>([]);
  const [headquarters, setHeadquarters] = useState({
    address: "76-43-399, HIG-399, Ground Floor,\nH. B. Colony, Bhavanipuram,\nVijayawada, Krishna Dt., AP.",
    phone1: "+91 9908285223",
    phone2: "+91 7993856920",
    email: "finvistaca@gmail.com"
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // Fetch branches and settings dynamically from the backend API on load
  useEffect(() => {
    async function fetchContactData() {
      try {
        const backendUrl = "https://finvistaca-backend-ebon.vercel.app"; // Update with production URL if needed
        const [branchesRes, settingsRes] = await Promise.all([
          fetch(`${backendUrl}/api/branches`),
          fetch(`${backendUrl}/api/settings`)
        ]);

        if (branchesRes.ok) {
          const data = await branchesRes.json();
          setBranches(data.branches || []);
        }

        if (settingsRes.ok) {
          const data = await settingsRes.json();
          if (data.settings) {
            setHeadquarters({
              address: data.settings.office_address || "76-43-399, HIG-399, Ground Floor,\nH. B. Colony, Bhavanipuram,\nVijayawada, Krishna Dt., AP.",
              phone1: data.settings.primary_phone || "+91 9908285223",
              phone2: "+91 7993856920",
              email: data.settings.support_email || "finvistaca@gmail.com"
            });
          }
        }
      } catch (err) {
        console.error("Failed to load contact page dynamic data", err);
      }
    }

    fetchContactData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const backendUrl = "https://finvistaca-backend-ebon.vercel.app";
      const response = await fetch(
        `${backendUrl}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            branch: "Not specified",
            message: formData.message,
            service: formData.service
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

    } catch (error: any) {
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
        title="Contact Us"
        description="Get in touch with our experts for your financial, auditing, and compliance needs. We have offices across multiple locations to serve you better."
      />

      {/* Main Content Area */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* 1. HQ Section */}
            <div className="contact-section-hq">
              <div className="section-header">
                <h1 className="section-title" style={{ marginBottom: '16px' }}>Contact Us</h1>
                <p className="info-desc">Visit our headquarters or one of our branch offices.</p>
              </div>
              
              <div className="hq-card glass-card">
                <div className="hq-badge">Headquarters</div>
                <h3>Vijayawada</h3>
                <div className="info-items">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Vijayawada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-item"
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <div className="info-icon"><MapPin size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {headquarters.address}
                      </p>
                    </div>
                  </a>
                  <div className="info-item">
                    <div className="info-icon"><Phone size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p><a href={`tel:${headquarters.phone1}`}>{headquarters.phone1}</a></p>
                      {headquarters.phone2 && <p><a href={`tel:${headquarters.phone2}`}>{headquarters.phone2}</a></p>}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Mail size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p><a href={`mailto:${headquarters.email}`}>{headquarters.email}</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Clock size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Contact Form */}
            <div className="contact-section-form">
              <div className="glass-card form-wrapper">
                <h2>Request a Consultation</h2>
                <p className="form-desc">Fill out the form below and our team will get back to you shortly.</p>
                {sent ? (
                  <div className="form-success" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={48} strokeWidth={1.5} style={{ color: '#2e9e5b', margin: '0 auto 1rem auto' }} />
                    <h3>Thank you for reaching out!</h3>
                    <p className="form-desc">Your message has been received. Our team will get back to you within 24 business hours.</p>
                  </div>
                ) : (
                <form
                  className="contact-page-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Services</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
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

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                    <Send size={18} strokeWidth={1.5} /> {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
                )}

                <div className="quick-response">
                  <Clock size={16} strokeWidth={1.5} />
                  <span>We typically respond within 24 business hours.</span>
                </div>
              </div>
            </div>

            {/* 3. Branches Section (Dynamically Mapped, excluding Head Office) */}
            <div className="contact-section-branches">
              <h3 className="branches-title">Branch Offices</h3>
              <div className="branches-grid">
                {branches.length === 0 ? (
                  <p className="text-muted-foreground">Loading branch offices...</p>
                ) : (
                  (() => {
                    const regularBranches = branches.filter((branch) => {
                      const name = (branch.branch_name || branch.name || "").toLowerCase();
                      return !name.includes("vijayawada") && !name.includes("head office");
                    });

                    if (regularBranches.length === 0) {
                      return <p className="text-muted-foreground">No other branch offices available.</p>;
                    }

                    return regularBranches.map((branch) => {
                      const branchName = branch.branch_name || branch.name;
                      const mapUrl = `https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+${encodeURIComponent(branchName)}`;
                      
                      return (
                        <a 
                          key={branch.id || branchName}
                          href={mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-branch-card"
                          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                          <div className="branch-card-header">
                            <MapPin size={18} strokeWidth={2} className="branch-icon" />
                            <h4>{branchName}</h4>
                          </div>
                          <div className="branch-card-body">
                            <p style={{ whiteSpace: 'pre-line' }}>{branch.address}</p>
                            {branch.phone && <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>📞 {branch.phone}</p>}
                          </div>
                        </a>
                      );
                    });
                  })()
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ImmediateAssistanceCTA />
    </div>
  );
};