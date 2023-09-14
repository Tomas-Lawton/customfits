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
    <div className="min-w-screen min-h-screen [background:linear-gradient(-67.88deg,_#e4e4e2,_#f6f6f6)]">
      <div className="flex mx-20 py-10">
        <h3 className="flex flex-1 justify-start font-montserrat font-normal text-black pr-5 mr-auto">
          STABLEFITS
        </h3>

        <div className="flex flex-1 justify-center">
          <p className="font-bold border-b-2 border-black border-solid  mx-2">
            Home
          </p>
          <p className="text-secondary mx-2">Products</p>
          <p className="text-secondary mx-2">Contact</p>
        </div>

        <div className="flex flex-1 justify-end items-center ml-auto">
          <Cart />
        </div>
      </div>

      {/* <hr className="w-full bg-black h-0.5 border-0 m-0 p-0" /> */}

      <div>
        <motion.img
          alt={`SVG HAI Graphic`}
          src="/CircleText.svg"
          className="image-animation absolute top-2/5 h-96 z-0 pointer-events-none custom-graphic"
          initial={{
            rotate: 180,
          }}
          animate={{
            rotate: 0,
          }}
          transition={{ duration: 4 }}
        />

        <div className="py-10">
          <AnimatedHook text="Unleash your inner fashion designer" />
        </div>
        <div className="m-auto w-full items-center flex justify-center">
          <Search />
        </div>
        <div className="m-auto w-full h-96 flex justify-center mt-8 absolute z-10">
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

        <motion.div
          className="absolute right-0 bottom-24 p-10 flex items-center w-40"
          initial={{
            y: 100,
            opacity: 0,
            rotate: -90,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              damping: 10,
              stiffness: 100,
              delay: 2.3,
              duration: 2,
            },
          }}
        >
          <hr className="w-2/5 bg-black h-0.5 border-0" />
          <h3 className="font-montserrat font-normal text-primary">IO</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
