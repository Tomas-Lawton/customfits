import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Cart: React.FC = () => {
  return (
    <Button
      className="flex items-center justify-center bg-primary text-white rounded-md"
      icon={<ShoppingCartOutlined />}
    />
  );
};

export default Cart;
