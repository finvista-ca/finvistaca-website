import React, { useState, useMemo } from 'react';
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
import { incomeTaxChallansData, type IncomeTaxChallan, relatedKnowledgeBase } from '../../data/incomeTaxChallansData';
import './IncomeTaxChallans.css';

export const IncomeTaxChallans: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFramework, setSelectedFramework] = useState<string>('All');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);

  // Finder State
  const [finderPaymentType, setFinderPaymentType] = useState<string>('');
  const [finderFramework, setFinderFramework] = useState<string>('Income-tax Act, 2025');

  // Derived filters from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(incomeTaxChallansData.map(c => c.category)));
    return ['All', ...cats.sort()];
  }, []);

  const frameworks = useMemo(() => {
    const frames = Array.from(new Set(incomeTaxChallansData.map(c => c.applicableLaw)));
    return ['All', ...frames.sort().reverse()];
  }, []);

  const allPaymentTypes = useMemo(() => {
    const types = new Set<string>();
    incomeTaxChallansData.forEach(c => {
      c.paymentTypes.forEach(pt => types.add(pt));
    });
    return Array.from(types).sort();
  }, []);

  // Filtering Logic for Directory
  const filteredChallans = useMemo(() => {
    let result = incomeTaxChallansData;

    if (selectedCategory !== 'All') {
      result = result.filter(c => c.category === selectedCategory);
    }

    if (selectedFramework !== 'All') {
      result = result.filter(c => c.applicableLaw === selectedFramework);
    }

    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.challanNumber.toLowerCase().includes(lower) ||
        c.title.toLowerCase().includes(lower) ||
        c.purpose.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower) ||
        c.paymentTypes.some(pt => pt.toLowerCase().includes(lower)) ||
        (c.majorHeads && c.majorHeads.some(mh => mh.toLowerCase().includes(lower))) ||
        (c.minorHeads && c.minorHeads.some(mh => mh.code.toLowerCase().includes(lower) || mh.name.toLowerCase().includes(lower)))
      );
    }

    return result;
  }, [searchQuery, selectedCategory, selectedFramework]);

  // Finder Logic
  const recommendedChallans = useMemo(() => {
    if (!finderPaymentType || !finderFramework) return [];
    
    return incomeTaxChallansData.filter(c => 
      c.applicableLaw === finderFramework && 
      c.paymentTypes.includes(finderPaymentType)
    );
  }, [finderPaymentType, finderFramework]);

  // Selected Detail
  const selectedForm = incomeTaxChallansData.find(c => c.id === selectedFormId);

  return (
    <div className="challans-page-wrapper">
      <InternalPageHero 
        title="Income Tax Challans"
        description="Find the appropriate tax challan, payment category and applicable tax framework for your income-tax payment."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income Tax Challans' }
        ]}
      />

      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Find the appropriate tax challan, payment category and applicable tax framework for your income-tax payment."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Challans Indexed', value: incomeTaxChallansData.length },
            { label: 'Payment System', value: 'e-Pay Tax' },
            { label: 'Tax Frameworks', value: '1961 Act / 2025 Act' },
            { label: 'Official Authority', value: 'CBDT / IT Dept' }
          ]}
          statCards={[
            { value: incomeTaxChallansData.length, label: 'Challans Indexed' },
            { value: 'e-Pay Tax', label: 'Payment System' },
            { value: '1961/2025', label: 'Tax Frameworks' },
            { value: 'CBDT', label: 'Official Authority' }
          ]}
        />
      </div>

      {/* SECTION 1: FIND YOUR CHALLAN */}
      <div className="challan-finder-section">
        <div className="finder-header">
          <h2>Find Your Challan</h2>
          <p>Select what you are paying and we'll show the relevant challan reference.</p>
        </div>
        
        <div className="finder-form">
          <div className="finder-field">
            <label className="finder-label">What are you paying?</label>
            <select 
              className="finder-select"
              value={finderPaymentType}
              onChange={(e) => setFinderPaymentType(e.target.value)}
            >
              <option value="">-- Select payment type --</option>
              {allPaymentTypes.map(pt => (
                <option key={pt} value={pt}>{pt}</option>
              ))}
            </select>
          </div>
          
          <div className="finder-field">
            <label className="finder-label">Which tax framework applies?</label>
            <select 
              className="finder-select"
              value={finderFramework}
              onChange={(e) => setFinderFramework(e.target.value)}
            >
              {frameworks.filter(f => f !== 'All').map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <div className="act-info-note">
              <strong>Note:</strong> Tax Year 2026-27 onwards uses the 2025 Act framework. Payments relating to Assessment Year 2026-27 or earlier use the 1961 Act framework.
            </div>
          </div>
        </div>

        {finderPaymentType && finderFramework && (
          <div className="finder-result">
            <h3 className="result-title">
              {recommendedChallans.length > 1 ? 'Possible Challans' : 'Recommended Challan'}
            </h3>
            
            {recommendedChallans.length === 0 ? (
              <div style={{ color: 'var(--text-secondary)' }}>No exact match found in the dataset for this combination. Please verify the applicable framework.</div>
            ) : (
              <div className="result-cards-wrapper">
                {recommendedChallans.map(challan => (
                  <div key={challan.id} className="challan-card" onClick={() => setSelectedFormId(challan.id)}>
                    <div className="c-card-header">
                      <div className="c-number">{challan.challanNumber}</div>
                      <div className="c-title">{challan.title}</div>
                    </div>
                    <div className="c-card-body">
                      <div className="c-detail">
                        <div className="c-detail-lbl">Used For</div>
                        <div className="c-detail-val">{challan.paymentTypes.join(', ')}</div>
                      </div>
                      <div className="c-detail">
                        <div className="c-detail-lbl">Applicable Period</div>
                        <div className="c-detail-val">{challan.applicablePeriod}</div>
                      </div>
                    </div>
                    <div className="c-card-footer">
                      <span className="c-view-btn">View Challan Details <ChevronRight size={16} /></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* SECTION 2: DIRECTORY */}
      <div className="c-directory-section">
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>Income Tax Challan Directory</h2>
        
        <div className="c-controls">
          <div className="c-search-wrapper">
            <Search className="c-search-icon" size={20} />
            <input 
              type="text" 
              className="c-search-input"
              placeholder="Search challan number, payment type, major head or minor head..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="c-clear-search" onClick={() => setSearchQuery('')}>
                <X size={18} />
              </button>
            )}
          </div>
          <div className="c-filters">
            <select 
              className="c-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select 
              className="c-filter-select"
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
            >
              {frameworks.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
        </div>

        {filteredChallans.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No challans found matching your criteria.</p>
          </div>
        ) : (
          <div className="result-cards-wrapper">
            {filteredChallans.map(challan => (
              <div key={challan.id} className="challan-card" onClick={() => setSelectedFormId(challan.id)}>
                <div className={`c-badge ${challan.applicableLaw.includes('2025') ? 'c-2025' : ''}`}>
                  {challan.applicableLaw}
                </div>
                <div className="c-card-header" style={{ paddingTop: '1rem' }}>
                  <div className="c-number">{challan.challanNumber}</div>
                  <div className="c-title">{challan.title}</div>
                </div>
                <div className="c-card-body">
                  <div className="c-detail">
                    <div className="c-detail-lbl">Category</div>
                    <div className="c-detail-val" style={{ color: 'var(--brand-gold)' }}>{challan.category}</div>
                  </div>
                  <div className="c-detail">
                    <div className="c-detail-lbl">Purpose</div>
                    <div className="c-detail-val" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{challan.purpose}</div>
                  </div>
                </div>
                <div className="c-card-footer">
                  <span className="c-view-btn">View Details <ChevronRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 1961 vs 2025 COMPARISON */}
      <div className="c-comparison-section">
        <h2>Challans: 1961 Act vs 2025 Act</h2>
        <div className="table-container">
          <table className="c-comparison-table">
            <thead>
              <tr>
                <th>Payment Area</th>
                <th>1961 Act</th>
                <th>2025 Act</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Income / Corporation Tax</td>
                <td><span className="ch-badge">ITNS 280</span></td>
                <td><span className="ch-badge mapped">ITNS 280N</span></td>
              </tr>
              <tr>
                <td>TDS / TCS</td>
                <td><span className="ch-badge">ITNS 281</span></td>
                <td><span className="ch-badge mapped">ITNS 281N</span></td>
              </tr>
              <tr>
                <td>Other Taxes (Securities, Commodities, etc)</td>
                <td><span className="ch-badge">ITNS 282</span></td>
                <td><span className="ch-badge mapped">ITNS 282N</span></td>
              </tr>
              <tr>
                <td>Block Assessment</td>
                <td><span className="ch-badge">ITNS 288</span></td>
                <td><span className="ch-badge mapped">ITNS 288N</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          *Mappings are based on current verified equivalents on the e-Pay Tax portal.
        </p>
      </div>

      {/* PAYMENT PROCESS INFO */}
      <div className="info-sections-grid">
        <div className="info-card">
          <h3>How to Pay Tax</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            The current official e-Pay Tax flow at a high level:
          </p>
          <div className="info-step">
            <div className="step-num">1</div>
            <div className="step-text">Open Income Tax e-Filing and go to <strong>e-Pay Tax</strong></div>
          </div>
          <div className="info-step">
            <div className="step-num">2</div>
            <div className="step-text">Select the applicable Income-tax Act</div>
          </div>
          <div className="info-step">
            <div className="step-num">3</div>
            <div className="step-text">Select New Payment and choose the relevant payment tile</div>
          </div>
          <div className="info-step">
            <div className="step-num">4</div>
            <div className="step-text">Enter required details to generate the Challan / CRN</div>
          </div>
          <div className="info-step">
            <div className="step-num">5</div>
            <div className="step-text">Complete payment through the available methods</div>
          </div>
        </div>

        <div className="info-card">
          <h3>Challan Reference Number (CRN)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            A generated challan through the e-Pay Tax service provides a unique <strong>Challan Reference Number (CRN)</strong>. This 14-digit number identifies the payment request.
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>Do not confuse CRN with the <strong>BSR Code</strong> (the bank branch code).</li>
            <li style={{ marginBottom: '0.5rem' }}>Do not confuse CRN with the <strong>Challan Serial Number</strong> generated upon successful deposit.</li>
            <li>A CRN is generated before payment and expires if not paid within the stipulated time.</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Common Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-q">Which challan should I use for Advance Tax?</div>
            <div className="faq-a">For periods governed by the 2025 Act, use ITNS 280N. For earlier periods (1961 Act), use ITNS 280. Select Major Head 0021 (for individuals) and Minor Head 100.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Which Act applies to payments for Tax Year 2026–27?</div>
            <div className="faq-a">Payments related to Tax Year 2026–27 (Assessment Year 2027-28) and onwards fall under the Income-tax Act, 2025.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between ITNS 280 and ITNS 280N?</div>
            <div className="faq-a">ITNS 280 is the legacy challan under the 1961 Act. ITNS 280N is the direct equivalent designed for the 2025 Act framework via the new e-Pay Tax service.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Which challan is used for TDS/TCS?</div>
            <div className="faq-a">TDS/TCS payments are deposited using ITNS 281 under the 1961 Act, and ITNS 281N under the 2025 Act.</div>
          </div>
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="official-ref-box">
        <h3><Book size={24} color="var(--brand-gold)" /> Official Income Tax Challan & e-Pay Tax Reference</h3>
        <p>
          Tax payment procedures, challans and payment categories may change with amendments and changes in the applicable tax framework. Always verify the applicable challan and current payment instructions from the official Income Tax Department.
        </p>
        <a 
          href="https://www.incometax.gov.in/iec/foportal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="c-official-btn"
        >
          Open e-Pay Tax <ExternalLink size={16} />
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
        <div className="c-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="c-modal-content" onClick={e => e.stopPropagation()}>
            <div className="c-modal-header">
              <div>
                <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                  {selectedForm.applicableLaw}
                </div>
                <h2 style={{ color: 'var(--brand-blue)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>{selectedForm.challanNumber}</h2>
                <div className="c-modal-subtitle">{selectedForm.title}</div>
              </div>
              <button className="c-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="c-modal-body">
              <div className="c-modal-row">
                <div className="c-modal-lbl">Applicable Period</div>
                <div className="c-modal-val" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedForm.applicablePeriod}</div>
              </div>

              <div className="c-modal-row">
                <div className="c-modal-lbl">Purpose</div>
                <div className="c-modal-val">{selectedForm.purpose}</div>
              </div>

              <div className="c-modal-row">
                <div className="c-modal-lbl">Payment Types</div>
                <div className="c-modal-val">{selectedForm.paymentTypes.join(', ')}</div>
              </div>
              
              {selectedForm.majorHeads && selectedForm.majorHeads.length > 0 && (
                <div className="c-modal-row">
                  <div className="c-modal-lbl">Major Heads</div>
                  <div className="c-modal-val">
                    <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                      {selectedForm.majorHeads.map((mh, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{mh}</li>)}
                    </ul>
                  </div>
                </div>
              )}
              
              {selectedForm.minorHeads && selectedForm.minorHeads.length > 0 && (
                <div className="c-modal-row">
                  <div className="c-modal-lbl">Minor Heads</div>
                  <div className="c-modal-val">
                    <div className="c-minor-head-list">
                      {selectedForm.minorHeads.map((mh, idx) => (
                        <div key={idx} className="c-minor-head-item">
                          <span className="c-mh-code">{mh.code}</span>
                          <span>{mh.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="c-modal-row">
                <div className="c-modal-lbl">Summary</div>
                <div className="c-modal-val">{selectedForm.summary}</div>
              </div>
            </div>
            
            <div className="c-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Source: {selectedForm.source}</span>
              <a 
                href={selectedForm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="c-official-btn"
              >
                View Official Guidance <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
