import React, { useMemo } from "react";
import "./hero.css";
import { FaEnvelope } from "react-icons/fa";

const Hero = ({
  title,
  subtitle,
  description,
  urlLink,
  btnText,
  btnText2,
  heroImg,
  heroVideo,
  heroAlt = "Hero media",
  newImage,
  style,
  email,
  email2,
}) => {
  const gmailUrl = useMemo(
    () => `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    [email]
  );
  const gmailUrl2 = useMemo(
    () => `https://mail.google.com/mail/?view=cm&fs=1&to=${email2}`,
    [email2]
  );

  return (
    <div className="hero-section">
      {/* Left Section */}
      <div className="left-hero-section">
        <div className="left-hero-section-content">
          <h2>{title}</h2>
          {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
          <p>{description}</p>
          <div className="email-buttons">
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="send-message">
              <button className="button-header">
                <FaEnvelope className="email-icon" /> {btnText}
              </button>
            </a>
            {email2 && (
              <a href={gmailUrl2} target="_blank" rel="noopener noreferrer" className="send-message">
                <button className="button-header">
                  <FaEnvelope className="email-icon" /> {btnText2}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-hero-section">
        <div className="right-hero-section-content">
          {/* Render video if heroVideo is provided */}
          {heroVideo ? (
            <video
              src={heroVideo}
              aria-label={heroAlt}
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              width="100%"
              height="auto"
            />
          ) : heroImg ? ( // Check if heroImg is an iframe
            typeof heroImg === "string" ? (
              <img
                src={heroImg}
                alt={heroAlt}
                style={style}
                className="hero-image"
                loading="lazy"
              />
            ) : (
              heroImg // Render iframe
            )
          ) : (
            <div className="hero-placeholder">No media provided</div> // Fallback if no media
          )}
          {/* Optional static replacement image */}
          {newImage && (
            <img
              src={newImage}
              alt="Static replacement logo"
              className="replacement-image"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
