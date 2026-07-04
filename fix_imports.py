import os
import re

# Fix LLP.tsx duplicate 'Building'
p_llp = r'c:\Projects\ark_associates\src\pages\services\LLP.tsx'
with open(p_llp, 'r', encoding='utf-8') as f:
    content = f.read()
# The script placed Building twice in the import.
# I'll just remove the second occurrence or do a regex replace.
content = re.sub(r'Building, (.*?)Building, ', r'Building, \1', content, flags=re.DOTALL)
# Or I can just remove Building, if it's there twice
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'import {' in line or 'from \'lucide-react\'' in line or 'Building' in line:
        pass
# Actually, the python script generated:
# import { 
#   Building, Briefcase, ...
#   Building, FileSignature, ...
with open(p_llp, 'w', encoding='utf-8') as f:
    f.write(content)


# Fix Partnership.tsx duplicate 'Users'
p_part = r'c:\Projects\ark_associates\src\pages\services\Partnership.tsx'
with open(p_part, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'Users, (.*?)Users', r'Users, \1', content, flags=re.DOTALL)
with open(p_part, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix PublicLimitedCompany missing imports
p_pub = r'c:\Projects\ark_associates\src\pages\services\PublicLimitedCompany.tsx'
with open(p_pub, 'r', encoding='utf-8') as f:
    content = f.read()
# Add FileSignature, BookOpen to lucide-react imports if not present
if 'FileSignature' not in content[:1000]:
    content = content.replace("import { \n  Building", "import { \n  Building, FileSignature, BookOpen")
elif 'FileSignature' not in content.split("from 'lucide-react'")[0]:
    content = content.replace("from 'lucide-react'", ", FileSignature, BookOpen\n} from 'lucide-react'")
with open(p_pub, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix Section8Company missing XOctagon
p_sec = r'c:\Projects\ark_associates\src\pages\services\Section8Company.tsx'
with open(p_sec, 'r', encoding='utf-8') as f:
    content = f.read()
if 'XOctagon' not in content.split("from 'lucide-react'")[0]:
    content = content.replace("from 'lucide-react'", ", XOctagon\n} from 'lucide-react'")
with open(p_sec, 'w', encoding='utf-8') as f:
    f.write(content)

