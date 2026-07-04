import os
from bs4 import BeautifulSoup

def extract_main(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    # Let's try to find the main content. Usually it's in a div with class 'container' or 'content' or 'main'
    # By inspecting the typical ASP.NET template, there's usually a content area
    # Let's remove header, footer, script, style, nav, aside
    for tag in soup(['header', 'footer', 'script', 'style', 'nav', 'aside', 'iframe']):
        tag.decompose()
        
    # We can print the text of the body, or look for specific elements
    print(f"--- {os.path.basename(filepath)} ---")
    
    # usually the main content is inside a form with id aspnetForm or something, but let's just find the first main div
    main_div = soup.find('div', class_='content')
    if not main_div:
        main_div = soup.find('div', class_='container')
        
    if main_div:
        print(main_div.get_text(separator='\n', strip=True)[:1000])
    else:
        print("No main div found")

files = [
    r"c:\Projects\ark_associates\legacy_site\irkandassociates.com\ContactUs.aspx.html",
    r"c:\Projects\ark_associates\legacy_site\irkandassociates.com\Career.aspx.html"
]

for f in files:
    extract_main(f)
