from PIL import Image
import numpy as np

# Input: uploaded image (Option 9)
input_path = "C:/Users/Administrator/.gemini/antigravity/brain/28570394-d426-442a-81fe-ca247046db7e/uploaded_image_1767800778479.png"
# Output: website logo
output_path = "E:/retail-miniapp-backend/goodok-website/public/images/goodok-logo-v2.png"

try:
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # White threshold
    threshold = 245
    
    r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]
    white_mask = (r > threshold) & (g > threshold) & (b > threshold)
    data[..., 3][white_mask] = 0
    
    transparent_logo = Image.fromarray(data)
    
    # Trim edges
    bbox = transparent_logo.getbbox()
    if bbox:
        transparent_logo = transparent_logo.crop(bbox)
    
    transparent_logo.save(output_path, "PNG")
    print(f"完成！Option 9 Logo 已替换: {output_path}")

except Exception as e:
    print(f"处理出错: {e}")
