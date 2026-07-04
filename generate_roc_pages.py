import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "AnnualCompliancePrivateLimitedCompany": {
        "title": "Annual Compliance for Private Limited Company",
        "intro_title": "Maintain Your Active Status",
        "intro_p1": "A Private Company is a legal institute enjoying a separate personality which requires controlling its active status through the regular filing with MCA. For every business, it is compulsory to file an annual return and audited financial reports with MCA for every fiscal year.",
        "intro_p2": "The RoC filing is necessary irrespective of the turnover, whether it is zero or in crore. Whether a single business is undertaken or none, annual compliances for private limited are compulsory for every certified company.",
        "features": [
            {"title": "First Board Meeting", "desc": "Held within 30 days of Incorporation.", "icon": "Users"},
            {"title": "Subsequent Board Meetings", "desc": "Minimum of 4 Board Meetings to be held every year.", "icon": "Calendar"},
            {"title": "First Auditor Appointment", "desc": "Designate the first Auditor within 30 days of Incorporation.", "icon": "FileSignature"},
            {"title": "Annual General Meeting", "desc": "Must be held on or before 30th September every year.", "icon": "Mic"},
            {"title": "Form MGT-7 Filing", "desc": "File the Annual Return within 60 days of the AGM.", "icon": "FileText"},
            {"title": "Form AOC-4 Filing", "desc": "File the Financial Statements within 30 days of the AGM.", "icon": "BarChart"}
        ],
        "benefits": [
            {"title": "Company Credibility", "desc": "Consistency in compliance is vital to measure the reliability of an organization.", "icon": "BadgeCheck"},
            {"title": "Invite Investors", "desc": "Investors demand financial histories before settling funding proposals.", "icon": "TrendingUp"},
            {"title": "Maintain Active State", "desc": "Avoid constant failures that turn company status to defunct.", "icon": "ShieldCheck"},
            {"title": "Avoid Punishments", "desc": "Escape heavy supplementary fees of ₹100 for each day of delay.", "icon": "ShieldAlert"}
        ],
        "timeline": ["Board Meetings", "Statutory Audit of Accounts", "Annual General Meeting", "AOC-4 Filing", "MGT-7 Filing"],
        "faqs": [
            {"q": "Is ROC filing necessary if my company has zero turnover?", "a": "Yes, RoC filing is necessary irrespective of the turnover, whether it is zero or in crore."},
            {"q": "What happens if a company fails to file annual returns?", "a": "Constant failure in filing the return charges it with heavy penalties, and the company may also be disclosed as defunct."}
        ]
    },
    "AnnualComplianceLLP": {
        "title": "Annual Compliance of LLP",
        "intro_title": "LLP Statutory Maintenance",
        "intro_p1": "Limited Liability Partnerships must adhere to strict annual compliance requirements set by the MCA. These include the filing of statements of account, solvency, and annual returns.",
        "intro_p2": "Under the LLP Settlement Scheme and general provisions, it is imperative to file Form 8 and Form 11 correctly to avoid penalties and maintain active standing.",
        "features": [
            {"title": "LLP Form 11", "desc": "Annual Return of Limited Liability Partnership.", "icon": "FileText"},
            {"title": "LLP Form 8", "desc": "Statement of Account & Solvency (Annual or Interim).", "icon": "BarChart"},
            {"title": "Income Tax Return", "desc": "Income tax return filing is mandatory every financial year.", "icon": "Wallet"},
            {"title": "DIR-3 KYC", "desc": "Annual KYC filing for Designated Partners.", "icon": "UserCheck"}
        ],
        "benefits": [
            {"title": "Avoid High Penalties", "desc": "Prevent the ₹100 per day penalty for late filing.", "icon": "ShieldAlert"},
            {"title": "Legal Protection", "desc": "Ensure the LLP stays in good standing without threat of striking off.", "icon": "ShieldCheck"},
            {"title": "Credibility", "desc": "A fully compliant LLP attracts better vendor and client trust.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Collate Financials", "Prepare Form 11", "Audit (if applicable)", "Prepare Form 8", "Final Filing"],
        "faqs": [
            {"q": "What is the penalty for not filing LLP forms?", "a": "The failure penalty for LLPs defaulting in any sanctioned filing return is Rs.100 per day with no maximum limit."},
            {"q": "What is Form 8?", "a": "Form 8 is the Statement of Account and Solvency that must be filed annually by the LLP."}
        ]
    },
    "NidhiCompanyCompliance": {
        "title": "Nidhi Company Compliance",
        "intro_title": "Secure Mutual Benefit Finance",
        "intro_p1": "Like every company, Nidhi Company also consists of a few annual compliances popularly known as Nidhi Company Compliances. The statutory compliances are disclosed in Nidhi Rules 2014 and the Companies Act 2013.",
        "intro_p2": "It is necessary for Nidhi Company to meet all the compliances to give a clear picture of the work status and performance of the company during a period.",
        "features": [
            {"title": "NDH-1 Return", "desc": "Return of Statutory Compliances filed within 90 days from the end of the financial year.", "icon": "FileText"},
            {"title": "NDH-3 Return", "desc": "Half-yearly return form filed by the Nidhi Company.", "icon": "Calendar"},
            {"title": "NDH-2 Form", "desc": "Appeal for time extension if failing to add 200 members.", "icon": "Clock"},
            {"title": "AOC-4 Filing", "desc": "Filing financial statements with the MCA.", "icon": "BarChart"},
            {"title": "MGT-7 Filing", "desc": "Filing the Annual Return with the Registrar.", "icon": "FileCheck"},
            {"title": "Income Tax Returns", "desc": "Annual income tax return filing by 30th September.", "icon": "Wallet"}
        ],
        "benefits": [
            {"title": "Clear Insights", "desc": "Compliances help in forming exact insights about the company’s working performance.", "icon": "TrendingUp"},
            {"title": "Stakeholder Protection", "desc": "Protects the interest of its stakeholders as required for public companies.", "icon": "ShieldCheck"},
            {"title": "Avoid Penalties", "desc": "Prevent fines up to Rs 5000 and Rs 500 continuously for non-compliance.", "icon": "ShieldAlert"}
        ],
        "timeline": ["NDH-3 (Half Yearly)", "NDH-1 (90 Days from FY End)", "AGM (Before 30th Sept)", "AOC-4 (30 days post AGM)", "MGT-7 (60 days post AGM)"],
        "faqs": [
            {"q": "What happens if a Nidhi company fails to add 200 members?", "a": "The company must file form NDH-2 with the Regional Director to appeal for a time extension."},
            {"q": "What is the penalty for non-compliance in a Nidhi company?", "a": "Officials will be fined up to Rs 5000 initially, with an additional fine of Rs 500 per day if the infringement continues."}
        ]
    },
    "Section8CompanyCompliance": {
        "title": "Section 8 Company Compliance",
        "intro_title": "NGO & Non-Profit Compliance",
        "intro_p1": "The Companies Act, 2013 has made it mandatory for all the Section 8 Companies to adhere to Compliance with the MCA. The purpose of forming Section 8 Company is to promote, encourage, and nourish activities related to art, science, sports, commerce, charitable activities, etc.",
        "intro_p2": "These Companies are not liable to give income or dividend to its members. Adherence to annual compliances is necessary to maintain their special tax-exempt status.",
        "features": [
            {"title": "Auditor Appointment", "desc": "Compulsory to appoint an auditor to take care of financial recordings every year.", "icon": "FileSignature"},
            {"title": "Register Maintenance", "desc": "Maintaining statutory records regarding members, loans, charges, and investments.", "icon": "BookOpen"},
            {"title": "Board & Annual Meetings", "desc": "Holding Board Meetings twice a year and an AGM before 30th September.", "icon": "Users"},
            {"title": "Form AOC-4", "desc": "Filing financial statements within 30 days of the AGM.", "icon": "BarChart"},
            {"title": "Form MGT-7", "desc": "Filing the annual return within 60 days of the AGM.", "icon": "FileText"},
            {"title": "Tax Exemptions", "desc": "Registration under Section 12A and 80G for tax benefits.", "icon": "Wallet"}
        ],
        "benefits": [
            {"title": "Better Credibility", "desc": "Gives the company better credibility among donors and society.", "icon": "BadgeCheck"},
            {"title": "Avoid Legal Trouble", "desc": "Protects the company and its chiefs from detainment and fines.", "icon": "ShieldCheck"},
            {"title": "Customer Trust", "desc": "Works in the direction of forming immense trust amongst customers.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Board Meetings", "Director's Report", "AGM (By 30th Sept)", "AOC-4 (30 days of AGM)", "MGT-7 (60 days of AGM)"],
        "faqs": [
            {"q": "Is it mandatory to hold an AGM for a Section 8 company?", "a": "Yes, an Annual General Meeting should be held yearly on or before 30th September."},
            {"q": "What are the penalties for non-compliance?", "a": "The Central Government may revoke the permit, and fines can stretch from ten lakh to one crore rupees."}
        ]
    },
    "NBFCCompliance": {
        "title": "NBFC Compliance",
        "intro_title": "Strict RBI Regulations",
        "intro_p1": "Lately, RBI compliances have become more complex for NBFCs. RBI has drafted new compliances for NBFCs and keeps them under their screening. A portion of the significant rules are Securitization of Standard Assets and Guidelines for Private Placement of NBFCs.",
        "intro_p2": "NBFCs are actively involved in financial activities and are registered by the Reserve Bank of India. No NBFC can run their business without receiving the license from the Reserve Bank of India.",
        "features": [
            {"title": "CIC Registration", "desc": "Mandatory membership in Credit Information Companies like CIBIL and Experian.", "icon": "CreditCard"},
            {"title": "FIU-IND Registration", "desc": "Financial Intelligence Registration to prevent money laundering.", "icon": "ShieldAlert"},
            {"title": "Central KYC", "desc": "Adopting CKYC registration to gather records for customers.", "icon": "UserCheck"},
            {"title": "NBS Returns", "desc": "Quarterly returns (NBS-1, NBS-2, NBS-3) covering deposit and prudential norms.", "icon": "FileText"},
            {"title": "ALM Returns", "desc": "Asset Liability Management returns for dynamic liquidity tracking.", "icon": "BarChart"},
            {"title": "AOC-4 & MGT-7", "desc": "Standard ROC annual return filings for all registered companies.", "icon": "FileCheck"}
        ],
        "benefits": [
            {"title": "RBI Compliance", "desc": "Stay perfectly aligned with Reserve Bank of India mandates.", "icon": "BadgeCheck"},
            {"title": "Fraud Prevention", "desc": "Recognize and check fraud activities during the lending process.", "icon": "ShieldCheck"},
            {"title": "Credit Trust", "desc": "Ensure your customers and operations remain trustworthy and compliant.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Monthly Returns", "Quarterly NBS Filings", "Half-Yearly ALM", "Statutory Audit", "Annual ROC Filings"],
        "faqs": [
            {"q": "What is CERSAI?", "a": "CERSAI stands for Central Registry of Securitization and Asset Reconstruction, used to check fraud during lending."},
            {"q": "Are NBFCs required to file standard ROC returns?", "a": "Yes, Form AOC-4 NBFC and MGT-7 must be filed within 30 days and 60 days of the AGM respectively."}
        ]
    },
    "WindingPrivateLimitedCompany": {
        "title": "Winding Up Private Limited Company",
        "intro_title": "Official Company Closure",
        "intro_p1": "A private limited company necessitates to be closed, or windup, meanwhile there are no changes or the Directors of the company are not willing to continue its services. Winding up involves bargaining all the assets, paying off the bankers and administering the remaining assets.",
        "intro_p2": "The Ministry of Corporate Affairs has notified rules 2020 for winding up small businesses without having to go to a tribunal, under a provision in the Companies Act that offers an alternative to the commonly used liquidation procedure.",
        "features": [
            {"title": "Ordinary Resolution", "desc": "Filing an ordinary resolution in the Board of Directors conference.", "icon": "FileSignature"},
            {"title": "No Debt Declaration", "desc": "Constitution by members stating there is no pending debt on the company.", "icon": "ShieldCheck"},
            {"title": "Official Liquidator", "desc": "Appointment of an Official Liquidator approved by the central government.", "icon": "UserCheck"},
            {"title": "Sale of Assets", "desc": "Disposing of assets to discharge collected funds into the public account.", "icon": "Wallet"},
            {"title": "Creditor Returns", "desc": "Calling upon creditors to determine and settle their claims.", "icon": "Users"},
            {"title": "WIN Forms Filing", "desc": "Filing extensive WIN series forms from WIN-1 to WIN-95 as required.", "icon": "FileText"}
        ],
        "benefits": [
            {"title": "Release from Debts", "desc": "Administrators and leaders are freed from lender accounts and pressure.", "icon": "BadgeCheck"},
            {"title": "Halt Legal Actions", "desc": "Withdrawing legal action upon the company during the liquidation method.", "icon": "ShieldAlert"},
            {"title": "Cancel Agreements", "desc": "Eliminates all terms and conditions of existing lease contracts.", "icon": "XOctagon"},
            {"title": "Protection for Creditors", "desc": "Creditors benefit from a structured statement of credits.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Board Resolution", "Liquidator Appointment", "Asset Sale", "Creditor Settlement", "Final Dissolution"],
        "faqs": [
            {"q": "What is the summary procedure for liquidation?", "a": "It allows companies with assets under Rs 1 crore to wind up through the Central Government rather than the Tribunal."},
            {"q": "What happens to leases when a company is wound up?", "a": "If the company has entered into a lease, the liquidation process will legally eliminate all terms and conditions of the contract."}
        ]
    },
    "ClosureOfLLP": {
        "title": "Closure of LLP",
        "intro_title": "Strike Off Defunct LLPs",
        "intro_p1": "The Ministry of Corporate Affairs launched LLP Form 24 via an alteration in the Limited Liability Partnership Rules. The LLP which is not leading on any business plan since incorporation or terminates carrying on the profession for one year can apply to ROC to strike off the name.",
        "intro_p2": "The failure penalty for LLPs defaulting in any sanctioned filing return is Rs.100 per day. Therefore, it is the most desirable option to windup dormant LLPs to avoid needless penalty.",
        "features": [
            {"title": "LLP Form 24", "desc": "Filing the official form to remove the name of the LLP.", "icon": "FileText"},
            {"title": "Cease Commercial Activity", "desc": "The LLP must originally cease all business ventures before applying.", "icon": "XOctagon"},
            {"title": "Close Bank Accounts", "desc": "Evidencing cessation letter of the closed bank account from the bank.", "icon": "Building"},
            {"title": "Indemnity Bonds", "desc": "Partners must perform a statement of fact and Indemnity Bond.", "icon": "ShieldCheck"},
            {"title": "CA Certificate", "desc": "Account statement revealing zero assets/liabilities approved by a CA.", "icon": "BadgeCheck"},
            {"title": "Clear Pending Returns", "desc": "Ensure Form 8 and Form 11 are filed up to the cessation date.", "icon": "FileSignature"}
        ],
        "benefits": [
            {"title": "Avoid Huge Penalties", "desc": "Stop the endless Rs.100 per day penalty for non-filing of dormant LLP returns.", "icon": "ShieldAlert"},
            {"title": "Legal Closure", "desc": "Formally strike off the LLP name from the MCA register.", "icon": "BadgeCheck"},
            {"title": "Clean Slate", "desc": "Free the partners from ongoing statutory obligations.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Cease Business", "Close Bank Accounts", "Draft Declarations & Bonds", "Obtain CA Certificate", "File Form 24"],
        "faqs": [
            {"q": "Who is eligible to file for closure?", "a": "An LLP not carrying on business for one year or longer, with no liabilities or open bank accounts."},
            {"q": "Do I need to file pending returns before closing?", "a": "Yes, any delayed return in Form 8 and Form 11 up to the financial year of cessation must be filed."}
        ]
    },
    "RevivalOfStruckOffCompanies": {
        "title": "Revival of Struck Off Companies",
        "intro_title": "Restore Your Struck Off Company",
        "intro_p1": "Following the provisions of Section 248(1) of the Companies Act, 2013, the Registrar of Companies struck off many Companies for non-filing of MGT-7 and AOC-4 during preceding two financial years.",
        "intro_p2": "Strike off means temporary closure of Companies. However, the Company can get revived for a period of ‘twenty years’ from the date of strike off by appealing to the National Company Law Tribunal (NCLT).",
        "features": [
            {"title": "NCLT Appeal (Section 252)", "desc": "Appeal to the National Company Law Tribunal within 3 or 20 years.", "icon": "Landmark"},
            {"title": "Form NCLT-9", "desc": "Filing the petition format along with a demand draft of Rs. 1000.", "icon": "FileSignature"},
            {"title": "ROC Submission", "desc": "Serving a copy of the petition to the Registrar of Companies 14 days before hearing.", "icon": "FileText"},
            {"title": "Tribunal Hearing", "desc": "The Tribunal hears both parties and issues the revival order.", "icon": "Users"},
            {"title": "Gazette Publication", "desc": "ROC publishes the final restoration order in the Official Gazette.", "icon": "Globe"},
            {"title": "Form INC-28", "desc": "Filing the Tribunal's order copy with the ROC within 30 days.", "icon": "CheckCircle"}
        ],
        "benefits": [
            {"title": "Recover Assets", "desc": "Regain legal access to the company's frozen bank accounts and assets.", "icon": "Wallet"},
            {"title": "Discharge Liabilities", "desc": "Enforce the company to legally discharge its obligations to creditors.", "icon": "ShieldCheck"},
            {"title": "Remove Disqualifications", "desc": "Protect directors from a 5-year disqualification due to non-compliance.", "icon": "ShieldAlert"}
        ],
        "timeline": ["Draft NCLT-9 Petition", "Serve Copy to ROC", "Tribunal Hearing", "Receive Order", "File INC-28 & Pending Returns"],
        "faqs": [
            {"q": "What is the time limit to file an appeal?", "a": "An appeal must be filed within 3 years for compulsory strike-off, and within 20 years for voluntary strike-off."},
            {"q": "What documents prove the company was in operation?", "a": "Up-to-date bank statements, AGM minutes, tax acknowledgments, and sales invoices."}
        ]
    },
    "OtherEventBasedCompliances": {
        "title": "Other Event-Based Compliances",
        "intro_title": "Dynamic ROC Compliances",
        "intro_p1": "Event-Based Compliances are mandatory compliances which are other than the usual annual compliances. These relate to any adventitious or unforeseen tasks, events, or new dimensions of a company.",
        "intro_p2": "Every change in any registered particulars associated with the company is to be reported appropriately to the relevant ROC and other regulatory authorities to stay legally comprehensive.",
        "features": [
            {"title": "Change in Registered Office", "desc": "Filing INC-22 within 15 days of the address change.", "icon": "Building"},
            {"title": "Change in Directors", "desc": "Filing DIR-12 within 30 days of appointment or resignation.", "icon": "Users"},
            {"title": "Increase Share Capital", "desc": "Filing SH-7 within 30 days of passing Ordinary Resolution.", "icon": "TrendingUp"},
            {"title": "Allotment of Shares", "desc": "Filing PAS-3 within 15 days of the allotment.", "icon": "PieChart"},
            {"title": "Charge Modification", "desc": "Filing CHG-1 for creation or satisfaction of charges within 30 days.", "icon": "Wallet"},
            {"title": "Resolutions & Agreements", "desc": "Filing MGT-14 within 30 days of passing the resolution.", "icon": "FileText"}
        ],
        "benefits": [
            {"title": "Legal Protection", "desc": "Ensures activities do not deviate from rules given in MOA and AOA.", "icon": "ShieldCheck"},
            {"title": "Accurate Records", "desc": "Maintains correct disclosure of information to all concerned parties.", "icon": "BadgeCheck"},
            {"title": "Penalty Avoidance", "desc": "Filing exact forms within their strict 15/30 day limits prevents massive fines.", "icon": "ShieldAlert"}
        ],
        "timeline": ["Triggering Event Occurs", "Pass Board/General Resolution", "Prepare Respective Form", "Filing within 15-30 Days", "ROC Approval"],
        "faqs": [
            {"q": "What is an event-based compliance?", "a": "It is a non-periodical filing triggered by specific company events like changing directors, address, or share capital."},
            {"q": "When is form DIR-12 filed?", "a": "DIR-12 must be filed within 30 days of any change (appointment/resignation) in Directors or Key Managerial Personnel."}
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
