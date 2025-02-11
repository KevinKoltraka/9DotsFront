import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import zolaha from "./../../images/9DotsLogo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false); // State for dropdown
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // State for timeout
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

  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  const handleClick = () => {
    setIsMobile((prev) => !prev); // Toggle mobile state
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout); // Clear any existing timeout
    setIsMarketingOpen(true); // Show the dropdown
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsMarketingOpen(false); // Hide the dropdown after delay
    }, 2000); // Delay of 2000ms
    setDropdownTimeout(timeout); // Store the timeout
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
              className={`link-item ${label === "Marketing" ? "dropdown" : ""}`}
              onMouseEnter={label === "Marketing" ? handleMouseEnter : undefined}
              onMouseLeave={label === "Marketing" ? handleMouseLeave : undefined}
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
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
