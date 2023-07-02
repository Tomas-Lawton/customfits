import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="top-[6808px] left-[0px] [background:linear-gradient(-67.88deg,_#141414,_#292929)] w-[1728px] h-[439px] text-white">
      <div className="top-[95px] left-[189px] w-[1323px] flex flex-row items-center justify-between">
        <div className="relative w-[419px] h-[249.5px]">
          <div className="top-[138.25px] left-[0px] w-[164px] h-11">
            <div className="top-[0px] left-[0px] rounded-lg bg-color-50 flex flex-row p-2.5 items-start justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/brands--social-media.svg"
              />
            </div>
            <div className="top-[0px] left-[60px] rounded-lg bg-color-50 flex flex-row p-2.5 items-start justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/brands--social-media1.svg"
              />
            </div>
            <div className="top-[0px] left-[120px] rounded-lg bg-color-50 flex flex-row p-2.5 items-start justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/brands--social-media2.svg"
              />
            </div>
          </div>
          <div className="top-[53.25px] left-[0px] leading-[32px] inline-block w-[419px]">{`FashionForAll. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. `}</div>
          <div className="top-[203.25px] left-[0px] leading-[32px] inline-block w-[419px]">
            © 2022 All rights reserved.
          </div>
          <div className="top-[0px] left-[0px] flex flex-row items-center justify-start text-5xl">
            <div className="relative w-[125px] h-[33px]">
              <div className="top-[0px] left-[0px] font-semibold">BYTEWEAR</div>
            </div>
          </div>
          <div className="top-[149.5px] left-[107px] w-[100px] h-[100px] overflow-hidden" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[99px] text-base">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative">Explore</div>
            <div className="relative">Product</div>
            <div className="relative">Sell your product</div>
            <div className="relative">Pricing</div>
            <div className="relative">Reviews</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative">Privacy policy</div>
              <div className="relative">Legal</div>
              <div className="relative">Terms of service</div>
              <div className="relative">Help center</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
