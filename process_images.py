from PIL import Image
import os

# 1. Convert favicon
print('=== Favicon ===')
img = Image.open('public/images/favicon.jpg')
img = img.convert('RGBA').resize((32, 32), Image.LANCZOS)
img.save('public/favicon.ico', format='ICO')
print('Done: favicon.ico')

# 2. Compress hero-bg
print('=== Hero BG ===')
hero = 'public/images/hero-bg.jpg'
size_mb = os.path.getsize(hero) / (1024*1024)
print(f'Original: {size_mb:.1f}MB')

img = Image.open(hero).convert('RGB')
w, h = img.size
if w > 1920:
    img = img.resize((1920, int(h * 1920 / w)), Image.LANCZOS)
img.save(hero, 'JPEG', quality=75, optimize=True)
print(f'Compressed: {os.path.getsize(hero)/1024:.0f}KB')
