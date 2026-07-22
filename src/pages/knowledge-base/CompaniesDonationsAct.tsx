import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, FileText, Download, ChevronLeft, ChevronRight, BookOpen, Clock, Layers, Hash, Building2, Landmark, LineChart, FileSignature, HandCoins, ArrowRight, CheckCircle2, AlertCircle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { companiesDonationsSearchIndex, companiesDonationsStatementOfObjects, companiesDonationsSection3Text } from '../../data/companiesDonationsData';
import './CompaniesDonationsAct.css';

export const CompaniesDonationsAct: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [expandedSection3, setExpandedSection3] = useState(false);
  const [expandedObjects, setExpandedObjects] = useState(false);

  // Search logic for Section Directory
  const filteredSearchIndex = useMemo(() => {
    return companiesDonationsSearchIndex.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.section.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredSearchIndex.length / pageSize));
  
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const pagedSections = filteredSearchIndex.slice((page - 1) * pageSize, page * pageSize);

  const relatedArticlesData = [
    { name: "Companies Act, 2013", slug: "companies-act" },
    { name: "Corporate Governance", slug: "corporate-governance" },
    { name: "ROC Compliance", slug: "roc-compliance" },
    { name: "Company Incorporation", slug: "company-incorporation" },
    { name: "Company Law", slug: "company-law" }
  ];

  return (
    <div className="companies-donations-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Companies (Donations to National Funds) Act, 1951' }
        ]}
        title="Companies (Donations to National Funds) Act, 1951"
        description="Reference guide explaining the legal provisions governing donations by companies to specified National Funds approved by the Central Government."
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Number:</strong> 54 of 1951</span>
              <span><strong>Enacted:</strong> 1951</span>
              <span><strong>Current Status:</strong> In Force</span>
              <span><strong>Applicability:</strong> Across India</span>
              <span><strong>Total Sections:</strong> 4</span>
              <span><strong>Purpose:</strong> Corporate Donations to National Funds</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1951</span>
            <span className="stat-label">Act Enacted</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">4</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.5rem' }}>Companies</span>
            <span className="stat-label">Applicable To</span>
          </div>
          <div className="stat-card">
            <HandCoins size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.5rem' }}>National Funds</span>
            <span className="stat-label">Governs Donations</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Resolution</span>
            <span className="stat-label">Approval Required</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.25rem' }}>Required</span>
            <span className="stat-label">Govt Approval of Funds</span>
          </div>
        </div>

        {/* About the Act */}
        <div className="intro-section">
          <h2 className="section-title">About the Act</h2>
          <p>
            The Companies (Donations to National Funds) Act, 1951 was enacted to overcome a significant legal hurdle faced by many corporate entities wishing to contribute to national welfare causes. 
          </p>
          <p>
            Historically, companies were strictly bound by their Memorandum and Articles of Association. If these foundational documents did not expressly authorize charitable donations, a company could not legally donate funds, even if the shareholders unanimously desired to do so. This created an obstacle for national funds like the Sardar Vallabhbhai National Memorial Fund.
          </p>
          <p>
            This concise 4-section legislation elegantly resolves that problem. It explicitly empowers companies to override any restrictions in their Memorandum or Articles, provided they obtain proper shareholder consent via an <strong>Extraordinary Resolution</strong>. Furthermore, it specifies that the National Fund receiving the donation must be formally approved by the Central Government, ensuring that corporate wealth is directed toward verified causes of national importance.
          </p>
        </div>

        {/* Why this Act was introduced (Timeline) */}
        <h2 className="section-title">Why This Act Was Introduced</h2>
        <div className="timeline-container" style={{ justifyContent: 'center', gap: '2%', paddingBottom: '0' }}>
          <div className="timeline-line" style={{ top: '3.5rem' }}></div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">Before 1951</div>
            <div className="timeline-text">Companies faced legal restrictions while donating to National Funds because many Articles of Association did not authorize such donations.</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1951</div>
            <div className="timeline-text">The Companies (Donations to National Funds) Act is formally enacted by Parliament.</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">After 1951</div>
            <div className="timeline-text">Companies became legally empowered to donate to approved National Funds overriding internal restrictions through shareholder approval.</div>
          </div>
        </div>

        {/* Key Highlights */}
        <h2 className="section-title">Key Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <HandCoins size={28} color="var(--brand-gold)" />
            <h4>Enables Corporate Donations</h4>
            <p>Legally permits companies to contribute financial resources to charitable funds.</p>
          </div>
          <div className="highlight-card">
            <FileSignature size={28} color="var(--brand-gold)" />
            <h4>Extraordinary Resolution Required</h4>
            <p>Mandates formal shareholder approval to ensure corporate democracy and transparency.</p>
          </div>
          <div className="highlight-card">
            <Scale size={28} color="var(--brand-gold)" />
            <h4>Overrides Memorandum Restrictions</h4>
            <p>Supersedes any prohibitive clauses in a company's foundational constitutional documents.</p>
          </div>
          <div className="highlight-card">
            <Landmark size={28} color="var(--brand-gold)" />
            <h4>Central Government Approved Funds</h4>
            <p>Donations are restricted to funds officially recognized for their national importance.</p>
          </div>
          <div className="highlight-card">
            <AlertCircle size={28} color="var(--brand-gold)" />
            <h4>National Charitable Purpose</h4>
            <p>Ensures funds are directed toward verified causes conducive to general welfare.</p>
          </div>
          <div className="highlight-card">
            <Building2 size={28} color="var(--brand-gold)" />
            <h4>Applicable to Companies</h4>
            <p>Applies to all companies incorporated and registered under the relevant Companies Act.</p>
          </div>
        </div>

        {/* Section Directory */}
        <h2 className="section-title">Section Directory</h2>
        <div className="search-container">
          <div className="search-box-custom">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by section number or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="table-custom-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Section</th>
                <th style={{ width: '40%' }}>Title</th>
                <th style={{ width: '45%' }}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {pagedSections.length > 0 ? (
                pagedSections.map((item, i) => (
                  <tr key={i}>
                    <td><strong>{item.section}</strong></td>
                    <td>{item.title}</td>
                    <td>{item.purpose}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    No sections found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="pagination-custom">
              <button 
                disabled={page === 1} 
                onClick={() => setPage(p => p - 1)}
              >
                <ChevronLeft size={16} />
              </button>
              <span>Page {page} of {totalPages}</span>
              <button 
                disabled={page === totalPages} 
                onClick={() => setPage(p => p + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Important Provision */}
        <h2 className="section-title">Important Provision</h2>
        <div className="important-card">
          <h3>Section 3 - Power of Companies to Make Donations to Certain National Funds</h3>
          <ul>
            <li><strong>Purpose:</strong> It is the core enabling provision of the Act.</li>
            <li><strong>Key Conditions:</strong> Overrides the Companies Act and any limiting clauses within the company's Memorandum or Articles of Association.</li>
            <li><strong>Extraordinary Resolution Requirement:</strong> Requires the shareholders to pass an extraordinary resolution as per Section 81 of the Indian Companies Act, 1913.</li>
            <li><strong>Central Government Approval:</strong> The National Fund receiving the donation must be established for a charitable purpose and approved by the Central Government.</li>
            <li><strong>Practical Explanation:</strong> Even if a company was strictly formed to manufacture goods and has no charitable clause, the shareholders can legally vote to donate a portion of company wealth to a recognized national fund.</li>
          </ul>
          
          <button 
            className="read-more-btn" 
            onClick={() => setExpandedSection3(!expandedSection3)}
          >
            {expandedSection3 ? 'Hide Official Provision' : 'Read Official Provision'}
            {expandedSection3 ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
          </button>
          
          {expandedSection3 && (
            <div className="important-content">
              {companiesDonationsSection3Text}
            </div>
          )}
        </div>

        {/* Explanation */}
        <h2 className="section-title">Explanatory Notes</h2>
        <div className="highlights-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="highlight-card">
            <h4>What this Act allows</h4>
            <p>It allows any incorporated company to lawfully divert corporate funds towards charitable National Funds without being penalized for acting ultra vires (beyond legal power).</p>
          </div>
          <div className="highlight-card">
            <h4>Why shareholder approval is mandatory</h4>
            <p>Corporate funds belong to the shareholders. An extraordinary resolution ensures that a significant majority agrees to the charitable donation, preventing arbitrary decisions by the Board of Directors.</p>
          </div>
          <div className="highlight-card">
            <h4>Why it overrides restrictions</h4>
            <p>To prevent the lengthy and complex legal process of amending a company's Memorandum of Association purely for the sake of making a national charitable contribution.</p>
          </div>
          <div className="highlight-card">
            <h4>Which National Funds are covered</h4>
            <p>Specifically names the Gandhi National Memorial Fund and Sardar Vallabhbhai National Memorial Fund, and extends to any other fund approved by the Central Government for charitable purposes of national importance.</p>
          </div>
        </div>

        {/* Statutory Flow */}
        <h2 className="section-title">Statutory Flow</h2>
        <div className="process-diagram">
          <div className="process-step">
            <div className="process-icon-box">
              <Building2 size={28} />
            </div>
            <div className="process-text">Company wishes to donate</div>
          </div>
          <ArrowRight className="process-arrow" size={24} />
          <div className="process-step">
            <div className="process-icon-box">
              <CheckCircle2 size={28} />
            </div>
            <div className="process-text">Check approved National Fund</div>
          </div>
          <ArrowRight className="process-arrow" size={24} />
          <div className="process-step">
            <div className="process-icon-box">
              <FileSignature size={28} />
            </div>
            <div className="process-text">Pass Extraordinary Resolution</div>
          </div>
          <ArrowRight className="process-arrow" size={24} />
          <div className="process-step">
            <div className="process-icon-box">
              <HandCoins size={28} />
            </div>
            <div className="process-text">Donation becomes legally valid</div>
          </div>
        </div>

        {/* Statement of Objects & Reasons */}
        <h2 className="section-title">Statement of Objects & Reasons</h2>
        <div className="accordion-item" style={{ marginBottom: '4rem' }}>
          <button className="accordion-header" onClick={() => setExpandedObjects(!expandedObjects)}>
            View Summary & Official Statement
            {expandedObjects ? <ChevronUp className="accordion-icon" size={20} /> : <ChevronDown className="accordion-icon" size={20} />}
          </button>
          <div className={`accordion-content ${expandedObjects ? 'active' : ''}`} style={{ padding: expandedObjects ? '1.5rem' : '0 1.5rem', maxHeight: expandedObjects ? '2000px' : '0' }}>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              <strong>Summary:</strong> The Government introduced this Act because the Associated Chambers of Commerce and various companies wanted to donate to the Sardar Vallabhbhai National Memorial Fund, but lacked the legal authority in their Articles of Association. While a previous 1948 Act solved this for the Gandhi National Memorial Fund, this 1951 Act was drafted as a consolidated measure to cover both, and any future funds approved by the Central Government.
            </div>
            <div className="important-content" style={{ marginTop: '0' }}>
              <strong>Official Text:</strong><br/><br/>
              {companiesDonationsStatementOfObjects}
            </div>
          </div>
        </div>

        {/* Related Knowledge Base */}
        <h2 className="section-title">Related Knowledge Base</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {relatedArticlesData.map((article) => (
            <Link to={`/knowledge-base/${article.slug}`} key={article.slug} className="stat-card" style={{ textDecoration: 'none', alignItems: 'flex-start', textAlign: 'left', padding: '1.5rem' }}>
              <BookOpen size={24} color="var(--brand-gold)" style={{ marginBottom: '1rem' }}/>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>{article.name}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>Explore Guide <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>


      </div>

    </div>
  );
};
