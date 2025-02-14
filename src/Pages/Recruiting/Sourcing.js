import React from "react";
import "./Sourcing.css";
import { FaSearch, FaNetworkWired, FaChartBar, FaUserCheck, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Sourcing = () => {
  return (
    <div className="sourcing-container">
      <motion.div 
        className="header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Strategic Talent Sourcing</h1>
        <p>Identifying and connecting with the best talent for your organization.</p>
      </motion.div>

      <div className="sourcing-strategy">
        <div className="strategy-card">
          <FaSearch className="icon" />
          <h3>Proactive Search</h3>
          <p>We identify talent before the need arises, ensuring a strong pipeline.</p>
        </div>
        <div className="strategy-card">
          <FaNetworkWired className="icon" />
          <h3>Extensive Networking</h3>
          <p>Building connections across industries for efficient candidate discovery.</p>
        </div>
        <div className="strategy-card">
          <FaChartBar className="icon" />
          <h3>Data-Driven Insights</h3>
          <p>Leveraging analytics to target high-potential candidates.</p>
        </div>
        <div className="strategy-card">
          <FaUserCheck className="icon" />
          <h3>Qualification & Vetting</h3>
          <p>Ensuring candidates align with company culture and goals.</p>
        </div>
        <div className="strategy-card">
          <FaLightbulb className="icon" />
          <h3>Innovative Techniques</h3>
          <p>Utilizing AI and predictive hiring methods for optimized sourcing.</p>
        </div>
      </div>

      <motion.div 
        className="market-trends"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Real-Time Sourcing Trends</h2>
        <p>Stay updated on evolving talent sourcing strategies and market shifts.</p>
        <div className="trend-dashboard">
          <div className="trend-card">Tech Hiring Surge: +20% Demand</div>
          <div className="trend-card">Remote Work Adaptation: 30% More Candidates Open to Global Roles</div>
          <div className="trend-card">AI in Hiring: 50% Increase in Smart Candidate Matching</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sourcing;
