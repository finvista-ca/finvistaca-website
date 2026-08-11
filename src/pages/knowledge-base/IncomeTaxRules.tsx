import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { incomeTaxRulesData, type IncomeTaxRule } from '../../data/incomeTaxRulesData';
import { 
  Search, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Copy, 
  Link, 
  Book,
  Scale
} from 'lucide-react';
import './IncomeTaxRules.css';

const RULES_PER_PAGE = 25;

export const IncomeTaxRules: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [chapterFilter, setChapterFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(searchParams.get('rule'));
  
  const directoryRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const PRIORITY_RULES = [
    "3", "6", "6B", "6D", "17A", "18AB", "20", "26", "37BB", "37CA", "114", "114B", "17", "11", "6A"
  ];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Sync selectedRuleId with URL
  useEffect(() => {
    const ruleParam = searchParams.get('rule');
    if (ruleParam !== selectedRuleId) {
      setSelectedRuleId(ruleParam);
    }
  }, [searchParams]);

  const openRule = (ruleId: string) => {
    setSelectedRuleId(ruleId);
    setSearchParams({ rule: ruleId });
  };

  const closeRule = () => {
    setSelectedRuleId(null);
    searchParams.delete('rule');
    setSearchParams(searchParams);
  };

  // Featured Priority Rules
  const featuredRules = useMemo(() => {
    return incomeTaxRulesData.filter(r => PRIORITY_RULES.includes(r.ruleNumber));
  }, []);

  // Filter Rules
  const filteredRules = useMemo(() => {
    return incomeTaxRulesData.filter(rule => {
      // Status filter
      if (statusFilter !== 'All' && rule.status.toLowerCase() !== statusFilter.toLowerCase()) return false;
      
      // Chapter filter
      if (chapterFilter !== 'All' && rule.chapter !== chapterFilter) return false;
      
      // Search query
      if (debouncedQuery) {
        const query = debouncedQuery.toLowerCase();
        
        // Exact rule number match first (handled in sorting later, here we just filter)
        const matchNumber = rule.ruleNumber.toLowerCase().includes(query);
        const matchTitle = rule.title.toLowerCase().includes(query);
        const matchText = rule.text.toLowerCase().includes(query);
        
        if (!matchNumber && !matchTitle && !matchText) return false;
      }
      
      return true;
    }).sort((a, b) => {
      // Ranking: Exact rule number match first
      if (debouncedQuery) {
        const query = debouncedQuery.toLowerCase();
        const aExact = a.ruleNumber.toLowerCase() === query;
        const bExact = b.ruleNumber.toLowerCase() === query;
        if (aExact && !bExact) return -1;
        if (bExact && !aExact) return 1;
      }
      return 0; // Otherwise maintain original order (which should be sequential)
    });
  }, [debouncedQuery, statusFilter, chapterFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredRules.length / RULES_PER_PAGE);
  const paginatedRules = useMemo(() => {
    const startIndex = (currentPage - 1) * RULES_PER_PAGE;
    return filteredRules.slice(startIndex, startIndex + RULES_PER_PAGE);
  }, [filteredRules, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll to top of directory
    if (directoryRef.current) {
      const topOffset = directoryRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, statusFilter, chapterFilter]);

  // Extract unique chapters and statuses for filters
  const uniqueChapters = useMemo(() => {
    const chapters = new Set<string>();
    incomeTaxRulesData.forEach(r => {
      if (r.chapter) chapters.add(r.chapter);
    });
    return Array.from(chapters);
  }, []);

  const uniqueStatuses = useMemo(() => {
    const statuses = new Set<string>();
    incomeTaxRulesData.forEach(r => statuses.add(r.status));
    return Array.from(statuses);
  }, []);

  const clearFilters = () => {
    setSearchQuery('');
    setDebouncedQuery('');
    setStatusFilter('All');
    setChapterFilter('All');
  };

  // Modal navigation
  const selectedRule = useMemo(() => {
    return incomeTaxRulesData.find(r => r.ruleNumber === selectedRuleId) || null;
  }, [selectedRuleId]);

  const selectedRuleIndex = useMemo(() => {
    return incomeTaxRulesData.findIndex(r => r.ruleNumber === selectedRuleId);
  }, [selectedRuleId]);

  const goToPreviousRule = () => {
    if (selectedRuleIndex > 0) {
      openRule(incomeTaxRulesData[selectedRuleIndex - 1].ruleNumber);
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
    }
  };

  const goToNextRule = () => {
    if (selectedRuleIndex >= 0 && selectedRuleIndex < incomeTaxRulesData.length - 1) {
      openRule(incomeTaxRulesData[selectedRuleIndex + 1].ruleNumber);
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const copyRuleLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('rule', selectedRuleId!);
    copyToClipboard(url.toString());
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedRuleId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedRuleId]);

  return (
    <div className="income-tax-rules-page">
      <InternalPageHero 
        title="Income-tax Rules, 1962"
        description="Searchable directory of Income-tax Rules."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income-tax Rules' }
        ]}
      />
      
      <div className="container" style={{ marginTop: '0' }}>
        
        {/* At a Glance */}
        <KnowledgeBaseHeader
          infoTitle="Rules prescribed under the Income-tax Act for administration and implementation of the income-tax framework."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Rules Indexed', value: incomeTaxRulesData.length },
            { label: 'Primary Act', value: 'Income-tax Act, 1961' },
            { label: 'Document', value: 'Income-tax Rules, 1962' },
            { label: 'Directory', value: 'Source-based reference' }
          ]}
          statCards={[
            { value: incomeTaxRulesData.length, label: 'Rules Indexed' },
            { value: featuredRules.length, label: 'Priority Rules' },
            { value: <FileText className="stat-value" size={32} style={{ margin: '0.25rem 0', color: 'var(--text-heading)' }} />, label: 'Source-based Reference' }
          ]}
        />

        {/* Featured Rules */}
        {!searchQuery && statusFilter === 'All' && chapterFilter === 'All' && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>Frequently Referenced Rules</h2>
            <div className="featured-rules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {featuredRules.map(rule => (
                <div 
                  key={`featured-${rule.ruleNumber}`} 
                  className="rule-row"
                  style={{ padding: '1.25rem' }}
                  onClick={() => openRule(rule.ruleNumber)}
                >
                  <div className="rule-row-title-area">
                    <span className="rule-row-number">RULE {rule.ruleNumber}</span>
                    <span className="rule-row-title" style={{ fontSize: '1.1rem' }}>{rule.title}</span>
                  </div>
                  <div className="rule-row-preview" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                    {rule.text.includes("Detailed text unavailable") ? (
                      <span style={{ color: 'var(--brand-gold)' }}>{rule.text}</span>
                    ) : rule.text}
                  </div>
                  <div className="rule-row-footer" style={{ marginTop: 'auto' }}>
                    <span className="rule-view-link">View Rule <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rule Finder and Filters */}
        <div className="search-filter-container" ref={directoryRef}>
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search rules, provisions, terms..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filter-bar">
            <select 
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              {uniqueStatuses.map(status => (
                <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
              ))}
            </select>
            
            {uniqueChapters.length > 0 && (
              <select 
                className="filter-select"
                value={chapterFilter}
                onChange={(e) => setChapterFilter(e.target.value)}
              >
                <option value="All">All Chapters</option>
                {uniqueChapters.map(chapter => (
                  <option key={chapter} value={chapter}>{chapter}</option>
                ))}
              </select>
            )}

            {(searchQuery || statusFilter !== 'All' || chapterFilter !== 'All') && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Rule Directory */}
        <div className="rule-directory">
          {paginatedRules.length > 0 ? (
            paginatedRules.map(rule => (
              <div 
                key={rule.ruleNumber} 
                className="rule-row"
                onClick={() => openRule(rule.ruleNumber)}
              >
                <div className="rule-row-header">
                  <div className="rule-row-title-area">
                    <span className="rule-row-number">RULE {rule.ruleNumber}</span>
                    <span className="rule-row-title">{rule.title}</span>
                  </div>
                  <span className={`rule-status ${rule.status.toLowerCase()}`}>
                    {rule.status}
                  </span>
                </div>
                <div className="rule-row-preview">
                  {rule.text}
                </div>
                <div className="rule-row-footer">
                  <span className="rule-view-link">View Full Rule <ChevronRight size={16} /></span>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <Search className="empty-state-icon" size={48} />
              <h3>No rules found</h3>
              <p>Try a different rule number, keyword or phrase.</p>
              <button className="empty-state-btn" onClick={clearFilters}>Clear Search</button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <span className="pagination-info">
              Showing {((currentPage - 1) * RULES_PER_PAGE) + 1}–{Math.min(currentPage * RULES_PER_PAGE, filteredRules.length)} of {filteredRules.length} rules
            </span>
            <div className="pagination-controls">
              <button 
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft size={16} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                // Simple logic to show limited pages
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button 
                      key={pageNum}
                      className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                }
                
                if (pageNum === 2 && currentPage > 3) {
                  return <span key="ellipsis1" style={{ color: 'var(--text-secondary)', padding: '0.5rem' }}>...</span>;
                }
                
                if (pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                  return <span key="ellipsis2" style={{ color: 'var(--text-secondary)', padding: '0.5rem' }}>...</span>;
                }
                
                return null;
              })}
              
              <button 
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>OFFICIAL RULE REFERENCE</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Not every rule or amendment may be represented in this online reference. For complete statutory wording and the latest applicable amendments, notifications and provisions, please refer to the official Income-tax Rules document.
          </p>
          <a href="https://incometaxindia.gov.in/pages/rules/income-tax-rules-1962.aspx" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--brand-blue)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 600 }}>
            View Official Document
          </a>
        </div>

      </div>

      {/* Rule Detail Modal */}
      {selectedRule && (
        <div className="rule-modal-overlay" onClick={closeRule}>
          <div className="rule-modal-content" onClick={e => e.stopPropagation()}>
            <div className="rule-modal-header">
              <div className="rule-modal-title-area">
                <div className="rule-modal-number">RULE {selectedRule.ruleNumber}</div>
                <h2 className="rule-modal-title">{selectedRule.title}</h2>
              </div>
              <button className="rule-modal-close" onClick={closeRule}>
                <X size={24} />
              </button>
            </div>
            
            <div className="rule-modal-body" ref={modalContentRef}>
              <div className="rule-statutory-text">
                {selectedRule.text}
              </div>
            </div>
            
            <div className="rule-modal-footer">
              <div className="rule-pagination">
                <button 
                  className="rule-nav-btn" 
                  disabled={selectedRuleIndex <= 0}
                  onClick={goToPreviousRule}
                >
                  <ChevronLeft size={16} /> Previous Rule
                </button>
                <button 
                  className="rule-nav-btn" 
                  disabled={selectedRuleIndex >= incomeTaxRulesData.length - 1}
                  onClick={goToNextRule}
                >
                  Next Rule <ChevronRight size={16} />
                </button>
              </div>
              <div className="rule-utility-actions">
                <button className="utility-btn" onClick={copyRuleLink}>
                  <Link size={16} /> Copy Rule Link
                </button>
                <button className="utility-btn" onClick={() => copyToClipboard(selectedRule.text)}>
                  <Copy size={16} /> Copy Rule Text
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
