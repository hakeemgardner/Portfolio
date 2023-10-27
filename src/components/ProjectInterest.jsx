import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function ProjectInterest() {
  const textVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const buttonVariants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const naviagte = useNavigate();
  const handleContactMeClick = () => {
    naviagte("/ContactMe ");
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="mx-6 flex flex-col items-center text-center mt-12 sm:flex-row sm:justify-between"
    >
      <motion.h2
        variants={textVariants}
        className="font-bold text-4xl text-Onyx mx-6 mb-12 mt-16"
      >
        Interested in doing a project together?
      </motion.h2>
      <motion.div variants={buttonVariants}>
        <Button
          alternateClass="text-Onyx border-2 border-black w-48 flex items-center text-xs mb-12 sm:mt-20 hover:bg-Onyx "
          buttonText="CONTACT ME"
          onClickAction={handleContactMeClick}
        />
      </motion.div>
    </motion.div>
  );
}
