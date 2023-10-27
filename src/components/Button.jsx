import React from "react";
import { motion } from "framer-motion";
export default function Button(props) {
  const { alternateClass, buttonText, onClickAction, imageSrc } = props;
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${alternateClass}`}
        onClick={onClickAction}
      >
        <img className="inline-block h-12 mr-12" src={imageSrc} alt="" />
        <p>{buttonText}</p>
      </motion.button>
    </div>
  );
}
