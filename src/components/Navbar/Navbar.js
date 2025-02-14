import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import zolaha from "./../../images/9DotsLogo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const [isRecruitingOpen, setIsRecruitingOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const routes = useMemo(
    () => [
      { path: "/", label: "Home" },
      { path: "/Marketing", label: "Marketing" },
      { path: "/Recruiting", label: "Recruiting" },
      { path: "/Blogs", label: "Blogs" },
      { path: "/Portfolio", label: "Portfolio" },
      { path: "/Contact", label: "Contact" },
    ],
    []
  );

  const marketingSubLinks = [
    "Digital Marketing",
    "SEO",
    "PPC Marketing",
    "Social Media Marketing",
    "Social Media Advertising",
    "Link Building",
    "Web Design",
    "Media Production",
    "Content Marketing",
    "Reputation Management",
    "E-commerce Marketing",
    "Online Marketplace Marketing",
  ];

  const recruitingSubLinks = [
    "Executive Search",
    "Recruitment Support",
    "Sourcing",
    "Candidates Evaluation",
  ];

  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  const handleClick = () => {
    setIsMobile((prev) => !prev);
  };

  const handleMouseEnter = (setDropdown) => {
    clearTimeout(dropdownTimeout);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    const timeout = setTimeout(() => {
      setDropdown(false);
    }, 2000);
    setDropdownTimeout(timeout);
  };

  return (
    <motion.nav
      className="main-navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="left-navbar">
        <div className="company-name">
          <span className="handwriting-text left-text">9DOTS</span>
          <Link to="/">
            <img
              className="company-logo"
              src={zolaha}
              alt="logo"
              loading="lazy"
            />
          </Link>
          <span className="handwriting-text right-text">AGENCY</span>
        </div>
      </div>

      <motion.div
        className="hamburger-menu"
        onClick={handleClick}
        whileTap={{ scale: 0.8 }}
        whileHover={{ rotate: 90 }}
      >
        {isMobile ? (
          <FaTimes className="ham-icon" />
        ) : (
          <FaBars className="ham-icon" />
        )}
      </motion.div>

      <div className={`middle-navbar ${isMobile ? "active" : ""}`}>
        <ul className="middle-navbar-list">
          {routes.map(({ path, label }) => (
            <li
              key={path}
              className={`link-item ${
                label === "Marketing" || label === "Recruiting" ? "dropdown" : ""
              }`}
              onMouseEnter={
                label === "Marketing"
                  ? () => handleMouseEnter(setIsMarketingOpen)
                  : label === "Recruiting"
                  ? () => handleMouseEnter(setIsRecruitingOpen)
                  : undefined
              }
              onMouseLeave={
                label === "Marketing"
                  ? () => handleMouseLeave(setIsMarketingOpen)
                  : label === "Recruiting"
                  ? () => handleMouseLeave(setIsRecruitingOpen)
                  : undefined
              }
            >
              <Link
                to={path}
                className={`link ${activeLink === path ? "active" : ""}`}
                onClick={() => setIsMobile(false)}
              >
                {label}
              </Link>

              {/* Dropdown for Marketing */}
              {label === "Marketing" && isMarketingOpen && (
                <ul className="dropdown-menu">
                  {marketingSubLinks.map((subLink, index) => (
                    <li key={index} className="dropdown-item">
                      <Link
                        to={`/Marketing/${subLink.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {subLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Dropdown for Recruiting */}
              {label === "Recruiting" && isRecruitingOpen && (
                <ul className="dropdown-menu">
                  {recruitingSubLinks.map((subLink, index) => (
                    <li key={index} className="dropdown-item">
                      <Link
                        to={`/Recruiting/${subLink.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {subLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
