import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Cart: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-primary w-10 h-10 text-white rounded-md">
      <ShoppingCartOutlined />
    </div>
  );
};

export default Cart;
