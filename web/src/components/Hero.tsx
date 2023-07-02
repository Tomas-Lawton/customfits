import React from "react";
import Search from "../custom/Search";
import { motion } from "framer-motion";
import AnimatedHook from "./AnimatedTitle";
import Cart from "./Cart";

const imgs = [
  {
    path: "/hero/0.png",
  },
  {
    path: "/hero/1.png",
  },
  {
    path: "/hero/2.png",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen relative [background:linear-gradient(-67.88deg,_#e4e4e2,_#f6f6f6)]">
      <div className="flex border-b border-black mx-20 py-10">
        <h3 className="font-montserrat font-normal text-black pr-5 mr-auto">
          BYTEWARE
        </h3>

        <div className="flex justify-center">
          <p className="font-bold mx-2">Home</p>
          <p className="text-secondary mx-2">Products</p>
          <p className="text-secondary mx-2">Contact</p>
        </div>

        <div className="ml-auto">
          <Cart />
        </div>
      </div>

      {/* <div className="py-10"> */}
      <AnimatedHook text="Unleash your inner fashion designer" />
      {/* </div> */}

      <div className="m-auto w-full items-center flex justify-center my-16">
        <Search />
      </div>

      <div className="m-auto w-full h-96 flex justify-center">
        {imgs.map((imgData, index) => (
          <motion.img
            key={index}
            src={`${imgData.path}`}
            alt={`Image ${index}`}
            className="image-animation shadow-xl rounded-lg m-4"
            initial={{
              y: 100,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: index === 1 ? 1.1 : 1,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: index * 0.3,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
