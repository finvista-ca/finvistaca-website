import React, { useState, useMemo } from 'react';
import { Search, Scale, BookOpen, Briefcase, TrendingUp, Users, FileText, Landmark, Hash, Building2, Clock, FileSignature } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import {
  mrtpChapters,
  importantMrtpSections
} from '../../data/monopoliesActData';
import './LlpAct.css';

export const MonopoliesAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  
  const toggleChapter = (chapter: string) => setExpandedChapter(prev => prev === chapter ? null : chapter);
  
  const filteredChapters = useMemo(() => {
    if (!searchQuery) return mrtpChapters;
    
    const query = searchQuery.toLowerCase();
    
    return mrtpChapters.filter(chapter => 
      chapter.title.toLowerCase().includes(query) || 
      chapter.description.toLowerCase().includes(query) ||
      chapter.chapterNumber.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  React.useEffect(() => {
    if (searchQuery && filteredChapters.length === 1) {
      setExpandedChapter(filteredChapters[0].chapterNumber);
    }
  }, [searchQuery, filteredChapters]);

  return (
    <div className="llp-act-page">
      <InternalPageHero
        title="Monopolies and Restrictive Trade Practices Act, 1969"
        description="Reference guide to the prevention of concentration of economic power and control of monopolies."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'MRTP Act' }
        ]}
        stats={[
          { label: 'Enacted', value: '1969', icon: 'Briefcase' },
          { label: 'Repealed', value: 'Replaced by Competition Act', icon: 'TrendingUp' },
          { label: 'Chapters', value: '9', icon: 'BookOpen' },
          { label: 'Authority', value: 'MRTP Commission', icon: 'Scale' }
        ]}
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Monopolies & Restrictive Trade Practices Act</span>
              <span><strong>Year Enacted:</strong> 1969</span>
              <span><strong>Act Number:</strong> 54 of 1969</span>
              <span><strong>Status:</strong> Repealed</span>
              <span><strong>Applicable To:</strong> Monopoly & Trade Practice Regulation</span>
              <span><strong>Administered By:</strong> MRTP Commission</span>
            </div>
          </div>
        </div>

        {/* At a Glance Statistics */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1969</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">67</span>
            <span className="stat-label">TOTAL SECTIONS</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>54 of 1969</span>
            <span className="stat-label">ACT NUMBER</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Monopolies</span>
            <span className="stat-label">APPLICABLE TO</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Repealed</span>
            <span className="stat-label">CURRENT STATUS</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">MRTP Commission</span>
            <span className="stat-label">ADMINISTERED BY</span>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box-custom">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search chapters or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <>
            <h2 className="section-title">Core Objectives</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <Users className="icon" size={32} />
                <h4>Prevent Concentration</h4>
                <p>Ensuring that the operation of the economic system does not result in the concentration of economic power to the common detriment.</p>
              </div>
              <div className="highlight-card">
                <Scale className="icon" size={32} />
                <h4>Control Monopolies</h4>
                <p>Regulating and prohibiting monopolistic trade practices that might unreasonably increase costs or limit supply.</p>
              </div>
              <div className="highlight-card">
                <FileText className="icon" size={32} />
                <h4>Restrictive Agreements</h4>
                <p>Prohibition of restrictive trade practices like price fixing, market allocation, and resale price maintenance.</p>
              </div>
            </div>

            <h2 className="section-title">Critical Statutory Highlights</h2>
            <div className="highlights-grid">
              {importantMrtpSections.map((sec, index) => (
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
          </>
        )}

        {/* Dynamic Chapter Directory */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>
          {searchQuery ? 'Search Results' : 'Statutory Directory'}
        </h2>
        
        {filteredChapters.length === 0 ? (
          <div className="text-center py-8 text-gray-500" style={{ color: 'var(--text-secondary)' }}>
            No chapters match your search query. Try different keywords.
          </div>
        ) : (
          <div style={{ marginBottom: '4rem' }}>
            {filteredChapters.map((chapter) => (
              <div key={chapter.chapterNumber} className="accordion-item static">
                <div className="accordion-header static-header">
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <span className="stat-label" style={{ fontSize: '0.85rem' }}>Chapter {chapter.chapterNumber} • Sections {chapter.sections}</span>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{chapter.title}</span>
                    <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{chapter.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
