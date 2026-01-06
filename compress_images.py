from PIL import Image
import os

# 目标目录
about_dir = "public/images/about"

# 图片列表
images = [
    "factory-workshop.jpg",
    "office-team.jpg",
    "warehouse.jpg"
]

# 目标文件大小（字节）
TARGET_SIZE = 1024 * 1024  # 1MB

print("=" * 50)
print("图片压缩脚本 - 目标 < 1MB")
print("=" * 50)

for img_name in images:
    img_path = os.path.join(about_dir, img_name)
    
    if not os.path.exists(img_path):
        print(f"❌ 跳过（文件不存在）: {img_name}")
        continue
    
    # 获取原始文件大小
    original_size = os.path.getsize(img_path) / (1024 * 1024)
    
    print(f"\n📷 处理: {img_name}")
    print(f"   原始大小: {original_size:.2f} MB")
    
    # 打开图片
    img = Image.open(img_path)
    original_width, original_height = img.size
    print(f"   原始尺寸: {original_width} x {original_height}")
    
    # 转换为 RGB
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    
    # 缩放到合理尺寸（宽度最大 1200px）
    max_width = 1200
    if original_width > max_width:
        ratio = max_width / original_width
        new_height = int(original_height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
        print(f"   缩放至: {max_width} x {new_height}")
    
    # 逐步降低质量直到文件小于目标大小
    quality = 85
    while quality > 20:
        img.save(img_path, "JPEG", quality=quality, optimize=True)
        new_size = os.path.getsize(img_path)
        if new_size <= TARGET_SIZE:
            break
        quality -= 5
    
    final_size_kb = os.path.getsize(img_path) / 1024
    print(f"   ✅ 压缩后: {final_size_kb:.0f} KB (质量: {quality}%)")

print("\n" + "=" * 50)
print("🎉 压缩完成！")
print("=" * 50)
