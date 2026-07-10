import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Target, Compass, Shield, Heart, 
  Eye, CheckCircle, Lightbulb, TrendingUp, BookOpen, 
  MapPin, Briefcase, Award, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import './About.css';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
        title="About Finvista"
        description="Delivering uncompromised financial precision, strategic foresight, and absolute compliance for over 15 years."
      />

      {/* 2. Firm Overview */}
      <section className="about-overview section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text">
              <h2 className="section-title">Our Legacy of Excellence</h2>
              <p className="overview-paragraph">
                Finvista is a premier Chartered Accountancy firm committed to redefining modern financial services. With over 15 years of industry-leading experience, we have built a reputation on the pillars of integrity, technical mastery, and personalized client focus.
              </p>
              <p className="overview-paragraph">
                From intricate tax planning and rigorous auditing to GST compliance and strategic corporate advisory, our comprehensive suite of services is designed to empower businesses. We handle the complexities of the regulatory landscape, allowing our clients to focus on sustainable growth and innovation.
              </p>
            </div>
            <div className="overview-visual">
              <div className="glass-panel">
                <div className="visual-badge">
                  <Building2 size={48} className="badge-icon" strokeWidth={1.5} />
                  <h3>Modern Accounting</h3>
                  <p>Enterprise-grade solutions tailored for your business scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section className="about-stats section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number text-gradient">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-gradient">5000+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-gradient">25+</div>
              <div className="stat-label">GST Experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-gradient">100%</div>
              <div className="stat-label">Compliance Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="about-vision-mission section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card glass-hover">
              <div className="vm-icon-wrapper color-brand">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-description">
                To be the most trusted and strategically vital financial partner for businesses across India, recognized for our technological integration, unparalleled expertise, and unwavering ethical standards.
              </p>
            </div>
            <div className="vm-card glass-hover">
              <div className="vm-icon-wrapper color-accent">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-description">
                To simplify financial complexity through meticulous auditing, proactive tax planning, and strategic advisory, enabling our clients to achieve sustainable financial success and absolute regulatory peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="about-values section bg-dark text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle opacity-80">
              The foundational principles that guide every decision, strategy, and interaction.
            </p>
          </div>
          <div className="values-grid">
            {[
              { icon: Shield, title: "Integrity", desc: "Uncompromising ethical standards in all our dealings." },
              { icon: Heart, title: "Client Focus", desc: "Prioritizing client success above all else." },
              { icon: Eye, title: "Transparency", desc: "Clear, honest, and direct communication." },
              { icon: CheckCircle, title: "Accountability", desc: "Taking full ownership of our commitments." },
              { icon: Award, title: "Excellence", desc: "Striving for the highest quality in every service." },
              { icon: Lightbulb, title: "Innovation", desc: "Embracing technology to improve financial processes." },
              { icon: Building2, title: "Confidentiality", desc: "Absolute protection of sensitive client data." },
              { icon: BookOpen, title: "Continuous Learning", desc: "Staying ahead of regulatory changes." }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="value-item">
                  <div className="value-icon"><Icon size={24} strokeWidth={1.5} /></div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-desc">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="about-why-choose section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              What sets us apart in the competitive landscape of financial consulting.
            </p>
          </div>
          <div className="wcu-grid">
            <div className="wcu-card">
              <div className="wcu-icon color-brand"><Briefcase size={28} strokeWidth={1.5} /></div>
              <h3>Deep Industry Knowledge</h3>
              <p>Specialized expertise across various sectors ensures tailored financial strategies.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon color-accent"><Shield size={28} strokeWidth={1.5} /></div>
              <h3>Risk Mitigation</h3>
              <p>Proactive identification and management of financial and regulatory risks.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon color-brand"><TrendingUp size={28} strokeWidth={1.5} /></div>
              <h3>Growth Focused</h3>
              <p>We don't just ensure compliance; we provide insights to accelerate your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Regional Presence */}
      <section className="about-presence section">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Serving Clients Across India and Beyond</h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Headquartered in Bobbili, Andhra Pradesh, Finvista serves businesses, startups, SMEs, institutions, and individuals across multiple states in South India while also supporting clients throughout India and internationally.
            </p>
          </div>

          <div className="presence-grid-modern">
            {/* Left Side: Premium Location Cards */}
            <div className="presence-cards-col">
              {[
                { title: "Andhra Pradesh (Head Office)", desc: "Headquartered in Bobbili, serving clients across Andhra Pradesh.", icon: Building2, color: "#C8A45D" },
                { title: "Telangana", desc: "Supporting businesses, professionals, and enterprises across Telangana.", icon: Users, color: "#0d9488" },
                { title: "Odisha", desc: "Providing taxation, audit, and compliance services throughout Odisha.", icon: Briefcase, color: "#ea580c" },
                { title: "South India", desc: "Strong presence across major South Indian markets and business hubs.", icon: MapPin, color: "#9333ea" },
                { title: "Pan India & International Clients", desc: "Serving clients across India and selected international markets.", icon: Compass, color: "var(--text-primary)" }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div 
                    key={idx} 
                    className="presence-card-modern"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="pc-icon-wrapper" style={{ color: card.color, backgroundColor: `${card.color}15` }}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="pc-content">
                      <h4 className="pc-title">{card.title}</h4>
                      <p className="pc-desc">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: Interactive Map */}
            <div className="presence-map-col">
              <div className="map-container-inner">
                {/* Embedded SVG Map */}
                <img src="/india-map.svg" alt="Map of India" className="india-base-map" />
                
                {/* Map Pins overlay */}
                {[
                  { name: "Odisha", top: "30%", left: "58%", color: "#dc2626", labelStyle: { left: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Parvathipuram", top: "42%", left: "48%", color: "#0d9488", labelStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Bobbili (Head Office)", top: "54%", left: "58%", color: "#C8A45D", labelStyle: { left: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Visakhapatnam", top: "66%", left: "48%", color: "#ea580c", labelStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Peddapuram", top: "78%", left: "58%", color: "#9333ea", labelStyle: { left: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Kakinada", top: "86%", left: "42%", color: "#2563eb", labelStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" } },
                  { name: "Vijayawada", top: "72%", left: "36%", color: "#16a34a", labelStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" } }
                ].map((pin, idx) => (
                  <motion.div 
                    key={idx}
                    className="map-pin-wrapper" 
                    style={{ top: pin.top, left: pin.left }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {pin.name.includes("Head Office") && (
                      <motion.div 
                        className="pin-pulse" 
                        animate={{ scale: [1, 2, 2], opacity: [0.8, 0.4, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                        style={{ backgroundColor: pin.color }}
                      />
                    )}
                    <div className="map-pin" style={{ backgroundColor: pin.color }}>
                      <MapPin size={14} color="white" />
                    </div>
                    <div className="pin-label" style={pin.labelStyle}>{pin.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Strip: 3 Mini Statistic Cards */}
          <div className="presence-stats-strip">
            <motion.div className="p-stat-card" whileHover={{ y: -5 }}>
              <h3>15+ Years</h3>
              <p>Experience</p>
            </motion.div>
            <motion.div className="p-stat-card" whileHover={{ y: -5 }}>
              <h3>5000+</h3>
              <p>Clients Served</p>
            </motion.div>
            <motion.div className="p-stat-card" whileHover={{ y: -5 }}>
              <h3>Pan India</h3>
              <p>& International Presence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Professional Team */}
      <section className="about-team section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Expertise Domains</h2>
            <p className="section-subtitle">
              Backed by specialized professionals dedicated to navigating complex financial landscapes.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-category glass-card">
              <Users size={32} className="team-icon color-brand" strokeWidth={1.5} />
              <h3>Taxation Specialists</h3>
              <p>Experts in Direct Tax, Corporate Tax structuring, and individual tax planning.</p>
            </div>
            <div className="team-category glass-card">
              <Shield size={32} className="team-icon color-accent" strokeWidth={1.5} />
              <h3>Audit & Assurance</h3>
              <p>Dedicated auditors ensuring compliance, statutory audits, and internal controls.</p>
            </div>
            <div className="team-category glass-card">
              <CheckCircle size={32} className="team-icon color-brand" strokeWidth={1.5} />
              <h3>GST Compliance Panel</h3>
              <p>A specialized team dedicated entirely to navigating the complexities of Indirect Taxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call-To-Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box glass-card-dark">
            <div className="cta-box-content">
              <h2>Ready to secure your financial future?</h2>
              <p>Get in touch with our experts to discuss your specific requirements.</p>
              
              <div className="cta-contact-details">
                <div className="contact-detail">
                  <strong>Phone:</strong> +91 8143505094
                </div>
                <div className="contact-detail">
                  <strong>Email:</strong> <a href="mailto:finvistaca@gmail.com">finvistaca@gmail.com</a>
                </div>
              </div>

            </div>
            <div className="cta-box-action">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Request Consultation <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
