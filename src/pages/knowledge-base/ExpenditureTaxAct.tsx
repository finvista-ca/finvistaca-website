import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, AlertCircle, FileText, Download, ChevronLeft, ChevronRight, BookOpen, Clock, FileKey, Layers, Hash, Building2, Landmark, LineChart, FileSignature, Scale, Calculator, RefreshCcw, HandCoins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { expenditureTaxChapters, expenditureTaxImportantSections, expenditureTaxSearchIndex } from '../../data/expenditureTaxData';
import './ExpenditureTaxAct.css';

export const ExpenditureTaxAct: React.FC = () => {
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
    return expenditureTaxSearchIndex.filter(item => 
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
    { name: "Interest-tax Act", slug: "interest-tax-act" },
    { name: "Gift Tax Act", slug: "gift-tax-act" },
    { name: "Income-tax Act", slug: "income-tax-act" },
    { name: "Wealth Tax Act", slug: "wealth-tax-act" },
    { name: "Cost Inflation Index", slug: "cost-inflation-index" }
  ];

  return (
    <div className="expenditure-tax-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Expenditure-tax Act, 1987' }
        ]}
        title="Expenditure-tax Act, 1987"
        description="Comprehensive reference guide covering levy, applicability, chargeable expenditure, assessments, penalties, appeals, and statutory provisions under the Expenditure-tax Act, 1987."
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Expenditure-tax Act</span>
              <span><strong>Year Enacted:</strong> 1987</span>
              <span><strong>Act Number:</strong> 35 of 1987</span>
              <span><strong>Status:</strong> Historical Tax Legislation</span>
              <span><strong>Applicable To:</strong> Specified Hotels & Restaurants</span>
              <span><strong>Administered By:</strong> CBDT</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1987</span>
            <span className="stat-label">Year Enacted</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">33</span>
            <span className="stat-label">Total Sections</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.75rem' }}>Hospitality</span>
            <span className="stat-label">Applicable Businesses</span>
          </div>
          <div className="stat-card">
            <LineChart size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value" style={{ fontSize: '1.75rem' }}>10% - 20%</span>
            <span className="stat-label">Levy Rate</span>
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
            The Expenditure-tax Act, 1987 was introduced to curb ostentatious consumption and raise revenue by levying a tax on the expenditure incurred in certain classes of premium hotels and restaurants. 
          </p>
          <p>
            The Act primarily targeted hospitality businesses where room charges or service costs exceeded specific statutory thresholds. Chargeable expenditure generally included payments made for accommodation, food, drinks, and other related services provided by the establishment. Originally covering only hotels, the scope of the Act was expanded to include certain air-conditioned restaurants, though its applicability varied over time through successive Finance Acts.
          </p>
          <p>
            Due to the rationalization of indirect taxes and the evolving economic landscape, the levy of Expenditure-tax was phased out. The tax ceased to apply to restaurants after <strong>31 May 1992</strong>, and expenditure tax on hotels was entirely discontinued after <strong>31 May 2003</strong>. Today, the Act exists primarily for historical reference and jurisprudential precedent regarding the taxation of services.
          </p>
        </div>

        {/* Historical Timeline */}
        <h2 className="section-title">Historical Timeline</h2>
        <div className="timeline-container" style={{ justifyContent: 'center', gap: '2%', paddingBottom: '0' }}>
          <div className="timeline-line" style={{ top: '3.5rem' }}></div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1987</div>
            <div className="timeline-text">Expenditure-tax Act enacted</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1987</div>
            <div className="timeline-text">Tax introduced on specified hotels</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1991</div>
            <div className="timeline-text">Major amendments</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1992</div>
            <div className="timeline-text">Restaurant levy discontinued</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">1994</div>
            <div className="timeline-text">Tax rate revised</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">2002</div>
            <div className="timeline-text">Threshold revised</div>
          </div>
          
          <div className="timeline-item" style={{ flex: 1 }}>
            <div className="timeline-year">2003</div>
            <div className="timeline-text">Hotel expenditure tax discontinued</div>
          </div>
        </div>

        {/* Key Highlights */}
        <h2 className="section-title">Key Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <Building2 size={28} color="var(--brand-gold)" />
            <h4>Applicability</h4>
            <p>Applied to premium hotels and specific air-conditioned restaurants.</p>
          </div>
          <div className="highlight-card">
            <HandCoins size={28} color="var(--brand-gold)" />
            <h4>Charge of Expenditure Tax</h4>
            <p>Imposed an ad valorem tax on the total chargeable expenditure.</p>
          </div>
          <div className="highlight-card">
            <LineChart size={28} color="var(--brand-gold)" />
            <h4>Chargeable Expenditure</h4>
            <p>Covered payments for rooms, food, and drinks, excluding foreign exchange payments.</p>
          </div>
          <div className="highlight-card">
            <RefreshCcw size={28} color="var(--brand-gold)" />
            <h4>Collection & Recovery</h4>
            <p>Mandated businesses to collect the tax from customers and deposit it with the government.</p>
          </div>
          <div className="highlight-card">
            <FileText size={28} color="var(--brand-gold)" />
            <h4>Assessments</h4>
            <p>Structured procedures for regular and best judgment assessments by tax authorities.</p>
          </div>
          <div className="highlight-card">
            <Scale size={28} color="var(--brand-gold)" />
            <h4>Appeals</h4>
            <p>Right to appeal disputes to the Commissioner (Appeals) and Appellate Tribunal.</p>
          </div>
          <div className="highlight-card">
            <AlertCircle size={28} color="var(--brand-gold)" />
            <h4>Penalties</h4>
            <p>Strict fines for failing to collect tax, concealing expenditure, or ignoring notices.</p>
          </div>
          <div className="highlight-card">
            <FileSignature size={28} color="var(--brand-gold)" />
            <h4>Rule Making Powers</h4>
            <p>Empowered the CBDT to frame administrative and procedural rules for the Act.</p>
          </div>
        </div>

        {/* Section Navigator */}
        <h2 className="section-title">Section Navigator</h2>
        <div style={{ marginBottom: '4rem' }}>
          {expenditureTaxChapters.map((chapter) => (
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

        {/* Important Sections */}
        <h2 className="section-title">Important Sections</h2>
        <div className="important-sections-grid">
          {expenditureTaxImportantSections.map(section => (
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

        {/* Tax Applicability Summary */}
        <h2 className="section-title">Tax Applicability Summary</h2>
        <div className="table-custom-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Category</th>
                <th style={{ width: '60%' }}>Applicability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hotels</strong></td>
                <td>Applicable up to 31 May 2003</td>
              </tr>
              <tr>
                <td><strong>Restaurants</strong></td>
                <td>Applicable up to 31 May 1992</td>
              </tr>
              <tr>
                <td><strong>Tax Rate</strong></td>
                <td>As prescribed under the Act</td>
              </tr>
              <tr>
                <td><strong>Current Status</strong></td>
                <td>Historical Reference</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Full Act Reference */}
        <h2 className="section-title">Full Act Reference</h2>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Expand the categories below to view the structural outline of the entire Act, section by section.
          </p>
          {expenditureTaxChapters.map((chapter) => (
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
                          {section.title.includes('Repealed')
                            ? 'This section was repealed by subsequent Finance Acts.' 
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

        {/* Related Knowledge Base Pages */}
        <h2 className="section-title">Related Legal References</h2>
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
