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
    "I. Buildings [NESD]",
    "",
    "",
    ""
  ],
  [
    "(a) Building (other than factory buildings) RCC Frame Structure",
    "60 Years",
    "1.58%",
    "4.87%"
  ],
  [
    "(b) Building (other than factory buildings) other than RCC Frame Structure",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(c) Factory buildings",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(d) Fences, wells, tube wells",
    "5 Years",
    "19.00%",
    "45.07%"
  ],
  [
    "(e) Other (including temporary structure, etc.)",
    "3 Years",
    "31.67%",
    "63.16%"
  ],
  [
    "II. Bridges, culverts, bunkers, etc. [NESD]",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "III. Roads [NESD]",
    "",
    "",
    ""
  ],
  [
    "(a) Carpeted Roads",
    "",
    "",
    ""
  ],
  [
    "(i) Carpeted Roads \u2013 RCC",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "(ii) Carpeted Roads \u2013 other than RCC",
    "5 Years",
    "19.00%",
    "45.07%"
  ],
  [
    "(b) Non-carpeted roads",
    "3 Years",
    "31.67%",
    "63.16%"
  ],
  [
    "IV. Plant and Machinery",
    "",
    "",
    ""
  ],
  [
    "(i) General rate applicable to Plant and Machinery not covered under Special Plant and Machinery",
    "",
    "",
    ""
  ],
  [
    "(a) Plant and Machinery other than continuous process plant not covered under specific industries [NESD]",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "(b) continuous process plant for which no special rate has been prescribed under (ii) below [NESD]",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "(ii) Special Plant and Machinery",
    "",
    "",
    ""
  ],
  [
    "(a) Plant and Machinery related to production and exhibition of Motion Picture Films",
    "",
    "",
    ""
  ],
  [
    "1. Cinematograph films\u2014Machinery used in the production and exhibition of cinematograph films, recording and reproducing equipments, developing machines, printing machines, editing machines, synchronizers and studio lights except bulbs",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "2. Projecting equipment for exhibition of films",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "(b) Plant and Machinery used in glass manufacturing",
    "",
    "",
    ""
  ],
  [
    "1. Plant and Machinery except direct fire glass melting furnaces \u2014 Recuperative and regenerative glass melting furnaces",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "2. Plant and Machinery except direct fire glass melting furnaces \u2014 Moulds [NESD]",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "3. Float Glass Melting Furnaces [NESD]",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "(c) Plant and Machinery used in mines and quarries\u2014Portable underground machinery and earth moving machinery used in open cast mining [NESD]",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "(d) Plant and Machinery used in Telecommunications [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Towers",
    "18 Years",
    "5.28%",
    "15.33%"
  ],
  [
    "2. Telecom transceivers, switching centres, transmission and other network equipment",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "3. Telecom \u2013 Ducts, Cables and optical fibre",
    "18 Years",
    "5.28%",
    "15.33%"
  ],
  [
    "4. Satellites",
    "18 Years",
    "5.28%",
    "15.33%"
  ],
  [
    "(e) Plant and Machinery used in exploration, production and refining oil and gas [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Refineries",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "2. Oil and gas assets (including wells), processing plant and facilities",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "3. Petrochemical Plant",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "4. Storage tanks and related equipment",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "5. Pipelines",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "6. Drilling Rig",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "7. Field operations (above ground) Portable boilers, drilling tools, well-head tanks, etc.",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "8. Loggers",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "(f) Plant and Machinery used in generation, transmission and distribution of power [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Thermal/ Gas/ Combined Cycle Power Generation Plant",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "2. Hydro Power Generation Plant",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "3. Nuclear Power Generation Plant",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "4. Transmission lines, cables and other network assets",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "5. Wind Power Generation Plant",
    "22 Years",
    "4.32%",
    "12.73%"
  ],
  [
    "6. Electric Distribution Plant",
    "35 Years",
    "2.71%",
    "8.20%"
  ],
  [
    "7. Gas Storage and Distribution Plant",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "8. Water Distribution Plant including pipelines",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(g) Plant and Machinery used in manufacture of steel",
    "",
    "",
    ""
  ],
  [
    "1. Sinter Plant",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "2. Blast Furnace",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "3. Coke Ovens",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "4. Rolling mill in steel plant",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "5. Basic oxygen Furnace Converter",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "(h) Plant and Machinery used in manufacture of non-ferrous metals",
    "",
    "",
    ""
  ],
  [
    "1. Metal pot line [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "2. Bauxite crushing and grinding section [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "3. Digester Section [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "4. Turbine [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "5. Equipments for Calcination [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "6. Copper Smelter [NESD]",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "7. Roll Grinder",
    "40 Years",
    "2.38%",
    "7.22%"
  ],
  [
    "8. Soaking Pit",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "9. Annealing Furnace",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "10. Rolling Mills",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "11. Equipments for Scalping, Slitting , etc. [NESD]",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "12. Surface Miner, Ripper Dozer, etc., used in mines",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "13. Copper refining plant [NESD]",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "(i) Plant and Machinery used in medical and surgical operations [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Electrical Machinery, X-ray and electrotherapeutic apparatus and accessories thereto, medical, diagnostic equipments, namely, Cat-scan, Ultrasound Machines, ECG Monitors, etc.",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "2. Other Equipments.",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "(j) Plant and Machinery used in manufacture of pharmaceuticals and chemicals [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Reactors",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "2. Distillation Columns",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "3. Drying equipments/Centrifuges and Decanters",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "4. Vessel/storage tanks",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "(k) Plant and Machinery used in civil construction",
    "",
    "",
    ""
  ],
  [
    "1. Concreting, Crushing, Piling Equipments and Road Making Equipments",
    "12 Years",
    "7.92%",
    "22.09%"
  ],
  [
    "2. Heavy Lift Equipments\u2014",
    "",
    "",
    ""
  ],
  [
    "- Cranes with capacity of more than 100 tons",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "- Cranes with capacity of less than 100 tons",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "3. Transmission line, Tunneling Equipments [NESD]",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "4. Earth-moving equipments",
    "9 Years",
    "10.56%",
    "28.31%"
  ],
  [
    "5. Others including Material Handling /Pipeline/Welding Equipments [NESD]",
    "12 Years",
    "7.92%",
    "22.09%"
  ],
  [
    "(l) Plant and Machinery used in salt works [NESD]",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "V. Furniture and fittings [NESD]",
    "",
    "",
    ""
  ],
  [
    "(i) General furniture and fittings",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "(ii) Furniture and fittings used in hotels, restaurants and boarding houses, schools, colleges and other educational institutions, libraries; welfare centres; meeting halls, cinema houses; theatres and circuses; and furniture and fittings let out on hire for use on the occasion of marriages and similar functions.",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "VI. Motor Vehicles [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Motor cycles, scooters and other mopeds",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "2. Motor buses, motor lorries, motor cars and motor taxies used in a business of running them on hire",
    "6 Years",
    "15.83%",
    "39.30%"
  ],
  [
    "3. Motor buses, motor lorries and motor cars other than those used in a business of running them on hire",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "4. Motor tractors, harvesting combines and heavy vehicles",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "5. Electrically operated vehicles including battery powered or fuel cell powered vehicles",
    "8 Years",
    "11.88%",
    "31.23%"
  ],
  [
    "VII. Ships [NESD]",
    "",
    "",
    ""
  ],
  [
    "1. Ocean-going ships",
    "",
    "",
    ""
  ],
  [
    "(i) Bulk Carriers and liner vessels",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "(ii) Crude tankers, product carriers and easy chemical carriers with or without conventional tank coatings.",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "(iii) Chemicals and Acid Carriers:",
    "",
    "",
    ""
  ],
  [
    "(a) With Stainless steel tanks",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "(b) With other tanks",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "(iv) Liquified gas carriers",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(v) Conventional large passenger vessels which are used for cruise purpose also",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(vi) Coastal service ships of all categories",
    "30 Years",
    "3.17%",
    "9.50%"
  ],
  [
    "(vii) Offshore supply and support vessels",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "(viii) Catamarans and other high speed passenger for ships or boats",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "(ix) Drill ships",
    "25 Years",
    "3.80%",
    "11.29%"
  ],
  [
    "(x) Hovercrafts",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "(xi) Fishing vessels with wooden hull",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "(xii) Dredgers, tugs, barges, survey launches and other similar ships used mainly for dredging purposes",
    "14 Years",
    "6.79%",
    "19.26%"
  ],
  [
    "2. Vessels ordinarily operating on inland waters\u2014",
    "",
    "",
    ""
  ],
  [
    "(i) Speed boats",
    "13 Years",
    "7.31%",
    "20.58%"
  ],
  [
    "(ii) Other vessels",
    "28 Years",
    "3.39%",
    "10.15%"
  ],
  [
    "VIII. Aircrafts or Helicopters [NESD]",
    "20 Years",
    "4.75%",
    "13.91%"
  ],
  [
    "IX. Railways sidings, locomotives, rolling stocks, tramways and railways used by concerns, excluding railway concerns [NESD]",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "X. Ropeway structures [NESD]",
    "15 Years",
    "6.33%",
    "18.10%"
  ],
  [
    "XI. Office equipment [NESD]",
    "5 Years",
    "19.00%",
    "45.07%"
  ],
  [
    "XII. Computers and data processing units [NESD]",
    "",
    "",
    ""
  ],
  [
    "(i) Servers and networks",
    "6 Years",
    "15.83%",
    "39.30%"
  ],
  [
    "(ii) End user devices, such as, desktops, laptops, etc.",
    "3 Years",
    "31.67%",
    "63.16%"
  ],
  [
    "XIII. Laboratory equipment [NESD]",
    "",
    "",
    ""
  ],
  [
    "(i) General laboratory equipment",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "(ii) Laboratory equipments used in educational institutions",
    "5 Years",
    "19.00%",
    "45.07%"
  ],
  [
    "XIV. Electrical Installations and Equipment [NESD]",
    "10 Years",
    "9.50%",
    "25.89%"
  ],
  [
    "XV. Hydraulic works, pipelines and sluices [NESD]",
    "15 Years",
    "6.33%",
    "18.10%"
  ]
];

export const RatesOfDepreciationCompanyAct: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const title = "Rates of Depreciation under Company Act";
  const description = "Depreciation Rate Chart as per Schedule II of The Companies Act 2013.";

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
                    <th rowSpan={2} style={{width: '50%'}}>Nature of Assets</th>
                    <th rowSpan={2}>Useful Life</th>
                    <th colSpan={2} style={{textAlign: 'center'}}>Depreciation Rate</th>
                  </tr>
                  <tr>
                    <th style={{textAlign: 'center'}}>SLM</th>
                    <th style={{textAlign: 'center'}}>WDV</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedTable.length > 0 ? (
                    pagedTable.map((row, i) => (
                      <tr key={startIdx + i}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ whiteSpace: 'pre-wrap', fontWeight: (cell === '' && j > 0) ? 'bold' : 'normal' }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center no-data">
                        No matching records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="glass-card mt-4" style={{ padding: '1.5rem', backgroundColor: 'rgba(var(--primary-rgb), 0.02)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Notes & Abbreviations</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: 1.6 }}>
                <li><strong>NESD:</strong> No Extra Shift Depreciation.</li>
                <li className="mt-2"><strong>SLM:</strong> Straight Line Method.</li>
                <li className="mt-2"><strong>WDV:</strong> Written Down Value.</li>
                <li className="mt-2">The useful life of assets is based on Schedule II to the Companies Act, 2013.</li>
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
