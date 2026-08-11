import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gstOrdersData, type GSTOrder } from '../../data/gstOrdersData';
import { Search, Book } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import './GstOrders.css';

const NOTIFICATIONS_PER_PAGE = 20;

export const GstOrders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedRecordType, setSelectedRecordType] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<GSTOrder | null>(null);

  // Extract unique values for filters
  const years = useMemo(() => {
    const yrSet = new Set(gstOrdersData.map(n => n.year.toString()));
    return ['All', ...Array.from(yrSet).sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const categories = useMemo(() => {
    const catSet = new Set(gstOrdersData.map(n => n.category || 'Other CGST'));
    return ['All', ...Array.from(catSet).sort()];
  }, []);

  const statuses = useMemo(() => {
    const statusSet = new Set(gstOrdersData.map(n => n.status).filter(Boolean) as string[]);
    return ['All', ...Array.from(statusSet).sort()];
  }, []);

  const recordTypes = useMemo(() => {
    const rtSet = new Set(gstOrdersData.map(n => n.recordType).filter(Boolean) as string[]);
    return ['All', ...Array.from(rtSet).sort()];
  }, []);

  // Filter logic
  const filteredData = useMemo(() => {
    return gstOrdersData.filter(order => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        order.orderNumber.toLowerCase().includes(q) ||
        order.title.toLowerCase().includes(q) ||
        (order.category || '').toLowerCase().includes(q) ||
        order.year.toString().includes(q);

      const matchesYear = selectedYear === 'All' || order.year.toString() === selectedYear;
      const matchesCategory = selectedCategory === 'All' || (order.category || 'Other CGST') === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || order.status === selectedStatus;
      const matchesRecordType = selectedRecordType === 'All' || order.recordType === selectedRecordType;

      return matchesSearch && matchesYear && matchesCategory && matchesStatus && matchesRecordType;
    });
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus, selectedRecordType]);

  // Sort: Exact match for search query first, then by year descending
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data.sort((a, b) => {
        const aExact = a.orderNumber.toLowerCase() === q ? 1 : 0;
        const bExact = b.orderNumber.toLowerCase() === q ? 1 : 0;
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

  // Recent orders (top 3 by year)
  const recentOrders = useMemo(() => {
    return [...gstOrdersData].filter(o => o.recordType === 'Order').sort((a, b) => b.year - a.year).slice(0, 3);
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('directory')?.offsetTop ? document.getElementById('directory')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  const openModal = (order: GSTOrder) => {
    setSelectedOrder(order);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedOrder(null);
    document.body.style.overflow = 'auto';
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear, selectedCategory, selectedStatus, selectedRecordType]);

  return (
    <div className="gst-orders-page-wrapper">
      
      <InternalPageHero 
        title="CGST Tax Orders"
        description="Explore the official directory of Central Goods and Services Tax (CGST) orders issued by the GST Council."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'GST Orders' }
        ]}
      />
      <div className="container" style={{ marginTop: '0', paddingBottom: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Explore the official directory of Central Goods and Services Tax (CGST) orders issued by the GST Council."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Orders Indexed', value: gstOrdersData.filter(o => o.recordType === 'Order').length },
            { label: 'Framework', value: 'CGST' },
            { label: 'Directory', value: 'Searchable' },
            { label: 'Regulatory Authority', value: 'GST Council / MoF' }
          ]}
          statCards={[
            { value: gstOrdersData.filter(o => o.recordType === 'Order').length, label: 'Orders Indexed' },
            { value: 'CGST', label: 'Framework' },
            { value: 'Searchable', label: 'Order Directory' },
            { value: 'MoF', label: 'Regulatory Authority' }
          ]}
        />
      </div>

      {/* Recent GST Orders */}
      <section className="gst-recent-section">
        <h2>Recent GST Orders</h2>
        <div className="gst-recent-grid">
          {recentOrders.map(order => (
            <div key={order.id} className="gst-recent-card" onClick={() => openModal(order)}>
              <div className="gst-recent-number">{order.orderNumber}</div>
              <div className="gst-recent-title">{order.title}</div>
              <div className="gst-recent-meta">
                <span className="gst-recent-cat">{order.category || 'Other CGST'}</span>
                <span className="gst-recent-year">{order.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find A GST Order (Intent Helper) */}
      <section className="gst-finder-section">
        <div className="gst-finder-header">
          <h2>Find a GST Order</h2>
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
              placeholder="Search order number, subject or GST topic..."
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
            {recordTypes.length > 1 && (
              <select
                className="gst-filter-select"
                value={selectedRecordType}
                onChange={(e) => setSelectedRecordType(e.target.value)}
              >
                <option value="All">All Record Types</option>
                {recordTypes.filter(rt => rt !== 'All').map(rt => (
                  <option key={rt} value={rt}>{rt}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="gst-grid">
          {currentData.length > 0 ? (
            currentData.map(order => (
              <div 
                key={order.id} 
                className={`gst-card ${order.status === 'Superseded' || order.status === 'Historical' ? 'omitted-card' : ''}`}
                onClick={() => openModal(order)}
              >
                <div className="gst-card-header">
                  <span className="gst-number">{order.orderNumber}</span>
                  {order.status && (
                    <span className={`gst-status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  )}
                  {order.recordType === 'Source Entry — Circular-labelled' && (
                    <span className="gst-status-badge" style={{ backgroundColor: '#ff9800', marginLeft: '0.5rem' }}>
                      {order.recordType}
                    </span>
                  )}
                </div>
                <div className="gst-card-title">{order.title}</div>
                <div className="gst-card-footer">
                  <span className="gst-card-cat">{order.category || 'Other CGST'} • {order.year}</span>
                  <span className="gst-view-btn">View Details &rarr;</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: 'var(--text-muted)', padding: '2rem 0' }}>No orders found matching your criteria.</div>
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
            <h3>GST Orders vs GST Notifications</h3>
            <div className="gst-clarification-box">
              <h4>GST Orders</h4>
              <p>Departmental clarifications or instructions issued by the CBIC to its officers to ensure uniformity in the implementation of the GST law. They are binding on the officers but not strictly binding on taxpayers or courts.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>GST Notifications</h4>
              <p>Formal notifications issued under GST law for specified statutory actions, exemptions, amendments, procedures or related matters.</p>
            </div>
          </div>
          <div className="gst-clarification-card">
            <h3>GST Orders vs GST Circulars</h3>
            <div className="gst-clarification-box">
              <h4>Orders</h4>
              <p>Specific administrative/procedural directions or orders.</p>
            </div>
            <div className="gst-clarification-box">
              <h4>Circulars</h4>
              <p>Departmental clarifications/instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Ref Box */}
      <div className="gst-official-ref-box">
        <h3>Official GST Order Reference</h3>
        <p>GST orders may be amended, superseded, or withdrawn by subsequent orders. Always verify the current applicability and complete order text using the official GST Council source.</p>
        <a href="https://gstcouncil.gov.in/cgst-orders" target="_blank" rel="noreferrer" className="gst-official-btn">
          View Official GST Orders Database &rarr;
        </a>
      </div>

      {/* Related Knowledge Base */}
      <div className="gst-important-section" style={{ marginBottom: '4rem', padding: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related GST Knowledge Base</h2>
        <div className="gst-intent-wrapper">
          <Link to="/gst/gst-acts" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Acts</Link>
          <Link to="/gst/gst-rules" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Rules</Link>
          <Link to="/gst/gst-orders" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Orders</Link>
          <Link to="/gst/gst-forms" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST Forms</Link>
          <Link to="/gst/gst-sac-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST SAC Codes</Link>
          <Link to="/gst/gst-hsn-codes" className="gst-intent-btn" style={{ textDecoration: 'none' }}>GST HSN Codes</Link>
        </div>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div className="gst-modal-overlay" onClick={closeModal}>
          <div 
            className={`gst-modal-content ${(selectedOrder.status === 'Superseded' || selectedOrder.status === 'Historical') ? 'omitted-modal' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="gst-modal-header">
              <div className="gst-modal-title">
                <h2>{selectedOrder.orderNumber}</h2>
                <div className="gst-modal-subtitle">{selectedOrder.category || 'Other CGST'}</div>
              </div>
              <button className="gst-modal-close" onClick={closeModal}>&times;</button>
            </div>
            
            <div className="gst-modal-body">
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Subject</div>
                <div className="gst-modal-val">{selectedOrder.title}</div>
              </div>
              
              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Date / Year</div>
                <div className="gst-modal-val">{selectedOrder.date || selectedOrder.year}</div>
              </div>

              {selectedOrder.applicableLaw && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Applicable Law</div>
                  <div className="gst-modal-val">{selectedOrder.applicableLaw}</div>
                </div>
              )}

              {selectedOrder.sections && selectedOrder.sections.length > 0 && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Relevant Sections</div>
                  <div className="gst-modal-val">{selectedOrder.sections.join(', ')}</div>
                </div>
              )}

              {selectedOrder.status && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Status</div>
                  <div className="gst-modal-val">
                    <span className={`gst-status-badge ${selectedOrder.status.toLowerCase()}`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                </div>
              )}
              
              {selectedOrder.recordType && (
                <div className="gst-modal-row">
                  <div className="gst-modal-lbl">Record Type</div>
                  <div className="gst-modal-val">{selectedOrder.recordType}</div>
                </div>
              )}

              <div className="gst-modal-row">
                <div className="gst-modal-lbl">Official Source</div>
                <div className="gst-modal-val">{selectedOrder.source}</div>
              </div>
            </div>

            <div className="gst-modal-footer">
              {selectedOrder.englishUrl && (
                <a href={selectedOrder.englishUrl} target="_blank" rel="noreferrer" className="gst-doc-btn">
                  View English Order &rarr;
                </a>
              )}
              {selectedOrder.hindiUrl && (
                <a href={selectedOrder.hindiUrl} target="_blank" rel="noreferrer" className="gst-doc-btn hindi">
                  View Hindi Order &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
