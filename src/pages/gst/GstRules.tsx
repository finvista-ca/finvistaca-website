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
import { gstRulesData, type GSTRule, relatedKnowledgeBase } from '../../data/gstRulesData';
import './GstRules.css';

const ITEMS_PER_PAGE = 20;

export const GstRules: React.FC = () => {
  // Global Directory State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const directoryRef = useRef<HTMLDivElement>(null);

  // Derive unique values for filters
  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(gstRulesData.map(r => r.category).filter(Boolean))) as string[];
    return ['All', ...cats.sort()];
  }, []);

  const allStatuses = useMemo(() => {
    const stats = Array.from(new Set(gstRulesData.map(r => r.status)));
    return ['All', ...stats.sort()];
  }, []);

  // Important Rules
  const importantRules = useMemo(() => {
    return gstRulesData.filter(r => r.isImportant && r.status === 'Active');
  }, []);

  // Main Directory Filter Logic
  const filteredRules = useMemo(() => {
    let result = gstRulesData;

    if (selectedCategory !== 'All') {
      result = result.filter(r => r.category === selectedCategory);
    }

    if (selectedStatus !== 'All') {
      result = result.filter(r => r.status === selectedStatus);
    }

    if (searchQuery) {
      const lower = searchQuery.toLowerCase().trim();
      
      // Extract exact rule number from search query (e.g. "46", "138A")
      // Remove "rule" or "Rule" from the search if user typed it
      const searchRuleMatch = lower.replace(/^rule\s*/i, '');
      
      result = result.sort((a, b) => {
        const aNumMatch = a.ruleNumber.replace(/^Rule\s*/i, '').toLowerCase() === searchRuleMatch ? -1 : 0;
        const bNumMatch = b.ruleNumber.replace(/^Rule\s*/i, '').toLowerCase() === searchRuleMatch ? -1 : 0;
        if (aNumMatch !== bNumMatch) {
            return aNumMatch - bNumMatch;
        }
        return 0;
      });

      result = result.filter(r => {
        const exactMatch = r.ruleNumber.replace(/^Rule\s*/i, '').toLowerCase() === searchRuleMatch;
        if (exactMatch) return true;
        
        return r.ruleNumber.toLowerCase().includes(lower) ||
        r.title.toLowerCase().includes(lower) ||
        (r.category && r.category.toLowerCase().includes(lower)) ||
        r.status.toLowerCase().includes(lower);
      });
    }

    return result;
  }, [searchQuery, selectedCategory, selectedStatus]);

  // At a Glance stats
  const totalIndexed = gstRulesData.length;
  const totalOmitted = gstRulesData.filter(r => r.status === 'Omitted').length;

  // Pagination Logic
  const totalPages = Math.ceil(filteredRules.length / ITEMS_PER_PAGE);
  const paginatedRules = filteredRules.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (directoryRef.current) {
      directoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset pagination on filter change (but keep filters/search)
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedStatus]);

  // Selected Detail
  const selectedRule = gstRulesData.find(r => r.id === selectedRuleId);

  return (
    <div className="gst-rules-page-wrapper">
      <InternalPageHero 
        title="GST Rules, 2017"
        description="Explore the Central Goods and Services Tax Rules, 2017 through a searchable, structured reference of registration, valuation, input tax credit, invoicing, returns, refunds, assessment, appeals, recovery and other GST procedures."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST Rules' }
        ]}
      />
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore the Central Goods and Services Tax Rules, 2017 through a searchable, structured reference of registration, valuation, input tax credit, invoicing, returns, refunds, assessment, appeals, recovery and other GST procedures."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Rules Indexed', value: totalIndexed },
            { label: 'Framework', value: 'CGST Rules, 2017' },
            { label: 'Rule Range', value: '1–162' },
            { label: 'Omitted Rules', value: totalOmitted }
          ]}
          statCards={[
            { value: totalIndexed, label: 'Rules Indexed' },
            { value: 'CGST', label: 'Framework' },
            { value: '1–162', label: 'Rule Range' },
            { value: totalOmitted, label: 'Omitted Rules' }
          ]}
        />
      </div>

      {/* IMPORTANT GST RULES */}
      {importantRules.length > 0 && (
        <div className="gst-important-section">
          <h2><Book size={24} color="var(--brand-gold)" /> Important GST Rules</h2>
          <div className="gst-important-grid">
            {importantRules.map(rule => (
              <div key={`imp-${rule.id}`} className="gst-important-card" onClick={() => setSelectedRuleId(rule.id)}>
                <div className="gst-imp-number">{rule.ruleNumber}</div>
                <div className="gst-imp-title">{rule.title}</div>
                <div className="gst-imp-meta">
                  <span className="gst-imp-cat">{rule.category}</span>
                  <span className="gst-status-badge active">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FIND A GST RULE */}
      <div className="gst-finder-section">
        <div className="gst-finder-header">
          <h2>Find a GST Rule</h2>
          <p>Select the GST compliance area you're looking for to find the relevant rules.</p>
        </div>
        <div className="gst-intent-wrapper">
          {allCategories.filter(c => c !== 'All' && c !== 'Other').map(cat => (
            <button 
              key={`intent-${cat}`}
              className={`gst-intent-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                if (selectedCategory === cat) {
                  setSelectedCategory('All');
                } else {
                  setSelectedCategory(cat);
                  if (directoryRef.current) {
                    directoryRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 2: DIRECTORY */}
      <div className="gst-directory-section" ref={directoryRef}>
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>Complete GST Rules Directory</h2>
        
        <div className="gst-controls">
          <div className="gst-search-wrapper">
            <Search className="gst-search-icon" size={20} />
            <input 
              type="text" 
              className="gst-search-input"
              placeholder="Search rule number, title or GST topic..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          <div className="gst-filters">
            <select className="gst-filter-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {allCategories.map(c => <option key={`cat-${c}`} value={c}>{c === 'All' ? 'Category (All)' : c}</option>)}
            </select>
            <select className="gst-filter-select" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              {allStatuses.map(s => <option key={`stat-${s}`} value={s}>{s === 'All' ? 'Status (All)' : s}</option>)}
            </select>
          </div>
        </div>

        {paginatedRules.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No GST rules match this requirement.</p>
          </div>
        ) : (
          <>
            <div className="gst-grid">
              {paginatedRules.map(rule => (
                <div key={rule.id} className={`gst-card ${rule.status === 'Omitted' ? 'omitted-card' : ''}`} onClick={() => setSelectedRuleId(rule.id)}>
                  <div className="gst-card-header">
                    <div className="gst-number">{rule.ruleNumber}</div>
                    <div className={`gst-status-badge ${rule.status.toLowerCase()}`}>
                      {rule.status}
                    </div>
                  </div>
                  <div className="gst-card-title">{rule.title}</div>
                  <div className="gst-card-footer">
                    <div className="gst-card-cat">{rule.category}</div>
                    <span className="gst-view-btn">View Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="gst-pagination">
                <button 
                  className="gst-page-btn" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="gst-page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  className="gst-page-btn" 
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

      {/* GST ACT VS GST RULES */}
      <div className="gst-vs-section">
        <h2>GST Act vs GST Rules</h2>
        <div className="gst-vs-grid">
          <div className="gst-vs-card">
            <h3>GST Acts</h3>
            <p>Provide the primary statutory framework, definitions, levy, and core legal provisions (CGST, SGST, IGST Acts).</p>
          </div>
          <div className="gst-vs-card">
            <h3>GST Rules</h3>
            <p>Provide the procedural and implementation framework made under the GST legislation (e.g. exact forms, time limits, valuation methods).</p>
          </div>
        </div>
      </div>

      {/* LOOKING FOR SOMETHING ELSE? */}
      <div className="gst-important-section" style={{ marginBottom: '4rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related GST Knowledge Base</h2>
        <div className="gst-intent-wrapper">
          {relatedKnowledgeBase.map(link => (
            <Link key={link.path} to={link.path} className="gst-intent-btn" style={{ textDecoration: 'none' }}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="gst-official-ref-box">
        <h3><Book size={24} color="var(--brand-gold)" /> Official GST Rules Reference</h3>
        <p>
          GST rules may be amended through notifications and subsequent changes. Verify the current applicable rule and amendments using the official Government GST source.
        </p>
        <a 
          href="https://cbic-gst.gov.in/cgst-rules.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gst-official-btn"
        >
          View Official GST Rules <ExternalLink size={16} />
        </a>
      </div>

      {/* DETAIL MODAL */}
      {selectedRule && (
        <div className="gst-modal-overlay" onClick={() => setSelectedRuleId(null)}>
          <div className={`gst-modal-content ${selectedRule.status === 'Omitted' ? 'omitted-modal' : ''}`} onClick={e => e.stopPropagation()}>
            <div className="gst-modal-header">
              <div className="gst-modal-title">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <div style={{ color: 'var(--brand-gold)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {selectedRule.category}
                  </div>
                  <div className={`gst-status-badge ${selectedRule.status.toLowerCase()}`}>
                    {selectedRule.status}
                  </div>
                </div>
                <h2>{selectedRule.ruleNumber}</h2>
                <div className="gst-modal-subtitle">{selectedRule.title}</div>
              </div>
              <button className="gst-modal-close" onClick={() => setSelectedRuleId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="gst-modal-body">
              {selectedRule.status === 'Omitted' && (
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(231, 76, 60, 0.1)', border: '1px solid rgba(231, 76, 60, 0.3)', borderRadius: '8px', color: '#e74c3c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <X size={18} />
                  OMITTED: This rule is no longer active.
                </div>
              )}
              
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Category</div>
                <div className="gst-modal-val" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{selectedRule.category}</div>
              </div>
              
              {selectedRule.chapter && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Chapter</div>
                  <div className="gst-modal-val">{selectedRule.chapter}</div>
                </div>
              )}

              {selectedRule.summary && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Summary</div>
                  <div className="gst-modal-val">{selectedRule.summary}</div>
                </div>
              )}
            </div>
            
            <div className="gst-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Complete statutory provisions are available from the official source.
              </span>
              <a 
                href={selectedRule.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gst-official-btn"
              >
                View Official GST Rules <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
