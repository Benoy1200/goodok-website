const fs = require('fs');
const path = require('path');

const baseDir = 'e:\\retail-miniapp-backend\\goodok-website\\public\\images\\products';
const categories = [
    { name: 'Checkout Counters', dir: 'Checkout-Counters' },
    { name: 'Wall Shelving', dir: 'wall-shelving' },
    { name: 'Gondola Shelving', dir: 'gondola-shelving' },
    { name: 'Island Display Table', dir: 'Island-Display-Table' },
    { name: 'Clothing Racks', dir: 'clothing-racks' },
    { name: 'Accessories', dir: 'Versatile-Accessories' }
];

const results = {};

categories.forEach(cat => {
    const dirPath = path.join(baseDir, cat.dir);
    if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath)
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .slice(0, 4) // 取前4张
            .map(file => `/images/products/${cat.dir}/${file}`);
        results[cat.name] = files;
    } else {
        results[cat.name] = [];
    }
});

console.log(JSON.stringify(results, null, 2));
