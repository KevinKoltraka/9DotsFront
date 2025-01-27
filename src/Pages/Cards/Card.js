import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Import icons from react-icons/fa
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
  btText4, // New prop for a fourth button
  marketingPath, // Prop for the marketing path
  recruitingPath, // Prop for the recruiting path
  direction = "left",
  isFirstCard = false, // New prop to check if it's the first card
}) => {
  return (
    <div className="cards-box">
      <div className="cards-inside">
        {/* Conditionally render the image only if 'image' is passed */}
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
          {/* Conditionally render btText1 for the first card only and link it to the marketing path */}
          {isFirstCard && (
            <Link to={marketingPath}>
              <button className="primary-button">{btText1}</button>
            </Link>
          )}

          {/* Conditionally render btText3 for other cards and link it to the recruiting path */}
          {!isFirstCard && btText3 && (
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

          {btText4 && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <button className="fourth-button">
                {btText4} {/* Text */}
                <FaInstagram style={{ marginLeft: "8px" }} /> {/* Instagram icon */}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
