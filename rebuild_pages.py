import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

def get_template(name, display_name, hero_subtitle, icon, benefits, timeline, reqs, faqs, component_name):
    return f'''import React, {{ useState, useEffect }} from 'react';
import {{ Link }} from 'react-router-dom';
import {{ 
  {icon}, Briefcase, FileText, CheckCircle, AlertTriangle, 
  ShieldCheck, Clock, Check, Building, FileSignature, 
  Wallet, ChevronDown, ArrowRight, BadgeCheck, Zap, 
  XOctagon, Lock, TrendingUp, HeartHandshake,
  FileCheck, Globe, CreditCard, ChevronRight, Settings, ChevronUp, ShieldAlert,
  Users
}} from 'lucide-react';
import {{ motion, AnimatePresence }} from 'framer-motion';
import type {{ ServiceItem }} from '../../data/servicesData';
import './Proprietorship.css';
import ServiceCTA from '../../components/shared/ServiceCTA';
import RelatedServices from '../../components/shared/RelatedServices';

interface {component_name}Props {{
  service: ServiceItem;
  relatedServices: ServiceItem[];
}}

export const {component_name}: React.FC<{component_name}Props> = ({{ service, relatedServices }}) => {{
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {{
    window.scrollTo(0, 0);
  }}, []);

  const toggleFaq = (index: number) => {{
    setActiveFaq(activeFaq === index ? null : index);
  }};

  const faqs = {faqs};

  return (
    <div className="proprietorship-page">
      <section className="service-hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="service-badge">
              <Briefcase size={{16}} />
              <span>Business Registration</span>
            </div>
            <h1 className="hero-title">{display_name}</h1>
            <p className="hero-subtitle">
              {hero_subtitle}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Consultation <ArrowRight size={{18}} />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="glass-illustration">
              <div className="illustration-icon"><{icon} size={{64}} /></div>
              <div className="illustration-badge"><Check size={{24}} /></div>
              <div className="illustration-card card-1"><FileText size={{20}} /> Agreement</div>
              <div className="illustration-card card-2"><Wallet size={{20}} /> Current A/C</div>
              <div className="illustration-card card-3"><FileCheck size={{20}} /> PAN & TAN</div>
            </div>
          </div>
        </div>
        <div className="service-hero-pattern"></div>
      </section>

      <section className="what-is-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What is a {display_name}?</h2>
            <div className="section-divider"></div>
          </div>
          <div className="what-is-content">
            <div className="what-is-text">
              <p>A {display_name} is a popular business structure in India that combines ease of setup with collaborative ownership. It is an ideal entity for entrepreneurs looking to start a business with partners.</p>
              <div className="key-features-grid">
                <div className="feature-item">
                  <div className="feature-icon"><CheckCircle size={{20}} /></div>
                  <div>
                    <h4>Easy Formation</h4>
                    <p>Simple and straightforward process</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><ShieldCheck size={{20}} /></div>
                  <div>
                    <h4>Collaborative</h4>
                    <p>Shared responsibilities and resources</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Briefcase size={{20}} /></div>
                  <div>
                    <h4>Minimal Compliance</h4>
                    <p>Fewer regulatory requirements</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Settings size={{20}} /></div>
                  <div>
                    <h4>Flexibility</h4>
                    <p>Adaptable internal structure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Benefits of {display_name}</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Why choose this structure for your business?</p>
          </div>
          <div className="benefits-grid">
            {benefits}
          </div>
        </div>
      </section>

      <section className="requirements-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Requirements & Documents</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">What you need to get started</p>
          </div>
          <div className="requirements-grid">
            {reqs}
          </div>
        </div>
      </section>

      <section className="timeline-section section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Registration Process</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Simple and transparent timeline</p>
          </div>
          <div className="timeline">
            {timeline}
          </div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Clear answers to your doubts</p>
          </div>
          <div className="faq-container">
            {{faqs.map((faq, index) => (
              <div 
                key={{index}} 
                className={{`faq-item ${{activeFaq === index ? 'active' : ''}}`}}
                onClick={{() => toggleFaq(index)}}
              >
                <div className="faq-question">
                  <h3>{{faq.q}}</h3>
                  {{activeFaq === index ? <ChevronUp size={{20}} /> : <ChevronDown size={{20}} />}}
                </div>
                <AnimatePresence>
                  {{activeFaq === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="faq-answer"
                    >
                      <p>{{faq.a}}</p>
                    </motion.div>
                  )}}
                </AnimatePresence>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={{service.name}} />
      <RelatedServices services={{relatedServices}} />
    </div>
  );
}};

export default {component_name};
'''

