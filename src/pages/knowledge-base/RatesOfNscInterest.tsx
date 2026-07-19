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

interface TopHeader {
  label: string;
  colSpan: number;
  rowSpan?: number;
}

interface TableData {
  id: string;
  heading: string;
  topHeaders: TopHeader[];
  subHeaders: string[];
  rows: string[][];
}

const nscData: TableData[] = [
  {
    id: "table-1",
    heading: "w.e.f. 1st April 2025 onwards",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "2025-2026", colSpan: 4 },
      { label: "2026-2027", colSpan: 4 }
    ],
    subHeaders: ["April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep", "Oct-Dec", "Jan-Mar"],
    rows: [
      ["Savings Account", "4.0", "4.0", "4.0", "4.0", "4.0", "", "", ""],
      ["1 Year Time Deposit", "6.9", "6.9", "6.9", "6.9", "6.9", "", "", ""],
      ["2 Year Time Deposit", "7.0", "7.0", "7.0", "7.0", "7.0", "", "", ""],
      ["3 Year Time Deposit", "7.1", "7.1", "7.1", "7.1", "7.1", "", "", ""],
      ["5 Year Time Deposit", "7.5", "7.5", "7.5", "7.5", "7.5", "", "", ""],
      ["5 Year Recurring Deposit", "6.7", "6.7", "6.7", "6.7", "6.7", "", "", ""],
      ["5 Year Senior Citizens Savings Scheme", "8.2", "8.2", "8.2", "8.2", "8.2", "", "", ""],
      ["5 Year Monthly Income Account", "7.4", "7.4", "7.4", "7.4", "7.4", "", "", ""],
      ["5 Year National Savings Certificate", "7.7", "7.7", "7.7", "7.7", "7.7", "", "", ""],
      ["Public Provident Fund", "7.1", "7.1", "7.1", "7.1", "7.1", "", "", ""],
      ["Sukanya Samriddhi Account Scheme", "8.2", "8.2", "8.2", "8.2", "8.2", "", "", ""],
      ["Kisan Vikas Patra", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", "", "", ""]
    ]
  },
  {
    id: "table-2",
    heading: "w.e.f. 1st April 2022 onwards",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "2022-2023", colSpan: 4 },
      { label: "2023-2024", colSpan: 4 },
      { label: "2024-2025", colSpan: 2 }
    ],
    subHeaders: ["April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep"],
    rows: [
      ["Savings Account", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", ""],
      ["1 Year Time Deposit", "5.5", "5.5", "5.5", "6.6", "6.8", "6.9", "6.9", "6.9", "6.9", ""],
      ["2 Year Time Deposit", "5.5", "5.5", "5.7", "6.8", "6.9", "7.0", "7.0", "7.0", "7.0", ""],
      ["3 Year Time Deposit", "5.5", "5.5", "5.8", "6.9", "7.0", "7.0", "7.0", "7.1", "7.1", ""],
      ["5 Year Time Deposit", "6.7", "6.7", "6.7", "7.0", "7.5", "7.5", "7.5", "7.5", "7.5", ""],
      ["5 Year Recurring Deposit", "5.8", "5.8", "5.8", "5.8", "6.2", "6.5", "6.7", "6.7", "6.7", ""],
      ["5 Year Senior Citizens Savings Scheme", "7.4", "7.4", "7.6", "8.0", "8.2", "8.2", "8.2", "8.2", "8.2", ""],
      ["5 Year Monthly Income Account", "6.6", "6.6", "6.7", "7.1", "7.4", "7.4", "7.4", "7.4", "7.4", ""],
      ["5 Year National Savings Certificate", "6.8", "6.8", "6.8", "7.0", "7.7", "7.7", "7.7", "7.7", "7.7", ""],
      ["Public Provident Fund", "7.1", "7.1", "7.1", "7.1", "7.1", "7.1", "7.1", "7.1", "7.1", ""],
      ["Sukanya Samriddhi Account Scheme", "7.6", "7.6", "7.6", "7.6", "8.0", "8.0", "8.0", "8.2", "8.2", ""],
      ["Kisan Vikas Patra", "6.9 (124 months)", "6.9 (124 months)", "7.0 (123 months)", "7.2 (120 months)", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", "7.5 (115 months)", ""]
    ]
  },
  {
    id: "table-3",
    heading: "w.e.f. 1st April 2019 to 31st March 2022",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "2019-2020", colSpan: 4 },
      { label: "2020-2021", colSpan: 4 },
      { label: "2021-2022", colSpan: 2 }
    ],
    subHeaders: ["April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep"],
    rows: [
      ["Savings Account", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0"],
      ["1 Year Time Deposit", "7.0", "6.9", "6.9", "6.9", "5.5", "5.5", "5.5", "5.5", "5.5", "5.5"],
      ["2 Year Time Deposit", "7.0", "6.9", "6.9", "6.9", "5.5", "5.5", "5.5", "5.5", "5.5", "5.5"],
      ["3 Year Time Deposit", "7.0", "6.9", "6.9", "6.9", "5.5", "5.5", "5.5", "5.5", "5.5", "5.5"],
      ["5 Year Time Deposit", "7.8", "7.7", "7.7", "7.7", "6.7", "6.7", "6.7", "6.7", "6.7", "6.7"],
      ["5 Year Recurring Deposit", "7.3", "7.2", "7.2", "7.2", "5.8", "5.8", "5.8", "5.8", "5.8", "5.8"],
      ["5 Year Senior Citizens Savings Scheme", "8.7", "8.6", "8.6", "8.6", "7.4", "7.4", "7.4", "7.4", "7.4", "7.4"],
      ["5 Year Monthly Income Account", "7.7", "7.6", "7.6", "7.6", "6.6", "6.6", "6.6", "6.6", "6.6", "6.6"],
      ["5 Year National Savings Certificate", "8.0", "7.9", "7.9", "7.9", "6.8", "6.8", "6.8", "6.8", "6.8", "6.8"],
      ["Public Provident Fund", "8.0", "7.9", "7.9", "7.9", "7.1", "7.1", "7.1", "7.1", "7.1", "7.1"],
      ["Sukanya Samriddhi Account Scheme", "8.5", "8.4", "8.4", "8.4", "7.6", "7.6", "7.6", "7.6", "7.6", "7.6"],
      ["Kisan Vikas Patra", "7.7 (112 months)", "7.6 (113 months)", "7.6 (113 months)", "7.6 (113 months)", "6.9 (124 months)", "6.9 (124 months)", "6.9 (124 months)", "6.9 (124 months)", "6.9 (124 months)", "6.9 (124 months)"]
    ]
  },
  {
    id: "table-4",
    heading: "w.e.f. 1st April 2016 to 31st March 2019",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "2016-2017", colSpan: 4 },
      { label: "2017-2018", colSpan: 4 },
      { label: "2018-2019", colSpan: 2 }
    ],
    subHeaders: ["April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep", "Oct-Dec", "Jan-Mar", "April-June", "July-Sep"],
    rows: [
      ["Savings Account", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0"],
      ["1 Year Time Deposit", "7.1", "7.1", "6.9", "6.9", "6.9", "6.8", "6.8", "6.6", "6.6", "6.6"],
      ["2 Year Time Deposit", "7.2", "7.2", "7.1", "7.1", "7.0", "6.9", "6.9", "6.7", "6.7", "6.7"],
      ["3 Year Time Deposit", "7.4", "7.4", "7.3", "7.3", "7.2", "7.1", "7.1", "6.9", "6.9", "6.9"],
      ["5 Year Time Deposit", "7.9", "7.9", "7.8", "7.8", "7.7", "7.6", "7.6", "7.4", "7.4", "7.4"],
      ["5 Year Recurring Deposit", "7.4", "7.4", "7.3", "7.3", "7.2", "7.1", "7.1", "6.9", "6.9", "6.9"],
      ["5 Year Senior Citizens Savings Scheme", "8.6", "8.6", "8.5", "8.5", "8.4", "8.3", "8.3", "8.3", "8.3", "8.3"],
      ["5 Year Monthly Income Account", "7.8", "7.8", "7.7", "7.7", "7.6", "7.5", "7.5", "7.3", "7.3", "7.3"],
      ["5 Year National Savings Certificate", "8.1", "8.1", "8.0", "8.0", "7.9", "7.8", "7.8", "7.6", "7.6", "7.6"],
      ["Public Provident Fund", "8.1", "8.1", "8.0", "8.0", "7.9", "7.8", "7.8", "7.6", "7.6", "7.6"],
      ["Sukanya Samriddhi Account Scheme", "8.6", "8.6", "8.5", "8.5", "8.4", "8.3", "8.3", "8.1", "8.1", "8.1"],
      ["Kisan Vikas Patra", "7.8 (110 months)", "7.8 (110 months)", "7.7 (112 months)", "7.7 (112 months)", "7.6 (113 months)", "7.5 (115 months)", "7.5 (115 months)", "7.3 (118 months)", "7.3 (118 months)", "7.3 (118 months)"]
    ]
  },
  {
    id: "table-5",
    heading: "w.e.f. 1st Dec 2011 to 31st March 2016",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "2011-2012 (w.e.f 01/12/2011)", colSpan: 1, rowSpan: 2 },
      { label: "2012-2013", colSpan: 1, rowSpan: 2 },
      { label: "2013-2014", colSpan: 1, rowSpan: 2 },
      { label: "2014-2015", colSpan: 1, rowSpan: 2 }
    ],
    subHeaders: [],
    rows: [
      ["Savings Account", "4.0", "4.0", "4.0", ""],
      ["1 Year Time Deposit", "7.7", "8.2", "8.2", ""],
      ["2 Year Time Deposit", "7.8", "8.3", "8.2", ""],
      ["3 Year Time Deposit", "8.0", "8.4", "8.3", ""],
      ["5 Year Time Deposit", "8.3", "8.5", "8.4", ""],
      ["5 Year Recurring Deposit", "8.0", "8.4", "8.3", ""],
      ["Monthly Income Account", "8.2", "8.5", "8.4", ""],
      ["Senior Citizens Savings Scheme", "9.0", "9.3", "9.2", ""],
      ["National Savings Certificate VIII Issue", "8.4", "8.6", "8.5", ""],
      ["Kisan Vikas Patra", "", "", "", "8.7 (100 months)"],
      ["Public Provident Fund", "8.6", "8.8", "8.7", ""],
      ["Sukanya Samriddhi Account", "", "", "", ""]
    ]
  },
  {
    id: "table-6",
    heading: "w.e.f. 1990 to 30th Nov 2011",
    topHeaders: [
      { label: "Savings Scheme", colSpan: 1, rowSpan: 2 },
      { label: "1990-91", colSpan: 1, rowSpan: 2 },
      { label: "1991-92", colSpan: 1, rowSpan: 2 },
      { label: "1992-93", colSpan: 1, rowSpan: 2 },
      { label: "1993-94", colSpan: 1, rowSpan: 2 },
      { label: "1994-95", colSpan: 1, rowSpan: 2 },
      { label: "1995-96", colSpan: 1, rowSpan: 2 },
      { label: "1996-97", colSpan: 1, rowSpan: 2 },
      { label: "1997-98", colSpan: 1, rowSpan: 2 },
      { label: "1998-99", colSpan: 1, rowSpan: 2 },
      { label: "1999-00", colSpan: 1, rowSpan: 2 },
      { label: "2000-01", colSpan: 1, rowSpan: 2 },
      { label: "2001-02", colSpan: 1, rowSpan: 2 },
      { label: "2002-03", colSpan: 1, rowSpan: 2 },
      { label: "2003-04", colSpan: 1, rowSpan: 2 },
      { label: "2004-05", colSpan: 1, rowSpan: 2 },
      { label: "2005-06", colSpan: 1, rowSpan: 2 },
      { label: "2006-07", colSpan: 1, rowSpan: 2 },
      { label: "2007-08", colSpan: 1, rowSpan: 2 }
    ],
    subHeaders: [],
    rows: [
      ["Savings Account", "5.50", "5.50", "5.50", "5.50", "5.50", "5.50", "5.50", "5.50", "4.50", "4.50", "3.50", "3.50", "3.50", "3.50", "3.50", "3.50", "3.50", "3.50"],
      ["Time Deposit 1 Yr.", "12.00", "12.00", "12.00", "10.50", "10.50", "10.50", "10.50", "10.50", "9.00", "8.00", "7.50", "7.25", "6.25", "6.25", "6.25", "6.25", "6.25", "6.25"],
      ["Time Deposit 2 Yr.", "12.00", "12.00", "12.00", "11.00", "11.00", "11.00", "11.00", "11.00", "10.00", "9.00", "8.00", "7.50", "6.50", "6.50", "6.50", "6.50", "6.50", "6.50"],
      ["Time Deposit 3Yr.", "13.00", "13.00", "13.00", "12.00", "12.00", "12.00", "12.00", "12.00", "11.00", "10.00", "9.00", "8.25", "7.25", "7.25", "7.25", "7.25", "7.25", "7.25"],
      ["Time Deposit 5 Yr.", "13.50", "13.50", "13.50", "12.50", "12.50", "12.50", "12.50", "12.50", "11.50", "10.50", "9.00", "8.50", "7.50", "7.50", "7.50", "7.50", "7.50", "7.50"],
      ["Recurring Deposit", "13.50", "13.50", "13.50", "12.50", "12.50", "12.50", "12.50", "12.50", "11.50", "10.50", "9.00", "8.50", "7.50", "7.50", "7.50", "7.50", "7.50", "7.50"],
      ["Monthly Income Account", "14.00", "14.00", "14.00", "13.00", "13.00", "13.00", "13.00", "13.00", "12.00", "11.00", "9.50", "9.00", "8.00", "8.00", "8.00", "8.00", "8.00", "8.00"],
      ["Senior Citizens Savings Scheme", "", "", "", "", "", "", "Launched in FY 2004", "", "", "", "", "", "", "9.0", "9.0", "9.0", "9.0", "9.0"],
      ["NSC VIII Issue", "12.00", "12.00", "12.00", "12.00", "12.00", "12.00", "12.00", "12.00", "11.50", "11.00", "9.50", "9.00", "8.00", "8.00", "8.00", "8.00", "8.00", "8.00"]
    ]
  }
];

