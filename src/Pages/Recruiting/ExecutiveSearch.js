import React from "react";
import "./ExecutiveSearch.css";
import { FaUserTie, FaSearch, FaGlobe, FaChartLine, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const ExecutiveSearch = () => {
  return (
    <div className="executive-container">
      <motion.div 
        className="header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Elite Executive Search</h1>
        <p>Connecting top-tier talent with leading organizations worldwide.</p>
      </motion.div>

      <div className="search-strategy">
        <div className="strategy-card">
          <FaUserTie className="icon" />
          <h3>Tailored Approach</h3>
          <p>We customize every search to align with your company culture and goals.</p>
        </div>
        <div className="strategy-card">
          <FaSearch className="icon" />
          <h3>Precision Targeting</h3>
          <p>Our AI-driven analytics ensure we find the perfect candidate for your needs.</p>
        </div>
        <div className="strategy-card">
          <FaGlobe className="icon" />
          <h3>Global Reach</h3>
          <p>Access to an extensive network of top executives across industries.</p>
        </div>
        <div className="strategy-card">
          <FaChartLine className="icon" />
          <h3>Data-Driven Decisions</h3>
          <p>Utilizing market intelligence and analytics to drive strategic hiring.</p>
        </div>
        <div className="strategy-card">
          <FaHandshake className="icon" />
          <h3>Long-Term Partnerships</h3>
          <p>Building strong relationships to ensure continuous leadership success.</p>
        </div>
      </div>

      <motion.div 
        className="insights"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Industry Insights</h2>
        <p>Stay ahead with expert analysis on leadership trends, hiring strategies, and market movements.</p>
        <button className="cta-button">Explore Insights</button>
      </motion.div>

      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Real-Time Market Trends</h2>
        <p>Gain insights into emerging trends and executive movements in real-time.</p>
        <div className="trend-dashboard">
          <div className="trend-card">Tech Industry Growth: +15% Executive Hires</div>
          <div className="trend-card">Finance Leadership Shift: 8% Increase in Demand</div>
          <div className="trend-card">Healthcare C-Suite Openings Up by 12%</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExecutiveSearch;