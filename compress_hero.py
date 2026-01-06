from PIL import Image
import os

images = ['hero-bg-2.jpg', 'hero-bg-3.jpg', 'hero-bg-4.jpg', 'hero-bg-5.jpg']
base_dir = 'public/images'

print('=== 压缩 Hero 背景图 ===\n')

for name in images:
    path = os.path.join(base_dir, name)
    size_mb = os.path.getsize(path) / (1024 * 1024)
    print(f'{name}: {size_mb:.2f} MB')
    
    img = Image.open(path).convert('RGB')
    w, h = img.size
    
    # 缩放到最大 1920 宽度
    if w > 1920:
        ratio = 1920 / w
        img = img.resize((1920, int(h * ratio)), Image.LANCZOS)
        print(f'  缩放: {w}x{h} -> 1920x{int(h * ratio)}')
    
    # 保存
    img.save(path, 'JPEG', quality=75, optimize=True)
    new_size = os.path.getsize(path) / 1024
    print(f'  ✅ 压缩后: {new_size:.0f} KB\n')

print('完成!')
