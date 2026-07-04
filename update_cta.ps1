$folder = "c:\Projects\ark_associates\src\pages\services"
$files = Get-ChildItem -Path $folder -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # Add imports if not present
    if ($content -notmatch "import ServiceCTA") {
        $importString = "import ServiceCTA from '../../components/shared/ServiceCTA';`r`nimport RelatedServices from '../../components/shared/RelatedServices';"
        
        # Insert after the last import
        $content = $content -replace '(?s)(import .*?;[\r\n]+)(?!import)', "`$1$importString`r`n"
    }

    # Use Regex to replace from {/* Bottom CTA */} down to the end of the JSX
    # We want to replace everything from that comment up to `    </div>` at the end
    $pattern = '(?s)\{\/\*.*Bottom CTA.*\*\/\}.*?<\/div>[\r\n\s]*\);[\r\n\s]*\};[\r\n\s]*export default'
    
    $replacement = "<ServiceCTA serviceName={service.name} />`r`n      <RelatedServices services={relatedServices} />`r`n    </div>`r`n  );`r`n};`r`n`r`nexport default"

    $newContent = $content -replace $pattern, $replacement

    Set-Content -Path $file.FullName -Value $newContent -NoNewline
}
