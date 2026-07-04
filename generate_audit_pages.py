import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "StatutoryAudit": {
        "title": "Statutory Audit",
        "intro_title": "Ensure Regulatory Compliance",
        "intro_p1": "Statutory Audit is an audit which is prescribed by different statutes like Companies Act, Income Tax, GST Act, and Reserve Bank of India. A Chartered Accountant conducts these audits as per the specific statutory requirements.",
        "intro_p2": "It aims at achieving full compliance with regulations and corporate laws alongside financial records. Our audit approach is based on compliance issues tailored to your business specifics and industry peculiarities.",
        "features": [
            {"title": "Private Limited Companies", "desc": "Mandatory yearly statutory audits for all private entities.", "icon": "Building"},
            {"title": "Public Limited Companies", "desc": "Comprehensive statutory audits for public corporations.", "icon": "Landmark"},
            {"title": "Section 8 Companies", "desc": "Specialized audits for non-profit and charitable organizations.", "icon": "ShieldCheck"},
            {"title": "Bank Branch Audit", "desc": "Statutory audits conducted for bank branches under RBI guidelines.", "icon": "Briefcase"},
            {"title": "LLP & Partnerships", "desc": "Audits ensuring financial transparency for partnerships.", "icon": "Users"},
            {"title": "Trust Audit", "desc": "Dedicated audits for trusts ensuring fund utilization compliance.", "icon": "FileText"}
        ],
        "benefits": [
            {"title": "Regulatory Compliance", "desc": "Stay strictly compliant with the Companies Act, Income Tax, and RBI.", "icon": "BadgeCheck"},
            {"title": "Financial Transparency", "desc": "Ensure your financial records portray a true and fair view of the business.", "icon": "Search"},
            {"title": "Investor Confidence", "desc": "Build immense trust among stakeholders, banks, and investors.", "icon": "TrendingUp"},
            {"title": "Risk Identification", "desc": "Proactively identify internal control risks and financial discrepancies.", "icon": "ShieldAlert"}
        ],
        "timeline": ["Pre-Audit Consultation", "Audit Strategy & Planning", "System & Control Review", "Substantive Testing", "Audit Report Issuance"],
        "faqs": [
            {"q": "Who needs a statutory audit?", "a": "Companies, LLPs, trusts, and bank branches depending on specific turnover or statutory mandates require a statutory audit."},
            {"q": "Can any accountant perform a statutory audit?", "a": "No, a statutory audit must be conducted by a qualified Chartered Accountant holding a valid certificate of practice."}
        ]
    },
    "TaxAudit": {
        "title": "Tax Audit",
        "intro_title": "Section 44AB Tax Compliance",
        "intro_p1": "Income Tax law has made 'Tax Audit' compulsory to review accounts of business or any profession, making the process of income computation for filling of return of income easier.",
        "intro_p2": "Section 44AB has made tax audit mandatory if annual gross turnover or receipts exceed specified limits. The tax auditor presents the report in specified forms like Form 3CA or Form 3CB along with 3CD.",
        "features": [
            {"title": "Business Turnover > Rs 1 Crore", "desc": "Mandatory tax audit if annual gross turnover exceeds Rs 1 Crore.", "icon": "TrendingUp"},
            {"title": "Profession Receipts > Rs 50 Lakh", "desc": "Mandatory tax audit if gross professional income exceeds Rs 50 Lakh.", "icon": "BarChart"},
            {"title": "Section 44AD Presumptive Taxation", "desc": "For businesses with turnover up to Rs 2 Crore opting for 8% or 6% presumptive income.", "icon": "FileCheck"},
            {"title": "Section 44ADA Presumptive Taxation", "desc": "For professionals earning up to Rs 50 Lakhs opting for 50% presumptive income.", "icon": "Wallet"},
            {"title": "Form 3CA / 3CB", "desc": "Filing accurate audit reports based on whether accounts are audited under other laws.", "icon": "FileText"},
            {"title": "Penalty Avoidance", "desc": "Avoid penalties of 0.5% of total sales or Rs 1,50,000 for non-filing.", "icon": "ShieldAlert"}
        ],
        "benefits": [
            {"title": "Accurate Income Computation", "desc": "Ensures books of accounts accurately show the income and claim deductions.", "icon": "Calculator"},
            {"title": "Penalty Prevention", "desc": "Timely filing prevents severe penalties under the Income Tax Act.", "icon": "ShieldCheck"},
            {"title": "Business Credibility", "desc": "Gives credibility to information published for authorities and investors.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Data Collection", "Books Verification", "Draft 3CA/3CB & 3CD", "Taxpayer Review", "Upload on Income Tax Portal"],
        "faqs": [
            {"q": "What is the penalty for delay in filing a tax audit report?", "a": "The penalty is 0.5% of the total sales, turnover, or gross receipts, subject to a maximum of Rs 1,50,000."},
            {"q": "When is the due date for a tax audit?", "a": "Taxpayers covered under section 44AB must obtain the audit reports on or before 30th September of that assessment year."}
        ]
    },
    "GSTAudit": {
        "title": "GST Audit",
        "intro_title": "Goods & Services Tax Verification",
        "intro_p1": "Audit under GST is the process of examination of records, returns and other documents maintained by a taxable person. The purpose is to verify the correctness of turnover declared, taxes paid, and input tax credit availed.",
        "intro_p2": "It is essential to assess the compliance with the provisions of the GST Act. We conduct detailed verifications to ensure your business remains perfectly compliant with complex GST regulations.",
        "features": [
            {"title": "Turnover Verification", "desc": "Detailed examination of outward supplies and declared turnover.", "icon": "BarChart"},
            {"title": "Input Tax Credit (ITC)", "desc": "Thorough assessment of ITC availed to ensure strict compliance.", "icon": "Wallet"},
            {"title": "Taxes Paid & Refunded", "desc": "Verifying the correctness of all taxes paid and refunds claimed.", "icon": "FileCheck"},
            {"title": "Documentation Review", "desc": "Complete audit of sales, purchases, and related GST records.", "icon": "Search"}
        ],
        "benefits": [
            {"title": "Ensure GST Compliance", "desc": "Maintain 100% adherence to all GST laws and provisions.", "icon": "ShieldCheck"},
            {"title": "Prevent Reversals", "desc": "Identify ineligible ITC early to prevent heavy interest reversals later.", "icon": "ShieldAlert"},
            {"title": "Smooth Assessments", "desc": "A well-audited GST record ensures smooth departmental assessments.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Invoice Collation", "ITC Reconciliation", "Turnover Matching", "Draft Audit Report", "Final Submission"],
        "faqs": [
            {"q": "What is the primary purpose of a GST audit?", "a": "To verify the correctness of turnover declared, taxes paid, refund claimed, and input tax credit availed."},
            {"q": "What documents are required for a GST audit?", "a": "Sales invoices, purchase invoices, filed GST returns, and corresponding books of accounts."}
        ]
    },
    "OtherAudits": {
        "title": "Other Audits",
        "intro_title": "Internal & Operational Audits",
        "intro_p1": "Beyond statutory requirements, organizations need specialized internal audits to evaluate risks, project efficiency, and operational structures. We provide assurance on internal controls and procedures.",
        "intro_p2": "Our risk-based approach focuses on evaluating existing business processes, identifying revenue leakages, and recommending practical solutions for up-gradation and policy revision.",
        "features": [
            {"title": "Internal Audit", "desc": "Evaluating risks and making suggestions for policy up-gradation.", "icon": "Search"},
            {"title": "Concurrent Audit", "desc": "Systematic and timely examination of financial transactions on a regular basis.", "icon": "Clock"},
            {"title": "Operational Audit", "desc": "Determining whether internal policies produce an optimum level of efficiency.", "icon": "Settings"},
            {"title": "Project Audits", "desc": "Phased assessment of inputs (cost/material) and outcomes of project milestones.", "icon": "Briefcase"},
            {"title": "Risk Assessment", "desc": "Identifying risk factors and generating a comprehensive Risk Mitigation Report.", "icon": "ShieldAlert"},
            {"title": "Fund Utilization Review", "desc": "Providing assurance to contributors that trust funds are utilized properly.", "icon": "Wallet"}
        ],
        "benefits": [
            {"title": "Stronger Internal Controls", "desc": "Identify weaknesses and implement improved methods of operations.", "icon": "ShieldCheck"},
            {"title": "Cost Reduction", "desc": "Identify areas of revenue leakages and enforce practical cost reductions.", "icon": "TrendingDown"},
            {"title": "Early Warning Signals", "desc": "Provides signals about company sickness or operational failure beforehand.", "icon": "Activity"}
        ],
        "timeline": ["Process Understanding", "Risk Identification", "Test of Controls", "Substantive Checking", "Management Reporting"],
        "faqs": [
            {"q": "What is a Concurrent Audit?", "a": "It is a systematic examination of financial transactions on a regular basis emphasizing substantial checking rather than test checking."},
            {"q": "How does Operational Audit help?", "a": "It evaluates business SOPs and structures to determine if policies are producing an optimum level of efficiency and effectiveness."}
        ]
    },
    "ForensicAudit": {
        "title": "Forensic Audit",
        "intro_title": "Investigating Financial Fraud",
        "intro_p1": "A forensic audit is an evaluation and examination of an individual's or a firm's financial records to stem up evidence that can be used in a legal proceeding or court of law. It focuses on reconstructing past financial transactions.",
        "intro_p2": "It involves the investigation of embezzlement, bribery, extortion, financial statement fraud, and asset misappropriation. Our auditors act as expert witnesses during trial proceedings.",
        "features": [
            {"title": "Corruption & Bribery", "desc": "Investigating illegitimate use of office, extortion, and conflict of interest.", "icon": "ShieldAlert"},
            {"title": "Asset Misappropriation", "desc": "Detecting fake invoices, theft of inventory, and payments to non-existing entities.", "icon": "Search"},
            {"title": "Financial Statement Fraud", "desc": "Uncovering deliberate misstatement or omission of financial data.", "icon": "FileX"},
            {"title": "Evidence Gathering", "desc": "Using computer-assisted audit techniques to harvest court-admissible evidence.", "icon": "Database"},
            {"title": "Court Proceedings", "desc": "Providing litigation assistance and expert witness testimony in trials.", "icon": "Landmark"},
            {"title": "Data Analysis", "desc": "Applying Forensic Data Analysis (FDA) and Fraud Triangle metrics.", "icon": "BarChart"}
        ],
        "benefits": [
            {"title": "Fraud Prevention", "desc": "Helps in fraud identification and prevents future occurrences through stronger controls.", "icon": "ShieldCheck"},
            {"title": "Legal Evidence", "desc": "Provides solid, legally sound evidence admissible in court proceedings.", "icon": "BadgeCheck"},
            {"title": "Independent Objectivity", "desc": "An external forensic auditor is far more objective than internal accountants.", "icon": "Users"}
        ],
        "timeline": ["Accepting Investigation", "Planning Strategy", "Gathering Evidence", "Reporting & Documentation", "Court Proceedings"],
        "faqs": [
            {"q": "What is a forensic audit?", "a": "It is an examination of financial records to gather evidence for legal proceedings, typically involving fraud or embezzlement."},
            {"q": "Can a forensic auditor testify in court?", "a": "Yes, forensic auditors frequently provide litigation assistance and serve as expert witnesses in court trials."}
        ]
    },
    "SecretarialAudit": {
        "title": "Secretarial Audit",
        "intro_title": "Corporate Governance & Compliance",
        "intro_p1": "The Secretarial Audit is an audit where the Secretarial Auditor expresses an opinion as to whether there exist appropriate systems and processes to check compliance with applicable laws, rules, regulations, and guidelines.",
        "intro_p2": "It is an independent process intended to add value and improve the operations of the company, providing necessary comfort to management, regulators, and stakeholders regarding good governance.",
        "features": [
            {"title": "Listed Companies", "desc": "Mandatory secretarial audit for every listed company.", "icon": "Landmark"},
            {"title": "Paid-up Capital > 50 Cr", "desc": "Applicable to public companies with paid-up capital of Rs 50 crore or more.", "icon": "BarChart"},
            {"title": "Turnover > 250 Cr", "desc": "Applicable to public companies with a turnover of Rs 250 crore or more.", "icon": "TrendingUp"},
            {"title": "Borrowings > 100 Cr", "desc": "Applicable to companies having a borrowing of Rs 100 crores or more.", "icon": "Wallet"},
            {"title": "Companies Act 2013", "desc": "Verification of records under the Act and rules made thereunder.", "icon": "BookOpen"},
            {"title": "SEBI & FEMA", "desc": "Checking compliances associated with SEBI Regulations and FEMA.", "icon": "Globe"}
        ],
        "benefits": [
            {"title": "Effective Due Diligence", "desc": "Provides comfort to prospective acquirers or joint venture partners.", "icon": "Search"},
            {"title": "Risk Indemnification", "desc": "Indemnifies owners that affairs are conducted legally without undue risk.", "icon": "ShieldCheck"},
            {"title": "Investor Confidence", "desc": "Shows the right path to investors by showcasing your clean legal records.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Appointment of Auditor", "Preliminary Discussions", "Audit Plan Finalization", "Testing & Analysis", "Submission of Report"],
        "faqs": [
            {"q": "Who can be appointed as a Secretarial Auditor?", "a": "Only members of the ICSI holding a valid certificate of practice can conduct a Secretarial Audit."},
            {"q": "What happens if there are false statements in the audit?", "a": "Under Section 448 of the Companies Act, making false material statements is subject to severe penalties under Section 447."}
        ]
    },
    "DueDiligence": {
        "title": "Due Diligence",
        "intro_title": "Business Transaction Assessment",
        "intro_p1": "Due diligence is an inspection and risk assessment of an upcoming business transaction. It is a background check to make sure that the parties to the transaction have the required information they need to proceed.",
        "intro_p2": "A proper due diligence reveals misrepresentation and fraudulent dealings in major transactions like Mergers & Acquisitions, Partnerships, and Joint Enterprises.",
        "features": [
            {"title": "Mergers & Acquisitions", "desc": "Comprehensive analysis of financials, litigation, and patents for buyers/sellers.", "icon": "Briefcase"},
            {"title": "Joint Ventures", "desc": "Reliability checks and technical/financial collaboration assessments.", "icon": "Users"},
            {"title": "Capitalization Analysis", "desc": "Examining company value, stock price volatility, and destination markets.", "icon": "TrendingUp"},
            {"title": "Tax Due Diligence", "desc": "Uncovering tax exposures, liabilities, and structuring tax-efficient deals.", "icon": "FileText"},
            {"title": "Risk Assessment", "desc": "Identifying industry-wide and company-specific short and long-term risks.", "icon": "ShieldAlert"},
            {"title": "Data Room Creation", "desc": "Establishing secure virtual data rooms for confidential document exchange.", "icon": "Lock"}
        ],
        "benefits": [
            {"title": "Deal Breakers Identified", "desc": "Uncover glaring non-compliances or criminal proceedings before signing.", "icon": "XOctagon"},
            {"title": "Deal Diluters Quantified", "desc": "Identify violations that could result in diminishing the value of the company.", "icon": "TrendingDown"},
            {"title": "Future Protection", "desc": "Negotiate robust protection mechanisms based on factual reporting.", "icon": "ShieldCheck"}
        ],
        "timeline": ["Pre-Diligence & NDA", "Data Room Creation", "Diligence Process", "Report Generation", "Post-Diligence Negotiation"],
        "faqs": [
            {"q": "How is Due Diligence different from Statutory Audit?", "a": "Unlike a statutory audit which relies on historical data and is mandatory, due diligence covers future growth prospects, business plans, and is transaction-based."},
            {"q": "What is a Deal Cautioner?", "a": "It covers findings that may not impact financials but require the investor to proceed cautiously with fixable non-compliances."}
        ]
    },
    "FinancialReportingAdvisory": {
        "title": "Financial Reporting & Accounting Advisory Services",
        "intro_title": "Complex Accounting Solutions",
        "intro_p1": "In the current global environment, there are many challenges from an accounting perspective as shareholders and regulators take a greater interest in how companies report and disclose their financial results.",
        "intro_p2": "Our partners have in-depth technical accounting knowledge and industry insight to advise clients on challenging, complex issues arising from transactions, business decisions, and regulatory changes.",
        "features": [
            {"title": "GAAP to IFRS Conversions", "desc": "In-depth technical conversions addressing tax relationships and disclosures.", "icon": "Globe"},
            {"title": "M&A Accounting", "desc": "Preparing opening balance sheets, carve-outs, and pro forma statements.", "icon": "Briefcase"},
            {"title": "IPO Readiness", "desc": "Comprehensive financial structuring and reporting for Initial Public Offerings.", "icon": "TrendingUp"},
            {"title": "Restructure Advice", "desc": "Guiding the interaction of accounting requirements with merger relief laws.", "icon": "Layers"}
        ],
        "benefits": [
            {"title": "Regulatory Compliance", "desc": "Meet stringent additional disclosure requirements from standard setters.", "icon": "BadgeCheck"},
            {"title": "Optimized Transactions", "desc": "Address key regulatory challenges correctly during major acquisitions.", "icon": "Settings"},
            {"title": "Global Consistency", "desc": "Deliver consistent, cost-effective accounting backed by worldwide resources.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Issue Identification", "Impact Analysis", "Strategic Modeling", "Implementation", "Post-Reporting Support"],
        "faqs": [
            {"q": "What does accounting advisory cover?", "a": "It covers GAAP conversions, transaction reporting, IPO readiness, and complex restructuring advice."},
            {"q": "Why is GAAP conversion difficult?", "a": "It requires understanding accounting differences alongside business implications like tax relationships and staff training."}
        ]
    },
    "ManagementAudits": {
        "title": "Management Audits",
        "intro_title": "Analyze Management Efficiency",
        "intro_p1": "Management Audit helps us to analyze the health of company management. It plays a vital role in the management support system, essential to strengthen the way operations are planned and executed.",
        "intro_p2": "It is an inspection of company management where actions and decisions are assessed critically. This type of audit is mostly preferred by Investor Group Shareholders to evaluate operational efficiency.",
        "features": [
            {"title": "Efficiency Evaluation", "desc": "Assessing plans and policies to improve management's operational efficiency.", "icon": "Activity"},
            {"title": "Resource Optimization", "desc": "Ensuring that human and capital resources are utilized at an optimum level.", "icon": "TrendingUp"},
            {"title": "Internal Control Review", "desc": "Finding weaknesses in internal systems and conveying suitable suggestions.", "icon": "Search"},
            {"title": "Human Resource Evaluation", "desc": "Checking performance evaluation of human resources at every process level.", "icon": "Users"}
        ],
        "benefits": [
            {"title": "Identify Deficiencies", "desc": "Point out critical deficiencies in operations during the audit.", "icon": "Target"},
            {"title": "Sickness Signals", "desc": "Provides early warning signals about company sickness beforehand.", "icon": "ShieldAlert"},
            {"title": "Predict Problems", "desc": "Helps you magnify and foresee problems, suggesting suitable remedies.", "icon": "Eye"}
        ],
        "timeline": ["Operations Review", "Policy Assessment", "Deficiency Identification", "Management Evaluation", "Remedy Suggestion"],
        "faqs": [
            {"q": "What is the focus of a Management Audit?", "a": "It focuses on analyzing the health of company management, evaluating decisions, policies, and operational efficiency."},
            {"q": "Who usually prefers a Management Audit?", "a": "It is mostly preferred by Investor Group Shareholders to safeguard their investments and ensure competent management."}
        ]
    },
    "CertificationServices": {
        "title": "Certification Services",
        "intro_title": "Statutory & Financial Certifications",
        "intro_p1": "Certain financial information needs to be certified for various purposes such as statutory requirements, regulatory mandates, tendering processes, or on the request of third parties.",
        "intro_p2": "As part of our professional services, we provide prompt and accurate certification services to our clients, ensuring that all financial declarations meet the stringent standards required by authorities.",
        "features": [
            {"title": "Statutory Certifications", "desc": "Certifications required under the Companies Act and Income Tax Act.", "icon": "FileSignature"},
            {"title": "Regulatory Compliance", "desc": "Issuing certificates for RBI, FEMA, and other regulatory bodies.", "icon": "Building"},
            {"title": "Tender Certifications", "desc": "Financial capacity and net worth certificates for government tenders.", "icon": "Briefcase"},
            {"title": "Third-Party Certificates", "desc": "Custom certifications requested by banks, investors, or foreign entities.", "icon": "FileText"}
        ],
        "benefits": [
            {"title": "Unquestionable Authority", "desc": "Certificates backed by a practicing Chartered Accountant's seal.", "icon": "BadgeCheck"},
            {"title": "Timely Delivery", "desc": "Fast turnaround times for urgent tender or loan requirements.", "icon": "Clock"},
            {"title": "100% Accuracy", "desc": "Rigorous financial verification ensuring flawless certification.", "icon": "ShieldCheck"}
        ],
        "timeline": ["Requirement Gathering", "Document Verification", "Financial Analysis", "Draft Review", "Final Certification"],
        "faqs": [
            {"q": "When do I need a CA certificate?", "a": "You need it for bank loans, government tenders, regulatory filings, visa applications, and subsidies."},
            {"q": "Can you certify financial projections?", "a": "Yes, we review and certify projected financial statements for project financing."}
        ]
    },
    "AgreedUponProcedures": {
        "title": "Agreed Upon Procedures",
        "intro_title": "Tailored Factual Findings",
        "intro_p1": "In the day-to-day operations of today’s business, we are required to issue a report of factual findings based on specified procedures. We perform on specified subject matter of specified elements as required by the clients.",
        "intro_p2": "Having adequate knowledge of the business and industry, we help with specific procedures such as transactions with related parties, sales, and profit of specific segments to carve out precise financial statements.",
        "features": [
            {"title": "Scope Definition", "desc": "Client and auditor jointly agree on the exact procedures to be performed.", "icon": "Target"},
            {"title": "Related Party Transactions", "desc": "Specific checking of transactions involving related parties.", "icon": "Users"},
            {"title": "Segment Profitability", "desc": "Deep dive into the sales and profit metrics of a specific business segment.", "icon": "BarChart"},
            {"title": "Factual Reporting", "desc": "Delivering a report based strictly on factual findings without formal assurance.", "icon": "FileText"}
        ],
        "benefits": [
            {"title": "Highly Customizable", "desc": "You pay only for the exact procedures and checks you need.", "icon": "Settings"},
            {"title": "Targeted Insights", "desc": "Get precise factual data on specific departments or transactions.", "icon": "Search"},
            {"title": "Clear Deliverables", "desc": "Receive a transparent report of factual findings for internal management use.", "icon": "CheckCircle"}
        ],
        "timeline": ["Scope Agreement", "Procedure Definition", "Execution", "Factual Analysis", "Report of Findings"],
        "faqs": [
            {"q": "How is an Agreed Upon Procedure different from an Audit?", "a": "In an AUP, the auditor simply performs the procedures agreed with the client and reports factual findings without expressing an audit opinion or assurance."},
            {"q": "When should I use Agreed Upon Procedures?", "a": "When you need an independent professional to verify specific financial elements, like accounts receivable or related party transactions, without needing a full audit."}
        ]
    }
}

template = """import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface {component_name}Props {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const {component_name}: React.FC<{component_name}Props> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "{title}",
    intro_title: "{intro_title}",
    intro_p1: "{intro_p1}",
    intro_p2: "{intro_p2}",
    features: [
{features_jsx}
    ],
    benefits: [
{benefits_jsx}
    ],
    timeline: [
{timeline_jsx}
    ],
    faqs: [
{faqs_js}
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
"""

for comp_name, data in pages_data.items():
    # Format FAQs
    faqs_js = ",\n    ".join([f'{{ q: "{f["q"]}", a: "{f["a"]}" }}' for f in data["faqs"]])
    
    # Format Features
    features_jsx = ",\n".join([
        f'      {{ title: "{f["title"]}", desc: "{f["desc"]}", icon: "{f["icon"]}" }}'
        for f in data["features"]
    ])
    
    # Format Benefits
    benefits_jsx = ",\n".join([
        f'      {{ title: "{f["title"]}", desc: "{f["desc"]}", icon: "{f["icon"]}" }}'
        for f in data["benefits"]
    ])
    
    # Format Timeline
    timeline_jsx = ",\n".join([
        f'      "{t}"'
        for t in data["timeline"]
    ])
    
    # Create the TSX content
    tsx_content = template
    tsx_content = tsx_content.replace("{component_name}", comp_name)
    tsx_content = tsx_content.replace("{title}", data["title"])
    tsx_content = tsx_content.replace("{intro_title}", data["intro_title"])
    tsx_content = tsx_content.replace("{intro_p1}", data["intro_p1"])
    tsx_content = tsx_content.replace("{intro_p2}", data["intro_p2"])
    tsx_content = tsx_content.replace("{faqs_js}", faqs_js)
    tsx_content = tsx_content.replace("{features_jsx}", features_jsx)
    tsx_content = tsx_content.replace("{benefits_jsx}", benefits_jsx)
    tsx_content = tsx_content.replace("{timeline_jsx}", timeline_jsx)
    
    # Write TSX
    tsx_path = os.path.join(target_dir, f"{comp_name}.tsx")
    with open(tsx_path, "w", encoding="utf-8") as f:
        f.write(tsx_content)
        
    print(f"Generated {comp_name}")
