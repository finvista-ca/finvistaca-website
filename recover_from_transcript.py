import json
import re
import os

log_path = r"C:\Users\satvi\.gemini\antigravity\brain\ce942da6-9998-4a26-87be-afdbc319ab7d\.system_generated\logs\transcript_full.jsonl"
target_dir = r"c:\Projects\ark_associates\src\pages\services"

files_to_restore = [
    "Proprietorship.tsx", "Partnership.tsx", "OnePersonCompany.tsx", "LLP.tsx"
]

file_contents = {f: [] for f in files_to_restore}
current_file = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE' and data.get('source') == 'SYSTEM':
                # This is a system message which might contain tool response
                pass # Actually tool responses are usually in the system message or we can just regex the whole file
        except:
            pass

# Let's just read the raw text of the jsonl and regex for the file contents
with open(log_path, 'r', encoding='utf-8') as f:
    content = f.read()

for filename in files_to_restore:
    # Look for "File Path: `file:///.../filename`"
    # followed by lines like "1: import React..."
    
    # Let's find all occurrences of the file path in the transcript
    pattern = r"File Path: `file:///[^`]*" + re.escape(filename) + r"`.*?Showing lines 1 to \d+\\nThe following code has been modified.*?: <original_line>\..*?\\n(1: .*?(?=\\n(?:The above content does NOT show|\\",|\"\}$)))"
    
    matches = re.findall(pattern, content, re.DOTALL)
    if matches:
        # Get the very first match (which should be the original state when I first read it)
        text_block = matches[0]
        # Remove the line numbers "1: ", "2: ", etc.
        # Note: the lines are separated by \n because they are escaped in JSON, wait, if I did f.read(), it's raw JSON string
        # Let's decode the json properly to avoid escape issues.
        pass

# Let's write a robust parser
import json

found_files = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_responses' in data:
                # Wait, transcript has 'tool_responses'? Or is it 'content' inside a 'TOOL_RESPONSE' type?
                # Actually, in the new format, tool responses are in 'responses' or 'output' of the tool call?
                pass
            
            # Let's just search the string representation of the JSON object
            data_str = json.dumps(data)
            for filename in files_to_restore:
                if f"File Path: `file:///c:/Projects/ark_associates/src/pages/services/{filename}`" in data_str:
                    if filename not in found_files:
                        # Extract the output
                        # We can look for "1: import React"
                        if "1: import React" in data_str:
                            found_files[filename] = data_str
        except Exception:
            pass

for filename, text in found_files.items():
    # extract the lines
    # It usually starts with "1: "
    lines = []
    # find the start
    parts = text.split("1: ", 1)
    if len(parts) > 1:
        rest = "1: " + parts[1]
        # split by \n
        raw_lines = rest.split("\\n")
        
        parsed_lines = []
        for rl in raw_lines:
            # rl looks like "1: import React..."
            match = re.match(r'^(\d+):\s(.*)', rl)
            if match:
                parsed_lines.append(match.group(2))
            else:
                # might be the end message
                break
        
        filepath = os.path.join(target_dir, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("\n".join(parsed_lines))
        print(f"Restored {filename} from transcript!")

