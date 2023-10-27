import React from "react";
import Button from "../components/Button";
import projectOne from "../assets/projectone.svg";
import image from "../assets/Groupsix.svg";
import { motion } from "framer-motion";
export default function Banner() {
  const imgVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
  };
  const textVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="mx-6 my-6 relative">
      <motion.img
        initial="offscreen"
        whileInView="onscreen"
        variants={imgVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="mx-auto w-full"
        src={projectOne}
        alt=""
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-white sm:w-1/2 sm:absolute sm:top-16 sm:left-0 sm:flex sm:flex-col sm:justify-center md:w-2/6 md:h-96 md:top-[272px] lg:top-[350px]"
      >
        <h1 className="font-bold text-4xl text-Onyx my-6 font-IbarraRealNova">
          Hey, I’m Hakeem Gardner and I love building beautiful websites
        </h1>
        <Button
          imageSrc={image}
          alternateClass="bg-JapaneseIndigo text-white border-none w-48 flex items-center text-center text-xs hover-bg-GreenSheen"
          buttonText="ABOUT ME"
        />
      </motion.div>
    </div>
  );
}
