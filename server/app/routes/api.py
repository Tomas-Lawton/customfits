from fastapi import APIRouter
from controllers.image.image_processor import ImageProcessesing
from controllers.image.image_utils import resize_image, stretch_image, insert_image_into_mockup
from controllers.checkout import Checkout
from typing import List

router = APIRouter()

@router.get("/")
def generate_image():
    return {"hello": "world"}

@router.get("/{prompt}")
def generate_image(prompt: str):
    return {"hello": prompt}

@router.get("/generate_image/{prompt}")
def generate_image(prompt: str):
    image_generator = ImageProcessesing()
    image = image_generator.generate_image(prompt)
    return {"image_url": image.url}

@router.post("/insert_image_into_mockup")
def insert_image_into_mockup(image_url: str, mockup_url: str):
    # Logic to insert image into mockup
    # Use image_utils functions to resize, stretch, and insert image
    return {"mockup_url": mockup_url}

@router.post("/enhance_resolution")
def enhance_resolution(image_url: str):
    image_resolution_enhancer = ImageProcessesing()
    enhanced_image = image_resolution_enhancer.enhance_resolution(image_url)
    return {"enhanced_image_url": enhanced_image.url}

@router.post("/checkout")
def checkout(items: List[str]):
    checkout = Checkout()
    checkout.process_checkout(items)
    return {"message": "Checkout successful"}