import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const LinkNode = <a href="https://incometaxindia.gov.in/pages/acts/wealth-tax-act.aspx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>Link</a>;

const pageData: React.ReactNode[][] = [
  ["2", "Definitions", "Important definitions such as net wealth, valuation date, and assessee.", LinkNode],
  ["3", "Charge of wealth-tax", "The main charging section levying tax on the net wealth of individuals, HUFs, and companies as on the valuation date.", LinkNode],
  ["4", "Net wealth to include certain assets", "Clubbing provisions dictating when assets transferred to a spouse, minor child, or others are included in the transferor's net wealth.", LinkNode],
  ["5", "Exemptions in respect of certain assets", "Provides a list of specific assets that are entirely exempt from wealth tax.", LinkNode],
  ["7", "Value of assets, how to be determined", "Rules and methods for determining the value of various assets on the valuation date for tax purposes.", LinkNode],
  ["14", "Return of wealth", "Statutory obligation to furnish a return of net wealth if it exceeds the maximum amount not chargeable to tax.", LinkNode],
  ["15", "Return after due date and amendment of return", "Provisions allowing an assessee to file a belated return or revise a previously filed return to correct errors.", LinkNode],
  ["16", "Assessment", "Procedures for the assessment of wealth-tax returns, including intimation and scrutiny by the Assessing Officer.", LinkNode],
  ["17", "Wealth escaping assessment", "Empowers the Assessing Officer to reopen an assessment if there is reason to believe that wealth has escaped assessment.", LinkNode],
  ["17A", "Time limit for completion of assessment and reassessment", "Statutory deadlines within which regular assessments and reassessments must be completed.", LinkNode]
];

export const WealthTaxAct: React.FC = () => {
  return (
    <ResourceLayout
      title="Wealth Tax Act"
      description="Frequently referenced sections of the Wealth Tax Act, 1957 (Abolished w.e.f. Assessment Year 2016-17)."
      data={pageData}
      type="table"
      headers={["Section", "Topic", "Description", "Link"]}
    />
  );
};
