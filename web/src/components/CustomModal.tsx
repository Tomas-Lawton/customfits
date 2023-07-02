import React, { useState } from "react";
import CustomButton from "../custom/CustomButton";
import { Modal, Carousel } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const examples = [
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
];

const CustomModal: React.FC = () => {
  // refactor to dispatch
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      footer={null}
      title={null}
      width={1000}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="bg-white flex flex-row mx-6 my-12 h-96">
        <section className="basis-1/5">
          <h3 className="text-secondary font-montserrat font-normal m-0">
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
              {examples.map((img, index) => (
                <img key={index} src={img.path}></img>
              ))}
            </Carousel>
          </div>
        </section>
        <section className="basis-1/5 mx-10">
          <div className="inline-flex items-center justify-center w-full">
            <p className="font-bold mr-2 my-0">Options</p>
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
    </Modal>
  );
};

export default CustomModal;
