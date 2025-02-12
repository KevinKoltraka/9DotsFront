import React from "react";
import { motion } from "framer-motion";
import "./main.scss";

const SentimentMeter = ({ score }) => {
  return (
    <div className="meter-container">
      <motion.div
        className="meter-bar"
        animate={{ width: `${score}%`, backgroundColor: score > 70 ? "green" : score > 40 ? "orange" : "red" }}
        transition={{ duration: 0.8 }}
      />
      <p className="meter-label">Reputation Score: {score}%</p>
    </div>
  );
};

export default SentimentMeter;
