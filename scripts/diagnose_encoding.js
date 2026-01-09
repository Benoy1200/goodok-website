const fs = require('fs');
const path = require('path');

const filePath = 'e:\\retail-miniapp-backend\\goodok-website\\app\\resources\\blog\\how-to-design-cosmetics-store\\page.tsx';

try {
    // 尝试以 latin1 (binary) 读取，这通常保留字节原样
    const buffer = fs.readFileSync(filePath);
    
    // 尝试将其解码为 utf8，看看是否报错，或者尝试其它常见的 Windows 编码
    // PowerShell Set-Content default is often ANSI (Windows-1252 in West, GBK in China)
    // 让我们尝试将其视为 Windows-1252 或者是 GBK
    // 但 Node.js 原生不支持 GBK，可能需要 iconv-lite，但环境里可能没有。
    // 我们先试试如果不做任何处理直接写回 UTF-8 会怎样，或者检查一下文件头。
    
    console.log('File size:', buffer.length);
    console.log('First 100 bytes:', buffer.slice(0, 100));
    
    // 简单的恢复尝试：读取为 string (buffer默认utf8，如果不合法会抛错或乱码)
    // 之前的错误是 invalid utf-8 sequence，说明文件里有非UTF-8序列。
    
    // 我们可以尝试把 buffer 里的内容视为 'latin1' 读出来，然后如果不乱码，那可能就是它被存成了 latin1
    const content = buffer.toString('utf8'); 
    console.log('Read as UTF-8 success (partial):', content.slice(0, 100));
} catch (e) {
    console.log('Error reading as UTF-8:', e.message);
    
    try {
        const buffer = fs.readFileSync(filePath);
        // 如果是 GBK 或其他单字节编码，我们可以尝试以此读取。
        // 由于没有 iconv，我们只能做有限的尝试。
        // 如果之前是 PowerShell Set-Content，它可能把 UTF-8 的字节当成了 ANSI 字符写进去了？
        // 或者把字符串按 ANSI 编码写进去了。
        
        console.log('Attempting verify file content...');
    } catch (e2) {
        console.log('Error:', e2);
    }
}
