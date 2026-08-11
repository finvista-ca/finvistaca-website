import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Book,
  Scale,
  Building2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { incomeTaxNotificationsData, type IncomeTaxNotification, relatedActs } from '../../data/incomeTaxNotificationsData';
import './IncomeTaxNotifications.css';

const NOTIFICATIONS_PER_PAGE = 20;

export const IncomeTaxNotifications: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All Years');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [actFilter, setActFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotificationId, setSelectedNotificationId] = useState<string | null>(searchParams.get('notification'));
  
  const directoryRef = useRef<HTMLDivElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Sync selectedNotificationId with URL
  useEffect(() => {
    const notifParam = searchParams.get('notification');
    if (notifParam !== selectedNotificationId) {
      setSelectedNotificationId(notifParam);
    }
  }, [searchParams]);

  const openNotification = (id: string) => {
    setSelectedNotificationId(id);
    setSearchParams({ notification: id });
  };

  const closeNotification = () => {
    setSelectedNotificationId(null);
    setSearchParams({});
  };

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(incomeTaxNotificationsData.map(c => c.year)));
    return years.sort((a, b) => b - a);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(incomeTaxNotificationsData.map(c => c.category)));
    return cats.sort();
  }, []);

  const applicableLaws = useMemo(() => {
    const laws = Array.from(new Set(incomeTaxNotificationsData.map(c => c.applicableAct).filter(Boolean))) as string[];
    return laws.sort();
  }, []);

  const statuses = useMemo(() => {
    const s = Array.from(new Set(incomeTaxNotificationsData.map(c => c.status).filter(Boolean))) as string[];
    return s.sort();
  }, []);

  // Filter Notifications
  const filteredNotifications = useMemo(() => {
    let result = incomeTaxNotificationsData;

    // Search
    if (debouncedQuery) {
      const query = debouncedQuery.toLowerCase();
      result = result.filter(notification => {
        return (
          notification.notificationNumber.toLowerCase().includes(query) ||
          notification.title.toLowerCase().includes(query) ||
          notification.category.toLowerCase().includes(query) ||
          (notification.sections && notification.sections.some(s => s.toLowerCase().includes(query))) ||
          notification.summary.toLowerCase().includes(query) ||
          (notification.applicableAct && notification.applicableAct.toLowerCase().includes(query))
        );
      });

      // Sort by exact number match
      result = [...result].sort((a, b) => {
        const aNumMatch = a.notificationNumber.toLowerCase() === query;
        const bNumMatch = b.notificationNumber.toLowerCase() === query;
        if (aNumMatch && !bNumMatch) return -1;
        if (!aNumMatch && bNumMatch) return 1;
        
        const aContains = a.notificationNumber.toLowerCase().includes(query);
        const bContains = b.notificationNumber.toLowerCase().includes(query);
        if (aContains && !bContains) return -1;
        if (!aContains && bContains) return 1;

        return 0;
      });
    } else {
      // Default sort by date descending
      result = [...result].sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB.getTime() - dateA.getTime();
      });
    }

    if (yearFilter !== 'All Years') {
      result = result.filter(c => c.year.toString() === yearFilter);
    }
    
    if (categoryFilter !== 'All') {
      result = result.filter(c => c.category === categoryFilter);
    }
    
    if (actFilter !== 'All') {
      result = result.filter(c => c.applicableAct === actFilter);
    }

    if (statusFilter !== 'All') {
      result = result.filter(c => c.status === statusFilter);
    }

    return result;
  }, [debouncedQuery, yearFilter, categoryFilter, actFilter, statusFilter]);

  const featuredNotifications = useMemo(() => {
    return [...incomeTaxNotificationsData]
      .sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 3);
  }, []);

  const selectedNotification = useMemo(() => {
    return incomeTaxNotificationsData.find(c => c.id === selectedNotificationId) || null;
  }, [selectedNotificationId]);

  // Pagination
  const totalPages = Math.ceil(filteredNotifications.length / NOTIFICATIONS_PER_PAGE);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * NOTIFICATIONS_PER_PAGE,
    currentPage * NOTIFICATIONS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (directoryRef.current) {
      const y = directoryRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setYearFilter('All Years');
    setCategoryFilter('All');
    setActFilter('All');
    setStatusFilter('All');
    setCurrentPage(1);
  };

  return (
    <div className="income-tax-notifications-page">
      <InternalPageHero 
        title="Income Tax Notifications"
        description="Browse official CBDT notifications covering tax provisions, exemptions, compliance requirements, procedures and regulatory changes."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income Tax Notifications' }
        ]}
      />

      <div className="container" style={{ marginTop: '0' }}>
        {/* AT A GLANCE */}
        <KnowledgeBaseHeader
          infoTitle="Browse official CBDT notifications covering tax provisions, exemptions, compliance requirements, procedures and regulatory changes."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Notifications Indexed', value: incomeTaxNotificationsData.length },
            { label: 'Issuing Authority', value: 'CBDT' },
            { label: 'Primary Source', value: 'Income Tax Dept' },
            { label: 'Directory', value: 'Searchable' }
          ]}
          statCards={[
            { value: 'CBDT', label: 'Issuing Authority' },
            { value: incomeTaxNotificationsData.length, label: 'Notifications Indexed' },
            { value: 'Searchable', label: 'Notification Directory' },
            { value: 'Income Tax Dept', label: 'Primary Source' }
          ]}
        />

      {/* FEATURED NOTIFICATIONS */}
      {featuredNotifications.length > 0 && (
        <div className="featured-notifications-section" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-gold)', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
            Featured Notifications
          </h2>
          <div className="notifications-directory-grid">
            {featuredNotifications.map((notification) => (
              <div key={`feat-${notification.id}`} className="notification-card" onClick={() => openNotification(notification.id)}>
                <div className="notification-header">
                  <div className="notification-number">Notification No. {notification.notificationNumber}</div>
                  <div className="notification-date">Published: {notification.date}</div>
                </div>
                <div className="notification-title">{notification.title}</div>
                <div className="notification-tags">
                  <span className="notification-tag">{notification.category}</span>
                  {notification.applicableAct && <span className="notification-tag act">{notification.applicableAct}</span>}
                </div>
                <div className="notification-summary">{notification.summary}</div>
                <div className="notification-card-footer">
                  <span className="notification-source">{notification.source}</span>
                  <span className="notification-view-link">View Notification <ChevronRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN DIRECTORY */}
      <div ref={directoryRef} className="notifications-directory-section">
        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>CBDT Notification Directory</h2>
        
        {/* Search and Filters */}
        <div className="notification-search-filter-container">
          <div className="notification-search-wrapper">
            <Search className="notification-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search notification number, topic, section or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="notification-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => { setSearchQuery(''); setCurrentPage(1); }} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            )}
          </div>
          
          <div className="notification-filters-row">
            <div className="filter-group">
              <select 
                value={yearFilter} 
                onChange={(e) => { setYearFilter(e.target.value); setCurrentPage(1); }}
                className="notification-filter-select"
              >
                <option value="All Years">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <select 
                value={categoryFilter} 
                onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                className="notification-filter-select"
              >
                <option value="All">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            {applicableLaws.length > 0 && (
              <div className="filter-group">
                <select 
                  value={actFilter} 
                  onChange={(e) => { setActFilter(e.target.value); setCurrentPage(1); }}
                  className="notification-filter-select"
                >
                  <option value="All">All Applicable Laws</option>
                  {applicableLaws.map(law => (
                    <option key={law} value={law}>{law}</option>
                  ))}
                </select>
              </div>
            )}

            {statuses.length > 0 && (
              <div className="filter-group">
                <select 
                  value={statusFilter} 
                  onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                  className="notification-filter-select"
                >
                  <option value="All">All Statuses</option>
                  {statuses.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Notifications List */}
        {paginatedNotifications.length > 0 ? (
          <>
            <div className="notifications-directory-grid">
              {paginatedNotifications.map((notification) => (
                <div key={notification.id} className="notification-card" onClick={() => openNotification(notification.id)}>
                  <div className="notification-header">
                    <div className="notification-number">Notification No. {notification.notificationNumber}</div>
                    <div className="notification-date">Published: {notification.date}</div>
                  </div>
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-tags">
                    <span className="notification-tag">{notification.category}</span>
                    {notification.applicableAct && <span className="notification-tag act">{notification.applicableAct}</span>}
                  </div>
                  {notification.effectiveDate && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      <strong>Effective:</strong> {notification.effectiveDate}
                    </div>
                  )}
                  <div className="notification-summary">{notification.summary}</div>
                  <div className="notification-card-footer">
                    <span className="notification-source">{notification.source}</span>
                    <span className="notification-view-link">View Notification <ChevronRight size={16} /></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="notification-pagination">
                <div className="pagination-info">
                  Showing {(currentPage - 1) * NOTIFICATIONS_PER_PAGE + 1} - {Math.min(currentPage * NOTIFICATIONS_PER_PAGE, filteredNotifications.length)} of {filteredNotifications.length} notifications
                </div>
                <div className="pagination-controls">
                  <button 
                    className="page-btn" 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || Math.abs(currentPage - p) <= 1)
                    .map((page, idx, arr) => (
                      <React.Fragment key={page}>
                        {idx > 0 && arr[idx - 1] !== page - 1 && <span style={{ color: 'var(--text-muted)', alignSelf: 'center' }}>...</span>}
                        <button 
                          className={`page-btn ${currentPage === page ? 'active' : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                  ))}
                  <button 
                    className="page-btn" 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-results-state" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <FileText size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 1.5rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>No notifications found</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Try another notification number, keyword, year or category.</p>
            <button 
              onClick={clearFilters}
              style={{ padding: '0.75rem 1.5rem', background: 'var(--brand-gold)', color: 'var(--primary-color)', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="official-reference-card" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid rgba(201, 160, 80, 0.3)', borderRadius: '12px', borderLeft: '4px solid var(--brand-gold)' }}>
        <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Book size={24} color="var(--brand-gold)" /> Official Income Tax Notifications
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Income-tax provisions and administrative requirements may change through subsequent notifications, amendments and other official updates. Verify the current applicable position from the official Income Tax Department / CBDT source before relying on any notification.
        </p>
        <a 
          href="https://incometaxindia.gov.in/Pages/communications/notifications.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="notification-official-btn"
          style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 500 }}
        >
          View Official Notifications <ExternalLink size={16} />
        </a>
      </div>

      {/* RELATED KNOWLEDGE BASE */}
      <div className="related-kb-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
        <div className="notifications-overview-grid">
          {relatedActs.map((item, idx) => (
            <Link key={idx} to={item.path} className="notifications-stat-card" style={{ textDecoration: 'none', minHeight: 'auto', padding: '1rem' }}>
              <span style={{ color: 'white', fontWeight: 500 }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedNotification && (
        <div className="notification-modal-overlay" onClick={closeNotification}>
          <div className="notification-modal-content" onClick={e => e.stopPropagation()}>
            <div className="notification-modal-header">
              <div>
                <h2>Notification No. {selectedNotification.notificationNumber}</h2>
                <div style={{ color: 'var(--text-muted)' }}>Published: {selectedNotification.date}</div>
              </div>
              <button className="notification-modal-close" onClick={closeNotification}>
                <X size={24} />
              </button>
            </div>
            
            <div className="notification-modal-body">
              <h3 style={{ fontSize: '1.3rem', lineHeight: 1.5, marginBottom: '2rem', color: 'white' }}>
                {selectedNotification.title}
              </h3>
              
              <div className="notification-modal-meta-grid">
                <div className="notification-modal-meta-item">
                  <span className="notification-modal-meta-label">Issuing Authority</span>
                  <span className="notification-modal-meta-value">{selectedNotification.source}</span>
                </div>
                <div className="notification-modal-meta-item">
                  <span className="notification-modal-meta-label">Category</span>
                  <span className="notification-modal-meta-value">{selectedNotification.category}</span>
                </div>
                {selectedNotification.applicableAct && (
                  <div className="notification-modal-meta-item">
                    <span className="notification-modal-meta-label">Applicable Act</span>
                    <span className="notification-modal-meta-value">{selectedNotification.applicableAct}</span>
                  </div>
                )}
                {selectedNotification.effectiveDate && (
                  <div className="notification-modal-meta-item">
                    <span className="notification-modal-meta-label">Effective Date</span>
                    <span className="notification-modal-meta-value">{selectedNotification.effectiveDate}</span>
                  </div>
                )}
                {selectedNotification.status && (
                  <div className="notification-modal-meta-item">
                    <span className="notification-modal-meta-label">Status</span>
                    <span className="notification-modal-meta-value" style={{ 
                      color: selectedNotification.status === 'Active' ? 'var(--success-green)' : 'var(--brand-gold)' 
                    }}>
                      {selectedNotification.status}
                    </span>
                  </div>
                )}
                {selectedNotification.sections && selectedNotification.sections.length > 0 && (
                  <div className="notification-modal-meta-item">
                    <span className="notification-modal-meta-label">Related Sections</span>
                    <span className="notification-modal-meta-value">{selectedNotification.sections.join(', ')}</span>
                  </div>
                )}
              </div>
              
              <div className="notification-modal-summary">
                <h3>Summary</h3>
                <p>{selectedNotification.summary}</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>Complete notification available at the official source.</p>
              </div>
              
            </div>
            
            <div className="notification-modal-footer">
              <a 
                href={selectedNotification.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="notification-official-btn"
              >
                View Official Notification <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
