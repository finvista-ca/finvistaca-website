import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"
files = [
    "CorporateTaxAdvisory.tsx",
    "InternationalTaxAdvisory.tsx",
    "TransferPricingStudy.tsx",
    "LitigationRepresentation.tsx",
    "PersonalTaxAdvisory.tsx"
]

for filename in files:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace("import WhyChooseUs from", "import { WhyChooseUs } from")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
