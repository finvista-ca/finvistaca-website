import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our experts for your financial, auditing, and compliance needs. We have offices across multiple locations to serve you better.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Details (Left Column) */}
            <div className="contact-info-panel">
              <div className="section-header">
                <h2>Our Offices</h2>
                <p className="info-desc">Visit our headquarters or one of our branch offices.</p>
              </div>
              
              <div className="hq-card glass-card">
                <div className="hq-badge">Headquarters</div>
                <h3>Kakinada</h3>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon"><MapPin size={20} /></div>
                    <div className="info-content">
                      <p>
                        2-34-8/A, 1st Floor, Perrajupeta,<br />
                        Near Mamatha Scan Center,<br />
                        Kakinada - 533001
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Phone size={20} /></div>
                    <div className="info-content">
                      <p><a href="tel:+918143505094">+91 8143505094</a></p>
                      <p><a href="tel:+917993856920">+91 7993856920</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Mail size={20} /></div>
                    <div className="info-content">
                      <p><a href="mailto:caramakishore@gmail.com">caramakishore@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Clock size={20} /></div>
                    <div className="info-content">
                      <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="branches-title">Branch Offices</h3>
              <div className="branches-grid">
                <div className="branch-card">
                  <h4><Building size={16} /> Parvathipuram</h4>
                  <p>Dno. 1-1, Beside ITDA Petrol Bunk, Belagam, Parvathipuram, Manyam Dist AP - 535501</p>
                </div>
                <div className="branch-card">
                  <h4><Building size={16} /> Vijayawada</h4>
                  <p>DNO. 41-1-41C, SS Nilayam, KT Road, Chitti Nagar, Vijayawada - 520001</p>
                </div>
                <div className="branch-card">
                  <h4><Building size={16} /> Visakhapatnam</h4>
                  <p>49-24-6/1, 4th Floor, Upstairs More Super Market, Sankaramatam Main Road, Visakhapatnam - 530016</p>
                </div>
                <div className="branch-card">
                  <h4><Building size={16} /> Bobbili</h4>
                  <p>33-105, Near Sai Ganapathi Theatre, Church Centre, Bobbili, Vizianagaram Dist. AP - 535558</p>
                </div>
                <div className="branch-card">
                  <h4><Building size={16} /> Peddapuram</h4>
                  <p>21-1-19/A, 1st Floor, opp. Lalitha Theatre, Rajahmundry Road, Peddapuram - 533437</p>
                </div>
                <div className="branch-card">
                  <h4><Building size={16} /> Odisha</h4>
                  <p>Indira Nagar, 3rd Lane, Near Rayagada College, Rayagada, Odisha - 765001</p>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="contact-form-panel">
              <div className="glass-card form-wrapper">
                <h2>Request a Consultation</h2>
                <p className="form-desc">Fill out the form below and our team will get back to you shortly.</p>
                <form className="contact-page-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="Your phone number" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="Your email address" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={6} placeholder="How can we help you?" required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </form>

                <div className="quick-response">
                  <Clock size={16} />
                  <span>We typically respond within 24 business hours.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="contact-map">
        <div className="container">
          <div className="map-container glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15201.06710821509!2d83.29318401293884!3d17.732064769791176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432550b18955%3A0x68f6dc0198a265b9!2sVisakhapatnam%2C%20Andhra%20Pradesh%20530016!5e0!3m2!1sen!2sin!4v1748925331918!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Need immediate assistance?</h2>
              <p>Our team of chartered accountants is ready to help you with your business compliance and taxation needs.</p>
              <div className="cta-buttons">
                <a href="tel:+918143505094" className="btn btn-primary">Call Us Now</a>
                <a href="mailto:caramakishore@gmail.com" className="btn btn-secondary">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
