import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Landmark, Hash, Building2, Clock, FileSignature, ArrowRight, AlertTriangle } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { 
  companySecretariesChapters, 
  importantCompanySecretariesSections, 
  majorRegulatoryAreas, 
  relatedActs,
  companySecretariesSections
} from '../../data/companySecretariesActData';
import './CompanySecretariesAct.css';

const ITEMS_PER_PAGE = 20;

export const CompanySecretariesAct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const IconMap: Record<string, React.FC<any>> = {
    Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Search, Landmark, Hash, Building2, Clock, FileSignature, AlertTriangle
  };

  // Filter Sections based on Search
  const filteredSections = useMemo(() => {
    if (!searchQuery) return companySecretariesSections;
    
    const query = searchQuery.toLowerCase();
    
    return companySecretariesSections.filter(section => 
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredSections.length / ITEMS_PER_PAGE);
  const currentSections = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSections.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSections, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll to the top of the directory
    const directoryElement = document.getElementById('sections-directory');
    if (directoryElement) {
      const topOffset = directoryElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="company-secretaries-act-page">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Company Secretaries Act' }
        ]}
        title="Company Secretaries Act, 1980"
        description="An Act to make provision for the regulation and development of the profession of Company Secretaries."
      />

      <div className="container">
        
        {/* Information Card (Act Information) */}
        <div className="info-card">
          <Landmark className="icon" size={32} />
          <div style={{ width: '100%' }}>
            <h3>Act Information</h3>
            <div className="info-card-grid">
              <span><strong>Act Name:</strong> Company Secretaries Act, 1980</span>
              <span><strong>Year Enacted:</strong> 1980</span>
              <span><strong>Act Number:</strong> 56 of 1980</span>
              <span><strong>Date of Assent:</strong> 10 December 1980</span>
              <span><strong>Extent:</strong> Whole of India</span>
              <span><strong>Applicable To:</strong> Regulation of Company Secretaries Profession</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="overview-grid">
          <div className="stat-card">
            <BookOpen size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">1980</span>
            <span className="stat-label">YEAR ENACTED</span>
          </div>
          <div className="stat-card">
            <Hash size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">10</span>
            <span className="stat-label">CHAPTERS</span>
          </div>
          <div className="stat-card">
            <Scale size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">2</span>
            <span className="stat-label">SCHEDULES</span>
          </div>
          <div className="stat-card">
            <Building2 size={24} color="var(--brand-blue)" style={{ marginBottom: '1rem' }}/>
            <span className="stat-value">Whole of India</span>
            <span className="stat-label">EXTENT</span>
          </div>
        </div>

        {/* About the Act */}
        <div className="content-section">
          <h2>About the Act</h2>
          <div className="glass-panel text-content">
            <p>The Company Secretaries Act, 1980 makes provision for the regulation and development of the profession of Company Secretaries in India. It establishes the statutory framework for the Institute of Company Secretaries of India (ICSI), maintaining the Register of Members, and governing the issuance of Certificates of Practice.</p>
            <p>The Act also lays down the constitution of the Council of the Institute, Regional Councils, and a comprehensive disciplinary mechanism (including the Disciplinary Directorate, Board of Discipline, and Disciplinary Committee) to handle professional and other misconduct. Additionally, it establishes the Quality Review Board to oversee and improve service quality among members.</p>
          </div>
        </div>

        {/* Major Regulatory Areas */}
        <div className="content-section">
          <h2>Major Regulatory Areas</h2>
          <div className="topics-grid">
            {majorRegulatoryAreas.map((topic, index) => {
              const Icon = IconMap[topic.icon] || FileText;
              return (
                <div key={index} className="topic-card-static">
                  <div className="topic-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disciplinary Framework */}
        <div className="content-section">
          <h2>Professional Conduct & Disciplinary Framework</h2>
          <div className="glass-panel text-content">
            <p>The Act provides robust mechanisms for investigation, disciplinary proceedings, and appeals regarding professional and other misconduct.</p>
            <div className="disciplinary-flow">
              <div className="flow-step">
                <h4>Director (Discipline)</h4>
                <p>Investigates complaints/information and forms a prima facie opinion.</p>
              </div>
              <div className="flow-arrow"><ArrowRight size={20} /></div>
              <div className="flow-step">
                <h4>Board of Discipline / Disciplinary Committee</h4>
                <p>Matters concerning misconduct are placed before the Board or Committee as applicable, possessing civil court powers for inquiry.</p>
              </div>
              <div className="flow-arrow"><ArrowRight size={20} /></div>
              <div className="flow-step">
                <h4>Appellate Authority</h4>
                <p>Aggrieved members may appeal disciplinary decisions to the Appellate Authority.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Review Board */}
        <div className="content-section">
          <h2>Quality Review Board (Sec 29A–29D)</h2>
          <div className="glass-panel text-content">
            <p>The Act mandates the establishment of the Quality Review Board by the Central Government. Its primary functions include:</p>
            <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
              <li>Making recommendations to the Council on the quality of services provided by the members of the Institute.</li>
              <li>Reviewing the quality of services provided by the members of the Institute, including secretarial audit services.</li>
              <li>Guiding members to improve the quality of services and adherence to various statutory and regulatory requirements.</li>
            </ul>
          </div>
        </div>

        {/* Schedules */}
        <div className="content-section">
          <h2>Schedules</h2>
          <div className="schedules-grid">
            <div className="schedule-card">
              <h3>First Schedule</h3>
              <p>Contains provisions concerning professional misconduct linked to sections 21(3), 21A(3), and 22.</p>
            </div>
            <div className="schedule-card">
              <h3>Second Schedule</h3>
              <p>Contains professional misconduct provisions including confidentiality, due diligence, and reporting-related requirements linked to sections 21(3), 21B(3), and 22.</p>
            </div>
          </div>
        </div>

        {/* Penalties */}
        <div className="content-section">
          <h2>Penalties & Restrictions</h2>
          <div className="penalties-grid">
            <div className="penalty-card">
              <h4>Section 24</h4>
              <p>Penalty for falsely claiming to be a member or using the designation unlawfully.</p>
            </div>
            <div className="penalty-card">
              <h4>Section 25</h4>
              <p>Penalty for using name of the Council or awarding degree of Company Secretary unlawfully.</p>
            </div>
            <div className="penalty-card">
              <h4>Section 26</h4>
              <p>Prohibits companies from engaging in Company Secretaryship.</p>
            </div>
            <div className="penalty-card">
              <h4>Section 27</h4>
              <p>Penalizes unqualified persons (non-members) for signing documents on behalf of a Company Secretary in practice.</p>
            </div>
          </div>
        </div>

        {/* Chapter Directory */}
        <div className="content-section">
          <h2>Chapter Directory</h2>
          <div className="chapter-cards-grid">
            {companySecretariesChapters.map((chap, idx) => (
              <div className="chapter-card" key={idx}>
                <div className="chap-header">
                  <span className="chap-number">CHAPTER {chap.chapter}</span>
                  <span className="chap-range">{chap.sectionRange}</span>
                </div>
                <h3 className="chap-title">{chap.title}</h3>
                <p className="chap-desc">{chap.description}</p>
                <div className="chap-footer">
                  <span className="chap-count">{chap.provisionCount} Provisions</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Note: The numbering strictly follows the official Act. Section 30 is omitted, and Chapter VIII is skipped in the official numbering from Chapter VIIA to Chapter IX.
          </p>
        </div>

        {/* Important Sections */}
        <div className="content-section">
          <h2>Important Sections</h2>
          <div className="important-sections-grid">
            {importantCompanySecretariesSections.map((section, idx) => section && (
              <div className="important-section-card" key={idx}>
                <div className="is-header">
                  <span className="is-badge">Section {section.section}</span>
                </div>
                <h3 className="is-title">{section.title}</h3>
                <p className="is-desc">{section.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Sections Directory */}
        <div className="content-section" id="sections-directory">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search sections, chapters and provisions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="sections-list">
            {currentSections.length > 0 ? (
              currentSections.map((section, idx) => (
                <div className="section-card-simple" key={idx}>
                  <div className="sc-header">
                    <span className="sc-number">Section {section.section}</span>
                  </div>
                  <h4 className="sc-title">{section.title}</h4>
                  <p className="sc-desc">{section.explanation}</p>
                </div>
              ))
            ) : (
              <div className="no-results">
                <Search size={48} color="rgba(255, 255, 255, 0.1)" />
                <p>No provisions found matching "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <div className="page-numbers">
                <span className="page-info">Page {currentPage} of {totalPages}</span>
              </div>
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Related Acts Footer */}
        <div className="content-section">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Related Knowledge Base</h2>
          <div className="related-acts-grid">
            {relatedActs.map((act, index) => (
              <Link to={act.path} key={index} className="related-act-card">
                <FileText size={20} />
                <span>{act.title}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
