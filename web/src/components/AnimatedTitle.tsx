import React from "react";
import { motion } from "framer-motion";

interface InterfaceProps {
  text: string;
}

const AnimatedHook: React.FC<InterfaceProps> = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-center text-[70px] text-primary font-montserrat"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "15px" }}
          key={index}
          className={`${
            word !== "fashion"
              ? "font-medium text-black"
              : "font-bold font-times"
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedHook;
