import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../model/types";

const Output: React.FC = () => {
  const dispatch = useDispatch();

  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const handleKeyDown = (event: any) => {
  //     if (event.key === "Escape") {
  //       setIsOpen(false);
  //       console.log("Escape key pressed");
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  // const handleOnClick = () => {
  //   console.log("clicked");
  //   setIsOpen(true);
  // };

  const handleOnClick = () => {
    console.log("test");
    dispatch({ type: ActionTypes.OPEN_MODAL });
  };

  return (
    <div onClick={handleOnClick} className="mx-40 my-10 rounded-lg">
      <img className="w-full cursor-pointer" alt="" src="/services.svg" />
    </div>
  );
};

export default Output;
