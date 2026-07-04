import os

files_to_fix = [
    r'c:\Projects\ark_associates\src\pages\services\LLP.tsx',
    r'c:\Projects\ark_associates\src\pages\services\OnePersonCompany.tsx',
    r'c:\Projects\ark_associates\src\pages\services\Partnership.tsx'
]

for path in files_to_fix:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('initial={ opacity: 0, height: 0 }', 'initial={{ opacity: 0, height: 0 }}')
    content = content.replace('animate={ opacity: 1, height: "auto" }', 'animate={{ opacity: 1, height: "auto" }}')
    content = content.replace('exit={ opacity: 0, height: 0 }', 'exit={{ opacity: 0, height: 0 }}')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
