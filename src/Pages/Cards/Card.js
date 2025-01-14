import React, { useRef, useMemo } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Card = ({
  instagramUrl,
  image,
  altText,
  businessLabel,
  businessTitle,
  businessPara,
  businessPara2,
  businessPara3,
  businessPara4,
  btText1,
  btText2,
  btText3,
  marketingPath, // Prop for the marketing path
  recruitingPath, // Prop for the recruiting path
  direction = "left",
  isFirstCard = false, // New prop to check if it's the first card
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { triggerOnce: false });

  const slideInVariants = useMemo(() => ({
    hidden: direction === "left" ? { opacity: 0, x: -300, scale: 0.95 } : { opacity: 0, x: 300, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  }), [direction]);

  return (
    <motion.div
      ref={cardRef}
      className="cards-box"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <div className="cards-inside">
        <div className="card-image-box">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={altText} loading="lazy" />
          </a>
        </div>
        <label className="card-label">{businessLabel}</label>
        <h2 className="card-title">{businessTitle}</h2>
        {businessPara && <p className="card-para">{businessPara}</p>}
        {businessPara2 && <p className="card-para">{businessPara2}</p>}
        {businessPara3 && <p className="card-para">{businessPara3}</p>}
        {businessPara4 && <p className="card-para">{businessPara4}</p>}

        <div className="button-box">
          {/* Conditionally render btText1 for the first card only and link it to the marketing path */}
          {isFirstCard && (
            <Link to={marketingPath}>
              <button className="primary-button">{btText1}</button>
            </Link>
          )}

          {/* Conditionally render btText3 for other cards and link it to the recruiting path */}
          {!isFirstCard && (
            <Link to={recruitingPath}>
              <button className="third-button">{btText3}</button>
            </Link>
          )}

          {/* Always render btText2 and link it to WhatsApp */}
          <Link to="https://api.whatsapp.com/send?phone=355688172927" target="_blank">
            <button className="secondary-button">
              {btText2} {/* Text first */}
              <FaWhatsapp style={{ marginLeft: "8px" }} /> {/* WhatsApp icon on the right */}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Card);
