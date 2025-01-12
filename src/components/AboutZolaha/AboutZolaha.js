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
    hidden: { opacity: 0, transform: "translateY(20px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
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
      <div ref={leftSectionRef} className="left-about-zolaha-section">
        <motion.a
          href={redirectUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${CompanyName}`}
          initial="hidden"
          animate={isLeftInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={transitionProps}
        >
          <motion.img
            src={AboutImg || "default-image-path.png"}
            className={AboutZolahaImage}
            alt={CompanyScene || "Default description of the image"}
            loading="lazy"
            initial="hidden"
            animate={isLeftInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={transitionProps}
          />
        </motion.a>
      </div>

      {/* Right Section */}
      <div ref={rightSectionRef} className="right-about-zolaha-section">
        <motion.div
          className="about-company-name"
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={transitionProps}
        >
          <h3>{CompanyName || "Company Name"}</h3>
        </motion.div>

        <motion.div
          className="about-company-scene"
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={transitionProps}
        >
          <h2>{CompanyScene || "Our Scene"}</h2>
        </motion.div>

        <motion.div
          className="about-company-details"
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={transitionProps}
        >
          <p>{CompanyDetails}</p>
          <p>{CompanyDetails2}</p>
        </motion.div>

        <div className="company-facilities">
          {checklistItems.map(
            (item, index) =>
              item && (
                <motion.div
                  className="checklist-company"
                  key={index}
                  initial="hidden"
                  animate={isRightInView ? "visible" : "hidden"}
                  variants={fadeInVariant}
                  transition={{ ...transitionProps, delay: index * 0.1 }}
                >
                  <p>
                    {FaIcon} {item}
                  </p>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutZolaha);
