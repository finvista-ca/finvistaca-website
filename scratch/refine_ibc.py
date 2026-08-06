import re

def process_ibc():
    with open('src/pages/knowledge-base/CompetitionAct.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace imports
    content = re.sub(
        r"import \{.*?\} from '../../data/competitionActData';",
        """import { 
  ibcParts as competitionChapters, 
  importantIbcSections as importantCompetitionSections, 
  complianceDashboardItems, 
  featuredTopics, 
  relatedActs,
  ibcSections as competitionSections
} from '../../data/ibcData';""",
        content,
        flags=re.DOTALL
    )

    # 2. Replace component name
    content = content.replace('CompetitionAct', 'InsolvencyBankruptcyCode')
    
    # 3. Replace titles
    content = content.replace('The Competition Act, 2002', 'Insolvency and Bankruptcy Code, 2016')
    content = content.replace('Explore the complete framework of the Competition Act', 'Explore the complete framework of the Insolvency and Bankruptcy Code')
    
    # 4. Fix Stats
    content = content.replace('15+', '5+')
    content = content.replace('66', '255')
    content = content.replace('IX', 'V')
    
    with open('src/pages/knowledge-base/InsolvencyBankruptcyCode.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    process_ibc()
