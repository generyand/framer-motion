import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <div className="">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          // scaleX,
          // background: "blue",
          background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "4px",
        }}
      />
      <div className="flex flex-col gap-6 p-1 px-12 py-2 text-2xl text-white">
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque animi
          ipsa commodi odio voluptate corrupti quas harum sapiente, unde
          exercitationem, nisi totam doloribus quibusdam itaque porro hic beatae
          error repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel alias ea voluptates amet vero mollitia officiis eveniet
          ipsum harum necessitatibus!
        </p>
      </div>
    </div>
  );
}
