import os
import re

src_dir = r"c:\Projects\ark_associates\src"

def reduce_rem(match):
    val = float(match.group(1))
    # reduce by 40-50%
    if val >= 8:
        new_val = 4
    elif val >= 6:
        new_val = 3
    elif val >= 5:
        new_val = 2.5
    elif val >= 4:
        new_val = 2
    elif val >= 3:
        new_val = 1.5
    else:
        new_val = val
    
    # if val is small, leave it or reduce slightly? 
    # Usually sections use 4rem+ for big spaces. 
    # Let's format nicely:
    if new_val.is_integer():
        return f"{int(new_val)}rem"
    return f"{new_val}rem"

# We only want to touch padding and margin rules.
def process_css_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def repl(m):
        prop = m.group(1)
        val_str = m.group(2)
        # find all rem values in val_str
        new_val_str = re.sub(r'\b([0-9]*\.?[0-9]+)rem\b', reduce_rem, val_str)
        
        # also reduce px if it's large, e.g. padding: 80px -> 40px
        def reduce_px(px_match):
            val = int(px_match.group(1))
            if val >= 60:
                return f"{int(val * 0.5)}px"
            return px_match.group(0)
            
        new_val_str = re.sub(r'\b([0-9]+)px\b', reduce_px, new_val_str)
        
        return f"{prop}:{new_val_str};"
        
    # Regex to match padding/margin properties
    pattern = re.compile(r'(padding[a-z-]*|margin[a-z-]*)\s*:\s*([^;]+);')
    new_content = pattern.sub(repl, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {os.path.basename(filepath)}")

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(".css"):
            process_css_file(os.path.join(root, f))
print("Done")
