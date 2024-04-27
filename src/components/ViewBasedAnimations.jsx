import React from "react";
import { motion } from "framer-motion";

export default function ViewBasedAnimations() {
  return (
    <div className="flex flex-col gap-4 mx-auto text-white mt-96 w-fit">
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
    </div>
  );
}
