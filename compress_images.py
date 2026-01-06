from PIL import Image
import os

# 目标目录
about_dir = "public/images/about"

# 图片列表
images = [
    "factory-workshop.jpg",
    "production-line.jpg", 
    "office-team.jpg",
    "warehouse.jpg"
]

# 目标宽度（保持宽高比）
TARGET_WIDTH = 1920
# JPEG 质量（60-85 是网页的合理范围）
JPEG_QUALITY = 75

print("=" * 50)
print("图片压缩脚本 - Goodok Website")
print("=" * 50)

for img_name in images:
    img_path = os.path.join(about_dir, img_name)
    
    if not os.path.exists(img_path):
        print(f"❌ 跳过（文件不存在）: {img_name}")
        continue
    
    # 获取原始文件大小
    original_size = os.path.getsize(img_path) / (1024 * 1024)  # MB
    
    print(f"\n📷 处理: {img_name}")
    print(f"   原始大小: {original_size:.2f} MB")
    
    # 打开图片
    img = Image.open(img_path)
    original_width, original_height = img.size
    print(f"   原始尺寸: {original_width} x {original_height}")
    
    # 如果图片比目标宽度大，则缩放
    if original_width > TARGET_WIDTH:
        ratio = TARGET_WIDTH / original_width
        new_height = int(original_height * ratio)
        img = img.resize((TARGET_WIDTH, new_height), Image.LANCZOS)
        print(f"   缩放至: {TARGET_WIDTH} x {new_height}")
    
    # 转换为 RGB（移除 alpha 通道以保存为 JPEG）
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    
    # 保存压缩后的图片（覆盖原文件）
    img.save(img_path, "JPEG", quality=JPEG_QUALITY, optimize=True)
    
    # 获取新文件大小
    new_size = os.path.getsize(img_path) / 1024  # KB
    print(f"   ✅ 压缩后: {new_size:.0f} KB")

print("\n" + "=" * 50)
print("🎉 压缩完成！")
print("=" * 50)
