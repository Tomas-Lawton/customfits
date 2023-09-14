import React from "react";
import Search from "../custom/Search";
import { EditOutlined } from "@ant-design/icons";
import Cart from "./Cart";
import { Button } from "antd";

const Nav: React.FC = () => {
  return (
    <div className="sticky top-0 px-20 flex z-10 justify-between content-center [background:linear-gradient(-67.88deg,_#e4e4e2,_#f6f6f6)] shadow-md">
      <div className="flex items-center">
        <h3 className="font-montserrat font-normal text-black pr-5">
          STABLEFITS
        </h3>
        <Search />
        <Button
          className="flex items-center justify-center bg-primary h-10 text-white rounded-md"
          icon={<EditOutlined />}
        >
          Edit
        </Button>
      </div>

      <div className="flex items-center">
        <Cart />
      </div>
    </div>
  );
};

export default Nav;
