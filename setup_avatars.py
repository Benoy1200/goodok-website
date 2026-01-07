import os
import shutil
import glob

source_dir = r"C:/Users/Administrator/.gemini/antigravity/brain/28570394-d426-442a-81fe-ca247046db7e"
dest_dir = "E:/retail-miniapp-backend/goodok-website/public/images/avatars"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)
    print(f"Created directory: {dest_dir}")

# Map of prefix to target filename
file_map = {
    "client_avatar_1_": "client-1.jpg",
    "client_avatar_2_": "client-2.jpg",
    "client_avatar_3_": "client-3.jpg",
    "client_avatar_4_": "client-4.jpg",
    "client_avatar_5_": "client-5.jpg",
    "client_avatar_6_": "client-6.jpg",
    "client_avatar_7_": "client-7.jpg",
    "client_avatar_8_": "client-8.jpg",
    "client_avatar_9_": "client-9.jpg"
}

for prefix, target_name in file_map.items():
    # Find file matching pattern
    pattern = os.path.join(source_dir, f"{prefix}*.png")
    files = glob.glob(pattern)
    
    if files:
        source_file = files[0] # Take the first match
        target_path = os.path.join(dest_dir, target_name)
        
        # Copy and rename (using shutil.copy2 to preserve metadata if any, though we are renaming ext)
        # Note: input is png, output is jpg. We should convert or just rename. 
        # Since next/image handles image formats well, renaming to .jpg might work if browser sniffs content, 
        # but better to convert properly or keep .png. 
        # The prompt asked for .jpg paths in plan, but generated .png.
        # Let's simple copy as .png for now but name it .jpg (NextJS often doesn't care) OR better, convert.
        
        # Let's use PIL to convert to be safe and optimize.
        try:
            from PIL import Image
            img = Image.open(source_file).convert('RGB')
            img.save(target_path, 'JPEG', quality=85)
            print(f"Processed: {source_file} -> {target_path}")
        except Exception as e:
            print(f"Error processing {source_file}: {e}")
    else:
        print(f"No file found for prefix: {prefix}")

print("Avatar setup complete.")
