import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Company Overview */}
          <div className="footer-col">
            <img src="/finvista_temp.png" alt="Finvista" className="footer-logo company-logo" fetchPriority="low" loading="lazy" />
            <p className="footer-desc">
              Your trusted partner for comprehensive Chartered Accountancy services, 
              delivering excellence in auditing, taxation, and financial advisory.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ramakishore-itla-609511308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="https://x.com/ramakishoreitla" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaTwitter size={18} /></a>
              <a href="https://www.facebook.com/ramakishore.itla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={18} /></a>
              <a href="https://www.instagram.com/irk_associates" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://wa.me/919866121656" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
            </div>
          </div>

          {/* Column 2: Page Links */}
          <div className="footer-col">
            <h4 className="footer-subheading">Page Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Free Resources */}
          <div className="footer-col">
            <h4 className="footer-subheading">Free Resources</h4>
            <ul className="footer-links">
              <li><a href="https://sachet.rbi.org.in/" target="_blank" rel="noopener noreferrer">RBI Policy</a></li>
              <li><Link to="/data-policy">Data Collection Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="footer-col">
            <h4 className="footer-subheading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/statutory-audit">Audit And Assurance Services</Link></li>
              <li><Link to="/services/annual-compliance-for-private-limited-company">Statutory Compliance Services</Link></li>
              <li><Link to="/services/startup-india-registration">Start Up Services</Link></li>
              <li><Link to="/services/financial-reporting-and-accounting-advisory-services">Financial Consultancy And Support Services</Link></li>
            </ul>
          </div>

          {/* Column 5: Connect With Us */}
          <div className="footer-col">
            <h4 className="footer-subheading">Connect With Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>33-105, Near Sai Ganapathi Theatre, Church Centre, Bobbili, Vizianagaram District, Andhra Pradesh - 535558</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>
                  +91 8143505094<br />
                  +91 7993856920
                </span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:caramakishore@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>caramakishore@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyright {new Date().getFullYear()}, Finvista. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
