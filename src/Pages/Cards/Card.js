import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./card.css";

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
  btText4,
  marketingPath,
  recruitingPath,
  direction = "left",
  isFirstCard = false,
  backgroundImage, // <-- New prop to pass the background image URL
}) => {
  return (
    <div
      className="cards-box"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background dynamically
    >
      <div className="cards-inside">
        {image && (
          <div className="card-image-box">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={altText} loading="lazy" />
            </a>
          </div>
        )}

        <label className="card-label">{businessLabel}</label>
        <h2 className="card-title">{businessTitle}</h2>
        {businessPara && <p className="card-para">{businessPara}</p>}
        {businessPara2 && <p className="card-para">{businessPara2}</p>}
        {businessPara3 && <p className="card-para">{businessPara3}</p>}
        {businessPara4 && <p className="card-para">{businessPara4}</p>}

        <div className="button-box">
          {isFirstCard && (
            <Link to={marketingPath}>
              <button className="primary-button">{btText1}</button>
            </Link>
          )}

          {!isFirstCard && btText3 && (
            <Link to={recruitingPath}>
              <button className="third-button">{btText3}</button>
            </Link>
          )}

          {btText4 && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <button className="fourth-button">
                {btText4}
                <FaInstagram style={{ marginLeft: "8px" }} />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
