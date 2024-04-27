import React, { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleButton = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-col justify-center min-h-screen p-4 text-center text-white item-center lg:mx-48">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="w-32 h-32 mx-auto bg-white rounded-md"
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "90deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="w-1/2 mx-auto"></div>
      <motion.button
        onClick={toggleButton}
        layout
        /* transition={{
          duration: 1,
          ease: "linear",
        }}
        initial={{
          scale: 0,
          y: 0,
        }}
        animate={{
          scale: 1,
          y: 1,
        }} */
        className="px-4 py-2 mx-auto mt-8 mb-4 transition-all rounded-md bg-sky-400 hover:bg-sky-300 w-fit hover:shadow-3xl hover:shadow-sky-400/50 hover:blur-none"
        // layout
      >
        Example Button
      </motion.button>

      <div className="imageContainer | w-1/2 rounded-lg overflow-hidden mx-auto brightness-50 hover:brightness-100 cursor-pointer transition-all hover:shadow-cyan-image grayscale hover:grayscale-0"></div>
    </div>
  );
}
