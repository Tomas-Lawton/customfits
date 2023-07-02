import React from "react";
import { Button } from "antd";

interface InterfaceProps {
  isPrimary?: boolean;
  children: string;
}

const CustomButton: React.FC<InterfaceProps> = ({ isPrimary, children }) => {
  return (
    <Button
      className={`rounded-sm mr-2 ${
        isPrimary
          ? "text-white bg-black border-transparent"
          : "text-black bg-white border-black"
      }`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
