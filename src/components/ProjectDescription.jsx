import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
export default function ProjectDescription(props) {
  const topVariants = {
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
  const {
    imgSrc,
    projectTitle,
    description,
    technologiesOne,
    technologiesTwo,
  } = props;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={topVariants}
      viewport={{ once: true, amount: 0.8 }}
      className="mx-6 mt-6"
    >
      <img className="mb-6" src={imgSrc} alt="" />
      <div className="sm:flex ">
        <div className="sm:w-1/2">
          <h2 className="font-bold text-4xl text-Onyx my-6 font-IbarraRealNova">
            {projectTitle}
          </h2>
          <p className="mb-6 text-GreenSheen font-bold">{technologiesOne}</p>
          <p className="mb-6 text-GreenSheen font-bold">{technologiesTwo}</p>
          <Button
            alternateClass=" text-Onyx border-2 border-black w-48 flex items-center text-center text-xs hover:bg-Onyx"
            buttonText="VIEW WEBSITE"
          />
        </div>
        <div className="sm:w-1/2 mt-6">
          <p className="mb-6 leading-8">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
