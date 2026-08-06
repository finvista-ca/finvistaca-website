import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ChevronDown, ChevronUp, ArrowRight, Briefcase, 
  Users, Shield, TrendingUp, Scale, BookOpen, FileText, 
  BarChart, UserCheck, Heart, CheckCircle, ChevronRight
} from 'lucide-react';
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
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleChapter = (chapterNum: string) => {
    setExpandedChapter(expandedChapter === chapterNum ? null : chapterNum);
  };

  const toggleSection = (sectionNum: string) => {
    setExpandedSection(expandedSection === sectionNum ? null : sectionNum);
  };

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

  // Auto-expand chapter if there's only one search result
  React.useEffect(() => {
    if (searchQuery && filteredChapters.length === 1) {
      setExpandedChapter(filteredChapters[0].chapterNumber);
    } else if (!searchQuery) {
      setExpandedChapter(null);
      setExpandedSection(null);
    }
  }, [searchQuery, filteredChapters]);

  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, BarChart, UserCheck, Heart, CheckCircle
  };

  return (
    <div className="companies-act-page">
      {/* Breadcrumbs (No Hero) */}
      <div className="breadcrumb-container">
        <Link to="/">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/knowledge-base">Knowledge Base</Link>
        <span className="breadcrumb-separator">›</span>
        <span>Companies Act 2013</span>
      </div>

      <div className="container">
        
        <h1 style={{ color: 'var(--text-heading)', fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          Companies Act, 2013
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          India's principal legislation governing the incorporation, management, administration, regulation, restructuring and winding up of companies.
        </p>

        {/* Global Search */}
        <div className="search-container">
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
        <div className="pill-container" style={{ justifyContent: 'center' }}>
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
            {/* Act at a Glance - Statistics */}
            <div className="overview-grid" style={{ marginTop: '2rem' }}>
              <div className="stat-card">
                <span className="stat-value">2013</span>
                <span className="stat-label">Year Enacted</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">29</span>
                <span className="stat-label">Chapters</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">470</span>
                <span className="stat-label">Sections</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">7</span>
                <span className="stat-label">Schedules</span>
              </div>
              <div className="stat-card">
                <span className="stat-value" style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>MCA</span>
                <span className="stat-label">Administered By</span>
              </div>
              <div className="stat-card">
                <span className="stat-value" style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#10B981' }}>In Force</span>
                <span className="stat-label">Status</span>
              </div>
            </div>

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
                  <div key={idx} className="dashboard-card" onClick={() => handleTopicClick(item.target !== 'General' ? item.target : item.title)}>
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
                  
                  <button className="read-more-btn" onClick={() => toggleSection(`imp-${sec.section}`)}>
                    {expandedSection === `imp-${sec.section}` ? 'Hide Details' : 'Read Statutory Text'}
                    <ChevronRight size={16} style={{ transform: expandedSection === `imp-${sec.section}` ? 'rotate(90deg)' : 'rotate(0deg)', transition: '0.2s' }} />
                  </button>

                  {expandedSection === `imp-${sec.section}` && (
                    <div className="important-content">
                      (Statutory wording for Section {sec.section} would be dynamically loaded here from the official gazette repository. Due to the length of the Act, only essential text is displayed.)
                    </div>
                  )}
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
              <div key={chapter.chapterNumber} className={`accordion-item ${expandedChapter === chapter.chapterNumber ? 'active' : ''}`}>
                <button 
                  className="accordion-header"
                  onClick={() => toggleChapter(chapter.chapterNumber)}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '90%' }}>
                    <span className="stat-label" style={{ fontSize: '0.85rem' }}>Chapter {chapter.chapterNumber} • Sections {chapter.sections}</span>
                    <span style={{ fontWeight: 600, fontSize: '1.2rem', marginTop: '0.25rem', color: 'var(--brand-blue)' }}>{chapter.title}</span>
                    <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{chapter.description}</span>
                  </div>
                  {expandedChapter === chapter.chapterNumber ? (
                    <ChevronUp className="accordion-icon" size={24} />
                  ) : (
                    <ChevronDown className="accordion-icon" size={24} />
                  )}
                </button>
                
                <div className={`accordion-content ${expandedChapter === chapter.chapterNumber ? 'active' : ''}`}>
                  <div style={{ padding: '1rem 0', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>This chapter covers Sections {chapter.sections}. Select an important section above to read full provisions.</p>
                    {/* Placeholder for list of sections within this chapter */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                       <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}><strong>Section {chapter.sections.split('-')[0]}:</strong> Introduction to {chapter.title}</div>
                       <div style={{ paddingBottom: '0.5rem' }}><strong>Section {chapter.sections.split('-')[1] || parseInt(chapter.sections.split('-')[0]) + 1}:</strong> General provisions of {chapter.title}</div>
                    </div>
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

      </div>
    </div>
  );
};

export { CompaniesAct };
