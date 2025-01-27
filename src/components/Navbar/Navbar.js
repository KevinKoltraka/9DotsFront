import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import zolaha from "./../../images/9DotsLogo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  const handleClick = () => {
    setIsMobile((prev) => !prev); // Toggle mobile state
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
        whileTap={{ scale: 0.8 }} // Animation for click
        whileHover={{ rotate: 90 }} // Animation for hover
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
            <li key={path} className="link-item">
              <Link
                to={path}
                className={`link ${activeLink === path ? "active" : ""}`}
                onClick={() => setIsMobile(false)} // Close the menu on link click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
