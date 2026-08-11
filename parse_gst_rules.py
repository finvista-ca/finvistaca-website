import re
import json

text = """Rule 1	Short title and Commencement
Rule 2	Definitions
Rule 3	Intimation for composition levy
Rule 4	Effective date for composition levy
Rule 5	Conditions and restrictions for composition levy
Rule 6	Validity of composition levy
Rule 7	Rate of tax of the composition levy
Rule 8	Application for registration
Rule 9	Verification of the application and approval
Rule 10	Issue of registration certificate
Rule 10A	Furnishing of Bank Account Details
Rule 10B	Aadhaar authentication for registered person
Rule 11	Separate registration for multiple places of business within a State or a Union territory
Rule 12	Grant of registration to persons required to deduct tax at source or to collect tax at source
Rule 13	Grant of registration to non-resident taxable person
Rule 14	Grant of registration to a person supplying online information and database access or retrieval services from a place outside India to a non-taxable online recipient
Rule 15	Extension in period of operation by casual taxable person and non-resident taxable person
Rule 16	Suomoto registration
Rule 17	Assignment of Unique Identity Number to certain special entities
Rule 18	Display of registration certificate and Goods and Services Tax Identification Number on the name board
Rule 19	Amendment of registration
Rule 20	Application for cancellation of registration
Rule 21	Registration to be cancelled in certain cases
Rule 21A	Suspension of registration
Rule 22	Cancellation of registration
Rule 23	Revocation of cancellation of registration
Rule 24	Migration of persons registered under the existing law
Rule 25	Physical verification of business premises in certain cases
Rule 26	Method of authentication
Rule 27	Value of supply of goods or services where the consideration is not wholly in money
Rule 28	Value of supply of goods or services or both between distinct or related persons, other than through an agent
Rule 29	Value of supply of goods made or received through an agent
Rule 30	Value of supply of goods or services or both based on cost
Rule 31	Residual method for determination of value of supply of goods or services or both
Rule 31A	Value of supply in case of lottery, betting, gambling and horse racing
Rule 32	Determination of value in respect of certain supplies
Rule 32A	Value of supply in cases where Kerala Flood Cess is applicable
Rule 33	Value of supply of services in case of pure agent
Rule 34	Rate of exchange of currency, other than Indian rupees, for determination of value
Rule 35	Value of supply inclusive of integrated tax, central tax, State tax, Union territory tax
Rule 36	Documentary requirements and conditions for claiming input tax credit
Rule 37	Reversal of input tax credit in the case of non-payment of consideration
Rule 37A	Reversal of input tax credit in the case of non-payment of tax by the supplier and re-availment thereof
Rule 38	Claim of credit by a banking company or a ficial institution
Rule 39	Procedure for distribution of input tax credit by Input Service Distributor
Rule 40	Manner of claiming credit in special circumstances
Rule 41	Transfer of credit on sale, merger, amalgamation, lease or transfer of a business
Rule 41A	Transfer of credit on obtaining separate registration for multiple places of business within a State or Union territory
Rule 42	Manner of determination of input tax credit in respect of inputs or input services and reversal thereof
Rule 43	Manner of determination of input tax credit in respect of capital goods and reversal thereof in certain cases
Rule 44	Manner of reversal of credit under special circumstances
Rule 44A	Manner of reversal of credit of Additional duty of Customs in respect of Gold dore bar
Rule 45	Conditions and restrictions in respect of inputs and capital goods sent to the job worker
Rule 46	Tax invoice
Rule 46A	Invoice-cum-bill of supply
Rule 47	Time limit for issuing tax invoice
Rule 48	Manner of issuing invoice
Rule 49	Bill of supply
Rule 50	Receipt voucher
Rule 51	Refund voucher
Rule 52	Payment voucher
Rule 53	Revised tax invoice and credit or debit notes
Rule 54	Tax invoice in special cases
Rule 55	Transportation of goods without issue of invoice
Rule 55A	Tax Invoice or bill of supply to accompany transport of goods
Rule 56	Maintece of accounts by registered persons
Rule 57	Generation and maintece of electronic records
Rule 58	Records to be maintained by owner or operator of godown or warehouse and transporters
Rule 59	Form and manner of furnishing details of outward supplies
Rule 60	Form and manner of ascertaining details of inward supplies
Rule 61	Form and manner of furnishing of return
Rule 61A	Manner of opting for furnishing quarterly return
Rule 62	Form and manner of submission of statement and return
Rule 63	Form and manner of submission of return by non-resident taxable person
Rule 64	Form and manner of submission of return by persons providing online information and database access or retrieval services
Rule 65	Form and manner of submission of return by an Input Service Distributor
Rule 66	Form and manner of submission of return by a person required to deduct tax at source
Rule 67	Form and manner of submission of statement of supplies through an e-commerce operator
Rule 67A	Manner of furnishing of return or details of outward supplies by short messaging service facility
Rule 68	Notice to non-filers of returns
Rule 69	[Omitted]****
Rule 70	[Omitted]****
Rule 71	[Omitted]****
Rule 72	[Omitted]****
Rule 73	[Omitted]****
Rule 74	[Omitted]****
Rule 75	[Omitted]****
Rule 76	[Omitted]****
Rule 77	[Omitted]****
Rule 78	Matching of details furnished by the e-Commerce operator with the details furnished by the supplier
Rule 79	[Omitted]****
Rule 80	Annual return
Rule 81	Final return
Rule 82	Details of inward supplies of persons having Unique Identity Number
Rule 83	Provisions relating to a goods and services tax practitioner
Rule 83A	Examination of Goods and Services Tax Practitioners
Rule 83B	Surrender of enrolment of goods and services tax practitioner
Rule 84	Conditions for purposes of appearance
Rule 85	Electronic Liability Register
Rule 86	Electronic Credit Ledger
Rule 86A	Conditions of use of amount available in electronic credit ledger
Rule 86B	Restrictions on use of amount available in electronic credit ledger
Rule 87	Electronic Cash Ledger
Rule 88	Identification number for each transaction
Rule 88A	Order of utilization of input tax credit
Rule 88B	Manner of calculating interest on delayed payment of tax
Rule 88C	Manner of dealing with difference in liability reported in statement of outward supplies and that reported in return
Rule 89	Application for refund of tax, interest, penalty, fees or any other amount
Rule 90	Acknowledgement
Rule 91	Grant of provisional refund
Rule 92	Order sanctioning refund
Rule 93	Credit of the amount of rejected refund claim
Rule 94	Order sanctioning interest on delayed refunds
Rule 95	Refund of tax to certain persons
Rule 95A	[Omitted]****
Rule 96	Refund of integrated tax paid on goods or services 220exported out of India
Rule 96A	Export of goods or services under bond or Letter of Undertaking
Rule 96B	Recovery of refund of unutilised input tax credit or integrated tax paid on export of goods where export proceeds not realised
Rule 96C	Bank Account for credit of refund
Rule 97	Consumer Welfare Fund
Rule 97A	Manual filing and processing
Rule 98	Provisional Assessment
Rule 99	Scrutiny of returns
Rule 100	Assessment in certain cases
Rule 101	Audit
Rule 102	Special Audit
Rule 103	Qualification and appointment of members of the Authority for Advance Ruling
Rule 104	Form and manner of application to the Authority for Advance Ruling
Rule 105	Certification of copies of advance rulings pronounced by the Authority
Rule 106	Form and manner of appeal to the Appellate Authority for Advance Ruling
Rule 107	Certification of copies of the advance rulings pronounced by the Appellate Authority
Rule 107A	Manual filing and processing
Rule 108	Appeal to the Appellate Authority
Rule 109	Application to the Appellate Authority
Rule 109A	Appointment of Appellate Authority
Rule 109B	Notice to person and order of revisional authority in case of revision
Rule 109C	Withdrawal of Appeal
Rule 110	Appeal to the Appellate Tribunal
Rule 111	Application to the Appellate Tribunal
Rule 112	Production of additional evidence before the Appellate Authority or the Appellate Tribunal
Rule 113	Order of Appellate Authority or Appellate Tribunal
Rule 114	Appeal to the High Court
Rule 115	Demand confirmed by the Court
Rule 116	Disqualification for misconduct of an authorised representative
Rule 117	Tax or duty credit carried forward under any existing law or on goods held in stock on the appointed day
Rule 118	Declaration to be made under clause (c) of sub-section (11) of section 142
Rule 119	Declaration of stock held by a principal and job-worker
Rule 120	Details of goods sent on approval basis
Rule 120A	Revision of declaration in FORM GST TRAN-1
Rule 121	Recovery of credit wrongly availed
Rule 122	[Omitted]****
Rule 123	Constitution of the Standing Committee and Screening Committees
Rule 124	[Omitted]****
Rule 125	[Omitted]****
Rule 126	Power to determine the methodology and procedure
Rule 127	Functions of the Authority
Rule 128	Examination of application by the Standing Committee and Screening Committee
Rule 129	Initiation and conduct of proceedings
Rule 130	Confidentiality of information
Rule 131	Cooperation with other agencies or statutory authorities
Rule 132	Power to summon persons to give evidence and produce documents
Rule 133	Order of the Authority
Rule 134	[Omitted]****
Rule 135	Compliance by the registered person
Rule 136	Monitoring of the order
Rule 137	[Omitted]****
Explanation	
Rule 138	Information to be furnished prior to commencement of movement of goods andgeneration of e-way bill
Rule 138A	Documents and devices to be carried by a person-in-charge of a conveyance
Rule 138B	Verification of documents and conveyances
Rule 138C	Inspection and verification of goods
Rule 138D	Facility for uploading information regarding detention of vehicle
Rule 138E	Restriction on furnishing of information in PART A of FORM GST EWB-01
Rule 139	Inspection, search and seizure
Rule 140	Bond and security for release of seized goods
Rule 141	Procedure in respect of seized goods
Rule 142	Notice and order for demand of amounts payable under the Act
Rule 142A	Procedure for recovery of dues under existing laws
Rule 143	Recovery by deduction from any money owed
Rule 144	Recovery by sale of goods under the control of proper officer
Rule 144A	Recovery of penalty by sale of goods or conveyance detained or seized in transit
Rule 145	Recovery from a third person
Rule 146	Recovery through execution of a decree, etc
Rule 147	Recovery by sale of movable or immovable property
Rule 148	Prohibition against bidding or purchase by officer
Rule 149	Prohibition against sale on holidays
Rule 150	Assistance by police
Rule 151	Attachment of debts and shares, etc
Rule 152	Attachment of property in custody of courts or Public Officer
Rule 153	Attachment of interest in partnership
Rule 154	Disposal of proceeds of sale of goods or conveyance and movable or immovable property
Rule 155	Recovery through land revenue authority
Rule 156	Recovery through court
Rule 157	Recovery from surety
Rule 158	Payment of tax and other amounts in instalments
Rule 159	Provisional attachment of property
Rule 160	Recovery from company in liquidation
Rule 161	Continuation of certain recovery proceedings
Rule 162	Procedure for compounding of offences"""

