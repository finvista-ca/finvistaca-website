import json
import re

text = """
Order-01/2022-GST
Date: 21-07-2022
Subject:
Authorisation under clause (c) of sub-rule (4) of rule 96 of the Central Goods and Services Tax Rules, 2017
English:
https://cbic-gst.gov.in/pdf/Order-authorisation-under-clause-rule-96.pdf

Order-01/2020-GST
Date: 07-02-2020
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1 under rule 117(1A) of the Central Goods and Service Tax Rules, 2017 in certain cases
English:
https://cbic-gst.gov.in/pdf/order1-2020-cgst.pdf

Order-02/2019-GST
Date: 12-03-2019
Subject:
Appointment of common authority for the purpose of exercise of powers under sections 73,74, 75 and 76 of the CGST Act, 2017
English:
https://cbic-gst.gov.in/pdf/order2-2019-cgst.pdf

Order-01/2019-GST
Date: 31-01-2019
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1 under rule 117(1A) of the Central Goods and Service Tax Rules, 2017 in certain cases
English:
https://cbic-gst.gov.in/pdf/order1-2019-cgst.pdf

Order-04/2018-Central Tax
Date: 31-12-2018
Subject:
Seeks to extend the due date for furnishing the statement in FORM GSTR-8 by e-commerce companies for the months of October to December, 2018 till 31.01.2019.
English:
https://cbic-gst.gov.in/pdf/ROD-4-Central-Tax.pdf
Hindi:
https://cbic-gst.gov.in/pdf/ROD-4-Hindi.pdf

Order-03/2018-Central Tax
Date: 31-12-2018
Subject:
Seeks to amend Removal of Difficulty Order No. 1/2018 dated 11.12.2018 so as to extend the due date for furnishing of annual returns in FORM GSTR-9, FORM GSTR-9A and reconciliation statement in FORM GSTR-9C for the FY 2017-2018 till 30.06.2019.
English:
https://cbic-gst.gov.in/pdf/ROD-3-Central-Tax.pdf
Hindi:
https://cbic-gst.gov.in/pdf/ROD-3-Hindi.pdf

Order-02/2018-Central Tax
Date: 31-12-2018
Subject:
Seeks to extend the due date for availing ITC on the invoices or debit notes relating to such invoices issued during the FY 2017-18.
English:
https://cbic-gst.gov.in/pdf/ROD-2-Central-Tax.pdf
Hindi:
https://cbic-gst.gov.in/pdf/ROD-2-Hindi.pdf

Order-01/2018-GST
Date: 11-12-2018
Subject:
Removal of difficulty order regarding extension of due date for filing of Annual return (in FORMs GSTR-9, GSTR-9A and GSTR-9C) for FY 2017-18 till 31st March, 2019
English:
https://cbic-gst.gov.in/pdf/ROD_1%20of%202018_CT_English.pdf
Hindi:
https://cbic-gst.gov.in/pdf/ROD_1%20of%202018_CT_Hindi.pdf

Order-04/2018-GST
Date: 17-09-2018
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1 under rule 117(1A) of the Central Goods and Service Tax Rules, 2017 in certain cases
English:
https://cbic-gst.gov.in/pdf/order4-2018-cgst.pdf

Order-03/2018-Central Tax
Date: 16-08-2018
Subject:
Constitution of Standing Committee for Consumer Welfare Fund under rule 97 (4) of the CGST Rules
English:
https://cbic-gst.gov.in/pdf/Order-CWF-Standing-Committee.pdf

49/23/2018-GST
Date: 21-06-2018
Subject:
Seeks to modify Circular No. 41/15/2018-GST
English:
https://cbic-gst.gov.in/pdf/Circular-49-2018.pdf

Order-01/2018-GST
Date: 28-03-2018
Subject:
Extension of date for submitting the statement in FORM GST TRAN-2
English:
https://cbic-gst.gov.in/pdf/Order_01_2018.pdf

Order-11/2017-GST
Date: 21-12-2017
Subject:
Extension of time limit for intimation of details of stock held on the date preceding the date from which the option for composition levy is exercised in FORM GST CMP-03
English:
https://cbic-gst.gov.in/pdf/Order_11_CMP_03.pdf

Order-10/2017-GST
Date: 15-11-2017
Subject:
Seeks to extend the due date for revision of FORM GST TRAN-1
English:
https://cbic-gst.gov.in/pdf/order10-cgst.pdf

Order-09/2017-GST
Date: 15-11-2017
Subject:
Seeks to extend the due date for submitting FORM GST TRAN-1
English:
https://cbic-gst.gov.in/pdf/order9-cgst.pdf

Order-08/2017-GST
Date: 28-10-2017
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1 under rule 120A
English:
https://cbic-gst.gov.in/pdf/order8-cgst.pdf

Order-07/2017-GST
Date: 28-10-2017
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1 under rule 117
English:
https://cbic-gst.gov.in/pdf/order7-cgst.pdf

Order-06/2017-GST
Date: 28-10-2017
Subject:
Extension of time limit for submitting application in FORM GST REG-26
English:
https://cbic-gst.gov.in/pdf/order6-cgst.pdf

Order-05/2017-GST
Date: 28-10-2017
Subject:
Extension of time limit for intimation of details of stock in FORM GST CMP-03
English:
https://cbic-gst.gov.in/pdf/order5-cgst.pdf

Order-04/2017-GST
Date: 29-09-2017
Subject:
Extension of time limit for intimation of details in FORM GST CMP-03
English:
https://cbic-gst.gov.in/pdf/order4-cgst.pdf

Order-03/2017
Date: 21-09-2017
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1
English:
https://cbic-gst.gov.in/pdf/Order-No-3.pdf

Order-02/2017
Date: 18-09-2017
Subject:
Extension of time limit for submitting the declaration in FORM GST TRAN-1
English:
https://cbic-gst.gov.in/pdf/order2-cgst.pdf

Order-01/2017
Date: 21-07-2017
Subject:
Extension of date for filing option for composition scheme
English:
https://cbic-gst.gov.in/pdf/order1-gst.pdf
"""

