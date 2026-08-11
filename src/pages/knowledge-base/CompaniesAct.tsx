import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Landmark, Hash, Building2, Clock, FileSignature, ArrowRight, Link as LinkIcon, BarChart, UserCheck, Heart } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { 
  companiesActChapters, 
  importantSectionsList, 
  complianceDashboardItems, 
  featuredTopics, 
  mcaLinks, 
  relatedActs 
} from '../../data/companiesActData';
import './CompaniesAct.css';

// Type definitions to help rendering
type Chapter = typeof companiesActChapters[0];
type ImportantSection = typeof importantSectionsList[0];

const CompaniesAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');



  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Filter Chapters based on Search
  const filteredChapters = useMemo(() => {
    if (!searchQuery) return companiesActChapters;
    
    const query = searchQuery.toLowerCase();
    
    return companiesActChapters.map(chapter => {
      if (
        chapter.title.toLowerCase().includes(query) ||
        chapter.description.toLowerCase().includes(query) ||
        chapter.chapterNumber.toLowerCase() === query ||
        chapter.sections.includes(query)
      ) {
        return chapter;
      }
      return null;
    }).filter(Boolean) as typeof companiesActChapters;
  }, [searchQuery]);

  // Filter Important Sections based on Search
  const filteredImportantSections = useMemo(() => {
    if (!searchQuery) return importantSectionsList;
    
    const query = searchQuery.toLowerCase();
    
    return importantSectionsList.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.purpose.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);



  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, BarChart, UserCheck, Heart, CheckCircle
  };

  return (
    <div className="companies-act-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Companies Act, 2013' }
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
              <span><strong>Act Name:</strong> Companies Act</span>
              <span><strong>Year Enacted:</strong> 2013</span>
              <span><strong>Act Number:</strong> 18 of 2013</span>
              <span><strong>Status:</strong> In Force</span>
              <span><strong>Applicable To:</strong> Incorporation and Regulation of Companies</span>
              <span><strong>Administered By:</strong> Ministry of Corporate Affairs (MCA)</span>
            </div>
          </div>
        </div>

        {/* At a Glance Statistics */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">2013</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">470</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>18 of 2013</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Companies</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">In Force</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">MCA</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search chapters, section numbers (e.g. '185'), or keywords (e.g. 'CSR', 'Audit')..."
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

            {/* What is the Companies Act? */}
            <h2 className="section-title">What is the Companies Act, 2013?</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Scale className="icon" size={32} color="var(--brand-blue)" />
                <h4>Statutory Framework</h4>
                <p>The primary legislation governing companies in India, replacing the Companies Act, 1956. It provides a robust, modern framework for corporate regulation.</p>
              </div>
              <div className="highlight-card">
                <TrendingUp className="icon" size={32} color="var(--brand-gold)" />
                <h4>Purpose & Scope</h4>
                <p>Governs every stage of a company's lifecycle—from incorporation and fundraising to governance, compliance, mergers, investigations, and winding up.</p>
              </div>
              <div className="highlight-card">
                <Shield className="icon" size={32} color="#10B981" />
                <h4>Key Reforms Introduced</h4>
                <p>Introduced major reforms like Corporate Social Responsibility (CSR), One Person Companies (OPC), independent directors, and stricter penalties for fraud.</p>
              </div>
            </div>

            {/* Company Lifecycle - Horizontal Journey */}
            <h2 className="section-title">Company Lifecycle Journey</h2>
            <div className="process-diagram">
              <div className="process-step">
                <div className="process-icon-box"><Briefcase size={24} /></div>
                <div className="process-text">Incorporate<br/>Company</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileText size={24} /></div>
                <div className="process-text">Certificate of<br/>Incorporation</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Users size={24} /></div>
                <div className="process-text">Appoint Board &<br/>Directors</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><TrendingUp size={24} /></div>
                <div className="process-text">Issue Share<br/>Capital</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><CheckCircle size={24} /></div>
                <div className="process-text">Annual<br/>Compliance</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Scale size={24} /></div>
                <div className="process-text">Winding<br/>Up</div>
              </div>
            </div>

            {/* Compliance Dashboard */}
            <h2 className="section-title">Corporate Compliance Hub</h2>
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
              {searchQuery ? 'Matching Important Sections' : 'Frequently Referenced Sections'}
            </h2>
            <div className="highlights-grid">
              {filteredImportantSections.map((sec, idx) => (
                <div key={idx} className="important-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3>Section {sec.section}</h3>
                    <span className="stat-label" style={{ background: 'rgba(200, 164, 93, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>Important</span>
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>{sec.title}</div>
                  <div className="purpose">{sec.purpose}</div>
                  <p>{sec.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chapter Directory (Filterable) */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>
          {searchQuery ? 'Matching Chapters' : 'Complete Chapter Directory'}
        </h2>
        
        {filteredChapters.length === 0 && filteredImportantSections.length === 0 ? (
          <div className="text-center py-8 text-gray-500" style={{ color: 'var(--text-secondary)' }}>
            No sections or chapters match your search query. Try different keywords.
          </div>
        ) : (
          <div style={{ marginBottom: '4rem' }}>
            {filteredChapters.map((chapter) => (
              <div key={chapter.chapterNumber} className="accordion-item static">
                <div className="accordion-header static-header">
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '90%' }}>
                    <span className="stat-label" style={{ fontSize: '0.85rem' }}>Chapter {chapter.chapterNumber} • Sections {chapter.sections}</span>
                    <span style={{ fontWeight: 600, fontSize: '1.2rem', marginTop: '0.25rem', color: 'var(--brand-blue)' }}>{chapter.title}</span>
                    <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{chapter.description}</span>
                  </div>
                </div>
                
                </div>
            ))}
          </div>
        )}

        {/* MCA Quick Links */}
        {!searchQuery && (
          <>
            <h2 className="section-title">MCA Quick Links</h2>
            <div className="pill-container" style={{ marginBottom: '3rem' }}>
              {mcaLinks.map(link => (
                <div key={link} className="filter-pill" style={{ background: 'rgba(30, 94, 255, 0.1)', borderColor: 'var(--brand-blue)', color: 'var(--text-primary)' }}>
                  {link} ↗
                </div>
              ))}
            </div>

            {/* Related Acts */}
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

export { CompaniesAct };
