import React, { useState, useEffect } from "react";

const Output: React.FC = () => {
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

  return (
    <div className="m-40 rounded-lg">
      <img className="w-full" alt="" src="/services.svg" />
    </div>
  );
};

export default Output;
