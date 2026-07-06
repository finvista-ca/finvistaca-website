import os
import re

css_files = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.css'):
            css_files.append(os.path.join(root, file))

# We want to replace basic repeat(X, 1fr) with a fluid minmax if it's currently hardcoded without media queries, OR if it's inside a media query, we can just let it be but ensure there's no overflow.
# Actually, the most common issue is `width: 100vw;` or fixed widths like `width: 500px;`.
# Let's search for fixed widths.

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace fixed pixel widths (e.g. width: 400px) with max-width: 100%
    # But only if it's not a small icon size. Let's say > 250px.
    def width_replacer(match):
        val = int(match.group(1))
        if val > 250:
            return f'width: 100%; max-width: {val}px;'
        return match.group(0)
    
    content = re.sub(r'width:\s*(\d+)px;', width_replacer, content)

    # Replace grid-template-columns: repeat(3, 1fr) with auto-fit if it's not in a media query? No, many are in media queries.
    
    # Just fix the gaps to be fluid clamps.
    # gap: 1rem; -> gap: clamp(1rem, 2vw, 2rem);
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for f in css_files:
    replace_in_file(f)
