import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import {
  llpChapters,
  llpSchedules,
  llpDefinitions,
  llpImportantSections
} from '../../data/llpData';
import './LlpAct.css';

const LlpAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleChapter = (chapterNum: string) => {
    setExpandedChapter(expandedChapter === chapterNum ? null : chapterNum);
  };

  const toggleSection = (sectionNum: string) => {
    setExpandedSection(expandedSection === sectionNum ? null : sectionNum);
  };

  // Filter Chapters based on Search
  const filteredChapters = useMemo(() => {
    if (!searchQuery) return llpChapters;
    
    const query = searchQuery.toLowerCase();
    
    return llpChapters.map(chapter => {
      if (chapter.title.toLowerCase().includes(query)) {
        return chapter;
      }
      const matchingSections = chapter.sections.filter(sec => 
        sec.title.toLowerCase().includes(query) || 
        sec.content.toLowerCase().includes(query) ||
        sec.sectionNumber.includes(query)
      );
      if (matchingSections.length > 0) {
        return { ...chapter, sections: matchingSections };
      }
      return null;
    }).filter(Boolean) as typeof llpChapters;
  }, [searchQuery]);

  React.useEffect(() => {
    if (searchQuery && filteredChapters.length === 1) {
      setExpandedChapter(filteredChapters[0].chapterNumber);
    }
  }, [searchQuery, filteredChapters]);

  return (
    <div className="llp-act-page">

      <InternalPageHero
        title="Limited Liability Partnership Act, 2008"
        description="Comprehensive guide to the formation, governance, compliance, conversion, investigation and winding up of Limited Liability Partnerships in India."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'LLP Act 2008' }
        ]}
        stats={[
          { label: 'Enacted', value: '2008', icon: 'Briefcase' },
          { label: 'Effective', value: '31 March 2009', icon: 'TrendingUp' },
          { label: 'Chapters & Sections', value: '14 & 81', icon: 'BookOpen' },
          { label: 'Schedules', value: '4', icon: 'FileText' },
          { label: 'Authority', value: 'MCA', icon: 'Scale' }
        ]}
      />

      <div className="container" style={{ marginTop: '2rem' }}>
        
        {/* At a Glance Statistics */}
        <div className="overview-grid">
          <div className="stat-card">
            <span className="stat-value">14</span>
            <span className="stat-label">Chapters</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">81</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">4</span>
            <span className="stat-label">Schedules</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2009</span>
            <span className="stat-label">Year Effective</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search chapters, sections, or keywords (e.g. 'incorporation', 'winding up')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <>
            {/* What is an LLP */}
            <h2 className="section-title">What is an LLP?</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Shield className="icon" size={32} />
                <h4>Limited Liability</h4>
                <p>Partners are only liable to the extent of their agreed contribution to the LLP. No personal assets are at risk for business debts.</p>
              </div>
              <div className="highlight-card">
                <Scale className="icon" size={32} />
                <h4>Separate Legal Entity</h4>
                <p>The LLP is a body corporate and a legal entity separate from its partners. It has perpetual succession.</p>
              </div>
              <div className="highlight-card">
                <Users className="icon" size={32} />
                <h4>Operational Flexibility</h4>
                <p>Internal governance is highly flexible and determined primarily by a mutual LLP agreement rather than rigid statutory rules.</p>
              </div>
            </div>

            {/* Important Sections Highlights */}
            <h2 className="section-title">Critical Statutory Highlights</h2>
            <div className="highlights-grid">
              {llpImportantSections.map((sec, index) => (
                <div key={index} className="highlight-card">
                  <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Section {sec.section}
                    <span className="stat-label" style={{ margin: 0 }}>Important</span>
                  </h4>
                  <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--brand-gold)' }}>{sec.why}</div>
                  <p>{sec.explanation}</p>
                </div>
              ))}
            </div>

            {/* Workflow Timeline */}
            <h2 className="section-title">LLP Lifecycle</h2>
            <div className="process-diagram">
              <div className="process-step">
                <div className="process-icon-box"><Briefcase size={24} /></div>
                <div className="process-text">Incorporation (Sec 11)</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><FileText size={24} /></div>
                <div className="process-text">LLP Agreement (Sec 23)</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><TrendingUp size={24} /></div>
                <div className="process-text">Annual Returns (Sec 35)</div>
              </div>
              <ArrowRight className="process-arrow" size={24} />
              <div className="process-step">
                <div className="process-icon-box"><Scale size={24} /></div>
                <div className="process-text">Winding Up (Sec 63)</div>
              </div>
            </div>
            
            {/* Definitions Grid */}
            <h2 className="section-title">Key Definitions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {llpDefinitions.slice(0, 8).map((def, idx) => (
                <div key={idx} className="highlight-card" style={{ justifyContent: 'flex-start' }}>
                  <h4 style={{ color: 'var(--brand-gold)' }}>{def.term}</h4>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{def.meaning}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dynamic Chapter Directory */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>
          {searchQuery ? 'Search Results' : 'Statutory Directory'}
        </h2>
        
        {filteredChapters.length === 0 ? (
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
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <span className="stat-label" style={{ fontSize: '0.85rem' }}>Chapter {chapter.chapterNumber}</span>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{chapter.title}</span>
                  </div>
                  {expandedChapter === chapter.chapterNumber ? (
                    <ChevronUp className="accordion-icon" size={20} />
                  ) : (
                    <ChevronDown className="accordion-icon" size={20} />
                  )}
                </button>
                
                <div className={`accordion-content ${expandedChapter === chapter.chapterNumber ? 'active' : ''}`}>
                  {chapter.sections.map((section, idx) => (
                    <div key={section.sectionNumber} style={{ 
                      paddingBottom: '1rem', 
                      paddingTop: '1rem',
                      borderBottom: idx < chapter.sections.length - 1 ? '1px solid var(--border-color)' : 'none'
                    }}>
                      <div 
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-heading)', fontWeight: 600 }}
                        onClick={() => toggleSection(section.sectionNumber)}
                      >
                        Section {section.sectionNumber}: {section.title}
                        <span style={{ fontSize: '0.8rem', color: 'var(--brand-blue)', background: 'rgba(30, 94, 255, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                          {expandedSection === section.sectionNumber ? 'Hide Text' : 'Read Text'}
                        </span>
                      </div>
                      
                      {(expandedSection === section.sectionNumber || searchQuery) && (
                        <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedules Section */}
        {!searchQuery && llpSchedules.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Schedules</h2>
            <div>
              {llpSchedules.map((schedule, idx) => (
                <div key={idx} className={`accordion-item ${expandedChapter === `schedule-${idx}` ? 'active' : ''}`}>
                  <button 
                    className="accordion-header"
                    onClick={() => toggleChapter(`schedule-${idx}`)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{schedule.title}</span>
                    </div>
                    {expandedChapter === `schedule-${idx}` ? (
                      <ChevronUp className="accordion-icon" size={20} />
                    ) : (
                      <ChevronDown className="accordion-icon" size={20} />
                    )}
                  </button>
                  
                  <div className={`accordion-content ${expandedChapter === `schedule-${idx}` ? 'active' : ''}`}>
                    <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '1rem' }}>
                      {schedule.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LlpAct;
