import React, { useState, useEffect, useMemo } from 'react';
import { Search, BookOpen, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { InternalPageHero } from './InternalPageHero';
import './ResourceLayout.css';

interface ResourceLayoutProps {
  title: string;
  description: string;
  data: string[][] | { href: string; text: string }[];
  type: 'table' | 'links';
}

const PAGE_SIZE_OPTIONS = [10, 30, 50];

// Build a compact page list with ellipses, e.g. 1 … 5 6 [7] 8 9 … 19
function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '...')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('...');
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push('...');
  pages.push(total);
  return pages;
}

export const ResourceLayout: React.FC<ResourceLayoutProps> = ({ title, description, data, type }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(50);
  const [page, setPage] = useState(1);

  const tableData = type === 'table' ? (data as string[][]) : [];
  const linksData = type === 'links' ? (data as { href: string; text: string }[]) : [];

  const filteredTableData = useMemo(
    () => tableData.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))),
    [tableData, searchTerm]
  );
  const filteredLinksData = useMemo(
    () => linksData.filter(link => link.text.toLowerCase().includes(searchTerm.toLowerCase())),
    [linksData, searchTerm]
  );

  const totalItems = type === 'table' ? filteredTableData.length : filteredLinksData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Keep the current page valid when the filter, page size, or data changes.
  useEffect(() => { setPage(1); }, [searchTerm, pageSize, type, title]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const startIdx = (page - 1) * pageSize;
  const pagedTable = filteredTableData.slice(startIdx, startIdx + pageSize);
  const pagedLinks = filteredLinksData.slice(startIdx, startIdx + pageSize);
  const showingFrom = totalItems === 0 ? 0 : startIdx + 1;
  const showingTo = Math.min(startIdx + pageSize, totalItems);

  const columnCount = tableData.reduce((max, row) => Math.max(max, row.length), 0) || 1;

  return (
    <div className="resource-layout">
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Resources', path: '/knowledge-base' },
          { label: title }
        ]}
        title={title}
        description={description}
      />

      {/* Main Content Area */}
      <section className="resource-main">
        <div className="container">

          {/* Controls Bar */}
          <div className="resource-controls glass-card">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={`Search in ${title}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="page-size-control">
              <label htmlFor="page-size">Show</label>
              <select
                id="page-size"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Data Presentation */}
          <div className="resource-content">
            {type === 'table' && (
              <div className="table-responsive glass-card">
                <table className="modern-table">
                  <thead>
                    <tr>
                      {tableData.length > 0 && Array.from({ length: columnCount }).map((_, i) => (
                        <th key={i}>Column {i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pagedTable.length > 0 ? (
                      pagedTable.map((row, i) => (
                        <tr key={startIdx + i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={columnCount} className="text-center no-data">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {type === 'links' && (
              <div className="links-grid">
                {pagedLinks.length > 0 ? (
                  pagedLinks.map((link, i) => (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="resource-link-card glass-card" key={startIdx + i}>
                      <h4>{link.text}</h4>
                      <ExternalLink size={16} className="ext-icon" />
                    </a>
                  ))
                ) : (
                  <div className="no-data glass-card text-center">
                    No matching resources found.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalItems > 0 && (
            <div className="resource-pagination">
              <div className="pagination-info">
                Showing {showingFrom}&ndash;{showingTo} of {totalItems} {totalItems === 1 ? 'entry' : 'entries'}
                {totalPages > 1 && ` (page ${page} of ${totalPages})`}
              </div>
              {totalPages > 1 && (
                <div className="pagination-controls">
                  <button
                    className="page-btn page-arrow"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  {buildPageList(page, totalPages).map((p, i) =>
                    p === '...' ? (
                      <span key={`e${i}`} className="page-ellipsis">…</span>
                    ) : (
                      <button
                        key={p}
                        className={`page-btn ${p === page ? 'active' : ''}`}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <button
                    className="page-btn page-arrow"
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    aria-label="Next page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
