import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function ProjectHighlight(props) {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const naviagte = useNavigate();
  const handleViewProject = () => {
    naviagte("/ProjectDetailPage ");
  };
  const { imgSrc, projectTitle, description, addClass } = props;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      className={`${addClass} sm:flex mx-6 my-8 space-x-12`}
    >
      <div className="flex sm:w-1/2 ">
        <img className="" src={imgSrc} alt="" />
      </div>
      <div className="mt-6 flex-grow w-1/2">
        <h2 className="text-Onyx text-4xl font-IbarraRealNova font-bold my-6">
          {projectTitle}
        </h2>
        <p className="leading-8 mb-6">{description}</p>
        <Button
          alternateClass=" text-Onyx border-2 border-black w-48 flex items-center text-center text-xs hover:bg-Onyx"
          buttonText="VIEW PROJECT"
          onClickAction={handleViewProject}
        />
      </div>
    </motion.div>
  );
}
