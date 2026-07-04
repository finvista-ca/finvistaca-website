import json
import re
import os

log_path = r"C:\Users\satvi\.gemini\antigravity\brain\ce942da6-9998-4a26-87be-afdbc319ab7d\.system_generated\logs\transcript_full.jsonl"
target_dir = r"c:\Projects\ark_associates\src\pages\services"

files_to_restore = [
    "Proprietorship.tsx", "Partnership.tsx", "OnePersonCompany.tsx", "LLP.tsx"
]

found_files = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            data_str = json.dumps(data)
            
            for filename in files_to_restore:
                file_marker = f"File Path: `file:///c:/Projects/ark_associates/src/pages/services/{filename}`"
                if file_marker in data_str:
                    if filename not in found_files:
                        if "1: import React" in data_str:
                            found_files[filename] = data_str
        except Exception:
            pass

for filename, text in found_files.items():
    parts = text.split("1: ", 1)
    if len(parts) > 1:
        rest = "1: " + parts[1]
        raw_lines = rest.split("\\n")
        
        parsed_lines = []
        for rl in raw_lines:
            match = re.match(r'^(\d+):\s(.*)', rl)
            if match:
                parsed_lines.append(match.group(2))
            else:
                break
                
        filepath = os.path.join(target_dir, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("\n".join(parsed_lines))
        print(f"Restored {filename} from transcript!")

