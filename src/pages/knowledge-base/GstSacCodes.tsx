import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gstSacCodesData, type SACCode, relatedKnowledgeBase } from '../../data/gstSacCodesData';
import { Search, X, ChevronRight, ExternalLink, ShieldCheck, AlertCircle, Info, Database } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstSacCodes.css';

const RECORDS_PER_PAGE = 50;

export const GstSacCodes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSAC, setSelectedSAC] = useState<SACCode | null>(null);

  // Extract unique categories for filter dropdown
  const categories = useMemo(() => {
    const catSet = new Set(gstSacCodesData.map(f => f.category).filter(Boolean) as string[]);
    return ['All', ...Array.from(catSet).sort()];
  }, []);

  const normalizeString = (str: string) => {
    return str.toLowerCase().replace(/[\.\s]/g, '');
  };

  // Filter and sort logic
  const filteredAndSortedData = useMemo(() => {
    let result = [...gstSacCodesData];
    
    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(r => r.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      const normalizedQuery = normalizeString(searchQuery);
      const rawQuery = searchQuery.toLowerCase();

      result = result.filter(r => {
        const normalizedCode = normalizeString(r.sacCode);
        const codeMatch = normalizedCode.includes(normalizedQuery);
        const descMatch = r.description.toLowerCase().includes(rawQuery);
        return codeMatch || descMatch;
      });

      // Sort with priority to exact code match
      result.sort((a, b) => {
        const aNormCode = normalizeString(a.sacCode);
        const bNormCode = normalizeString(b.sacCode);
        
        const aExact = aNormCode === normalizedQuery ? 1 : 0;
        const bExact = bNormCode === normalizedQuery ? 1 : 0;
        
        if (aExact !== bExact) return bExact - aExact; // exact matches first
        
        // then starts-with matches
        const aStartsWith = aNormCode.startsWith(normalizedQuery) ? 1 : 0;
        const bStartsWith = bNormCode.startsWith(normalizedQuery) ? 1 : 0;
        if (aStartsWith !== bStartsWith) return bStartsWith - aStartsWith;

        // else sort alphabetically by SAC code
        return a.sacCode.localeCompare(b.sacCode);
      });
    } else {
      // General sorting by SAC code
      result.sort((a, b) => {
        const aNormCode = normalizeString(a.sacCode);
        const bNormCode = normalizeString(b.sacCode);
        return aNormCode.localeCompare(bNormCode);
      });
    }

    return result;
  }, [searchQuery, selectedCategory]);

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
  }, [searchQuery, selectedCategory]);

  const openModal = (sac: SACCode) => {
    setSelectedSAC(sac);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSAC(null);
    document.body.style.overflow = 'auto';
  };

  const applyQuickSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('All');
  };

  return (
    <div className="gst-sac-page-wrapper">
      <InternalPageHero 
        title="GST SAC Codes"
        description="Search and explore Service Accounting Codes used for classification of services under GST."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST', path: '/knowledge-base/gst-acts' },
          { label: 'SAC Codes' }
        ]}
      />
      
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        
        {/* Partial Indexed Dataset Notice */}
        <div className="sac-notice-banner">
          <div className="sac-notice-content">
            <Info size={24} className="sac-notice-icon" />
            <div>
              <strong>Partial Indexed Dataset:</strong> This directory contains SAC records currently indexed within FinvistaCA. For the complete SAC classification and additional service codes, refer to the complete SAC Code Repository.
            </div>
          </div>
          <a href="https://irkandassociates.com/GstSACCode.aspx" target="_blank" rel="noopener noreferrer" className="sac-notice-btn">
            View Complete SAC Code Database &rarr;
          </a>
        </div>

        <KnowledgeBaseHeader
          infoTitle="Search and explore Service Accounting Codes used for classification of services under GST."
          infoIcon={<Database className="icon" size={24} />}
          infoGrid={[
            { label: 'SAC CODES INDEXED', value: gstSacCodesData.length },
            { label: 'SERVICE CATEGORIES', value: categories.length - 1 },
            { label: 'SEARCHABLE DIRECTORY', value: 'Indexed' },
            { label: 'RATE REFERENCE', value: 'SAC Code Repository' }
          ]}
          statCards={[
            { value: gstSacCodesData.length, label: 'SAC CODES INDEXED' },
            { value: categories.length - 1, label: 'SERVICE CATEGORIES' },
            { value: 'Indexed', label: 'SEARCHABLE DIRECTORY' },
            { value: 'External', label: 'RATE REFERENCE' }
          ]}
        />
      </div>

      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Find an SAC Code */}
        <section className="sac-finder-section">
          <div className="sac-finder-header">
            <h2>Find an SAC Code</h2>
            <p>Search by SAC code or service description...</p>
          </div>
          <div className="sac-search-wrapper">
            <Search size={22} className="sac-search-icon" />
            <input 
              type="text" 
              placeholder="Search by SAC code or service description (e.g. 9954, 9983, construction, transport)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sac-search-input"
            />
          </div>
          <div className="sac-quick-searches">
            <span className="sac-quick-label">Browse SAC Categories:</span>
            {categories.filter(c => c !== 'All').map(term => (
              <button key={term} className="sac-quick-btn" onClick={() => applyQuickSearch(term)}>
                {term}
              </button>
            ))}
          </div>
        </section>

        {/* Directory Section */}
        <section id="directory" className="sac-directory-section">
          <h2>SAC Code Directory</h2>
          
          <div className="sac-controls">
            <div className="sac-filters">
              <select 
                value={selectedCategory} 
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
                className="sac-filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="sac-table-container">
            {currentData.length > 0 ? (
              <table className="sac-table">
                <thead>
                  <tr>
                    <th>SAC CODE</th>
                    <th>SERVICE DESCRIPTION</th>
                    <th className="hide-mobile">CATEGORY / GROUP</th>
                    <th>GST RATE</th>
                    <th>REFERENCE</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map(sac => (
                    <tr key={sac.id} onClick={() => openModal(sac)} className="sac-table-row">
                      <td className="sac-code-col">
                        <span className="sac-code-badge">{sac.sacCode}</span>
                      </td>
                      <td className="sac-desc-col">{sac.description}</td>
                      <td className="sac-category-col hide-mobile">
                        {sac.group ? sac.group : (sac.category || '-')}
                      </td>
                      <td className="sac-rate-col">
                        {sac.gstRate ? (
                          <span className="sac-rate-value">{sac.gstRate}</span>
                        ) : (
                          <span className="sac-rate-placeholder">See repository</span>
                        )}
                      </td>
                      <td className="sac-ref-col">
                        <span className="sac-view-btn">View Details <ChevronRight size={14} /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="sac-empty-state">
                <AlertCircle size={40} className="sac-empty-icon" />
                <h3>No SAC codes found</h3>
                <p>We couldn't find any indexed SAC codes matching your search criteria.</p>
                <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  <a href="https://irkandassociates.com/GstSACCode.aspx" target="_blank" rel="noopener noreferrer" className="sac-official-btn">
                    Check Complete SAC Code Repository <ExternalLink size={16} />
                  </a>
                </div>
                <button className="sac-clear-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="sac-pagination">
              <button 
                className="sac-page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="sac-page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="sac-page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </section>

        {/* SAC vs HSN & Structure */}
        <section className="sac-educational-section">
          <div className="sac-edu-grid">
            <div className="sac-edu-card">
              <h3>SAC vs HSN</h3>
              <div className="sac-edu-box">
                <h4>SAC (Service Accounting Code)</h4>
                <p>Used for classification of services. Under GST, every type of service provided is mapped to a specific SAC code to determine the applicable tax rate.</p>
              </div>
              <div className="sac-edu-box">
                <h4>HSN (Harmonized System of Nomenclature)</h4>
                <p>Used for classification of physical goods. While services use SAC codes, goods are classified using internationally recognized HSN codes.</p>
              </div>
            </div>
            
            <div className="sac-edu-card">
              <h3>SAC Code Structure</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Service Accounting Codes typically follow a logical hierarchy, though the exact structure depends on the dataset provided.
              </p>
              
              <div className="sac-hierarchy-diagram">
                <div className="sac-hier-node">
                  <span className="sac-hier-lbl">Section</span>
                </div>
                <div className="sac-hier-arrow">↓</div>
                <div className="sac-hier-node">
                  <span className="sac-hier-lbl">Division</span>
                </div>
                <div className="sac-hier-arrow">↓</div>
                <div className="sac-hier-node">
                  <span className="sac-hier-lbl">Group</span>
                </div>
                <div className="sac-hier-arrow">↓</div>
                <div className="sac-hier-node">
                  <span className="sac-hier-code">SAC Code</span>
                  <span className="sac-hier-lbl">Service Description</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About GST Rates Notice */}
        <div className="sac-rate-disclaimer">
          <strong>About GST Rates:</strong> This directory does not independently establish the applicable GST rate. Refer to the SAC Code Repository for additional rate information and verify the current applicable rate.
        </div>

        {/* Official Reference Section */}
        <section className="sac-official-ref-box">
          <h3><ShieldCheck size={28} style={{ color: 'var(--brand-gold)' }} /> Need the Complete SAC Code Details?</h3>
          <p>
            Use the SAC Code Repository for the complete service classification reference.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://irkandassociates.com/GstSACCode.aspx" target="_blank" rel="noopener noreferrer" className="sac-official-btn">
              View Complete SAC Code Database <ExternalLink size={18} />
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
      {selectedSAC && (
        <div className="sac-modal-overlay" onClick={closeModal}>
          <div className="sac-modal-content" onClick={e => e.stopPropagation()}>
            <div className="sac-modal-header">
              <div className="sac-modal-title">
                <h2>SAC {selectedSAC.sacCode}</h2>
                <div className="sac-modal-subtitle">Details</div>
              </div>
              <button className="sac-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="sac-modal-body">
              <div className="sac-modal-row">
                <div className="sac-modal-lbl">Service Description</div>
                <div className="sac-modal-val" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--brand-gold)' }}>
                  {selectedSAC.description}
                </div>
              </div>
              
              {selectedSAC.section && (
                <div className="sac-modal-row">
                  <div className="sac-modal-lbl">Section</div>
                  <div className="sac-modal-val">{selectedSAC.section}</div>
                </div>
              )}

              {selectedSAC.division && (
                <div className="sac-modal-row">
                  <div className="sac-modal-lbl">Division</div>
                  <div className="sac-modal-val">{selectedSAC.division}</div>
                </div>
              )}
              
              {selectedSAC.group && (
                <div className="sac-modal-row">
                  <div className="sac-modal-lbl">Group</div>
                  <div className="sac-modal-val">{selectedSAC.group}</div>
                </div>
              )}

              {selectedSAC.category && (
                <div className="sac-modal-row">
                  <div className="sac-modal-lbl">Category</div>
                  <div className="sac-modal-val">{selectedSAC.category}</div>
                </div>
              )}

              <div className="sac-modal-row">
                <div className="sac-modal-lbl">GST Rate</div>
                <div className="sac-modal-val">
                  {selectedSAC.gstRate ? (
                    <span style={{ fontWeight: 600 }}>{selectedSAC.gstRate}</span>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)' }}>Rate: Refer to SAC repository</span>
                  )}
                </div>
              </div>

              <div className="sac-modal-row">
                <div className="sac-modal-lbl">Data Source</div>
                <div className="sac-modal-val">{selectedSAC.source}</div>
              </div>
            </div>
            
            <div className="sac-modal-footer">
              <a href={selectedSAC.sourceUrl} target="_blank" rel="noopener noreferrer" className="sac-official-btn" style={{ width: '100%', textAlign: 'center' }}>
                View Complete SAC Code Database <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
