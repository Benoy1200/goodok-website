/**
 * 图片水印批量处理脚本
 * 功能：为所有产品图片添加4个"goodok"水印，透明度15%
 * 
 * 使用方法：
 * 1. 安装依赖：npm install sharp
 * 2. 运行脚本：node scripts/add-watermark.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 配置
const WATERMARK_TEXT = 'goodok';
const OPACITY = 0.15; // 15% 透明度
const PRODUCTS_DIR = path.join(__dirname, '../public/images/products');
const OUTPUT_DIR = path.join(__dirname, '../public/images/products-watermarked');

// 创建水印SVG
function createWatermarkSVG(width, height) {
    const fontSize = Math.min(width, height) / 10;
    const positions = [
        { x: width * 0.15, y: height * 0.2 },
        { x: width * 0.75, y: height * 0.25 },
        { x: width * 0.2, y: height * 0.75 },
        { x: width * 0.7, y: height * 0.8 },
    ];
    
    const textElements = positions.map(pos => 
        `<text x="${pos.x}" y="${pos.y}" 
            font-family="Arial, sans-serif" 
            font-size="${fontSize}" 
            font-weight="bold"
            fill="white" 
            opacity="${OPACITY}"
            transform="rotate(-30 ${pos.x} ${pos.y})">${WATERMARK_TEXT}</text>`
    ).join('');
    
    return Buffer.from(`
        <svg width="${width}" height="${height}">
            ${textElements}
        </svg>
    `);
}

// 处理单张图片
async function processImage(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        const { width, height } = metadata;
        
        const watermarkSVG = createWatermarkSVG(width, height);
        
        await image
            .composite([{
                input: watermarkSVG,
                top: 0,
                left: 0,
            }])
            .toFile(outputPath);
        
        console.log(`✓ 处理完成: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`✗ 处理失败: ${path.basename(inputPath)} - ${error.message}`);
    }
}

// 递归获取所有图片文件
function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            getAllImages(filePath, fileList);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

// 主函数
async function main() {
    console.log('🔧 开始批量添加水印...\n');
    
    // 创建输出目录
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // 获取所有图片
    const images = getAllImages(PRODUCTS_DIR);
    console.log(`📁 找到 ${images.length} 张图片\n`);
    
    // 处理每张图片
    for (const imagePath of images) {
        const relativePath = path.relative(PRODUCTS_DIR, imagePath);
        const outputPath = path.join(OUTPUT_DIR, relativePath);
        
        // 确保输出子目录存在
        const outputSubDir = path.dirname(outputPath);
        if (!fs.existsSync(outputSubDir)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
        }
        
        await processImage(imagePath, outputPath);
    }
    
    console.log(`\n✅ 水印添加完成！输出目录: ${OUTPUT_DIR}`);
    console.log('\n💡 提示: 如果满意结果，可以用水印图片替换原图片：');
    console.log('   mv public/images/products public/images/products-original');
    console.log('   mv public/images/products-watermarked public/images/products');
}

main().catch(console.error);
