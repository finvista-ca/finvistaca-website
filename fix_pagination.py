import os

files = [
    'src/components/layout/ResourceLayout.tsx',
    'src/pages/knowledge-base/CostInflationIndex.tsx',
    'src/pages/knowledge-base/RatesOfDepreciationCompanyAct.tsx',
    'src/pages/knowledge-base/RatesOfIncomeTax.tsx',
    'src/pages/knowledge-base/RatesOfNscInterest.tsx',
    'src/pages/knowledge-base/TdsRatesForNri.tsx'
]

prev_str = 'onClick={() => setPage(p => Math.max(1, p - 1))}'
prev_rep = 'onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: \"smooth\" }); }}'

next_str = 'onClick={() => setPage(p => Math.min(totalPages, p + 1))}'
next_rep = 'onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: \"smooth\" }); }}'

num_str = 'onClick={() => setPage(p)}'
num_rep = 'onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: \"smooth\" }); }}'

num_str2 = 'onClick={() => setPage(p as number)}'
num_rep2 = 'onClick={() => { setPage(p as number); window.scrollTo({ top: 0, behavior: \"smooth\" }); }}'

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(prev_str, prev_rep)
    content = content.replace(next_str, next_rep)
    content = content.replace(num_str, num_rep)
    content = content.replace(num_str2, num_rep2)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated pagination onClick handlers')
