import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, AlertCircle, FileText, Download, ChevronLeft, ChevronRight, BookOpen, Clock, FileKey, Layers, Hash, Building2, Landmark, LineChart, FileSignature, Scale, Calculator, RefreshCcw, HandCoins } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';

import { interestTaxChapters, interestTaxImportantSections, interestTaxSearchIndex } from '../../data/interestTaxData';
import './InterestTaxAct.css';

export const InterestTaxAct: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Chapter Accordion State
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  // Full Act Reference Accordion State
  const [activeReference, setActiveReference] = useState<string | null>(null);
  const [activeReferenceSection, setActiveReferenceSection] = useState<string | null>(null);

  // Important Sections "Read More" State
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleChapter = (id: string) => {
    setActiveChapter(activeChapter === id ? null : id);
  };

  const toggleReference = (id: string) => {
    setActiveReference(activeReference === id ? null : id);
  };

  const toggleReferenceSection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveReferenceSection(activeReferenceSection === id ? null : id);
  };

  const toggleImportantSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Search logic for Section Index
  const filteredSearchIndex = useMemo(() => {
    return interestTaxSearchIndex.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.section.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredSearchIndex.length / pageSize));
  
  // Reset page when search changes
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const pagedSections = filteredSearchIndex.slice((page - 1) * pageSize, page * pageSize);

  const relatedArticlesData = [
    { name: "Income Tax Act", slug: "income-tax-act" },
    { name: "Gift Tax Act", slug: "gift-tax-act" },
    { name: "Wealth Tax", slug: "wealth-tax" },
    { name: "Capital Gains", slug: "capital-gains" },
    { name: "Cost Inflation Index", slug: "cost-inflation-index" }
  ];

  return (
    <div className="interest-tax-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Interest-tax Act, 1974' }
        ]}
        title="Interest-tax Act, 1974"
        description="Complete reference guide covering provisions, chargeability, assessments, appeals, penalties, and administrative procedures under the Interest-tax Act, 1974."
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Interest-tax Act</span>
              <span><strong>Year:</strong> 1974</span>
              <span><strong>Act No:</strong> 45 of 1974</span>
              <span><strong>Status:</strong> Historical Tax Legislation</span>
              <span><strong>Applicable To:</strong> Credit Institutions</span>
              <span><strong>Extends To:</strong> Whole of India</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1974</span>
            <span className="stat-label">Year Enacted</span>
          </div>
          <div className="stat-card">
            <Layers size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">5</span>
            <span className="stat-label">Total Parts</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">30</span>
            <span className="stat-label">Total Sections</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Credit</span>
            <span className="stat-label">Applicable Institutions</span>
          </div>
          <div className="stat-card">
            <Clock size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Historical</span>
            <span className="stat-label">Current Status</span>
          </div>
          <div className="stat-card">
            <FileSignature size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">CBDT</span>
            <span className="stat-label">Administered By</span>
          </div>
        </div>

        {/* About the Act */}
        <div className="intro-section">
          <h2 className="section-title">About the Act</h2>
          <p>
            The Interest-tax Act, 1974 was introduced as a specialized fiscal measure to impose a tax on the gross amount of interest received by scheduled banks, and subsequently expanded to cover various credit institutions including public financial institutions, state financial corporations, and other financial companies.
          </p>
          <p>
            The primary objective of the Act was two-fold: to raise revenue for the government and to act as an anti-inflationary measure by making borrowing more expensive, thereby regulating credit expansion. Chargeable interest typically included interest on loans and advances, commitment charges on unutilized credit, and discounts on promissory notes. 
          </p>
          <p>
            Over its lifetime, the Act witnessed significant historical amendments, notably the suspension of the tax, its re-introduction, and variations in the applicable tax rates. Following various economic reforms, the levy of Interest-tax was ultimately discontinued. <strong>No Interest-tax is chargeable on chargeable interest arising after 31 March 2000</strong>, although the provisions of the Act continue to exist for historical reference, pending assessments, and jurisprudential value.
          </p>
        </div>

        {/* Timeline Card */}
        <h2 className="section-title">Historical Timeline</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-year">1974</div>
            <div className="timeline-text">Interest-tax Act enacted</div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1975</div>
            <div className="timeline-text">Tax became applicable</div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1991</div>
            <div className="timeline-text">Major amendments introduced</div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1992</div>
            <div className="timeline-text">Credit institutions included</div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">1997</div>
            <div className="timeline-text">Tax rate reduced</div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2000</div>
            <div className="timeline-text">Levy discontinued from 1 April</div>
          </div>
        </div>

        {/* Key Highlights */}
        <h2 className="section-title">Key Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <HandCoins size={28} color="var(--brand-gold)" />
            <h4>Charge of Interest-tax</h4>
            <p>Imposed a tax on the chargeable interest of credit institutions at prescribed rates.</p>
          </div>
          <div className="highlight-card">
            <LineChart size={28} color="var(--brand-gold)" />
            <h4>Chargeable Interest</h4>
            <p>Included interest on loans, advances, commitment charges, and discounted bills.</p>
          </div>
          <div className="highlight-card">
            <Calculator size={28} color="var(--brand-gold)" />
            <h4>Computation</h4>
            <p>Allowed specific deductions such as interest established to have become a bad debt.</p>
          </div>
          <div className="highlight-card">
            <FileText size={28} color="var(--brand-gold)" />
            <h4>Return Filing</h4>
            <p>Mandatory filing of returns by credit institutions before 31st December of the assessment year.</p>
          </div>
          <div className="highlight-card">
            <Building2 size={28} color="var(--brand-gold)" />
            <h4>Assessments</h4>
            <p>Provisions for regular assessment, self-assessment, and interest escaping assessment.</p>
          </div>
          <div className="highlight-card">
            <Scale size={28} color="var(--brand-gold)" />
            <h4>Appeals</h4>
            <p>Structured appellate mechanism involving the Commissioner (Appeals) and Appellate Tribunal.</p>
          </div>
          <div className="highlight-card">
            <AlertCircle size={28} color="var(--brand-gold)" />
            <h4>Penalties</h4>
            <p>Strict penalties for concealment of interest, failure to file returns, or false statements.</p>
          </div>
          <div className="highlight-card">
            <RefreshCcw size={28} color="var(--brand-gold)" />
            <h4>Powers of Commissioner</h4>
            <p>Authority to revise orders prejudicial to revenue or upon application by the assessee.</p>
          </div>
        </div>

        {/* Section Navigator */}
        <h2 className="section-title">Section Navigator</h2>
        <div style={{ marginBottom: '4rem' }}>
          {interestTaxChapters.map((chapter) => (
            <div key={chapter.id} className={`accordion-item ${activeChapter === chapter.id ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleChapter(chapter.id)}>
                {chapter.title}
                <ChevronDown className="accordion-icon" size={20} />
              </button>
              <div className="accordion-content">
                <ul className="section-list">
                  {chapter.sections.map(section => (
                    <li key={section.id}>
                      <span className="section-num">Sec {section.id}</span>
                      <span>{section.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Sections */}
        <h2 className="section-title">Important Sections</h2>
        <div className="important-sections-grid">
          {interestTaxImportantSections.map(section => (
            <div className="important-card" key={section.section}>
              <h3>{section.section} - {section.title}</h3>
              <div className="card-summary">
                {section.summary}
              </div>
              <button 
                className="read-more-btn" 
                onClick={() => toggleImportantSection(section.section)}
              >
                {expandedSection === section.section ? 'Show Less' : 'Read More'}
                {expandedSection === section.section ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {expandedSection === section.section && (
                <div className="important-content">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Searchable Section Index */}
        <h2 className="section-title">Searchable Section Index</h2>
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
                <th style={{ width: '60%' }}>Title</th>
                <th style={{ width: '25%' }}>Category</th>
              </tr>
            </thead>
            <tbody>
              {pagedSections.length > 0 ? (
                pagedSections.map((item, i) => (
                  <tr key={i}>
                    <td><strong>{item.section}</strong></td>
                    <td>{item.title}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.chapter}</td>
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

        {/* Full Act Reference */}
        <h2 className="section-title">Full Act Reference</h2>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Expand the categories below to view the structural outline of the entire Act, section by section.
          </p>
          {interestTaxChapters.map((chapter) => (
            <div key={`ref-${chapter.id}`} className={`accordion-item ${activeReference === chapter.id ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleReference(chapter.id)}>
                {chapter.title}
                <ChevronDown className="accordion-icon" size={20} />
              </button>
              <div className="accordion-content">
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                  {chapter.sections.map(section => (
                    <div 
                      key={`ref-sec-${section.id}`} 
                      className={`accordion-item ${activeReferenceSection === section.id ? 'active' : ''}`}
                      style={{ background: 'rgba(255,255,255,0.02)', margin: '0 0 0.5rem 0' }}
                    >
                      <button 
                        className="accordion-header" 
                        onClick={(e) => toggleReferenceSection(section.id, e)}
                        style={{ padding: '1rem', fontSize: '1rem' }}
                      >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <span className="section-num" style={{ minWidth: '50px' }}>Sec {section.id}</span>
                          <span>{section.title}</span>
                        </div>
                        <ChevronDown className="accordion-icon" size={16} />
                      </button>
                      <div className="accordion-content" style={{ background: 'transparent' }}>
                        <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', padding: '0 0 1rem 4rem' }}>
                          {section.title.includes('Omitted') || section.title.includes('Repealed')
                            ? 'This section was omitted or repealed by subsequent Finance Acts.' 
                            : 'Please refer to the official document for the full statutory text of this section.'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};
