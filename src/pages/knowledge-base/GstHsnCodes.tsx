import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gstHsnCodesData, type HSNCode, relatedKnowledgeBase } from '../../data/gstHsnCodesData';
import { Search, X, ChevronRight, ExternalLink, ShieldCheck, AlertCircle, Info, Database } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstHsnCodes.css';

const RECORDS_PER_PAGE = 50;

export const GstHsnCodes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHSN, setSelectedHSN] = useState<HSNCode | null>(null);

  // Extract unique chapters for filter dropdown
  const chapters = useMemo(() => {
    const chapSet = new Set(gstHsnCodesData.map(f => f.chapter).filter(Boolean));
    return ['All', ...Array.from(chapSet).sort()];
  }, []);

  const normalizeString = (str: string) => {
    return str.toLowerCase().replace(/[\.\s]/g, '');
  };

  // Filter and sort logic
  const filteredAndSortedData = useMemo(() => {
    let result = [...gstHsnCodesData];
    
    // Filter by Chapter
    if (selectedChapter !== 'All') {
      result = result.filter(r => r.chapter === selectedChapter);
    }

    // Filter by Search Query
    if (searchQuery) {
      const normalizedQuery = normalizeString(searchQuery);
      const rawQuery = searchQuery.toLowerCase();

      result = result.filter(r => {
        const normalizedCode = normalizeString(r.hsnCode);
        const codeMatch = normalizedCode.includes(normalizedQuery);
        const descMatch = r.description.toLowerCase().includes(rawQuery);
        return codeMatch || descMatch;
      });

      // Sort with priority to exact code match
      result.sort((a, b) => {
        const aNormCode = normalizeString(a.hsnCode);
        const bNormCode = normalizeString(b.hsnCode);
        
        const aExact = aNormCode === normalizedQuery ? 1 : 0;
        const bExact = bNormCode === normalizedQuery ? 1 : 0;
        
        if (aExact !== bExact) return bExact - aExact; // exact matches first
        
        // then starts-with matches
        const aStartsWith = aNormCode.startsWith(normalizedQuery) ? 1 : 0;
        const bStartsWith = bNormCode.startsWith(normalizedQuery) ? 1 : 0;
        if (aStartsWith !== bStartsWith) return bStartsWith - aStartsWith;

        // else sort alphabetically by HSN code
        return a.hsnCode.localeCompare(b.hsnCode);
      });
    } else {
      // General sorting by HSN code
      result.sort((a, b) => {
        const aNormCode = normalizeString(a.hsnCode);
        const bNormCode = normalizeString(b.hsnCode);
        return aNormCode.localeCompare(bNormCode);
      });
    }

    return result;
  }, [searchQuery, selectedChapter]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / RECORDS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * RECORDS_PER_PAGE;
    return filteredAndSortedData.slice(start, start + RECORDS_PER_PAGE);
  }, [filteredAndSortedData, currentPage]);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('directory')?.offsetTop ? document.getElementById('directory')!.offsetTop - 100 : 0, behavior: 'smooth' });
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedChapter]);

  const openModal = (hsn: HSNCode) => {
    setSelectedHSN(hsn);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedHSN(null);
    document.body.style.overflow = 'auto';
  };

  const applyQuickSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedChapter('All');
  };

  return (
    <div className="gst-hsn-page-wrapper">
      <InternalPageHero 
        title="GST HSN Codes"
        description="Search and explore Harmonized System of Nomenclature codes used for GST classification."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST', path: '/knowledge-base/gst-acts' },
          { label: 'HSN Codes' }
        ]}
      />
      
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        
        {/* Partial Indexed Dataset Notice */}
        <div className="hsn-notice-banner">
          <div className="hsn-notice-content">
            <Info size={24} className="hsn-notice-icon" />
            <div>
              <strong>Partial Indexed Dataset:</strong> This directory contains the HSN records currently indexed within FinvistaCA. For the complete HSN classification and applicable GST rates, refer to the complete HSN Code & Rate Repository.
            </div>
          </div>
          <a href="https://irkandassociates.com/GstHSNCodeWithRate.aspx" target="_blank" rel="noopener noreferrer" className="hsn-notice-btn">
            View Complete HSN & Rate Database &rarr;
          </a>
        </div>

        <KnowledgeBaseHeader
          infoTitle="Search and explore Harmonized System of Nomenclature codes used for GST classification."
          infoIcon={<Database className="icon" size={24} />}
          infoGrid={[
            { label: 'HSN CODES INDEXED', value: gstHsnCodesData.length },
            { label: 'CHAPTERS REPRESENTED', value: chapters.length - 1 },
            { label: 'SEARCHABLE DIRECTORY', value: 'Indexed' },
            { label: 'RATE REFERENCE', value: 'External HSN & Rate Repository' }
          ]}
          statCards={[
            { value: gstHsnCodesData.length, label: 'HSN CODES INDEXED' },
            { value: chapters.length - 1, label: 'CHAPTERS REPRESENTED' },
            { value: 'Indexed', label: 'SEARCHABLE DIRECTORY' },
            { value: 'External', label: 'RATE REFERENCE' }
          ]}
        />
      </div>

      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Find an HSN Code */}
        <section className="hsn-finder-section">
          <div className="hsn-finder-header">
            <h2>Find an HSN Code</h2>
            <p>Search by exact HSN code, partial code, or product description.</p>
          </div>
          <div className="hsn-search-wrapper">
            <Search size={22} className="hsn-search-icon" />
            <input 
              type="text" 
              placeholder="Search by HSN code or product description (e.g. 0101, 0101.29.10, horses)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="hsn-search-input"
            />
          </div>
          <div className="hsn-quick-searches">
            <span className="hsn-quick-label">Try:</span>
            {['Live animals', 'Horses', 'Bovine animals', 'Swine', 'Sheep & goats', 'Poultry', 'Meat'].map(term => (
              <button key={term} className="hsn-quick-btn" onClick={() => applyQuickSearch(term)}>
                {term}
              </button>
            ))}
          </div>
        </section>

        {/* Directory Section */}
        <section id="directory" className="hsn-directory-section">
          <h2>HSN Code Directory</h2>
          
          <div className="hsn-controls">
            <div className="hsn-filters">
              <select 
                value={selectedChapter} 
                onChange={(e) => {
                  setSelectedChapter(e.target.value);
                }}
                className="hsn-filter-select"
              >
                {chapters.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'Browse HSN Chapters (All)' : cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="hsn-table-container">
            {currentData.length > 0 ? (
              <table className="hsn-table">
                <thead>
                  <tr>
                    <th>HSN CODE</th>
                    <th>DESCRIPTION</th>
                    <th className="hide-mobile">CHAPTER</th>
                    <th>RATE</th>
                    <th>REFERENCE</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map(hsn => (
                    <tr key={hsn.id} onClick={() => openModal(hsn)} className="hsn-table-row">
                      <td className="hsn-code-col">
                        <span className="hsn-code-badge">{hsn.hsnCode}</span>
                      </td>
                      <td className="hsn-desc-col">{hsn.description}</td>
                      <td className="hsn-chapter-col hide-mobile">{hsn.chapter || '-'}</td>
                      <td className="hsn-rate-col">
                        {hsn.gstRate ? (
                          <span className="hsn-rate-value" style={{ fontWeight: 600, color: 'white' }}>{hsn.gstRate}</span>
                        ) : (
                          <span className="hsn-rate-placeholder">See repository</span>
                        )}
                      </td>
                      <td className="hsn-ref-col">
                        <span className="hsn-view-btn">View Details <ChevronRight size={14} /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="hsn-empty-state">
                <AlertCircle size={40} className="hsn-empty-icon" />
                <h3>No HSN codes found</h3>
                <p>We couldn't find any indexed HSN codes matching your search criteria.</p>
                <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  <a href="https://irkandassociates.com/GstHSNCodeWithRate.aspx" target="_blank" rel="noopener noreferrer" className="hsn-official-btn">
                    Check Complete HSN Code Repository <ExternalLink size={16} />
                  </a>
                </div>
                <button className="hsn-clear-btn" onClick={() => { setSearchQuery(''); setSelectedChapter('All'); }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="hsn-pagination">
              <button 
                className="hsn-page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="hsn-page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="hsn-page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </section>

        {/* HSN vs SAC & Structure */}
        <section className="hsn-educational-section">
          <div className="hsn-edu-grid">
            <div className="hsn-edu-card">
              <h3>HSN vs SAC</h3>
              <div className="hsn-edu-box">
                <h4>HSN (Harmonized System of Nomenclature)</h4>
                <p>An internationally accepted product coding system used to classify goods for taxation and customs. Under GST, HSN codes determine the tax rate applicable to physical goods.</p>
              </div>
              <div className="hsn-edu-box">
                <h4>SAC (Service Accounting Code)</h4>
                <p>A classification system used exclusively for services. While goods are classified under HSN, services provided are classified using SAC codes to determine their GST rate.</p>
              </div>
            </div>
            
            <div className="hsn-edu-card">
              <h3>HSN Code Structure</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                HSN codes follow a logical hierarchy. The initial digits represent broad categories, while subsequent digits represent more specific product descriptions.
              </p>
              
              <div className="hsn-hierarchy-diagram">
                <div className="hsn-hier-node">
                  <span className="hsn-hier-code">01</span>
                  <span className="hsn-hier-lbl">Chapter (Live animals)</span>
                </div>
                <div className="hsn-hier-arrow">↓</div>
                <div className="hsn-hier-node">
                  <span className="hsn-hier-code">0101</span>
                  <span className="hsn-hier-lbl">Heading (Live horses, asses, etc.)</span>
                </div>
                <div className="hsn-hier-arrow">↓</div>
                <div className="hsn-hier-node">
                  <span className="hsn-hier-code">0101.29.10</span>
                  <span className="hsn-hier-lbl">Detailed Code / Tariff Item (Horses for polo)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About GST Rates Notice */}
        <div className="hsn-rate-disclaimer">
          <strong>About GST Rates:</strong> HSN classification and GST rates may change through subsequent notifications and amendments. This indexed directory does not independently establish the applicable GST rate. Refer to the complete HSN Code & Rate Repository and verify the current applicable rate before use.
        </div>

        {/* Official Reference Section */}
        <section className="hsn-official-ref-box">
          <h3><ShieldCheck size={28} style={{ color: 'var(--brand-gold)' }} /> Need the Complete HSN Code or GST Rate?</h3>
          <p>
            The local directory contains indexed HSN records. For the complete HSN classification and GST rate reference, use the provided HSN Code & Rate Repository.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://irkandassociates.com/GstHSNCodeWithRate.aspx" target="_blank" rel="noopener noreferrer" className="hsn-official-btn">
              View Complete HSN Code & Rate Database <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* Related Knowledge Base */}
        <div className="related-kb-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {relatedKnowledgeBase.map((item, idx) => (
              <Link key={idx} to={item.path} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center', transition: 'all 0.2s' }}>
                <span style={{ fontWeight: 500 }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedHSN && (
        <div className="hsn-modal-overlay" onClick={closeModal}>
          <div className="hsn-modal-content" onClick={e => e.stopPropagation()}>
            <div className="hsn-modal-header">
              <div className="hsn-modal-title">
                <h2>HSN {selectedHSN.hsnCode}</h2>
                <div className="hsn-modal-subtitle">Details</div>
              </div>
              <button className="hsn-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="hsn-modal-body">
              <div className="hsn-modal-row">
                <div className="hsn-modal-lbl">Description</div>
                <div className="hsn-modal-val" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--brand-gold)' }}>
                  {selectedHSN.description}
                </div>
              </div>
              
              {selectedHSN.chapter && (
                <div className="hsn-modal-row">
                  <div className="hsn-modal-lbl">Chapter</div>
                  <div className="hsn-modal-val">{selectedHSN.chapter}</div>
                </div>
              )}
              
              {selectedHSN.heading && (
                <div className="hsn-modal-row">
                  <div className="hsn-modal-lbl">Heading</div>
                  <div className="hsn-modal-val">{selectedHSN.heading}</div>
                </div>
              )}

              <div className="hsn-modal-row">
                <div className="hsn-modal-lbl">GST Rate</div>
                <div className="hsn-modal-val">
                  {selectedHSN.gstRate ? (
                    <span style={{ fontWeight: 600 }}>{selectedHSN.gstRate}</span>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)' }}>Rate available in complete repository</span>
                  )}
                </div>
              </div>

              <div className="hsn-modal-row">
                <div className="hsn-modal-lbl">Data Source</div>
                <div className="hsn-modal-val">{selectedHSN.source}</div>
              </div>
            </div>
            
            <div className="hsn-modal-footer">
              <a href={selectedHSN.sourceUrl} target="_blank" rel="noopener noreferrer" className="hsn-official-btn" style={{ width: '100%', textAlign: 'center' }}>
                View Complete HSN Code & Rate Database <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
