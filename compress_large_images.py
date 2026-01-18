from PIL import Image
import os

# 目标处理的图片列表（在 public/images 目录下）
target_images = [
    "boutique1.jpg",
    "company-intro.jpg",
    "office-1.jpg",
    "factory-1.jpg",
    "factory-2.jpg",
    "team-1.jpg"
]

base_dir = "public/images"
TARGET_SIZE_KB = 150  # 目标 < 150KB

print("=" * 50)
print("开始图片极限压缩与 WebP 转换任务")
print("=" * 50)

for img_name in target_images:
    file_path = os.path.join(base_dir, img_name)
    
    if not os.path.exists(file_path):
        print(f"❌ 文件未找到: {img_name}")
        continue
        
    original_size_mb = os.path.getsize(file_path) / (1024 * 1024)
    print(f"\nProcessing: {img_name}")
    print(f"Original Size: {original_size_mb:.2f} MB")
    
    try:
        img = Image.open(file_path)
        
        # 1. 转换为 RGB (如果需要)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        # 2. 调整尺寸 (Max Width 1920)
        width, height = img.size
        print(f"Original Dims: {width}x{height}")
        
        if width > 1920:
            ratio = 1920 / width
            new_height = int(height * ratio)
            img = img.resize((1920, new_height), Image.LANCZOS)
            print(f"Resized to: 1920x{new_height}")
            
        # 3. 保存为 WebP
        webp_name = os.path.splitext(img_name)[0] + ".webp"
        webp_path = os.path.join(base_dir, webp_name)
        
        # 动态调整质量以达到目标大小
        quality = 80
        min_quality = 30
        
        while quality >= min_quality:
            img.save(webp_path, "WEBP", quality=quality)
            current_size_kb = os.path.getsize(webp_path) / 1024
            
            if current_size_kb <= TARGET_SIZE_KB:
                print(f"✅ WebP Converted: {webp_name} ({current_size_kb:.0f} KB, Quality: {quality})")
                break
            
            quality -= 5
            
        if quality < min_quality:
            print(f"⚠️ Warning: Could not reach {TARGET_SIZE_KB}KB even at quality {min_quality}. Current: {current_size_kb:.0f} KB")
            
        # 4. 压缩原始 JPG (覆盖原文件，作为 Fallback)
        # 注意：这里会直接覆盖原文件，因为用户要求"你来执行"且之前已经标记这些图太大了
        jpg_quality = 75
        while jpg_quality >= 30:
            img.save(file_path, "JPEG", quality=jpg_quality, optimize=True)
            current_jpg_size = os.path.getsize(file_path) / 1024
            if current_jpg_size <= TARGET_SIZE_KB + 50: # JPG 允许稍微大一点
                print(f"✅ JPG Compressed: {img_name} ({current_jpg_size:.0f} KB, Quality: {jpg_quality})")
                break
            jpg_quality -= 5

    except Exception as e:
        print(f"❌ Error processing {img_name}: {str(e)}")

print("\n" + "=" * 50)
print("任务完成")
