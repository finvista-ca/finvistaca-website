import json
import os

log_path = r"C:\Users\satvi\.gemini\antigravity\brain\ce942da6-9998-4a26-87be-afdbc319ab7d\.system_generated\logs\transcript_full.jsonl"
target_dir = r"c:\Projects\ark_associates\src\pages\services"

files_to_restore = [
    "Proprietorship.tsx", "Partnership.tsx", "OnePersonCompany.tsx", "LLP.tsx",
    "PrivateLimitedCompany.tsx", "PublicLimitedCompany.tsx", "NidhiCompany.tsx",
    "ProducerCompany.tsx", "Section8Company.tsx", "TrustRegistration.tsx",
    "SocietyRegistration.tsx", "IndianSubsidiary.tsx"
]

file_contents = {f: None for f in files_to_restore}

# Read from bottom to top to get the latest version before my mistake
with open(log_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    try:
        data = json.loads(line)
        if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
            for tc in data['tool_calls']:
                if tc.get('name') == 'write_to_file' or tc.get('name') == 'default_api:write_to_file':
                    args = tc.get('args', {})
                    target_file = args.get('TargetFile', '')
                    if not target_file:
                        continue
                    
                    filename = os.path.basename(target_file.strip('"').strip("'"))
                    if filename in file_contents and file_contents[filename] is None:
                        # Restore
                        content = args.get('CodeContent', '')
                        file_contents[filename] = content
    except Exception as e:
        continue

for filename, content in file_contents.items():
    if content:
        # CodeContent is typically a string, might need to process if it's JSON-escaped in the script?
        # The json.loads already unescapes the JSON wrapper. So `content` should be the raw string.
        filepath = os.path.join(target_dir, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored {filename}")
    else:
        print(f"Could not find backup for {filename}")

