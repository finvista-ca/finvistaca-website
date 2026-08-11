import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gstFormsData, type GSTForm } from '../../data/gstFormsData';
import { Search, X, ChevronDown, ChevronRight, FileText, ExternalLink, ShieldCheck, AlertCircle, Bookmark } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstForms.css';

const FORMS_PER_PAGE = 20;

export const GstForms: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIntent, setSelectedIntent] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedForm, setSelectedForm] = useState<GSTForm | null>(null);

  // Extract unique categories for filter dropdown
  const categories = useMemo(() => {
    const catSet = new Set(gstFormsData.map(f => f.category));
    return ['All', ...Array.from(catSet).sort()];
  }, []);

  // Form families for navigation pills
  const formFamilies = [
    'GSTR', 'EWB', 'INS', 'CMP', 'REG', 'ITC', 'PCT', 
    'PMT', 'RFD', 'ASMT', 'ADT', 'ARA', 'APL', 'TRAN', 'DRC', 'CPD'
  ];

  // Map intents to relevant categories/keywords
  const intentMap: Record<string, { categories: string[], keywords: string[] }> = {
    'File a return': { categories: ['GSTR'], keywords: ['return'] },
    'Register under GST': { categories: ['REG', 'ENR'], keywords: ['registration', 'enrolment'] },
    'Claim / transfer ITC': { categories: ['ITC'], keywords: ['input tax credit', 'itc'] },
    'Apply for refund': { categories: ['RFD'], keywords: ['refund'] },
    'Pay / manage tax': { categories: ['PMT'], keywords: ['payment', 'challan', 'liability'] },
    'Handle assessment': { categories: ['ASMT'], keywords: ['assessment'] },
    'Handle audit': { categories: ['ADT'], keywords: ['audit'] },
    'Appeal an order': { categories: ['APL'], keywords: ['appeal'] },
    'Manage composition scheme': { categories: ['CMP'], keywords: ['composition'] },
    'Handle e-way bill': { categories: ['EWB'], keywords: ['e-way', 'eway'] },
    'Handle transitional compliance': { categories: ['TRAN'], keywords: ['transitional'] },
    'Handle recovery / demand': { categories: ['DRC'], keywords: ['demand', 'recovery', 'show cause'] },
    'GST practitioner': { categories: ['PCT'], keywords: ['practitioner'] },
    'Advance ruling': { categories: ['ARA'], keywords: ['advance ruling'] },
  };

  const intents = Object.keys(intentMap);

  // Filter logic
  const filteredData = useMemo(() => {
    return gstFormsData.filter(form => {
      const q = searchQuery.toLowerCase();
      
      const matchesSearch = 
        form.formNumber.toLowerCase().includes(q) ||
        form.title.toLowerCase().includes(q) ||
        form.category.toLowerCase().includes(q) ||
        (form.purpose && form.purpose.toLowerCase().includes(q));

      const matchesCategory = selectedCategory === 'All' || form.category === selectedCategory;

      let matchesIntent = true;
      if (selectedIntent) {
        const intentLogic = intentMap[selectedIntent];
        if (intentLogic) {
          const inCat = intentLogic.categories.includes(form.category);
          const hasKeyword = intentLogic.keywords.some(kw => 
            form.title.toLowerCase().includes(kw) || 
            (form.purpose && form.purpose.toLowerCase().includes(kw))
          );
          matchesIntent = inCat || hasKeyword;
        }
      }

      return matchesSearch && matchesCategory && matchesIntent;
    });
  }, [searchQuery, selectedCategory, selectedIntent]);

  // Sort: Exact match for search query first (formNumber), then alphabetically by formNumber
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data.sort((a, b) => {
        const aExact = a.formNumber.toLowerCase() === q ? 1 : 0;
        const bExact = b.formNumber.toLowerCase() === q ? 1 : 0;
        if (aExact !== bExact) return bExact - aExact;
        return a.formNumber.localeCompare(b.formNumber);
      });
    } else {
      // General sorting by category then form number
      data.sort((a, b) => {
        if (a.category === b.category) {
          // Attempt numeric sort if possible, else string
          const aMatch = a.formNumber.match(/\d+/);
          const bMatch = b.formNumber.match(/\d+/);
          if (aMatch && bMatch) {
             const aNum = parseInt(aMatch[0], 10);
             const bNum = parseInt(bMatch[0], 10);
             if (aNum !== bNum) return aNum - bNum;
          }
          return a.formNumber.localeCompare(b.formNumber);
        }
        return a.category.localeCompare(b.category);
      });
    }
    return data;
  }, [filteredData, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / FORMS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * FORMS_PER_PAGE;
    return sortedData.slice(start, start + FORMS_PER_PAGE);
  }, [sortedData, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('directory')?.offsetTop ? document.getElementById('directory')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  const handleIntentSelect = (intent: string) => {
    if (selectedIntent === intent) {
      setSelectedIntent('');
    } else {
      setSelectedIntent(intent);
      setSelectedCategory('All');
    }
    setCurrentPage(1);
  };

  const handleFamilySelect = (family: string) => {
    if (selectedCategory === family) {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(family);
      setSelectedIntent('');
    }
    setCurrentPage(1);
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const openModal = (form: GSTForm) => {
    setSelectedForm(form);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedForm(null);
    document.body.style.overflow = 'auto';
  };

  const commonlyReferencedIds = ['GSTR-1', 'GSTR-3B', 'GSTR-9', 'REG-01', 'ITC-01', 'RFD-01', 'PMT-06', 'EWB-01', 'DRC-03'];
  const commonlyReferenced = gstFormsData.filter(f => commonlyReferencedIds.includes(f.formNumber)).slice(0, 8);

  return (
    <div className="gst-forms-page-wrapper">
      <InternalPageHero 
        title="GST Forms"
        description="Search and explore GST forms across returns, registration, input tax credit, refunds, assessment, appeals, payments and other compliance processes."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST Forms' }
        ]}
      />
      
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Search and explore GST forms across returns, registration, input tax credit, refunds, assessment, appeals, payments and other compliance processes."
          infoIcon={<FileText className="icon" size={24} />}
          infoGrid={[
            { label: 'Forms Indexed', value: gstFormsData.length },
            { label: 'Form Categories', value: categories.length - 1 },
            { label: 'Framework', value: 'GST / CGST Rules' },
            { label: 'Form Reference', value: 'Repository' }
          ]}
          statCards={[
            { value: gstFormsData.length, label: 'Forms Indexed' },
            { value: categories.length - 1, label: 'Categories' },
            { value: 'GST', label: 'Framework' },
            { value: 'Repository', label: 'Reference' }
          ]}
        />
      </div>

      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Find A GST Form (Intent) */}
        <section className="gst-finder-section">
          <div className="gst-finder-header">
            <h2>Find a GST Form</h2>
            <p>Select a common topic or task to filter the directory.</p>
          </div>
          <div className="gst-intent-wrapper">
            {intents.map(intent => (
              <button 
                key={intent}
                className={`gst-intent-btn ${selectedIntent === intent ? 'active' : ''}`}
                onClick={() => handleIntentSelect(intent)}
              >
                {intent}
              </button>
            ))}
          </div>
        </section>

        {/* Commonly Referenced Forms */}
        {commonlyReferenced.length > 0 && (
          <section className="gst-commonly-referenced">
            <h3>Commonly Referenced GST Forms</h3>
            <div className="gst-common-grid">
              {commonlyReferenced.map(form => (
                <div key={form.id} className="gst-common-card" onClick={() => openModal(form)}>
                  <div className="gst-common-icon"><Bookmark size={20} /></div>
                  <div className="gst-common-content">
                    <h4>{form.formNumber}</h4>
                    <p>{form.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Directory Section */}
        <section id="directory" className="gst-directory-section">
          <h2>GST Form Directory</h2>
          
          <div className="gst-controls">
            <div className="gst-search-wrapper">
              <Search size={20} className="gst-search-icon" />
              <input 
                type="text" 
                placeholder="Search forms by number, title, or category (e.g. GSTR-3B)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gst-search-input"
              />
            </div>
            
            <div className="gst-filters">
              <select 
                value={selectedCategory} 
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedIntent('');
                }}
                className="gst-filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Form Families Navigation */}
          <section className="gst-family-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Browse by Form Family</h3>
            <div className="gst-family-wrapper">
              {formFamilies.map(family => (
                <button
                  key={family}
                  className={`gst-family-btn ${selectedCategory === family ? 'active' : ''}`}
                  onClick={() => handleFamilySelect(family)}
                >
                  {family}
                </button>
              ))}
            </div>
          </section>


          <div className="gst-grid">
            {currentData.length > 0 ? (
              currentData.map(form => (
                <div key={form.id} className="gst-card" onClick={() => openModal(form)}>
                  <div className="gst-card-header">
                    <span className="gst-number">{form.formNumber}</span>
                    <span className="gst-status-badge current">{form.category}</span>
                  </div>
                  <div className="gst-card-title">{form.title}</div>
                  <div className="gst-card-footer">
                    <span className="gst-view-btn">View Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '3rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', gridColumn: '1 / -1' }}>
                <AlertCircle size={40} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>No forms found</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedIntent(''); }}
                  style={{ marginTop: '1rem', background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer' }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="gst-pagination">
              <button 
                className="gst-page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="gst-page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="gst-page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </section>

        {/* Official Reference Section */}
        <section className="gst-official-ref-box">
          <h3><ShieldCheck size={28} style={{ color: 'var(--brand-gold)' }} /> Need the actual GST Form PDF?</h3>
          <p>
            Use the GST Forms repository to locate the relevant form and access the available document/PDF.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://irkandassociates.com/GstForms.aspx" target="_blank" rel="noopener noreferrer" className="gst-official-btn">
              View All GST Forms & PDFs <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* Educational Content */}
        <section className="gst-clarification-section">
          <div className="gst-clarification-grid">
            <div className="gst-clarification-card">
              <h3>GST Forms vs GST Returns</h3>
              <div className="gst-clarification-box">
                <h4>GST Forms</h4>
                <p>A broader collection of applications, declarations, notices, orders, statements, certificates, and other prescribed forms used in GST compliance.</p>
              </div>
              <div className="gst-clarification-box">
                <h4>GST Returns</h4>
                <p>Specific statutory return filings (such as GSTR-1, GSTR-3B, and GSTR-9) used to report sales, purchases, and tax liability.</p>
              </div>
            </div>
            
            <div className="gst-clarification-card">
              <h3>GST Forms vs GST Challans</h3>
              <div className="gst-clarification-box">
                <h4>Forms</h4>
                <p>Forms cover various GST compliance processes ranging from registration to appeals and refunds.</p>
              </div>
              <div className="gst-clarification-box">
                <h4>Challans</h4>
                <p>Challans (like PMT-06) are specifically associated with the payment or deposit of tax, interest, penalty, or other amounts into the electronic cash ledger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginBottom: '4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Disclaimer:</strong> This directory is provided as a reference index. Form availability, format, and applicability may change. Verify the latest requirements from the relevant GST authority and applicable law before filing.
        </div>

        <div className="related-kb-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "GST Circulars", path: "/knowledge-base/gst-circulars" },
              { title: "GST Notifications", path: "/knowledge-base/gst-notifications" },
              { title: "GST Acts", path: "/knowledge-base/gst-acts" },
              { title: "GST Rules", path: "/knowledge-base/gst-rules" },
              { title: "GST Orders", path: "/knowledge-base/gst-orders" }
            ].map((item, idx) => (
              <Link key={idx} to={item.path} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center', transition: 'all 0.2s' }}>
                <span style={{ fontWeight: 500 }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Form Details Modal */}
      {selectedForm && (
        <div className="gst-modal-overlay" onClick={closeModal}>
          <div className="gst-modal-content" onClick={e => e.stopPropagation()}>
            <div className="gst-modal-header">
              <div className="gst-modal-title">
                <h2>{selectedForm.formNumber}</h2>
                <div className="gst-modal-subtitle">{selectedForm.category}</div>
              </div>
              <button className="gst-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            <div className="gst-modal-body">
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Title / Description</div>
                <div className="gst-modal-val" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--brand-gold)' }}>
                  {selectedForm.title}
                </div>
              </div>
              
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Category</div>
                <div className="gst-modal-val">{selectedForm.category}</div>
              </div>

              {selectedForm.purpose && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Purpose</div>
                  <div className="gst-modal-val">{selectedForm.purpose}</div>
                </div>
              )}

              {selectedForm.relevantSections && selectedForm.relevantSections.length > 0 && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Relevant Sections</div>
                  <div className="gst-modal-val">{selectedForm.relevantSections.join(', ')}</div>
                </div>
              )}

              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Source Repository</div>
                <div className="gst-modal-val">{selectedForm.source}</div>
              </div>
            </div>
            <div className="gst-modal-footer">
              <a href={selectedForm.sourceUrl} target="_blank" rel="noopener noreferrer" className="gst-official-btn" style={{ width: '100%', textAlign: 'center' }}>
                View All GST Forms & PDFs <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
