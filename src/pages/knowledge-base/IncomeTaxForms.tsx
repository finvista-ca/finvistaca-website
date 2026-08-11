import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  FileText, 
  ChevronRight,
  ExternalLink,
  Book,
  ChevronLeft
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { incomeTaxFormsData, type IncomeTaxForm, relatedKnowledgeBase } from '../../data/incomeTaxFormsData';
import './IncomeTaxForms.css';

const FORMS_PER_PAGE = 20;

export const IncomeTaxForms: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFramework, setSelectedFramework] = useState<string>('All');
  const [selectedIntent, setSelectedIntent] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);

  // Derived filters from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(incomeTaxFormsData.map(f => f.category)));
    return ['All', ...cats.sort()];
  }, []);

  const frameworks = useMemo(() => {
    const frames = Array.from(new Set(incomeTaxFormsData.map(f => f.applicableLaw)));
    return ['All', ...frames.sort().reverse()]; // To put 2025 before 1961 typically, or just sort alphabetically
  }, []);

  const intentOptions = [
    { label: 'File a TDS/TCS statement', category: 'TDS / TCS' },
    { label: 'Make a foreign remittance', category: 'Foreign Remittance' },
    { label: 'Submit a tax audit report', category: 'Tax Audit' },
    { label: 'Submit a declaration', category: 'Declarations' },
    { label: 'Obtain a certificate', category: 'Certificates' },
    { label: 'Charitable / religious institution compliance', category: 'Charitable / Religious Institutions' },
    { label: 'International taxation', category: 'International Taxation' },
    { label: 'PAN / TAN related requirement', category: 'PAN / TAN' }
  ];

  // Filtering Logic
  const filteredForms = useMemo(() => {
    let result = incomeTaxFormsData;

    if (selectedCategory !== 'All') {
      result = result.filter(f => f.category === selectedCategory);
    }

    if (selectedFramework !== 'All') {
      result = result.filter(f => f.applicableLaw === selectedFramework);
    }

    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(f => 
        f.formNumber.toLowerCase().includes(lower) ||
        f.title.toLowerCase().includes(lower) ||
        f.purpose.toLowerCase().includes(lower) ||
        (f.relevantSections && f.relevantSections.some(s => s.toLowerCase().includes(lower)))
      );
    }

    return result;
  }, [searchQuery, selectedCategory, selectedFramework]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredForms.length / FORMS_PER_PAGE);
  const paginatedForms = useMemo(() => {
    const start = (currentPage - 1) * FORMS_PER_PAGE;
    return filteredForms.slice(start, start + FORMS_PER_PAGE);
  }, [filteredForms, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const directoryElement = document.getElementById('form-directory-start');
      if (directoryElement) {
        directoryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedFramework]);

  // Handle Intent Selection
  const handleIntentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedIntent(val);
    if (val) {
      const intentObj = intentOptions.find(opt => opt.label === val);
      if (intentObj) {
        setSelectedCategory(intentObj.category);
      }
    } else {
      setSelectedCategory('All');
    }
  };

  const selectedForm = incomeTaxFormsData.find(f => f.id === selectedFormId);

  return (
    <div className="statutory-forms-page">
      <InternalPageHero 
        title="Income Tax Forms"
        description="Explore statutory income-tax forms, declarations, certificates and compliance filings for taxpayers, businesses and professionals."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income Tax Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0' }}>
        {/* AT A GLANCE */}
        <KnowledgeBaseHeader
          infoTitle="Explore statutory income-tax forms, declarations, certificates and compliance filings for taxpayers, businesses and professionals."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Forms Indexed', value: incomeTaxFormsData.length },
            { label: 'Issuing Authority', value: 'CBDT / Income Tax Dept' },
            { label: 'Directory', value: 'Searchable' },
            { label: 'Tax Frameworks', value: '1961 Act / 2025 Act' }
          ]}
          statCards={[
            { value: incomeTaxFormsData.length, label: 'Statutory Forms' },
            { value: 'CBDT', label: 'Issuing Authority' },
            { value: 'Searchable', label: 'Form Directory' },
            { value: '1961/2025', label: 'Tax Frameworks' }
          ]}
        />

      {/* ITR DISTINCTION */}
      <div className="itr-distinction">
        <div>
          <h3>Income Tax Forms vs ITR Forms</h3>
          <p>
            ITR Forms are used to file an income-tax return, while other statutory forms are used for specific declarations, certificates, reports, applications and compliance requirements.
          </p>
        </div>
        <Link to="/knowledge-base/income-tax-returns-forms" className="itr-link-btn">
          Explore Income Tax Return Forms &rarr;
        </Link>
      </div>

      {/* FIND A FORM HELPER */}
      <div className="intent-finder-container">
        <label className="intent-finder-label">Find a Form: What are you trying to do?</label>
        <select className="intent-select" value={selectedIntent} onChange={handleIntentChange}>
          <option value="">-- Select an objective --</option>
          {intentOptions.map(opt => (
            <option key={opt.label} value={opt.label}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div id="form-directory-start" style={{ scrollMarginTop: '2rem' }}></div>

      {/* DIRECTORY FILTERS */}
      <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>Income Tax Form Directory</h2>
      <div className="forms-controls">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            className="forms-search-input"
            placeholder="Search form number, name, purpose or section..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
              <X size={18} />
            </button>
          )}
        </div>
        <div className="filters-wrapper">
          <select 
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setSelectedIntent(''); }}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select 
            className="filter-select"
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
          >
            {frameworks.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      {/* DIRECTORY GRID */}
      {filteredForms.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>No statutory forms found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="forms-directory-grid">
            {paginatedForms.map(form => (
              <div key={form.id} className="statutory-form-card" onClick={() => setSelectedFormId(form.id)}>
                <div className={`form-framework-badge ${form.applicableLaw.includes('2025') ? 'framework-2025' : ''}`}>
                  {form.applicableLaw}
                </div>
                <div className="s-form-header">
                  <div className="s-form-number">{form.formNumber}</div>
                  <div className="s-form-category">{form.category}</div>
                </div>
                <div className="s-form-body">
                  <div className="s-form-title">{form.title}</div>
                  <div className="s-form-purpose">{form.purpose}</div>
                </div>
                <div className="s-form-footer">
                  <span className="view-details-link">View Form Details <ChevronRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="pagination-info">Showing {(currentPage - 1) * FORMS_PER_PAGE + 1}–{Math.min(currentPage * FORMS_PER_PAGE, filteredForms.length)} of {filteredForms.length} forms</span>
              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="official-reference-card" style={{ marginTop: '2rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid rgba(201, 160, 80, 0.3)', borderRadius: '12px', borderLeft: '4px solid var(--brand-gold)' }}>
        <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Book size={24} color="var(--brand-gold)" /> Official Income Tax Forms
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Statutory forms, filing requirements and applicable procedures may change with amendments, new rules and changes in the applicable tax framework. Always verify the current form and instructions from the official Income Tax Department.
        </p>
        <a 
          href="https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', background: 'var(--brand-blue)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }}
        >
          View Official Income Tax Forms <ExternalLink size={16} />
        </a>
      </div>

      {/* RELATED KNOWLEDGE BASE */}
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

      {/* FORM DETAIL MODAL */}
      {selectedForm && (
        <div className="s-form-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="s-form-modal-content" onClick={e => e.stopPropagation()}>
            <div className="s-form-modal-header">
              <div className="s-form-modal-title">
                <h2>{selectedForm.formNumber}</h2>
                <div className="modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="s-form-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="s-form-modal-body">
              <div className="modal-detail-row">
                <div className="modal-detail-label">Purpose</div>
                <div className="modal-detail-value">{selectedForm.purpose}</div>
              </div>
              
              <div className="modal-detail-row">
                <div className="modal-detail-label">Who Should Use It</div>
                <div className="modal-detail-value">
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {selectedForm.whoShouldUse.map((user, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{user}</li>)}
                  </ul>
                </div>
              </div>
              
              <div className="modal-detail-row">
                <div className="modal-detail-label">Applicable Law</div>
                <div className="modal-detail-value">
                  <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedForm.applicableLaw}</span>
                </div>
              </div>
              
              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="modal-detail-row">
                  <div className="modal-detail-label">Relevant Sections</div>
                  <div className="modal-detail-value">
                    {selectedForm.relevantSections.join(', ')}
                  </div>
                </div>
              )}
              
              <div className="modal-detail-row" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                <div className="modal-detail-label"></div>
                <div className="modal-detail-value" style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  Complete form and instructions are available at the official Income Tax Department source.
                </div>
              </div>
            </div>
            
            <div className="s-form-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Source: {selectedForm.source}</span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="official-btn"
              >
                View Official Form <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
  );
};
