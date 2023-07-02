import React from "react";
import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between [background:linear-gradient(-67.88deg,_#141414,_#292929)] text-white py-16 px-32">
      <div>
        <div className="font-montserrat font-normal pr-5 mb-5">BYTEWEAR</div>
        <div className="text-sm w-1/2">
          Unleash your inner fashion designer with custom Bytewear aperal and
          GenAI art prints
        </div>
        <div className="flex">
          <div className="p-2 my-2 mr-2 rounded-md bg-color-50 flex">
            <InstagramOutlined className="text-secondary" />
          </div>
          <div className="p-2 my-2 mr-2 rounded-md bg-color-50 flex">
            <TwitterOutlined className="text-secondary" />
          </div>
          <div className="p-2 my-2 mr-2 rounded-md bg-color-50 flex">
            <LinkedinOutlined className="text-secondary" />
          </div>
        </div>
        <div className="text-sm">© 2022 All rights reserved.</div>
      </div>

      <div className="flex flex-row items-start justify-start gap-[99px] text-xs">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="text-xs">Explore</div>
          <div>Product</div>
          <div>Sell your product</div>
          <div>Pricing</div>
          <div>Reviews</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div>Privacy policy</div>
            <div>Legal</div>
            <div>Terms of service</div>
            <div>Help center</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
