export const ibcParts = [
  {
    partNumber: "I",
    title: "Preliminary",
    sections: "1-3",
    description: "Short title, extent, commencement, application, and general definitions."
  },
  {
    partNumber: "II",
    title: "Insolvency Resolution & Liquidation for Corporate Persons",
    sections: "4-77",
    description: "Covers CIRP, fast track CIRP, liquidation, voluntary liquidation, and Adjudicating Authority for corporate persons.",
    chapters: [
      { chapterNumber: "I", title: "Preliminary", sections: "4-5" },
      { chapterNumber: "II", title: "Corporate Insolvency Resolution Process", sections: "6-32A" },
      { chapterNumber: "III", title: "Liquidation Process", sections: "33-54" },
      { chapterNumber: "IV", title: "Fast Track Corporate Insolvency Resolution Process", sections: "55-58" },
      { chapterNumber: "V", title: "Voluntary Liquidation of Corporate Persons", sections: "59" },
      { chapterNumber: "VI", title: "Adjudicating Authority for Corporate Persons", sections: "60-67" },
      { chapterNumber: "VII", title: "Offences & Penalties", sections: "68-77" }
    ]
  },
  {
    partNumber: "III",
    title: "Insolvency Resolution & Bankruptcy for Individuals & Partnership Firms",
    sections: "78-187",
    description: "Covers fresh start process, insolvency resolution, bankruptcy order, administration of estate, and Adjudicating Authority for individuals and firms.",
    chapters: [
      { chapterNumber: "I", title: "Preliminary", sections: "78-79" },
      { chapterNumber: "II", title: "Fresh Start Process", sections: "80-93" },
      { chapterNumber: "III", title: "Insolvency Resolution Process", sections: "94-120" },
      { chapterNumber: "IV", title: "Bankruptcy Order", sections: "121-148" },
      { chapterNumber: "V", title: "Administration & Distribution of Estate", sections: "149-178" },
      { chapterNumber: "VI", title: "Adjudicating Authority", sections: "179-183" },
      { chapterNumber: "VII", title: "Offences & Penalties", sections: "184-187" }
    ]
  },
  {
    partNumber: "IV",
    title: "Regulation of Insolvency Professionals, Agencies & Information Utilities",
    sections: "188-223",
    description: "Establishment of IBBI, powers and functions, insolvency professionals, agencies, and information utilities.",
    chapters: [
      { chapterNumber: "I", title: "The Insolvency and Bankruptcy Board of India", sections: "188-195" },
      { chapterNumber: "II", title: "Powers & Functions of the Board", sections: "196-198" },
      { chapterNumber: "III", title: "Insolvency Professional Agencies", sections: "199-205" },
      { chapterNumber: "IV", title: "Insolvency Professionals", sections: "206-208" },
      { chapterNumber: "V", title: "Information Utilities", sections: "209-216" },
      { chapterNumber: "VI", title: "Inspection & Investigation", sections: "217-220" },
      { chapterNumber: "VII", title: "Finance, Accounts & Audit", sections: "221-223" }
    ]
  },
  {
    partNumber: "V",
    title: "Miscellaneous",
    sections: "224-255",
    description: "Insolvency fund, government directions, overriding effects, rule-making powers, and amendments to other Acts."
  }
];

