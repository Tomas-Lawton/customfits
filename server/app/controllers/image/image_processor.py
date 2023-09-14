from PIL import Image
from typing import List, Tuple
import requests
import os
import base64

engine_id = "stable-diffusion-v1-5"
api_host = os.getenv('API_HOST', 'https://api.stability.ai')

api_key = os.getenv("STABILITY_API_KEY")
if api_key is None:
    raise Exception("Missing Stability API key.")

class ImageProcessesing:
    def generate_image(self, prompt: str) -> Image:
        response = requests.post(
            f"{api_host}/v1/generation/{engine_id}/text-to-image",
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": f"Bearer {api_key}"
            },
            json={
                "text_prompts": [
                    {
                        "text": prompt
                    }
                ],
                "cfg_scale": 7,
                "clip_guidance_preset": "FAST_BLUE",
                "height": 512,
                "width": 512,
                "samples": 1,
                "steps": 30,
            })

        if response.status_code != 200:
            raise Exception("Non-200 response: " + str(response.text))

        data = response.json()

        for i, image in enumerate(data["artifacts"]):
            file_path = f"./out/v1_txt2img_{i}.png"
            try:
                with open(file_path, "wb") as f:
                    f.write(base64.b64decode(image["base64"]))
                print(f"Image {i} saved successfully.")
            except IOError as e:
                print(f"Failed to save image {i}: {str(e)}")

    def measure_corners(self, image: Image) -> List[Tuple[int, int]]:
        # Implementation logic for measuring corners of the image
        pass

    def apply_perspective_distortion(self, image: Image, corners: List[Tuple[int, int]]) -> Image:
        # Implementation logic for applying perspective distortion to the image
        pass

    def enhance_resolution(self, image: Image) -> Image:
        # Implementation logic for enhancing the resolution of the image
        pass
