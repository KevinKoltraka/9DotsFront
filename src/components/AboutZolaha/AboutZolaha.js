import React, { useRef, useEffect } from "react";
import "./aboutzolaha.css";
import { motion, useInView } from "framer-motion";

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

const AboutZolaha = ({
  FaIcon,
  ClassNameabout_zolaha_section,
  AboutZolahaImage,
  AboutImg,
  CompanyName,
  CompanyScene,
  CompanyDetails,
  CompanyDetails2,
  Checklist1,
  Checklist2,
  Checklist3,
  Checklist4,
  Checklist5,
  Checklist6,
  redirectUrl,
}) => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    if (AboutImg) preloadImage(AboutImg);
  }, [AboutImg]);

  const isLeftInView = useInView(leftSectionRef, { triggerOnce: false });
  const isRightInView = useInView(rightSectionRef, { triggerOnce: false });

  const fadeInVariant = {
    hidden: { opacity: 0, transform: "translateX(-100px) scale(0.95)" },
    visible: { opacity: 1, transform: "translateX(0) scale(1)" },
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, transform: "translateX(100px) scale(0.95)" },
    visible: { opacity: 1, transform: "translateX(0) scale(1)" },
  };

  const transitionProps = { duration: 0.9, ease: "easeOut" };

  const checklistItems = [
    Checklist1,
    Checklist2,
    Checklist3,
    Checklist4,
    Checklist5,
    Checklist6,
  ];

  return (
    <div className={ClassNameabout_zolaha_section}>
      {/* Left Section */}
      <motion.div
        ref={leftSectionRef}
        className="left-about-zolaha-section"
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        variants={fadeInVariant}
        transition={transitionProps}
        style={{ willChange: "transform, opacity" }}
      >
        <a
          href={redirectUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${CompanyName}`}
        >
          <img
            src={AboutImg || "default-image-path.png"}
            className={AboutZolahaImage}
            alt={CompanyScene || "Default description of the image"}
            loading="lazy"
          />
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        ref={rightSectionRef}
        className="right-about-zolaha-section"
        initial="hidden"
        animate={isRightInView ? "visible" : "hidden"}
        variants={fadeInRightVariant}
        transition={transitionProps}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="about-company-name">
          <h3>{CompanyName || "Company Name"}</h3>
        </div>

        <div className="about-company-scene">
          <h2>{CompanyScene || "Our Scene"}</h2>
        </div>

        <div className="about-company-details">
          <p>{CompanyDetails}</p>
          <p>{CompanyDetails2}</p>
        </div>

        <div className="company-facilities">
          {checklistItems.map(
            (item, index) =>
              item && (
                <div className="checklist-company" key={index}>
                  <p>
                    {FaIcon} {item}
                  </p>
                </div>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(AboutZolaha);
