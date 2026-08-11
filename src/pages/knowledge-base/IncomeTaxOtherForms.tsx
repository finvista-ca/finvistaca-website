import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  X,
  Search,
  ChevronRight,
  ExternalLink,
  Book,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { incomeTaxOtherFormsData, type IncomeTaxOtherForm, relatedKnowledgeBase } from '../../data/incomeTaxOtherFormsData';
import './IncomeTaxOtherForms.css';

const ITEMS_PER_PAGE = 20;

export const IncomeTaxOtherForms: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFramework, setSelectedFramework] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const directoryRef = useRef<HTMLDivElement>(null);

  // Intent Finder State
  const [activeIntent, setActiveIntent] = useState<string | null>(null);

  // Derived filters from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(incomeTaxOtherFormsData.map(f => f.category)));
    return ['All', ...cats.sort()];
  }, []);

  const frameworks = useMemo(() => {
    const frames = Array.from(new Set(incomeTaxOtherFormsData.map(f => f.applicableLaw)));
    return ['All', ...frames.sort()];
  }, []);

  const statuses = useMemo(() => {
    const stats = Array.from(new Set(incomeTaxOtherFormsData.map(f => f.status)));
    return ['All', ...stats.sort()];
  }, []);

  // Intent Categories (same as basic categories for simplicity, or we could derive specific keywords)
  // For the prompt's requirement, we map standard categories to the intent buttons
  const intentOptions = categories.filter(c => c !== 'All');

  // Handle Intent Selection
  const handleIntentClick = (intent: string) => {
    if (activeIntent === intent) {
      setActiveIntent(null);
      setSelectedCategory('All');
    } else {
      setActiveIntent(intent);
      setSelectedCategory(intent);
      // Reset other filters when using intent helper
      setSearchQuery('');
      setSelectedFramework('All');
      setSelectedStatus('All');
      setCurrentPage(1);
    }
  };

  // Filtering Logic for Directory
  const filteredForms = useMemo(() => {
    let result = incomeTaxOtherFormsData;

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
      // Exact form number match prioritized
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
        (f.relevantSections && f.relevantSections.some(s => s.toLowerCase().includes(lower))) ||
        (f.applicablePeriod && f.applicablePeriod.toLowerCase().includes(lower))
      );
    }

    return result;
  }, [searchQuery, selectedCategory, selectedFramework, selectedStatus]);

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
  const selectedForm = incomeTaxOtherFormsData.find(f => f.id === selectedFormId);

  return (
    <div className="other-forms-page-wrapper">
      <InternalPageHero 
        title="Income Tax Other Forms"
        description="Explore additional income-tax forms and miscellaneous compliance references that fall outside the primary return, statutory-form and challan directories."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income Tax Other Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore additional income-tax forms and miscellaneous compliance references that fall outside the primary return, statutory-form and challan directories."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Other Forms Indexed', value: incomeTaxOtherFormsData.length },
            { label: 'Reference Type', value: 'Miscellaneous Compliance' },
            { label: 'Frameworks', value: '1961 / 2025' },
            { label: 'Official Authority', value: 'Income Tax Department / CBDT' }
          ]}
          statCards={[
            { value: incomeTaxOtherFormsData.length, label: 'Other Forms Indexed' },
            { value: 'Misc Compliance', label: 'Reference Type' },
            { value: '1961/2025', label: 'Frameworks' },
            { value: 'CBDT', label: 'Official Authority' }
          ]}
        />
      </div>

      {/* SECTION 1: FIND A FORM (INTENT HELPER) */}
      <div className="of-finder-section">
        <div className="of-finder-header">
          <h2>Find a Form</h2>
          <p>Tell us what you are trying to do and we'll show relevant miscellaneous forms.</p>
        </div>
        
        <div className="of-intent-wrapper">
          {intentOptions.map(intent => (
            <button 
              key={intent}
              className={`of-intent-btn ${activeIntent === intent ? 'active' : ''}`}
              onClick={() => handleIntentClick(intent)}
            >
              {intent}
            </button>
          ))}
        </div>
      </div>

      {/* WHERE SHOULD I LOOK? (NAVIGATION HUB) */}
      <div className="of-nav-hub">
        <h2>Where should I look?</h2>
        <div className="of-nav-grid">
          <Link to="/knowledge-base/income-tax-returns-forms" className="of-nav-card">
            <div className="of-nav-title"><FileText size={18} color="var(--brand-blue)" /> Income Tax Return Forms</div>
            <div className="of-nav-desc">ITR-1 to ITR-7 current return filing forms.</div>
          </Link>
          <Link to="/knowledge-base/income-tax-forms" className="of-nav-card">
            <div className="of-nav-title"><FileText size={18} color="var(--brand-gold)" /> Income Tax Forms</div>
            <div className="of-nav-desc">Main statutory forms, declarations, certificates and reports.</div>
          </Link>
          <Link to="/knowledge-base/income-tax-challans" className="of-nav-card">
            <div className="of-nav-title"><FileText size={18} color="#2ecc71" /> Income Tax Challans</div>
            <div className="of-nav-desc">Tax-payment challans (e.g. ITNS 280, ITNS 281).</div>
          </Link>
          <div className="of-nav-card" style={{ borderColor: 'var(--brand-blue)', background: 'rgba(0, 163, 224, 0.05)' }}>
            <div className="of-nav-title"><FileText size={18} color="var(--brand-blue)" /> Income Tax Other Forms</div>
            <div className="of-nav-desc">You are here. Miscellaneous / additional references.</div>
          </div>
        </div>
      </div>

      {/* SECTION 2: DIRECTORY */}
      <div className="of-directory-section" ref={directoryRef}>
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>Other Income Tax Forms</h2>
        
        <div className="of-controls">
          <div className="of-search-wrapper">
            <Search className="of-search-icon" size={20} />
            <input 
              type="text" 
              className="of-search-input"
              placeholder="Search form number, title, purpose or section..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="c-clear-search" onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          <div className="of-filters">
            <select 
              className="of-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select 
              className="of-filter-select"
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
            >
              {frameworks.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
            <select 
              className="of-filter-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {paginatedForms.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No verified forms currently match this requirement.</p>
          </div>
        ) : (
          <>
            <div className="of-grid">
              {paginatedForms.map(form => (
                <div key={form.id} className="of-card" onClick={() => setSelectedFormId(form.id)}>
                  <div className="of-card-header">
                    <div className="of-number">{form.formNumber}</div>
                    <div className={`of-status-badge ${form.status.toLowerCase()}`}>
                      {form.status}
                    </div>
                  </div>
                  <div className="of-title">{form.title}</div>
                  <div className="of-card-body">
                    <div className="of-detail">
                      <div className="of-detail-lbl">Category</div>
                      <div className="of-detail-val" style={{ color: 'var(--brand-gold)' }}>{form.category}</div>
                    </div>
                    <div className="of-detail">
                      <div className="of-detail-lbl">Framework</div>
                      <div className="of-detail-val">{form.applicableLaw}</div>
                    </div>
                    <div className="of-detail">
                      <div className="of-detail-lbl">Purpose</div>
                      <div className="of-detail-val" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{form.purpose}</div>
                    </div>
                  </div>
                  <div className="of-card-footer">
                    <span className="of-view-btn">View Form Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="of-pagination">
                <button 
                  className="of-page-btn" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="of-page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  className="of-page-btn" 
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

      {/* FAQ */}
      <div className="of-faq-section">
        <h2>Common Questions</h2>
        <div className="of-faq-grid">
          <div className="of-faq-item">
            <div className="of-faq-q">What are Income Tax Other Forms?</div>
            <div className="of-faq-a">This page serves as a directory for miscellaneous compliance references and forms that do not fit into the core categories of return filing, primary statutory declarations, or tax payment challans.</div>
          </div>
          <div className="of-faq-item">
            <div className="of-faq-q">How are these forms different from ITR forms?</div>
            <div className="of-faq-a">Income Tax Return (ITR) forms are used strictly for filing your annual income tax returns. The forms listed here serve supplementary, procedural, or exceptional compliance purposes.</div>
          </div>
          <div className="of-faq-item">
            <div className="of-faq-q">Where can I find the main statutory Income Tax Forms?</div>
            <div className="of-faq-a">The primary statutory forms, declarations, certificates and reports (e.g. Form 16, Form 15CA, Form 10B) are indexed in the dedicated "Income Tax Forms" section.</div>
          </div>
          <div className="of-faq-item">
            <div className="of-faq-q">Which forms are used for tax payments?</div>
            <div className="of-faq-a">Tax payments are processed using specific Challans (such as ITNS 280, ITNS 281, or ITNS 280N) which are catalogued in our "Income Tax Challans" directory.</div>
          </div>
          <div className="of-faq-item">
            <div className="of-faq-q">Are all forms on this page currently applicable?</div>
            <div className="of-faq-a">Not necessarily. Please check the "Applicable Framework", "Status", and "Applicable Period" fields on each form's detail view to determine if it applies to your specific assessment year or tax period.</div>
          </div>
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="of-official-ref-box">
        <h3><Book size={24} color="var(--brand-gold)" /> Official Income Tax Forms & Services</h3>
        <p>
          Income-tax forms, filing procedures and applicability may change with amendments and changes in the applicable tax framework. Always verify the current form and instructions from the official Income Tax Department.
        </p>
        <a 
          href="https://www.incometax.gov.in/iec/foportal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="of-official-btn"
        >
          View Official Income Tax Portal <ExternalLink size={16} />
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
        <div className="of-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="of-modal-content" onClick={e => e.stopPropagation()}>
            <div className="of-modal-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {selectedForm.applicableLaw}
                  </div>
                  <div className={`of-status-badge ${selectedForm.status.toLowerCase()}`}>
                    {selectedForm.status}
                  </div>
                </div>
                <h2 style={{ color: 'var(--brand-blue)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>{selectedForm.formNumber}</h2>
                <div className="of-modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="of-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="of-modal-body">
              <div className="of-modal-row">
                <div className="of-modal-lbl">Category</div>
                <div className="of-modal-val" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedForm.category}</div>
              </div>
              
              {selectedForm.applicablePeriod && (
                <div className="of-modal-row">
                  <div className="of-modal-lbl">Applicable Period</div>
                  <div className="of-modal-val">{selectedForm.applicablePeriod}</div>
                </div>
              )}

              <div className="of-modal-row">
                <div className="of-modal-lbl">Purpose</div>
                <div className="of-modal-val">{selectedForm.purpose}</div>
              </div>

              {selectedForm.whoUsesIt && selectedForm.whoUsesIt.length > 0 && (
                <div className="of-modal-row">
                  <div className="of-modal-lbl">Who Uses It</div>
                  <div className="of-modal-val">{selectedForm.whoUsesIt.join(', ')}</div>
                </div>
              )}
              
              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="of-modal-row">
                  <div className="of-modal-lbl">Relevant Sections</div>
                  <div className="of-modal-val">{selectedForm.relevantSections.join(', ')}</div>
                </div>
              )}

              <div className="of-modal-row">
                <div className="of-modal-lbl">Summary</div>
                <div className="of-modal-val">{selectedForm.summary}</div>
              </div>
            </div>
            
            <div className="of-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Complete form and instructions are available from the official source.
              </span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="of-official-btn"
              >
                View Official Source <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
