export interface GSTRule {
  id: string;
  ruleNumber: string;
  title: string;
  chapter?: string;
  category?: string;
  status: 'Active' | 'Omitted' | 'Historical';
  summary?: string;
  source: string;
  sourceUrl?: string;
  isImportant?: boolean;
}

export const gstRulesData: GSTRule[] = [
  {
    "id": "rule-1",
    "ruleNumber": "Rule 1",
    "title": "Short title and Commencement",
    "category": "Preliminary",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-2",
    "ruleNumber": "Rule 2",
    "title": "Definitions",
    "category": "Preliminary",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-3",
    "ruleNumber": "Rule 3",
    "title": "Intimation for composition levy",
    "category": "Composition Levy",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-4",
    "ruleNumber": "Rule 4",
    "title": "Effective date for composition levy",
    "category": "Composition Levy",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-5",
    "ruleNumber": "Rule 5",
    "title": "Conditions and restrictions for composition levy",
    "category": "Composition Levy",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-6",
    "ruleNumber": "Rule 6",
    "title": "Validity of composition levy",
    "category": "Composition Levy",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-7",
    "ruleNumber": "Rule 7",
    "title": "Rate of tax of the composition levy",
    "category": "Composition Levy",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-8",
    "ruleNumber": "Rule 8",
    "title": "Application for registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-9",
    "ruleNumber": "Rule 9",
    "title": "Verification of the application and approval",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-10",
    "ruleNumber": "Rule 10",
    "title": "Issue of registration certificate",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-10a",
    "ruleNumber": "Rule 10A",
    "title": "Furnishing of Bank Account Details",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-10b",
    "ruleNumber": "Rule 10B",
    "title": "Aadhaar authentication for registered person",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-11",
    "ruleNumber": "Rule 11",
    "title": "Separate registration for multiple places of business within a State or a Union territory",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-12",
    "ruleNumber": "Rule 12",
    "title": "Grant of registration to persons required to deduct tax at source or to collect tax at source",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-13",
    "ruleNumber": "Rule 13",
    "title": "Grant of registration to non-resident taxable person",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-14",
    "ruleNumber": "Rule 14",
    "title": "Grant of registration to a person supplying online information and database access or retrieval services from a place outside India to a non-taxable online recipient",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-15",
    "ruleNumber": "Rule 15",
    "title": "Extension in period of operation by casual taxable person and non-resident taxable person",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-16",
    "ruleNumber": "Rule 16",
    "title": "Suomoto registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-17",
    "ruleNumber": "Rule 17",
    "title": "Assignment of Unique Identity Number to certain special entities",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-18",
    "ruleNumber": "Rule 18",
    "title": "Display of registration certificate and Goods and Services Tax Identification Number on the name board",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-19",
    "ruleNumber": "Rule 19",
    "title": "Amendment of registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-20",
    "ruleNumber": "Rule 20",
    "title": "Application for cancellation of registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-21",
    "ruleNumber": "Rule 21",
    "title": "Registration to be cancelled in certain cases",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-21a",
    "ruleNumber": "Rule 21A",
    "title": "Suspension of registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-22",
    "ruleNumber": "Rule 22",
    "title": "Cancellation of registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-23",
    "ruleNumber": "Rule 23",
    "title": "Revocation of cancellation of registration",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-24",
    "ruleNumber": "Rule 24",
    "title": "Migration of persons registered under the existing law",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-25",
    "ruleNumber": "Rule 25",
    "title": "Physical verification of business premises in certain cases",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-26",
    "ruleNumber": "Rule 26",
    "title": "Method of authentication",
    "category": "Registration",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-27",
    "ruleNumber": "Rule 27",
    "title": "Value of supply of goods or services where the consideration is not wholly in money",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-28",
    "ruleNumber": "Rule 28",
    "title": "Value of supply of goods or services or both between distinct or related persons, other than through an agent",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-29",
    "ruleNumber": "Rule 29",
    "title": "Value of supply of goods made or received through an agent",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-30",
    "ruleNumber": "Rule 30",
    "title": "Value of supply of goods or services or both based on cost",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-31",
    "ruleNumber": "Rule 31",
    "title": "Residual method for determination of value of supply of goods or services or both",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-31a",
    "ruleNumber": "Rule 31A",
    "title": "Value of supply in case of lottery, betting, gambling and horse racing",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-32",
    "ruleNumber": "Rule 32",
    "title": "Determination of value in respect of certain supplies",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-32a",
    "ruleNumber": "Rule 32A",
    "title": "Value of supply in cases where Kerala Flood Cess is applicable",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-33",
    "ruleNumber": "Rule 33",
    "title": "Value of supply of services in case of pure agent",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-34",
    "ruleNumber": "Rule 34",
    "title": "Rate of exchange of currency, other than Indian rupees, for determination of value",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-35",
    "ruleNumber": "Rule 35",
    "title": "Value of supply inclusive of integrated tax, central tax, State tax, Union territory tax",
    "category": "Valuation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-36",
    "ruleNumber": "Rule 36",
    "title": "Documentary requirements and conditions for claiming input tax credit",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-37",
    "ruleNumber": "Rule 37",
    "title": "Reversal of input tax credit in the case of non-payment of consideration",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-37a",
    "ruleNumber": "Rule 37A",
    "title": "Reversal of input tax credit in the case of non-payment of tax by the supplier and re-availment thereof",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-38",
    "ruleNumber": "Rule 38",
    "title": "Claim of credit by a banking company or a ficial institution",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-39",
    "ruleNumber": "Rule 39",
    "title": "Procedure for distribution of input tax credit by Input Service Distributor",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-40",
    "ruleNumber": "Rule 40",
    "title": "Manner of claiming credit in special circumstances",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-41",
    "ruleNumber": "Rule 41",
    "title": "Transfer of credit on sale, merger, amalgamation, lease or transfer of a business",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-41a",
    "ruleNumber": "Rule 41A",
    "title": "Transfer of credit on obtaining separate registration for multiple places of business within a State or Union territory",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-42",
    "ruleNumber": "Rule 42",
    "title": "Manner of determination of input tax credit in respect of inputs or input services and reversal thereof",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-43",
    "ruleNumber": "Rule 43",
    "title": "Manner of determination of input tax credit in respect of capital goods and reversal thereof in certain cases",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-44",
    "ruleNumber": "Rule 44",
    "title": "Manner of reversal of credit under special circumstances",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-44a",
    "ruleNumber": "Rule 44A",
    "title": "Manner of reversal of credit of Additional duty of Customs in respect of Gold dore bar",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-45",
    "ruleNumber": "Rule 45",
    "title": "Conditions and restrictions in respect of inputs and capital goods sent to the job worker",
    "category": "Input Tax Credit",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-46",
    "ruleNumber": "Rule 46",
    "title": "Tax invoice",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-46a",
    "ruleNumber": "Rule 46A",
    "title": "Invoice-cum-bill of supply",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-47",
    "ruleNumber": "Rule 47",
    "title": "Time limit for issuing tax invoice",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-48",
    "ruleNumber": "Rule 48",
    "title": "Manner of issuing invoice",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-49",
    "ruleNumber": "Rule 49",
    "title": "Bill of supply",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-50",
    "ruleNumber": "Rule 50",
    "title": "Receipt voucher",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-51",
    "ruleNumber": "Rule 51",
    "title": "Refund voucher",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-52",
    "ruleNumber": "Rule 52",
    "title": "Payment voucher",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-53",
    "ruleNumber": "Rule 53",
    "title": "Revised tax invoice and credit or debit notes",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-54",
    "ruleNumber": "Rule 54",
    "title": "Tax invoice in special cases",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-55",
    "ruleNumber": "Rule 55",
    "title": "Transportation of goods without issue of invoice",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-55a",
    "ruleNumber": "Rule 55A",
    "title": "Tax Invoice or bill of supply to accompany transport of goods",
    "category": "Invoicing & Documentation",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-56",
    "ruleNumber": "Rule 56",
    "title": "Maintece of accounts by registered persons",
    "category": "Accounts & Records",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-57",
    "ruleNumber": "Rule 57",
    "title": "Generation and maintece of electronic records",
    "category": "Accounts & Records",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-58",
    "ruleNumber": "Rule 58",
    "title": "Records to be maintained by owner or operator of godown or warehouse and transporters",
    "category": "Accounts & Records",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-59",
    "ruleNumber": "Rule 59",
    "title": "Form and manner of furnishing details of outward supplies",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-60",
    "ruleNumber": "Rule 60",
    "title": "Form and manner of ascertaining details of inward supplies",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-61",
    "ruleNumber": "Rule 61",
    "title": "Form and manner of furnishing of return",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-61a",
    "ruleNumber": "Rule 61A",
    "title": "Manner of opting for furnishing quarterly return",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-62",
    "ruleNumber": "Rule 62",
    "title": "Form and manner of submission of statement and return",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-63",
    "ruleNumber": "Rule 63",
    "title": "Form and manner of submission of return by non-resident taxable person",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-64",
    "ruleNumber": "Rule 64",
    "title": "Form and manner of submission of return by persons providing online information and database access or retrieval services",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-65",
    "ruleNumber": "Rule 65",
    "title": "Form and manner of submission of return by an Input Service Distributor",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-66",
    "ruleNumber": "Rule 66",
    "title": "Form and manner of submission of return by a person required to deduct tax at source",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-67",
    "ruleNumber": "Rule 67",
    "title": "Form and manner of submission of statement of supplies through an e-commerce operator",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-67a",
    "ruleNumber": "Rule 67A",
    "title": "Manner of furnishing of return or details of outward supplies by short messaging service facility",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-68",
    "ruleNumber": "Rule 68",
    "title": "Notice to non-filers of returns",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-69",
    "ruleNumber": "Rule 69",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-70",
    "ruleNumber": "Rule 70",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-71",
    "ruleNumber": "Rule 71",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-72",
    "ruleNumber": "Rule 72",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-73",
    "ruleNumber": "Rule 73",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-74",
    "ruleNumber": "Rule 74",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-75",
    "ruleNumber": "Rule 75",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-76",
    "ruleNumber": "Rule 76",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-77",
    "ruleNumber": "Rule 77",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-78",
    "ruleNumber": "Rule 78",
    "title": "Matching of details furnished by the e-Commerce operator with the details furnished by the supplier",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-79",
    "ruleNumber": "Rule 79",
    "title": "Omitted",
    "category": "Returns",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-80",
    "ruleNumber": "Rule 80",
    "title": "Annual return",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-81",
    "ruleNumber": "Rule 81",
    "title": "Final return",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-82",
    "ruleNumber": "Rule 82",
    "title": "Details of inward supplies of persons having Unique Identity Number",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-83",
    "ruleNumber": "Rule 83",
    "title": "Provisions relating to a goods and services tax practitioner",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-83a",
    "ruleNumber": "Rule 83A",
    "title": "Examination of Goods and Services Tax Practitioners",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-83b",
    "ruleNumber": "Rule 83B",
    "title": "Surrender of enrolment of goods and services tax practitioner",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-84",
    "ruleNumber": "Rule 84",
    "title": "Conditions for purposes of appearance",
    "category": "Returns",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-85",
    "ruleNumber": "Rule 85",
    "title": "Electronic Liability Register",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-86",
    "ruleNumber": "Rule 86",
    "title": "Electronic Credit Ledger",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-86a",
    "ruleNumber": "Rule 86A",
    "title": "Conditions of use of amount available in electronic credit ledger",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-86b",
    "ruleNumber": "Rule 86B",
    "title": "Restrictions on use of amount available in electronic credit ledger",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-87",
    "ruleNumber": "Rule 87",
    "title": "Electronic Cash Ledger",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-88",
    "ruleNumber": "Rule 88",
    "title": "Identification number for each transaction",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-88a",
    "ruleNumber": "Rule 88A",
    "title": "Order of utilization of input tax credit",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-88b",
    "ruleNumber": "Rule 88B",
    "title": "Manner of calculating interest on delayed payment of tax",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-88c",
    "ruleNumber": "Rule 88C",
    "title": "Manner of dealing with difference in liability reported in statement of outward supplies and that reported in return",
    "category": "Payments & Electronic Ledgers",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-89",
    "ruleNumber": "Rule 89",
    "title": "Application for refund of tax, interest, penalty, fees or any other amount",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-90",
    "ruleNumber": "Rule 90",
    "title": "Acknowledgement",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-91",
    "ruleNumber": "Rule 91",
    "title": "Grant of provisional refund",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-92",
    "ruleNumber": "Rule 92",
    "title": "Order sanctioning refund",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-93",
    "ruleNumber": "Rule 93",
    "title": "Credit of the amount of rejected refund claim",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-94",
    "ruleNumber": "Rule 94",
    "title": "Order sanctioning interest on delayed refunds",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-95",
    "ruleNumber": "Rule 95",
    "title": "Refund of tax to certain persons",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-95a",
    "ruleNumber": "Rule 95A",
    "title": "Omitted",
    "category": "Refunds",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-96",
    "ruleNumber": "Rule 96",
    "title": "Refund of integrated tax paid on goods or services 220exported out of India",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-96a",
    "ruleNumber": "Rule 96A",
    "title": "Export of goods or services under bond or Letter of Undertaking",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-96b",
    "ruleNumber": "Rule 96B",
    "title": "Recovery of refund of unutilised input tax credit or integrated tax paid on export of goods where export proceeds not realised",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-96c",
    "ruleNumber": "Rule 96C",
    "title": "Bank Account for credit of refund",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-97",
    "ruleNumber": "Rule 97",
    "title": "Consumer Welfare Fund",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-97a",
    "ruleNumber": "Rule 97A",
    "title": "Manual filing and processing",
    "category": "Refunds",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-98",
    "ruleNumber": "Rule 98",
    "title": "Provisional Assessment",
    "category": "Assessment",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-99",
    "ruleNumber": "Rule 99",
    "title": "Scrutiny of returns",
    "category": "Assessment",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-100",
    "ruleNumber": "Rule 100",
    "title": "Assessment in certain cases",
    "category": "Assessment",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-101",
    "ruleNumber": "Rule 101",
    "title": "Audit",
    "category": "Assessment",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-102",
    "ruleNumber": "Rule 102",
    "title": "Special Audit",
    "category": "Assessment",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-103",
    "ruleNumber": "Rule 103",
    "title": "Qualification and appointment of members of the Authority for Advance Ruling",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-104",
    "ruleNumber": "Rule 104",
    "title": "Form and manner of application to the Authority for Advance Ruling",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-105",
    "ruleNumber": "Rule 105",
    "title": "Certification of copies of advance rulings pronounced by the Authority",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-106",
    "ruleNumber": "Rule 106",
    "title": "Form and manner of appeal to the Appellate Authority for Advance Ruling",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-107",
    "ruleNumber": "Rule 107",
    "title": "Certification of copies of the advance rulings pronounced by the Appellate Authority",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-107a",
    "ruleNumber": "Rule 107A",
    "title": "Manual filing and processing",
    "category": "Advance Ruling",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-108",
    "ruleNumber": "Rule 108",
    "title": "Appeal to the Appellate Authority",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-109",
    "ruleNumber": "Rule 109",
    "title": "Application to the Appellate Authority",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-109a",
    "ruleNumber": "Rule 109A",
    "title": "Appointment of Appellate Authority",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-109b",
    "ruleNumber": "Rule 109B",
    "title": "Notice to person and order of revisional authority in case of revision",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-109c",
    "ruleNumber": "Rule 109C",
    "title": "Withdrawal of Appeal",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-110",
    "ruleNumber": "Rule 110",
    "title": "Appeal to the Appellate Tribunal",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-111",
    "ruleNumber": "Rule 111",
    "title": "Application to the Appellate Tribunal",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-112",
    "ruleNumber": "Rule 112",
    "title": "Production of additional evidence before the Appellate Authority or the Appellate Tribunal",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-113",
    "ruleNumber": "Rule 113",
    "title": "Order of Appellate Authority or Appellate Tribunal",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-114",
    "ruleNumber": "Rule 114",
    "title": "Appeal to the High Court",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-115",
    "ruleNumber": "Rule 115",
    "title": "Demand confirmed by the Court",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-116",
    "ruleNumber": "Rule 116",
    "title": "Disqualification for misconduct of an authorised representative",
    "category": "Appeals",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-117",
    "ruleNumber": "Rule 117",
    "title": "Tax or duty credit carried forward under any existing law or on goods held in stock on the appointed day",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-118",
    "ruleNumber": "Rule 118",
    "title": "Declaration to be made under clause (c) of sub-section (11) of section 142",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-119",
    "ruleNumber": "Rule 119",
    "title": "Declaration of stock held by a principal and job-worker",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-120",
    "ruleNumber": "Rule 120",
    "title": "Details of goods sent on approval basis",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-120a",
    "ruleNumber": "Rule 120A",
    "title": "Revision of declaration in FORM GST TRAN-1",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-121",
    "ruleNumber": "Rule 121",
    "title": "Recovery of credit wrongly availed",
    "category": "Transitional Provisions",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-122",
    "ruleNumber": "Rule 122",
    "title": "Omitted",
    "category": "Anti-Profiteering",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-123",
    "ruleNumber": "Rule 123",
    "title": "Constitution of the Standing Committee and Screening Committees",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-124",
    "ruleNumber": "Rule 124",
    "title": "Omitted",
    "category": "Anti-Profiteering",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-125",
    "ruleNumber": "Rule 125",
    "title": "Omitted",
    "category": "Anti-Profiteering",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-126",
    "ruleNumber": "Rule 126",
    "title": "Power to determine the methodology and procedure",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-127",
    "ruleNumber": "Rule 127",
    "title": "Functions of the Authority",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-128",
    "ruleNumber": "Rule 128",
    "title": "Examination of application by the Standing Committee and Screening Committee",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-129",
    "ruleNumber": "Rule 129",
    "title": "Initiation and conduct of proceedings",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-130",
    "ruleNumber": "Rule 130",
    "title": "Confidentiality of information",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-131",
    "ruleNumber": "Rule 131",
    "title": "Cooperation with other agencies or statutory authorities",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-132",
    "ruleNumber": "Rule 132",
    "title": "Power to summon persons to give evidence and produce documents",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-133",
    "ruleNumber": "Rule 133",
    "title": "Order of the Authority",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-134",
    "ruleNumber": "Rule 134",
    "title": "Omitted",
    "category": "Anti-Profiteering",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-135",
    "ruleNumber": "Rule 135",
    "title": "Compliance by the registered person",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-136",
    "ruleNumber": "Rule 136",
    "title": "Monitoring of the order",
    "category": "Anti-Profiteering",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-137",
    "ruleNumber": "Rule 137",
    "title": "Omitted",
    "category": "Anti-Profiteering",
    "status": "Omitted",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-138",
    "ruleNumber": "Rule 138",
    "title": "Information to be furnished prior to commencement of movement of goods andgeneration of e-way bill",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-138a",
    "ruleNumber": "Rule 138A",
    "title": "Documents and devices to be carried by a person-in-charge of a conveyance",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-138b",
    "ruleNumber": "Rule 138B",
    "title": "Verification of documents and conveyances",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-138c",
    "ruleNumber": "Rule 138C",
    "title": "Inspection and verification of goods",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-138d",
    "ruleNumber": "Rule 138D",
    "title": "Facility for uploading information regarding detention of vehicle",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-138e",
    "ruleNumber": "Rule 138E",
    "title": "Restriction on furnishing of information in PART A of FORM GST EWB-01",
    "category": "E-Way Bill",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-139",
    "ruleNumber": "Rule 139",
    "title": "Inspection, search and seizure",
    "category": "Inspection / Search / Seizure",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-140",
    "ruleNumber": "Rule 140",
    "title": "Bond and security for release of seized goods",
    "category": "Inspection / Search / Seizure",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-141",
    "ruleNumber": "Rule 141",
    "title": "Procedure in respect of seized goods",
    "category": "Inspection / Search / Seizure",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  },
  {
    "id": "rule-142",
    "ruleNumber": "Rule 142",
    "title": "Notice and order for demand of amounts payable under the Act",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-142a",
    "ruleNumber": "Rule 142A",
    "title": "Procedure for recovery of dues under existing laws",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-143",
    "ruleNumber": "Rule 143",
    "title": "Recovery by deduction from any money owed",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-144",
    "ruleNumber": "Rule 144",
    "title": "Recovery by sale of goods under the control of proper officer",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-144a",
    "ruleNumber": "Rule 144A",
    "title": "Recovery of penalty by sale of goods or conveyance detained or seized in transit",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-145",
    "ruleNumber": "Rule 145",
    "title": "Recovery from a third person",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-146",
    "ruleNumber": "Rule 146",
    "title": "Recovery through execution of a decree, etc",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-147",
    "ruleNumber": "Rule 147",
    "title": "Recovery by sale of movable or immovable property",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-148",
    "ruleNumber": "Rule 148",
    "title": "Prohibition against bidding or purchase by officer",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-149",
    "ruleNumber": "Rule 149",
    "title": "Prohibition against sale on holidays",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-150",
    "ruleNumber": "Rule 150",
    "title": "Assistance by police",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-151",
    "ruleNumber": "Rule 151",
    "title": "Attachment of debts and shares, etc",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-152",
    "ruleNumber": "Rule 152",
    "title": "Attachment of property in custody of courts or Public Officer",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-153",
    "ruleNumber": "Rule 153",
    "title": "Attachment of interest in partnership",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-154",
    "ruleNumber": "Rule 154",
    "title": "Disposal of proceeds of sale of goods or conveyance and movable or immovable property",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-155",
    "ruleNumber": "Rule 155",
    "title": "Recovery through land revenue authority",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-156",
    "ruleNumber": "Rule 156",
    "title": "Recovery through court",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-157",
    "ruleNumber": "Rule 157",
    "title": "Recovery from surety",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-158",
    "ruleNumber": "Rule 158",
    "title": "Payment of tax and other amounts in instalments",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-159",
    "ruleNumber": "Rule 159",
    "title": "Provisional attachment of property",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-160",
    "ruleNumber": "Rule 160",
    "title": "Recovery from company in liquidation",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-161",
    "ruleNumber": "Rule 161",
    "title": "Continuation of certain recovery proceedings",
    "category": "Demand & Recovery",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": true
  },
  {
    "id": "rule-162",
    "ruleNumber": "Rule 162",
    "title": "Procedure for compounding of offences",
    "category": "Compounding",
    "status": "Active",
    "source": "Central Goods and Services Tax Rules, 2017",
    "sourceUrl": "https://cbic-gst.gov.in/cgst-rules.html",
    "isImportant": false
  }
];

export const relatedKnowledgeBase = [
  { title: "CGST Act", path: "/knowledge-base/cgst-act" },
  { title: "SGST Act", path: "/knowledge-base/sgst-act" },
  { title: "IGST Act", path: "/knowledge-base/igst-act" },
  { title: "GST Forms", path: "/knowledge-base/gst-forms" },
  { title: "GST Circulars", path: "/knowledge-base/gst-circulars" },
  { title: "GST Notifications", path: "/knowledge-base/gst-notifications" },
  { title: "GST Returns", path: "/knowledge-base/gst-returns" },
  { title: "GST Rates", path: "/knowledge-base/gst-rates" },
  { title: "GST Calculators", path: "/knowledge-base/gst-calculators" }
];