# Partnership
benefits_p = '''
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><Zap size={24} /></div>
              <h3>Quick Setup</h3>
              <p>One of the easiest and most affordable business structures to register.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><Users size={24} /></div>
              <h3>Shared Responsibility</h3>
              <p>Risk, workload, and financial burdens are shared among partners.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><TrendingUp size={24} /></div>
              <h3>More Capital</h3>
              <p>Multiple partners can pool their resources for better funding.</p>
            </div>
'''
reqs_p = '''
            <div className="req-card">
              <div className="req-icon"><Users size={24} /></div>
              <h3>Partners</h3>
              <p>Minimum 2 partners required.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><FileSignature size={24} /></div>
              <h3>Partnership Deed</h3>
              <p>A drafted and notarized deed outlining terms.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><FileText size={24} /></div>
              <h3>KYC Documents</h3>
              <p>PAN, Aadhaar, and address proof of all partners.</p>
            </div>
'''
timeline_p = '''
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Drafting Deed</h3>
                <p>Preparation of the partnership deed (1-2 days).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Notarization</h3>
                <p>Execution and notarization of the deed (1 day).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>PAN & TAN</h3>
                <p>Application for firm's PAN and TAN (3-5 days).</p>
              </div>
            </div>
'''
faqs_p = '''[
  { q: "Is registration of partnership firm compulsory?", a: "No, it's optional but highly recommended to enforce legal rights." },
  { q: "What is a Partnership Deed?", a: "A written legal document containing the terms, conditions, and profit-sharing ratios." },
  { q: "Can a partnership firm own property?", a: "No, a partnership firm does not have a separate legal entity. Property must be owned by partners." }
]'''

# OPC
benefits_o = '''
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><User size={24} /></div>
              <h3>Single Ownership</h3>
              <p>Retain 100% control over your business.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><ShieldCheck size={24} /></div>
              <h3>Limited Liability</h3>
              <p>Your personal assets are protected from business debts.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><Building size={24} /></div>
              <h3>Corporate Status</h3>
              <p>Enjoys the status of a separate legal entity.</p>
            </div>
'''
reqs_o = '''
            <div className="req-card">
              <div className="req-icon"><User size={24} /></div>
              <h3>Director & Nominee</h3>
              <p>1 Director and 1 Nominee required.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><FileCheck size={24} /></div>
              <h3>DSC & DIN</h3>
              <p>Digital Signature and Director Identification Number.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><Building size={24} /></div>
              <h3>Office Address</h3>
              <p>Proof of registered office address.</p>
            </div>
'''
timeline_o = '''
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Name Approval</h3>
                <p>Applying for business name reservation (1-2 days).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Filing Forms</h3>
                <p>Submission of SPICe+ form with MOA & AOA (2-3 days).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Incorporation</h3>
                <p>Issuance of Certificate of Incorporation (2-3 days).</p>
              </div>
            </div>
'''
faqs_o = '''[
  { q: "What is an OPC?", a: "One Person Company is a company formed with only 1 person as a member." },
  { q: "Who can form an OPC?", a: "Only a natural person who is an Indian citizen and resident in India." },
  { q: "Why is a nominee required?", a: "A nominee is required to take over the company in case of the promoter's death or incapacity." }
]'''


# LLP
benefits_l = '''
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><ShieldCheck size={24} /></div>
              <h3>Limited Liability</h3>
              <p>Partners are not liable for the independent actions of other partners.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><FileCheck size={24} /></div>
              <h3>No Audit Requirement</h3>
              <p>Audit is required only if turnover exceeds 40 Lakhs or contribution exceeds 25 Lakhs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper"><Building size={24} /></div>
              <h3>Legal Entity</h3>
              <p>LLP has a separate legal entity distinct from its partners.</p>
            </div>
'''
reqs_l = '''
            <div className="req-card">
              <div className="req-icon"><Users size={24} /></div>
              <h3>Partners</h3>
              <p>Minimum 2 designated partners.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><FileCheck size={24} /></div>
              <h3>DSC</h3>
              <p>Digital Signature Certificate for designated partners.</p>
            </div>
            <div className="req-card">
              <div className="req-icon"><Building size={24} /></div>
              <h3>Office Address</h3>
              <p>Utility bill and NOC for registered office.</p>
            </div>
'''
timeline_l = '''
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Name Approval</h3>
                <p>RUN-LLP form filing for name reservation (1-2 days).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>Incorporation</h3>
                <p>Filing FiLLiP form for incorporation (3-5 days).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <h3>LLP Agreement</h3>
                <p>Filing Form 3 within 30 days of incorporation.</p>
              </div>
            </div>
'''
faqs_l = '''[
  { q: "What is an LLP?", a: "Limited Liability Partnership combines the advantages of a company and a partnership." },
  { q: "Can an LLP raise funding?", a: "Yes, but it cannot issue equity shares like a Private Limited Company." },
  { q: "Is FDI allowed in LLP?", a: "Yes, FDI is permitted in LLPs operating in sectors where 100% FDI is allowed." }
]'''

with open(os.path.join(target_dir, "Partnership.tsx"), "w", encoding="utf-8") as f:
    f.write(get_template("Partnership", "Partnership Firm", "Collaborate and grow with a simple Partnership Firm.", "Users", benefits_p, timeline_p, reqs_p, faqs_p, "Partnership"))

with open(os.path.join(target_dir, "OnePersonCompany.tsx"), "w", encoding="utf-8") as f:
    f.write(get_template("One Person Company", "One Person Company", "Start your solo entrepreneurial journey with limited liability.", "User", benefits_o, timeline_o, reqs_o, faqs_o, "OnePersonCompany"))

with open(os.path.join(target_dir, "LLP.tsx"), "w", encoding="utf-8") as f:
    f.write(get_template("Limited Liability Partnership", "Limited Liability Partnership", "Get the best of both worlds: corporate structure and partnership flexibility.", "Building", benefits_l, timeline_l, reqs_l, faqs_l, "LLP"))

print("Files generated!")
