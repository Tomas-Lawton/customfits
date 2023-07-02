import React from "react";
import { Carousel } from "antd";

const Examples: React.FC = () => {
  return (
    <div className="bg-black m-40 rounded-lg">
      <Carousel autoplay className="w-full h-50 z-10">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Examples;
