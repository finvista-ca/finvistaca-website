import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer premium-footer dark-section">
      <div className="container" style={{ padding: '4rem 2rem 2rem' }}>
        <div className="footer-grid">
            
          {/* COLUMN 1: Brand & Newsletter */}
          <div className="footer-col">
            <img src="/finvista-logo.jpeg" alt="FinvistaCA" className="footer-logo company-logo" fetchPriority="low" loading="lazy" />
            <p className="footer-desc">
              FinvistaCA Chartered Accountants is a full-service financial advisory firm helping businesses with taxation, compliance, audits, and strategic financial consulting.
            </p>
            
            <div className="newsletter-section">
              <h5 className="newsletter-title">Subscribe to Insights</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Business Email" className="newsletter-input" required />
                <button type="submit" className="newsletter-btn"><ArrowRight size={18} /></button>
              </form>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ramakishore-itla-609511308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
              <a href="https://www.instagram.com/irk_associates" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={18} /></a>
              <a href="https://www.facebook.com/ramakishore.itla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook size={18} /></a>
              <a href="https://x.com/ramakishoreitla" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FiTwitter size={18} /></a>
              <a href="https://wa.me/919908285223" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links & Knowledge */}
          <div className="footer-col">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>

            <h4 className="footer-subheading" style={{ marginTop: '2.5rem' }}>Knowledge Hub</h4>
            <ul className="footer-links">
              <li><Link to="/knowledge-base">Knowledge Base</Link></li>
              <li><Link to="/news-feed">News Feed</Link></li>
              <li><Link to="/calculator">Calculators</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div className="footer-col">
            <h4 className="footer-subheading">Financial Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#gst">GST Compliance</Link></li>
              <li><Link to="/services#income-tax">Income Tax</Link></li>
              <li><Link to="/services#incorporation">Company Incorporation</Link></li>
              <li><Link to="/services#audit">Audit & Assurance</Link></li>
              <li><Link to="/services#roc">ROC Compliance</Link></li>
              <li><Link to="/services#trademark">Trademark Registration</Link></li>
              <li><Link to="/services#msme">MSME Registration</Link></li>
              <li><Link to="/services#startup">Startup Advisory</Link></li>
              <li><Link to="/services#accounting">Accounting Services</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Branches */}
          <div className="footer-col">
            <h4 className="footer-subheading">Contact & Branches</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <div className="contact-text">
                  <strong>Headquarters</strong><br />
                  76-43-399, HIG-399, Bhavanipuram, Vijayawada, AP
                </div>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <div className="contact-text">
                  <a href="tel:+919908285223">+91 9908285223</a><br/>
                  <a href="tel:+917993856920">+91 7993856920</a>
                </div>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <div className="contact-text">
                  <a href="mailto:finvistaca@gmail.com">finvistaca@gmail.com</a>
                </div>
              </li>
            </ul>
            
            <h5 className="branches-title" style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Other Locations</h5>
            <div className="footer-branches-grid">
              <span>Kakinada</span>
              <span>Parvathipuram</span>
              <span>Visakhapatnam</span>
              <span>Bobbili</span>
              <span>Peddapuram</span>
              <span>Rayagada</span>
              <span>Hyderabad</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-premium">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} FinvistaCA Chartered Accountants. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <ul className="footer-legal-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
