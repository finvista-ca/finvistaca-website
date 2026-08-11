import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Book,
  Scale,
  Building2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { companyLawCircularsData, type CompanyLawCircular, relatedActs } from '../../data/companyLawCircularsData';
import './CompanyLawCirculars.css';

const CIRCULARS_PER_PAGE = 20;

export const CompanyLawCirculars: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All Years');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [actFilter, setActFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCircularId, setSelectedCircularId] = useState<string | null>(searchParams.get('circular'));
  
  const directoryRef = useRef<HTMLDivElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Sync selectedCircularId with URL
  useEffect(() => {
    const circularParam = searchParams.get('circular');
    if (circularParam !== selectedCircularId) {
      setSelectedCircularId(circularParam);
    }
  }, [searchParams]);

  const openCircular = (id: string) => {
    setSelectedCircularId(id);
    setSearchParams({ circular: id });
  };

  const closeCircular = () => {
    setSelectedCircularId(null);
    setSearchParams({});
  };

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(companyLawCircularsData.map(c => c.year)));
    return years.sort((a, b) => b - a);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(companyLawCircularsData.map(c => c.category)));
    return cats.sort();
  }, []);

  const applicableLaws = useMemo(() => {
    const laws = Array.from(new Set(companyLawCircularsData.map(c => c.applicableLaw).filter(Boolean))) as string[];
    return laws.sort();
  }, []);

  const statuses = useMemo(() => {
    const s = Array.from(new Set(companyLawCircularsData.map(c => c.status).filter(Boolean))) as string[];
    return s.sort();
  }, []);

  // Filter Circulars
  const filteredCirculars = useMemo(() => {
    let result = companyLawCircularsData;

    // Search
    if (debouncedQuery) {
      const query = debouncedQuery.toLowerCase();
      result = result.filter(circular => {
        return (
          circular.circularNumber.toLowerCase().includes(query) ||
          circular.title.toLowerCase().includes(query) ||
          circular.category.toLowerCase().includes(query) ||
          (circular.sections && circular.sections.some(s => s.toLowerCase().includes(query))) ||
          circular.summary.toLowerCase().includes(query) ||
          (circular.applicableLaw && circular.applicableLaw.toLowerCase().includes(query))
        );
      });

      // Sort by exact number match
      result = [...result].sort((a, b) => {
        const aNumMatch = a.circularNumber.toLowerCase() === query;
        const bNumMatch = b.circularNumber.toLowerCase() === query;
        if (aNumMatch && !bNumMatch) return -1;
        if (!aNumMatch && bNumMatch) return 1;
        
        const aContains = a.circularNumber.toLowerCase().includes(query);
        const bContains = b.circularNumber.toLowerCase().includes(query);
        if (aContains && !bContains) return -1;
        if (!aContains && bContains) return 1;

        return 0;
      });
    } else {
      // Default sort by date descending
      result = [...result].sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB.getTime() - dateA.getTime();
      });
    }

    if (yearFilter !== 'All Years') {
      result = result.filter(c => c.year.toString() === yearFilter);
    }
    
    if (categoryFilter !== 'All') {
      result = result.filter(c => c.category === categoryFilter);
    }
    
    if (actFilter !== 'All') {
      result = result.filter(c => c.applicableLaw === actFilter);
    }

    if (statusFilter !== 'All') {
      result = result.filter(c => c.status === statusFilter);
    }

    return result;
  }, [debouncedQuery, yearFilter, categoryFilter, actFilter, statusFilter]);

  const featuredCirculars = useMemo(() => {
    return [...companyLawCircularsData]
      .sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 3);
  }, []);

  const selectedCircular = useMemo(() => {
    return companyLawCircularsData.find(c => c.id === selectedCircularId) || null;
  }, [selectedCircularId]);

  // Pagination
  const totalPages = Math.ceil(filteredCirculars.length / CIRCULARS_PER_PAGE);
  const paginatedCirculars = filteredCirculars.slice(
    (currentPage - 1) * CIRCULARS_PER_PAGE,
    currentPage * CIRCULARS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (directoryRef.current) {
      const y = directoryRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setYearFilter('All Years');
    setCategoryFilter('All');
    setActFilter('All');
    setStatusFilter('All');
    setCurrentPage(1);
  };

  return (
    <div className="company-law-circulars-page">
      <InternalPageHero 
        title="Company Law Circulars"
        description="Browse important MCA circulars, clarifications and regulatory updates relating to corporate compliance and company law."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Company Law Circulars' }
        ]}
      />

      <div className="container" style={{ marginTop: '0' }}>
        {/* AT A GLANCE */}
        <KnowledgeBaseHeader
          infoTitle="Important MCA circulars, clarifications and regulatory updates relating to corporate compliance and company law."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Circulars Indexed', value: companyLawCircularsData.length },
            { label: 'Issuing Authority', value: 'MCA' },
            { label: 'Primary Act', value: 'Companies Act, 2013' },
            { label: 'Directory', value: 'Searchable & Verified' }
          ]}
          statCards={[
            { value: 'MCA', label: 'Issuing Authority' },
            { value: companyLawCircularsData.length, label: 'Circulars Indexed' },
            { value: 'Searchable', label: 'Circular Directory' },
            { value: 'Verified', label: 'Primary Source' }
          ]}
        />

      {/* FEATURED CIRCULARS */}
      {featuredCirculars.length > 0 && (
        <div className="featured-circulars-section" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-gold)', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
            Featured Circulars
          </h2>
          <div className="circulars-directory-grid">
            {featuredCirculars.map((circular) => (
              <div key={`feat-${circular.id}`} className="circular-card" onClick={() => openCircular(circular.id)}>
                <div className="circular-header">
                  <div className="circular-number">Circular No. {circular.circularNumber}</div>
                  <div className="circular-date">{circular.date}</div>
                </div>
                <div className="circular-title">{circular.title}</div>
                <div className="circular-tags">
                  <span className="circular-tag">{circular.category}</span>
                  {circular.applicableLaw && <span className="circular-tag act">{circular.applicableLaw}</span>}
                </div>
                <div className="circular-summary">{circular.summary}</div>
                <div className="circular-card-footer">
                  <span className="circular-source">{circular.source}</span>
                  <span className="circular-view-link">View Circular <ChevronRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN DIRECTORY */}
      <div ref={directoryRef} className="circulars-directory-section">
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>MCA Circular Directory</h2>
        
        {/* Search and Filters */}
        <div className="circular-search-filter-container">
          <div className="circular-search-wrapper">
            <Search className="circular-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search circular number, topic, section or keyword... (e.g. 09/2024, AGM)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="circular-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => { setSearchQuery(''); setCurrentPage(1); }} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          
          <div className="circular-filters-row">
            <div className="filter-group">
              <select 
                value={yearFilter} 
                onChange={(e) => { setYearFilter(e.target.value); setCurrentPage(1); }}
                className="circular-filter-select"
              >
                <option value="All Years">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <select 
                value={categoryFilter} 
                onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                className="circular-filter-select"
              >
                <option value="All">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            {applicableLaws.length > 0 && (
              <div className="filter-group">
                <select 
                  value={actFilter} 
                  onChange={(e) => { setActFilter(e.target.value); setCurrentPage(1); }}
                  className="circular-filter-select"
                >
                  <option value="All">All Applicable Laws</option>
                  {applicableLaws.map(law => (
                    <option key={law} value={law}>{law}</option>
                  ))}
                </select>
              </div>
            )}

            {statuses.length > 0 && (
              <div className="filter-group">
                <select 
                  value={statusFilter} 
                  onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                  className="circular-filter-select"
                >
                  <option value="All">All Statuses</option>
                  {statuses.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Circulars List */}
        {paginatedCirculars.length > 0 ? (
          <>
            <div className="circulars-directory-grid">
              {paginatedCirculars.map((circular) => (
                <div key={circular.id} className="circular-card" onClick={() => openCircular(circular.id)}>
                  <div className="circular-header">
                    <div className="circular-number">Circular No. {circular.circularNumber}</div>
                    <div className="circular-date">{circular.date}</div>
                  </div>
                  <div className="circular-title">{circular.title}</div>
                  <div className="circular-tags">
                    <span className="circular-tag">{circular.category}</span>
                    {circular.applicableLaw && <span className="circular-tag act">{circular.applicableLaw}</span>}
                  </div>
                  <div className="circular-summary">{circular.summary}</div>
                  <div className="circular-card-footer">
                    <span className="circular-source">{circular.source}</span>
                    <span className="circular-view-link">View Circular <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="circular-pagination">
                <div className="pagination-info">
                  Showing {(currentPage - 1) * CIRCULARS_PER_PAGE + 1} - {Math.min(currentPage * CIRCULARS_PER_PAGE, filteredCirculars.length)} of {filteredCirculars.length} circulars
                </div>
                <div className="pagination-controls">
                  <button 
                    className="page-btn" 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || Math.abs(currentPage - p) <= 1)
                    .map((page, idx, arr) => (
                      <React.Fragment key={page}>
                        {idx > 0 && arr[idx - 1] !== page - 1 && <span style={{ color: 'var(--text-muted)', alignSelf: 'center' }}>...</span>}
                        <button 
                          className={`page-btn ${currentPage === page ? 'active' : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                  ))}
                  <button 
                    className="page-btn" 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-results-state" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <FileText size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1.5rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>No circulars found</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Try another circular number, keyword, year or category.</p>
            <button 
              onClick={clearFilters}
              style={{ padding: '0.75rem 1.5rem', background: 'var(--brand-gold)', color: 'var(--primary-color)', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="official-reference-card" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid rgba(201, 160, 80, 0.3)', borderRadius: '12px', borderLeft: '4px solid var(--brand-gold)' }}>
        <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Book size={24} color="var(--brand-gold)" /> Official MCA Circulars
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Corporate law and compliance requirements are subject to amendments, notifications, circulars and other regulatory updates. Verify the applicable and current position from the official MCA source before relying on any circular.
        </p>
        <a 
          href="https://www.mca.gov.in/content/mca/global/en/data-and-reports/notifications-and-circulars/general-circulars.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="circular-official-btn"
          style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 500 }}
        >
          View Official MCA Circulars <ExternalLink size={16} />
        </a>
      </div>

      {/* RELATED KNOWLEDGE BASE */}
      <div className="related-kb-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
        <div className="circulars-overview-grid">
          {relatedActs.map((item, idx) => (
            <Link key={idx} to={item.path} className="circulars-stat-card" style={{ textDecoration: 'none', minHeight: 'auto', padding: '1rem' }}>
              <span style={{ color: 'white', fontWeight: 500 }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedCircular && (
        <div className="circular-modal-overlay" onClick={closeCircular}>
          <div className="circular-modal-content" onClick={e => e.stopPropagation()}>
            <div className="circular-modal-header">
              <div>
                <h2>Circular No. {selectedCircular.circularNumber}</h2>
                <div style={{ color: 'var(--text-muted)' }}>{selectedCircular.date}</div>
              </div>
              <button className="circular-modal-close" onClick={closeCircular}>
                <X size={24} />
              </button>
            </div>
            
            <div className="circular-modal-body">
              <h3 style={{ fontSize: '1.3rem', lineHeight: 1.5, marginBottom: '2rem', color: 'white' }}>
                {selectedCircular.title}
              </h3>
              
              <div className="circular-modal-meta-grid">
                <div className="circular-modal-meta-item">
                  <span className="circular-modal-meta-label">Issuing Authority</span>
                  <span className="circular-modal-meta-value">{selectedCircular.source}</span>
                </div>
                <div className="circular-modal-meta-item">
                  <span className="circular-modal-meta-label">Category</span>
                  <span className="circular-modal-meta-value">{selectedCircular.category}</span>
                </div>
                {selectedCircular.applicableLaw && (
                  <div className="circular-modal-meta-item">
                    <span className="circular-modal-meta-label">Applicable Law</span>
                    <span className="circular-modal-meta-value">{selectedCircular.applicableLaw}</span>
                  </div>
                )}
                {selectedCircular.status && (
                  <div className="circular-modal-meta-item">
                    <span className="circular-modal-meta-label">Status</span>
                    <span className="circular-modal-meta-value" style={{ 
                      color: selectedCircular.status === 'Active' ? 'var(--success-green)' : 'var(--brand-gold)' 
                    }}>
                      {selectedCircular.status}
                    </span>
                  </div>
                )}
                {selectedCircular.sections && selectedCircular.sections.length > 0 && (
                  <div className="circular-modal-meta-item">
                    <span className="circular-modal-meta-label">Related Sections</span>
                    <span className="circular-modal-meta-value">{selectedCircular.sections.join(', ')}</span>
                  </div>
                )}
              </div>
              
              <div className="circular-modal-summary">
                <h3>Summary</h3>
                <p>{selectedCircular.summary}</p>
              </div>
              
            </div>
            
            <div className="circular-modal-footer">
              <a 
                href={selectedCircular.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="circular-official-btn"
              >
                View Official Circular <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
