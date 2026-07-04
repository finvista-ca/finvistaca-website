import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "FSSAIRegistration": {
        "title": "FSSAI Registration",
        "intro_title": "Food Safety & Standards Authority",
        "intro_p1": "FSSAI Registration is a mandatory license for every food business operator involved in the manufacturing, processing, packaging, storage, distribution, or sale of food products in India.",
        "intro_p2": "At Finvista, we assist businesses in obtaining Basic Registration, State License, and Central License based on their turnover, nature of business, and operational scale. Our experts manage the complete registration process, documentation, and compliance requirements.",
        "features": [
            {"title": "Basic Registration", "desc": "For small food businesses with an annual turnover of up to Rs. 12 lakhs.", "icon": "CheckCircle"},
            {"title": "State License", "desc": "For mid-sized businesses with a turnover between Rs. 12 lakhs and 20 crores.", "icon": "Building"},
            {"title": "Central License", "desc": "For large businesses with a turnover exceeding Rs. 20 crores or importing food.", "icon": "Globe"},
            {"title": "License Renewal", "desc": "Assistance with timely renewal before the expiration of your current license.", "icon": "Clock"},
            {"title": "License Modification", "desc": "Update your existing FSSAI license for new products or premises.", "icon": "Settings"},
            {"title": "Compliance Support", "desc": "Ongoing guidance to ensure you meet all food safety and standards.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Legal Compliance", "desc": "Avoid severe penalties by operating within the legal framework.", "icon": "BadgeCheck"},
            {"title": "Business Credibility", "desc": "Build immense trust among your consumers regarding food quality.", "icon": "HeartHandshake"},
            {"title": "Business Growth", "desc": "Easily expand into new outlets or register on food delivery platforms.", "icon": "TrendingUp"}
        ],
        "timeline": ["Consultation", "Document Collection", "Application Preparation", "Submission to FSSAI", "License Issued"],
        "faqs": [
            {"q": "Is FSSAI Registration mandatory?", "a": "Yes, it is mandatory for every food business operator, including restaurants, cloud kitchens, bakers, and grocery stores."},
            {"q": "Which license do I need?", "a": "The type of license (Basic, State, or Central) depends purely on your annual turnover and scale of operations."},
            {"q": "How long does registration take?", "a": "Basic registration usually takes 7-10 days, while State and Central licenses may take 30-60 days."},
            {"q": "What happens if I don't renew my FSSAI license?", "a": "Operating with an expired license can lead to heavy fines and closure of the business."},
            {"q": "Do I need a separate license for multiple outlets?", "a": "Yes, a separate license is required for each premise, and a Central License is needed for the head office."}
        ]
    },
    "ImportExportCode": {
        "title": "Import & Export Code (IEC)",
        "intro_title": "Global Trade Registration",
        "intro_p1": "The Import Export Code (IEC) is a mandatory business identification number issued by the Directorate General of Foreign Trade (DGFT) for businesses involved in importing or exporting goods and services from India.",
        "intro_p2": "Finvista provides end-to-end assistance in obtaining IEC registration for proprietorships, partnerships, LLPs, and companies. Our professionals guide clients through documentation, DGFT compliance, and digital authentication.",
        "features": [
            {"title": "DGFT Registration", "desc": "New IEC application filing with the Directorate General of Foreign Trade.", "icon": "Globe"},
            {"title": "IEC Amendment", "desc": "Modification of existing IEC details like address, directors, or bank accounts.", "icon": "Settings"},
            {"title": "Annual IEC Update", "desc": "Mandatory yearly update of your IEC to keep it active and valid.", "icon": "Clock"},
            {"title": "Export Compliance", "desc": "Comprehensive guidance on maintaining export-import legal compliance.", "icon": "ShieldCheck"},
            {"title": "Digital Authentication", "desc": "Assistance with DSC (Digital Signature Certificate) linking for DGFT portals.", "icon": "Lock"},
            {"title": "Post-Registration Support", "desc": "Ongoing advisory for smooth customs clearance and international trade.", "icon": "HeartHandshake"}
        ],
        "benefits": [
            {"title": "Global Expansion", "desc": "Legally engage in international trade and expand your market reach.", "icon": "Globe"},
            {"title": "Foreign Currency", "desc": "Receive foreign currency payments for exports smoothly without hurdles.", "icon": "Wallet"},
            {"title": "Lifetime Validity", "desc": "IEC has lifetime validity and requires no constant renewal, only annual updates.", "icon": "CheckCircle"}
        ],
        "timeline": ["Consultation", "Document Collection", "Digital Authentication", "DGFT Submission", "IEC Certificate Issued"],
        "faqs": [
            {"q": "Is IEC mandatory for all businesses?", "a": "It is mandatory only for businesses importing or exporting goods and services from India."},
            {"q": "Can IEC be modified?", "a": "Yes, modifications to address, partners, or bank details can be done through the DGFT portal."},
            {"q": "Is there a renewal process for IEC?", "a": "IEC does not require renewal, but it is mandatory to update your IEC profile annually between April and June."},
            {"q": "Do I need a GST registration to apply for an IEC?", "a": "No, PAN is the primary requirement, though having GST is highly recommended for commercial exports."},
            {"q": "How long does it take to get an IEC?", "a": "Once all documents are submitted correctly, the IEC is usually issued within 2 to 5 working days."}
        ]
    },
    "ISOCertification": {
        "title": "ISO Certification",
        "intro_title": "International Standards Compliance",
        "intro_p1": "ISO Certification demonstrates that an organization follows internationally recognized standards for quality management, operational efficiency, customer satisfaction, or occupational safety.",
        "intro_p2": "Achieving ISO certification enhances business credibility, strengthens customer confidence, and increases opportunities. Finvista assists businesses in obtaining various ISO certifications with complete support from gap assessment to certification.",
        "features": [
            {"title": "ISO 9001 (QMS)", "desc": "Quality Management System certification for consistent quality of products and services.", "icon": "CheckCircle"},
            {"title": "ISO 14001 (EMS)", "desc": "Environmental Management System certification for environmental responsibility.", "icon": "Leaf"},
            {"title": "ISO 27001 (ISMS)", "desc": "Information Security Management System for robust data security.", "icon": "Lock"},
            {"title": "ISO 45001 (OHSAS)", "desc": "Occupational Health and Safety management for secure workplaces.", "icon": "ShieldCheck"},
            {"title": "Gap Assessment", "desc": "Detailed analysis to identify areas needing improvement before certification.", "icon": "Search"},
            {"title": "Audit Assistance", "desc": "Complete coordination during the final certification audit.", "icon": "Users"}
        ],
        "benefits": [
            {"title": "Business Credibility", "desc": "Demonstrate global standards and build immense trust among clients.", "icon": "BadgeCheck"},
            {"title": "Operational Efficiency", "desc": "Improve internal processes and reduce wastage and operational costs.", "icon": "TrendingUp"},
            {"title": "Global Market Access", "desc": "Unlock new opportunities in domestic and international markets.", "icon": "Globe"}
        ],
        "timeline": ["Gap Assessment", "Documentation", "Implementation", "Internal Audit", "Final Certification Audit"],
        "faqs": [
            {"q": "Why do I need ISO Certification?", "a": "It proves that your business follows global standards, which is often a prerequisite for government tenders and international trade."},
            {"q": "How long is an ISO certificate valid?", "a": "An ISO certificate is typically valid for 3 years, subject to successful annual surveillance audits."},
            {"q": "Which ISO standard is best for my business?", "a": "ISO 9001 is universally applicable. Specific standards like 27001 or 14001 depend on your industry and requirements."},
            {"q": "What is the certification process?", "a": "It involves gap analysis, documentation, implementation, internal audit, and a final external audit by the certification body."},
            {"q": "Does Finvista provide implementation support?", "a": "Yes, we provide end-to-end guidance from documentation to final certification assistance."}
        ]
    },
    "RERARegistration": {
        "title": "RERA Registration",
        "intro_title": "Real Estate Compliance",
        "intro_p1": "The Real Estate (Regulation and Development) Act (RERA) was introduced to bring transparency, accountability, and efficiency to the real estate sector. Builders, developers, and agents are required to obtain RERA registration.",
        "intro_p2": "Finvista offers comprehensive RERA registration and compliance services for developers, housing projects, commercial projects, and real estate agents across India, ensuring complete compliance with RERA guidelines.",
        "features": [
            {"title": "Project Registration", "desc": "Mandatory registration of new real estate projects before marketing or selling.", "icon": "Building"},
            {"title": "Agent Registration", "desc": "Official RERA registration for real estate agents and brokers.", "icon": "Users"},
            {"title": "Document Preparation", "desc": "Drafting required affidavits, declarations, and legal project documents.", "icon": "FileText"},
            {"title": "Quarterly Updates", "desc": "Assistance with mandatory quarterly project status updates on the RERA portal.", "icon": "Clock"},
            {"title": "Annual Filings", "desc": "Filing annual audit reports and compliance certificates.", "icon": "FileCheck"},
            {"title": "Project Modification", "desc": "Legal support for modifying project plans or timelines with RERA approval.", "icon": "Settings"}
        ],
        "benefits": [
            {"title": "Buyer Confidence", "desc": "Enhance trust and transparency, giving buyers confidence to invest.", "icon": "HeartHandshake"},
            {"title": "Legal Compliance", "desc": "Minimize legal risks and avoid heavy penalties for non-registration.", "icon": "ShieldCheck"},
            {"title": "Better Funding", "desc": "RERA registered projects attract easier funding from banks and investors.", "icon": "TrendingUp"}
        ],
        "timeline": ["Project Assessment", "Document Collation", "Application Filing", "RERA Verification", "Certificate Issuance"],
        "faqs": [
            {"q": "Who needs RERA Registration?", "a": "Builders, developers, and real estate agents dealing with eligible commercial or residential projects."},
            {"q": "When should a project be registered?", "a": "A project must be registered before any advertisement, marketing, booking, or selling takes place."},
            {"q": "Are there ongoing compliances under RERA?", "a": "Yes, developers must provide quarterly updates on project progress and file annual audit reports."},
            {"q": "What happens if I don't register?", "a": "Non-registration can attract a penalty of up to 10% of the estimated project cost and imprisonment."},
            {"q": "Do real estate agents need RERA?", "a": "Yes, every real estate agent facilitating the sale of RERA registered projects must have an agent registration."}
        ]
    },
    "MSMEUdyamRegistration": {
        "title": "MSME Udyam Registration",
        "intro_title": "Micro, Small & Medium Enterprises",
        "intro_p1": "MSME Udyam Registration is a Government of India initiative that provides Micro, Small, and Medium Enterprises with official recognition and access to numerous financial and business benefits.",
        "intro_p2": "Finvista simplifies the entire Udyam Registration process for startups, manufacturers, service providers, and small businesses by assisting with eligibility assessment, Aadhaar authentication, and certificate generation.",
        "features": [
            {"title": "Eligibility Assessment", "desc": "Determine your classification as a Micro, Small, or Medium enterprise.", "icon": "BarChart"},
            {"title": "Aadhaar Authentication", "desc": "Seamless online registration using OTP-based Aadhaar verification.", "icon": "Lock"},
            {"title": "Certificate Generation", "desc": "Obtain the official Udyam Registration Certificate swiftly.", "icon": "FileCheck"},
            {"title": "Profile Updates", "desc": "Assistance with modifying details or updating investment/turnover figures.", "icon": "Settings"},
            {"title": "Advisory Services", "desc": "Guidance on leveraging various MSME schemes and subsidies.", "icon": "TrendingUp"},
            {"title": "Tender Support", "desc": "Assistance in participating in exclusive government tenders for MSMEs.", "icon": "Briefcase"}
        ],
        "benefits": [
            {"title": "Collateral-Free Loans", "desc": "Access priority sector lending and collateral-free bank loans easily.", "icon": "Wallet"},
            {"title": "Delayed Payment Protection", "desc": "Legal protection against delayed payments from buyers under MSME Samadhaan.", "icon": "ShieldCheck"},
            {"title": "Government Subsidies", "desc": "Eligibility for various tax incentives, trademark subsidies, and ISO reimbursement.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Eligibility Check", "Aadhaar Verification", "Data Entry", "Application Submission", "Udyam Certificate Issued"],
        "faqs": [
            {"q": "What are the benefits of Udyam Registration?", "a": "Benefits include collateral-free loans, protection against delayed payments, and priority in government tenders."},
            {"q": "Who is eligible for MSME registration?", "a": "Manufacturers, service providers, startups, and small businesses that fall under the specified investment and turnover criteria."},
            {"q": "Is a physical copy of the certificate provided?", "a": "No, the Udyam Certificate is generated entirely online and can be downloaded digitally."},
            {"q": "Do I need to renew my Udyam Registration?", "a": "No, it has lifetime validity, but investment and turnover details are updated automatically via Income Tax and GST portals."},
            {"q": "Is Aadhaar mandatory for registration?", "a": "Yes, Aadhaar of the proprietor, partner, or director is mandatory for OTP authentication."}
        ]
    },
    "StartupIndiaRegistration": {
        "title": "Startup India Registration",
        "intro_title": "DPIIT Recognition for Startups",
        "intro_p1": "Startup India Registration enables eligible startups to receive recognition from the Department for Promotion of Industry and Internal Trade (DPIIT), unlocking a wide range of government benefits, tax exemptions, and funding opportunities.",
        "intro_p2": "Finvista assists entrepreneurs in obtaining Startup India recognition by evaluating eligibility, preparing documentation, filing applications, and providing end-to-end advisory support for compliance and fundraising readiness.",
        "features": [
            {"title": "Eligibility Evaluation", "desc": "Checking if your business meets the innovative and scalable criteria for DPIIT.", "icon": "Search"},
            {"title": "Application Filing", "desc": "Drafting the pitch deck and filing the DPIIT recognition application.", "icon": "FileText"},
            {"title": "Tax Exemption Support", "desc": "Assistance in applying for Section 80IAC tax holidays.", "icon": "Wallet"},
            {"title": "IP Protection", "desc": "Guidance on fast-tracking trademark and patent applications with reduced fees.", "icon": "ShieldCheck"},
            {"title": "Fundraising Readiness", "desc": "Advisory on business structuring to attract angel investors and VCs.", "icon": "TrendingUp"},
            {"title": "Compliance Management", "desc": "Guidance on self-certification for labour and environmental laws.", "icon": "Settings"}
        ],
        "benefits": [
            {"title": "Tax Holidays", "desc": "Eligible startups can claim a 100% tax rebate on profit for 3 consecutive years.", "icon": "BadgeCheck"},
            {"title": "Easier Funding", "desc": "Access to government fund of funds, angel tax exemptions, and easier investments.", "icon": "Wallet"},
            {"title": "Public Procurement", "desc": "Easier access to government tenders with exemption from prior experience criteria.", "icon": "Briefcase"}
        ],
        "timeline": ["Pitch Deck Preparation", "Application Drafting", "DPIIT Submission", "Clarifications (If any)", "Recognition Granted"],
        "faqs": [
            {"q": "Who is eligible for Startup India?", "a": "Private Limited Companies, LLPs, and Registered Partnerships working towards innovation, development, or scalable business models."},
            {"q": "What are the tax benefits?", "a": "Recognized startups can apply for an income tax exemption for 3 consecutive years under Section 80IAC."},
            {"q": "Is the DPIIT recognition permanent?", "a": "An entity is considered a startup up to 10 years from the date of its incorporation."},
            {"q": "Can I get help with trademark registration?", "a": "Yes, recognized startups receive an 80% rebate on patent filings and a 50% rebate on trademark filings."},
            {"q": "Do I need to submit a business plan?", "a": "Yes, a brief note or pitch deck explaining the innovativeness and scalability of your product/service is required."}
        ]
    },
    "ShopActRegistration": {
        "title": "Shop & Establishment Registration",
        "intro_title": "State Commercial Compliance",
        "intro_p1": "Shop and Establishment Registration is a mandatory registration governed by respective State Acts, applicable to businesses operating commercial establishments, shops, offices, restaurants, and service providers.",
        "intro_p2": "This registration regulates working conditions, employee rights, business hours, and wages. At Finvista, we provide complete assistance in obtaining the registration, renewals, and amendments to ensure your business operates legally.",
        "features": [
            {"title": "New Registration", "desc": "Filing applications for new shops, offices, and commercial establishments.", "icon": "Building"},
            {"title": "License Renewal", "desc": "Assistance with periodic renewals as per specific state regulations.", "icon": "Clock"},
            {"title": "Amendments", "desc": "Updating details like change in address, employees, or business activity.", "icon": "Settings"},
            {"title": "Compliance Support", "desc": "Guidance on maintaining required registers for wages, holidays, and working hours.", "icon": "FileText"},
            {"title": "Legal Proof", "desc": "Obtaining the certificate that acts as a primary proof of business existence.", "icon": "CheckCircle"},
            {"title": "Closure Intimation", "desc": "Filing necessary forms for the cancellation or closure of the establishment.", "icon": "XOctagon"}
        ],
        "benefits": [
            {"title": "Legal Proof of Entity", "desc": "Serves as essential legal proof for opening bank accounts and obtaining other licenses.", "icon": "BadgeCheck"},
            {"title": "Avoid Penalties", "desc": "Strict compliance with state laws prevents heavy fines and sudden closure.", "icon": "ShieldAlert"},
            {"title": "Employee Trust", "desc": "Demonstrates commitment to employee welfare and statutory working conditions.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Document Collection", "Application Drafting", "State Portal Submission", "Inspector Verification", "Certificate Issued"],
        "faqs": [
            {"q": "Who needs a Shop Act License?", "a": "Any commercial establishment, shop, office, restaurant, or hotel operating within the municipal limits of a state."},
            {"q": "Is it required if I work from home?", "a": "If you are running a registered business or employing staff from a residential premise, it may be required depending on state rules."},
            {"q": "How long is the license valid?", "a": "Validity varies by state. Some issue it for a lifetime, while others require annual or 3-year renewals."},
            {"q": "Can I open a current bank account with this?", "a": "Yes, the Shop and Establishment certificate is widely accepted by banks as valid proof of business existence."},
            {"q": "When should I apply for the license?", "a": "Normally, you must apply within 30 days of commencing business operations."}
        ]
    },
    "ESIPFRegistration": {
        "title": "ESI & PF Registration",
        "intro_title": "Employee Social Security",
        "intro_p1": "Employee State Insurance (ESI) and Employees' Provident Fund (EPF) registrations are essential statutory compliances for businesses employing eligible workers in India, providing vital social security benefits.",
        "intro_p2": "Failure to comply can result in significant penalties. Finvista offers end-to-end assistance with ESI and EPF registration, employee onboarding, monthly return filing, and ongoing compliance to safeguard employee welfare.",
        "features": [
            {"title": "EPF Registration", "desc": "Mandatory registration for businesses with 20 or more employees.", "icon": "Users"},
            {"title": "ESI Registration", "desc": "Mandatory registration for businesses with 10 or more employees earning under Rs 21,000.", "icon": "ShieldCheck"},
            {"title": "Employee Onboarding", "desc": "Generating UAN and ESI Pehchan cards for new employees.", "icon": "CheckCircle"},
            {"title": "Monthly Return Filing", "desc": "Accurate calculation and filing of monthly EPF and ESI contributions.", "icon": "Calendar"},
            {"title": "Inspection Support", "desc": "Guidance and representation during labor department inspections.", "icon": "FileText"},
            {"title": "Compliance Management", "desc": "Continuous monitoring of changing labor laws and contribution rates.", "icon": "Settings"}
        ],
        "benefits": [
            {"title": "Social Security", "desc": "Provides employees with medical care, maternity benefits, and retirement savings.", "icon": "HeartHandshake"},
            {"title": "Legal Compliance", "desc": "Fulfill legal obligations efficiently while avoiding severe penalties and prosecution.", "icon": "BadgeCheck"},
            {"title": "Employee Retention", "desc": "Offering statutory benefits significantly improves employee satisfaction and retention.", "icon": "TrendingUp"}
        ],
        "timeline": ["Document Gathering", "Portal Registration", "Employer Code Generation", "Employee UAN Generation", "First Return Filing"],
        "faqs": [
            {"q": "When is PF Registration mandatory?", "a": "It is mandatory for businesses having 20 or more employees."},
            {"q": "When is ESI Registration mandatory?", "a": "It is mandatory for businesses with 10 or more employees, where employees earn up to Rs 21,000 per month."},
            {"q": "Can I register voluntarily if I have fewer employees?", "a": "Yes, businesses can opt for voluntary EPF and ESI registration to provide benefits to their employees."},
            {"q": "What happens if I delay monthly contributions?", "a": "Delayed payments attract penal damages and interest, and can lead to legal action by the department."},
            {"q": "Do you provide monthly compliance services?", "a": "Yes, we handle monthly challan generation, return filing, and employee KYC updates."}
        ]
    },
    "NGODarpan": {
        "title": "NGO Darpan Registration",
        "intro_title": "NITI Aayog Recognition",
        "intro_p1": "NGO Darpan Registration is an online registration system managed by NITI Aayog that enables NGOs, Trusts, and Societies to establish credibility and become eligible for various government grants and schemes.",
        "intro_p2": "Registration creates a unique identification number that is mandatory for receiving assistance from Central Government Ministries. Finvista assists NGOs throughout the registration process, profile creation, and compliance guidance.",
        "features": [
            {"title": "Profile Creation", "desc": "Setting up a comprehensive and accurate profile on the Darpan Portal.", "icon": "UserCheck"},
            {"title": "Document Verification", "desc": "Ensuring all trust deeds, society registrations, and PAN details are verified.", "icon": "FileCheck"},
            {"title": "Unique ID Generation", "desc": "Securing the mandatory Unique Identification Number for government grants.", "icon": "BadgeCheck"},
            {"title": "Compliance Guidance", "desc": "Advisory on maintaining transparency and good governance.", "icon": "ShieldCheck"},
            {"title": "Grant Application Support", "desc": "Assistance in navigating government schemes post-registration.", "icon": "TrendingUp"},
            {"title": "Update Management", "desc": "Regular updates of FCRA, board members, and operational sectors on the portal.", "icon": "Settings"}
        ],
        "benefits": [
            {"title": "Government Grants", "desc": "Become eligible to apply for schemes from various Central Government Ministries.", "icon": "Wallet"},
            {"title": "Enhanced Credibility", "desc": "Establishes immense trust and operational transparency in the public domain.", "icon": "HeartHandshake"},
            {"title": "FCRA Prerequisites", "desc": "Darpan ID is highly recommended and often required for FCRA registrations.", "icon": "Globe"}
        ],
        "timeline": ["Document Collation", "Portal Registration", "Data Entry", "Aadhaar Authentication", "Unique ID Generation"],
        "faqs": [
            {"q": "What is NGO Darpan?", "a": "It is a platform maintained by NITI Aayog that serves as a centralized database of NGOs in India."},
            {"q": "Who can register on NGO Darpan?", "a": "Registered Trusts, Societies, and Section 8 Companies operating as NGOs can register."},
            {"q": "Is it mandatory to register?", "a": "Yes, it is mandatory if the NGO intends to receive grants or funding from the Central Government or its ministries."},
            {"q": "What is required for registration?", "a": "PAN of the NGO, Registration Certificate, and PAN/Aadhaar details of at least three governing board members."},
            {"q": "Do I have to pay renewal fees?", "a": "No, NGO Darpan registration is a one-time process and does not require renewal, though profile updates are recommended."}
        ]
    },
    "TrustSocietyRegistration": {
        "title": "Trust & Society Registration",
        "intro_title": "Establish Your Charitable Organization",
        "intro_p1": "Trust and Society Registration provides legal recognition to organizations established for charitable, educational, religious, cultural, social, or public welfare purposes, enhancing credibility and facilitating fundraising.",
        "intro_p2": "Choosing the right legal structure depends on the objectives and governance model. Finvista offers comprehensive advisory and registration services, including drafting trust deeds, bye-laws, and post-registration compliance.",
        "features": [
            {"title": "Trust Registration", "desc": "Registration of Public Charitable Trusts under the Indian Trusts Act.", "icon": "Landmark"},
            {"title": "Society Registration", "desc": "Registration of Societies under the Societies Registration Act, 1860.", "icon": "Users"},
            {"title": "Drafting Deeds", "desc": "Professional drafting of Trust Deeds and Memorandum of Association.", "icon": "FileSignature"},
            {"title": "Bye-Laws Creation", "desc": "Structuring operational rules and governance bye-laws for societies.", "icon": "Settings"},
            {"title": "Tax Exemptions", "desc": "Guidance on subsequent 12A and 80G registrations for tax benefits.", "icon": "Wallet"},
            {"title": "Compliance Support", "desc": "Post-registration advisory to ensure smooth and transparent operations.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Legal Recognition", "desc": "Operate legally as a recognized entity capable of holding property and assets.", "icon": "BadgeCheck"},
            {"title": "Fundraising Ability", "desc": "Receive donations, grants, and government support securely.", "icon": "TrendingUp"},
            {"title": "Tax Exemptions", "desc": "Eligible to apply for income tax exemptions under Sections 12A and 80G.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Structure Advisory", "Drafting Deed/MOA", "Document Collation", "Sub-Registrar Submission", "Certificate Issuance"],
        "faqs": [
            {"q": "What is the difference between a Trust and a Society?", "a": "A Trust is usually formed by a smaller group with a specific property for charity, while a Society is a more democratic setup of members working for a common cause."},
            {"q": "How many members are needed?", "a": "A minimum of 2 trustees are needed for a Trust, and a minimum of 7 members are needed for a Society."},
            {"q": "Is the registration valid across India?", "a": "Trusts can operate across India. Societies usually operate state-wide unless registered as a National Level Society."},
            {"q": "Do Trusts need to pay income tax?", "a": "Trusts are taxable unless they apply and obtain a 12A registration from the Income Tax Department."},
            {"q": "Can family members be trustees?", "a": "Yes, but to obtain tax exemptions like 80G, it is highly recommended to have a majority of non-blood relative trustees."}
        ]
    },
    "NGORegistration": {
        "title": "NGO Registration",
        "intro_title": "Create Meaningful Social Impact",
        "intro_p1": "Non-Governmental Organizations (NGOs) play a vital role in addressing social, educational, environmental, and healthcare initiatives. Registering an NGO provides legal identity, operational transparency, and greater opportunities.",
        "intro_p2": "NGOs may be established as a Trust, Society, or Section 8 Company. Finvista assists individuals and institutions in selecting the most suitable structure and provides complete registration and advisory services.",
        "features": [
            {"title": "Structure Advisory", "desc": "Consultation to choose between Trust, Society, or Section 8 Company.", "icon": "Search"},
            {"title": "Complete Registration", "desc": "End-to-end handling of the chosen incorporation process.", "icon": "CheckCircle"},
            {"title": "12A & 80G Registration", "desc": "Assistance with obtaining crucial tax exemptions from the Income Tax department.", "icon": "Wallet"},
            {"title": "FCRA Advisory", "desc": "Guidance on foreign contribution regulations for international grants.", "icon": "Globe"},
            {"title": "NITI Aayog Darpan", "desc": "Registration on the Darpan portal for government funding eligibility.", "icon": "Landmark"},
            {"title": "Compliance Management", "desc": "Annual filings, audit coordination, and statutory maintenance.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Operational Transparency", "desc": "Establish a clear, legal framework that builds trust with donors and volunteers.", "icon": "BadgeCheck"},
            {"title": "Receive Donations", "desc": "Legally collect public donations and apply for corporate CSR funding.", "icon": "TrendingUp"},
            {"title": "Tax Benefits", "desc": "Allow your donors to claim tax deductions while exempting the NGO's income.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Consultation", "Name Approval", "Drafting MOA/Deed", "Registration Filing", "Post-Registration Approvals"],
        "faqs": [
            {"q": "Which structure should I choose?", "a": "Section 8 Companies offer the highest transparency, Trusts are easier to manage for small groups, and Societies are best for democratic operations."},
            {"q": "Can NGOs receive foreign donations?", "a": "Yes, but only after obtaining an FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs."},
            {"q": "Is an NGO exempt from taxes automatically?", "a": "No, an NGO must specifically apply for Section 12A registration to get its income exempted from tax."},
            {"q": "How long does it take to register an NGO?", "a": "A Trust takes about 10-15 days, a Section 8 Company takes 15-20 days, and a Society can take 30-45 days depending on the state."}
        ]
    },
    "CSRRegistrationNGOs": {
        "title": "CSR Registration for NGOs",
        "intro_title": "Corporate Social Responsibility",
        "intro_p1": "Corporate Social Responsibility (CSR) Registration enables eligible NGOs, Trusts, and Section 8 Companies to receive CSR funding from companies under the provisions of the Companies Act, 2013.",
        "intro_p2": "Organizations intending to undertake CSR activities must obtain registration with the MCA by filing Form CSR-1. Finvista provides complete assistance in eligibility assessment, documentation, and ongoing compliance advisory.",
        "features": [
            {"title": "Eligibility Assessment", "desc": "Reviewing your track record and documents to ensure MCA compliance.", "icon": "Search"},
            {"title": "Form CSR-1 Filing", "desc": "Accurate preparation and filing of the mandatory CSR-1 form with the MCA.", "icon": "FileText"},
            {"title": "CSR Registration Number", "desc": "Securing your unique CSR registration number for corporate tie-ups.", "icon": "BadgeCheck"},
            {"title": "Digital Signatures", "desc": "Assisting board members with required DSCs for online portal submission.", "icon": "Lock"},
            {"title": "Impact Assessment", "desc": "Guidance on preparing project reports and impact assessments for corporates.", "icon": "TrendingUp"},
            {"title": "Compliance Advisory", "desc": "Ensuring funds are utilized strictly according to CSR guidelines.", "icon": "ShieldCheck"}
        ],
        "benefits": [
            {"title": "Unlock Corporate Funds", "desc": "Become legally eligible to receive large-scale CSR funds from major corporations.", "icon": "Wallet"},
            {"title": "Trusted Partner", "desc": "Registration significantly improves your credibility as a trusted implementation agency.", "icon": "HeartHandshake"},
            {"title": "Social Impact", "desc": "Scale your charitable activities rapidly by collaborating on impactful development projects.", "icon": "Globe"}
        ],
        "timeline": ["Document Review", "DSC Generation", "Form CSR-1 Preparation", "CA/CS Certification", "MCA Submission & Approval"],
        "faqs": [
            {"q": "What is Form CSR-1?", "a": "It is a registration form filed with the MCA by NGOs to become eligible implementation agencies for corporate CSR activities."},
            {"q": "Who needs to file CSR-1?", "a": "Any Section 8 Company, Trust, or Society intending to undertake CSR activities on behalf of a corporate entity."},
            {"q": "What are the prerequisites for CSR-1?", "a": "The NGO must be legally registered and hold valid 12A and 80G registrations from the Income Tax Department."},
            {"q": "Do I need a professional to certify the form?", "a": "Yes, Form CSR-1 must be digitally signed and certified by a practicing Chartered Accountant, Company Secretary, or Cost Accountant."},
            {"q": "How long does it take to get the CSR number?", "a": "Once the certified form is successfully filed on the MCA portal, the unique CSR Registration Number is generated immediately."}
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
