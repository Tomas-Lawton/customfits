import React from "react";
import CustomButton from "../custom/CustomButton";
import { Carousel } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Modal: React.FC = () => {
  return (
    <section className="sticky top-0 w-full min-h-screen overflow-hidden">
      <div className="bg-black/40 blur-3xl w-full min-h-screen"></div>

      <div className="absolute top-0 bg-white flex flex-row mx-40 my-20 h-2/3 rounded-lg py-10">
        <section className="basis-1/5 mx-10">
          <h3 className="text-secondary font-montserrat font-normal">
            BYTEWARE
          </h3>
          <h2>Hoodie Oversized</h2>
          <p className="font-bold">Sping 6251</p>
          <p className="text-secondary">
            Our custom-printed oversized hoodie is produced with a quality
            cotton blend to provide warmth and durability.
          </p>
          <p className="font-bold">AUD$150</p>

          <div className="flex">
            <CustomButton>Add to cart </CustomButton>
            <CustomButton isPrimary>Buy now</CustomButton>
          </div>
        </section>
        <section className="basis-3/5 flex">
          <div className="w-2/12">
            <UploadOutlined />
          </div>

          <div className="w-10/12 bg-black/20 overflow-hidden">
            <Carousel className="w-96 overflow-hidden">
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="basis-1/5 mx-10">
          <div className="inline-flex items-center justify-center w-full">
            <p className="font-bold mr-2">Options</p>
            <hr className="w-full bg-black h-0.5 border-0" />
          </div>

          <p className="font-bold">Size</p>
          <p className="text-secondary">Your fit</p>

          <p className="font-bold">Color</p>
          <p className="text-secondary">Your fit</p>

          <p className="font-bold">Quntatity</p>
          <p className="text-secondary">Your fit</p>
        </section>
      </div>
    </section>
  );
};

export default Modal;
