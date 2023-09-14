from psd_tools import PSDImage
from PIL import Image

def insert_image_into_psd(psd_file, layer_name, insert_image_file, output_file):
    psd = PSDImage.open(psd_file)

    for layer in psd:
        if layer.name == layer_name:
            insert_image = Image.open(insert_image_file).convert("RGBA")
            resized_image = insert_image.resize(layer.size, resample=Image.LANCZOS)
            layer.compose().composite(resized_image, (0, 0))
            
            psd.save(output_file)
            psd.composite().save(output_file + ".png")
            print("Image inserted into the specified layer and saved as PSD and PNG.")
            break

psd_file = "template.psd"
layer_name = "your design here - doubleclick on thumnail"
insert_image_file = "replacement.png"
output_file = "output.psd"

insert_image_into_psd(psd_file, layer_name, insert_image_file, output_file)
