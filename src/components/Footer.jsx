import React from "react";
import image from "../assets/CombinedShapeTwo.svg";
import Github from "../assets/Github.svg";
import Twitter from "../assets/Twitter.svg";
import Linkedin from "../assets/Linkedin.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Footer() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-around items-center justify-center bg-Onyx text-white font-normal">
        <div className="mt-12 sm:mt-6">
          <img className="mb-6" src={image} alt="" />
        </div>
        <div className="sm:mt-6">
          <ul className="sm:flex text-center">
            <li className="mb-6 ">
              <Link to="/"> HOME</Link>
            </li>
            <li className="mb-6 sm:ml-3">
              <Link to="/projects">PORTFOLIO</Link>
            </li>
            <li className="sm:ml-3">
              <Link to="/ContactMe">CONTACT ME</Link>
            </li>
          </ul>
        </div>
        <div className="flex ml-3 mt-4 mb-12 sm:mt-6 sm:mb-6">
          <img src={Github} alt="" />
          <img className="ml-4" src={Twitter} alt="" />
          <img className="ml-4" src={Linkedin} alt="" />
        </div>
      </div>
    </motion.div>
  );
}
