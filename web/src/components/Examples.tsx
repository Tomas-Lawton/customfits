import React from "react";
import { Carousel } from "antd";

const examples = [
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
  {
    path: "/examples/0.png",
  },
];

const Examples: React.FC = () => {
  return (
    <div className="rounded-lg min-h-screen">
      <h2 className="text-center">Fits just right!</h2>
      <Carousel autoplay className="w-full h-fit rounded-lg overflow-hidden">
        {examples.map((img, index) => (
          <img key={index} src={img.path}></img>
        ))}
      </Carousel>
    </div>
  );
};

// const Examples: React.FC = () => {
//   return (
//     <div className="bg-black m-40 rounded-lg">
//       <Carousel autoplay className="w-full h-50 z-10">
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

export default Examples;
