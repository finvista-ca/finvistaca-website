import re
import os

data = {
    "Proprietorship.tsx": {
        "features": """[
      { title: "Proprietorship Registration", desc: "Complete assistance in registering your sole proprietorship.", icon: "FileText" },
      { title: "PAN & TAN Assistance", desc: "Fast-track application and processing of PAN and TAN for your business.", icon: "CheckCircle" },
      { title: "GST Registration", desc: "Seamless GSTIN acquisition to ensure compliance from day one.", icon: "FileSignature" },
      { title: "MSME (Udyam) Registration", desc: "Get Udyam registration to avail government benefits and subsidies.", icon: "Briefcase" },
      { title: "Bank Account Assistance", desc: "Support with opening a current account in your business name.", icon: "Landmark" },
      { title: "Tax Consultation", desc: "Expert advice on taxation and annual compliance requirements.", icon: "HelpCircle" }
    ]""",
        "benefits": """[
      { title: "Fast & Easy Setup", desc: "Start your business operations within a few days with minimal legal formalities.", icon: "Zap" },
      { title: "Low Compliance", desc: "Fewer statutory requirements compared to companies or LLPs.", icon: "ShieldCheck" },
      { title: "Complete Control", desc: "Retain 100% ownership and control over all business decisions and profits.", icon: "Check" },
      { title: "Affordable", desc: "Highly cost-effective registration and maintenance for small businesses.", icon: "Wallet" },
      { title: "Tax Guidance", desc: "Taxed at individual slab rates, which can be advantageous for new businesses.", icon: "TrendingUp" }
    ]""",
        "timeline": """[
      "Initial Consultation & Requirement Gathering",
      "Collection of KYC Documents (PAN, Aadhaar, Address Proof)",
      "Filing of MSME / Udyam Registration",
      "Filing of GST Registration (if applicable)",
      "Opening of Current Bank Account"
    ]""",
        "faqs": """[
      { q: "Do I need a separate PAN for my Proprietorship?", a: "No, a Sole Proprietorship does not have a separate legal entity. The business operates under the PAN of the proprietor." },
      { q: "Is GST Registration mandatory for a Proprietorship?", a: "It is mandatory only if your aggregate turnover crosses the threshold limit (usually Rs. 40 Lakhs for goods, Rs. 20 Lakhs for services) or if you engage in inter-state trade or e-commerce." },
      { q: "Can I use a fictitious name for my business?", a: "Yes, you can operate under a trade name, but legal documents will still bear your personal name along with the trade name." },
      { q: "What documents are required to open a current account?", a: "Banks generally require any two proof of business (like MSME certificate, GST registration, or Shop & Establishment license) along with your KYC documents." },
      { q: "How are taxes filed for a Proprietorship?", a: "You file your business income under 'Profits and Gains from Business or Profession' along with your personal Income Tax Return (ITR-3 or ITR-4)." }
    ]"""
    },
    "PrivateLimitedCompany.tsx": {
        "features": """[
      { title: "Company Incorporation", desc: "End-to-end assistance in registering your Private Limited Company with MCA.", icon: "Building" },
      { title: "Name Approval", desc: "Checking name availability and filing RUN/SPICe+ for name reservation.", icon: "CheckCircle" },
      { title: "DSC & DIN Allotment", desc: "Acquiring Digital Signature Certificates and Director Identification Numbers.", icon: "ShieldCheck" },
      { title: "MoA & AoA Drafting", desc: "Expert drafting of the Memorandum and Articles of Association.", icon: "FileSignature" },
      { title: "PAN, TAN & GST", desc: "Simultaneous application for PAN, TAN, and GSTIN via agile pro.", icon: "Briefcase" },
      { title: "Compliance Setup", desc: "Initial setup of mandatory ROC compliance frameworks.", icon: "TrendingUp" }
    ]""",
        "benefits": """[
      { title: "Limited Liability", desc: "Personal assets are protected; liability is limited to the shares held.", icon: "ShieldCheck" },
      { title: "Separate Legal Entity", desc: "The company can own property, incur debt, and sue in its own name.", icon: "Landmark" },
      { title: "Fundraising", desc: "Easier to raise capital from venture capitalists, angel investors, and banks.", icon: "TrendingUp" },
      { title: "Credibility", desc: "Enhances trust among customers, suppliers, and stakeholders.", icon: "BadgeCheck" },
      { title: "Perpetual Succession", desc: "The company continues to exist irrespective of changes in directors or shareholders.", icon: "Users" }
    ]""",
        "timeline": """[
      "DSC Generation for Directors",
      "Name Approval via SPICe+ Part A",
      "Drafting MoA & AoA",
      "Filing SPICe+ Part B with MCA",
      "Issuance of Certificate of Incorporation (COI), PAN & TAN"
    ]""",
        "faqs": """[
      { q: "How many directors are required to form a Private Limited Company?", a: "A minimum of 2 directors and a maximum of 15 directors are allowed. At least one director must be an Indian resident." },
      { q: "What is the minimum capital requirement?", a: "There is no minimum paid-up capital requirement to start a Private Limited Company in India anymore." },
      { q: "Do I need a commercial space for the registered office?", a: "No, a residential address can also be used as the registered office by providing a No Objection Certificate (NOC) from the owner." },
      { q: "Can a foreign national be a director?", a: "Yes, a foreign national or NRI can be a director, provided at least one director is an Indian resident." },
      { q: "What are the annual compliance requirements?", a: "Annual compliances include holding Board/General Meetings, filing Annual Returns (MGT-7), Financial Statements (AOC-4), and Income Tax Returns." }
    ]"""
    },
    "PublicLimitedCompany.tsx": {
        "features": """[
      { title: "Public Company Incorporation", desc: "Complete assistance in registering a Public Limited Company.", icon: "Building" },
      { title: "DSC & DIN", desc: "Procurement of Digital Signatures and Director Identification Numbers for all 3+ directors.", icon: "ShieldCheck" },
      { title: "MoA & AoA Drafting", desc: "Customized drafting of Memorandum and Articles complying with the Companies Act.", icon: "FileSignature" },
      { title: "Statutory Registrations", desc: "PAN, TAN, GST, and PF/ESI registrations.", icon: "Briefcase" },
      { title: "Compliance Setup", desc: "Guidance on rigorous ROC and SEBI (if listed) compliance.", icon: "TrendingUp" }
    ]""",
        "benefits": """[
      { title: "Limited Liability", desc: "Shareholder liability is limited to their investment.", icon: "ShieldCheck" },
      { title: "Massive Fundraising", desc: "Ability to raise capital from the general public via IPOs or public deposits.", icon: "TrendingUp" },
      { title: "High Credibility", desc: "Public companies enjoy the highest level of corporate transparency and trust.", icon: "BadgeCheck" },
      { title: "Easy Transferability", desc: "Shares of a public company are freely transferable.", icon: "Users" }
    ]""",
        "timeline": """[
      "DSC & DIN for all Minimum 3 Directors",
      "Name Approval (RUN/SPICe+ Part A)",
      "Drafting specialized MoA & AoA for Public Companies",
      "Filing Incorporation forms (SPICe+ Part B) with MCA",
      "Obtaining COI, PAN, and TAN"
    ]""",
        "faqs": """[
      { q: "What is the minimum requirement for a Public Limited Company?", a: "It requires a minimum of 3 directors and 7 shareholders. There is no minimum capital requirement." },
      { q: "Can a Private Limited Company be converted to a Public Limited Company?", a: "Yes, by passing a special resolution, altering the MoA and AoA, and increasing the number of members to 7 and directors to 3." },
      { q: "Is listing on a stock exchange mandatory?", a: "No, a Public Limited Company can be unlisted. Listing on the BSE/NSE is a separate process known as an Initial Public Offering (IPO)." },
      { q: "What are the compliance burdens?", a: "Public companies have strict compliance norms including mandatory audits, quarterly reporting (if listed), appointing KMPs, and holding statutory meetings." },
      { q: "Can a public company raise funds from the public?", a: "Yes, subject to SEBI regulations, a public company can issue a prospectus and invite the public to subscribe to its shares." }
    ]"""
    },
    "IndianSubsidiary.tsx": {
        "features": """[
      { title: "Subsidiary Incorporation", desc: "Registration of an Indian subsidiary for a foreign parent company.", icon: "Building" },
      { title: "FEMA/RBI Compliance", desc: "Ensuring strict compliance with FDI guidelines, FEMA, and RBI reporting.", icon: "Globe" },
      { title: "Cross-Border Tax Advisory", desc: "Structuring to optimize withholding taxes and transfer pricing.", icon: "FileSignature" },
      { title: "Statutory Setup", desc: "Obtaining PAN, TAN, GST, and IEC codes.", icon: "Briefcase" },
      { title: "Drafting MoA & AoA", desc: "Drafting constitution documents tailored for wholly owned subsidiaries.", icon: "CheckCircle" }
    ]""",
        "benefits": """[
      { title: "Market Entry", desc: "Establish a legal presence in one of the world's fastest-growing economies.", icon: "TrendingUp" },
      { title: "Limited Liability", desc: "The foreign parent company's liability is limited to its shareholding in the Indian entity.", icon: "ShieldCheck" },
      { title: "FDI Benefits", desc: "100% FDI is allowed in most sectors under the automatic route.", icon: "BadgeCheck" },
      { title: "Local Operations", desc: "Can easily hire local talent, open bank accounts, and acquire property.", icon: "Users" }
    ]""",
        "timeline": """[
      "Notarization & Apostilling of Parent Company Documents",
      "DSC Generation for Foreign Directors",
      "Name Approval with MCA",
      "Filing Incorporation Forms with MCA",
      "FDI Reporting to RBI (FC-GPR) post-incorporation"
    ]""",
        "faqs": """[
      { q: "Can a foreign company own 100% of an Indian Subsidiary?", a: "Yes, a Wholly Owned Subsidiary (WOS) is allowed in sectors where 100% FDI is permitted under the automatic route." },
      { q: "Do the documents of the foreign parent need to be notarized?", a: "Yes, board resolutions, ID proofs, and incorporation documents from the foreign country must be notarized and apostilled/consularized." },
      { q: "Are resident Indian directors required?", a: "Yes, the Indian subsidiary must have at least two directors, and at least one of them must be an Indian resident." },
      { q: "What are the RBI reporting requirements?", a: "Upon receiving share capital from the foreign parent, the company must report the transaction to the RBI using the FC-GPR form within 30 days." },
      { q: "How are profits repatriated?", a: "Profits can be repatriated in the form of dividends to the parent company, subject to applicable Dividend Distribution Taxes and FEMA guidelines." }
    ]"""
    },
    "Section8Company.tsx": {
        "features": """[
      { title: "Section 8 Incorporation", desc: "Registration of NGOs/NPOs under Section 8 of the Companies Act.", icon: "HeartHandshake" },
      { title: "License Procurement", desc: "Obtaining the mandatory Section 8 License from the Central Government.", icon: "FileSignature" },
      { title: "Drafting Trust Deeds/MoA", desc: "Specialized drafting emphasizing non-profit objectives.", icon: "FileText" },
      { title: "12A & 80G Registration", desc: "Filing for income tax exemptions and donor deduction benefits.", icon: "ShieldCheck" },
      { title: "FCRA Registration", desc: "Assistance with FCRA if you intend to receive foreign contributions.", icon: "Globe" }
    ]""",
        "benefits": """[
      { title: "Tax Exemptions", desc: "Eligible for massive tax exemptions under section 12A and 80G.", icon: "Wallet" },
      { title: "No Minimum Capital", desc: "Can be formed without any minimum paid-up share capital requirement.", icon: "TrendingUp" },
      { title: "Corporate Identity", desc: "Enjoys better credibility with government bodies and donors compared to Trusts/Societies.", icon: "BadgeCheck" },
      { title: "No Title Required", desc: "Exempted from using 'Private Limited' or 'Limited' in its name.", icon: "CheckCircle" }
    ]""",
        "timeline": """[
      "DSC & DIN for Directors",
      "Name Approval (must include words like Foundation, Forum, Association)",
      "Applying for Section 8 License (Form INC-12)",
      "Filing Incorporation forms (SPICe+)",
      "Applying for 12A & 80G registrations post-incorporation"
    ]""",
        "faqs": """[
      { q: "What is a Section 8 Company?", a: "It is a company registered for charitable or not-for-profit purposes, where profits are applied solely toward promoting its objectives, and no dividends are paid to members." },
      { q: "Can directors draw a salary?", a: "Generally, directors in a Section 8 company work in an honorary capacity, but they may be remunerated for professional services rendered if permitted by the AoA." },
      { q: "What happens if a Section 8 company closes?", a: "Upon winding up, any remaining assets cannot be distributed to members; they must be transferred to another Section 8 company with similar objects." },
      { q: "Is 12A and 80G registration automatic?", a: "No, after incorporating the company, separate applications must be made to the Income Tax Department for these exemptions." },
      { q: "Can a Section 8 company receive foreign funds?", a: "Yes, but only after obtaining an FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs." }
    ]"""
    },
    "NidhiCompany.tsx": {
        "features": """[
      { title: "Nidhi Incorporation", desc: "Incorporation of a Nidhi Company under the Companies Act, 2013.", icon: "Building" },
      { title: "NDH Forms Filing", desc: "Filing of mandatory NDH-1, NDH-2, NDH-3, and NDH-4 forms.", icon: "FileText" },
      { title: "Compliance Setup", desc: "Guidance on Nidhi Rules, 2014 regarding deposits, loans, and net owned funds.", icon: "ShieldCheck" },
      { title: "Drafting Policies", desc: "Drafting loan and deposit policies in accordance with regulations.", icon: "FileSignature" },
      { title: "Statutory Audits", desc: "Assistance with specialized Nidhi company auditing.", icon: "CheckCircle" }
    ]""",
        "benefits": """[
      { title: "No RBI Approval", desc: "Operates as a non-banking financial company without needing RBI approval.", icon: "Zap" },
      { title: "Easy Lending", desc: "Simple mechanism to accept deposits and lend money strictly to its members.", icon: "Wallet" },
      { title: "Promotes Savings", desc: "Encourages a culture of savings and thrift among community members.", icon: "HeartHandshake" },
      { title: "Low Capital Setup", desc: "Can be started with a relatively small minimum capital of Rs. 10 Lakhs.", icon: "TrendingUp" }
    ]""",
        "timeline": """[
      "DSC & DIN Generation for Minimum 3 Directors",
      "Name Approval (must end with 'Nidhi Limited')",
      "Incorporation under SPICe+",
      "Post-Incorporation Compliance (Adding 200 members)",
      "Filing NDH-4 for Declaration as a Nidhi Company"
    ]""",
        "faqs": """[
      { q: "What is a Nidhi Company?", a: "A Nidhi Company is a type of NBFC formed to cultivate the habit of thrift and savings amongst its members, receiving deposits from and lending to its members only." },
      { q: "Does a Nidhi Company require RBI registration?", a: "No, Nidhi Companies are exempted from core provisions of the RBI Act and are governed by the Ministry of Corporate Affairs (MCA)." },
      { q: "What is the minimum requirement to start?", a: "It requires a minimum of 3 directors, 7 members, and a minimum paid-up equity share capital of Rs. 10 Lakhs." },
      { q: "What are the post-incorporation requirements?", a: "Within 1 year, the Nidhi must have at least 200 members, Net Owned Funds of Rs. 20 Lakhs, and unencumbered term deposits of not less than 10% of outstanding deposits." },
      { q: "Can a Nidhi Company issue preference shares?", a: "No, a Nidhi Company cannot issue preference shares, debentures, or any other debt instruments." }
    ]"""
    },
    "ProducerCompany.tsx": {
        "features": """[
      { title: "Producer Company Registration", desc: "Incorporation of a company for farmers, agriculturists, and artisans.", icon: "Building" },
      { title: "MoA & AoA Drafting", desc: "Specialized drafting focusing on agricultural and production objectives.", icon: "FileSignature" },
      { title: "Statutory Licenses", desc: "Acquiring FSSAI, APEDA, or other agricultural export/import licenses.", icon: "ShieldCheck" },
      { title: "NABARD Subsidy Assistance", desc: "Consulting on government schemes, grants, and subsidies.", icon: "Wallet" },
      { title: "Compliance Management", desc: "Managing mandatory ROC filings and audits.", icon: "TrendingUp" }
    ]""",
        "benefits": """[
      { title: "Farmer Empowerment", desc: "Helps farmers pool resources and improve economies of scale.", icon: "Users" },
      { title: "Tax Exemptions", desc: "Certain agricultural incomes are exempt from tax.", icon: "BadgeCheck" },
      { title: "Government Subsidies", desc: "Highly favored by the government for various agricultural subsidies and schemes.", icon: "TrendingUp" },
      { title: "Limited Liability", desc: "Members' liability is limited to their unpaid share capital.", icon: "ShieldCheck" }
    ]""",
        "timeline": """[
      "Gather KYC for 10+ Producer Members / 5+ Directors",
      "DSC & DIN Generation",
      "Name Approval (must end with 'Producer Company Limited')",
      "Filing SPICe+ Forms",
      "Opening Bank Account and applying for Agricultural Licenses"
    ]""",
        "faqs": """[
      { q: "Who can form a Producer Company?", a: "Only 'Primary Producers' (farmers, agriculturists, handloom weavers, etc.) or Producer Institutions can form a Producer Company." },
      { q: "What is the minimum member requirement?", a: "It requires a minimum of 10 individuals, or 2 producer institutions, or a combination, along with a minimum of 5 directors." },
      { q: "Can a Producer Company be converted to a Public Company?", a: "Yes, but only under specific provisions of the Companies Act after passing special resolutions." },
      { q: "What is the minimum capital requirement?", a: "A Producer Company must have a minimum paid-up capital of Rs. 5 Lakhs." },
      { q: "Are Producer Companies exempt from Income Tax?", a: "While agricultural income is generally exempt under Section 10(1), income derived from processing or trading may be taxable depending on specific business activities." }
    ]"""
    },
    "SocietyRegistration.tsx": {
        "features": """[
      { title: "Society Registration", desc: "Registering under the Societies Registration Act, 1860.", icon: "Building" },
      { title: "Drafting MoA & Rules", desc: "Drafting the Memorandum and Rules & Regulations.", icon: "FileSignature" },
      { title: "State Level Processing", desc: "Filing and liaising with the local Registrar of Societies.", icon: "FileText" },
      { title: "12A & 80G Approval", desc: "Applying for tax exemption certificates.", icon: "ShieldCheck" },
      { title: "NITI Aayog Registration", desc: "Registering on NGO Darpan for government grants.", icon: "Globe" }
    ]""",
        "benefits": """[
      { title: "Legal Recognition", desc: "Provides a formal structure for charitable, literary, or scientific purposes.", icon: "BadgeCheck" },
      { title: "Tax Benefits", desc: "Eligible for income tax exemptions and donor benefits.", icon: "Wallet" },
      { title: "Government Grants", desc: "Eligible to receive state and central government funding.", icon: "TrendingUp" },
      { title: "Democratic Control", desc: "Operates through a governing body elected by members.", icon: "Users" }
    ]""",
        "timeline": """[
      "Finalizing Name and Objectives",
      "Drafting Memorandum and Rules & Regulations",
      "Gathering Affidavits and KYC from 7 Members",
      "Submission to Registrar of Societies",
      "Issuance of Registration Certificate"
    ]""",
        "faqs": """[
      { q: "How many members are required to form a Society?", a: "A minimum of 7 members are required to form a state-level society. For a national-level society, members from at least 7 different states are required." },
      { q: "What is the difference between a Trust and a Society?", a: "A Trust is managed by a Board of Trustees with usually permanent tenure, whereas a Society operates democratically with a governing body elected periodically." },
      { q: "Can family members form a Society?", a: "No, most Registrars require that members of the governing body should not be related by blood or marriage to prevent conflict of interest." },
      { q: "Does a Society need to file annual returns?", a: "Yes, a Society must file an annual list of governing body members and audited financials with the Registrar of Societies." },
      { q: "Can a Society be dissolved?", a: "Yes, a Society can be dissolved by a vote of at least 3/5ths of its members. Assets must be given to another similar society, not to members." }
    ]"""
    },
    "TrustRegistration.tsx": {
        "features": """[
      { title: "Trust Deed Drafting", desc: "Comprehensive drafting of the Trust Deed defining settlor, trustees, and objectives.", icon: "FileSignature" },
      { title: "Registration Process", desc: "Representation before the Sub-Registrar for Trust Registration.", icon: "Building" },
      { title: "PAN & TAN Application", desc: "Obtaining tax identities for the Trust.", icon: "CheckCircle" },
      { title: "12A & 80G Registration", desc: "Applying for tax exemptions and donor deductions.", icon: "ShieldCheck" },
      { title: "FCRA Compliance", desc: "Assistance with obtaining FCRA for foreign donations.", icon: "Globe" }
    ]""",
        "benefits": """[
      { title: "Ease of Formation", desc: "Relatively simple process compared to a Section 8 Company.", icon: "Zap" },
      { title: "Permanent Control", desc: "The Settlor can appoint permanent trustees, avoiding periodic elections.", icon: "ShieldCheck" },
      { title: "Tax Exemptions", desc: "Income is exempt from tax under Section 11 & 12 of the IT Act (if registered).", icon: "Wallet" },
      { title: "Privacy", desc: "Fewer public disclosure requirements compared to Companies.", icon: "CheckCircle" }
    ]""",
        "timeline": """[
      "Drafting of the Trust Deed",
      "Payment of Stamp Duty",
      "Execution of Trust Deed in presence of witnesses",
      "Registration before the Sub-Registrar",
      "Application for PAN, 12A, and 80G"
    ]""",
        "faqs": """[
      { q: "What is the minimum number of trustees required?", a: "A minimum of two trustees are required to form a public charitable trust." },
      { q: "Can a Trust be revoked?", a: "A public charitable trust is generally irrevocable. Once property is transferred to the trust, it cannot be taken back." },
      { q: "Is physical presence required for registration?", a: "Yes, the Settlor and two witnesses must be physically present before the Sub-Registrar during the registration process." },
      { q: "What is the role of the Settlor?", a: "The Settlor is the person who creates the trust by placing an asset (property or money) into it for charitable purposes." },
      { q: "Are family members allowed as trustees?", a: "Yes, family members can be trustees in a public trust, but it is advisable to have independent trustees as well for better governance and 12A/80G approvals." }
    ]"""
    }
}

for filename, content in data.items():
    path = os.path.join("src", "pages", "services", filename)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            filedata = f.read()
        
        # Replace empty features: []
        filedata = re.sub(r'features:\s*\[\s*\]', f'features: {content["features"]}', filedata)
        filedata = re.sub(r'benefits:\s*\[\s*\]', f'benefits: {content["benefits"]}', filedata)
        filedata = re.sub(r'timeline:\s*\[\s*\]', f'timeline: {content["timeline"]}', filedata)
        filedata = re.sub(r'faqs:\s*\[\s*\]', f'faqs: {content["faqs"]}', filedata)
        
        with open(path, "w", encoding="utf-8") as f:
            f.write(filedata)
        print(f"Updated {filename}")