records = []
current_record = {}

lines = text.strip().split('\n')
i = 0
while i < len(lines):
    line = lines[i].strip()
    if not line:
        if current_record:
            records.append(current_record)
            current_record = {}
        i += 1
        continue
    
    if "Date:" not in line and "Subject:" not in line and "English:" not in line and "Hindi:" not in line and len(current_record) == 0:
        current_record['orderNumber'] = line
    elif line.startswith("Date:"):
        current_record['date'] = line.replace("Date:", "").strip()
        current_record['year'] = int(current_record['date'].split('-')[-1])
    elif line.startswith("Subject:"):
        i += 1
        current_record['title'] = lines[i].strip()
    elif line.startswith("English:"):
        i += 1
        current_record['englishUrl'] = lines[i].strip()
    elif line.startswith("Hindi:"):
        i += 1
        current_record['hindiUrl'] = lines[i].strip()
    i += 1

if current_record:
    records.append(current_record)

def categorize(subject):
    s = subject.lower()
    if 'tran-1' in s or 'tran 1' in s:
        return 'TRAN-1 / Transitional Compliance'
    if 'tran-2' in s or 'tran 2' in s:
        return 'TRAN-2 / Transitional Compliance'
    if 'composition' in s or 'cmp-03' in s:
        return 'Composition Scheme'
    if 'return' in s or 'gstr-9' in s or 'gstr-8' in s:
        return 'Returns'
    if 'itc' in s:
        return 'ITC'
    if 'registration' in s or 'reg-26' in s:
        return 'Registration'
    if 'e-commerce' in s:
        return 'E-Commerce'
    if 'assessment' in s or 'recovery' in s or 'sections 73,74' in s:
        return 'Assessment / Recovery'
    if 'consumer welfare fund' in s:
        return 'Consumer Welfare Fund'
    if 'e-way bill' in s or 'movement' in s:
        return 'E-Way Bill / Movement'
    return 'Other GST'

# process records
ts_code = """export interface GSTOrder {
  id: string;
  orderNumber: string;
  date: string;
  year: number;
  title: string;
  category?: string;
  applicableLaw?: string;
  rules?: string[];
  sections?: string[];
  status?: 'Historical' | 'Current' | 'Amended' | 'Superseded';
  recordType?: 'Order' | 'Source Entry — Circular-labelled';
  englishUrl?: string;
  hindiUrl?: string;
  source: string;
  sourceUrl: string;
}

export const gstOrdersData: GSTOrder[] = """

out_records = []
for r in records:
    o = {
        "id": r['orderNumber'].lower().replace('/', '-').replace(' ', '-'),
        "orderNumber": r['orderNumber'],
        "date": r['date'],
        "year": r['year'],
        "title": r['title'],
        "category": categorize(r['title']),
        "applicableLaw": "CGST Act / Rules",
        "status": "Historical", # as per prompt
        "recordType": "Source Entry — Circular-labelled" if r['orderNumber'] == "49/23/2018-GST" else "Order",
        "englishUrl": r.get('englishUrl'),
        "source": "CBIC",
        "sourceUrl": "https://cbic-gst.gov.in/"
    }
    if 'hindiUrl' in r:
        o["hindiUrl"] = r['hindiUrl']
        
    out_records.append(o)

ts_code += json.dumps(out_records, indent=2) + ";\n"

with open("c:\\Projects\\ark_associates\\src\\data\\gstOrdersData.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)
