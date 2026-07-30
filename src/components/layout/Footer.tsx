// src/components/Footer.tsx (Frontend Project)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  const [branches, setBranches] = useState<any[]>([]);
  const [phone, setPhone] = useState("+91 9908285223");

  useEffect(() => {
    async function fetchFooterData() {
      try {
        const backendUrl = "https://finvistaca-backend-ebon.vercel.app";

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
          if (data.settings?.primary_phone) {
            setPhone(data.settings.primary_phone);
          }
        }
      } catch (err) {
        console.error("Failed to load footer data from backend", err);
      }
    }

    fetchFooterData();
  }, []);

  return (
    <footer className="footer premium-footer dark-section">
      <div className="glass-panel-subtle footer-main-card" style={{ padding: '4rem 5%', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <div className="footer-grid">
            
            {/* COLUMN 1: Overview & Trust */}
            <div className="footer-col">
              <img src="/finvista-logo.jpeg" alt="FinvistaCA" className="footer-logo company-logo" fetchPriority="low" loading="lazy" />
            
            <p className="footer-desc">
              Partner with premier Chartered Accountants for comprehensive taxation, compliance, auditing, registrations, accounting, and strategic financial advisory services. We help businesses, startups, entrepreneurs, and individuals navigate complex financial regulations with confidence while building a strong foundation for sustainable growth.
            </p>
            
            <ul className="footer-trust-list">
              <li>• 15+ Years of Experience</li>
              <li>• 500+ Businesses Served</li>
            </ul>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ramakishore-itla-609511308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} strokeWidth={1.5} /></a>
              <a href="https://www.instagram.com/irk_associates" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={18} strokeWidth={1.5} /></a>
              <a href="https://www.facebook.com/ramakishore.itla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook size={18} strokeWidth={1.5} /></a>
              <a href="https://x.com/ramakishoreitla" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FiTwitter size={18} strokeWidth={1.5} /></a>
              <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} strokeWidth={1.5} /></a>
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

          {/* COLUMN 4: Our Branches (Dynamically fetched from Backend API!) */}
          <div className="footer-col">
            <h4 className="footer-subheading">Our Branches</h4>
            <ul className="footer-links">
              {branches.length === 0 ? (
                <li style={{ color: 'var(--text-muted, #aaa)', fontSize: '0.9rem' }}>Loading branches...</li>
              ) : (
                branches.map((branch: any, idx: number) => (
                  <li key={branch.id || idx}>
                    <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} strokeWidth={2} style={{ color: 'var(--brand-gold)' }} />
                      {branch.branch_name || branch.name}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-premium">
          <div className="footer-bottom-left">
            <p>&copy; 2026 FinvistaCA Chartered Accountants.<br className="mobile-break" /> All Rights Reserved.</p>
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