import requests
from bs4 import BeautifulSoup
import json
import time
import re

BASE_URL = "https://gstcouncil.gov.in"
START_URL = "https://gstcouncil.gov.in/cgst-tax-notification"

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
    else:
        return 'Other CGST'

def extract_year(notif_no, date_str):
    match = re.search(r'\b(20[1-9][0-9])\b', notif_no)
    if match:
        return int(match.group(1))
    match = re.search(r'\b(20[1-9][0-9])\b', date_str)
    if match:
        return int(match.group(1))
    return 2025 # default fallback

def scrape_notifications():
    notifications = []
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
                
            notif_no_td = cols[1]
            english_td = cols[2]
            hindi_td = cols[3]
            subject_td = cols[4]
            
            notif_no = notif_no_td.get_text(strip=True)
            subject = subject_td.get_text(strip=True)
            
            english_url = ""
            eng_a = english_td.find('a')
            if eng_a and 'href' in eng_a.attrs:
                english_url = eng_a['href']
                if not english_url.startswith('http'):
                    english_url = BASE_URL + english_url
                    
            hindi_url = ""
            hin_a = hindi_td.find('a')
            if hin_a and 'href' in hin_a.attrs:
                hindi_url = hin_a['href']
                if not hindi_url.startswith('http'):
                    hindi_url = BASE_URL + hindi_url
                    
            if notif_no in seen:
                continue
            seen.add(notif_no)
            
            year = extract_year(notif_no, "")
            category = categorize(subject)
            
            notif = {
                "id": notif_no.replace('/', '-').replace(' ', '-').lower(),
                "notificationNumber": notif_no,
                "date": f"{year}", # Best effort since exact date isn't cleanly separated
                "year": year,
                "title": subject,
                "category": category,
                "applicableLaw": "CGST Act / Rules",
                "source": "GST Council",
                "sourceUrl": "https://gstcouncil.gov.in/cgst-tax-notification",
            }
            
            if english_url:
                notif["englishUrl"] = english_url
            if hindi_url:
                notif["hindiUrl"] = hindi_url
                
            notifications.append(notif)
            
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
    print(f"Total notifications extracted: {len(notifications)}")
    
    ts_code = "export interface GSTNotification {\n"
    ts_code += "  id: string;\n"
    ts_code += "  notificationNumber: string;\n"
    ts_code += "  date?: string;\n"
    ts_code += "  year: number;\n"
    ts_code += "  title: string;\n"
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
    
    ts_code += "export const gstNotificationsData: GSTNotification[] = " + json.dumps(notifications, indent=2) + ";\n"
    
    with open("c:\\Projects\\ark_associates\\src\\data\\gstNotificationsData.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)

if __name__ == "__main__":
    scrape_notifications()
