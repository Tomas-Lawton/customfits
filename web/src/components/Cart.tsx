import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Cart: React.FC = () => {
  return (
    <Button
      className="flex items-center justify-center bg-primary h-10 text-white rounded-md"
      icon={<ShoppingCartOutlined />}
    />
  );
};

export default Cart;
