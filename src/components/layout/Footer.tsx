import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const branches = [
  {
    name: 'Kakinada',
    address: '2-34-8/A, 1st Floor, Perrajupeta, Near Mamatha Scan Center, Kakinada - 533001'
  },
  {
    name: 'Parvathipuram',
    address: 'Dno. 1-1, Beside ITDA Petrol Bunk, Belagam, Parvathipuram, Manyam Dist AP - 535501'
  },
  {
    name: 'Vijayawada',
    address: 'DNO. 41-1-41C, SS Nilayam, KT Road, Chitti Nagar, Vijayawada - 520001'
  },
  {
    name: 'Visakhapatnam',
    address: 'Guru Nivas, D.No: 50-53-6/E, Flat No MIG-245, Near Abaya Swamy Temple, Near Presidential School, BS Layout, Seethammadhara, Visakhapatnam - 530013'
  },
  {
    name: 'Bobbili',
    address: '33-105, Near Sai Ganapathi Theatre, Church Centre, Bobbili, Vizianagaram Dist. AP - 535558'
  },
  {
    name: 'Peddapuram',
    address: '21-1-19/A, 1st Floor, opp. Lalitha Theatre, Rajahmundry Road, Peddapuram - 533437'
  },
  {
    name: 'Odisha',
    address: 'Indira Nagar, 3rd Lane, Near Rayagada College, Rayagada, Odisha - 765001'
  },
  {
    name: 'Hyderabad',
    address: 'Plot 854, H No 6-14/2/1, Budha Nager Colony, Road No 07, Boduppal, Uppal Bus Depot - 500092'
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer premium-footer dark-section">
      <div className="glass-panel-subtle footer-main-card" style={{ padding: '4rem 5%', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <div className="footer-grid">
            
            {/* COLUMN 1: Overview & Trust */}
            <div className="footer-col">
              <img src="/finvista-logo.jpeg" alt="Finvista" className="footer-logo company-logo" fetchPriority="low" loading="lazy" />
            
            <p className="footer-desc">
              Finvista Chartered Accountants is a full-service financial advisory and chartered accountancy firm helping businesses, startups, entrepreneurs, and individuals with taxation, compliance, audits, registrations, accounting, and strategic financial consulting across multiple locations.
            </p>
            
            <ul className="footer-trust-list">
              <li>• ICAI Registered Firm</li>
              <li>• 15+ Years of Experience</li>
              <li>• 500+ Businesses Served</li>
            </ul>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ramakishore-itla-609511308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} strokeWidth={1.5} /></a>
              <a href="https://www.instagram.com/irk_associates" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={18} strokeWidth={1.5} /></a>
              <a href="https://www.facebook.com/ramakishore.itla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook size={18} strokeWidth={1.5} /></a>
              <a href="https://x.com/ramakishoreitla" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FiTwitter size={18} strokeWidth={1.5} /></a>
              <a href="https://wa.me/919908285223" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/other-services">Other Services</Link></li>
              <li><Link to="/knowledge-base">Knowledge Base</Link></li>
              <li><Link to="/news-feed">News Feed</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Financial Services */}
          <div className="footer-col">
            <h4 className="footer-subheading">Financial Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#gst">GST Registration</Link></li>
              <li><Link to="/services#income-tax">Income Tax</Link></li>
              <li><Link to="/services#incorporation">Company Incorporation</Link></li>
              <li><Link to="/services#audit">Audit & Assurance</Link></li>
              <li><Link to="/services#roc">ROC Compliance</Link></li>
              <li><Link to="/services#trademark">Trademark Registration</Link></li>
              <li><Link to="/services#msme">MSME Registration</Link></li>
              <li><Link to="/services#startup">Startup Advisory</Link></li>
              <li><Link to="/services#consulting">Business Consulting</Link></li>
              <li><Link to="/services#accounting">Accounting Services</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Our Branches */}
          <div className="footer-col">
            <h4 className="footer-subheading">Our Branches</h4>
            <ul className="footer-links">
              {branches.map((branch, idx) => (
                <li key={idx}>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} strokeWidth={2} style={{ color: 'var(--brand-gold)' }} />
                    {branch.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-premium">
          <div className="footer-bottom-left">
            <p>&copy; 2026 Finvista Chartered Accountants.<br className="mobile-break" /> All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-center">
            <p>Accounting for Success</p>
          </div>
          <div className="footer-bottom-right">
            <ul className="footer-legal-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