def get_category_and_importance(num_str):
    num_match = re.match(r'^(\d+)', num_str)
    if not num_match:
        return 'Other', False
    
    num = int(num_match.group(1))
    
    cat = 'Other'
    important = False
    
    if 1 <= num <= 2:
        cat = 'Preliminary'
    elif 3 <= num <= 7:
        cat = 'Composition Levy'
    elif 8 <= num <= 26:
        cat = 'Registration'
        if 8 <= num <= 23:
            important = True
    elif 27 <= num <= 35:
        cat = 'Valuation'
        if 27 <= num <= 35:
            important = True
    elif 36 <= num <= 45:
        cat = 'Input Tax Credit'
        if 36 <= num <= 45:
            important = True
    elif 46 <= num <= 55:
        cat = 'Invoicing & Documentation'
        if 46 <= num <= 55:
            important = True
    elif 56 <= num <= 58:
        cat = 'Accounts & Records'
    elif 59 <= num <= 84:
        cat = 'Returns'
        if 59 <= num <= 68 or 80 <= num <= 81:
            important = True
    elif 85 <= num <= 88:
        cat = 'Payments & Electronic Ledgers'
        if 85 <= num <= 88:
            important = True
    elif 89 <= num <= 97:
        cat = 'Refunds'
        if 89 <= num <= 96:
            important = True
    elif 98 <= num <= 102:
        cat = 'Assessment'
        if 98 <= num <= 102:
            important = True
    elif 103 <= num <= 107:
        cat = 'Advance Ruling'
    elif 108 <= num <= 116:
        cat = 'Appeals'
        if 108 <= num <= 114:
            important = True
    elif 117 <= num <= 121:
        cat = 'Transitional Provisions'
    elif 122 <= num <= 137:
        cat = 'Anti-Profiteering'
    elif num == 138:
        cat = 'E-Way Bill'
        important = True
    elif 139 <= num <= 141:
        cat = 'Inspection / Search / Seizure'
    elif 142 <= num <= 161:
        cat = 'Demand & Recovery'
        if 142 <= num:
            important = True
    elif num == 162:
        cat = 'Compounding'

    return cat, important

