import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gstNotificationsData, type GSTNotification } from '../../data/gstNotificationsData';
import { Search, Book } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstNotifications.css';

const NOTIFICATIONS_PER_PAGE = 20;

export const GstNotifications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotif, setSelectedNotif] = useState<GSTNotification | null>(null);

  // Extract unique values for filters
  const years = useMemo(() => {
    const yrSet = new Set(gstNotificationsData.map(n => n.year.toString()));
    return ['All', ...Array.from(yrSet).sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const categories = useMemo(() => {
    const catSet = new Set(gstNotificationsData.map(n => n.category || 'Other CGST'));
    return ['All', ...Array.from(catSet).sort()];
  }, []);

  const statuses = useMemo(() => {
    const statusSet = new Set(gstNotificationsData.map(n => n.status).filter(Boolean) as string[]);
    return ['All', ...Array.from(statusSet).sort()];
  }, []);

  // Filter logic
  const filteredData = useMemo(() => {
    return gstNotificationsData.filter(notif => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        notif.notificationNumber.toLowerCase().includes(q) ||
        notif.title.toLowerCase().includes(q) ||
        (notif.category || '').toLowerCase().includes(q) ||
        notif.year.toString().includes(q) ||
        (notif.summary || '').toLowerCase().includes(q);

      const matchesYear = selectedYear === 'All' || notif.year.toString() === selectedYear;
      const matchesCategory = selectedCategory === 'All' || (notif.category || 'Other CGST') === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || notif.status === selectedStatus;

      return matchesSearch && matchesYear && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus]);

  // Sort: Exact match for search query first, then by year descending
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data.sort((a, b) => {
        const aExact = a.notificationNumber.toLowerCase() === q ? 1 : 0;
        const bExact = b.notificationNumber.toLowerCase() === q ? 1 : 0;
        if (aExact !== bExact) return bExact - aExact;
        return b.year - a.year;
      });
    } else {
      data.sort((a, b) => b.year - a.year);
    }
    return data;
  }, [filteredData, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / NOTIFICATIONS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * NOTIFICATIONS_PER_PAGE;
    return sortedData.slice(start, start + NOTIFICATIONS_PER_PAGE);
  }, [sortedData, currentPage]);

  // Recent notifications (top 3 by year)
  const recentNotifications = useMemo(() => {
    return [...gstNotificationsData].sort((a, b) => b.year - a.year).slice(0, 3);
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('directory')?.offsetTop ? document.getElementById('directory')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  const openModal = (notif: GSTNotification) => {
    setSelectedNotif(notif);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNotif(null);
    document.body.style.overflow = 'auto';
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus]);

  return (
    <div className="gst-notifs-page-wrapper">
      
      <InternalPageHero 
        title="CGST Tax Notifications"
        description="Explore the official directory of Central Goods and Services Tax (CGST) notifications issued by the GST Council."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST Notifications' }
        ]}
      />
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore the official directory of Central Goods and Services Tax (CGST) notifications issued by the GST Council."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Notifications Indexed', value: gstNotificationsData.length },
            { label: 'Framework', value: 'CGST' },
            { label: 'Directory', value: 'Searchable' },
            { label: 'Regulatory Authority', value: 'GST Council / MoF' }
          ]}
          statCards={[
            { value: gstNotificationsData.length, label: 'Notifications Indexed' },
            { value: 'CGST', label: 'Framework' },
            { value: 'Searchable', label: 'Notification Directory' },
            { value: 'MoF', label: 'Regulatory Authority' }
          ]}
        />
      </div>

      {/* Recent GST Notifications */}
      <section className="gst-recent-section">
        <h2>Recent GST Notifications</h2>
        <div className="gst-recent-grid">
          {recentNotifications.map(notif => (
            <div key={notif.id} className="gst-recent-card" onClick={() => openModal(notif)}>
              <div className="gst-recent-number">{notif.notificationNumber}</div>
              <div className="gst-recent-title">{notif.title}</div>
              <div className="gst-recent-meta">
                <span className="gst-recent-cat">{notif.category || 'Other CGST'}</span>
                <span className="gst-recent-year">{notif.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find A GST Notification (Intent Helper) */}
      <section className="gst-finder-section">
        <div className="gst-finder-header">
          <h2>Find a GST Notification</h2>
          <p>Select a common topic to filter the directory.</p>
        </div>
        <div className="gst-intent-wrapper">
          {categories.filter(c => c !== 'All' && c !== 'Other CGST').map(cat => (
            <button
              key={cat}
              className={`gst-intent-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat === selectedCategory ? 'All' : cat)}
            >
              {cat}
            </button>
          ))}
          <button
            className={`gst-intent-btn ${selectedCategory === 'Other CGST' ? 'active' : ''}`}
            onClick={() => setSelectedCategory(selectedCategory === 'Other CGST' ? 'All' : 'Other CGST')}
          >
            Other CGST
          </button>
        </div>
      </section>

      {/* Search & Directory */}
      <section className="gst-directory-section" id="directory">
        <div className="gst-controls">
          <div className="gst-search-wrapper">
            <Search className="gst-search-icon" size={20} />
            <input
              type="text"
              className="gst-search-input"
              placeholder="Search notification number, subject or GST topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="gst-filters">
            <select
              className="gst-filter-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              {years.filter(y => y !== 'All').map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              className="gst-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {statuses.length > 1 && (
              <select
                className="gst-filter-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                {statuses.filter(s => s !== 'All').map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="gst-grid">
          {currentData.length > 0 ? (
            currentData.map(notif => (
              <div 
                key={notif.id} 
                className={`gst-card ${notif.status === 'Superseded' || notif.status === 'Historical' ? 'omitted-card' : ''}`}
                onClick={() => openModal(notif)}
              >
                <div className="gst-card-header">
                  <span className="gst-number">{notif.notificationNumber}</span>
                  {notif.status && (
                    <span className={`gst-status-badge ${notif.status.toLowerCase()}`}>
                      {notif.status}
                    </span>
                  )}
                </div>
                <div className="gst-card-title">{notif.title}</div>
                <div className="gst-card-footer">
                  <span className="gst-card-cat">{notif.category || 'Other CGST'} • {notif.year}</span>
                  <span className="gst-view-btn">View Details &rarr;</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: 'var(--text-muted)', padding: '2rem 0' }}>No notifications found matching your criteria.</div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="gst-pagination">
            <button
              className="gst-page-btn"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &larr; Prev
            </button>
            <span className="gst-page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="gst-page-btn"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </section>

      {/* Clarification Sections */}
      <section className="gst-clarification-section">
        <div className="gst-clarification-grid">
          <div className="gst-clarification-card">
            <h3>GST Notifications vs GST Circulars</h3>
            <div className="gst-clarification-box">
              <h4>GST Notifications</h4>
              <p>Formal government notifications that can notify, amend, prescribe, extend, exempt or otherwise give effect to provisions under GST law.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>GST Circulars</h4>
              <p>Departmental clarifications / instructions issued through the appropriate authority to ensure uniformity in implementation.</p>
            </div>
          </div>
          <div className="gst-clarification-card">
            <h3>CGST Tax vs CGST Rate Notifications</h3>
            <div className="gst-clarification-box">
              <h4>CGST Tax Notifications</h4>
              <p>The directory on this page, which includes procedural rules, forms, return extensions, and administrative changes.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>CGST Rate Notifications</h4>
              <p>A separate GST Council notification category dealing specifically with rate-related notifications, exemptions, and reverse charge mechanisms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Ref Box */}
      <div className="gst-official-ref-box">
        <h3>Official GST Notification Reference</h3>
        <p>GST notifications may be amended, superseded or supplemented by subsequent notifications. Verify the current applicability and complete notification text using the official GST Council source.</p>
        <a href="https://gstcouncil.gov.in/cgst-tax-notification" target="_blank" rel="noreferrer" className="gst-official-btn">
          View Official GST Notification Database &rarr;
        </a>
      </div>

      {/* Related Knowledge Base */}
      <div className="gst-important-section" style={{ marginBottom: '4rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related GST Knowledge Base</h2>
        <div className="gst-intent-wrapper">
          <Link to="/gst/gst-acts" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Acts</Link>
          <Link to="/gst/gst-rules" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Rules</Link>
          <Link to="/gst/gst-circulars" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Circulars</Link>
          <Link to="/gst/gst-forms" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Forms</Link>
          <Link to="/gst/gst-sac-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST SAC Codes</Link>
          <Link to="/gst/gst-hsn-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST HSN Codes</Link>
        </div>
      </div>

      {/* Modal */}
      {selectedNotif && (
        <div className="gst-modal-overlay" onClick={closeModal}>
          <div 
            className={`gst-modal-content ${(selectedNotif.status === 'Superseded' || selectedNotif.status === 'Historical') ? 'omitted-modal' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="gst-modal-header">
              <div className="gst-modal-title">
                <h2>{selectedNotif.notificationNumber}</h2>
                <div className="gst-modal-subtitle">{selectedNotif.category || 'Other CGST'}</div>
              </div>
              <button className="gst-modal-close" onClick={closeModal}>&times;</button>
            </div>
            
            <div className="gst-modal-body">
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Subject</div>
                <div className="gst-modal-val">{selectedNotif.title}</div>
              </div>
              
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Date / Year</div>
                <div className="gst-modal-val">{selectedNotif.date || selectedNotif.year}</div>
              </div>

              {selectedNotif.applicableLaw && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Applicable Law</div>
                  <div className="gst-modal-val">{selectedNotif.applicableLaw}</div>
                </div>
              )}

              {selectedNotif.sections && selectedNotif.sections.length > 0 && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Relevant Sections</div>
                  <div className="gst-modal-val">{selectedNotif.sections.join(', ')}</div>
                </div>
              )}

              {selectedNotif.summary && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Summary</div>
                  <div className="gst-modal-val">{selectedNotif.summary}</div>
                </div>
              )}

              {selectedNotif.status && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Status</div>
                  <div className="gst-modal-val">
                    <span className={`gst-status-badge ${selectedNotif.status.toLowerCase()}`}>
                      {selectedNotif.status}
                    </span>
                  </div>
                </div>
              )}

              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Source</div>
                <div className="gst-modal-val">{selectedNotif.source}</div>
              </div>
            </div>

            <div className="gst-modal-footer">
              {selectedNotif.englishUrl && (
                <a href={selectedNotif.englishUrl} target="_blank" rel="noreferrer" className="gst-doc-btn">
                  View English Notification &rarr;
                </a>
              )}
              {selectedNotif.hindiUrl && (
                <a href={selectedNotif.hindiUrl} target="_blank" rel="noreferrer" className="gst-doc-btn hindi">
                  View Hindi Notification &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
