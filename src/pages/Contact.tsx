import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Building, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImmediateAssistanceCTA } from '../components/shared/ImmediateAssistanceCTA';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import './Contact.css';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  branch: "",
  message: "",
});

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
    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      branch: "",
      message: "",
    });

  } catch (error: any) {
    alert(error.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  const branchList = [
    { 
      name: 'Kakinada', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Kakinada',
      address: (
        <>
          2-34-8/A, 1st Floor,<br />
          Perrajupeta,<br />
          Near Mamatha Scan Center,<br />
          Kakinada – 533001
        </>
      ) 
    },
    { 
      name: 'Bobbili', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Bobbili',
      address: (
        <>
          33-105, Near Sai Ganapathi Theatre,<br />
          Church Centre, Bobbili,<br />
          Vizianagaram Dist. AP - 535558
        </>
      ) 
    },
    {
      name: 'Hyderabad',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Hyderabad',
      address: (
        <>
          Plot 854, H No 6-14/2/1,<br />
          Budha Nager Colony, Road No 07,<br />
          Boduppal, Uppal Bus Depot - 500092
        </>
      )
    },
    { 
      name: 'Visakhapatnam', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Visakhapatnam',
      address: (
        <>
          Guru Nivas, D.No: 50-53-6/E,<br />
          Flat No MIG-245, Near Abaya Swamy Temple,<br />
          Near Presidential School, BS Layout,<br />
          Seethammadhara, Visakhapatnam - 530013
        </>
      ) 
    },
    { 
      name: 'Parvathipuram', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Parvathipuram',
      address: (
        <>
          D.No. 1-1,<br />
          Beside ITDA Petrol Bunk,<br />
          Belagam,<br />
          Parvathipuram,<br />
          Manyam District,<br />
          Andhra Pradesh – 535501
        </>
      ) 
    },
    { 
      name: 'Peddapuram', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Peddapuram',
      address: (
        <>
          21-1-19/A,<br />
          1st Floor,<br />
          Opp. Lalitha Theatre,<br />
          Rajahmundry Road,<br />
          Peddapuram – 533437
        </>
      ) 
    },
    { 
      name: 'Rayagada (Odisha)', 
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=FinvistaCA+Chartered+Accountants+Rayagada',
      address: (
        <>
          Indira Nagar,<br />
          3rd Lane,<br />
          Near Rayagada College,<br />
          Rayagada,<br />
          Odisha – 765001
        </>
      ) 
    }
  ];

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
                <h2>Our Offices</h2>
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
                      <p>
                        76-43-399, HIG-399, Ground Floor,<br />
                        H. B. Colony, Bhavanipuram,<br />
                        Vijayawada, Krishna Dt., AP.
                      </p>
                    </div>
                  </a>
                  <div className="info-item">
                    <div className="info-icon"><Phone size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p><a href="tel:+919908285223">+91 9908285223</a></p>
                      <p><a href="tel:+917993856920">+91 7993856920</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Mail size={20} strokeWidth={1.5} /></div>
                    <div className="info-content">
                      <p><a href="mailto:finvistaca@gmail.com">finvistaca@gmail.com</a></p>
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
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="branch">Preferred Branch</label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your preferred branch</option>
                      <option value="Vijayawada (Head Office)">Vijayawada (Head Office)</option>
                      <option value="Bobbili">Bobbili</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Kakinada">Kakinada</option>
                      <option value="Parvathipuram">Parvathipuram</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Peddapuram">Peddapuram</option>
                      <option value="Rayagada (Odisha)">Rayagada (Odisha)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="How can we help you?" required></textarea>
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

            {/* 3. Branches Section */}
            <div className="contact-section-branches">
              <h3 className="branches-title">Branch Offices</h3>
              <div className="branches-grid">
                {branchList.map(branch => (
                  <a 
                    key={branch.name}
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-branch-card"
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <div className="branch-card-header">
                      <MapPin size={18} strokeWidth={2} className="branch-icon" />
                      <h4>{branch.name}</h4>
                    </div>
                    <div className="branch-card-body">
                      <p>{branch.address}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ImmediateAssistanceCTA />
    </div>
  );
};
