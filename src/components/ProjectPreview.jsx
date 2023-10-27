import React from "react";
import { motion } from "framer-motion";

export default function ProjectPreview(props) {
  const bottomVariants = {
    offscreen: {
      scale: 0.5,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const { titleOne, description, titleTwo, imageSrcOne, imgSrcTwo } = props;

  return (
    <div className="mx-6">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={bottomVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="font-normal text-3xl text-Onyx my-6 font-IbarraRealNova">
          {titleOne}
        </h2>
        <p className="mb-6 leading-8">{description}</p>
        <h2 className="font-normal text-3xl text-Onyx my-6 font-IbarraRealNova">
          {titleTwo}
        </h2>
      </motion.div>

      <img src={imageSrcOne} alt="" />
      <img className="my-6" src={imgSrcTwo} alt="" />
    </div>
  );
}
