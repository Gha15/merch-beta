from PIL import Image, ImageDraw, ImageFont
import os

# Create images folder if it doesn't exist
os.makedirs('images', exist_ok=True)

# Image dimensions
width, height = 300, 150
background_color = (13, 13, 13)  # #0d0d0d
text_color = (255, 235, 59)  # #ffeb3b

# Create image
img = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(img)

# Try to use a nice font, fallback to default
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
except:
    font = ImageFont.load_default()

# Add text
text = "COMING SOON"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (width - text_width) // 2
y = (height - text_height) // 2

# Draw text with glow effect (optional)
for offset in range(2):
    draw.text((x + offset, y), text, font=font, fill=(100, 100, 0))

draw.text((x, y), text, font=font, fill=text_color)

# Save
img.save('images/comingsoon.png')
print("✅ comingsoon.png created!")
