import React from "react";
import Button from "../components/Button";
import Portfolioimage from "../assets/Portfolioimage.svg";
import ProjectInterest from "../components/ProjectInterest";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function AboutMe() {
  const imgVariants = {
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
  const naviagte = useNavigate();
  const handlePortfolioClick = () => {
    naviagte("/Projects");
  };

  return (
    <div className="mx-6 mt-20">
      <div className="sm:flex sm:justify-between items-center">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={imgVariants}
          className="sm:w-1/2 order-2 sm:order-1 sm:space-x-4"
        >
          <img src={Portfolioimage} alt="" className="h-full w-full" />
        </motion.div>
        <div className="mt-6 sm:w-1/2 order-1 sm:order-2 sm:text-center sm:space-x-10 md:space-x-20 ">
          <h2 className="font-bold text-4xl text-Onyx font-IbarraRealNova my-6">
            About Me
          </h2>
          <p className="mb-6 leading-8">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Jamaica, but I’m happy working remotely and
            have experience in remote teams. When I’m not coding, you’ll find me
            outdoors. I love being out in nature whether that’s going for a
            walk, or playing football. I’d love you to check out my work.
          </p>
          <div className="sm:flex flex-col sm:space-x-4">
            <Button
              alternateClass=" text-Onyx border-2 border-black w-48 flex items-center text-center text-xs hover:bg-Onyx"
              buttonText="GO TO PORTFOLIO"
              onClickAction={handlePortfolioClick}
            />
          </div>
        </div>
      </div>

      <ProjectInterest />
    </div>
  );
}
