import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import '../../components/layout/ResourceLayout.css';

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

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

const tableData = [
  ["1", "2001-02", "100"],
  ["2", "2002-03", "105"],
  ["3", "2003-04", "109"],
  ["4", "2004-05", "113"],
  ["5", "2005-06", "117"],
  ["6", "2006-07", "122"],
  ["7", "2007-08", "129"],
  ["8", "2008-09", "137"],
  ["9", "2009-10", "148"],
  ["10", "2010-11", "167"],
  ["11", "2011-12", "184"],
  ["12", "2012-13", "200"],
  ["13", "2013-14", "220"],
  ["14", "2014-15", "240"],
  ["15", "2015-16", "254"],
  ["16", "2016-17", "264"],
  ["17", "2017-18", "272"],
  ["18", "2018-19", "280"],
  ["19", "2019-20", "289"],
  ["20", "2020-21", "301"],
  ["21", "2021-22", "317"],
  ["22", "2022-23", "331"],
  ["23", "2023-24", "348"],
  ["24", "2024-25", "363"],
  ["25", "2025-26", "376"],
  ["26", "2026-27", "384"]
];

export const CostInflationIndex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const title = "Cost Inflation Index";
  const description = "Cost Inflation Index (CII) is notified by the Central Government under Section 48 of the Income-tax Act, 1961. It is used to calculate the indexed cost of acquisition and indexed cost of improvement while determining long-term capital gains. The Cost Inflation Index adjusts the purchase cost of an asset for inflation, ensuring that capital gains are taxed on real appreciation rather than inflationary increases in value.";

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => { setPage(1); }, [searchTerm, pageSize]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const startIdx = (page - 1) * pageSize;
  const pagedTable = filteredData.slice(startIdx, startIdx + pageSize);
  const showingFrom = totalItems === 0 ? 0 : startIdx + 1;
  const showingTo = Math.min(startIdx + pageSize, totalItems);

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

      <section className="resource-main">
        <div className="container">

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

          <div className="resource-content">
            <div className="table-responsive glass-card">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Financial Year</th>
                    <th>Cost Inflation Index</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedTable.length > 0 ? (
                    pagedTable.map((row, i) => (
                      <tr key={startIdx + i}>
                        {row.map((cell, j) => (
                          <td key={j}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center no-data">
                        No matching records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="glass-card mt-4" style={{ padding: '1.5rem', backgroundColor: 'rgba(var(--primary-rgb), 0.02)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Reference</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: 1.6 }}>
                <li>Notification No. 70/2025, dated 01 July 2025</li>
                <li className="mt-2">As amended by the Finance Act, 2026.</li>
              </ul>
            </div>
          </div>

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
                    onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
                        onClick={() => { setPage(p as number); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <button
                    className="page-btn page-arrow"
                    onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
