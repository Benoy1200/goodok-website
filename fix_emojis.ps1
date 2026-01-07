$files = Get-ChildItem "e:\retail-miniapp-backend\goodok-website\app\resources\blog" -Name "*.tsx" -File -Recurse | ForEach-Object { Join-Path "e:\retail-miniapp-backend\goodok-website\app\resources\blog" $_ }

foreach ($file in $files) {
    Write-Host "Fixing $file"
    $content = Get-Content $file -Raw
    
    # Replace all garbled emojis
    $content = $content -replace '馃搮', '📅'
    $content = $content -replace '馃憗锔', '📚'
    $content = $content -replace '馃搵', '📖'
    $content = $content -replace '馃挕', '💡'
    $content = $content -replace '馃搻', '📋'
    $content = $content -replace '馃挰', '❓'
    $content = $content -replace '馃摎', '📚'
    $content = $content -replace '馃搹', '📋'
    $content = $content -replace '馃摳', '📷'
    $content = $content -replace '馃彧', '🏪'
    $content = $content -replace '馃挱', '📋'
    $content = $content -replace '馃摉', '📚'
    $content = $content -replace '馃挵', '💰'
    $content = $content -replace '馃拵', '💎'
    $content = $content -replace '馃幃', '🎬'
    $content = $content -replace '馃帹', '🎨'
    $content = $content -replace '馃拕', '💄'
    $content = $content -replace '馃И', '🪞'
    $content = $content -replace '馃拲', '💍'
    
    Set-Content $file -Value $content -Encoding UTF8
}

Write-Host "All files fixed!"
