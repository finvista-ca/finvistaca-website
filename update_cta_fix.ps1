$folder = "c:\Projects\ark_associates\src\pages\services"
$files = Get-ChildItem -Path $folder -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    $componentName = $file.BaseName
    
    # Clean up the broken imports that were placed at the bottom
    $content = $content -replace '(?s)\s*import ServiceCTA from.*', ""
    
    # Make sure we don't duplicate imports at the top
    $content = $content -replace '(?s)import ServiceCTA from.*?;[\r\n]+', ""
    $content = $content -replace '(?s)import RelatedServices from.*?;[\r\n]+', ""
    
    # Add imports to the top
    $imports = "import ServiceCTA from '../../components/shared/ServiceCTA';`r`nimport RelatedServices from '../../components/shared/RelatedServices';`r`n"
    $content = $content -replace 'import React', "$imports`r`nimport React"

    # Replace from {/* Bottom CTA */} down to the very end
    $pattern = '(?s)\{\/\*.*Bottom CTA.*\*\/\}.*'
    $replacement = "<ServiceCTA serviceName={service.name} />`r`n      <RelatedServices services={relatedServices} />`r`n    </div>`r`n  );`r`n};`r`n`r`nexport default $componentName;"

    $content = $content -replace $pattern, $replacement

    Set-Content -Path $file.FullName -Value $content -NoNewline
}
