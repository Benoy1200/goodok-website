from PIL import Image
import numpy as np

# Target logo file
logo_path = "E:/retail-miniapp-backend/goodok-website/public/images/goodok-logo-v2.png"

try:
    img = Image.open(logo_path).convert("RGBA")
    data = np.array(img)
    
    # White threshold
    threshold = 240
    
    # Get RGB channels
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    
    # Identify white/near-white pixels
    white_mask = (r > threshold) & (g > threshold) & (b > threshold)
    
    # Set alpha to 0 for white pixels
    data[..., 3][white_mask] = 0
    
    # Create new image
    transparent_logo = Image.fromarray(data)
    
    # Trim any excess transparent edges
    bbox = transparent_logo.getbbox()
    if bbox:
        transparent_logo = transparent_logo.crop(bbox)
    
    # Save back as PNG
    transparent_logo.save(logo_path, "PNG")
    print(f"已成功处理 Logo，白底已去除: {logo_path}")

except Exception as e:
    print(f"处理出错: {e}")
