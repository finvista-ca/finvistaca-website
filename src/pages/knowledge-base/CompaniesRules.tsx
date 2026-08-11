import React, { useState, useMemo, useEffect, useRef } from 'react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { companiesRulesData, relatedActs } from '../../data/companiesRulesData';
import { Search, BookOpen, ExternalLink, FileText, ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CompaniesRules.css';

export const CompaniesRules: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const directoryRef = useRef<HTMLDivElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(companiesRulesData.map(rule => rule.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  // Filter Rules
  const filteredRuleSets = useMemo(() => {
    return companiesRulesData.filter(ruleSet => {
      const matchesCategory = activeCategory === 'All' || ruleSet.category === activeCategory;
      if (!matchesCategory) return false;

      if (!debouncedQuery) return true;

      const query = debouncedQuery.toLowerCase();
      const matchesTitle = ruleSet.title.toLowerCase().includes(query);
      const matchesDesc = ruleSet.description.toLowerCase().includes(query);
      const matchesForms = ruleSet.forms?.some(f => f.formNo.toLowerCase().includes(query) || f.purpose.toLowerCase().includes(query));
      const matchesPopular = ruleSet.popularRules?.some(r => r.ruleNo.includes(query) || r.title.toLowerCase().includes(query));

      return matchesTitle || matchesDesc || matchesForms || matchesPopular;
    });
  }, [debouncedQuery, activeCategory]);

  // Extract all forms for the Forms & Compliance section
  const allForms = useMemo(() => {
    const formsList: { formNo: string; purpose: string; ruleSetTitle: string }[] = [];
    companiesRulesData.forEach(ruleSet => {
      if (ruleSet.forms) {
        ruleSet.forms.forEach(form => {
          formsList.push({ ...form, ruleSetTitle: ruleSet.title });
        });
      }
    });
    return formsList;
  }, []);

  // Extract popular rules for the Featured section
  const popularRulesList = useMemo(() => {
    const list: { ruleNo: string; title: string; ruleSetTitle: string; officialSourceUrl: string }[] = [];
    companiesRulesData.forEach(ruleSet => {
      if (ruleSet.popularRules) {
        ruleSet.popularRules.forEach(rule => {
          list.push({ ...rule, ruleSetTitle: ruleSet.title, officialSourceUrl: ruleSet.officialSourceUrl });
        });
      }
    });
    // Shuffle and pick top 6 for display
    return list.slice(0, 6);
  }, []);

  return (
    <div className="companies-rules-page">
      <InternalPageHero 
        title="Companies Rules, 2014"
        description="Rules prescribed under the Companies Act, 2013 for implementing detailed corporate compliance, governance, filing and regulatory requirements."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Companies Rules' }
        ]}
      />

      <div className="container">
        
        {/* At a Glance Statistics */}
        <KnowledgeBaseHeader
          infoTitle="Rules prescribed under the Companies Act, 2013 for implementing detailed corporate compliance, governance, filing and regulatory requirements."
          infoIcon={<BookOpen className="icon" size={24} />}
          infoGrid={[
            { label: 'Primary Legislation', value: 'Companies Act, 2013' },
            { label: 'Rule Framework', value: 'Companies Rules, 2014' },
            { label: 'Administered By', value: 'Ministry of Corporate Affairs' },
            { label: 'Source', value: 'MCA / India Code' }
          ]}
          statCards={[
            { value: 'Act', label: 'Primary Legislation' },
            { value: 'Rules', label: 'Rule Framework' },
            { value: 'MCA', label: 'Administered By' }
          ]}
        />

        {/* How the Act & Rules Work Together */}
        <div className="visual-hierarchy-card">
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--brand-gold)' }}>How the Act & Rules Work Together</h2>
          <div className="hierarchy-flow">
            <div className="hierarchy-node">Companies Act, 2013<br/><span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-secondary)' }}>Provides the statutory framework</span></div>
            <ArrowDown className="hierarchy-arrow" />
            <div className="hierarchy-node">Companies Rules<br/><span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-secondary)' }}>Provide detailed procedures & requirements</span></div>
            <ArrowDown className="hierarchy-arrow" />
            <div className="hierarchy-node">MCA / ROC Compliance<br/><span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-secondary)' }}>Execution and Filing</span></div>
          </div>
        </div>

        {/* Featured Rules Section */}
        {!searchQuery && activeCategory === 'All' && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>Frequently Referenced Companies Rules</h2>
            <div className="featured-rules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {popularRulesList.map((rule, idx) => (
                <div key={idx} className="rule-card" style={{ padding: '1.25rem', minHeight: 'auto' }}>
                  <div className="rule-category" style={{ marginBottom: '0.5rem' }}>{rule.ruleSetTitle}</div>
                  <div className="rule-title" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Rule {rule.ruleNo}: {rule.title}</div>
                  <a href={rule.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="view-link" style={{ marginTop: 'auto' }}>
                    View Official Source <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rule Finder and Filters */}
        <div className="search-filter-container" ref={directoryRef}>
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search Companies Rules, forms, compliance requirements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-pills">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rule Sets Directory */}
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>Companies Rules at a Glance</h2>
        <div className="rules-grid">
          {filteredRuleSets.map(ruleSet => (
            <div key={ruleSet.id} className="rule-card">
              <span className="rule-category">{ruleSet.category}</span>
              <h3 className="rule-title">{ruleSet.title}</h3>
              <p className="rule-desc">{ruleSet.description}</p>
              
              <div className="rule-meta">
                <span className="rule-source">
                  Source: MCA
                </span>
                <a 
                  href={ruleSet.officialSourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-link"
                >
                  View Rules <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
          
          {filteredRuleSets.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <BookOpen size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ color: 'var(--text-secondary)' }}>No rule sets found matching your search.</h3>
            </div>
          )}
        </div>

        {/* Forms & Compliance Section */}
        {!searchQuery && activeCategory === 'All' && (
          <div className="forms-section">
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>Important Forms & Compliance</h2>
            <div className="forms-grid">
              {allForms.map((form, index) => (
                <div key={index} className="form-item">
                  <FileText className="form-icon" size={24} />
                  <div>
                    <span className="form-number">{form.formNo}</span>
                    <span className="form-purpose">{form.purpose}</span>
                    <div style={{ fontSize: '0.8rem', color: 'var(--brand-gold)', marginTop: '0.25rem' }}>{form.ruleSetTitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Official Reference Disclaimer */}
        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--brand-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>OFFICIAL COMPANIES RULES</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Companies Rules are subject to amendments, notifications and updates. For complete and current statutory provisions, users should verify the applicable rules through official MCA / India Code sources.
          </p>
          <a href="https://www.mca.gov.in/MinistryV2/companylawrules.html" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--brand-blue)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 600 }}>
            View Official Source
          </a>
        </div>

        {/* Related Knowledge Base */}
        {/* Related Acts */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>Related Acts & Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {relatedActs.map((act, idx) => (
              <Link to={act.path} key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '1.5rem', 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '12px',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'none';
              }}>
                <span style={{ fontWeight: 600 }}>{act.title}</span>
                <ArrowRight size={18} style={{ color: 'var(--brand-gold)' }} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
