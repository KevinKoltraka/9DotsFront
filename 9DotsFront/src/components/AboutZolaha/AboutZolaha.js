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
    if (AboutImg && !AboutImg.includes("vimeo")) preloadImage(AboutImg);
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
    <div className={`about-zolaha-container ${ClassNameabout_zolaha_section}`}>
      <div className="about-zolaha-section">
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
            {AboutImg && AboutImg.includes("vimeo") ? (
              <motion.div
                className={AboutZolahaImage}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                variants={fadeInVariant}
                transition={transitionProps}
              >
                <iframe
                  src={AboutImg}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Vimeo Video"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                />
              </motion.div>
            ) : AboutImg && AboutImg.endsWith(".mp4") ? (
              <motion.video
                src={AboutImg}
                className={AboutZolahaImage}
                alt={CompanyScene || "Default description of the video"}
                autoPlay
                muted
                loop
                playsInline
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                variants={fadeInVariant}
                transition={transitionProps}
              />
            ) : (
              <motion.img
                src={AboutImg} // Ensure it's passed correctly
                className={AboutZolahaImage}
                alt={CompanyScene || "Default description of the image"}
                loading="lazy"
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                variants={fadeInVariant}
                transition={transitionProps}
              />
            )}
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
    </div>
  );
};

export default React.memo(AboutZolaha);