lines = text.strip().split('\n')
rules = []
for line in lines:
    if line.startswith('Rule '):
        parts = line.split('\t', 1)
        if len(parts) == 2:
            rule_name = parts[0].strip()
            rule_title = parts[1].strip()
            
            rule_num_str = rule_name.replace('Rule ', '')
            
            is_omitted = '[Omitted]' in rule_title
            
            category, is_important = get_category_and_importance(rule_num_str)
            
            if is_omitted:
                is_important = False
                rule_title = 'Omitted'
            else:
                rule_title = rule_title.replace('****', '')

            rules.append({
                'id': f'rule-{rule_num_str.lower()}',
                'ruleNumber': rule_name,
                'title': rule_title,
                'category': category,
                'status': 'Omitted' if is_omitted else 'Active',
                'source': 'Central Goods and Services Tax Rules, 2017',
                'sourceUrl': 'https://cbic-gst.gov.in/cgst-rules.html',
                'isImportant': is_important
            })

ts_content = f"""export interface GSTRule {{
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
}}

export const gstRulesData: GSTRule[] = {json.dumps(rules, indent=2)};

export const relatedKnowledgeBase = [
  {{ title: "CGST Act", path: "/knowledge-base/cgst-act" }},
  {{ title: "SGST Act", path: "/knowledge-base/sgst-act" }},
  {{ title: "IGST Act", path: "/knowledge-base/igst-act" }},
  {{ title: "GST Forms", path: "/knowledge-base/gst-forms" }},
  {{ title: "GST Circulars", path: "/knowledge-base/gst-circulars" }},
  {{ title: "GST Notifications", path: "/knowledge-base/gst-notifications" }},
  {{ title: "GST Returns", path: "/knowledge-base/gst-returns" }},
  {{ title: "GST Rates", path: "/knowledge-base/gst-rates" }},
  {{ title: "GST Calculators", path: "/knowledge-base/gst-calculators" }}
];
"""

with open('src/data/gstRulesData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Generated src/data/gstRulesData.ts")
