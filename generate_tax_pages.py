import os
import shutil

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "CorporateTaxAdvisory": {
        "title": "Corporate Tax Advisory / Compliance",
        "intro_title": "Optimizing Corporate Tax",
        "intro_p1": "We assist corporates to deal with the various challenges arising from a complex tax environment. We assist companies across a spectrum of matters relating to applicability of withholding tax, deductibility of any expenditure, availability of exemption or enhanced deduction or tax holiday on any particular source of income or expenditure or investment. We also undertake corporate tax compliances ranging from advance tax computations, preparation and filing of tax returns, assistance with documentation requirements to support the planning and positions adopted for corporate and withholding tax matters.",
        "intro_p2": "We assist companies in reducing their effective tax rates within the legal framework and providing them clear guidelines for implementation. We keep track of decisions of Tribunals and Courts and use such learning into our planning, advisory and compliance services. We also frequently update our clients on any change in the tax regulations or on receipt of any particular judicial decision which could have an impact on the client or the industry.",
        "features": [
            {"title": "Withholding Tax Advisory", "desc": "Expert guidance on the applicability of withholding tax across different transactions.", "icon": "Building"},
            {"title": "Exemptions & Tax Holidays", "desc": "Availability of exemptions, enhanced deductions, or tax holidays on specific sources of income.", "icon": "Briefcase"},
            {"title": "Advance Tax Computations", "desc": "Accurate advance tax computations to ensure complete compliance and avoid penalties.", "icon": "FileText"},
            {"title": "Tax Return Filing", "desc": "End-to-end preparation and filing of corporate tax returns.", "icon": "CheckCircle"},
            {"title": "Documentation Support", "desc": "Comprehensive documentation requirements to support adopted tax positions.", "icon": "FileSignature"},
            {"title": "Industry Tax Updates", "desc": "Frequent updates on changing tax regulations and judicial decisions impacting your industry.", "icon": "TrendingUp"}
        ],
        "benefits": [
            {"title": "Reduced Effective Tax Burden", "desc": "Strategic planning to legally minimize your corporate tax liability.", "icon": "CheckCircle"},
            {"title": "Full Regulatory Compliance", "desc": "Stay 100% compliant with changing Indian corporate tax laws.", "icon": "ShieldCheck"},
            {"title": "Expert Planning", "desc": "Insights based on the latest Tribunal and Court decisions.", "icon": "BadgeCheck"},
            {"title": "Proactive Updates", "desc": "Immediate notifications on judicial decisions that impact your business.", "icon": "Zap"}
        ],
        "timeline": ["Consultation", "Assessment", "Planning", "Compliance", "Ongoing Advisory"],
        "faqs": [
            {"q": "What corporate tax compliance services do you provide?", "a": "We handle advance tax computations, preparation and filing of tax returns, and provide assistance with documentation to support corporate and withholding tax positions."},
            {"q": "Can you help reduce our company's effective tax rate?", "a": "Yes, we assist companies in reducing their effective tax rates within the legal framework and provide clear guidelines for implementation."},
            {"q": "Do you provide updates on new tax regulations?", "a": "Absolutely. We frequently update our clients on any changes in tax regulations or new judicial decisions that could impact their industry."},
            {"q": "Do you handle withholding tax applicability matters?", "a": "Yes, we advise on the applicability of withholding tax, deductibility of expenditure, and availability of exemptions or tax holidays."},
            {"q": "How do you incorporate Court decisions into your advisory?", "a": "We keep track of decisions from Tribunals and Courts and proactively integrate such learnings into our tax planning, advisory, and compliance services."},
            {"q": "Are your tax strategies legally sound?", "a": "Yes, all our tax planning opportunities and advisory services are strictly within the legal framework of the law."}
        ]
    },
    "InternationalTaxAdvisory": {
        "title": "International Tax Advisory / Compliance",
        "intro_title": "Navigating Global Taxation",
        "intro_p1": "Introduction of international concepts, bringing frequent amendments in the legislation in relation to international transactions with increase in number of tax treaties signed by India with other countries have added significant uncertainties and responsibility on the CFOs and tax heads. As advisors, we help clients in meeting these new challenges and advise them on the appropriate course of action.",
        "intro_p2": "More specifically, we provide advice on withholding tax matters, determining the existence of permanent establishment (‘PE’) in India for a non-resident, advising on mitigating the PE exposure, advise on foreign tax credits, filing returns for non-residents and providing tax planning opportunities in relation to any international transaction which are within the legal framework of the law. We also advise clients on any inbound/ outbound investment into/ outside India and help them to choose the right jurisdiction with the right funding option such that the investor yields a higher return.",
        "features": [
            {"title": "Withholding Tax Advice", "desc": "Guidance on cross-border withholding tax and DTAA applicability.", "icon": "Globe"},
            {"title": "PE Exposure Mitigation", "desc": "Determining the existence of a Permanent Establishment (PE) in India and mitigating exposure.", "icon": "ShieldCheck"},
            {"title": "Foreign Tax Credits", "desc": "Advising on the availability and claiming of foreign tax credits.", "icon": "FileText"},
            {"title": "Non-Resident Returns", "desc": "Assistance in filing tax returns for non-residents and foreign companies.", "icon": "Building"},
            {"title": "Inbound / Outbound Investment", "desc": "Advising on cross-border investments and selecting optimal jurisdictions.", "icon": "TrendingUp"},
            {"title": "Funding Options", "desc": "Helping choose the right funding option for foreign investors to yield a higher return.", "icon": "Wallet"}
        ],
        "benefits": [
            {"title": "Cross-border Compliance", "desc": "Stay compliant with international tax treaties and complex Indian tax laws.", "icon": "Globe"},
            {"title": "Risk Mitigation", "desc": "Minimize risks associated with Permanent Establishment (PE) and withholding taxes.", "icon": "ShieldCheck"},
            {"title": "Strategic Structuring", "desc": "Innovative solutions for international transactions that meet client requirements.", "icon": "BadgeCheck"},
            {"title": "Optimal Jurisdiction", "desc": "Guidance on choosing the most favorable jurisdictions for your investments.", "icon": "TrendingUp"}
        ],
        "timeline": ["Requirement Analysis", "Jurisdictional Strategy", "Tax Planning", "Documentation", "Execution & Compliance"],
        "faqs": [
            {"q": "What is a Permanent Establishment (PE) and why does it matter?", "a": "A PE is a fixed place of business that gives rise to tax liability in another jurisdiction. We help determine if a PE exists for non-residents in India and advise on mitigating exposure."},
            {"q": "Do you provide advice on foreign tax credits?", "a": "Yes, we advise clients on how to legally claim foreign tax credits in compliance with relevant tax treaties."},
            {"q": "Can you assist non-residents with their Indian tax returns?", "a": "Absolutely. We specialize in preparing and filing income tax returns for non-residents operating or investing in India."},
            {"q": "How do you assist with inbound and outbound investments?", "a": "We advise clients on selecting the right jurisdiction and funding option for cross-border investments to maximize returns and ensure compliance."},
            {"q": "Do you offer solutions for complex international transactions?", "a": "Yes, our main focus is on researching and developing innovative tax solutions for international transactions tailored to client requirements."},
            {"q": "Are your international tax strategies legally compliant?", "a": "Yes, all our international tax planning and structuring advice is provided strictly within the legal framework of the law and applicable tax treaties."}
        ]
    },
    "TransferPricingStudy": {
        "title": "Transfer Pricing Study / Documentation",
        "intro_title": "Arm's Length Accuracy",
        "intro_p1": "The Indian transfer pricing regulations requires the pricing of any international transactions between related parties to be at arm’s length and needs to be justified using the prescribed methods. Transfer pricing requires a strong understanding of the facts of the company as well as the industry in order to determine the appropriate arms’ length price.",
        "intro_p2": "Since these are fact driven, there are generally disputed by the tax authorities at lower level if the same are not adequately captured in the documentation. Transfer pricing is one of the most challenging tax issues in India and across the world and has a key influence on a company’s worldwide tax burden. Further, with action plans and amendment in the local laws and treaty to address the Base Erosion and Profit Shifting (BEPS) and General Anti Avoidance Provisions, maintaining of robust documentation & have the substance in place becomes very crucial for the corporate to defend its arm’s length test. We assist clients in determining the arm’s length price, maintaining documentation to support the price adopted by the company before the tax authorities, providing planning opportunities at a group level. We also help clients in determining the right supply chain model or business model to optimize the effective tax rate at the Group level.",
        "features": [
            {"title": "Arm's Length Pricing", "desc": "Determining accurate arm's length prices using prescribed methods.", "icon": "CheckCircle"},
            {"title": "Robust Documentation", "desc": "Creating comprehensive transfer pricing documentation to defend your pricing.", "icon": "FileText"},
            {"title": "BEPS Compliance", "desc": "Ensuring compliance with Base Erosion and Profit Shifting (BEPS) regulations.", "icon": "ShieldCheck"},
            {"title": "Supply Chain Optimization", "desc": "Determining the right supply chain model to optimize the effective tax rate.", "icon": "TrendingUp"},
            {"title": "Group Level Planning", "desc": "Providing strategic tax planning opportunities at a corporate group level.", "icon": "Building"},
            {"title": "Tax Authority Defense", "desc": "Supporting the price adopted by the company before tax authorities.", "icon": "Briefcase"}
        ],
        "benefits": [
            {"title": "Defend Against Tax Authorities", "desc": "Robust, fact-driven documentation that withstands lower-level tax scrutiny.", "icon": "ShieldCheck"},
            {"title": "Optimize Global Tax Rate", "desc": "Smart supply chain modeling to optimize your group's effective tax rate.", "icon": "TrendingUp"},
            {"title": "BEPS Defense", "desc": "Stay compliant with Base Erosion and Profit Shifting (BEPS) action plans.", "icon": "CheckCircle"},
            {"title": "Industry Specific Insight", "desc": "Arm's length analysis tailored to the specific facts of your industry.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Initial Assessment", "Economic Analysis", "Arm's Length Pricing", "Documentation & Reporting", "Ongoing Support"],
        "faqs": [
            {"q": "What is an arm's length price?", "a": "An arm's length price is the price that would be paid for a transaction between unrelated parties. Indian transfer pricing regulations require international transactions between related parties to be justified at this price."},
            {"q": "Why is transfer pricing documentation so important?", "a": "Transfer pricing is highly fact-driven and often disputed by tax authorities. Robust documentation is crucial to defend the arm's length price adopted by your company."},
            {"q": "How do you help with BEPS compliance?", "a": "We ensure your company maintains the necessary robust documentation and 'substance' to address amendments related to Base Erosion and Profit Shifting (BEPS) and General Anti Avoidance Provisions."},
            {"q": "Can you assist with group-level tax optimization?", "a": "Yes, we help clients determine the right supply chain or business model to optimize the effective tax rate at the Group level."},
            {"q": "Do you support companies during tax authority audits?", "a": "Absolutely. We maintain documentation and provide support to defend the adopted arm's length price before tax authorities."},
            {"q": "How do you determine the appropriate arm's length price?", "a": "We develop a strong understanding of your company's facts and industry dynamics to apply the prescribed methods and determine the correct price."}
        ]
    },
    "LitigationRepresentation": {
        "title": "Litigation / Representation Assistance",
        "intro_title": "Expert Tax Representation",
        "intro_p1": "We represent clients at all stages from assessments proceedings to appellate proceedings (as well as Authority for Advance Rulings) to resolve tax disputes (including transfer pricing disputes). With respect to representation before High Court and Supreme Court, we have also liaised with the counsel for arguing the matter before the said Court.",
        "intro_p2": "We also assist clients in preparing legal and factual submissions to be made before the tax authorities/ appellate authorities in order to support their claim in the assessment/ litigation process.",
        "features": [
            {"title": "Assessment Proceedings", "desc": "Representation during initial tax assessments and scrutiny.", "icon": "Briefcase"},
            {"title": "Appellate Proceedings", "desc": "Filing appeals and representing clients before appellate authorities and AAR.", "icon": "FileSignature"},
            {"title": "High/Supreme Court Liaison", "desc": "Liaising with specialized counsel for arguing matters in higher courts.", "icon": "Landmark"},
            {"title": "Factual Submissions", "desc": "Drafting precise legal and factual submissions to support your tax claims.", "icon": "FileText"},
            {"title": "Transfer Pricing Disputes", "desc": "Specialized assistance in resolving complex transfer pricing disputes.", "icon": "TrendingUp"},
            {"title": "End-to-End Support", "desc": "Comprehensive support throughout the entire tax litigation process.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Expert Representation", "desc": "Professional representation across all stages of tax proceedings.", "icon": "BadgeCheck"},
            {"title": "Fact-Driven Defense", "desc": "Meticulously prepared submissions to robustly defend your claims.", "icon": "ShieldCheck"},
            {"title": "Seamless Counsel Liaison", "desc": "Smooth coordination with senior counsel for High Court and Supreme Court matters.", "icon": "HeartHandshake"},
            {"title": "Dispute Resolution", "desc": "Focused approach to resolving disputes efficiently.", "icon": "CheckCircle"}
        ],
        "timeline": ["Dispute Analysis", "Preparation of Submissions", "Authority Representation", "Appellate Representation", "Case Resolution"],
        "faqs": [
            {"q": "What stages of tax litigation do you handle?", "a": "We represent clients at all stages, from assessment proceedings to appellate proceedings, including the Authority for Advance Rulings."},
            {"q": "Do you represent clients in Transfer Pricing disputes?", "a": "Yes, our litigation assistance includes specialized representation for resolving complex transfer pricing disputes."},
            {"q": "Do you argue cases before the High Court and Supreme Court?", "a": "For matters before the High Court and Supreme Court, we assist in preparing the case and liaise closely with specialized counsel who argue the matter."},
            {"q": "How do you help with tax authority submissions?", "a": "We assist in preparing robust legal and factual submissions to be presented before tax or appellate authorities to support your claims."},
            {"q": "What is the Authority for Advance Rulings (AAR)?", "a": "The AAR provides binding rulings on the tax liability of non-residents and certain residents, helping to avoid prolonged litigation. We represent clients before this authority."},
            {"q": "Can you assist with an ongoing tax scrutiny assessment?", "a": "Yes, we step in to provide expert representation and factual submissions during ongoing assessment proceedings."}
        ]
    },
    "PersonalTaxAdvisory": {
        "title": "Personal Tax Advisory",
        "intro_title": "Tailored Personal Taxation",
        "intro_p1": "We assist clients in providing the following personnel tax services in relation to expatriates, non-residents and high net-worth individuals (HNIs):",
        "intro_p2": "Our specialized services include the review of tax computation and preparation of tax returns, identifying tax planning opportunities with respect to salary payments, and review of documentation to ensure that the position adopted by the clients are appropriate. We also provide assistance in filing of quarterly withholding tax returns in relation to salary payments, issuance of Form 16 to expats, and representation before the tax authorities in relation to these categories.",
        "features": [
            {"title": "Tax Computation & Returns", "desc": "Review of tax computation and preparation of complex personal tax returns.", "icon": "FileText"},
            {"title": "Salary Tax Planning", "desc": "Identifying advanced tax planning opportunities with respect to salary payments.", "icon": "TrendingUp"},
            {"title": "Documentation Review", "desc": "Ensuring adopted tax positions are fully supported by appropriate documentation.", "icon": "ShieldCheck"},
            {"title": "Withholding Tax Returns", "desc": "Assistance in filing quarterly withholding tax returns related to salary payments.", "icon": "CheckCircle"},
            {"title": "Form 16 for Expats", "desc": "Assistance in the accurate issue of Form 16 to expatriate employees.", "icon": "Briefcase"},
            {"title": "Tax Authority Representation", "desc": "Professional representation before tax authorities for NRIs and HNIs.", "icon": "Landmark"}
        ],
        "benefits": [
            {"title": "Tailored for HNIs & Expats", "desc": "Specialized services designed for high net-worth individuals and non-residents.", "icon": "Globe"},
            {"title": "Maximum Tax Efficiency", "desc": "Strategic salary planning to optimize your personal tax liabilities.", "icon": "TrendingUp"},
            {"title": "Hassle-Free Filing", "desc": "Seamless preparation of returns and quarterly withholding requirements.", "icon": "CheckCircle"},
            {"title": "Audit Protection", "desc": "Thorough documentation reviews and representation to mitigate risks.", "icon": "ShieldCheck"}
        ],
        "timeline": ["Individual Assessment", "Salary Tax Planning", "Document Review", "Return Filing", "Representation"],
        "faqs": [
            {"q": "Who do your personal tax advisory services cater to?", "a": "We specialize in providing personal tax services for expatriates, non-residents (NRIs), and high net-worth individuals (HNIs)."},
            {"q": "Can you help optimize the tax on my salary payments?", "a": "Yes, we identify and implement tax planning opportunities with respect to salary payments to maximize your tax efficiency."},
            {"q": "Do you assist with filing tax returns?", "a": "Absolutely. We handle the review of tax computations and the end-to-end preparation of your personal tax returns."},
            {"q": "Can you help employers issue Form 16 to expatriates?", "a": "Yes, we provide specialized assistance in the issuance of Form 16 to expatriate employees."},
            {"q": "Do you handle withholding tax returns for salaries?", "a": "We assist in the accurate filing of quarterly withholding tax returns in relation to salary payments."},
            {"q": "Will you represent me before tax authorities if needed?", "a": "Yes, we offer assistance in representation before tax authorities for expats, non-residents, and HNIs regarding their tax matters."}
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
