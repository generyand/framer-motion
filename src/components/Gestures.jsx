import React from "react";
import { motion, MotionConfig } from "framer-motion";

export default function Gestures() {
  return (
    <div className="flex flex-col gap-4 mx-auto w-fit">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.5,
          }}
          whileTap={{
            scale: 1,
            rotate: "2.5deg",
          }}
          className="px-4 py-2 text-white transition-all rounded-md bg-sky-400 hover:bg-red-700"
        >
          Click Me!
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.5,
          }}
          whileTap={{
            scale: 1,
            rotate: "2.5deg",
          }}
          className="px-4 py-2 text-white transition-all bg-green-400 rounded-md hover:bg-red-700 hover:scale-150"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
