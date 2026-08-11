import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Landmark, Hash, Building2, Clock, FileSignature, ArrowRight, Link as LinkIcon, BarChart, UserCheck, Heart } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { 
  ibcParts as competitionChapters, 
  importantIbcSections as importantCompetitionSections, 
  complianceDashboardItems, 
  featuredTopics, 
  relatedActs,
  ibcSections as competitionSections
} from '../../data/ibcData';
import './InsolvencyBankruptcyCode.css';

export const InsolvencyBankruptcyCode: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);



  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Filter Sections based on Search
  const filteredSections = useMemo(() => {
    if (!searchQuery) return competitionSections;
    
    const query = searchQuery.toLowerCase();
    
    return competitionSections.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter Important Sections based on Search
  const filteredImportantSections = useMemo(() => {
    if (!searchQuery) return importantCompetitionSections;
    
    const query = searchQuery.toLowerCase();
    
    return importantCompetitionSections.filter(section => 
      section && (
        section.section.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query) ||
        section.explanation.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  // Auto-expand section if there's only one search result
  React.useEffect(() => {
    if (searchQuery && filteredSections.length === 1) {
      setExpandedChapter(filteredSections[0].section);
    } else if (!searchQuery) {
      setExpandedChapter(null);
      
    }
  }, [searchQuery, filteredSections]);

  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Search
  };

  return (
    <div className="competition-act-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Competition Act, 2002' }
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
              <span><strong>Act Name:</strong> Competition Act</span>
              <span><strong>Year Enacted:</strong> 2002</span>
              <span><strong>Act Number:</strong> 12 of 2003</span>
              <span><strong>Status:</strong> In Force</span>
              <span><strong>Applicable To:</strong> Competition Law, Anti-Competitive Practices & Market Regulation</span>
              <span><strong>Administered By:</strong> Competition Commission of India (CCI)</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">2002</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">255</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>12 of 2003</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Competition Law</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">In Force</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Competition Commission of India</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search sections, anti-competitive agreements, abuse of dominance, combinations..."
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
                  Insolvency and Bankruptcy Code, 2016 was enacted to promote and sustain competition in Indian markets, prevent practices having an appreciable adverse effect on competition, protect consumer interests, and ensure freedom of trade. It establishes the Competition Commission of India (CCI), regulates anti-competitive agreements, abuse of dominant position, and combinations such as mergers and acquisitions.
                </p>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '3rem' }}>Key Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Shield className="icon" size={32} color="var(--brand-blue)" />
                <h4>Anti-Competitive Agreements</h4>
                <p>Prohibits cartels, bid-rigging, and agreements that adversely affect competition.</p>
              </div>
              <div className="highlight-card">
                <TrendingUp className="icon" size={32} color="var(--brand-gold)" />
                <h4>Abuse of Dominant Position</h4>
                <p>Prevents dominant enterprises from exploiting market power or stifling competition.</p>
              </div>
              <div className="highlight-card">
                <Landmark className="icon" size={32} color="#10B981" />
                <h4>Competition Commission of India</h4>
                <p>Established the CCI as the primary regulator to enforce the provisions of the Act.</p>
              </div>
              <div className="highlight-card">
                <Briefcase className="icon" size={32} color="var(--brand-blue)" />
                <h4>Merger & Acquisition Regulation</h4>
                <p>Regulates combinations that could adversely affect competition in the relevant market.</p>
              </div>
              <div className="highlight-card">
                <Users className="icon" size={32} color="var(--brand-gold)" />
                <h4>Consumer Protection</h4>
                <p>Ensures that free and fair competition ultimately benefits the consumer.</p>
              </div>
              <div className="highlight-card">
                <BookOpen className="icon" size={32} color="#10B981" />
                <h4>Competition Advocacy</h4>
                <p>Promotes a culture of competition and raises awareness among stakeholders.</p>
              </div>
            </div>

            <h2 className="section-title">Major Regulatory Areas</h2>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <FileText className="icon" size={28} />
                <h4>Anti-Competitive Agreements</h4>
                <p>Enforcement against cartels</p>
              </div>
              <div className="dashboard-card">
                <TrendingUp className="icon" size={28} />
                <h4>Abuse of Dominant Position</h4>
                <p>Preventing market exploitation</p>
              </div>
              <div className="dashboard-card">
                <Briefcase className="icon" size={28} />
                <h4>Combinations (Mergers & Acquisitions)</h4>
                <p>Mandatory prior approvals</p>
              </div>
              <div className="dashboard-card">
                <Shield className="icon" size={28} />
                <h4>Competition Commission of India</h4>
                <p>Regulatory oversight and powers</p>
              </div>
              <div className="dashboard-card">
                <Search className="icon" size={28} />
                <h4>Investigations</h4>
                <p>Role of the Director General</p>
              </div>
              <div className="dashboard-card">
                <Scale className="icon" size={28} />
                <h4>Penalties</h4>
                <p>Fines and leniency program</p>
              </div>
              <div className="dashboard-card" style={{ gridColumn: '1 / -1' }}>
                <Users className="icon" size={28} />
                <h4>Competition Advocacy</h4>
                <p>Promoting competitive culture</p>
              </div>
            </div>

            {/* Regulatory Workflow */}
            <h2 className="section-title">Regulatory Workflow</h2>
            <div className="process-diagram">
              <div className="process-step">
                <div className="process-icon-box"><Briefcase size={24} /></div>
                <div className="process-text">Business<br/>Conduct</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileText size={24} /></div>
                <div className="process-text">Competition<br/>Assessment</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Landmark size={24} /></div>
                <div className="process-text">CCI<br/>Review</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Search size={24} /></div>
                <div className="process-text">Investigation</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileSignature size={24} /></div>
                <div className="process-text">Order /<br/>Penalty</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><CheckCircle size={24} /></div>
                <div className="process-text">Compliance</div>
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
          {searchQuery ? 'Matching Sections' : 'Complete Sections Directory (1-255)'}
        </h2>
        
        {filteredSections.length === 0 && filteredImportantSections.length === 0 ? (
          <div className="text-center py-8 text-gray-500" style={{ color: 'var(--text-secondary)' }}>
            No sections match your search query. Try different keywords.
          </div>
        ) : (
          <div style={{ marginBottom: '4rem' }}>
            {/* We map chapters then sections within them */}
            {competitionChapters.map(chapter => {
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
                <div key={chapter.partNumber} style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    Chapter {chapter.partNumber}: {chapter.title}
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

