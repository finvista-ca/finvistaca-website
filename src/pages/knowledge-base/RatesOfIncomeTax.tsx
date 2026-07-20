import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import '../../components/layout/ResourceLayout.css';

const PAGE_SIZE_OPTIONS = [10, 30, 50];

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

interface ArticleSection {
  id: string;
  title: string;
  content: React.ReactNode;
  searchableText: string;
}

const SECTIONS: ArticleSection[] = [
  {
    id: "individuals",
    title: "1. Individuals (Other than resident senior and super senior citizen)",
    searchableText: "Individuals Other than resident senior and super senior citizen Up to Rs. 2,50,000 Rs. 2,50,000 to Rs. 5,00,000 Rs. 5,00,000 to Rs. 10,00,000 Above Rs. 10,00,000 5% 20% 30%",
    content: (
      <div>
        <p>In case of an Individual (resident or non-resident) or HUF or Association of Person or Body of Individual or any other artificial juridical person.</p>
        <div className="table-responsive glass-card mt-3">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Net Income Range</th>
                <th>Rate of Income-tax (AY 2026-27)</th>
                <th>Rate of Income-tax (AY 2025-26)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Up to Rs. 2,50,000</td><td>-</td><td>-</td></tr>
              <tr><td>Rs. 2,50,000 to Rs. 5,00,000</td><td>5%</td><td>5%</td></tr>
              <tr><td>Rs. 5,00,000 to Rs. 10,00,000</td><td>20%</td><td>20%</td></tr>
              <tr><td>Above Rs. 10,00,000</td><td>30%</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "senior-citizen",
    title: "Resident Senior Citizen (60 years or more but less than 80 years)",
    searchableText: "Resident Senior Citizen who is 60 years or more but less than 80 years at any time during the previous year Up to Rs. 3,00,000 Rs. 3,00,000 to Rs. 5,00,000 Rs. 5,00,000 to Rs. 10,00,000 Above Rs. 10,00,000 5% 20% 30%",
    content: (
      <div>
        <p>Who is 60 years or more but less than 80 years at any time during the previous year.</p>
        <div className="table-responsive glass-card mt-3">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Net Income Range</th>
                <th>Rate of Income-tax (AY 2026-27)</th>
                <th>Rate of Income-tax (AY 2025-26)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Up to Rs. 3,00,000</td><td>-</td><td>-</td></tr>
              <tr><td>Rs. 3,00,000 to Rs. 5,00,000</td><td>5%</td><td>5%</td></tr>
              <tr><td>Rs. 5,00,000 to Rs. 10,00,000</td><td>20%</td><td>20%</td></tr>
              <tr><td>Above Rs. 10,00,000</td><td>30%</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "super-senior-citizen",
    title: "Resident Super Senior Citizen (80 years or more)",
    searchableText: "Resident Super Senior Citizen who is 80 years or more at any time during the previous year Up to Rs. 5,00,000 Rs. 5,00,000 to Rs. 10,00,000 Above Rs. 10,00,000 20% 30%",
    content: (
      <div>
        <p>Who is 80 years or more at any time during the previous year.</p>
        <div className="table-responsive glass-card mt-3">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Net Income Range</th>
                <th>Rate of Income-tax (AY 2026-27)</th>
                <th>Rate of Income-tax (AY 2025-26)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Up to Rs. 5,00,000</td><td>-</td><td>-</td></tr>
              <tr><td>Rs. 5,00,000 to Rs. 10,00,000</td><td>20%</td><td>20%</td></tr>
              <tr><td>Above Rs. 10,00,000</td><td>30%</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "huf-aop-boi",
    title: "Hindu Undivided Family (Including AOP, BOI and Artificial Juridical Person)",
    searchableText: "Hindu Undivided Family Including AOP BOI and Artificial Juridical Person Up to Rs. 2,50,000 Rs. 2,50,000 to Rs. 5,00,000 Rs. 5,00,000 to Rs. 10,00,000 Above Rs. 10,00,000 5% 20% 30%",
    content: (
      <div>
        <div className="table-responsive glass-card">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Net Income Range</th>
                <th>Rate of Income-tax (AY 2025-26)</th>
                <th>Rate of Income-tax (AY 2024-25)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Up to Rs. 2,50,000</td><td>-</td><td>-</td></tr>
              <tr><td>Rs. 2,50,000 to Rs. 5,00,000</td><td>5%</td><td>5%</td></tr>
              <tr><td>Rs. 5,00,000 to Rs. 10,00,000</td><td>20%</td><td>20%</td></tr>
              <tr><td>Above Rs. 10,00,000</td><td>30%</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "surcharge-individual",
    title: "Surcharge for Individuals, HUF, AOP, BOI",
    searchableText: "Surcharge is levied on the amount of income-tax at following rates if total income of an assessee exceeds specified limits Rs. 50 Lakhs to Rs. 1 Crore Rs. 1 Crore to Rs. 2 Crores Rs. 2 Crores to Rs. 5 Crores above Rs. 5 crore 10% 15% 25% 37% enhanced surcharge 111A 112 112A 115AD 10(4D)",
    content: (
      <div>
        <p>Surcharge is levied on the amount of income-tax at the following rates if the total income of an assessee exceeds specified limits:</p>
        <div className="table-responsive glass-card mt-3 mb-3">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Range of Income: Rs. 50 Lakhs to Rs. 1 Crore</th>
                <th>Range of Income: Rs. 1 Crore to Rs. 2 Crores</th>
                <th>Range of Income: Rs. 2 Crores to Rs. 5 Crores</th>
                <th>Range of Income: above Rs. 5 crore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10%</td>
                <td>15%</td>
                <td>25%</td>
                <td>37%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Notes:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>The enhanced surcharge of 25% & 37%, as the case may be, is not levied, on dividend income or income chargeable to tax under sections 111A, 112, 112A and 115AD(1)(b). Hence, the maximum rate of surcharge on tax payable on such incomes shall be 15%.</li>
          <li className="mt-2">The surcharge rate for AOP with all members as a company, shall be capped at 15%.</li>
          <li className="mt-2">The surcharge rate is nil if the total income of a 'specified fund' as referred to in section 10(4D) includes any income in respect of securities as given under section 115AD(1)(a).</li>
        </ul>
      </div>
    )
  },
  {
    id: "marginal-relief",
    title: "Marginal Relief",
    searchableText: "Marginal relief is available from surcharge in following manner net income exceeds Rs. 50 lakh Rs. 1 Crore Rs. 2 crores Rs. 5 crores",
    content: (
      <div>
        <p>Marginal relief is available from surcharge in the following manner:</p>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>In case where net income exceeds Rs. 50 lakh but doesn't exceed Rs. 1 Crore, the amount payable as income tax and surcharge shall not exceed the total amount payable as income tax on total income of Rs 50 Lakh by more than the amount of income that exceeds Rs 50 Lakhs.</li>
          <li className="mt-2">In case where net income exceeds Rs. 1 crore but doesn't exceed Rs. 2 crore, marginal relief shall be available from surcharge in such a manner that the amount payable as income tax and surcharge shall not exceed the total amount payable as income-tax on total income of Rs. 1 crore by more than the amount of income that exceeds Rs. 1 crore.</li>
          <li className="mt-2">In case where net income exceeds Rs. 2 crores but doesn't exceed Rs. 5 crores, marginal relief shall be available from surcharge in such a manner that the amount payable as income tax and surcharge shall not exceed the total amount payable as income-tax on total income of Rs. 2 crores by more than the amount of income that exceeds Rs. 2 crores.</li>
          <li className="mt-2">In case where net income exceeds Rs. 5 crores, marginal relief shall be available from surcharge in such a manner that the amount payable as income tax and surcharge shall not exceed the total amount payable as income-tax on total income of Rs. 5 crores by more than the amount of income that exceeds Rs. 5 crores.</li>
        </ul>
      </div>
    )
  },
  {
    id: "health-education-cess",
    title: "Health and Education Cess",
    searchableText: "Health and Education Cess is levied at the rate of 4% on the amount of income-tax plus surcharge 10(4D) 115AD 87A",
    content: (
      <div>
        <p>Health and Education Cess is levied at the rate of 4% on the amount of income-tax plus surcharge.</p>
        <h4 className="mt-3">Notes:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>The Health and Education Cess is nil if the total income of a 'specified fund' as referred to section 10(4D) includes any income in respect of securities as given under section 115AD(1)(a).</li>
          <li className="mt-2">A resident individual (whose net income does not exceed Rs. 5,00,000) can avail rebate under section 87A. It is deductible from income-tax before calculating education cess. The amount of rebate is 100 per cent of income-tax or Rs. 12,500, whichever is less.</li>
        </ul>
      </div>
    )
  },
  {
    id: "amt-individuals",
    title: "Alternate Minimum Tax (AMT)",
    searchableText: "An individual is liable to pay Alternate Minimum Tax where tax payable by him, on his total income computed as per normal provisions of the Act, is less than 18.5% of adjusted total income 9% International Financial Services Centre",
    content: (
      <div>
        <p>An individual is liable to pay Alternate Minimum Tax where tax payable by him, on his total income computed as per normal provisions of the Act, is less than 18.5% of 'adjusted total income'. In such a case the 'adjusted total income' is taken as income of such individual and he shall be liable to pay tax at the rate of 18.5% of such 'adjusted total income'.</p>
        <p className="mt-2">However, AMT is levied at the rate of 9% (plus surcharge and cess as applicable) in case of an assessee other than a company, being a unit of an International Financial Services Centre and deriving its income solely in convertible foreign exchange.</p>
      </div>
    )
  },
  {
    id: "special-tax-rate-115bac",
    title: "1.1. Special tax Rate for Individual, HUF, AOP, BOI or AJP (Section 115BAC)",
    searchableText: "Special tax Rate for Individual, HUF, AOP, BOI or AJP Section 115BAC alternative regime providing for lower tax rates Upto Rs. 3,00,000 From Rs. 3,00,001 to Rs. 7,00,000 Nil 5% 10% 15% 20% 25% 30%",
    content: (
      <div>
        <p>The Finance Act 2020 inserted Section 115BAC, with effect from the assessment year 2021-22, to provide for an alternative regime providing for lower tax rates in the case of an individual or a Hindu undivided family (HUF). The Finance Act, 2023 extends the scope of this regime to AOP, BOI, and AJP as well and makes it a default tax regime. However, an assessee has to forego various exemptions and deductions for claiming the benefit of reduced tax rates under this regime.</p>
        <h4 className="mt-3">For Assessment Year 2025-26:</h4>
        <div className="table-responsive glass-card mt-2 mb-4">
          <table className="modern-table">
            <thead>
              <tr><th>Net Income Range</th><th>Tax rate</th></tr>
            </thead>
            <tbody>
              <tr><td>Upto Rs. 3,00,000</td><td>Nil</td></tr>
              <tr><td>From Rs. 3,00,001 to Rs. 7,00,000</td><td>5%</td></tr>
              <tr><td>From Rs. 7,00,001 to Rs.10,00,000</td><td>10%</td></tr>
              <tr><td>From Rs. 10,00,001 to Rs. 12,00,000</td><td>15%</td></tr>
              <tr><td>From Rs. 12,00,001 to Rs. 15,00,000</td><td>20%</td></tr>
              <tr><td>Above Rs. 15,00,000</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
        <h4>For Assessment Year 2026-27:</h4>
        <div className="table-responsive glass-card mt-2 mb-4">
          <table className="modern-table">
            <thead>
              <tr><th>Net Income Range</th><th>Tax rate</th></tr>
            </thead>
            <tbody>
              <tr><td>Upto Rs. 4,00,000</td><td>Nil</td></tr>
              <tr><td>From Rs. 4,00,001 to Rs. 8,00,000</td><td>5%</td></tr>
              <tr><td>From Rs. 8,00,001 to Rs. 12,00,000</td><td>10%</td></tr>
              <tr><td>From Rs. 12,00,001 to Rs. 16,00,000</td><td>15%</td></tr>
              <tr><td>From Rs. 16,00,001 to Rs. 20,00,000</td><td>20%</td></tr>
              <tr><td>From Rs. 20,00,001 to Rs. 24,00,000</td><td>25%</td></tr>
              <tr><td>Above Rs. 24,00,000</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
        <h4>Surcharge:</h4>
        <p>Surcharge is levied on the amount of income-tax at following rates if total income of an assessee exceeds specified limits:</p>
        <div className="table-responsive glass-card mt-2 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Range of Income: Rs. 50 Lakhs to Rs. 1 Crore</th>
                <th>Range of Income: Rs. 1 Crore to Rs. 2 Crores</th>
                <th>Range of Income: Rs. 2 crores to Rs. 5 crores</th>
                <th>Range of Income: Exceeding Rs. 5 Crores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10%</td>
                <td>15%</td>
                <td>25%</td>
                <td>37%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Note:</strong> The enhanced surcharge of 25% is not levied, on income by way of dividend or from income chargeable to tax under sections 111A, 112, 112A and 115AD(1)(b). Hence, the maximum rate of surcharge on tax payable on such incomes shall be 15%. Also, the surcharge rate for AOP with all members as a company, shall be capped at 15%.</p>
        <p className="mt-2">Further, the surcharge rate is nil if the total income of a 'specified fund' as referred to in section 10(4D) includes any income in respect of securities as given under section 115AD(1)(a).</p>
        <p className="mt-2">Marginal relief is available from surcharge in the following manner:</p>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>In case where net income exceeds Rs. 50 lakh but doesn't exceed Rs. 1 Crore, the amount payable as income tax and surcharge shall not exceed the total amount payable as income tax on total income of Rs 50 Lakh by more than the amount of income that exceeds Rs 50 Lakhs.</li>
          <li className="mt-2">In case where net income exceeds Rs. 1 crore but doesn't exceed Rs. 2 crore, marginal relief shall be available from surcharge in such a manner that the amount payable as income tax and surcharge shall not exceed the total amount payable as income-tax on total income of Rs. 1 crore by more than the amount of income that exceeds Rs. 1 crore.</li>
          <li className="mt-2">In case where net income exceeds Rs. 2 crores, marginal relief shall be available from surcharge in such a manner that the amount payable as income tax and surcharge shall not exceed the total amount payable as income-tax on total income of Rs. 2 crores by more than the amount of income that exceeds Rs. 2 crores.</li>
        </ul>
        <h4 className="mt-4">Health and Education Cess:</h4>
        <p>Health and Education Cess is levied at the rate of 4% on the amount of income-tax plus surcharge. However, The Health and Education Cess is nil if the total income of a 'specified fund' as referred to section 10(4D) includes any income in respect of securities as given under section 115AD(1)(a).</p>
        <h4 className="mt-4">Notes (Rebate under Section 87A):</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>(a) A maximum rebate of Rs. 25,000 is allowed under section 87A, if the total income of a resident individual, who is opting for the new tax scheme under Section 115BAC(1A), is up to Rs. 7,00,000 [Applicable for AY 2025-26].</li>
          <li className="mt-2">(b) A maximum rebate of Rs. 60,000 is allowed under section 87A, if the total income of a resident individual, who is opting for the new tax scheme under Section 115BAC(1A), is up to Rs. 12,00,000 [Applicable from AY 2026-27].<br/><em>Note: The total rebate under section 87A shall not exceed the amount of income tax payable as per the rates provided in section 115BAC(1A) [effective from AY 2026-27]</em></li>
          <li className="mt-2">(c) Further, if the total income of the resident individual chargeable to tax section 115BAC(1A) exceeds Rs. 7 or 12 lakhs and the tax payable on such income exceeds the difference between the total income and Rs. 7 or 12 lakhs he can claim a rebate with marginal relief to the extent of the difference between the tax payable on such total income and the amount of income by which it exceeds Rs. 7 or 12 lakhs.</li>
          <li className="mt-2">(d) If an assessee has opted for new tax regime, the provisions of AMT shall not be applicable.</li>
        </ul>
      </div>
    )
  },
  {
    id: "partnership-firm",
    title: "2. Partnership Firm",
    searchableText: "Partnership Firm LLP taxable at 30% Surcharge 12% Health and Education Cess Alternate Minimum Tax AMT 18.5%",
    content: (
      <div>
        <p>A partnership firm (including LLP) is taxable at 30%.</p>
        <h4 className="mt-3">Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Surcharge:</strong> The amount of income-tax shall be increased by a surcharge at the rate of 12% of such tax, where total income exceeds one crore rupees. However, the surcharge shall be subject to marginal relief (where income exceeds one crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of one crore rupees by more than the amount of income that exceeds one crore rupees).</li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Alternate Minimum Tax (AMT):</h4>
        <p>A partnership firm is liable to pay Alternative Minimum Tax where tax payable by it, on total income computed as per normal provisions of the Act, is less than 18.5% of 'adjusted total income'. In such a case the 'adjusted total income' is taken as the income of the firm and it shall be liable to pay tax at the rate of 18.5% of such 'adjusted total income'.</p>
        <p className="mt-2">However, AMT is levied at the rate of 9% (plus surcharge and cess as applicable) in case of an assessee other than a company, being a unit of an International Financial Services Centre and deriving its income solely in convertible foreign exchange.</p>
      </div>
    )
  },
  {
    id: "local-authority",
    title: "3. Local Authority",
    searchableText: "Local Authority taxable at 30% Surcharge 12% Health and Education Cess Alternate Minimum Tax AMT 18.5%",
    content: (
      <div>
        <p>A local authority is taxable at 30%.</p>
        <h4 className="mt-3">Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Surcharge:</strong> The amount of income-tax shall be increased by a surcharge at the rate of 12% of such tax, where total income exceeds one crore rupees. However, the surcharge shall be subject to marginal relief (where income exceeds one crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of one crore rupees by more than the amount of income that exceeds one crore rupees).</li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Alternate Minimum Tax (AMT):</h4>
        <p>A Local Authority is liable to pay Alternative Minimum Tax where tax payable by it, on total income computed as per normal provisions of the Act, is less than 18.5% of 'adjusted total income'. In such a case the 'adjusted total income' is taken as the income of the firm and it shall be liable to pay tax at the rate of 18.5% of such 'adjusted total income'.</p>
        <p className="mt-2">However, AMT is levied at the rate of 9% (plus surcharge and cess as applicable) in case of a company, being a unit of an International Financial Services Centre and deriving its income solely in convertible foreign exchange.</p>
      </div>
    )
  },
  {
    id: "domestic-company",
    title: "4. Domestic Company",
    searchableText: "Domestic Company turnover or gross receipt Rs. 400 crore Surcharge 7% 12% Minimum Alternate Tax MAT 15%",
    content: (
      <div>
        <p>Income-tax rates applicable in case of domestic companies for assessment years 2026-27 and 2025-26 are as follows:</p>
        <div className="table-responsive glass-card mt-3 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Domestic Company</th>
                <th>Assessment Year 2026-27</th>
                <th>Assessment Year 2025-26</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Where its total turnover or gross receipt during the previous year 2022-23 does not exceed Rs. 400 crore</td>
                <td>NA</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Where its total turnover or gross receipt during the previous year 2023-24 does not exceed Rs. 400 crore</td>
                <td>25%</td>
                <td>NA</td>
              </tr>
              <tr>
                <td>Any other domestic company</td>
                <td>30%</td>
                <td>30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <strong>Surcharge:</strong> The amount of income-tax shall be increased by a surcharge at the rate of 7% of such tax, where total income exceeds one crore rupees but not exceeding ten crore rupees and at the rate of 12% of such tax, where total income exceeds ten crore rupees. The surcharge shall be subject to marginal relief, which shall be as under:
            <ul className="mt-2 mb-2" style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>(i) Where income exceeds Rs. 1 crore but not exceeding Rs. 10 crore, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of Rs. 1 crore by more than the amount of income that exceeds Rs. 1 crore.</li>
              <li className="mt-2">(ii) Where income exceeds Rs. 10 crore, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of Rs. 10 crore by more than the amount of income that exceeds Rs. 10 crore.</li>
            </ul>
          </li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Minimum Alternate Tax (MAT):</h4>
        <p>A domestic company is liable to pay Minimum Alternate Tax where tax payable by it, on total income computed as per normal provisions of the Act, is less than 15% of 'book profit'. In such a case the 'book profit' is taken as the income of the company and it shall be liable to pay tax at the rate of 15% of such 'book profit'.</p>
        <p className="mt-2">However, MAT is levied at the rate of 9% (plus surcharge and cess as applicable) in case of a company, being a unit of an International Financial Services Centre and deriving its income solely in convertible foreign exchange.</p>
      </div>
    )
  },
  {
    id: "special-tax-rates-domestic",
    title: "4.1. Special Tax rates applicable to a domestic company",
    searchableText: "Special Tax rates applicable to a domestic company section 115BA Section 115BAA Section 115BAB 25% 22% 15% Surcharge flat 10%",
    content: (
      <div>
        <p>The special Income-tax rates applicable in case of domestic companies are as follows:</p>
        <div className="table-responsive glass-card mt-3 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Domestic Company</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Where it opted for section 115BA</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Where it opted for Section 115BAA</td>
                <td>22%</td>
              </tr>
              <tr>
                <td>Where it opted for Section 115BAB</td>
                <td>15%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Surcharge:</strong> The rate of surcharge in case of a company opting for taxability under Section 115BAA or Section 115BAB shall be flat 10% irrespective of amount of total income.</li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
          <li className="mt-2"><strong>MAT:</strong> The domestic company who has opted for special taxation regime under Section 115BAA & 115BAB is exempted from provision of MAT. However, no exemption is available in case where section 115BA has been opted.</li>
        </ul>
      </div>
    )
  },
  {
    id: "foreign-company",
    title: "5. Foreign Company",
    searchableText: "Foreign Company Royalty received from Government 50% Any other income 35% Surcharge 2% 5% MAT 15%",
    content: (
      <div>
        <p>Assessment Year 2025-26 and 2026-27</p>
        <div className="table-responsive glass-card mt-3 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Nature of Income</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Royalty received from Government or an Indian concern in pursuance of an agreement made with the Indian concern after March 31, 1961, but before April 1, 1976, or fees for rendering technical services in pursuance of an agreement made after February 29, 1964 but before April 1, 1976 and where such agreement has, in either case, been approved by the Central Government</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Any other income</td>
                <td>35%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <strong>Surcharge:</strong> The amount of income-tax shall be increased by a surcharge at the rate of 2% of such tax, where total income exceeds one crore rupees but not exceeding ten crore rupees and at the rate of 5% of such tax, where total income exceeds ten crore rupees. However, the surcharge shall be subject to marginal relief, which shall be as under:
            <ul className="mt-2 mb-2" style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>(i) Where income exceeds one crore rupees but not exceeding ten crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of one crore rupees by more than the amount of income that exceeds one crore rupees.</li>
              <li className="mt-2">(ii) Where income exceeds ten crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of ten crore rupees by more than the amount of income that exceeds ten crore rupees.</li>
            </ul>
          </li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Minimum Alternate Tax (MAT):</h4>
        <p>A foreign company is liable to pay Minimum Alternate Tax where tax payable by it, on total income computed as per normal provisions of the Act, is less than 15% of 'book profit'. In such a case the 'book profit' is taken as the income of the company and it shall be liable to pay tax at the rate of 15% of such 'book profit'.</p>
        <p className="mt-2">However, the provisions of MAT do not apply in case of foreign companies if it does not have permanent establishment (PE) in India or opts for presumptive taxation scheme of Section 44B, Section 44BB, Section 44BBA or Section 44BBB.</p>
      </div>
    )
  },
  {
    id: "cooperative-society",
    title: "6. Co-operative Society",
    searchableText: "Co-operative Society Taxable income Up to Rs. 10,000 Rs. 10,000 to Rs. 20,000 Above Rs. 20,000 10% 20% 30% Surcharge 7% 12% AMT 15%",
    content: (
      <div>
        <p>Assessment Years 2025-26 and 2026-27</p>
        <div className="table-responsive glass-card mt-3 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Taxable income</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Up to Rs. 10,000</td><td>10%</td></tr>
              <tr><td>Rs. 10,000 to Rs. 20,000</td><td>20%</td></tr>
              <tr><td>Above Rs. 20,000</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
        <h4>Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <strong>Surcharge:</strong> The amount of income-tax shall be increased by a surcharge at the rate of 7% of such tax, where total income exceeds one crore rupees but not exceeding ten crore rupees and at the rate of 12% of such tax, where total income exceeds ten crore rupees. However, the surcharge shall be subject to marginal relief, which shall be as under:
            <ul className="mt-2 mb-2" style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>(i) Where income exceeds one crore rupees but not exceeding ten crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of one crore rupees by more than the amount of income that exceeds one crore rupees.</li>
              <li className="mt-2">(ii) Where income exceeds ten crore rupees, the total amount payable as income-tax and surcharge shall not exceed total amount payable as income-tax on total income of ten crore rupees by more than the amount of income that exceeds ten crore rupees.</li>
            </ul>
          </li>
          <li className="mt-2"><strong>Health and Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of four percent of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Note:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>(a) A co-op. society is liable to pay Alternate Minimum Tax where tax payable by it, on total income computed as per normal provisions of the Act, is less than 15% of 'adjusted total income'. In such a case the 'adjusted total income' is taken as the income of co-op. society and it shall be liable to pay tax at the rate of 15% of such 'adjusted total income'.</li>
          <li className="mt-2">(b) If the assessee is a unit located in an International Financial Services Centre and derives its income solely in convertible foreign exchange, the rate of AMT will be 9%.</li>
        </ul>
      </div>
    )
  },
  {
    id: "alternative-tax-cooperative",
    title: "6.1. Alternative Tax regime for Co-operative societies",
    searchableText: "Alternative Tax regime for Co-operative societies Section 115BAE 115BAD 15% 22% Surcharge 10% AMT not applicable",
    content: (
      <div>
        <p>Income-tax Act allows a co-operative society to choose from the following alternative taxation regime subject to fulfilment of prescribed conditions:</p>
        <div className="table-responsive glass-card mt-3 mb-4">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Conditions</th>
                <th>Tax rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Section 115BAE</td>
                <td>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                    <li>The co-operative society is set up and registered on or after 01-04-2023;</li>
                    <li>It is engaged in manufacture or production of any article or thing;</li>
                    <li>It commences manufacturing on or before 31-03-2024 ; and</li>
                    <li>It does not claim specified exemption, incentive or deduction.</li>
                  </ul>
                </td>
                <td>15% (Income from manufacturing activities)</td>
              </tr>
              <tr>
                <td>Section 115BAD</td>
                <td>If co-operative society does not claim specified exemption, incentive or deduction</td>
                <td>22%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Add:</h4>
        <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><strong>Surcharge:</strong> The surcharge is levied at a rate of 10% on the amount of income-tax irrespective of the total income of such co-operative society.</li>
          <li className="mt-2"><strong>Health & Education Cess:</strong> The amount of income-tax and the applicable surcharge, shall be further increased by health and education cess calculated at the rate of 4% of such income-tax and surcharge.</li>
        </ul>
        <h4 className="mt-4">Note:</h4>
        <p>(a) If a co-operative society has exercised the option of Section 115BAD or Section 115BAE, the provisions of AMT shall not be applicable. Further, the provisions regarding computation and carry forward of AMT credit shall also be not applicable.</p>
        <p className="mt-3 text-muted"><em>[As amended by Finance Act, 2026]</em></p>
      </div>
    )
  }
];

export const RatesOfIncomeTax: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const title = "Rates of Income Tax";
  const description = "Comprehensive details on income tax rates, surcharges, marginal relief, and alternate tax regimes for various assessees.";

  const filteredSections = useMemo(
    () => SECTIONS.filter(sec => 
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sec.searchableText.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm]
  );

  const totalItems = filteredSections.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => { setPage(1); }, [searchTerm, pageSize]);
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const startIdx = (page - 1) * pageSize;
  const pagedSections = filteredSections.slice(startIdx, startIdx + pageSize);
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
            <div className="article-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {pagedSections.length > 0 ? (
                pagedSections.map((section) => (
                  <div key={section.id} className="article-section glass-card" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{section.title}</h2>
                    <div className="section-content">
                      {section.content}
                    </div>
                  </div>
                ))
              ) : (
                <div className="glass-card text-center" style={{ padding: '2rem' }}>
                  No matching records found.
                </div>
              )}
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
