import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Landmark, Hash, Building2, Clock, FileSignature, ArrowRight, Link as LinkIcon, BarChart, UserCheck, Heart, AlertTriangle } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { 
  charteredAccountantsChapters, 
  importantCharteredAccountantsSections, 
  complianceDashboardItems, 
  featuredTopics, 
  relatedActs,
  charteredAccountantsSections
} from '../../data/charteredAccountantsActData';
import './CharteredAccountantsAct.css';

export const CharteredAccountantsAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');



  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Filter Sections based on Search
  const filteredSections = useMemo(() => {
    if (!searchQuery) return charteredAccountantsSections;
    
    const query = searchQuery.toLowerCase();
    
    return charteredAccountantsSections.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter Important Sections based on Search
  const filteredImportantSections = useMemo(() => {
    if (!searchQuery) return importantCharteredAccountantsSections;
    
    const query = searchQuery.toLowerCase();
    
    return importantCharteredAccountantsSections.filter(section => 
      section && (
        section.section.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query) ||
        section.explanation.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  

  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Search, Landmark, FileSignature, AlertTriangle
  };

  return (
    <div className="chartered-accountants-act-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Chartered Accountants Act, 1949' }
        ]}
        title=""
        description=""
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Chartered Accountants Act</span>
              <span><strong>Year Enacted:</strong> 1949</span>
              <span><strong>Act Number:</strong> 38 of 1949</span>
              <span><strong>Status:</strong> In Force</span>
              <span><strong>Applicable To:</strong> Regulation of the Chartered Accountancy Profession</span>
              <span><strong>Administered By:</strong> Institute of Chartered Accountants of India (ICAI)</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1949</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">32+</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>38 of 1949</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Professional Regulation</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">In Force</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">ICAI</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search sections, ICAI, Council, disciplinary provisions, certificate of practice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Topics Filters */}
        <div className="pill-container" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          {featuredTopics.map(topic => (
            <button 
              key={topic} 
              className={`filter-pill ${searchQuery === topic ? 'active' : ''}`}
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {!searchQuery && (
          <>
            {/* What is the Act? */}
            <h2 className="section-title">About the Act</h2>
            <div className="highlights-grid">
              <div className="highlight-card" style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  The Chartered Accountants Act, 1949 provides for the regulation and development of the profession of Chartered Accountants in India. It establishes the Institute of Chartered Accountants of India (ICAI), governs the registration and practice of Chartered Accountants, regulates professional conduct and disciplinary proceedings, and prescribes the framework for maintaining professional standards and ethics.
                </p>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '3rem' }}>Key Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Shield className="icon" size={32} color="var(--brand-blue)" />
                <h4>Institute of Chartered Accountants of India (ICAI)</h4>
                <p>Establishes the ICAI as the premier body regulating the accountancy profession.</p>
              </div>
              <div className="highlight-card">
                <FileSignature className="icon" size={32} color="var(--brand-gold)" />
                <h4>Certificate of Practice</h4>
                <p>Mandates strict registration and practice requirements for all chartered accountants.</p>
              </div>
              <div className="highlight-card">
                <AlertTriangle className="icon" size={32} color="#10B981" />
                <h4>Professional Misconduct & Discipline</h4>
                <p>Provides a comprehensive framework for investigating and penalizing professional misconduct.</p>
              </div>
              <div className="highlight-card">
                <Landmark className="icon" size={32} color="var(--brand-blue)" />
                <h4>Council & Governance</h4>
                <p>Establishes the Council to oversee the functions, academics, and administration of the Institute.</p>
              </div>
              <div className="highlight-card">
                <CheckCircle className="icon" size={32} color="var(--brand-gold)" />
                <h4>Quality Review Board</h4>
                <p>Sets up independent oversight to review and enhance the quality of audit services.</p>
              </div>
              <div className="highlight-card">
                <BookOpen className="icon" size={32} color="#10B981" />
                <h4>Professional Standards & Ethics</h4>
                <p>Defines rigorous ethical standards and compliance requirements under the Schedules.</p>
              </div>
            </div>

            <h2 className="section-title">Major Regulatory Areas</h2>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <Users className="icon" size={28} />
                <h4>ICAI & Membership</h4>
                <p>Structure of the Institute</p>
              </div>
              <div className="dashboard-card">
                <FileText className="icon" size={28} />
                <h4>Registration of Members</h4>
                <p>Entry into the Register</p>
              </div>
              <div className="dashboard-card">
                <FileSignature className="icon" size={28} />
                <h4>Certificate of Practice</h4>
                <p>Requirements to practice</p>
              </div>
              <div className="dashboard-card">
                <Landmark className="icon" size={28} />
                <h4>Council Administration</h4>
                <p>Committees and functions</p>
              </div>
              <div className="dashboard-card">
                <AlertTriangle className="icon" size={28} />
                <h4>Professional Misconduct</h4>
                <p>First and Second Schedules</p>
              </div>
              <div className="dashboard-card">
                <Shield className="icon" size={28} />
                <h4>Disciplinary Mechanism</h4>
                <p>Directorate and Board of Discipline</p>
              </div>
              <div className="dashboard-card">
                <CheckCircle className="icon" size={28} />
                <h4>Quality Review Board</h4>
                <p>Reviewing audit quality</p>
              </div>
              <div className="dashboard-card">
                <Scale className="icon" size={28} />
                <h4>Penalties & Compliance</h4>
                <p>Fines for false claims</p>
              </div>
            </div>

            {/* Regulatory Workflow */}
            <h2 className="section-title">Regulatory Workflow</h2>
            <div className="process-diagram">
              <div className="process-step">
                <div className="process-icon-box"><Users size={24} /></div>
                <div className="process-text">Student /<br/>Candidate</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileText size={24} /></div>
                <div className="process-text">Registration<br/>with ICAI</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><BookOpen size={24} /></div>
                <div className="process-text">Training &<br/>Examination</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileSignature size={24} /></div>
                <div className="process-text">Certificate of<br/>Practice</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Briefcase size={24} /></div>
                <div className="process-text">Professional<br/>Practice</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Shield size={24} /></div>
                <div className="process-text">Compliance &<br/>Discipline</div>
              </div>
            </div>

            {/* Compliance Hub */}
            <h2 className="section-title">Compliance Hub</h2>
            <div className="dashboard-grid">
              {complianceDashboardItems.map((item, idx) => {
                const IconComponent = IconMap[item.icon] || FileText;
                return (
                  <div key={idx} className="dashboard-card">
                    <IconComponent className="icon" size={28} />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Frequently Referenced Sections (Filterable) */}
        {(filteredImportantSections.length > 0) && (
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-title">
              {searchQuery ? 'Matching Important Sections' : 'Important Sections'}
            </h2>
            <div className="highlights-grid">
              {filteredImportantSections.map((sec: any, idx) => (
                <div key={idx} className="important-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3>Section {sec.section}</h3>
                    <span className="stat-label" style={{ background: 'rgba(200, 164, 93, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>Important</span>
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>{sec.title}</div>
                  <p>{sec.explanation}</p>
                </div>
            ))}
            </div>
          </div>
        )}

        {/* Sections Directory (Filterable) */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>
          {searchQuery ? 'Matching Sections' : 'Complete Sections Directory'}
        </h2>
        
        {filteredSections.length === 0 && filteredImportantSections.length === 0 ? (
          <div className="text-center py-8 text-gray-500" style={{ color: 'var(--text-secondary)' }}>
            No sections match your search query. Try different keywords.
          </div>
        ) : (
          <div style={{ marginBottom: '4rem' }}>
            {/* We map chapters then sections within them */}
            {charteredAccountantsChapters.map(chapter => {
              // Get sections for this chapter
              const chapterSecs = filteredSections.filter(s => {
                const sNumStr = s.section.replace(/[^0-9]/g, '');
                const sNum = parseInt(sNumStr);
                let start = 0, end = 0;
                
                if (chapter.sections.includes('-')) {
                  const parts = chapter.sections.split('-');
                  start = parseInt(parts[0].replace(/[^0-9]/g, ''));
                  end = parseInt(parts[1].replace(/[^0-9]/g, ''));
                } else {
                  start = parseInt(chapter.sections.replace(/[^0-9]/g, ''));
                  end = start;
                }
                
                return sNum >= start && sNum <= end;
              });

              if (chapterSecs.length === 0) return null;

              return (
                <div key={chapter.chapterNumber} style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    Chapter {chapter.chapterNumber}: {chapter.title}
                  </h3>
                  {chapterSecs.map((section) => (
                    <div key={section.section} className="accordion-item static">
                      <div className="accordion-header static-header">
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '90%' }}>
                          <span className="stat-label" style={{ fontSize: '0.85rem' }}>Section {section.section}</span>
                          <span style={{ fontWeight: 600, fontSize: '1.2rem', marginTop: '0.25rem', color: 'var(--brand-blue)' }}>{section.title}</span>
                          <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{section.explanation}</span>
                        </div>
                        
                      </div>
              </div>
            ))}
                </div>
              );
            })}
          </div>
        )}

        {/* Related Acts */}
        {!searchQuery && (
          <>
            <h2 className="section-title">Related Acts & Resources</h2>
            <div className="related-links-grid">
              {relatedActs.map((act, idx) => (
                <Link to={act.path} key={idx} className="related-link-card">
                  {act.title}
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </>
        )}


        {/* Official Reference */}
        <div className="official-reference-card" style={{ marginTop: '4rem', marginBottom: '2rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem' }}>Official Gazette / Government Reference</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>For complete statutory wording, explanations, amendments, and schedules, please refer to the official Government publication of this Act.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="premium-btn">View Official Act</a>
        </div>
      </div>
    </div>
  );
};

