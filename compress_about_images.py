from PIL import Image
import os

images = [
    "factory-workshop.jpg",
    "office-team.jpg",
    "warehouse.jpg",
    "production-line.jpg"
]

base_dir = "public/images/about"
TARGET_SIZE_KB = 100  # About 页面图片稍微小一点

print("=" * 50)
print("开始 About 页面图片 WebP 转换任务")
print("=" * 50)

for img_name in images:
    file_path = os.path.join(base_dir, img_name)
    
    if not os.path.exists(file_path):
        print(f"❌ 文件未找到: {img_name}")
        continue
        
    print(f"\nProcessing: {img_name}")
    
    try:
        img = Image.open(file_path)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        # 调整尺寸 (About 页面不需要太大，最大 1200)
        width, height = img.size
        if width > 1200:
            ratio = 1200 / width
            new_height = int(height * ratio)
            img = img.resize((1200, new_height), Image.LANCZOS)
            print(f"Resized to: 1200x{new_height}")
            
        # 保存 WebP
        webp_name = os.path.splitext(img_name)[0] + ".webp"
        webp_path = os.path.join(base_dir, webp_name)
        
        quality = 85
        while quality >= 30:
            img.save(webp_path, "WEBP", quality=quality)
            if os.path.getsize(webp_path) / 1024 <= TARGET_SIZE_KB:
                break
            quality -= 5
            
        print(f"✅ WebP Saved: {webp_name} ({os.path.getsize(webp_path)/1024:.0f} KB, Q={quality})")

    except Exception as e:
        print(f"❌ Error: {e}")

print("\nTask Complete")
