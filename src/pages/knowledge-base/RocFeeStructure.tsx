import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import '../../components/layout/ResourceLayout.css';

export const RocFeeStructure: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const title = "ROC - FEES STRUCTURE";
  const description = "Fees For Filing Various Documents or For Registering any Fact Under Companies Act, 2013";

  // Helper to highlight matching text if needed, or we can just let browser search handle it, 
  // but a simple text filter per table row is good for UX.
  const filterRow = (rowText: string) => {
    return rowText.toLowerCase().includes(searchTerm.toLowerCase());
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

      <section className="resource-main">
        <div className="container">
          
          <div className="resource-controls glass-card mb-6">
            <div className="search-box" style={{ width: '100%', maxWidth: '400px' }}>
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={`Search in ${title}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="resource-content">
            
            {/* Table 1 */}
            <div className="glass-card mb-8">
              <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                Fees For Filing Various Documents or For Registering any Fact (Except Form No SH. 7)
              </h3>
              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th style={{width: '60%'}}>Nominal Share Capital</th>
                      <th>Fees per document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cap: "Less than Rs. 1,00,000", fee: "Rs. 200" },
                      { cap: "Rs. 1,00,000 less than Rs. 5,00,000", fee: "Rs. 300" },
                      { cap: "Rs. 5,00,000 less than Rs. 25,00,000", fee: "Rs. 400" },
                      { cap: "Rs. 25,00,000 or more less than Rs. 1 Crore", fee: "Rs. 500" },
                      { cap: "Rs. 1 Crore or more", fee: "Rs. 600" },
                    ].filter(r => filterRow(`${r.cap} ${r.fee}`)).map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.cap}</td>
                        <td>{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-sm">
                <p><strong>Form No. SH 7 For Increasing Authorised Capital:</strong></p>
                <p>The difference between the fee payable on the proposed Authorized Capital and on the existing Capital at the rates prevailing on date of filing.</p>
                <p className="mt-2">For enhancement of Authorized Capital or for registration of a new company, an additional stamp duty is payable @0.15% of the increased authorized capital or fresh authorized capital of new company as per Delhi Stamp Act.</p>
              </div>
            </div>

            {/* Table 2 */}
            <div className="glass-card mb-8">
              <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                Fee on Applications (including Appeal) made to Central Government
              </h3>
              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th style={{width: '50%'}}>Application made by</th>
                      <th>OPC & Small Companies</th>
                      <th>Other than OPC & Small Companies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { col1: "(i) A Company having an authorized Share Capital of :", col2: "", col3: "", isHeader: true },
                      { col1: "(a) Upto Rs 25,00,000", col2: "1000", col3: "2000" },
                      { col1: "(b) More than Rs 25,00,000 and upto Rs 50,00,000", col2: "2500", col3: "5000" },
                      { col1: "(c) More than Rs 50,00,000 and upto Rs 5 Crores", col2: "N/A", col3: "10000" },
                      { col1: "(d) More than Rs 5 Crores and upto Rs 10 Crores", col2: "N/A", col3: "15000" },
                      { col1: "(e) More Than Rs 10 Crores", col2: "N/A", col3: "20000" },
                      { col1: "(ii) A Company limited by guarantee but not having share capital", col2: "-", col3: "2000" },
                      { col1: "(iii) Section 8 Company", col2: "-", col3: "2000" },
                      { col1: "(iv) Foreign Company", col2: "-", col3: "5000" },
                      { col1: "(v) Application for Allotment of DIN U/S 153", col2: "500", col3: "500" },
                      { col1: "(vi) For surrender of Director Identification Number under rule 11(f) of the Companies (Appointment and Qualification of Directors) Rules 2014", col2: "1000", col3: "1000" },
                    ].filter(r => filterRow(`${r.col1} ${r.col2} ${r.col3}`)).map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ paddingLeft: row.col1.startsWith('(') && !row.col1.startsWith('(i)') && !row.isHeader ? '2rem' : '1rem', fontWeight: row.isHeader ? 'bold' : 'normal' }}>
                          {row.col1}
                        </td>
                        <td>{row.col2}</td>
                        <td>{row.col3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3 */}
            <div className="glass-card mb-8">
              <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                Additional Fees For Late Filing of Document
              </h3>
              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th style={{width: '30%'}}>Document</th>
                      <th style={{width: '35%'}}>Period of Delay</th>
                      <th style={{width: '35%'}}>Rate of Additional Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { doc: "Form No. SH 7 (increase in Share Capital)", delay: "Up to 6 Months", fee: "2.5% pm on normal fee" },
                      { doc: "", delay: "Beyond 6 Months", fee: "3% pm on normal fee" },
                      { doc: "Other Documents", delay: "i) Upto 15 days (Sec. 139 & 157)", fee: "One time of normal filing fee" },
                      { doc: "", delay: "ii) More than 15 days and upto 30 days (Section 139 and 157) and upto 30 days in remaining forms", fee: "Two times of normal filing fee" },
                      { doc: "", delay: "iii) More than 30 days and upto 60 days", fee: "Four times of normal filing fee" },
                      { doc: "", delay: "iv) More than 60 days and upto 90 days", fee: "Six times of normal filing fee" },
                      { doc: "", delay: "v) More than 90 days and upto 180 days", fee: "Ten times of normal filing fee" },
                      { doc: "", delay: "vi) More than 180 days", fee: "Twelve times of normal filing fee" },
                    ].filter(r => filterRow(`${r.doc} ${r.delay} ${r.fee}`)).map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: row.doc ? 'bold' : 'normal' }}>{row.doc}</td>
                        <td>{row.delay}</td>
                        <td>{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 4 */}
            <div className="glass-card mb-8">
              <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                Additional Fees for Forms under section 92 or 137
              </h3>
              <div className="p-4 bg-gray-50 text-sm border-b border-gray-100">
                <p>In case the period within which a document required to be submitted under section 92 or 137 of the Act expires after 30/06/2018, the additional fee mentioned in Table shall be payable:</p>
              </div>
              <div className="table-responsive">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th style={{width: '10%'}}>S. No.</th>
                      <th style={{width: '60%'}}>Period of Delay</th>
                      <th>Additional fee payable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { sno: "01", delay: "Delay beyond period provided under Section 92(4) of the Act (MGT-7/7A)", fee: "One Hundred per day" },
                      { sno: "02", delay: "Delay beyond period provided under Section 137(1) of the Act (AOC-4/AOC-XBRL)", fee: "One Hundred per day" },
                    ].filter(r => filterRow(`${r.sno} ${r.delay} ${r.fee}`)).map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.sno}</td>
                        <td>{row.delay}</td>
                        <td>{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Table 5 */}
              <div className="glass-card">
                <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                  Other Fee to be Paid
                </h3>
                <div className="table-responsive">
                  <table className="modern-table">
                    <thead>
                      <tr>
                        <th style={{width: '70%'}}>Inspection of File and Charges</th>
                        <th>Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item: "File Inspection", charge: "Rs. 100" },
                        { item: "Charges Inspection", charge: "Rs. 100" },
                      ].filter(r => filterRow(`${r.item} ${r.charge}`)).map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.item}</td>
                          <td>{row.charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 6 */}
              <div className="glass-card">
                <h3 className="p-4 border-b border-gray-100" style={{ color: 'var(--primary-color)' }}>
                  Fees for Obtaining Certified Copy
                </h3>
                <div className="table-responsive">
                  <table className="modern-table">
                    <thead>
                      <tr>
                        <th style={{width: '70%'}}>Item</th>
                        <th>Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item: "Certificate of Incorporation", charge: "Rs. 100" },
                        { item: "Other Certified Copies", charge: "Rs. 25 per page" },
                      ].filter(r => filterRow(`${r.item} ${r.charge}`)).map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.item}</td>
                          <td>{row.charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="glass-card mt-8" style={{ padding: '1rem', backgroundColor: 'rgba(var(--primary-rgb), 0.02)' }}>
              <p className="text-sm text-gray-500"><strong>Note:</strong> Last updated on 09.04.2024</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
