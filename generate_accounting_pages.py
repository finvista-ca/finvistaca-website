import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

pages_data = {
    "OutsourcingAccountingBookKeeping": {
        "title": "Outsourcing Accounting & Book Keeping",
        "intro_title": "Professional Financial Management",
        "intro_p1": "Managing accounting and bookkeeping functions efficiently is essential for every business, regardless of its size or location. Outsourcing accounting services enables businesses to reduce operational costs, improve financial accuracy, and focus on their core activities.",
        "intro_p2": "Finvista provides comprehensive Accounting & Bookkeeping Outsourcing services for businesses in India and overseas. By leveraging secure cloud-based solutions and international accounting standards, we help businesses maintain accurate records and ensure regulatory compliance.",
        "features": [
            {"title": "General Ledger Maintenance", "desc": "Accurate recording of day-to-day financial transactions and journal entries.", "icon": "BookOpen"},
            {"title": "Bank Reconciliation", "desc": "Regular reconciliation of bank statements with accounting ledgers.", "icon": "Landmark"},
            {"title": "Accounts Payable & Receivable", "desc": "Efficient tracking of vendor payments and customer invoices.", "icon": "Wallet"},
            {"title": "Financial Statements", "desc": "Preparation of Balance Sheets, P&L accounts, and Cash Flow statements.", "icon": "FileText"},
            {"title": "MIS Reporting", "desc": "Customized Management Information System reports for business insights.", "icon": "BarChart"},
            {"title": "Month & Year-End Closing", "desc": "Systematic closure of financial periods ensuring tax readiness.", "icon": "Calendar"}
        ],
        "benefits": [
            {"title": "Reduced Operational Costs", "desc": "Save significantly on hiring, training, and retaining in-house accounting staff.", "icon": "TrendingDown"},
            {"title": "Accurate Bookkeeping", "desc": "Ensure error-free financial records maintained by experienced Chartered Accountants.", "icon": "BadgeCheck"},
            {"title": "Better Financial Control", "desc": "Gain deep insights into your cash flow and financial health with timely reports.", "icon": "TrendingUp"}
        ],
        "timeline": ["Consultation", "Requirement Analysis", "Process Mapping", "Software Setup", "Data Migration", "Ongoing Bookkeeping"],
        "faqs": [
            {"q": "Why should I outsource my bookkeeping?", "a": "Outsourcing saves costs, ensures high accuracy, provides access to expert professionals, and frees up your time to focus on business growth."},
            {"q": "Do you provide accounting services for overseas businesses?", "a": "Yes, we handle accounting for overseas clients adhering to international accounting standards (IFRS, US GAAP) using cloud software."},
            {"q": "How secure is my financial data?", "a": "We use encrypted, industry-standard cloud accounting software (like Xero, Zoho, QuickBooks) and maintain strict data confidentiality policies."},
            {"q": "How often will I receive financial reports?", "a": "We can provide reports on a weekly, monthly, or quarterly basis depending on your business requirements."}
        ]
    },
    "PayrollManagement": {
        "title": "Payroll Management",
        "intro_title": "End-to-End Payroll Solutions",
        "intro_p1": "Efficient payroll management is essential for maintaining employee satisfaction and ensuring compliance with labor laws, income tax regulations, and statutory requirements.",
        "intro_p2": "Managing salaries, deductions, reimbursements, PF, ESI, professional tax, and TDS can be time-consuming and prone to errors. Finvista offers end-to-end Payroll Management Services that automate processing and ensure complete confidentiality.",
        "features": [
            {"title": "Salary Processing", "desc": "Accurate calculation of monthly salaries, bonuses, and reimbursements.", "icon": "Banknote"},
            {"title": "PF & ESI Compliance", "desc": "Calculation, deduction, and timely filing of Provident Fund and ESI contributions.", "icon": "ShieldCheck"},
            {"title": "TDS Deduction", "desc": "Accurate calculation and deduction of Tax Deducted at Source for employees.", "icon": "Calculator"},
            {"title": "Payslip Generation", "desc": "Automated generation and distribution of secure digital payslips to employees.", "icon": "FileText"},
            {"title": "Payroll Reports", "desc": "Detailed monthly payroll summaries and variance reports for management.", "icon": "BarChart"},
            {"title": "Year-End Computations", "desc": "Issuance of Form 16 and handling employee investment declarations.", "icon": "Calendar"}
        ],
        "benefits": [
            {"title": "Automated Compliance", "desc": "Avoid penalties by ensuring all statutory dues (PF, ESI, TDS) are paid on time.", "icon": "BadgeCheck"},
            {"title": "Data Confidentiality", "desc": "Maintain strict confidentiality of employee salaries and executive compensation.", "icon": "Lock"},
            {"title": "Employee Satisfaction", "desc": "Ensure on-time, accurate salary disbursements resulting in higher employee morale.", "icon": "HeartHandshake"}
        ],
        "timeline": ["Employee Onboarding", "Investment Declaration", "Attendance Processing", "Salary Computation", "Statutory Deductions", "Payslip Distribution"],
        "faqs": [
            {"q": "How often is payroll processed?", "a": "Payroll is typically processed on a monthly basis, aligned with your company's salary disbursement cycle."},
            {"q": "Can statutory deductions be automated?", "a": "Yes, our systems automatically calculate and track PF, ESI, Professional Tax, and TDS deductions accurately."},
            {"q": "Do you help with employee queries?", "a": "Yes, we can provide a dedicated helpdesk to resolve employee queries regarding their tax deductions and payslips."},
            {"q": "Is Form 16 provided to employees?", "a": "Yes, as part of our year-end process, we generate and distribute Form 16 to all eligible employees."}
        ]
    },
    "OnlineAccounting": {
        "title": "Online Accounting",
        "intro_title": "Cloud-Based Financial Management",
        "intro_p1": "Online Accounting enables businesses to manage their financial records securely through cloud-based accounting platforms, providing real-time access to financial information from anywhere in the world.",
        "intro_p2": "It eliminates manual bookkeeping, improves collaboration, and enhances data security. Finvista provides complete Online Accounting solutions, ensuring your financial data remains accurate, accessible, and compliant.",
        "features": [
            {"title": "Cloud Accounting", "desc": "Setup and management of accounting books entirely on secure cloud servers.", "icon": "Cloud"},
            {"title": "Bank Integration", "desc": "Live bank feeds for automated, real-time transaction reconciliation.", "icon": "Landmark"},
            {"title": "Financial Reporting", "desc": "Real-time generation of P&L, Balance Sheet, and cash flow statements.", "icon": "BarChart"},
            {"title": "GST Accounting", "desc": "Seamless mapping of transactions for automated GST return preparation.", "icon": "FileCheck"},
            {"title": "Invoicing", "desc": "Creation and tracking of professional, GST-compliant digital invoices.", "icon": "FileText"},
            {"title": "Anywhere Access", "desc": "Access your financial data securely from any device, anywhere in the world.", "icon": "Smartphone"}
        ],
        "benefits": [
            {"title": "Real-Time Information", "desc": "Access up-to-date financial data instantly to make informed business decisions.", "icon": "Clock"},
            {"title": "Cloud Accessibility", "desc": "Collaborate seamlessly with your accountant remotely via the cloud.", "icon": "CloudLightning"},
            {"title": "Enhanced Security", "desc": "Your data is backed up automatically and protected by enterprise-grade encryption.", "icon": "Lock"}
        ],
        "timeline": ["Software Selection", "Chart of Accounts Setup", "Bank Integration", "Historical Data Migration", "Go Live", "Ongoing Support"],
        "faqs": [
            {"q": "What is online accounting?", "a": "It involves using internet-based accounting software to store and manage your financial data on remote servers instead of a local computer."},
            {"q": "Is my financial data secure in the cloud?", "a": "Yes, leading online accounting platforms use bank-level encryption, multi-factor authentication, and automatic backups to secure your data."},
            {"q": "Can I access my accounts from my phone?", "a": "Absolutely. Most online accounting platforms offer mobile apps that allow you to view reports, send invoices, and capture receipts on the go."},
            {"q": "Do I need to install any software?", "a": "No, online accounting is completely browser-based, meaning there is nothing to install or manually update."}
        ]
    },
    "ZohoAccounting": {
        "title": "ZOHO Accounting Services",
        "intro_title": "Expert Zoho Books Implementation",
        "intro_p1": "Zoho Books is one of the leading cloud-based accounting platforms designed to simplify financial management for growing businesses. It offers powerful features such as invoicing, expense management, and workflow automation.",
        "intro_p2": "Finvista provides professional Zoho Books implementation, customization, migration, bookkeeping, and ongoing support. Our team ensures seamless utilization of Zoho Books to streamline your accounting operations and improve productivity.",
        "features": [
            {"title": "Zoho Setup", "desc": "Complete configuration of Zoho Books tailored to your business structure.", "icon": "Settings"},
            {"title": "Data Migration", "desc": "Secure migration of historical financial data from legacy accounting systems.", "icon": "Database"},
            {"title": "GST Configuration", "desc": "Setting up precise GST tax rates, HSN codes, and e-invoicing integrations.", "icon": "FileCheck"},
            {"title": "Workflow Automation", "desc": "Automating recurring invoices, payment reminders, and bank rules.", "icon": "Zap"},
            {"title": "Bookkeeping", "desc": "Ongoing professional bookkeeping services managed entirely within Zoho Books.", "icon": "BookOpen"},
            {"title": "Training", "desc": "Comprehensive training for your team on how to use Zoho Books efficiently.", "icon": "Users"}
        ],
        "benefits": [
            {"title": "Automated Workflows", "desc": "Save hours of manual data entry through smart automation and bank feeds.", "icon": "Clock"},
            {"title": "Seamless Integrations", "desc": "Easily integrate with Zoho CRM, Zoho Inventory, and other third-party apps.", "icon": "Link"},
            {"title": "GST Compliance", "desc": "Generate GST-ready reports and push returns directly to the GST portal.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Business Analysis", "Account Configuration", "Data Migration", "Customization", "User Training", "Go Live & Support"],
        "faqs": [
            {"q": "Is Zoho Books suitable for startups and SMEs?", "a": "Yes, Zoho Books is highly scalable and perfect for startups, SMEs, and service-based businesses in India."},
            {"q": "Can Zoho Books handle Indian GST?", "a": "Yes, it is fully compliant with Indian GST laws, supporting e-invoicing, e-way bills, and direct return filing."},
            {"q": "Can you migrate my data from Tally to Zoho Books?", "a": "Yes, our experts can safely migrate your opening balances, chart of accounts, and historical transactions from Tally."},
            {"q": "Does Zoho Books have an inventory module?", "a": "Yes, it has basic inventory tracking built-in, and seamlessly integrates with Zoho Inventory for advanced warehouse management."}
        ]
    },
    "XeroAccounting": {
        "title": "XERO Accounting Services",
        "intro_title": "Global Cloud Accounting Solutions",
        "intro_p1": "Xero is a globally recognized cloud accounting software trusted by businesses across the world for its simplicity, automation, and real-time financial management capabilities.",
        "intro_p2": "It enables organizations to manage invoicing, bank reconciliation, and multi-currency transactions efficiently. Finvista offers comprehensive Xero Accounting Services, including software implementation, migration, and ongoing support.",
        "features": [
            {"title": "Xero Implementation", "desc": "Expert setup and configuration of Xero tailored to your international operations.", "icon": "Settings"},
            {"title": "Multi-currency Accounting", "desc": "Flawless management of foreign exchange gains/losses and foreign bank accounts.", "icon": "Globe"},
            {"title": "Bank Feeds", "desc": "Setting up secure, direct integrations with global banks for daily transaction feeds.", "icon": "Landmark"},
            {"title": "Financial Reports", "desc": "Customizing the Xero dashboard and generating insightful management reports.", "icon": "BarChart"},
            {"title": "Payroll Integration", "desc": "Integrating third-party payroll apps with Xero for seamless journal entries.", "icon": "Users"},
            {"title": "App Ecosystem", "desc": "Connecting Xero with powerful apps like Hubdoc, Stripe, and Dext.", "icon": "Link"}
        ],
        "benefits": [
            {"title": "Global Capabilities", "desc": "Perfect for businesses dealing with international clients and multiple currencies.", "icon": "Globe"},
            {"title": "Beautiful Interface", "desc": "Enjoy a clean, intuitive, and user-friendly interface that simplifies accounting.", "icon": "Smile"},
            {"title": "Faster Reconciliation", "desc": "Reconcile hundreds of bank transactions in minutes using Xero's smart matching.", "icon": "Zap"}
        ],
        "timeline": ["Requirement Gathering", "Xero Setup", "Bank Feed Connection", "Data Migration", "App Integration", "Ongoing Bookkeeping"],
        "faqs": [
            {"q": "Is Xero suitable for Indian businesses?", "a": "While Xero doesn't have native Indian GST modules like Zoho, it is highly preferred by Indian businesses that export services or have overseas clients due to its excellent multi-currency features."},
            {"q": "Can Xero manage international transactions?", "a": "Yes, Xero handles over 160 currencies and automatically updates exchange rates hourly."},
            {"q": "How does bank reconciliation work in Xero?", "a": "Xero connects directly to your bank, importing transactions automatically. Its smart AI suggests matches, making reconciliation a one-click process."},
            {"q": "Can you handle my day-to-day bookkeeping in Xero?", "a": "Yes, our certified professionals can act as your outsourced accounting department, managing everything inside your Xero account."}
        ]
    },
    "QuickBooksAccounting": {
        "title": "QuickBooks Accounting Services",
        "intro_title": "Efficient Financial Management",
        "intro_p1": "QuickBooks is one of the world's most widely used accounting software solutions, helping businesses simplify bookkeeping, financial reporting, payroll, tax management, invoicing, and expense tracking.",
        "intro_p2": "Suitable for startups, consultants, and growing enterprises, QuickBooks provides powerful financial management tools. Finvista offers complete QuickBooks implementation, data migration, bookkeeping, and ongoing support.",
        "features": [
            {"title": "Software Setup", "desc": "Configuring QuickBooks Online (QBO) according to your specific industry needs.", "icon": "Settings"},
            {"title": "Expense Tracking", "desc": "Connecting bank accounts and categorizing expenses for accurate tracking.", "icon": "CreditCard"},
            {"title": "Invoicing", "desc": "Creating custom, professional invoice templates to send directly to clients.", "icon": "FileText"},
            {"title": "Data Migration", "desc": "Smooth transition of financial data from Excel or legacy desktop software to QBO.", "icon": "Database"},
            {"title": "Financial Reporting", "desc": "Generating comprehensive Profit & Loss, Balance Sheet, and cash flow reports.", "icon": "BarChart"},
            {"title": "Inventory Management", "desc": "Tracking product costs, quantities, and sales via QuickBooks inventory features.", "icon": "Package"}
        ],
        "benefits": [
            {"title": "User-Friendly", "desc": "An intuitive platform that is easy for business owners and consultants to navigate.", "icon": "Smile"},
            {"title": "Better Cash Flow", "desc": "Track unpaid invoices easily and send automatic payment reminders to clients.", "icon": "TrendingUp"},
            {"title": "Tax Readiness", "desc": "Keep your books perfectly organized year-round for stress-free tax filings.", "icon": "BadgeCheck"}
        ],
        "timeline": ["Needs Assessment", "Account Setup", "Chart of Accounts Design", "Bank Connection", "Data Import", "Monthly Bookkeeping"],
        "faqs": [
            {"q": "Who is QuickBooks best suited for?", "a": "It is ideal for small businesses, freelancers, consultants, retail businesses, and service agencies."},
            {"q": "Can QuickBooks integrate with GST?", "a": "Yes, QuickBooks Online provides features to track GST on sales and purchases, and generate GST reports."},
            {"q": "Do I need accounting knowledge to use it?", "a": "While basic features like invoicing are easy for anyone, we recommend having professionals handle the actual reconciliation and reporting to ensure accuracy."},
            {"q": "Is QuickBooks a cloud-based software?", "a": "Yes, QuickBooks Online is entirely cloud-based, allowing you to access your accounts from any web browser or mobile app."}
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