export const ibcSections = [
  { section: "1", title: "Short title, extent and commencement", explanation: "Defines the title of the Code and its territorial extent." },
  { section: "2", title: "Application", explanation: "Specifies entities the Code applies to (companies, LLPs, partnership firms, and individuals)." },
  { section: "3", title: "Definitions", explanation: "Defines general terms like Adjudicating Authority, Board, claim, corporate person, and corporate debtor." },
  { section: "4", title: "Application of this Part", explanation: "Applies Part II to corporate debtors with a minimum default of one crore rupees." },
  { section: "5", title: "Definitions", explanation: "Definitions for Part II, including CIRP, financial creditor, operational creditor, and related party." },
  { section: "6", title: "Persons who may initiate corporate insolvency resolution process", explanation: "Financial creditor, operational creditor, or corporate debtor may initiate CIRP." },
  { section: "7", title: "Initiation of corporate insolvency resolution process by financial creditor", explanation: "Financial creditor can file an application to NCLT when a default has occurred." },
  { section: "8", title: "Insolvency resolution by operational creditor", explanation: "Operational creditor must deliver a demand notice of unpaid debt to the corporate debtor." },
  { section: "9", title: "Application for initiation of corporate insolvency resolution process by operational creditor", explanation: "Operational creditor can file an application if payment is not received within ten days of the demand notice." },
  { section: "10", title: "Initiation of corporate insolvency resolution process by corporate applicant", explanation: "Corporate debtor itself can initiate CIRP if it has committed a default." },
  { section: "11", title: "Persons not entitled to make application", explanation: "Debtors already undergoing CIRP or completed it recently cannot apply." },
  { section: "12", title: "Time-limit for completion of insolvency resolution process", explanation: "CIRP must be completed within 180 days, extendable to a maximum of 330 days including litigation." },
  { section: "12A", title: "Withdrawal of application admitted under section 7, 9 or 10", explanation: "Adjudicating Authority may allow withdrawal with 90% voting share of the Committee of Creditors." },
  { section: "13", title: "Declaration of moratorium and public announcement", explanation: "Adjudicating Authority declares a moratorium, makes a public announcement, and appoints an IRP." },
  { section: "14", title: "Moratorium", explanation: "Prohibits suits, execution of judgments, transferring assets, and recovery actions against the corporate debtor." },
  { section: "15", title: "Public announcement of corporate insolvency resolution process", explanation: "Contents and procedure for the public announcement of CIRP." },
  { section: "16", title: "Appointment and tenure of interim resolution professional", explanation: "Adjudicating Authority appoints the Interim Resolution Professional (IRP)." },
  { section: "17", title: "Management of affairs of corporate debtor by interim resolution professional", explanation: "Management of the corporate debtor vests in the IRP; powers of the board of directors are suspended." },
  { section: "18", title: "Duties of interim resolution professional", explanation: "IRP must collect information, manage operations, receive claims, and constitute the committee of creditors." },
  { section: "19", title: "Personnel to extend co-operation to interim resolution professional", explanation: "Promoters and personnel must assist the IRP." },
  { section: "20", title: "Management of operations of corporate debtor as going concern", explanation: "IRP must protect and preserve the value of the corporate debtor's property." },
  { section: "21", title: "Committee of creditors", explanation: "IRP constitutes the Committee of Creditors (CoC) comprising financial creditors." },
  { section: "22", title: "Appointment of resolution professional", explanation: "CoC resolves to appoint the IRP as Resolution Professional (RP) or replace them." },
  { section: "23", title: "Resolution professional to conduct corporate insolvency resolution process", explanation: "RP manages operations during the CIRP." },
  { section: "24", title: "Meeting of committee of creditors", explanation: "Procedures for conducting CoC meetings." },
  { section: "25", title: "Duties of resolution professional", explanation: "RP must preserve assets, represent the debtor, invite resolution plans, and convene CoC meetings." },
  { section: "25A", title: "Rights and duties of authorised representative of financial creditors", explanation: "Authorized representatives vote on behalf of classes of financial creditors." },
  { section: "26", title: "Application for avoidance of transactions not to affect proceedings", explanation: "Avoidance applications do not stall CIRP." },
  { section: "27", title: "Replacement of resolution professional by committee of creditors", explanation: "CoC can replace the RP with a 66% voting share." },
  { section: "28", title: "Approval of committee of creditors for certain actions", explanation: "RP needs CoC approval (66%) for major actions like raising interim finance or creating security interests." },
  { section: "29", title: "Preparation of information memorandum", explanation: "RP prepares an information memorandum for resolution applicants." },
  { section: "29A", title: "Persons not eligible to be resolution applicant", explanation: "Disqualifies certain persons (e.g., undischarged insolvents, wilful defaulters, promoters of NPAs) from submitting resolution plans." },
  { section: "30", title: "Submission of resolution plan", explanation: "Applicants submit plans to the RP; CoC approves a plan with at least a 66% voting share." },
  { section: "31", title: "Approval of resolution plan", explanation: "Adjudicating Authority approves the plan if it meets requirements, making it binding on all stakeholders." },
  { section: "32", title: "Appeal", explanation: "Appeals against plan approval can be filed under section 61." },
  { section: "32A", title: "Liability for prior offences", explanation: "Protects the corporate debtor and its assets from prosecution for offences committed prior to CIRP under certain conditions." },
  { section: "33", title: "Initiation of liquidation", explanation: "Adjudicating Authority orders liquidation if no plan is received, plan is rejected, CoC votes to liquidate, or plan is contravened." },
  { section: "34", title: "Appointment of liquidator and fee to be paid", explanation: "RP acts as liquidator unless replaced by the Adjudicating Authority." },
  { section: "35", title: "Powers and duties of liquidator", explanation: "Liquidator verifies claims, takes custody of assets, evaluates property, and sells assets." },
  { section: "36", title: "Liquidation estate", explanation: "Liquidator forms an estate of assets for the benefit of creditors." },
  { section: "37", title: "Powers of liquidator to access information", explanation: "Liquidator can access information systems to verify claims." },
  { section: "38", title: "Consolidation of claims", explanation: "Liquidator receives claims from creditors within 30 days." },
  { section: "39", title: "Verification of claims", explanation: "Liquidator verifies submitted claims." },
  { section: "40", title: "Admission or rejection of claims", explanation: "Liquidator admits or rejects claims and records reasons." },
  { section: "41", title: "Determination of valuation of claims", explanation: "Liquidator determines the value of admitted claims." },
  { section: "42", title: "Appeal against the decision of liquidator", explanation: "Creditors can appeal liquidator's decisions to the Adjudicating Authority." },
  { section: "43", title: "Preferential transactions and relevant time", explanation: "Liquidator can apply to avoid preferential transactions made to related or unrelated parties within specific periods." },
  { section: "44", title: "Orders in case of preferential transactions", explanation: "Adjudicating Authority can order restoration of property or reversal of preferential transactions." },
  { section: "45", title: "Avoidance of undervalued transactions", explanation: "Liquidator can apply to declare undervalued transactions void." },
  { section: "46", title: "Relevant period for avoidable transactions", explanation: "Sets the look-back periods (1 year for normal, 2 years for related parties) for undervalued transactions." },
  { section: "47", title: "Application by creditor in cases of undervalued transactions", explanation: "Creditors can apply to Adjudicating Authority if liquidator fails to report undervalued transactions." },
  { section: "48", title: "Order in cases of undervalued transactions", explanation: "Adjudicating Authority can order restoration of property from undervalued transactions." },
  { section: "49", title: "Transactions defrauding creditors", explanation: "Adjudicating Authority can pass orders against undervalued transactions deliberately made to defraud creditors." },
  { section: "50", title: "Extortionate credit transactions", explanation: "Liquidator can apply to avoid credit transactions requiring exorbitant payments." },
  { section: "51", title: "Orders of Adjudicating Authority in respect of extortionate credit transactions", explanation: "Adjudicating Authority can set aside or modify extortionate credit transactions." },
  { section: "52", title: "Secured creditor in liquidation proceedings", explanation: "Secured creditors can relinquish security to the liquidation estate or realize it independently." },
  { section: "53", title: "Distribution of assets", explanation: "Sets the 'waterfall mechanism' (priority order) for distributing liquidation proceeds (e.g., insolvency costs, workmen dues, secured creditors, etc.)." },
  { section: "54", title: "Dissolution of corporate debtor", explanation: "Upon complete liquidation, Adjudicating Authority orders dissolution of the corporate debtor." },
  { section: "55", title: "Fast track corporate insolvency resolution process", explanation: "Provides for a fast-track CIRP for certain categories of corporate debtors." },
  { section: "56", title: "Time period for completion of fast track CIRP", explanation: "Must be completed within 90 days, extendable by 45 days." },
  { section: "57", title: "Manner of initiating fast track CIRP", explanation: "Process for filing application for fast-track CIRP." },
  { section: "58", title: "Applicability of Chapter II to this Chapter", explanation: "Chapter II provisions apply to fast-track CIRP." },
  { section: "59", title: "Voluntary liquidation of corporate persons", explanation: "Corporate persons without default can initiate voluntary liquidation with creditor approval." },
  { section: "60", title: "Adjudicating Authority for corporate persons", explanation: "National Company Law Tribunal (NCLT) is the Adjudicating Authority." },
  { section: "61", title: "Appeals and Appellate Authority", explanation: "Appeals against NCLT orders lie with the National Company Law Appellate Tribunal (NCLAT)." },
  { section: "62", title: "Appeal to Supreme Court", explanation: "Appeals against NCLAT orders lie with the Supreme Court on questions of law." },
  { section: "63", title: "Civil court not to have jurisdiction", explanation: "Civil courts cannot entertain suits regarding matters under NCLT/NCLAT jurisdiction." },
  { section: "64", title: "Expeditious disposal of applications", explanation: "NCLT/NCLAT must dispose of applications expeditiously." },
  { section: "65", title: "Fraudulent or malicious initiation of proceedings", explanation: "Penalties for initiating CIRP or liquidation fraudulently or maliciously." },
  { section: "66", title: "Fraudulent trading or wrongful trading", explanation: "Adjudicating Authority can order persons to contribute to assets if they engaged in fraudulent trading." },
  { section: "67", title: "Proceedings under section 66", explanation: "Directions for enforcing orders under section 66." },
  { section: "68", title: "Punishment for concealment of property", explanation: "Penalties for officers concealing or removing property." },
  { section: "69", title: "Punishment for transactions defrauding creditors", explanation: "Penalties for officers transferring property to defraud creditors." },
  { section: "70", title: "Punishment for misconduct in course of CIRP", explanation: "Penalties for non-disclosure, falsification, or not delivering property to the RP." },
  { section: "71", title: "Punishment for falsification of books of corporate debtor", explanation: "Penalties for destroying or falsifying books." },
  { section: "72", title: "Punishment for wilful and material omissions from statements", explanation: "Penalties for omissions in statements relating to affairs." },
  { section: "73", title: "Punishment for false representations to creditors", explanation: "Penalties for false representations to obtain creditor consent." },
  { section: "74", title: "Punishment for contravention of moratorium or the resolution plan", explanation: "Penalties for violating moratorium or resolution plan terms." },
  { section: "75", title: "Punishment for false information furnished in application", explanation: "Penalties for false information in applications." },
  { section: "76", title: "Punishment for non-disclosure of dispute or repayment", explanation: "Penalties for operational creditors concealing disputes or payments." },
  { section: "77", title: "Punishment for providing false information in application made by corporate debtor", explanation: "Penalties for corporate debtors providing false information." },
  { section: "188", title: "Establishment and incorporation of Board", explanation: "Establishes the Insolvency and Bankruptcy Board of India (IBBI)." },
  { section: "196", title: "Powers and functions of Board", explanation: "IBBI regulates IPs, IPAs, and IUs, specifies regulations, and conducts inspections." },
  { section: "206", title: "Enrolled and registered persons to act as insolvency professionals", explanation: "No person can act as an IP without being enrolled and registered." },
  { section: "208", title: "Functions and obligations of insolvency professionals", explanation: "IPs must abide by the code of conduct, take reasonable care, and comply with bylaws." },
  { section: "238", title: "Provisions of this Code to override other laws", explanation: "The Code has overriding effect over inconsistent provisions in any other law." },
  { section: "240", title: "Power to make regulations", explanation: "Grants IBBI the power to make regulations consistent with the Code." }
];

