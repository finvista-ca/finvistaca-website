import os
import re

def replace_in_files(directory):
    # Match Finvista Chartered Accountants, FinVista Chartered Accountants, FINVISTA Chartered Accountants
    # Finvista Chartered Accountancy, Finvista Chartered Accountancy Firm
    # case insensitive
    pattern = re.compile(r'finvista\s+chartered\s+accountan(?:ts|cy)(?:\s+firm)?', re.IGNORECASE)
    
    count_files = 0
    count_replacements = 0
    
    for root, dirs, files in os.walk(directory):
        # exclude node_modules, .git, dist, legacy_site if it's not needed (user said entire codebase, let's include legacy_site just in case, but definitely exclude node_modules and dist)
        dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', 'dist', '.gemini', 'build')]
        
        for file in files:
            # only process text files (ts, tsx, html, json, md, css, js)
            if file.endswith(('.tsx', '.ts', '.html', '.js', '.jsx', '.json', '.md', '.css')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if pattern.search(content):
                        # We need to maintain capitalization somewhat? "FinvistaCA" is the target, but user said:
                        # "The final website should consistently refer to the firm as: FINVISTACA or FinvistaCA depending on the existing capitalization/style of the surrounding content."
                        # If the matched text is all caps (FINVISTA CHARTERED ACCOUNTANTS), replace with FINVISTACA
                        # Else replace with FinvistaCA
                        
                        def replacer(match):
                            matched_text = match.group(0)
                            if matched_text.isupper():
                                return "FINVISTACA"
                            return "FinvistaCA"
                            
                        new_content, num_subs = pattern.subn(replacer, content)
                        
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                            
                        count_files += 1
                        count_replacements += num_subs
                        print(f"Updated {filepath} ({num_subs} replacements)")
                except Exception as e:
                    print(f"Could not process {filepath}: {e}")

    print(f"Total files modified: {count_files}")
    print(f"Total replacements: {count_replacements}")

if __name__ == '__main__':
    replace_in_files('c:/Projects/ark_associates')
