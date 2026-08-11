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
import { rocFormsData, type ROCForm, relatedKnowledgeBase } from '../../data/rocFormsData';
import './RocForms.css';

const ITEMS_PER_PAGE = 20;

export const RocForms: React.FC = () => {
  // Global Directory State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntity, setSelectedEntity] = useState<string>('All');
  const [selectedFramework, setSelectedFramework] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const directoryRef = useRef<HTMLDivElement>(null);

  // Intent Finder State
  const [finderEntity, setFinderEntity] = useState<string | null>(null);
  const [finderIntent, setFinderIntent] = useState<string | null>(null);

  // Derive unique values for filters
  const allEntityTypes = useMemo(() => {
    const types = new Set<string>();
    rocFormsData.forEach(f => f.entityTypes.forEach(t => types.add(t)));
    return ['All', ...Array.from(types).sort()];
  }, []);

  const allFrameworks = useMemo(() => {
    const frames = Array.from(new Set(rocFormsData.map(f => f.applicableLaw)));
    return ['All', ...frames.sort()];
  }, []);

  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(rocFormsData.map(f => f.category)));
    return ['All', ...cats.sort()];
  }, []);

  const allStatuses = useMemo(() => {
    const stats = Array.from(new Set(rocFormsData.map(f => f.status)));
    return ['All', ...stats.sort()];
  }, []);

  // Intent Options for Finder (based on the actual data categories)
  const intentOptions = allCategories.filter(c => c !== 'All');

  // Finder Output Logic
  const finderMatches = useMemo(() => {
    if (!finderEntity || !finderIntent) return null;
    return rocFormsData.filter(
      f => f.entityTypes.includes(finderEntity) && f.category === finderIntent
    );
  }, [finderEntity, finderIntent]);

  // Main Directory Filter Logic
  const filteredForms = useMemo(() => {
    let result = rocFormsData;

    if (selectedEntity !== 'All') {
      result = result.filter(f => f.entityTypes.includes(selectedEntity));
    }

    if (selectedFramework !== 'All') {
      result = result.filter(f => f.applicableLaw === selectedFramework);
    }

    if (selectedCategory !== 'All') {
      result = result.filter(f => f.category === selectedCategory);
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
  }, [searchQuery, selectedEntity, selectedFramework, selectedCategory, selectedStatus]);

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
  }, [searchQuery, selectedEntity, selectedFramework, selectedCategory, selectedStatus]);

  // Selected Detail
  const selectedForm = rocFormsData.find(f => f.id === selectedFormId);

  return (
    <div className="roc-forms-page-wrapper">
      <InternalPageHero 
        title="ROC Forms"
        description="Explore MCA and Registrar of Companies forms used for company, LLP and corporate compliance filings."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'ROC Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore MCA and Registrar of Companies forms used for company, LLP and corporate compliance filings."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'ROC Forms Indexed', value: rocFormsData.length },
            { label: 'Entity Types', value: 'Companies / LLPs' },
            { label: 'Directory', value: 'Searchable' },
            { label: 'Regulatory Authority', value: 'MCA / ROC' }
          ]}
          statCards={[
            { value: rocFormsData.length, label: 'ROC Forms Indexed' },
            { value: 'Companies / LLPs', label: 'Entity Types' },
            { value: 'Searchable', label: 'Compliance Directory' },
            { value: 'MCA / ROC', label: 'Regulatory Authority' }
          ]}
        />
      </div>

      {/* SECTION 1: FIND A ROC FORM */}
      <div className="roc-finder-section">
        <div className="roc-finder-header">
          <h2>Find a ROC Form</h2>
          <p>Select the compliance requirement and entity type to find relevant MCA forms.</p>
        </div>
        
        <div className="roc-finder-step">
          <div className="roc-step-label"><div className="roc-step-num">1</div> What type of entity are you filing for?</div>
          <div className="roc-intent-wrapper">
            {['Company', 'LLP'].map(entity => (
              <button 
                key={entity}
                className={`roc-intent-btn ${finderEntity === entity ? 'active' : ''}`}
                onClick={() => {
                  setFinderEntity(entity);
                  if (finderIntent && finderMatches === null) setFinderIntent(null);
                }}
              >
                {entity}
              </button>
            ))}
          </div>
        </div>

        <div className="roc-finder-step">
          <div className="roc-step-label"><div className="roc-step-num">2</div> What are you trying to do?</div>
          <div className="roc-intent-wrapper">
            {intentOptions.map(intent => (
              <button 
                key={intent}
                className={`roc-intent-btn ${finderIntent === intent ? 'active' : ''}`}
                onClick={() => setFinderIntent(intent)}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Finder Results */}
        {finderEntity && finderIntent && (
          <div className="roc-finder-results">
            {finderMatches && finderMatches.length > 0 ? (
              <div>
                <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  {finderMatches.length > 1 ? 'Possible ROC Forms:' : 'Recommended ROC Form:'}
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
                No verified ROC form currently matches this requirement for the selected entity.
              </div>
            )}
          </div>
        )}
      </div>

      {/* COMPANIES VS LLP SECTION */}
      <div className="roc-comparison-section">
        <h2>Companies vs LLP Forms</h2>
        <p>
          ROC forms are governed by distinct legal frameworks depending on the entity type. Forms applicable to Companies cannot be used for Limited Liability Partnerships (LLPs), and vice versa.
        </p>
        <div className="roc-comp-grid">
          <div className="roc-comp-card">
            <h3>Company Forms</h3>
            <ul>
              <li>Governed by the Companies Act, 2013</li>
              <li>Includes Companies Rules, 2014 & amendments</li>
              <li>Examples: SPICe+, AOC-4, MGT-7, DIR-12</li>
            </ul>
          </div>
          <div className="roc-comp-card">
            <h3>LLP Forms</h3>
            <ul>
              <li>Governed by the Limited Liability Partnership Act, 2008</li>
              <li>Includes LLP Rules, 2009 & amendments</li>
              <li>Examples: FiLLiP, Form 8, Form 11</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 2: DIRECTORY */}
      <div className="roc-directory-section" ref={directoryRef}>
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>ROC Form Directory</h2>
        
        <div className="roc-controls">
          <div className="roc-search-wrapper">
            <Search className="roc-search-icon" size={20} />
            <input 
              type="text" 
              className="roc-search-input"
              placeholder="Search form number, title, compliance requirement or section..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          <div className="roc-filters">
            <select className="roc-filter-select" value={selectedEntity} onChange={(e) => setSelectedEntity(e.target.value)}>
              {allEntityTypes.map(c => <option key={c} value={c}>{c === 'All' ? 'Entity Type (All)' : c}</option>)}
            </select>
            <select className="roc-filter-select" value={selectedFramework} onChange={(e) => setSelectedFramework(e.target.value)}>
              {allFrameworks.map(f => <option key={f} value={f}>{f === 'All' ? 'Applicable Law (All)' : f}</option>)}
            </select>
            <select className="roc-filter-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {allCategories.map(c => <option key={c} value={c}>{c === 'All' ? 'Category (All)' : c}</option>)}
            </select>
            <select className="roc-filter-select" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              {allStatuses.map(s => <option key={s} value={s}>{s === 'All' ? 'Status (All)' : s}</option>)}
            </select>
          </div>
        </div>

        {paginatedForms.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No verified forms currently match this requirement.</p>
          </div>
        ) : (
          <>
            <div className="roc-grid">
              {paginatedForms.map(form => (
                <div key={form.id} className="roc-card" onClick={() => setSelectedFormId(form.id)}>
                  <div className="roc-card-header">
                    <div className="roc-number">{form.formNumber}</div>
                    <div className={`roc-status-badge ${form.status.toLowerCase()}`}>
                      {form.status}
                    </div>
                  </div>
                  <div className="roc-detail-badges">
                    {form.entityTypes.map(et => (
                      <span key={et} className="roc-entity-badge">{et}</span>
                    ))}
                  </div>
                  <div className="roc-title">{form.title}</div>
                  <div className="roc-card-body">
                    <div className="roc-detail">
                      <div className="roc-detail-lbl">Law</div>
                      <div className="roc-detail-val" style={{ color: 'var(--brand-gold)' }}>{form.applicableLaw}</div>
                    </div>
                    <div className="roc-detail">
                      <div className="roc-detail-lbl">Category</div>
                      <div className="roc-detail-val">{form.category}</div>
                    </div>
                    <div className="roc-detail">
                      <div className="roc-detail-lbl">Purpose</div>
                      <div className="roc-detail-val" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{form.purpose}</div>
                    </div>
                  </div>
                  <div className="roc-card-footer">
                    <span className="roc-view-btn">View Form Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="roc-pagination">
                <button 
                  className="roc-page-btn" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="roc-page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  className="roc-page-btn" 
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

      {/* LOOKING FOR SOMETHING ELSE? */}
      <div className="roc-nav-hub">
        <h2>Looking for something else?</h2>
        <div className="roc-nav-grid">
          <Link to="/knowledge-base/companies-act" className="roc-nav-pill">Companies Act</Link>
          <Link to="/knowledge-base/llp-act" className="roc-nav-pill">LLP Act</Link>
          <Link to="/knowledge-base/company-law-circulars" className="roc-nav-pill">Company Law Circulars</Link>
          <Link to="/knowledge-base/company-law-notifications" className="roc-nav-pill">Company Law Notifications</Link>
          <Link to="/knowledge-base/company-law-rules" className="roc-nav-pill">Company Law Rules</Link>
          <Link to="/knowledge-base/income-tax-forms" className="roc-nav-pill">Income Tax Forms</Link>
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="roc-official-ref-box">
        <h3><Book size={24} color="var(--brand-gold)" /> Official MCA / ROC Forms</h3>
        <p>
          ROC forms, filing requirements, procedures and applicable rules may change through amendments and MCA updates. Always verify the current form, applicability and filing instructions on the official MCA portal.
        </p>
        <a 
          href="https://www.mca.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="roc-official-btn"
        >
          View Official MCA Portal <ExternalLink size={16} />
        </a>
      </div>

      {/* RELATED KB */}
      <div className="h-related-kb" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {relatedKnowledgeBase.map((item, idx) => (
            <Link key={idx} to={item.path} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center', transition: 'all 0.2s', fontWeight: 500 }}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedForm && (
        <div className="roc-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="roc-modal-content" onClick={e => e.stopPropagation()}>
            <div className="roc-modal-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {selectedForm.applicableLaw}
                  </div>
                  <div className={`roc-status-badge ${selectedForm.status.toLowerCase()}`}>
                    {selectedForm.status}
                  </div>
                </div>
                <h2 style={{ color: 'var(--brand-blue)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>{selectedForm.formNumber}</h2>
                <div className="roc-modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="roc-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="roc-modal-body">
              <div className="roc-modal-row">
                <div className="roc-modal-lbl">Entity Type</div>
                <div className="roc-modal-val" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedForm.entityTypes.join(', ')}</div>
              </div>
              
              {selectedForm.triggerEvent && (
                <div className="roc-modal-row">
                  <div className="roc-modal-lbl">Trigger Event</div>
                  <div className="roc-modal-val"><i>Used when:</i> {selectedForm.triggerEvent}</div>
                </div>
              )}

              <div className="roc-modal-row">
                <div className="roc-modal-lbl">Purpose</div>
                <div className="roc-modal-val">{selectedForm.purpose}</div>
              </div>

              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="roc-modal-row">
                  <div className="roc-modal-lbl">Relevant Sections</div>
                  <div className="roc-modal-val">{selectedForm.relevantSections.join(', ')}</div>
                </div>
              )}
              
              {selectedForm.applicableRules && selectedForm.applicableRules.length > 0 && (
                <div className="roc-modal-row">
                  <div className="roc-modal-lbl">Applicable Rules</div>
                  <div className="roc-modal-val">{selectedForm.applicableRules.join(', ')}</div>
                </div>
              )}

              {selectedForm.filingMode && (
                <div className="roc-modal-row">
                  <div className="roc-modal-lbl">Filing Mode</div>
                  <div className="roc-modal-val">{selectedForm.filingMode}</div>
                </div>
              )}

              <div className="roc-modal-row">
                <div className="roc-modal-lbl">Summary</div>
                <div className="roc-modal-val">{selectedForm.summary}</div>
              </div>
            </div>
            
            <div className="roc-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Complete form and instructions are available from the official source.
              </span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="roc-official-btn"
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
