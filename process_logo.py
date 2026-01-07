from PIL import Image
import os

# Input path (from artifacts)
input_path = "C:/Users/Administrator/.gemini/antigravity/brain/28570394-d426-442a-81fe-ca247046db7e/goodok_logo_artistic_set2_1767757533673.png"
# Output path (to public images)
output_path = "E:/retail-miniapp-backend/goodok-website/public/images/goodok-logo-v2.png"

try:
    img = Image.open(input_path)
    width, height = img.size
    
    # Option 14 is Top-Left quadrant
    # Crop box: (left, top, right, bottom)
    crop_box = (0, 0, width // 2, height // 2)
    
    logo_opt14 = img.crop(crop_box)
    
    # Save as PNG
    logo_opt14.save(output_path)
    print(f"Successfully cropped Option 14 to {output_path}")
    
except Exception as e:
    print(f"Error processing image: {e}")
