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
  [
    "Income in respect of investment made by a Non-resident Indian Citizen",
    "20%",
    "N/A"
  ],
  [
    "Income by way of long-term capital gains referred to in Section 115E in case of a Non-resident Indian Citizen",
    "12.5%",
    "N/A"
  ],
  [
    "Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-Section (1) of Section 112",
    "12.5%",
    "12.5%"
  ],
  [
    "Income by way of long-term capital gains as referred to in Section 112A exceeding Rs. 1,25,000",
    "12.5%",
    "12.5%"
  ],
  [
    "Income by way of short-term capital gains referred to in Section 111A",
    "20%",
    "20%"
  ],
  [
    "Any other income by way of long-term capital gains [not being long-term capital gains referred to in sections 10(33), 10(36) and 112A]",
    "12.5%",
    "12.5%"
  ],
  [
    "Income by way of dividend from a unit in International Financial Services Centre",
    "10%",
    "10%"
  ],
  [
    "Income by way of dividend (Other than dividend from a unit in IFSC)",
    "20%",
    "20%"
  ],
  [
    "Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred by Government or the Indian concern in foreign currency (not being income by way of interest referred to in Section 194LB or Section 194LC)",
    "20%",
    "20%"
  ],
  [
    "Income by way of royalty payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern where such royalty is in consideration for the transfer of all or any rights (including the granting of a licence) in respect of copyright in any book on a subject referred to in the first proviso to sub-section (1A) of Section 115A of the Income-tax Act, to the Indian concern, or in respect of any computer software referred to in the second proviso to sub-section (1A) of Section 115A of the Income-tax Act, to a person resident in India (For Foreign Company: where the agreement is made after 31st March, 1976)",
    "20%",
    "20%"
  ],
  [
    "Income by way of royalty [not being royalty of the nature referred to above] payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy",
    "20%",
    "Where the agreement is made after 31st March, 1961 but before 1st April, 1976: 50%\n\nWhere the agreement is made after 31st March, 1976: 20%"
  ],
  [
    "Income by way of fees for technical services payable by Government or an Indian concern in pursuance of an agreement made by it with the Government or the Indian concern and where such agreement is with an Indian concern, the agreement is approved by the Central Government or where it relates to a matter included in the industrial policy, for the time being in force, of the Government of India, the agreement is in accordance with that policy",
    "20%",
    "Where the agreement is made after 29th February, 1964 but before 1st April, 1976: 50%\n\nWhere the agreement is made after 31st March, 1976: 20%"
  ],
  [
    "Any other income",
    "30%",
    "35%"
  ]
];

export const TdsRatesForNri: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: number, direction: 'asc' | 'desc' } | null>(null);

  const title = "TDS Rates for N.R.I u/s 195";
  const description = "Tax deduction at source rates on payments of any other sum to non-residents (including foreign companies) under Section 195.";

  const filteredData = useMemo(() => {
    let filtered = tableData.filter(row => 
      row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, sortConfig]);

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => { setPage(1); }, [searchTerm, pageSize]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const startIdx = (page - 1) * pageSize;
  const pagedTable = filteredData.slice(startIdx, startIdx + pageSize);
  const showingFrom = totalItems === 0 ? 0 : startIdx + 1;
  const showingTo = Math.min(startIdx + pageSize, totalItems);

  const handleSort = (key: number) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

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
            <div className="table-responsive glass-card">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort(0)} style={{ cursor: 'pointer', width: '60%' }}>Nature of Income {sortConfig?.key === 0 ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</th>
                    <th onClick={() => handleSort(1)} style={{ cursor: 'pointer' }}>Rate for Non-Resident Person (other than company) {sortConfig?.key === 1 ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</th>
                    <th onClick={() => handleSort(2)} style={{ cursor: 'pointer' }}>Rate for Foreign Company {sortConfig?.key === 2 ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedTable.length > 0 ? (
                    pagedTable.map((row, i) => (
                      <tr key={startIdx + i}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ whiteSpace: 'pre-wrap' }}>{cell}</td>
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
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Important Notes</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: 1.6 }}>
                <li><strong>Surcharge and Cess:</strong> The rate of TDS shall be increased by applicable surcharge and Health & Education cess (4%).</li>
                <li className="mt-2"><strong>DTAA Benefit:</strong> Tax shall be deducted at the rate provided under the relevant Double Taxation Avoidance Agreement (DTAA) if the same is lower than the existing TDS rate.</li>
                <li className="mt-2"><strong>Applicability:</strong> These rates apply to Section 195 (Payment of any other sum to a Non-resident). Other specific sections like 194LC, 194LD, 194LBA, etc., have separate specified rates.</li>
                <li className="mt-2"><strong>Statutory Updates:</strong> [As amended by Finance Act, 2026]. Please verify against the latest provisions before deducting tax.</li>
              </ul>
            </div>
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
                        onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
