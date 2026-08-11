const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'knowledge-base');
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.endsWith('.tsx')) return;
  const filePath = path.join(dir, f);
  let c = fs.readFileSync(filePath, 'utf8');

  // Fix all lucide-react imports
  c = c.replace(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];/g, 
    "import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Briefcase, Users, Shield, TrendingUp, Scale, BookOpen, FileText, CheckCircle, Landmark, Hash, Building2, Clock, FileSignature, ArrowRight, Link as LinkIcon, BarChart, UserCheck, Heart } from 'lucide-react';");
  
  // Fix Link import if missing in InsolvencyBankruptcyCode
  if (f === 'InsolvencyBankruptcyCode.tsx') {
    if (!c.includes("import { Link }")) {
      c = c.replace("import { InternalPageHero } from '../../components/layout/InternalPageHero';", "import { InternalPageHero } from '../../components/layout/InternalPageHero';\nimport { Link } from 'react-router-dom';");
    }
    // Fix chapterNumber TS error
    c = c.replace(/chapter\.chapterNumber/g, 'chapter.partNumber');
    c = c.replace(/Chapter \{chapter\.chapterNumber\}/g, 'Part {chapter.partNumber}');
  }

  // Fix InterestTaxAct state errors
  if (f === 'InterestTaxAct.tsx') {
    if (!c.includes('const [expandedSection,')) {
      c = c.replace("const [searchTerm, setSearchTerm] = useState('');", 
        "const [searchTerm, setSearchTerm] = useState('');\n  const [expandedSection, setExpandedSection] = useState<string | null>(null);\n  const toggleImportantSection = (sec: string) => setExpandedSection(p => p === sec ? null : sec);\n  const [activeReferenceSection, setActiveReferenceSection] = useState<string | null>(null);\n  const toggleReferenceSection = (id: string, e: any) => { e.preventDefault(); setActiveReferenceSection(p => p === id ? null : id); };");
    }
  }

  // Fix LlpAct state errors
  if (f === 'LlpAct.tsx') {
    if (!c.includes('const [expandedChapter,')) {
      c = c.replace("const [searchTerm, setSearchTerm] = useState('');",
        "const [searchTerm, setSearchTerm] = useState('');\n  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);\n  const toggleChapter = (c: string) => setExpandedChapter(p => p === c ? null : c);");
    }
  }

  fs.writeFileSync(filePath, c);
});
console.log('Done!');
