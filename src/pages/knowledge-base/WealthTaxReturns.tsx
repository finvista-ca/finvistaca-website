import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  X,
  ChevronRight,
  ExternalLink,
  Book,
  Search,
  AlertTriangle
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { wealthTaxReturnsFormsData, relatedKnowledgeBase } from '../../data/wealthTaxReturnsFormsData';
import './WealthTaxReturns.css';

export const WealthTaxReturns: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);

  // Search filtering
  const filteredForms = useMemo(() => {
    let result = wealthTaxReturnsFormsData;

    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(f => 
        f.formNumber.toLowerCase().includes(lower) ||
        f.title.toLowerCase().includes(lower) ||
        f.purpose.toLowerCase().includes(lower) ||
        (f.applicablePeriod && f.applicablePeriod.toLowerCase().includes(lower)) ||
        (f.relevantSections && f.relevantSections.some(s => s.toLowerCase().includes(lower)))
      );
    }
    return result;
  }, [searchQuery]);

  const selectedForm = wealthTaxReturnsFormsData.find(f => f.id === selectedFormId);

  return (
    <div className="historical-page-wrapper">
      <InternalPageHero 
        title="Wealth Tax Returns Forms"
        description="Historical reference for wealth-tax return forms and compliance applicable to periods before the abolition of the Wealth-tax Act."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Wealth Tax Returns Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Historical reference for wealth-tax return forms and compliance applicable to periods before the abolition of the Wealth-tax Act."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Forms Indexed', value: wealthTaxReturnsFormsData.length },
            { label: 'Status', value: 'Historical / Abolished' },
            { label: 'Tax Framework', value: 'Wealth-tax Act, 1957' },
            { label: 'Effective', value: 'Pre-2016' }
          ]}
          statCards={[
            { value: wealthTaxReturnsFormsData.length, label: 'Forms Indexed' },
            { value: 'Historical', label: 'Status' },
            { value: 'Pre-2016', label: 'Effective' },
            { value: 'Abolished', label: 'Tax Framework' }
          ]}
        />
      </div>

      <div className="historical-status-banner">
        <h2><AlertTriangle size={20} color="var(--brand-gold)" /> Historical / Legacy Tax Reference</h2>
        <p>
          The Wealth-tax Act, 1957 was abolished with effect from 1 April 2016 (Assessment Year 2016-17). Wealth-tax returns are therefore not part of the current income-tax return filing framework. This page is retained as a historical reference for earlier assessment years and legacy compliance matters.
        </p>
      </div>

      <div className="historical-layout">
        
        {/* SIDEBAR: Timeline & FAQ */}
        <div className="historical-sidebar">
          <div className="timeline-card">
            <h3>Wealth Tax at a Glance</h3>
            <div className="compact-timeline">
              <div className="timeline-item">
                <div className="timeline-item-title">Wealth-tax Act, 1957</div>
                <div className="timeline-item-desc">Framework enacted</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item-title">Historical Compliance</div>
                <div className="timeline-item-desc">Wealth-tax returns / forms</div>
              </div>
              <div className="timeline-item timeline-end">
                <div className="timeline-item-title" style={{ color: 'var(--brand-gold)' }}>Abolition effective 1 April 2016</div>
                <div className="timeline-item-desc">Replaced with additional surcharge</div>
              </div>
              <div className="timeline-item timeline-end">
                <div className="timeline-item-title">Historical / Legacy Reference</div>
                <div className="timeline-item-desc">Applicable only for pre-2016 records</div>
              </div>
            </div>
          </div>

          <div className="status-faq-card">
            <h3>Is Wealth Tax Currently Applicable?</h3>
            <div className="status-faq-item">
              <div className="status-faq-question">No.</div>
              <div className="status-faq-answer">
                The Wealth-tax Act, 1957 was abolished with effect from 1 April 2016. This page is therefore maintained as a historical reference rather than a current tax-filing resource.
              </div>
            </div>
            
            <h3 style={{ marginTop: '2rem', paddingTop: '1.5rem' }}>Common Questions</h3>
            <div className="status-faq-item">
              <div className="status-faq-question">When was it abolished?</div>
              <div className="status-faq-answer">It was abolished by the Finance Act, 2015, effective from 1 April 2016.</div>
            </div>
            <div className="status-faq-item">
              <div className="status-faq-question">Is this for current income-tax?</div>
              <div className="status-faq-answer">No. Current income-tax returns use ITR forms. Wealth tax forms are strictly historical.</div>
            </div>
          </div>
        </div>

        {/* MAIN: Directory */}
        <div className="historical-main">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tax Framework</div>
              <div style={{ color: 'white', fontWeight: 600 }}>Wealth-tax Act, 1957</div>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(201, 160, 80, 0.3)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-gold)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Status</div>
              <div style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Historical / Abolished</div>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Forms Indexed</div>
              <div style={{ color: 'white', fontWeight: 600, fontSize: '1.2rem' }}>{wealthTaxReturnsFormsData.length}</div>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Reference Type</div>
              <div style={{ color: 'white', fontWeight: 600 }}>Legacy Compliance</div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>Historical Wealth Tax Forms</h2>
          
          <div className="historical-controls">
            <div className="historical-search-wrapper">
              <Search className="h-search-icon" size={18} />
              <input 
                type="text" 
                className="h-search-input"
                placeholder="Search form number, purpose or historical reference..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="h-clear-search" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {filteredForms.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <p style={{ color: 'var(--text-secondary)' }}>No historical forms found matching your criteria.</p>
            </div>
          ) : (
            <div className="historical-forms-grid">
              {filteredForms.map(form => (
                <div key={form.id} className="h-form-card" onClick={() => setSelectedFormId(form.id)}>
                  <div className="h-status-badge">{form.historicalStatus}</div>
                  <div className="h-form-number">{form.formNumber}</div>
                  <div className="h-form-title">{form.title}</div>
                  <div className="h-form-period">Period: {form.applicablePeriod}</div>
                  <div className="h-form-purpose">{form.purpose}</div>
                  <div className="h-form-footer">
                    <span className="h-view-link">View Form Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <div className="h-official-reference">
        <h3><Book size={20} color="var(--brand-gold)" /> Official / Historical Wealth Tax Reference</h3>
        <p>
          Wealth-tax provisions are historical and may be relevant only for earlier periods, legacy records or historical compliance research. Verify the applicable position for the relevant assessment year from official Government sources.
        </p>
        <a 
          href="https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-official-btn"
        >
          View Official Source <ExternalLink size={16} />
        </a>
      </div>

      <div className="h-related-kb">
        <h2>Related Knowledge Base</h2>
        <div className="h-related-grid">
          {relatedKnowledgeBase.map((item, idx) => (
            <Link key={idx} to={item.path} className="h-related-link">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* FORM DETAIL MODAL */}
      {selectedForm && (
        <div className="h-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="h-modal-content" onClick={e => e.stopPropagation()}>
            <div className="h-modal-header">
              <div>
                <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                  {selectedForm.historicalStatus}
                </div>
                <h2 style={{ color: 'var(--brand-gold)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>{selectedForm.formNumber}</h2>
                <div className="h-modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="h-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="h-modal-body">
              <div className="h-modal-row">
                <div className="h-modal-label">Applicable Period</div>
                <div className="h-modal-val" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>{selectedForm.applicablePeriod}</div>
              </div>

              <div className="h-modal-row">
                <div className="h-modal-label">Purpose</div>
                <div className="h-modal-val">{selectedForm.purpose}</div>
              </div>
              
              <div className="h-modal-row">
                <div className="h-modal-label">Who Used It</div>
                <div className="h-modal-val">
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {selectedForm.whoUsedIt.map((user, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{user}</li>)}
                  </ul>
                </div>
              </div>
              
              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="h-modal-row">
                  <div className="h-modal-label">Relevant Sections</div>
                  <div className="h-modal-val">
                    {selectedForm.relevantSections.join(', ')}
                  </div>
                </div>
              )}

              <div className="h-modal-row">
                <div className="h-modal-label">Summary</div>
                <div className="h-modal-val">{selectedForm.summary}</div>
              </div>
              
              <div className="h-modal-row" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                <div className="h-modal-label"></div>
                <div className="h-modal-val" style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  Historical form and related instructions are available from the official source.
                </div>
              </div>
            </div>
            
            <div className="h-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Source: {selectedForm.source}</span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-official-btn"
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
