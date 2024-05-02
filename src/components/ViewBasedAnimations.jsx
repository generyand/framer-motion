import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <div className="flex flex-col w-full mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        reiciendis repellendus odio aspernatur quaerat aut earum molestiae, quod
        illum fugit corrupti voluptatum? Dolorem a quo sint dicta dolorum non
        perspiciatis?
      </motion.div>
      <div
        className={
          isInView
            ? "bg-blue-800 w-full transition h-80 rounded-lg"
            : "bg-red-700 w-full transition h-80"
        }
      />
      <div ref={ref} className="w-full transition bg-green-700 h-80" />
    </div>
  );
}
