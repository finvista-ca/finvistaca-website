import requests
from bs4 import BeautifulSoup
import json
import time
import re

BASE_URL = "https://gstcouncil.gov.in"
START_URL = "https://gstcouncil.gov.in/cgst-circulars"

def categorize(subject):
    subject = subject.lower()
    if 'gstr' in subject or 'return' in subject:
        return 'Returns'
    elif 'late fee' in subject or 'waiver' in subject or 'extend the due date' in subject:
        return 'Late Fee / Compliance Relief'
    elif 'registration' in subject:
        return 'Registration'
    elif 'input tax credit' in subject or 'itc' in subject:
        return 'Input Tax Credit'
    elif 'e-way' in subject:
        return 'E-Way Bill'
    elif 'invoice' in subject or 'invoicing' in subject:
        return 'Invoicing'
    elif 'rule' in subject or 'rules' in subject:
        return 'CGST Rules'
    elif 'assessment' in subject:
        return 'Assessment'
    elif 'demand' in subject or 'recovery' in subject:
        return 'Demand & Recovery'
    elif 'payment' in subject:
        return 'Payments'
    elif 'administration' in subject or 'officer' in subject:
        return 'Tax Administration'
    elif 'refund' in subject:
        return 'Refunds'
    elif 'rate' in subject or 'classification' in subject:
        return 'Tax Rates & Classification'
    elif 'e-commerce' in subject:
        return 'E-Commerce'
    elif 'place of supply' in subject:
        return 'Place of Supply'
    elif 'export' in subject or 'import' in subject:
        return 'Export / Import'
    else:
        return 'Other CGST'

def extract_year(date_str, notif_no):
    match = re.search(r'\b(20[1-9][0-9])\b', date_str)
    if match:
        return int(match.group(1))
    match = re.search(r'\b(20[1-9][0-9])\b', notif_no)
    if match:
        return int(match.group(1))
    return 2025 # default fallback

def scrape_circulars():
    circulars = []
    seen = set()
    page = 0
    pages_processed = 0
    pages_failed = 0
    
    while True:
        url = START_URL if page == 0 else f"{START_URL}?page={page}"
        print(f"Scraping page {page}...")
        try:
            response = requests.get(url, timeout=15)
            if response.status_code != 200:
                print(f"Failed to fetch page {page}. Status code: {response.status_code}")
                pages_failed += 1
                break
        except Exception as e:
            print(f"Exception fetching page {page}: {e}")
            pages_failed += 1
            break
            
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table', class_='customdatatable')
        if not table:
            print(f"No table found on page {page}.")
            break
            
        tbody = table.find('tbody')
        if not tbody:
            print(f"No tbody found on page {page}.")
            break
            
        rows = tbody.find_all('tr')
        if not rows:
            print(f"No rows found on page {page}.")
            break
            
        for row in rows:
            cols = row.find_all('td')
            if len(cols) < 5:
                continue
                
            circular_no_td = cols[1]
            circular_file_td = cols[2]
            date_td = cols[3]
            subject_td = cols[4]
            
            circular_no = circular_no_td.get_text(strip=True)
            subject = subject_td.get_text(strip=True)
            date_str = date_td.get_text(strip=True)
            
            # The page structure for circulars usually has one document under "Circular File". 
            # We'll map this to englishUrl. 
            # Hindi is not explicitly separated by columns like in notifications. 
            # We will extract all valid links and look for indications of Hindi.
            
            english_url = ""
            hindi_url = ""
            
            links = circular_file_td.find_all('a')
            for a in links:
                if 'href' in a.attrs:
                    href = a['href']
                    if not href.startswith('http'):
                        href = BASE_URL + href
                    if 'hindi' in href.lower() or 'hin' in href.lower() or 'hnd' in href.lower():
                        hindi_url = href
                    else:
                        english_url = href
            
            # Dedup key: Circular No + Date + Subject
            dedup_key = f"{circular_no}|{date_str}|{subject}"
            
            if dedup_key in seen:
                continue
            seen.add(dedup_key)
            
            year = extract_year(date_str, circular_no)
            category = categorize(subject)
            
            circ = {
                "id": circular_no.replace('/', '-').replace(' ', '-').lower(),
                "circularNumber": circular_no,
                "date": date_str,
                "year": year,
                "title": subject,
                "category": category,
                "applicableLaw": "CGST Act / Rules",
                "source": "GST Council",
                "sourceUrl": "https://gstcouncil.gov.in/cgst-circulars",
            }
            
            if english_url:
                circ["englishUrl"] = english_url
            if hindi_url:
                circ["hindiUrl"] = hindi_url
                
            circulars.append(circ)
            
        pages_processed += 1
        
        # Check if next page exists
        pager = soup.find('nav', class_='pager')
        if not pager:
            break
        next_page_link = pager.find('li', class_='pager__item--next')
        if not next_page_link:
            break
            
        page += 1
        time.sleep(1) # Be nice to the server

    print(f"Total pages processed: {pages_processed}")
    print(f"Total pages failed: {pages_failed}")
    print(f"Total circulars extracted: {len(circulars)}")
    
    ts_code = "export interface GSTCircular {\n"
    ts_code += "  id: string;\n"
    ts_code += "  circularNumber: string;\n"
    ts_code += "  date?: string;\n"
    ts_code += "  year: number;\n"
    ts_code += "  title: string;\n"
    ts_code += "  fileNumber?: string;\n"
    ts_code += "  category?: string;\n"
    ts_code += "  applicableLaw?: string;\n"
    ts_code += "  sections?: string[];\n"
    ts_code += "  summary?: string;\n"
    ts_code += "  status?: 'Current' | 'Historical' | 'Amended' | 'Superseded';\n"
    ts_code += "  englishUrl?: string;\n"
    ts_code += "  hindiUrl?: string;\n"
    ts_code += "  source: string;\n"
    ts_code += "  sourceUrl: string;\n"
    ts_code += "}\n\n"
    
    ts_code += "export const gstCircularsData: GSTCircular[] = " + json.dumps(circulars, indent=2) + ";\n"
    
    with open("c:\\Projects\\ark_associates\\src\\data\\gstCircularsData.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)

if __name__ == "__main__":
    scrape_circulars()
