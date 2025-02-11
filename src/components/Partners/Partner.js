import React from "react";
import "./partner.css";
import { motion } from "framer-motion";

const Partner = () => {
  const images = require.context('./BrandImages', false, /\.(png|jpe?g)$/);

  const brandImages1 = Array.from({ length: 31 }, (_, i) =>
    images(`./Asset ${i + 1}.${[7, 13].includes(i + 1) ? 'png' : 'jpg'}`)
  );

  const renderImages = (images) => (
    <motion.div
      className="brand-partners"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 500,
        ease: "linear",
      }}
    >
      <div className="image-wrapper">
        {[...images, ...images, ...images, ...images, ...images, ].map((img, index) => (
          <img src={img} alt="brand-partners" loading="lazy" key={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="brand-partners-container">
      {renderImages(brandImages1)}
    </div>
  );
};

export default Partner;
