import os

path = r'c:\Projects\ark_associates\src\pages\services\Proprietorship.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\\"', '"')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
