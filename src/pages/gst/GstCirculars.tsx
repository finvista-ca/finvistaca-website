import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gstCircularsData, type GSTCircular } from '../../data/gstCircularsData';
import { Search, Book } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstCirculars.css';

const NOTIFICATIONS_PER_PAGE = 20;

export const GstCirculars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCirc, setSelectedCirc] = useState<GSTCircular | null>(null);

  // Extract unique values for filters
  const years = useMemo(() => {
    const yrSet = new Set(gstCircularsData.map(n => n.year.toString()));
    return ['All', ...Array.from(yrSet).sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const categories = useMemo(() => {
    const catSet = new Set(gstCircularsData.map(n => n.category || 'Other CGST'));
    return ['All', ...Array.from(catSet).sort()];
  }, []);

  const statuses = useMemo(() => {
    const statusSet = new Set(gstCircularsData.map(n => n.status).filter(Boolean) as string[]);
    return ['All', ...Array.from(statusSet).sort()];
  }, []);

  // Filter logic
  const filteredData = useMemo(() => {
    return gstCircularsData.filter(circ => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        circ.circularNumber.toLowerCase().includes(q) ||
        circ.title.toLowerCase().includes(q) ||
        (circ.category || '').toLowerCase().includes(q) ||
        circ.year.toString().includes(q) ||
        (circ.summary || '').toLowerCase().includes(q);

      const matchesYear = selectedYear === 'All' || circ.year.toString() === selectedYear;
      const matchesCategory = selectedCategory === 'All' || (circ.category || 'Other CGST') === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || circ.status === selectedStatus;

      return matchesSearch && matchesYear && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus]);

  // Sort: Exact match for search query first, then by year descending
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data.sort((a, b) => {
        const aExact = a.circularNumber.toLowerCase() === q ? 1 : 0;
        const bExact = b.circularNumber.toLowerCase() === q ? 1 : 0;
        if (aExact !== bExact) return bExact - aExact;
        return b.year - a.year;
      });
    } else {
      data.sort((a, b) => b.year - a.year);
    }
    return data;
  }, [filteredData, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / NOTIFICATIONS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * NOTIFICATIONS_PER_PAGE;
    return sortedData.slice(start, start + NOTIFICATIONS_PER_PAGE);
  }, [sortedData, currentPage]);

  // Recent circulars (top 3 by year)
  const recentCirculars = useMemo(() => {
    return [...gstCircularsData].sort((a, b) => b.year - a.year).slice(0, 3);
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('directory')?.offsetTop ? document.getElementById('directory')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  const openModal = (circ: GSTCircular) => {
    setSelectedCirc(circ);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCirc(null);
    document.body.style.overflow = 'auto';
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus]);

  return (
    <div className="gst-circs-page-wrapper">
      
      <InternalPageHero 
        title="CGST Tax Circulars"
        description="Explore the official directory of Central Goods and Services Tax (CGST) circulars issued by the GST Council."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST Circulars' }
        ]}
      />
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore the official directory of Central Goods and Services Tax (CGST) circulars issued by the GST Council."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Circulars Indexed', value: gstCircularsData.length },
            { label: 'Framework', value: 'CGST' },
            { label: 'Directory', value: 'Searchable' },
            { label: 'Regulatory Authority', value: 'GST Council / MoF' }
          ]}
          statCards={[
            { value: gstCircularsData.length, label: 'Circulars Indexed' },
            { value: 'CGST', label: 'Framework' },
            { value: 'Searchable', label: 'Circulars Directory' },
            { value: 'MoF', label: 'Regulatory Authority' }
          ]}
        />
      </div>

      {/* Recent GST Circulars */}
      <section className="gst-recent-section">
        <h2>Recent GST Circulars</h2>
        <div className="gst-recent-grid">
          {recentCirculars.map(circ => (
            <div key={circ.id} className="gst-recent-card" onClick={() => openModal(circ)}>
              <div className="gst-recent-number">{circ.circularNumber}</div>
              <div className="gst-recent-title">{circ.title}</div>
              <div className="gst-recent-meta">
                <span className="gst-recent-cat">{circ.category || 'Other CGST'}</span>
                <span className="gst-recent-year">{circ.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find A GST Circular (Intent Helper) */}
      <section className="gst-finder-section">
        <div className="gst-finder-header">
          <h2>Find a GST Circular</h2>
          <p>Select a common topic to filter the directory.</p>
        </div>
        <div className="gst-intent-wrapper">
          {categories.filter(c => c !== 'All' && c !== 'Other CGST').map(cat => (
            <button
              key={cat}
              className={`gst-intent-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat === selectedCategory ? 'All' : cat)}
            >
              {cat}
            </button>
          ))}
          <button
            className={`gst-intent-btn ${selectedCategory === 'Other CGST' ? 'active' : ''}`}
            onClick={() => setSelectedCategory(selectedCategory === 'Other CGST' ? 'All' : 'Other CGST')}
          >
            Other CGST
          </button>
        </div>
      </section>

      {/* Search & Directory */}
      <section className="gst-directory-section" id="directory">
        <div className="gst-controls">
          <div className="gst-search-wrapper">
            <Search className="gst-search-icon" size={20} />
            <input
              type="text"
              className="gst-search-input"
              placeholder="Search circular number, subject or GST topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="gst-filters">
            <select
              className="gst-filter-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              {years.filter(y => y !== 'All').map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              className="gst-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {statuses.length > 1 && (
              <select
                className="gst-filter-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                {statuses.filter(s => s !== 'All').map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="gst-grid">
          {currentData.length > 0 ? (
            currentData.map(circ => (
              <div 
                key={circ.id} 
                className={`gst-card ${circ.status === 'Superseded' || circ.status === 'Historical' ? 'omitted-card' : ''}`}
                onClick={() => openModal(circ)}
              >
                <div className="gst-card-header">
                  <span className="gst-number">{circ.circularNumber}</span>
                  {circ.status && (
                    <span className={`gst-status-badge ${circ.status.toLowerCase()}`}>
                      {circ.status}
                    </span>
                  )}
                </div>
                <div className="gst-card-title">{circ.title}</div>
                <div className="gst-card-footer">
                  <span className="gst-card-cat">{circ.category || 'Other CGST'} • {circ.year}</span>
                  <span className="gst-view-btn">View Details &rarr;</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: 'var(--text-muted)', padding: '2rem 0' }}>No circulars found matching your criteria.</div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="gst-pagination">
            <button
              className="gst-page-btn"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &larr; Prev
            </button>
            <span className="gst-page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="gst-page-btn"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </section>

      {/* Clarification Sections */}
      <section className="gst-clarification-section">
        <div className="gst-clarification-grid">
          <div className="gst-clarification-card">
            <h3>GST Circulars vs GST Notifications</h3>
            <div className="gst-clarification-box">
              <h4>GST Circulars</h4>
              <p>Departmental clarifications or instructions issued by the CBIC to its officers to ensure uniformity in the implementation of the GST law. They are binding on the officers but not strictly binding on taxpayers or courts.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>GST Notifications</h4>
              <p>Formal government notifications that give effect to provisions under GST law (e.g., prescribing forms, rules, rates, or exemptions). These are delegated legislation and have the force of law.</p>
            </div>
          </div>
          <div className="gst-clarification-card">
            <h3>CGST vs SGST Circulars</h3>
            <div className="gst-clarification-box">
              <h4>CGST Circulars</h4>
              <p>The directory on this page, which includes clarifications issued under the Central Goods and Services Tax framework by the CBIC.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>SGST Circulars</h4>
              <p>State-specific circulars issued by the respective State Commercial Tax Departments. While normally mirroring CGST circulars, they may have specific procedural instructions for state officers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Ref Box */}
      <div className="gst-official-ref-box">
        <h3>Official GST Circular Reference</h3>
        <p>GST circulars may be amended, superseded, or withdrawn by subsequent circulars. Always verify the current applicability and complete circular text using the official GST Council source.</p>
        <a href="https://gstcouncil.gov.in/cgst-circulars" target="_blank" rel="noreferrer" className="gst-official-btn">
          View Official GST Circulars Database &rarr;
        </a>
      </div>

      {/* Related Knowledge Base */}
      <div className="gst-important-section" style={{ marginBottom: '4rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related GST Knowledge Base</h2>
        <div className="gst-intent-wrapper">
          <Link to="/gst/gst-acts" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Acts</Link>
          <Link to="/gst/gst-rules" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Rules</Link>
          <Link to="/gst/gst-circulars" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Circulars</Link>
          <Link to="/gst/gst-forms" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Forms</Link>
          <Link to="/gst/gst-sac-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST SAC Codes</Link>
          <Link to="/gst/gst-hsn-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST HSN Codes</Link>
        </div>
      </div>

      {/* Modal */}
      {selectedCirc && (
        <div className="gst-modal-overlay" onClick={closeModal}>
          <div 
            className={`gst-modal-content ${(selectedCirc.status === 'Superseded' || selectedCirc.status === 'Historical') ? 'omitted-modal' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="gst-modal-header">
              <div className="gst-modal-title">
                <h2>{selectedCirc.circularNumber}</h2>
                <div className="gst-modal-subtitle">{selectedCirc.category || 'Other CGST'}</div>
              </div>
              <button className="gst-modal-close" onClick={closeModal}>&times;</button>
            </div>
            
            <div className="gst-modal-body">
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Subject</div>
                <div className="gst-modal-val">{selectedCirc.title}</div>
              </div>
              
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Date / Year</div>
                <div className="gst-modal-val">{selectedCirc.date || selectedCirc.year}</div>
              </div>

              {selectedCirc.applicableLaw && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Applicable Law</div>
                  <div className="gst-modal-val">{selectedCirc.applicableLaw}</div>
                </div>
              )}

              {selectedCirc.sections && selectedCirc.sections.length > 0 && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Relevant Sections</div>
                  <div className="gst-modal-val">{selectedCirc.sections.join(', ')}</div>
                </div>
              )}

              {selectedCirc.summary && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Summary</div>
                  <div className="gst-modal-val">{selectedCirc.summary}</div>
                </div>
              )}

              {selectedCirc.status && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Status</div>
                  <div className="gst-modal-val">
                    <span className={`gst-status-badge ${selectedCirc.status.toLowerCase()}`}>
                      {selectedCirc.status}
                    </span>
                  </div>
                </div>
              )}

              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Source</div>
                <div className="gst-modal-val">{selectedCirc.source}</div>
              </div>
            </div>

            <div className="gst-modal-footer">
              {selectedCirc.englishUrl && (
                <a href={selectedCirc.englishUrl} target="_blank" rel="noreferrer" className="gst-doc-btn">
                  View English Circular &rarr;
                </a>
              )}
              {selectedCirc.hindiUrl && (
                <a href={selectedCirc.hindiUrl} target="_blank" rel="noreferrer" className="gst-doc-btn hindi">
                  View Hindi Circular &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
