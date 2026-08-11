import React, { useState, useMemo } from 'react';
import { Search, Scale, BookOpen, Briefcase, FileText, ArrowRight, Shield, TrendingUp, Users, Landmark, Hash, Building2, Clock, FileSignature } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import {
  partnershipChapters,
  partnershipImportantSections,
  partnershipDefinitions
} from '../../data/partnershipActData';
import './LlpAct.css';

export const PartnershipAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  
  const toggleChapter = (chapter: string) => setExpandedChapter(prev => prev === chapter ? null : chapter);
  
  const filteredChapters = useMemo(() => {
    if (!searchQuery) return partnershipChapters;
    
    const query = searchQuery.toLowerCase();
    
    return partnershipChapters.map(chapter => {
      if (chapter.title.toLowerCase().includes(query) || chapter.summary.toLowerCase().includes(query)) {
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
    }).filter(Boolean) as typeof partnershipChapters;
  }, [searchQuery]);

  React.useEffect(() => {
    if (searchQuery && filteredChapters.length === 1) {
      setExpandedChapter(filteredChapters[0].chapterNumber);
    }
  }, [searchQuery, filteredChapters]);

  return (
    <div className="llp-act-page">
      <InternalPageHero
        title="Indian Partnership Act, 1932"
        description="Comprehensive guide to the formation, governance, registration, and dissolution of Partnerships in India."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Partnership Act 1932' }
        ]}
        stats={[
          { label: 'Enacted', value: '1932', icon: 'Briefcase' },
          { label: 'Effective', value: '1 October 1932', icon: 'TrendingUp' },
          { label: 'Chapters', value: '8', icon: 'BookOpen' },
          { label: 'Authority', value: 'Registrar of Firms', icon: 'Scale' }
        ]}
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Indian Partnership Act</span>
              <span><strong>Year Enacted:</strong> 1932</span>
              <span><strong>Act Number:</strong> 9 of 1932</span>
              <span><strong>Status:</strong> In Force</span>
              <span><strong>Applicable To:</strong> Formation and regulation of Partnerships</span>
              <span><strong>Administered By:</strong> Registrar of Firms</span>
            </div>
          </div>
        </div>

        {/* At a Glance Statistics */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1932</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">74</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>9 of 1932</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Partnerships</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">In Force</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Registrar of Firms</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search chapters, sections, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <>
            <h2 className="section-title">What is a Partnership?</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Users className="icon" size={32} />
                <h4>Agreement & Profit Sharing</h4>
                <p>Partnership arises from contract and not from status. It involves an agreement to share the profits of a business.</p>
              </div>
              <div className="highlight-card">
                <Scale className="icon" size={32} />
                <h4>Mutual Agency</h4>
                <p>The business is carried on by all or any of them acting for all. Each partner acts as an agent and principal.</p>
              </div>
              <div className="highlight-card">
                <Shield className="icon" size={32} />
                <h4>Unlimited Liability</h4>
                <p>Unlike an LLP, every partner is liable, jointly with all other partners and also severally, for all acts of the firm.</p>
              </div>
            </div>

            <h2 className="section-title">Critical Statutory Highlights</h2>
            <div className="highlights-grid">
              {partnershipImportantSections.map((sec, index) => (
                <div key={index} className="highlight-card">
                  <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Section {sec.section}
                    <span className="stat-label" style={{ margin: 0 }}>Important</span>
                  </h4>
                  <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--brand-gold)' }}>{sec.title}</div>
                  <p>{sec.explanation}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title">Key Definitions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {partnershipDefinitions.map((def, idx) => (
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
                    <span className="stat-label" style={{ fontSize: '0.85rem' }}>Chapter {chapter.chapterNumber} • {chapter.sectionRange}</span>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{chapter.title}</span>
                    <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{chapter.summary}</span>
                  </div>
                </button>
                <div className="accordion-content">
                  {chapter.sections && chapter.sections.length > 0 ? (
                    <div style={{ padding: '1rem 0' }}>
                      {chapter.sections.map((sec, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>Section {sec.sectionNumber}: {sec.title}</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{sec.content}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>No sections available for this chapter.</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
