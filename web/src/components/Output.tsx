import React, { useState, useEffect } from "react";

interface InterfaceProps {
  clickCallback: () => void;
}

const Output: React.FC<InterfaceProps> = ({ clickCallback }) => {
  // Animate on click
  // const [selectedId, setSelectedId] = useState(null)

  // {items.map(item => (
  //   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
  //     <motion.h5>{item.subtitle}</motion.h5>
  //     <motion.h2>{item.title}</motion.h2>
  //   </motion.div>
  // ))}

  // <AnimatePresence>
  //   {selectedId && (
  //     <motion.div layoutId={selectedId}>
  //       <motion.h5>{item.subtitle}</motion.h5>
  //       <motion.h2>{item.title}</motion.h2>
  //       <motion.button onClick={() => setSelectedId(null)} />
  //     </motion.div>
  //   )}
  // </AnimatePresence>

  return (
    <div onClick={clickCallback} className="m-40 rounded-lg">
      <img className="w-full" alt="" src="/services.svg" />
    </div>
  );
};

export default Output;
