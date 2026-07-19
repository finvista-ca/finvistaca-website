import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Briefcase, FileText, CheckCircle, 
  ShieldCheck, Check, Users, HeartHandshake, FileSignature,
  Wallet, ChevronDown, ArrowRight, BadgeCheck, Zap, 
  Lock, TrendingUp, ChevronRight, ChevronUp, Globe, Landmark,
  XOctagon, Scale, FileSearch, HelpCircle, Phone, Mail, Award, MapPin
} from 'lucide-react';
import type { ServiceItem } from '../../data/servicesData';
import RelatedServices from '../shared/RelatedServices';
import { InternalPageHero } from '../layout/InternalPageHero';
import './ServiceLayout.css';

export interface ServicePageData {
  title: string;
  intro_title: string;
  intro_p1: string;
  intro_p2: string;
  overview?: string;
  features: { title: string; desc: string; icon: string }[];
  benefits: { title: string; desc: string; icon: string }[];
  eligibleApplicants?: string[];
  documentsRequired?: string[];
  timeline: string[];
  faqs: { q?: string; a?: string; question?: string; answer?: string }[];
}

interface ServiceLayoutProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
  pageData: ServicePageData;
}

const IconMap: Record<string, React.FC<any>> = {
  Building, Briefcase, FileText, CheckCircle, 
  ShieldCheck, Check, Users, HeartHandshake, FileSignature,
  Wallet, ArrowRight, BadgeCheck, Zap, 
  Lock, TrendingUp, Globe, Landmark,
  XOctagon, Scale, FileSearch, HelpCircle
};

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({ service, relatedServices, pageData }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const renderIcon = (iconName: string, size: number = 24) => {
    const Icon = IconMap[iconName] || CheckCircle;
    return <Icon size={size} />;
  };

  return (
    <div className="premium-service-layout">
      {/* 1. HERO SECTION */}
      <InternalPageHero 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name }
        ]}
        title={pageData.title}
        description={pageData.intro_title}
        ctaButtons={[
          { label: 'Get Started', path: '/contact', primary: true },
          { label: 'Learn More', path: '#overview' }
        ]}
        stats={[
          { value: '100%', label: 'Compliance Rate', icon: 'ShieldCheck' },
          { value: 'Fast', label: 'Processing Time', icon: 'Zap' }
        ]}
      />

      {/* 2. SERVICE OVERVIEW */}
      <section id="overview" className="premium-overview section-alternate">
        <div className="container overview-grid">
          <motion.div 
            className="overview-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <h2>Service Overview</h2>
              <div className="accent-line"></div>
            </div>
            <div className="text-content">
              <p className="lead">{pageData.intro_p1}</p>
              <p>{pageData.intro_p2}</p>
              {pageData.overview && <p>{pageData.overview}</p>}
            </div>
          </motion.div>
          <motion.div 
            className="overview-sticky"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card glass-panel">
              <h3>Why Choose Finvista?</h3>
              <ul className="info-list">
                <li><div className="list-icon"><BadgeCheck size={20} /></div><span>Years of Experience</span></li>
                <li><div className="list-icon"><Users size={20} /></div><span>Expert Professional Team</span></li>
                <li><div className="list-icon"><ShieldCheck size={20} /></div><span>End-to-End Compliance</span></li>
                <li><div className="list-icon"><HeartHandshake size={20} /></div><span>Personalized Advisory</span></li>
                <li><div className="list-icon"><CheckCircle size={20} /></div><span>Dedicated Support</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      {pageData.features && pageData.features.length > 0 && (
        <section className="premium-features section-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Offer</h2>
            <p>Comprehensive solutions tailored for {pageData.title}</p>
            <div className="accent-line center"></div>
          </div>
          <div className="features-grid">
            {pageData.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="feature-icon-wrapper">
                  {renderIcon(feature.icon, 28)}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="feature-arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 4. BENEFITS SECTION */}
      {pageData.benefits && pageData.benefits.length > 0 && (
        <section className="premium-benefits section-alternate">
        <div className="container">
          <div className="section-header text-center">
            <h2>Key Benefits</h2>
            <p>Why this service is essential for your growth</p>
            <div className="accent-line center"></div>
          </div>
          <div className="benefits-grid">
            {pageData.benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                className="benefit-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="benefit-icon">
                  {renderIcon(benefit.icon, 32)}
                </div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 4.5 ADDITIONAL SECTIONS (Eligible Applicants & Documents) */}
      {(pageData.eligibleApplicants || pageData.documentsRequired) && (
        <section className="premium-additional-info section-alternate" style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: 'var(--bg-color-alt, rgba(255,255,255,0.02))' }}>
          <div className="container">
            <div className="additional-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {pageData.eligibleApplicants && (
                <div className="eligible-applicants-card glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'left' }}>
                  <h3 style={{ color: '#C8A45D', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <Users size={24} /> Eligible Applicants
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                    {pageData.eligibleApplicants.map((item, idx) => (
                      <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.9, textAlign: 'left' }}>
                        <CheckCircle size={18} style={{ color: '#C8A45D', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ textAlign: 'left', flex: 1 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {pageData.documentsRequired && (
                <div className="documents-required-card glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'left' }}>
                  <h3 style={{ color: '#C8A45D', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <FileText size={24} /> Documents Required
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                    {pageData.documentsRequired.map((item, idx) => (
                      <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.9, textAlign: 'left' }}>
                        <CheckCircle size={18} style={{ color: '#C8A45D', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ textAlign: 'left', flex: 1 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION */}
      {pageData.timeline && pageData.timeline.length > 0 && (
        <section className="premium-process section-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Process</h2>
            <p>A streamlined approach to ensure complete compliance</p>
            <div className="accent-line center"></div>
          </div>
          <div className="timeline-container">
            {pageData.timeline.map((step, idx) => (
              <motion.div 
                key={idx}
                className="timeline-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="step-badge">
                  <span>0{idx + 1}</span>
                </div>
                <div className="step-content glass-panel">
                  <h4>{step}</h4>
                </div>
                {idx !== pageData.timeline.length - 1 && <div className="step-line"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 6. FAQ SECTION */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="premium-faq section-alternate">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Common queries about {pageData.title}</p>
            <div className="accent-line center"></div>
          </div>
          <div className="faq-wrapper">
            {pageData.faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-accordion ${activeAccordion === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div 
                  className="faq-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{faq.q || faq.question}</h3>
                  <div className="faq-icon">
                    {activeAccordion === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div 
                      className="faq-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a || faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 7. FINAL CTA */}
      <section className="premium-cta">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-content">
              <h2>Ready to proceed with your {service.name}?</h2>
              <p>Get expert guidance and ensure 100% compliance with our professional team.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary cta-btn">
                  Contact Us Today
                </Link>
                <div className="cta-contact-info">
                  <span className="contact-item"><Phone size={18} /> +91 9908285223</span>
                  <span className="contact-item"><Mail size={18} /> finvistaca@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-icon-wrapper">
                <ShieldCheck size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="premium-related section-white">
          <div className="container">
            <div className="section-header text-center">
              <h2>Related Services</h2>
              <div className="accent-line center"></div>
            </div>
            <div className="related-grid">
              {relatedServices.map(item => (
                <Link to={`/services/${item.slug}`} key={item.slug} className="related-item">
                  <div className="related-icon-box">
                    <FileText size={24} />
                  </div>
                  <div className="related-text">
                    <h4>{item.name}</h4>
                    <span className="view-link">View Details <ChevronRight size={16} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
