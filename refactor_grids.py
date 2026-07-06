import os
import re

replacements = {
    "src/components/home/Associations.css": r"repeat\(auto-fit, minmax(150px, 1fr)\)",
    "src/components/home/KnowledgeHub.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/components/home/LatestUpdates.css": r"repeat\(auto-fit, minmax(300px, 1fr)\)",
    "src/components/home/ServicesSection.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/components/home/StatisticsSection.css": r"repeat\(auto-fit, minmax(150px, 1fr)\)",
    "src/components/home/WhyChooseUs.css": r"repeat\(auto-fit, minmax(250px, 1fr)\)",
    "src/components/layout/ResourceLayout.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/components/services/ServiceLayout.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/pages/About.css": r"repeat\(auto-fit, minmax(250px, 1fr)\)",
    "src/pages/Calculator.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/pages/KnowledgeBase.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
    "src/pages/NewsFeed.css": r"repeat\(auto-fit, minmax(280px, 1fr)\)",
}

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.css'):
            path = os.path.join(root, file)
            # normalize path separator for dictionary lookup
            norm_path = path.replace("\\", "/")
            if norm_path in replacements:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace repeat(2, 1fr), repeat(3, 1fr), repeat(4, 1fr)
                new_content = re.sub(r'repeat\([2-5],\s*1fr\)', replacements[norm_path].replace("\\", ""), content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated grids in {norm_path}")

print("Done")
