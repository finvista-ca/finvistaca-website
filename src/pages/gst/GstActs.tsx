import React, { useState, useMemo } from 'react';
import { 
  Search, ChevronDown, ChevronUp, FileText, Download, ChevronLeft, ChevronRight,
  BookOpen, Layers, Hash, FileSignature, ArrowRight, ShieldCheck, Scale, Globe, Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  gstChapters, gstSections, gstImportantSections, 
  gstDefinitions, gstSchedules 
} from '../../data/gstActsData';
import './GstActs.css';

export const GstActs: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [expandedImportantSection, setExpandedImportantSection] = useState<string | null>(null);
  const [expandedSchedule, setExpandedSchedule] = useState<string | null>(null);
  
  // Section Directory Search & Pagination
  const [sectionSearch, setSectionSearch] = useState('');
  const [currentSectionPage, setCurrentSectionPage] = useState(1);
  const sectionsPerPage = 15;

  const filteredSections = useMemo(() => {
    return gstSections.filter(s => 
      s.title.toLowerCase().includes(sectionSearch.toLowerCase()) || 
      s.section.toLowerCase().includes(sectionSearch.toLowerCase()) ||
      s.chapter.toLowerCase().includes(sectionSearch.toLowerCase())
    );
  }, [sectionSearch]);

  const sectionTotalPages = Math.ceil(filteredSections.length / sectionsPerPage);
  const currentSections = filteredSections.slice(
    (currentSectionPage - 1) * sectionsPerPage, 
    currentSectionPage * sectionsPerPage
  );

  // Definition Search & Pagination
  const [definitionSearch, setDefinitionSearch] = useState('');
  const [currentDefPage, setCurrentDefPage] = useState(1);
  const defsPerPage = 8;

  const filteredDefs = useMemo(() => {
    return gstDefinitions.filter(d => 
      d.term.toLowerCase().includes(definitionSearch.toLowerCase()) || 
      d.definition.toLowerCase().includes(definitionSearch.toLowerCase())
    );
  }, [definitionSearch]);

  const defTotalPages = Math.ceil(filteredDefs.length / defsPerPage);
  const currentDefs = filteredDefs.slice(
    (currentDefPage - 1) * defsPerPage, 
    currentDefPage * defsPerPage
  );

  return (
    <div className="gst-portal-page">
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="breadcrumb" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/knowledge-base">Knowledge Base</Link>
          <span className="separator">/</span>
          <span className="current">GST Acts</span>
        </div>

        {/* HERO SECTION */}
        <div className="gst-header">
          <h1>Goods & Services Tax (GST) Acts, 2017</h1>
          <p className="subtitle">India's unified indirect taxation framework governing supply, registration, ITC, returns, and compliance.</p>
        </div>

        <div className="info-card">
          <ShieldCheck className="icon" size={28} />
          <div>
            <h3>GST Framework Information</h3>
            <div className="info-card-grid">
              <span><strong>Implemented:</strong> 1 July 2017</span>
              <span><strong>Act Type:</strong> Central Act</span>
              <span><strong>Total Sections:</strong> 174 (CGST)</span>
              <span><strong>Schedules:</strong> 3</span>
              <span><strong>Structure:</strong> Multiple Legislations</span>
              <span><strong>Scope:</strong> Nationwide Indirect Tax</span>
            </div>
          </div>
        </div>

        {/* GST AT A GLANCE */}
        <div className="overview-grid">
          <div className="stat-card">
            <span className="stat-value">CGST</span>
            <span className="stat-label">Central Act</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">IGST</span>
            <span className="stat-label">Integrated Act</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">UTGST</span>
            <span className="stat-label">Union Territory Act</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">174</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3</span>
            <span className="stat-label">Schedules</span>
          </div>
        </div>

        {/* WHAT IS GST? */}
        <h2 className="section-title">What is GST?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <Globe className="icon" size={24} style={{color: 'var(--brand-gold)'}} />
            <h4>One Nation, One Tax</h4>
            <p>GST replaced a multitude of indirect taxes like Excise Duty, VAT, Service Tax, and CST, unifying India into a single common market.</p>
          </div>
          <div className="highlight-card">
            <Landmark className="icon" size={24} style={{color: 'var(--brand-gold)'}} />
            <h4>Destination-Based</h4>
            <p>Unlike previous origin-based taxes, GST is levied at the point of consumption, ensuring revenue accrues to the state where goods or services are consumed.</p>
          </div>
          <div className="highlight-card">
            <Scale className="icon" size={24} style={{color: 'var(--brand-gold)'}} />
            <h4>Dual GST Model</h4>
            <p>Transactions within a state attract both CGST (Central) and SGST (State). Inter-state transactions attract IGST, collected by the Centre.</p>
          </div>
        </div>

        {/* GST ECOSYSTEM */}
        <h2 className="section-title">The GST Ecosystem</h2>
        <div className="process-diagram">
          <div className="process-step">
            <div className="process-icon-box"><FileSignature size={24} /></div>
            <div className="process-text">Registration</div>
          </div>
          <ArrowRight className="process-arrow" size={20} />
          <div className="process-step">
            <div className="process-icon-box"><Layers size={24} /></div>
            <div className="process-text">Supply</div>
          </div>
          <ArrowRight className="process-arrow" size={20} />
          <div className="process-step">
            <div className="process-icon-box"><FileText size={24} /></div>
            <div className="process-text">Invoice</div>
          </div>
          <ArrowRight className="process-arrow" size={20} />
          <div className="process-step">
            <div className="process-icon-box"><ShieldCheck size={24} /></div>
            <div className="process-text">ITC</div>
          </div>
          <ArrowRight className="process-arrow" size={20} />
          <div className="process-step">
            <div className="process-icon-box"><BookOpen size={24} /></div>
            <div className="process-text">Returns</div>
          </div>
        </div>

        {/* LEGISLATION HUB */}
        <h2 className="section-title">GST Legislation Hub</h2>
        <div className="legislation-hub">
          <div className="legislation-card">
            <h3>Central Goods and Services Tax Act, 2017</h3>
            <p>174 Sections governing intra-state supply, registration, ITC, assessment, and penalties.</p>
            <Link to="#" className="legislation-link" onClick={(e) => e.preventDefault()}>Explore CGST <ArrowRight size={16} /></Link>
          </div>
          <div className="legislation-card">
            <h3>Integrated GST Act, 2017</h3>
            <p>Governs inter-state supplies, imports, and exports.</p>
            <Link to="#" className="legislation-link" onClick={(e) => e.preventDefault()}>Explore IGST <ArrowRight size={16} /></Link>
          </div>
          <div className="legislation-card">
            <h3>Union Territory GST Act, 2017</h3>
            <p>Governs intra-UT supplies without legislature.</p>
            <Link to="#" className="legislation-link" onClick={(e) => e.preventDefault()}>Explore UTGST <ArrowRight size={16} /></Link>
          </div>
          <div className="legislation-card">
            <h3>GST Compensation to States Act</h3>
            <p>Provisions for compensation cess to states for revenue loss.</p>
            <Link to="#" className="legislation-link" onClick={(e) => e.preventDefault()}>Explore Act <ArrowRight size={16} /></Link>
          </div>
        </div>

        {/* CGST ACT STRUCTURE */}
        <h2 className="section-title">CGST Act Structure</h2>
        <div style={{ marginBottom: '4rem' }}>
          {gstChapters.map((chapter) => (
            <div key={chapter.id} className={`accordion-item ${expandedChapter === chapter.id ? 'active' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
              >
                <span>
                  <span className="accordion-badge">Chapter {chapter.id}</span>
                  {chapter.title}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>{chapter.range}</span>
                  <ChevronDown className="accordion-icon" size={20} />
                </div>
              </button>
              <div className="accordion-content">
                <div className="section-list">
                  {gstSections.filter(s => s.chapter === chapter.id).map(section => (
                    <div key={section.section} className="section-list-item">
                      <span className="section-num">Sec {section.section}</span>
                      <span>{section.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOST IMPORTANT SECTIONS */}
        <h2 className="section-title">Most Important Sections</h2>
        <div className="highlights-grid">
          {gstImportantSections.map((item) => (
            <div key={item.section} className="important-card">
              <div className="important-card-header">
                <h3>{item.title}</h3>
                <span className="important-card-badge">Sec {item.section}</span>
              </div>
              <p><strong>Purpose:</strong> {item.purpose}</p>
              <p>{item.explanation}</p>
              
              <button 
                className="read-more-btn"
                onClick={() => setExpandedImportantSection(expandedImportantSection === item.section ? null : item.section)}
              >
                <BookOpen size={16} />
                {expandedImportantSection === item.section ? 'Hide Statutory Text' : 'Read Official Provision'}
              </button>

              {expandedImportantSection === item.section && (
                <div className="important-content">
                  "{item.officialText}"
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GST COMPLIANCE HUB */}
        <h2 className="section-title">GST Compliance Hub</h2>
        <div className="compliance-hub-grid">
          {['Registration', 'Returns', 'Invoices', 'E-way Bill', 'Input Tax Credit', 'Refund', 'Composition Scheme', 'Reverse Charge', 'Exports', 'Imports', 'Job Work', 'Audit'].map(topic => (
            <div key={topic} className="compliance-card">
              <Hash size={24} style={{ color: 'var(--brand-gold)' }} />
              <span>{topic}</span>
            </div>
          ))}
        </div>

        {/* SECTION DIRECTORY */}
        <h2 className="section-title">CGST Section Directory</h2>
        <div className="search-container">
          <div className="search-box-custom">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by section number or keyword (e.g., 'Input Tax Credit', 'Penalty')..." 
              value={sectionSearch}
              onChange={(e) => {
                setSectionSearch(e.target.value);
                setCurrentSectionPage(1);
              }}
            />
          </div>
        </div>

        <div className="table-custom-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Section</th>
                <th>Title / Topic</th>
              </tr>
            </thead>
            <tbody>
              {currentSections.length > 0 ? (
                currentSections.map((item) => (
                  <tr key={item.section}>
                    <td>Chapter {item.chapter}</td>
                    <td style={{ fontWeight: 600, color: 'var(--brand-blue)' }}>Sec {item.section}</td>
                    <td>{item.title}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '2rem' }}>No sections found.</td>
                </tr>
              )}
            </tbody>
          </table>
          
          {sectionTotalPages > 1 && (
            <div className="pagination-custom">
              <button 
                disabled={currentSectionPage === 1}
                onClick={() => setCurrentSectionPage(prev => prev - 1)}
              >
                <ChevronLeft size={20} />
              </button>
              <span>Page {currentSectionPage} of {sectionTotalPages}</span>
              <button 
                disabled={currentSectionPage === sectionTotalPages}
                onClick={() => setCurrentSectionPage(prev => prev + 1)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* GST SCHEDULES */}
        <h2 className="section-title">GST Schedules</h2>
        <div className="highlights-grid">
          {gstSchedules.map((schedule) => (
            <div key={schedule.id} className="important-card">
              <div className="important-card-header">
                <h3>{schedule.id}</h3>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: '1rem' }}>{schedule.title}</p>
              
              <button 
                className="read-more-btn"
                onClick={() => setExpandedSchedule(expandedSchedule === schedule.id ? null : schedule.id)}
              >
                <FileText size={16} />
                {expandedSchedule === schedule.id ? 'Hide Details' : 'View Details'}
              </button>

              {expandedSchedule === schedule.id && (
                <div className="important-content" style={{ whiteSpace: 'pre-line' }}>
                  {schedule.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* IMPORTANT DEFINITIONS */}
        <h2 className="section-title">Important Definitions (Section 2)</h2>
        <div className="search-container">
          <div className="search-box-custom">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search definitions (e.g., 'Supply', 'Business')..." 
              value={definitionSearch}
              onChange={(e) => {
                setDefinitionSearch(e.target.value);
                setCurrentDefPage(1);
              }}
            />
          </div>
        </div>

        <div className="highlights-grid" style={{ marginBottom: '2rem' }}>
          {currentDefs.length > 0 ? (
            currentDefs.map((def) => (
              <div key={def.term} className="important-card" style={{ padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{def.term}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{def.definition}</p>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', gridColumn: '1 / -1' }}>
              No definitions found.
            </div>
          )}
        </div>
        
        {defTotalPages > 1 && (
          <div className="pagination-custom" style={{ borderTop: 'none', marginBottom: '4rem', padding: 0 }}>
            <button 
              disabled={currentDefPage === 1}
              onClick={() => setCurrentDefPage(prev => prev - 1)}
            >
              <ChevronLeft size={20} />
            </button>
            <span>Page {currentDefPage} of {defTotalPages}</span>
            <button 
              disabled={currentDefPage === defTotalPages}
              onClick={() => setCurrentDefPage(prev => prev + 1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
