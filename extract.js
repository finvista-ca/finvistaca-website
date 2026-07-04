import fs from 'fs';
import path from 'path';

const legacyDir = path.join(process.cwd(), 'legacy_site', 'irkandassociates.com');
const outputFile = path.join(process.cwd(), 'src', 'data', 'extractedResources.ts');

const files = fs.readdirSync(legacyDir).filter(f => f.endsWith('.aspx.html'));

let extractedData = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(legacyDir, file), 'utf-8');
    
    // Find the master table rows
    // We'll look for <tr class="rgRow Row50"... and <tr class="rgAltRow Row50"...
    const rowRegex = /<tr class="rg(?:Alt)?Row Row50"[^>]*>([\s\S]*?)<\/tr>/g;
    
    let rows = [];
    let match;
    
    while ((match = rowRegex.exec(content)) !== null) {
        const rowContent = match[1];
        // extract tds
        const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
        let tds = [];
        let tdMatch;
        while ((tdMatch = tdRegex.exec(rowContent)) !== null) {
            // clean up html tags
            let text = tdMatch[1].replace(/<[^>]+>/g, '').trim();
            // decode html entities
            text = text.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
            tds.push(text);
        }
        if (tds.length > 0) {
            rows.push(tds);
        }
    }
    
    // Also look for links in lists if it's not a table
    // Some pages like tools/rates might be lists
    if (rows.length === 0) {
        const linkRegex = /<li>\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/li>/g;
        let links = [];
        let linkMatch;
        while ((linkMatch = linkRegex.exec(content)) !== null) {
            let href = linkMatch[1];
            let text = linkMatch[2].replace(/<[^>]+>/g, '').trim();
            // ignore navigation links
            if (!href.includes('ContactUs') && !href.includes('Career') && !href.includes('index')) {
                links.push({ href, text });
            }
        }
        if (links.length > 0) {
            rows = links;
        }
    }

    if (rows.length > 0) {
        const key = file.replace('.aspx.html', '');
        extractedData[key] = rows;
    }
});

const tsContent = `// Auto-generated extracted data from legacy site
export const legacyResources: Record<string, any[]> = ${JSON.stringify(extractedData, null, 2)};
`;

fs.writeFileSync(outputFile, tsContent);
console.log('Successfully extracted legacy resources to src/data/extractedResources.ts');
