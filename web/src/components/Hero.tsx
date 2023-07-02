import React from "react";
import Search from "../custom/Search";

const Hero: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen relative [background:linear-gradient(-67.88deg,_#e4e4e2,_#f6f6f6)]">
      <div className="text-center text-[70px] text-primary font-montserrat">
        <span className="font-medium text-black">Unleash your inner </span>
        <i className="font-bold font-times">fashion</i>
        <span className="font-medium text-black"> designer</span>
      </div>

      <Search />

      <div></div>
    </div>
  );
};

export default Hero;
