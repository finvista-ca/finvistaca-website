import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "InternationalTaxation": {
        "title": "International Taxation",
        "intro_title": "Global Tax Planning & Compliance",
        "intro_p1": "International taxation governs the tax implications of cross-border transactions, foreign investments, overseas income, and international business operations. With increasing globalization, dealing with multiple tax jurisdictions makes it essential to comply with both Indian and international tax regulations.",
        "intro_p2": "Proper international tax planning helps avoid double taxation, minimizes tax risks, and ensures compliance with treaties. At Finvista, our experienced professionals help businesses and individuals navigate complex international tax regulations while maximizing tax efficiency.",
        "features": [
            {"title": "DTAA Advisory", "desc": "Expert guidance on Double Taxation Avoidance Agreements to prevent dual tax liabilities.", "icon": "Globe"},
            {"title": "Cross Border Tax Planning", "desc": "Strategic structuring of cross-border transactions for optimal tax efficiency.", "icon": "TrendingUp"},
            {"title": "Withholding Tax Advisory", "desc": "Assistance with TDS on foreign remittances and royalty payments.", "icon": "Wallet"},
            {"title": "FEMA Compliance", "desc": "Ensuring complete adherence to Foreign Exchange Management Act guidelines.", "icon": "ShieldCheck"},
            {"title": "Permanent Establishment", "desc": "Risk assessment and advisory on Permanent Establishment (PE) exposures in India.", "icon": "Building"},
            {"title": "Foreign Investment Structuring", "desc": "Structuring inbound and outbound investments for maximum regulatory compliance.", "icon": "Briefcase"}
        ],
        "benefits": [
            {"title": "Cross Border Compliance", "desc": "Ensure 100% adherence to international and domestic tax laws.", "icon": "ShieldCheck"},
            {"title": "Reduced Tax Risk", "desc": "Proactively identify and mitigate international tax risks and penalties.", "icon": "ShieldAlert"},
            {"title": "DTAA Benefits", "desc": "Leverage tax treaties to legally minimize overall tax liabilities.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Consultation", "Requirement Analysis", "Tax Planning", "Structuring", "Compliance Implementation", "Ongoing Advisory"],
        "faqs": [
            {"q": "What is DTAA?", "a": "DTAA (Double Taxation Avoidance Agreement) is a tax treaty between two countries that prevents the same income from being taxed twice."},
            {"q": "How is foreign income taxed in India?", "a": "Resident Indians are taxed on their global income, while Non-Residents are only taxed on income earned or accrued in India."},
            {"q": "What is Permanent Establishment (PE)?", "a": "A PE is a fixed place of business in India through which a foreign enterprise conducts its business, triggering Indian tax liabilities."},
            {"q": "Are there withholding taxes on foreign payments?", "a": "Yes, remittances made to non-residents (like royalties, technical fees, or interest) are subject to specific withholding tax rates."}
        ]
    },
    "NRITaxationServices": {
        "title": "NRI Taxation Services",
        "intro_title": "Tax Solutions for Non-Residents",
        "intro_p1": "Managing tax obligations as a Non-Resident Indian (NRI) can be complex due to varying residential status, foreign income, Indian-source income, capital gains, and Double Taxation Avoidance Agreements (DTAA).",
        "intro_p2": "Whether you earn rental income, sell property, receive investments, or maintain financial assets in India, proper tax planning is essential. Finvista offers specialized NRI Taxation Services to simplify compliance and optimize your tax liabilities both in India and abroad.",
        "features": [
            {"title": "Residential Status Check", "desc": "Accurate determination of your residential status under FEMA and Income Tax Act.", "icon": "UserCheck"},
            {"title": "NRI Income Tax Returns", "desc": "Filing of income tax returns for Indian-source income like rent, interest, or dividends.", "icon": "FileText"},
            {"title": "Capital Gains Computation", "desc": "Calculating tax on the sale of Indian real estate, mutual funds, or shares.", "icon": "TrendingUp"},
            {"title": "TDS Advisory", "desc": "Guidance on lower TDS deduction certificates for property sales.", "icon": "Wallet"},
            {"title": "Repatriation Advisory", "desc": "Assistance with remitting funds outside India, including Form 15CA/15CB.", "icon": "Globe"},
            {"title": "DTAA Benefits", "desc": "Claiming tax relief under applicable tax treaties between India and your country of residence.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Tax Optimization", "desc": "Legally minimize your tax liabilities on Indian investments and properties.", "icon": "TrendingDown"},
            {"title": "Regulatory Compliance", "desc": "Ensure strict adherence to complex FEMA and Indian Income Tax regulations.", "icon": "BadgeCheck"},
            {"title": "Smooth Repatriation", "desc": "Transfer funds abroad without regulatory hurdles or unnecessary tax leakages.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Status Determination", "Income Assessment", "DTAA Applicability", "Tax Computation", "Return Filing", "Repatriation Support"],
        "faqs": [
            {"q": "Do NRIs need to file tax returns in India?", "a": "Yes, if your income earned or accrued in India exceeds the basic exemption limit (Rs. 2.5 Lakhs)."},
            {"q": "Is foreign income taxable in India for NRIs?", "a": "No, if you qualify as an NRI, your income earned outside India is not taxable in India."},
            {"q": "What is the TDS rate on property sales by an NRI?", "a": "The buyer must deduct TDS at 20% (for long-term capital gains) or 30% (short-term) plus applicable surcharge and cess."},
            {"q": "Can I claim a refund for high TDS deducted on my property sale?", "a": "Yes, you can claim a refund by filing an income tax return if your actual tax liability is lower than the TDS deducted."}
        ]
    },
    "SetupBusinessInIndia": {
        "title": "Setup Business in India",
        "intro_title": "Foreign Direct Investment & Expansion",
        "intro_p1": "India has emerged as one of the world's fastest-growing economies, offering significant opportunities for foreign investors, multinational corporations, and entrepreneurs seeking rapid market expansion.",
        "intro_p2": "Establishing a business in India requires careful planning, entity selection, and compliance with FEMA, RBI, Companies Act, and Income Tax provisions. Finvista provides complete, seamless assistance for foreign entities setting up operations in India.",
        "features": [
            {"title": "Entity Selection", "desc": "Advising on the best structure: Subsidiary, Branch Office, or Liaison Office.", "icon": "Building"},
            {"title": "Company Incorporation", "desc": "End-to-end registration of the Indian entity with the Ministry of Corporate Affairs.", "icon": "CheckCircle"},
            {"title": "FDI & FEMA Compliance", "desc": "Ensuring foreign direct investments comply with RBI and FEMA guidelines.", "icon": "Globe"},
            {"title": "Tax Registrations", "desc": "Obtaining PAN, TAN, and GST registrations for the newly formed entity.", "icon": "FileText"},
            {"title": "RBI Approvals", "desc": "Assistance with mandatory RBI reporting (FC-GPR, FLA) for foreign capital infusion.", "icon": "Landmark"},
            {"title": "Ongoing Compliance", "desc": "Post-incorporation support for accounting, payroll, and statutory audits.", "icon": "Settings"}
        ],
        "benefits": [
            {"title": "Seamless Market Entry", "desc": "Establish your Indian operations quickly and without regulatory roadblocks.", "icon": "TrendingUp"},
            {"title": "100% Legal Compliance", "desc": "Ensure your foreign investment is fully compliant with complex RBI rules.", "icon": "ShieldCheck"},
            {"title": "Professional Representation", "desc": "Rely on expert Chartered Accountants to handle local authorities and filings.", "icon": "Users"}
        ],
        "timeline": ["Consultation & Strategy", "Name Approval", "Company Registration", "Bank Account Opening", "FDI Reporting (RBI)", "Ongoing Support"],
        "faqs": [
            {"q": "Can foreigners own a 100% subsidiary in India?", "a": "Yes, 100% Foreign Direct Investment (FDI) is allowed in most sectors under the automatic route without prior government approval."},
            {"q": "What is the difference between a Subsidiary and a Branch Office?", "a": "A Subsidiary is a separate legal Indian entity, while a Branch Office is simply an extension of the foreign parent company and has restricted activities."},
            {"q": "How long does incorporation take?", "a": "If all foreign documents are properly apostilled/notarized, incorporation usually takes 15-20 working days."},
            {"q": "Do foreign directors need to visit India for registration?", "a": "No, the entire incorporation process is online, though documents need to be notarized in the home country."}
        ]
    },
    "TaxClearanceCertificate": {
        "title": "Tax Clearance Certificate",
        "intro_title": "Form 15CA & 15CB Advisory",
        "intro_p1": "A Tax Clearance Certificate (TCC) certifies that an individual or business has fulfilled applicable tax obligations before remitting funds outside India or completing certain overseas financial transactions.",
        "intro_p2": "It plays an important role in ensuring compliance with Indian Income Tax regulations, particularly for NRIs, foreign companies, and entities making overseas remittances. Finvista provides complete certification and filing assistance to minimize compliance risks.",
        "features": [
            {"title": "Form 15CB Certification", "desc": "Professional certification by a Chartered Accountant validating the withholding tax rate.", "icon": "FileSignature"},
            {"title": "Form 15CA Filing", "desc": "Filing the mandatory declaration on the Income Tax portal for foreign remittances.", "icon": "FileText"},
            {"title": "Tax Clearance Advisory", "desc": "Guidance on the taxability of the remittance under domestic law and DTAA.", "icon": "Search"},
            {"title": "RBI Compliance", "desc": "Ensuring the overseas remittance adheres to FEMA and RBI guidelines.", "icon": "Landmark"},
            {"title": "NOC for Expatriates", "desc": "Assistance with obtaining No Objection Certificates for expats leaving India.", "icon": "UserCheck"},
            {"title": "DTAA Applicability", "desc": "Determining the correct lower tax rate applicable under tax treaties.", "icon": "Globe"}
        ],
        "benefits": [
            {"title": "Smooth Remittances", "desc": "Transfer funds abroad without bank rejections or regulatory holds.", "icon": "TrendingUp"},
            {"title": "Penalty Prevention", "desc": "Avoid heavy penalties for non-deduction of TDS on foreign payments.", "icon": "ShieldAlert"},
            {"title": "Accurate Tax Deduction", "desc": "Ensure you don't overpay taxes by correctly applying DTAA benefits.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Document Collection", "Taxability Analysis", "Form 15CB Issuance", "Form 15CA Filing", "Bank Submission", "Funds Remitted"],
        "faqs": [
            {"q": "Who needs a Tax Clearance Certificate?", "a": "NRIs selling property and remitting funds, foreign citizens leaving India, and companies remitting income abroad."},
            {"q": "What is Form 15CB?", "a": "Form 15CB is a certificate issued by a Chartered Accountant determining the rate and amount of TDS to be deducted on a foreign remittance."},
            {"q": "Is Form 15CB required for all foreign payments?", "a": "No, it is generally required if the remittance exceeds Rs. 5 Lakhs in a financial year and is taxable in India."},
            {"q": "What is Form 15CA?", "a": "Form 15CA is a declaration filed online by the remitter using the information certified in Form 15CB."}
        ]
    },
    "TaxationExpatriateEmployees": {
        "title": "Taxation of Expatriate Employees",
        "intro_title": "Global Mobility & Payroll Tax",
        "intro_p1": "The taxation of expatriate employees involves specialized tax planning and compliance for foreign nationals working in India as well as Indian employees deputed abroad. Factors such as residential status, DTAA, and social security impact tax liability.",
        "intro_p2": "Employers must also comply with payroll taxation, withholding tax obligations, and reporting requirements under Indian laws. Finvista provides comprehensive expatriate taxation services, helping both employers and employees manage international assignments efficiently.",
        "features": [
            {"title": "Salary Structuring", "desc": "Structuring expat compensation packages for maximum tax efficiency in India.", "icon": "TrendingUp"},
            {"title": "Tax Equalization", "desc": "Advisory on tax equalization policies for globally mobile employees.", "icon": "Settings"},
            {"title": "Payroll Compliance", "desc": "Assistance with calculating and deducting accurate TDS on expat payroll.", "icon": "Wallet"},
            {"title": "Social Security & PF", "desc": "Guidance on Indian Provident Fund applicability and Social Security Agreements (SSA).", "icon": "ShieldCheck"},
            {"title": "Return Filing", "desc": "Filing complex income tax returns declaring global income and foreign assets.", "icon": "FileText"},
            {"title": "Tax Clearance (NOC)", "desc": "Obtaining the mandatory tax clearance certificate before the expat departs India.", "icon": "CheckCircle"}
        ],
        "benefits": [
            {"title": "Employer Compliance", "desc": "Ensure the company meets all statutory withholding and reporting obligations.", "icon": "BadgeCheck"},
            {"title": "Avoid Double Taxation", "desc": "Leverage DTAAs to prevent the employee from being taxed in both countries.", "icon": "Globe"},
            {"title": "Employee Satisfaction", "desc": "Provide expats with a seamless, stress-free tax experience during their deputation.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Arrival Consultation", "Residential Status Check", "Payroll Structuring", "Monthly TDS Compliance", "Annual Return Filing", "Departure NOC"],
        "faqs": [
            {"q": "How is an expatriate's residential status determined?", "a": "It depends on the number of days they stay in India during the current financial year and the preceding four years."},
            {"q": "Is the global income of an expat taxable in India?", "a": "It depends. If the expat qualifies as a 'Resident and Ordinarily Resident' (ROR), their global income becomes taxable in India."},
            {"q": "Do expats need to contribute to Indian Provident Fund?", "a": "Yes, foreign workers are classified as 'International Workers' and must contribute to PF unless covered under a Social Security Agreement (SSA)."},
            {"q": "What happens when the expatriate leaves India?", "a": "They must obtain a Tax Clearance Certificate (NOC) from the Income Tax authorities before departing."}
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
