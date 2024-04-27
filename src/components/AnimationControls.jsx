import React from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const flipControls = useAnimationControls();

  const handleClick = () => {
    // Do something
    flipControls.start("flip");
  };

  return (
    <div className="flex flex-col gap-4 mx-auto w-fit">
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "90deg",
          },
        }}
        /* whileHover="flip" */
        initial="initial"
        animate={flipControls}
        className="w-40 h-40 bg-green-400 rounded-md"
      ></motion.div>
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white transition-colors rounded-md bg-sky-400 hover:bg-sky-300"
      >
        Flip Box
      </button>
    </div>
  );
}
