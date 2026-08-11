import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  X,
  Search,
  ChevronRight,
  ExternalLink,
  Book,
  FileText
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { llpFormsData, type LLPForm, relatedKnowledgeBase } from '../../data/llpFormsData';
import './LlpForms.css';

const ITEMS_PER_PAGE = 20;

export const LlpForms: React.FC = () => {
  // Global Directory State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFramework, setSelectedFramework] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const directoryRef = useRef<HTMLDivElement>(null);

  // Intent Finder State
  const [finderIntent, setFinderIntent] = useState<string | null>(null);

  // Derive unique values for filters
  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(llpFormsData.map(f => f.category)));
    return ['All', ...cats.sort()];
  }, []);

  const allFrameworks = useMemo(() => {
    const frames = Array.from(new Set(llpFormsData.map(f => f.applicableLaw)));
    return ['All', ...frames.sort()];
  }, []);

  const allStatuses = useMemo(() => {
    const stats = Array.from(new Set(llpFormsData.map(f => f.status)));
    return ['All', ...stats.sort()];
  }, []);

  // Intent Options mapping (derived from verified categories)
  const intentMapping: Record<string, string> = {
    'Incorporate an LLP': 'Incorporation',
    'Modify LLP Agreement': 'LLP Agreement',
    'Add or change a partner': 'Partner / Designated Partner Changes',
    'Add or change a designated partner': 'Partner / Designated Partner Changes',
    'Change LLP name': 'Name Changes',
    'File Statement of Account & Solvency': 'Annual Compliance',
    'File Annual Return': 'Annual Compliance'
  };

  const intentOptions = Object.keys(intentMapping);

  // Finder Output Logic
  const finderMatches = useMemo(() => {
    if (!finderIntent) return null;
    const targetCategory = intentMapping[finderIntent];
    
    // Additional exact matching logic for overlapping categories
    return llpFormsData.filter(f => {
      if (f.category !== targetCategory) return false;
      
      // Fine-grained matching based on specific intents within the same category
      if (finderIntent === 'File Statement of Account & Solvency' && f.formNumber !== 'Form 8') return false;
      if (finderIntent === 'File Annual Return' && f.formNumber !== 'Form 11') return false;
      if (finderIntent === 'Add or change a partner' && !f.purpose.toLowerCase().includes('partner')) return false;
      
      return true;
    });
  }, [finderIntent]);

  // Main Directory Filter Logic
  const filteredForms = useMemo(() => {
    let result = llpFormsData;

    if (selectedCategory !== 'All') {
      result = result.filter(f => f.category === selectedCategory);
    }

    if (selectedFramework !== 'All') {
      result = result.filter(f => f.applicableLaw === selectedFramework);
    }

    if (selectedStatus !== 'All') {
      result = result.filter(f => f.status === selectedStatus);
    }

    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      // Prioritize exact form number
      result = result.sort((a, b) => {
        const aExact = a.formNumber.toLowerCase() === lower ? -1 : 0;
        const bExact = b.formNumber.toLowerCase() === lower ? -1 : 0;
        return aExact - bExact;
      });

      result = result.filter(f => 
        f.formNumber.toLowerCase().includes(lower) ||
        f.title.toLowerCase().includes(lower) ||
        f.purpose.toLowerCase().includes(lower) ||
        f.category.toLowerCase().includes(lower) ||
        f.applicableLaw.toLowerCase().includes(lower) ||
        (f.triggerEvent && f.triggerEvent.toLowerCase().includes(lower)) ||
        (f.relevantSections && f.relevantSections.some(s => s.toLowerCase().includes(lower))) ||
        (f.applicableRules && f.applicableRules.some(r => r.toLowerCase().includes(lower)))
      );
    }

    return result;
  }, [searchQuery, selectedCategory, selectedFramework, selectedStatus]);

  // Dynamic Compliance Areas based on dataset
  const hasIncorporation = llpFormsData.some(f => f.category === 'Incorporation');
  const hasAgreement = llpFormsData.some(f => f.category === 'LLP Agreement' || f.category === 'Partner / Designated Partner Changes');
  const hasAnnual = llpFormsData.some(f => f.category === 'Annual Compliance');

  // Pagination Logic
  const totalPages = Math.ceil(filteredForms.length / ITEMS_PER_PAGE);
  const paginatedForms = filteredForms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (directoryRef.current) {
      directoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset pagination on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedFramework, selectedStatus]);

  // Selected Detail
  const selectedForm = llpFormsData.find(f => f.id === selectedFormId);

  return (
    <div className="llp-forms-page-wrapper">
      <InternalPageHero 
        title="Limited Liability Partnership Forms"
        description="Explore official forms and filing references for Limited Liability Partnership incorporation, annual compliance, agreements, partner changes and other LLP requirements."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'LLP Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore official forms and filing references for Limited Liability Partnership incorporation, annual compliance, agreements, partner changes and other LLP requirements."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'LLP Forms Indexed', value: llpFormsData.length },
            { label: 'Entity Type', value: 'Limited Liability Partnership' },
            { label: 'Legal Framework', value: 'LLP Act, 2008' },
            { label: 'Regulatory Authority', value: 'MCA / ROC' }
          ]}
          statCards={[
            { value: llpFormsData.length, label: 'LLP Forms Indexed' },
            { value: 'LLP', label: 'Entity Type' },
            { value: 'LLP Act', label: 'Legal Framework' },
            { value: 'MCA / ROC', label: 'Regulatory Authority' }
          ]}
        />
      </div>

      {/* SECTION 1: FIND YOUR LLP FORM */}
      <div className="llp-finder-section">
        <div className="llp-finder-header">
          <h2>Find Your LLP Form</h2>
          <p>Select what you need to do and find the relevant LLP form.</p>
        </div>

        <div className="llp-finder-step">
          <div className="llp-step-label">What are you trying to do?</div>
          <div className="llp-intent-wrapper">
            {intentOptions.map(intent => (
              <button 
                key={intent}
                className={`llp-intent-btn ${finderIntent === intent ? 'active' : ''}`}
                onClick={() => setFinderIntent(intent)}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Finder Results */}
        {finderIntent && (
          <div className="llp-finder-results">
            {finderMatches && finderMatches.length > 0 ? (
              <div>
                <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  {finderMatches.length > 1 ? 'Possible LLP Forms:' : 'Recommended LLP Form:'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {finderMatches.map(match => (
                    <div 
                      key={match.id} 
                      style={{ 
                        background: 'var(--primary-color)', 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        border: '1px solid var(--brand-blue)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedFormId(match.id)}
                    >
                      <div style={{ color: 'var(--brand-blue)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{match.formNumber}</div>
                      <div style={{ color: 'white', fontSize: '0.9rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{match.title}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>View Details &rarr;</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                No verified LLP form currently matches this requirement.
              </div>
            )}
          </div>
        )}
      </div>

      {/* SECTION 2: DIRECTORY */}
      <div className="llp-directory-section" ref={directoryRef}>
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>LLP Form Directory</h2>
        
        <div className="llp-controls">
          <div className="llp-search-wrapper">
            <Search className="llp-search-icon" size={20} />
            <input 
              type="text" 
              className="llp-search-input"
              placeholder="Search LLP form number, title, compliance requirement or section..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          <div className="llp-filters">
            <select className="llp-filter-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {allCategories.map(c => <option key={c} value={c}>{c === 'All' ? 'Category (All)' : c}</option>)}
            </select>
            <select className="llp-filter-select" value={selectedFramework} onChange={(e) => setSelectedFramework(e.target.value)}>
              {allFrameworks.map(f => <option key={f} value={f}>{f === 'All' ? 'Applicable Law (All)' : f}</option>)}
            </select>
            <select className="llp-filter-select" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              {allStatuses.map(s => <option key={s} value={s}>{s === 'All' ? 'Status (All)' : s}</option>)}
            </select>
          </div>
        </div>

        {paginatedForms.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No verified LLP forms currently match this requirement.</p>
          </div>
        ) : (
          <>
            <div className="llp-grid">
              {paginatedForms.map(form => (
                <div key={form.id} className="llp-card" onClick={() => setSelectedFormId(form.id)}>
                  <div className="llp-card-header">
                    <div className="llp-number">{form.formNumber}</div>
                    <div className={`llp-status-badge ${form.status.toLowerCase()}`}>
                      {form.status}
                    </div>
                  </div>
                  <div className="llp-title">{form.title}</div>
                  <div className="llp-card-body">
                    <div className="llp-detail">
                      <div className="llp-detail-lbl">Law</div>
                      <div className="llp-detail-val" style={{ color: 'var(--brand-gold)' }}>{form.applicableLaw}</div>
                    </div>
                    <div className="llp-detail">
                      <div className="llp-detail-lbl">Category</div>
                      <div className="llp-detail-val">{form.category}</div>
                    </div>
                    <div className="llp-detail">
                      <div className="llp-detail-lbl">Purpose</div>
                      <div className="llp-detail-val" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{form.purpose}</div>
                    </div>
                  </div>
                  <div className="llp-card-footer">
                    <span className="llp-view-btn">View Form Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="llp-pagination">
                <button 
                  className="llp-page-btn" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="llp-page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  className="llp-page-btn" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* COMPLIANCE AREAS */}
      {(hasIncorporation || hasAgreement || hasAnnual) && (
        <div className="llp-compliance-section">
          <h2>LLP Compliance Areas</h2>
          <div className="llp-comp-areas-grid">
            
            {hasIncorporation && (
              <div className="llp-comp-area-card">
                <h3>LLP Incorporation</h3>
                <div className="llp-comp-area-forms">
                  {llpFormsData.filter(f => f.category === 'Incorporation').map(f => (
                    <div key={f.id} className="llp-comp-mini-card" onClick={() => setSelectedFormId(f.id)}>
                      <div className="llp-comp-mini-title">{f.formNumber}</div>
                      <div className="llp-comp-mini-purpose">{f.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasAgreement && (
              <div className="llp-comp-area-card">
                <h3>LLP Agreement & Partner Changes</h3>
                <div className="llp-comp-area-forms">
                  {llpFormsData.filter(f => f.category === 'LLP Agreement' || f.category === 'Partner / Designated Partner Changes').map(f => (
                    <div key={f.id} className="llp-comp-mini-card" onClick={() => setSelectedFormId(f.id)}>
                      <div className="llp-comp-mini-title">{f.formNumber}</div>
                      <div className="llp-comp-mini-purpose">{f.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasAnnual && (
              <div className="llp-comp-area-card">
                <h3>Annual LLP Compliance</h3>
                <div className="llp-comp-area-forms">
                  {llpFormsData.filter(f => f.category === 'Annual Compliance').map(f => (
                    <div key={f.id} className="llp-comp-mini-card" onClick={() => setSelectedFormId(f.id)}>
                      <div className="llp-comp-mini-title">{f.formNumber}</div>
                      <div className="llp-comp-mini-purpose">{f.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* LLP VS ROC */}
      <div className="llp-vs-roc-section">
        <h2>LLP Forms vs ROC Forms</h2>
        <p>
          While the Ministry of Corporate Affairs (MCA) administers both Companies and LLPs, their compliance ecosystems are strictly separated.
        </p>
        <div className="llp-comp-grid">
          <div className="llp-comp-card">
            <h3>LLP Forms</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
              Specialized directory focused exclusively on Limited Liability Partnership compliance under the LLP Act, 2008 and LLP Rules, 2009.
            </p>
          </div>
          <div className="llp-comp-card">
            <h3>ROC Forms</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
              Broader MCA/ROC directory covering general corporate filings, heavily featuring company-specific requirements under the Companies Act, 2013.
            </p>
            <Link to="/knowledge-base/roc-forms" style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginTop: '0.5rem', textDecoration: 'none' }}>
              View ROC Forms &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* LOOKING FOR SOMETHING ELSE? */}
      <div className="llp-nav-hub">
        <h2>Related Corporate Law References</h2>
        <div className="llp-nav-grid">
          <Link to="/knowledge-base/llp-act" className="llp-nav-pill">LLP Act</Link>
          <Link to="/knowledge-base/llp-rules" className="llp-nav-pill">LLP Rules</Link>
          <Link to="/knowledge-base/roc-forms" className="llp-nav-pill">ROC Forms</Link>
          <Link to="/knowledge-base/companies-act" className="llp-nav-pill">Companies Act</Link>
          <Link to="/knowledge-base/company-law-rules" className="llp-nav-pill">Company Law Rules</Link>
          <Link to="/knowledge-base/company-law-circulars" className="llp-nav-pill">Company Law Circulars</Link>
          <Link to="/knowledge-base/company-law-notifications" className="llp-nav-pill">Company Law Notifications</Link>
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="llp-official-ref-box">
        <h3><Book size={24} color="var(--brand-gold)" /> Official MCA LLP Forms & Filing Reference</h3>
        <p>
          LLP forms, filing procedures and applicability may change through amendments and MCA updates. Always verify the current form and filing instructions on the official MCA portal.
        </p>
        <a 
          href="https://www.mca.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="llp-official-btn"
        >
          View Official MCA Portal <ExternalLink size={16} />
        </a>
      </div>

      {/* DETAIL MODAL */}
      {selectedForm && (
        <div className="llp-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="llp-modal-content" onClick={e => e.stopPropagation()}>
            <div className="llp-modal-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {selectedForm.applicableLaw}
                  </div>
                  <div className={`llp-status-badge ${selectedForm.status.toLowerCase()}`}>
                    {selectedForm.status}
                  </div>
                </div>
                <h2 style={{ color: 'var(--brand-blue)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>{selectedForm.formNumber}</h2>
                <div className="llp-modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="llp-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="llp-modal-body">
              <div className="llp-modal-row">
                <div className="llp-modal-lbl">Category</div>
                <div className="llp-modal-val" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedForm.category}</div>
              </div>
              
              {selectedForm.triggerEvent && (
                <div className="llp-modal-row">
                  <div className="llp-modal-lbl">Trigger Event</div>
                  <div className="llp-modal-val"><i>Used when:</i> {selectedForm.triggerEvent}</div>
                </div>
              )}

              <div className="llp-modal-row">
                <div className="llp-modal-lbl">Purpose</div>
                <div className="llp-modal-val">{selectedForm.purpose}</div>
              </div>

              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="llp-modal-row">
                  <div className="llp-modal-lbl">Relevant Sections</div>
                  <div className="llp-modal-val">{selectedForm.relevantSections.join(', ')}</div>
                </div>
              )}
              
              {selectedForm.applicableRules && selectedForm.applicableRules.length > 0 && (
                <div className="llp-modal-row">
                  <div className="llp-modal-lbl">Applicable Rules</div>
                  <div className="llp-modal-val">{selectedForm.applicableRules.join(', ')}</div>
                </div>
              )}

              {selectedForm.filingMode && (
                <div className="llp-modal-row">
                  <div className="llp-modal-lbl">Filing Mode</div>
                  <div className="llp-modal-val">{selectedForm.filingMode}</div>
                </div>
              )}

              <div className="llp-modal-row">
                <div className="llp-modal-lbl">Summary</div>
                <div className="llp-modal-val">{selectedForm.summary}</div>
              </div>
            </div>
            
            <div className="llp-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Complete form and instructions are available from the official source.
              </span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="llp-official-btn"
              >
                View Official MCA Source <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
