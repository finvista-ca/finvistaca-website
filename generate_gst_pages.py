import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "GSTAdvisoryAndComplianceService": {
        "title": "GST Advisory And Compliance Services",
        "intro_title": "Expert Guidance on GST",
        "intro_p1": "We assist clients in providing the following advisory services on GST: Advising on GST on matters relating outward supplies, input tax credit availability, valuation mechanism, time and place of supply, changes in tax rates etc. and its impact on the business operations. Giving opinions on tax issues.",
        "intro_p2": "We assist clients in providing the following compliance services on GST: Assistance in obtaining registrations under GST. Preparation / Review of GST Returns including refunds. Undertaking comprehensive Review of business operations to identify Opportunities and Compliance Gaps, if any. Review of the GST implementation done by the company. Preparation of annual reconciliation statements, i.e. returns with audited financial statements.",
        "features": [
            {"title": "GST Opinions", "desc": "Giving expert opinions on complex tax issues.", "icon": "FileSignature"},
            {"title": "Compliance Review", "desc": "Comprehensive review of business operations to identify gaps.", "icon": "CheckCircle"},
            {"title": "GST Implementation", "desc": "Detailed review of the GST implementation done by the company.", "icon": "Settings"},
            {"title": "Annual Reconciliation", "desc": "Preparation of annual reconciliation statements with audited financial statements.", "icon": "FileText"},
            {"title": "Input Tax Credit", "desc": "Advising on the availability of input tax credit.", "icon": "Wallet"},
            {"title": "Supply Mechanisms", "desc": "Valuation mechanism, time and place of supply guidance.", "icon": "Globe"}
        ],
        "benefits": [
            {"title": "Expert Guidance", "desc": "Stay informed on changes in tax rates and their impact on operations.", "icon": "ShieldCheck"},
            {"title": "Risk Mitigation", "desc": "Identify compliance gaps before they become costly penalties.", "icon": "ShieldAlert"},
            {"title": "End-to-End Support", "desc": "From registration assistance to refund processing.", "icon": "HeartHandshake"},
            {"title": "Seamless Reconciliation", "desc": "Ensure your GST returns perfectly match audited statements.", "icon": "FileCheck"}
        ],
        "timeline": ["Initial Consultation", "Operations Review", "Gap Analysis", "Implementation & Structuring", "Ongoing Compliance"],
        "faqs": [
            {"q": "What does your GST compliance service include?", "a": "Assistance in registration, review of GST returns including refunds, gap analysis, and annual reconciliation."},
            {"q": "Do you advise on Input Tax Credit availability?", "a": "Yes, we advise on matters relating to outward supplies, ITC availability, valuation mechanism, and time and place of supply."}
        ]
    },
    "GSTLitigationServices": {
        "title": "GST Litigation Services",
        "intro_title": "Robust Tax Defense",
        "intro_p1": "We assist clients in providing the following services with respect to GST litigation services: Drafting appeals, submissions and replies to notices. Representing before adjudication and appellate authorities up to the tribunal.",
        "intro_p2": "Briefing legal counsel for appearance before High Court & Supreme Court.",
        "features": [
            {"title": "Appeals & Submissions", "desc": "Drafting appeals, comprehensive submissions, and precise replies to notices.", "icon": "FileSignature"},
            {"title": "Appellate Representation", "desc": "Representing you before adjudication and appellate authorities up to the tribunal.", "icon": "Landmark"},
            {"title": "High Court & Supreme Court", "desc": "Briefing expert legal counsel for appearance before highest courts.", "icon": "Briefcase"}
        ],
        "benefits": [
            {"title": "Strong Defense", "desc": "Robustly drafted submissions and replies to tax notices.", "icon": "ShieldCheck"},
            {"title": "Expert Representation", "desc": "Professional representation across all levels of GST adjudication.", "icon": "Users"},
            {"title": "Counsel Coordination", "desc": "Seamless briefing of senior legal counsel for high stakes litigation.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Notice Review", "Factual Analysis", "Drafting Submissions", "Authority Representation", "Appellate Briefing"],
        "faqs": [
            {"q": "Do you represent clients before the GST tribunal?", "a": "Yes, we represent clients before adjudication and appellate authorities up to the tribunal."},
            {"q": "Can you help with notices received from GST officers?", "a": "Absolutely, we specialize in drafting appeals, submissions, and precise replies to GST notices."}
        ]
    },
    "GSTRegistration": {
        "title": "GST Registration",
        "intro_title": "Seamless Business Registration",
        "intro_p1": "GST is the product of the biggest tax reform in India which has tremendously improved ease of doing business and increasing the taxpayer base in India by including millions of small businesses. Tax complexities would be reduced due to the abolishing and subsuming of multiple taxes into a single, simple system.",
        "intro_p2": "The new GST regime mandates that all entities involved in buying or selling goods or providing services or both are required to register and obtain GSTIN. Registration is mandatory once the entity crosses a minimum threshold turnover or when an individual starts a new business that is expected to cross the prescribed turnover.",
        "features": [
            {"title": "Aggregate Turnover", "desc": "Service providers > 20 Lakhs. Exclusive goods supply > 40 Lakhs.", "icon": "BarChart"},
            {"title": "Inter-state Business", "desc": "Mandatory for inter-state supply of goods irrespective of turnover.", "icon": "Globe"},
            {"title": "E-commerce Platform", "desc": "Mandatory for individuals supplying through e-commerce platforms like Amazon/Flipkart.", "icon": "CreditCard"},
            {"title": "Casual Taxable Person", "desc": "For individuals undertaking supply seasonally or intermittently via stalls.", "icon": "Clock"},
            {"title": "Voluntary Registration", "desc": "Register voluntarily. Can be surrendered at any time if required.", "icon": "UserPlus"},
            {"title": "Composition Scheme", "desc": "For taxpayers with turnover < 1.5 Crore to pay a flat GST rate.", "icon": "TrendingUp"}
        ],
        "benefits": [
            {"title": "Legal Recognition", "desc": "Obtain your unique GSTIN and operate your business legally.", "icon": "BadgeCheck"},
            {"title": "Input Tax Credit", "desc": "Become eligible to claim input tax credit on business purchases.", "icon": "Wallet"},
            {"title": "Inter-state Trade", "desc": "Expand your business freely across different states in India.", "icon": "Globe"},
            {"title": "E-commerce Ready", "desc": "Sell seamlessly on major e-commerce platforms.", "icon": "CreditCard"}
        ],
        "timeline": ["Determine Eligibility", "Document Collection", "Filing Application", "Officer Verification", "GSTIN Issuance"],
        "faqs": [
            {"q": "What is the turnover limit for GST registration?", "a": "For services, it is Rs. 20 Lakhs (10 Lakhs for special category states). For exclusive goods supply, it is Rs. 40 Lakhs."},
            {"q": "Can I register voluntarily if my turnover is below the limit?", "a": "Yes, any entity can obtain GST registration voluntarily, and it can be surrendered at any time."}
        ]
    },
    "GSTReturns": {
        "title": "GST Returns",
        "intro_title": "Timely & Accurate Tax Returns",
        "intro_p1": "Persons or entities in India involved in the supply of goods or services must obtain GST registration when the threshold limit for registration is crossed... In addition to the turnover limit, GST registration is compulsory for all persons undertaking eCommerce sales.",
        "intro_p2": "Yes, all taxpayers having GST registration should file GST returns on the 10th, 15th and 20th of each month. Even if there was no business activity or transaction during a month, the taxpayer must still log in to the GST portal and file NIL GST return to avoid penalty.",
        "features": [
            {"title": "GSTR-3B (Monthly)", "desc": "Simplified summary return due on the 20th of each month. Nil return mandatory if no activity.", "icon": "FileCheck"},
            {"title": "GSTR-1 (Monthly)", "desc": "Monthly return of outward supplies due on the 11th for revenue > Rs.1.5 crores.", "icon": "TrendingUp"},
            {"title": "GSTR-1 (Quarterly)", "desc": "Quarterly return due on the 13th for revenue < Rs.1.5 crores.", "icon": "Clock"},
            {"title": "CMP-08 (Composition)", "desc": "Quarterly payment for composition scheme taxpayers due on the 18th.", "icon": "CreditCard"},
            {"title": "Nil Returns", "desc": "Filing mandatory NIL returns to avoid daily penalty fees.", "icon": "XOctagon"},
            {"title": "Penalty Avoidance", "desc": "Avoid late fees of Rs.50/day and 18% interest on late payments.", "icon": "ShieldAlert"}
        ],
        "benefits": [
            {"title": "100% Compliance", "desc": "Never miss a deadline with our systematic filing process.", "icon": "ShieldCheck"},
            {"title": "Zero Penalties", "desc": "Avoid late fees and 18% interest on late payments.", "icon": "BadgeCheck"},
            {"title": "Accurate ITC", "desc": "Reconcile outward supplies properly to ensure smooth ITC flow.", "icon": "Wallet"},
            {"title": "Hassle-free Filing", "desc": "We handle GSTR-1, GSTR-3B, and CMP-08 for you.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Data Collation", "Invoice Reconciliation", "Draft Return Preparation", "Client Approval", "Final Submission"],
        "faqs": [
            {"q": "Do I have to file a GST return if I had no sales?", "a": "Yes, a Nil GSTR-3B return must be filed even if there is no business activity to avoid penalties."},
            {"q": "What is the penalty for late filing?", "a": "Failure to file leads to a penalty of Rs.50 per day (Rs.20 for Nil returns), plus 18% interest on late tax payment."}
        ]
    },
    "GSTAnnualReturn": {
        "title": "GST Annual Return",
        "intro_title": "Year-End GST Compliance",
        "intro_p1": "All entities having GST registration are required to file GST annual returns... GST annual return filing is mandatory for all entities having GST registration, irrespective of business activity or sales or profitability during the return filing period. Hence, even a dormant business that obtained GST registration must file GST return.",
        "intro_p2": "Before filing GST annual return the taxpayer must have filed all GSTR-1 or GSTR-3B or GSTR-4 returns... In case there are overdue GST returns... the GST registration holder will not be allowed to file GST annual return.",
        "features": [
            {"title": "GSTR-9 Preparation", "desc": "Filing mandatory annual return for regular taxpayers.", "icon": "FileText"},
            {"title": "GSTR-9A Preparation", "desc": "Annual return for taxpayers opted for the GST Composition Scheme.", "icon": "FileCheck"},
            {"title": "GSTR-9C Reconciliation", "desc": "Filing reconciliation statement between Annual Return and Audited Financials.", "icon": "BarChart"},
            {"title": "GST Audit Support", "desc": "For taxpayers with aggregate turnover above Rs. 2 crores requiring CA certification.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Mandatory Compliance", "desc": "Meet the mandatory year-end filing requirement for all entities.", "icon": "BadgeCheck"},
            {"title": "Reconciliation Accuracy", "desc": "Ensure your GSTR-9 precisely matches your audited financial statements.", "icon": "TrendingUp"},
            {"title": "Audit Ready", "desc": "Seamless preparation of GSTR-9C by qualified professionals.", "icon": "Briefcase"}
        ],
        "timeline": ["Monthly Returns Verification", "Financial Statement Review", "Drafting GSTR-9", "GSTR-9C Reconciliation", "Final Filing"],
        "faqs": [
            {"q": "Is the GST Annual Return mandatory for dormant businesses?", "a": "Yes, GST annual return filing is mandatory irrespective of business activity, sales, or profitability."},
            {"q": "What is GSTR-9C?", "a": "Form GSTR-9C is a reconciliation statement between the Annual Return (GSTR-9) and the Audited Financial Statements, required for turnover above Rs. 2 crores."}
        ]
    },
    "GSTEWayBill": {
        "title": "GST E-Way Bill",
        "intro_title": "Seamless Goods Tracking",
        "intro_p1": "GST eWay Bill is a document for tracking of goods in transit introduced under the Goods and Services Tax. Under GST, a taxable person registered under GST transporting goods with a value of over Rs.50,000 is required to possess an eWay Bill generated from the GST Portal.",
        "intro_p2": "The LEDGERS eWay Bill tool is synced to GST invoices, bill of supply, purchase invoices and customer or supplier accounts. So you can now seamlessly at the click of a button generate eWay Bill and share with your customers or suppliers.",
        "features": [
            {"title": "Supply Generation", "desc": "Generate E-Way bill when supplying goods valued over Rs.50,000.", "icon": "Globe"},
            {"title": "Inter-godown Transfer", "desc": "Mandatory E-Way bill for transferring goods over Rs.50,000 between godowns.", "icon": "Building"},
            {"title": "Unregistered Purchases", "desc": "Generate bill when purchasing from unregistered persons.", "icon": "UserPlus"},
            {"title": "API Integration", "desc": "Seamless generation via LEDGERS tool synced to GST invoices.", "icon": "Zap"}
        ],
        "benefits": [
            {"title": "Transit Compliance", "desc": "Ensure smooth transit of goods without inspection delays.", "icon": "ShieldCheck"},
            {"title": "Automated Generation", "desc": "Generate bills at the click of a button synced to your invoices.", "icon": "Zap"},
            {"title": "Transporter Coordination", "desc": "Furnish Part A, allowing transporters to easily update Part B.", "icon": "Users"},
            {"title": "Clear Validity", "desc": "Track 1-day validity per 100km accurately to prevent lapses.", "icon": "Clock"}
        ],
        "timeline": ["Invoice Creation", "API Authentication", "Part A Generation", "Transporter Details", "E-Way Bill Issuance"],
        "faqs": [
            {"q": "When is a GST E-Way Bill required?", "a": "It is required when a taxable person causes the movement of goods with a consignment value exceeding Rs.50,000."},
            {"q": "What is the validity of an E-Way Bill?", "a": "Generally, the validity is 1 day for every 100 km (for other than Over Dimensional Cargo)."}
        ]
    },
    "LUTInGST": {
        "title": "LUT in GST",
        "intro_title": "Export Without IGST",
        "intro_p1": "LUT in GST: Full form/meaning is Letter of Undertaking. It is prescribed to be furnished in the form GST RFD 11 under rule 96 A, whereby the exporter declares that he or she will fulfill all the requirement that is prescribed under GST while exporting without making IGST payment.",
        "intro_p2": "GST LUT is to be submitted by all GST registered goods and service exporters. Here the motive of the government was to expand the export base by providing reliefs on exports... They intend to supply goods or services to India or overseas or SEZs.",
        "features": [
            {"title": "Export Without IGST", "desc": "Export goods or services without the upfront payment of integrated tax.", "icon": "Globe"},
            {"title": "Zero-Rated SEZ Supply", "desc": "Use LUT for zero-rated supply to Special Economic Zones (SEZ).", "icon": "Building"},
            {"title": "Form RFD-11 Filing", "desc": "Complete preparation and filing of Form GST RFD-11.", "icon": "FileSignature"},
            {"title": "Export Bonds", "desc": "Furnishing export bonds and bank guarantees for ineligible exporters.", "icon": "Briefcase"}
        ],
        "benefits": [
            {"title": "Working Capital Relief", "desc": "Avoid blocking working capital by exporting without IGST payment.", "icon": "Wallet"},
            {"title": "One-Year Validity", "desc": "File once and enjoy LUT privileges for the entire financial year.", "icon": "Clock"},
            {"title": "Running Bonds", "desc": "Use running bonds to avoid executing bonds for every single transaction.", "icon": "Zap"}
        ],
        "timeline": ["Eligibility Check", "Document Collation", "Form RFD-11 Preparation", "Department Verification", "LUT Acknowledgment"],
        "faqs": [
            {"q": "What does an LUT allow an exporter to do?", "a": "A Letter of Undertaking allows an exporter to supply goods or services overseas or to SEZs without paying IGST."},
            {"q": "Who is ineligible for filing an LUT?", "a": "Persons prosecuted for tax evasion exceeding Rs. 250 lakhs under CGST/IGST Acts are ineligible and must furnish an Export Bond instead."}
        ]
    },
    "GSTCancellation": {
        "title": "GST Cancellation",
        "intro_title": "Official GST Deregistration",
        "intro_p1": "GST registration can be canceled by the registered person or by the GST officer, or by the registered person's legal heirs in case of death of the person under GST. GST registration cancellation means that the person will not be registered under GST anymore, and he will not have to pay or collect GST.",
        "intro_p2": "If there is no business activity after obtaining GST registration, the taxpayer needs to initiate the GST cancellation as per the process laid out. If the taxpayer stops filing the GST returns and lets the GST registration be canceled, then he cannot obtain another GST registration under the same PAN.",
        "features": [
            {"title": "Voluntary Cancellation", "desc": "Applying for cancellation due to business closure, transfer, or turnover reduction.", "icon": "XOctagon"},
            {"title": "Form GST REG-16", "desc": "Filing the official cancellation application with reason and date.", "icon": "FileText"},
            {"title": "Final GST Payment", "desc": "Clearing all overdue GST liability and reversing ITC on existing stock.", "icon": "Wallet"},
            {"title": "GSTR-10 Final Return", "desc": "Filing the final return within 3 months of cancellation to ensure zero liabilities.", "icon": "CheckCircle"}
        ],
        "benefits": [
            {"title": "Avoid Penalties", "desc": "Cancel properly instead of abandoning to prevent heavy non-compliance penalties.", "icon": "ShieldAlert"},
            {"title": "Clean Slate", "desc": "Ensure you can re-register in the future under the same PAN if needed.", "icon": "BadgeCheck"},
            {"title": "Liability Resolution", "desc": "Accurately calculate and pay final liabilities without overpaying.", "icon": "TrendingUp"}
        ],
        "timeline": ["Clear Overdue Returns", "File REG-16", "Officer Verification", "Order of Cancellation", "File GSTR-10"],
        "faqs": [
            {"q": "Can an officer cancel my GST registration automatically?", "a": "Yes, if you do not conduct business from the declared place or fail to file returns for six months."},
            {"q": "What happens if I just stop filing returns instead of canceling?", "a": "Your registration will be canceled by the officer, but you will be liable for heavy penalties and blocked from obtaining another GST under the same PAN until late fees are paid."}
        ]
    },
    "GSTRegistrationForForeigners": {
        "title": "GST Registration for Foreigners",
        "intro_title": "Compliance for Non-Residents",
        "intro_p1": "GST registration for NRIs is a must if the Non-resident taxable person is making taxable supply in India... Under GST, a non-resident taxable person has to apply for GST registration if he undertakes transactions involving the supply of goods or services or both.",
        "intro_p2": "To apply for GST registration, foreign businesses or applicants must identify a person in India to act as its authorized representative for GST compliance and obtain PAN (optional)... The applicant must submit Form GST REG-09 to apply for GST registration in India.",
        "features": [
            {"title": "Form GST REG-09", "desc": "Filing the application electronically 5 days before business commencement.", "icon": "Globe"},
            {"title": "Authorized Representative", "desc": "Appointing and documenting an authorized signatory resident in India.", "icon": "Users"},
            {"title": "Tax Identification", "desc": "Submitting foreign Tax Identification Number or PAN if available.", "icon": "FileCheck"},
            {"title": "Advance Deposit", "desc": "Estimating and depositing the expected tax liability during the registration validity.", "icon": "Wallet"},
            {"title": "Final Registration", "desc": "Transitioning from provisional (REG-09) to final registration (REG-06).", "icon": "BadgeCheck"}
        ],
        "benefits": [
            {"title": "Indian Market Access", "desc": "Legally supply goods and services to the emerging Indian economic powerhouse.", "icon": "Globe"},
            {"title": "Full Compliance", "desc": "Strict adherence to the 5-day prior registration mandate.", "icon": "ShieldCheck"},
            {"title": "Simplified Process", "desc": "We handle the authorized representative documentation and PAN complexities.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Appoint Representative", "Estimate Tax & Deposit", "File REG-09", "Provisional Registration", "Final REG-06 Issuance"],
        "faqs": [
            {"q": "Does a foreign business need an Indian PAN for GST registration?", "a": "No, a Non-resident taxable person can submit their country's Tax Identification Number, though their authorized Indian representative must have a valid PAN."},
            {"q": "Is a deposit required for non-resident registration?", "a": "Yes, the non-resident must pay an advance deposit equal to the expected tax liability during the registration period."}
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
