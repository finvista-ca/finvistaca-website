import React, { useState } from 'react';
import { Briefcase, Users, Target, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';
import { ImmediateAssistanceCTA } from '../components/shared/ImmediateAssistanceCTA';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import './Career.css';

export const Career: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    cover_letter: '',
    resume_url: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://finvistaca-backend-ebon.vercel.app/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', position: '', cover_letter: '', resume_url: '' });
    } catch (err: any) {
      alert(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Careers' }
        ]}
        title="Build Your Career With Us"
        description="Join a firm that values expertise, integrity, and innovation. Shape the future of finance and consulting."
      />

      {/* Why Join Us & Work Culture */}
      <section className="culture-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Join Finvista?</h2>
            <p className="section-desc">We foster an environment where talent thrives and careers accelerate.</p>
          </div>
          
          <div className="culture-grid">
            <div className="culture-card glass-card">
              <div className="culture-icon"><TrendingUp size={28} /></div>
              <h3>Continuous Growth</h3>
              <p>We provide ongoing training, mentorship, and opportunities to work on diverse, challenging projects that accelerate your professional development.</p>
            </div>
            <div className="culture-card glass-card">
              <div className="culture-icon"><Users size={28} /></div>
              <h3>Collaborative Culture</h3>
              <p>Work alongside industry veterans in a supportive, team-oriented environment where every voice is heard and valued.</p>
            </div>
            <div className="culture-card glass-card">
              <div className="culture-icon"><Target size={28} /></div>
              <h3>Impactful Work</h3>
              <p>Contribute to solutions that make a tangible difference for our clients, from dynamic startups to large multinational corporations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Hiring Process</h2>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Application Review</h4>
              <p>Our team reviews your resume and cover letter.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Initial Screening</h4>
              <p>A brief call to discuss your background and career goals.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Technical Interview</h4>
              <p>An in-depth assessment of your domain knowledge and skills.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Partner Round</h4>
              <p>Final discussion to ensure mutual fit and alignment of values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings & Form */}
      <section className="openings-section">
        <div className="container">
          <div className="openings-grid">
            
            {/* Openings List */}
            <div className="openings-list-panel">
              <h2>Current Openings</h2>
              <p className="openings-desc">Don't see a perfect fit? Submit your resume anyway.</p>
              
              <div className="job-cards">
                <div className="job-card glass-card">
                  <div className="job-header">
                    <h3>Chartered Accountant</h3>
                    <span className="job-type">Full Time</span>
                  </div>
                  <p className="job-location">Visakhapatnam / Vijayawada</p>
                  <ul className="job-reqs">
                    <li><CheckCircle2 size={16} /> 2-5 years PQE in Statutory Audit</li>
                    <li><CheckCircle2 size={16} /> Strong knowledge of Ind AS</li>
                  </ul>
                </div>
                
                <div className="job-card glass-card">
                  <div className="job-header">
                    <h3>Article Assistant</h3>
                    <span className="job-type">Training</span>
                  </div>
                  <p className="job-location">Multiple Locations</p>
                  <ul className="job-reqs">
                    <li><CheckCircle2 size={16} /> Cleared CA Intermediate (Both Groups)</li>
                    <li><CheckCircle2 size={16} /> Strong analytical skills</li>
                  </ul>
                </div>
                
                <div className="job-card glass-card">
                  <div className="job-header">
                    <h3>Audit Executive / Semi Qualified CA</h3>
                    <span className="job-type">Full Time</span>
                  </div>
                  <p className="job-location">Kakinada HQ</p>
                  <ul className="job-reqs">
                    <li><CheckCircle2 size={16} /> Completed 3 years of articleship</li>
                    <li><CheckCircle2 size={16} /> Experience in Internal Audits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="application-form-panel">
              <div className="glass-card form-wrapper">
                <h2>Apply Now</h2>
                <p className="form-desc">Take the next step in your professional journey.</p>
                {submitted ? (
                  <div className="form-success" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={48} style={{ color: '#2e9e5b', marginBottom: '0.75rem' }} />
                    <h3>Application submitted!</h3>
                    <p className="form-desc">Thank you for your interest in joining Finvista. Our team will review your application and reach out if there is a fit.</p>
                  </div>
                ) : (
                <form className="career-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="position">Position Applied For</label>
                    <select id="position" value={formData.position} onChange={handleChange} required>
                      <option value="" disabled>Select a position...</option>
                      <option value="ca">Chartered Accountant</option>
                      <option value="article">Article Assistant</option>
                      <option value="audit-assistant">Audit Assistant/Semi Qualified CA</option>
                      <option value="cs-trainee">CS Trainee</option>
                      <option value="accountant">Executive Accountant</option>
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cover_letter">Cover Letter / Message</label>
                    <textarea id="cover_letter" value={formData.cover_letter} onChange={handleChange} rows={4} placeholder="Briefly describe why you are a good fit..." required></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume_url">Resume Link</label>
                    <input 
                      type="url" 
                      id="resume_url" 
                      value={formData.resume_url}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/..." 
                      required 
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'} <ChevronRight size={18} />
                  </button>
                </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <ImmediateAssistanceCTA />
    </div>
  );
};