const PaginatedTable: React.FC<{ data: TableData, initialPageSize?: number }> = ({ data, initialPageSize = 10 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [page, setPage] = useState(1);

  const filteredRows = useMemo(() => {
    return data.rows.filter(row => 
      row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [data.rows, searchTerm]);

  const totalItems = filteredRows.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => { setPage(1); }, [searchTerm, pageSize]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const startIdx = (page - 1) * pageSize;
  const pagedTable = filteredRows.slice(startIdx, startIdx + pageSize);
  const showingFrom = totalItems === 0 ? 0 : startIdx + 1;
  const showingTo = Math.min(startIdx + pageSize, totalItems);

  const colCount = data.rows[0]?.length || 1;

  return (
    <div className="table-section mb-5 glass-card" style={{ padding: '2rem', marginBottom: '3rem', overflowX: 'auto' }}>
      <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>{data.heading}</h3>
      
      {/* Table specific controls */}
      <div className="resource-controls" style={{ background: 'transparent', boxShadow: 'none', padding: '0 0 1rem 0' }}>
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search in table..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="page-size-control">
          <label>Show</label>
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <span>entries</span>
        </div>
      </div>

      <div className="table-responsive">
        <table className="modern-table">
          <thead>
            <tr>
              {data.topHeaders.map((header, i) => (
                <th key={`top-${i}`} colSpan={header.colSpan} rowSpan={header.rowSpan || 1} style={{ textAlign: 'center', borderBottom: '1px solid rgba(var(--primary-rgb), 0.1)' }}>
                  {header.label}
                </th>
              ))}
            </tr>
            {data.subHeaders.length > 0 && (
              <tr>
                {data.subHeaders.map((header, i) => (
                  <th key={`sub-${i}`} style={{ textAlign: 'center' }}>
                    {header}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {pagedTable.length > 0 ? (
              pagedTable.map((row, i) => (
                <tr key={startIdx + i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ whiteSpace: j === 0 ? 'nowrap' : 'normal', textAlign: j === 0 ? 'left' : 'center' }}>{cell}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={colCount} className="text-center no-data">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalItems > 0 && (
        <div className="resource-pagination mt-3">
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
  );
};

export const RatesOfNscInterest: React.FC = () => {
  const title = "Rates of NSC Interest";
  const description = "Historical interest rates of National Savings Schemes issued by the National Savings Institute, Government of India.";

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
          {nscData.map(table => (
            <PaginatedTable key={table.id} data={table} />
          ))}
          
          <div className="glass-card mt-4" style={{ padding: '1.5rem', backgroundColor: 'rgba(var(--primary-rgb), 0.02)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Source & Disclaimer</h3>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              The interest rates provided above are sourced from the official documents published by the National Savings Institute (NSI), Ministry of Finance, Government of India. Please refer to official notifications for the most up-to-date and legally binding rates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
