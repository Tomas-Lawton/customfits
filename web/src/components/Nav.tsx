import React from "react";
import Search from "../custom/Search";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Nav: React.FC = () => {
  return (
    <div className="sticky top-0 px-20 flex justify-between content-center [background:linear-gradient(-67.88deg,_#e4e4e2,_#f6f6f6)]">
      <div className="flex items-center">
        <h3 className="font-montserrat font-normal text-black pr-5">
          BYTEWARE
        </h3>
        <Search />
        <div className="flex items-center justify-center bg-primary w-10 h-10 text-white rounded-md">
          <PlusOutlined />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center bg-primary w-10 h-10 text-white rounded-md">
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Nav;
