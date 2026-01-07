from PIL import Image
import os

# Define input paths
input_products = "C:/Users/Administrator/.gemini/antigravity/brain/28570394-d426-442a-81fe-ca247046db7e/products_set1_1767796893472.png"
input_solutions = "C:/Users/Administrator/.gemini/antigravity/brain/28570394-d426-442a-81fe-ca247046db7e/solutions_set1_1767796911629.png"

# Define output directories
output_dir_products = "E:/retail-miniapp-backend/goodok-website/public/images/products"
output_dir_solutions = "E:/retail-miniapp-backend/goodok-website/public/images/solutions"

os.makedirs(output_dir_products, exist_ok=True)
os.makedirs(output_dir_solutions, exist_ok=True)

def split_and_save(input_path, output_dir, names):
    try:
        img = Image.open(input_path)
        width, height = img.size
        # The grid is 2 rows, 3 columns
        cell_width = width // 3
        cell_height = height // 2

        count = 0
        for row in range(2):
            for col in range(3):
                if count >= len(names):
                    break
                
                left = col * cell_width
                top = row * cell_height
                right = left + cell_width
                bottom = top + cell_height
                
                cropped = img.crop((left, top, right, bottom))
                
                # Resize to standard size (e.g. 800x600) for consistency and performance
                # Maintain aspect ratio? The crop is likely 1:1 or 4:3. Let's force a good ratio.
                # Actually, just saving as is fine, or resize to max width 800.
                cropped.thumbnail((800, 800))
                
                save_path = os.path.join(output_dir, names[count])
                cropped.save(save_path, quality=85)
                print(f"Saved {names[count]}")
                count += 1
                
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Product names mapping (ORDER MATTERS based on prompt)
# 1. Gondola, 2. Wall, 3. Cases, 4. Racks, 5. Checkout, 6. Custom
product_filenames = [
    "gondola-shelving.jpg",
    "wall-shelving.jpg",
    "display-cases.jpg",
    "clothing-racks.jpg",
    "checkout-counters.jpg",
    "custom-fixtures.jpg"
]

# Solution names mapping
# 1. Pop Culture, 2. Stationery, 3. Jewelry, 4. Boutique, 5. Toy, 6. Lifestyle
solution_filenames = [
    "pop-culture.jpg",
    "stationery.jpg",
    "jewelry-store.jpg",
    "boutique.jpg",
    "toy-store.jpg",
    "lifestyle.jpg"
]

print("Processing Products...")
split_and_save(input_products, output_dir_products, product_filenames)

print("Processing Solutions...")
split_and_save(input_solutions, output_dir_solutions, solution_filenames)
