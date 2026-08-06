import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ArrowRight, Briefcase, 
  Users, Shield, TrendingUp, Scale, BookOpen, FileText, 
  CheckCircle, ChevronRight, Landmark, Hash, Building2, Clock, FileSignature, Heart
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { 
  societiesActChapters, 
  importantSocietiesSections, 
  complianceDashboardItems, 
  featuredTopics, 
  relatedActs,
  societiesSections
} from '../../data/societiesActData';
import './SocietiesRegistrationAct.css';

export const SocietiesRegistrationAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');



  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Filter Sections based on Search (The directory lists sections 1-20 instead of chapters)
  const filteredSections = useMemo(() => {
    if (!searchQuery) return societiesSections;
    
    const query = searchQuery.toLowerCase();
    
    return societiesSections.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter Important Sections based on Search
  const filteredImportantSections = useMemo(() => {
    if (!searchQuery) return importantSocietiesSections;
    
    const query = searchQuery.toLowerCase();
    
    return importantSocietiesSections.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Auto-expand section if there's only one search result
  React.useEffect(() => {
    if (searchQuery && filteredSections.length === 1) {
      setExpandedChapter(filteredSections[0].section); // Using section number as key
    } else if (!searchQuery) {
      setExpandedChapter(null);
      setExpandedSection(null);
    }
  }, [searchQuery, filteredSections]);

  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, FileEdit: FileText
  };

  return (
    <div className="societies-act-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Societies Registration Act, 1860' }
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
              <span><strong>Act Name:</strong> Societies Registration Act</span>
              <span><strong>Year Enacted:</strong> 1860</span>
              <span><strong>Act Number:</strong> 21 of 1860</span>
              <span><strong>Status:</strong> Currently in Force</span>
              <span><strong>Applicable To:</strong> Literary, Scientific & Charitable Societies</span>
              <span><strong>Administered By:</strong> State Registrars of Societies</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1860</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">20</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>21 of 1860</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Societies</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Currently in Force</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">State Registrars</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search sections, registration requirements, dissolution, governing body..."
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
            {/* What is the Societies Registration Act? */}
            <h2 className="section-title">About the Act</h2>
            <div className="highlights-grid">
              <div className="highlight-card" style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  The Societies Registration Act, 1860 provides the legal framework for registering literary, scientific, charitable, educational, religious, and social welfare societies in India. It governs their formation, management, property, governing bodies, legal status, and dissolution while ensuring transparency and accountability.
                </p>
              </div>
            </div>

            <h2 className="section-title">Key Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <FileText className="icon" size={32} color="var(--brand-blue)" />
                <h4>Society Registration</h4>
                <p>Register with any 7 or more persons for scientific, literary, or charitable purposes.</p>
              </div>
              <div className="highlight-card">
                <BookOpen className="icon" size={32} color="var(--brand-gold)" />
                <h4>Memorandum of Association</h4>
                <p>Must contain society name, objects, and governing body details, alongside certified rules.</p>
              </div>
              <div className="highlight-card">
                <Users className="icon" size={32} color="#10B981" />
                <h4>Governing Body</h4>
                <p>A governing body must manage the affairs and an annual list must be filed with the Registrar.</p>
              </div>
              <div className="highlight-card">
                <Landmark className="icon" size={32} color="var(--brand-blue)" />
                <h4>Property Management</h4>
                <p>Property automatically vests in the governing body if not vested in specific trustees.</p>
              </div>
              <div className="highlight-card">
                <Shield className="icon" size={32} color="var(--brand-gold)" />
                <h4>Legal Proceedings</h4>
                <p>Societies can sue or be sued through their president, chairman, or principal secretary.</p>
              </div>
              <div className="highlight-card">
                <Scale className="icon" size={32} color="#10B981" />
                <h4>Dissolution of Society</h4>
                <p>Societies can be dissolved by a 3/5ths vote, with remaining property donated to another society.</p>
              </div>
            </div>

            <h2 className="section-title">Applicable Societies</h2>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <BookOpen className="icon" size={28} />
                <h4>Educational Societies</h4>
                <p>Schools, colleges, and institutes</p>
              </div>
              <div className="dashboard-card">
                <Heart className="icon" size={28} />
                <h4>Charitable Organizations</h4>
                <p>Relief, welfare, and aid funds</p>
              </div>
              <div className="dashboard-card">
                <Briefcase className="icon" size={28} />
                <h4>Scientific Institutions</h4>
                <p>Research and promotion of science</p>
              </div>
              <div className="dashboard-card">
                <FileText className="icon" size={28} />
                <h4>Literary Associations</h4>
                <p>Libraries, reading-rooms, literature</p>
              </div>
              <div className="dashboard-card">
                <Users className="icon" size={28} />
                <h4>Fine Arts Promotion</h4>
                <p>Galleries, museums, art works</p>
              </div>
              <div className="dashboard-card">
                <Shield className="icon" size={28} />
                <h4>Public Welfare</h4>
                <p>General public welfare organizations</p>
              </div>
            </div>

            {/* Registration Workflow */}
            <h2 className="section-title">Registration Workflow</h2>
            <div className="process-diagram">
              <div className="process-step">
                <div className="process-icon-box"><BookOpen size={24} /></div>
                <div className="process-text">Choose Purpose</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileText size={24} /></div>
                <div className="process-text">Prepare<br/>Memorandum</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Users size={24} /></div>
                <div className="process-text">Minimum Seven<br/>Members</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Briefcase size={24} /></div>
                <div className="process-text">Submit<br/>Registration</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Shield size={24} /></div>
                <div className="process-text">Registrar<br/>Verification</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><CheckCircle size={24} /></div>
                <div className="process-text">Certificate of<br/>Registration</div>
              </div>
            </div>

            {/* Compliance Dashboard */}
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
              {filteredImportantSections.map((sec, idx) => (
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
            {filteredSections.map((section) => (
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