export const importantIbcSections = ibcSections.filter(s => 
  ["1", "2", "3", "6", "7", "8", "9", "10", "12", "12A", "14", "21", "25", "29A", "30", "31", "33", "53", "59", "60", "61", "188", "196", "206", "208", "238", "240"].includes(s.section)
);

export const complianceDashboardItems = [
  { title: 'Corporate Insolvency Resolution Process', icon: 'Briefcase', desc: 'Rules for initiating and conducting CIRP', target: 'Corporate Insolvency Resolution Process' },
  { title: 'Moratorium', icon: 'Shield', desc: 'Protection of corporate debtor assets during CIRP', target: 'Moratorium' },
  { title: 'Committee of Creditors', icon: 'Users', desc: 'Constitution and voting powers of the CoC', target: 'Committee of creditors' },
  { title: 'Resolution Plans', icon: 'FileText', desc: 'Submission, eligibility, and approval of plans', target: 'Submission of resolution plan' },
  { title: 'Liquidation', icon: 'TrendingUp', desc: 'Process, liquidator duties, and distribution waterfall', target: 'Liquidation Process' },
  { title: 'IBBI', icon: 'Landmark', desc: 'Role and powers of the Insolvency and Bankruptcy Board', target: 'Powers and functions of Board' },
  { title: 'Insolvency Professionals', icon: 'FileSignature', desc: 'Registration, obligations, and code of conduct', target: 'Insolvency Professionals' },
  { title: 'Information Utilities', icon: 'BookOpen', desc: 'Submission and access to financial information', target: 'Information Utilities' }
];

export const featuredTopics = [
  'CIRP', 'Liquidation', 'Moratorium', 'Committee of Creditors', 'Resolution Plan', 'Insolvency Professional'
];

export const relatedActs = [
  { title: 'Companies Act, 2013', path: '/knowledge-base/companies-act' },
  { title: 'Limited Liability Partnership Act, 2008', path: '/knowledge-base/llp-act' },
  { title: 'Indian Partnership Act, 1932', path: '/knowledge-base/partnership-act' },
  { title: 'Recovery of Debts and Bankruptcy Act, 1993', path: '#' },
  { title: 'SARFAESI Act, 2002', path: '#' }
];
