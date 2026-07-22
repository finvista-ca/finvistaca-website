import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, AlertCircle, FileText, Download, ChevronLeft, ChevronRight, BookOpen, Clock, FileKey, Layers, Hash } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';

import { giftTaxChapters, giftTaxImportantSections, giftTaxSearchIndex } from '../../data/giftTaxData';
import './GiftTaxAct.css';

export const GiftTaxAct: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Chapter Accordion State
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  // Full Act Reference Accordion State
  const [activeReference, setActiveReference] = useState<string | null>(null);

  // Important Sections "Read More" State
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleChapter = (id: string) => {
    setActiveChapter(activeChapter === id ? null : id);
  };

  const toggleReference = (id: string) => {
    setActiveReference(activeReference === id ? null : id);
  };

  const toggleImportantSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Search logic for Section Index
  const filteredSearchIndex = useMemo(() => {
    return giftTaxSearchIndex.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.section.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredSearchIndex.length / pageSize));
  
  // Reset page when search changes
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const pagedSections = filteredSearchIndex.slice((page - 1) * pageSize, page * pageSize);

  const relatedArticlesData = [
    { name: "Income Tax Act", slug: "income-tax-act" },
    { name: "Income from Other Sources", slug: "income-from-other-sources" },
    { name: "Capital Gains", slug: "capital-gains" },
    { name: "Cost Inflation Index", slug: "cost-inflation-index" }
  ];

  return (
    <div className="gift-tax-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Gift Tax Act' }
        ]}
        title="Gift Tax Act, 1958"
        description="Comprehensive reference guide to the historical Gift-tax Act."
      />

      <div className="container">
        
        {/* Information Card */}
        <div className="abolished-card">
          <AlertCircle className="icon" size={24} />
          <div>
            <p>Important Notice: Gift Tax Abolished</p>
            <span style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem', display: 'block' }}>
              The Gift-tax Act, 1958 ceased to apply in respect of gifts made on or after October 1, 1998. Today, gifts are generally governed and taxed under the Income-tax Act, 1961 (specifically Section 56), wherever applicable. This page serves as a historical reference.
            </span>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--color-primary)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1958</span>
            <span className="stat-label">Year Enacted</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--color-primary)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Abolished</span>
            <span className="stat-label">Current Status</span>
          </div>
          <div className="stat-card">
            <Layers size={24} color="var(--color-primary)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">8</span>
            <span className="stat-label">Chapters</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--color-primary)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">47</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat-card">
            <FileKey size={24} color="var(--color-primary)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">2</span>
            <span className="stat-label">Schedules</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="intro-section">
          <h2 className="section-title">Introduction to the Act</h2>
          <p>
            The Gift-tax Act, 1958, was introduced to levy a tax on gifts to prevent the evasion of income tax, wealth tax, and estate duty through the transfer of properties to relatives and others. Under this Act, every person (including individuals, Hindu Undivided Families, companies, and associations) who made taxable gifts exceeding the maximum exempt amount during a previous year was liable to pay gift-tax.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Although the Act was abolished for gifts made on or after October 1, 1998, it holds significant historical importance. Many fundamental principles of valuation and the definition of what constitutes a "transfer" without adequate consideration continue to influence modern tax assessments, particularly under the "Income from Other Sources" provisions of the current Income-tax Act.
          </p>
        </div>

        {/* Chapter Navigation */}
        <h2 className="section-title">Chapter Navigation</h2>
        <div style={{ marginBottom: '4rem' }}>
          {giftTaxChapters.map((chapter) => (
            <div key={chapter.id} className={`accordion-item ${activeChapter === chapter.id ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleChapter(chapter.id)}>
                {chapter.title}
                <ChevronDown className="accordion-icon" size={20} />
              </button>
              <div className="accordion-content">
                <ul className="section-list">
                  {chapter.sections.map(section => (
                    <li key={section.id}>
                      <span className="section-num">Sec {section.id}</span>
                      <span>{section.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Sections */}
        <h2 className="section-title">Important Sections</h2>
        <div className="important-sections-grid">
          {giftTaxImportantSections.map(section => (
            <div className="important-card" key={section.section}>
              <h3>{section.section} - {section.title}</h3>
              <div className="card-summary">
                {section.summary}
              </div>
              <button 
                className="read-more-btn" 
                onClick={() => toggleImportantSection(section.section)}
              >
                {expandedSection === section.section ? 'Show Less' : 'Read More'}
                {expandedSection === section.section ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {expandedSection === section.section && (
                <div className="important-content">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Searchable Section Index */}
        <h2 className="section-title">Searchable Section Index</h2>
        <div className="search-container">
          <div className="search-box-custom">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by section number or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="table-custom-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Section</th>
                <th style={{ width: '60%' }}>Title</th>
                <th style={{ width: '25%' }}>Chapter</th>
              </tr>
            </thead>
            <tbody>
              {pagedSections.length > 0 ? (
                pagedSections.map((item, i) => (
                  <tr key={i}>
                    <td><strong>{item.section}</strong></td>
                    <td>{item.title}</td>
                    <td style={{ color: '#666' }}>{item.chapter}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                    No sections found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="pagination-custom">
              <button 
                disabled={page === 1} 
                onClick={() => setPage(p => p - 1)}
              >
                <ChevronLeft size={16} />
              </button>
              <span>Page {page} of {totalPages}</span>
              <button 
                disabled={page === totalPages} 
                onClick={() => setPage(p => p + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Full Act Reference */}
        <h2 className="section-title">Full Act Reference</h2>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            Expand the sections below to view the structural outline of the entire Act.
          </p>
          {giftTaxChapters.map((chapter) => (
            <div key={`ref-${chapter.id}`} className={`accordion-item ${activeReference === chapter.id ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleReference(chapter.id)}>
                {chapter.title}
                <ChevronDown className="accordion-icon" size={20} />
              </button>
              <div className="accordion-content">
                <ul className="section-list">
                  {chapter.sections.map(section => (
                    <li key={`ref-${section.id}`} style={{ display: 'block' }}>
                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span className="section-num">Sec {section.id}</span>
                        <span style={{ fontWeight: 600 }}>{section.title}</span>
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '3.5rem' }}>
                        {section.title.includes('Omitted') 
                          ? 'This section was omitted by subsequent Finance Acts.' 
                          : 'Please refer to the official document for the full legal text of this section.'}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};
