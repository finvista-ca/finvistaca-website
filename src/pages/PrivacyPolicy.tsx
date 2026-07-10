import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Settings, 
  ShieldCheck, 
  Cookie, 
  Globe, 
  Share2, 
  Archive, 
  UserCheck, 
  PhoneCall, 
  RefreshCw 
} from 'lucide-react';
import './PrivacyPolicy.css';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy matters to us. This Privacy Policy explains how FinVista collects, uses, stores, and protects your information when you interact with our website and services.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="privacy-main">
        <div className="privacy-container">
          
          {/* Section 1: Information We Collect */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Database size={24} /></div>
              <h2>1. Information We Collect</h2>
            </div>
            <div className="privacy-content">
              <p>We may collect the following information when you interact with our website:</p>
              <ul>
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Business Name</li>
                <li>GST/PAN information voluntarily shared</li>
                <li>Messages submitted through contact forms</li>
                <li>Consultation requests</li>
                <li>Browser and device information</li>
                <li>Cookies and website analytics</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2: How We Use Your Information */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Settings size={24} /></div>
              <h2>2. How We Use Your Information</h2>
            </div>
            <div className="privacy-content">
              <p>We use your information for:</p>
              <ul>
                <li>Responding to enquiries</li>
                <li>Scheduling consultations</li>
                <li>Providing Chartered Accountant and financial services</li>
                <li>Improving website performance</li>
                <li>Customer support</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3: Information Security */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><ShieldCheck size={24} /></div>
              <h2>3. Information Security</h2>
            </div>
            <div className="privacy-content">
              <ul>
                <li>Industry-standard security measures are implemented.</li>
                <li>Personal information is protected against unauthorized access.</li>
                <li>Only authorized personnel have access to client information.</li>
                <li>Appropriate administrative and technical safeguards are maintained.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 4: Cookies */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Cookie size={24} /></div>
              <h2>4. Cookies</h2>
            </div>
            <div className="privacy-content">
              <p>We use cookies to:</p>
              <ul>
                <li>Improve website performance</li>
                <li>Remember user preferences</li>
                <li>Analyze website traffic</li>
                <li>Enhance browsing experience</li>
              </ul>
              <p>Users can disable cookies through their browser settings if they choose.</p>
            </div>
          </motion.div>

          {/* Section 5: Third-Party Services */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Globe size={24} /></div>
              <h2>5. Third-Party Services</h2>
            </div>
            <div className="privacy-content">
              <p>The website may use trusted third-party services such as:</p>
              <ul>
                <li>Google Analytics</li>
                <li>WhatsApp</li>
                <li>Email service providers</li>
                <li>Cloud hosting providers</li>
              </ul>
              <p>Each third-party service maintains its own privacy policy.</p>
            </div>
          </motion.div>

          {/* Section 6: Data Sharing */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Share2 size={24} /></div>
              <h2>6. Data Sharing</h2>
            </div>
            <div className="privacy-content">
              <p>FinVista does not sell, rent, or trade customer personal information to third parties.</p>
              <p>Information is shared only when:</p>
              <ul>
                <li>Required by applicable law</li>
                <li>Necessary for providing requested services</li>
                <li>Authorized by the customer</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 7: Data Retention */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><Archive size={24} /></div>
              <h2>7. Data Retention</h2>
            </div>
            <div className="privacy-content">
              <p>Information is retained only as long as necessary to:</p>
              <ul>
                <li>Deliver requested services</li>
                <li>Meet legal and regulatory obligations</li>
                <li>Resolve disputes</li>
                <li>Maintain business records where required</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 8: Your Rights */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><UserCheck size={24} /></div>
              <h2>8. Your Rights</h2>
            </div>
            <div className="privacy-content">
              <p>Users may request to:</p>
              <ul>
                <li>Access their personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete personal information (subject to applicable legal requirements)</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 9: Contact Us */}
          <motion.div 
            className="privacy-card privacy-contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><PhoneCall size={24} /></div>
              <h2>9. Contact Us</h2>
            </div>
            <div className="privacy-content">
              <div className="privacy-contact-grid">
                <div className="privacy-contact-item">
                  <h3>FinVista Chartered Accountants</h3>
                  <p><strong>Phone:</strong> +91 9908285223</p>
                  <p><strong>Email:</strong> finvistaca@gmail.com</p>
                </div>
                <div className="privacy-contact-item">
                  <h3>Head Office</h3>
                  <p>D.No. 41-1-41C, SS Nilayam,<br />KT Road, Chitti Nagar,<br />Vijayawada – 520001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 10: Policy Updates */}
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="privacy-card-header">
              <div className="privacy-icon"><RefreshCw size={24} /></div>
              <h2>10. Policy Updates</h2>
            </div>
            <div className="privacy-content">
              <p>FinVista reserves the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page with the latest revision date.</p>
            </div>
          </motion.div>

          <div className="privacy-last-updated">
            <p>Last Updated: July 2026</p>
          </div>

        </div>
      </section>
    </div>
  );
};
