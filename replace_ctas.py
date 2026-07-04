import os

target_dir = r"c:\Projects\ark_associates\src\pages\services"

files_to_update = [
    "IndianSubsidiary.tsx",
    "NidhiCompany.tsx",
    "PrivateLimitedCompany.tsx",
    "ProducerCompany.tsx",
    "Proprietorship.tsx",
    "PublicLimitedCompany.tsx",
    "Section8Company.tsx",
    "SocietyRegistration.tsx",
    "TrustRegistration.tsx"
]

for filename in files_to_update:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Add imports if not present
    if "import ServiceCTA" not in content:
        css_import = f"import './{filename.replace('.tsx', '.css')}';"
        new_imports = css_import + "\nimport ServiceCTA from '../../components/shared/ServiceCTA';\nimport RelatedServices from '../../components/shared/RelatedServices';"
        content = content.replace(css_import, new_imports)
        
    # 2. Replace the bottom sections
    cta_marker = "{/* Bottom CTA */}"
    if cta_marker not in content:
        # Fallback to classname
        cta_marker = '<section className="bottom-cta-section'
        
    if cta_marker in content:
        idx = content.find(cta_marker)
        if idx != -1:
            # We slice the content up to the marker
            new_content = content[:idx]
            
            # Append the new components and the closing tags
            new_content += """<ServiceCTA serviceName={service.name} />
      <RelatedServices services={relatedServices} />
    </div>
  );
};
"""
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
    else:
        print(f"Could not find CTA marker in {filename}")

