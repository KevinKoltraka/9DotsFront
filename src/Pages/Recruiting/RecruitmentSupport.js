import React from "react";
import "./RecruitmentSupport.css";
import { FaUsers, FaBrain, FaRocket, FaChartPie, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const RecruitmentSupport = () => {
  return (
    <div className="recruitment-container">
      <motion.div 
        className="header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Smart Recruitment Support</h1>
        <p>Empowering businesses with innovative hiring strategies and AI-driven insights.</p>
      </motion.div>

      <div className="support-strategy">
        <div className="strategy-card">
          <FaUsers className="icon" />
          <h3>Talent Pool Optimization</h3>
          <p>Building and refining a strategic pool of highly qualified candidates.</p>
        </div>
        <div className="strategy-card">
          <FaBrain className="icon" />
          <h3>AI-Enhanced Screening</h3>
          <p>Leveraging artificial intelligence to match top talent with ideal roles.</p>
        </div>
        <div className="strategy-card">
          <FaRocket className="icon" />
          <h3>Accelerated Hiring</h3>
          <p>Reducing time-to-hire with efficient, data-driven recruitment workflows.</p>
        </div>
        <div className="strategy-card">
          <FaChartPie className="icon" />
          <h3>Data-Backed Decisions</h3>
          <p>Using real-time analytics and market trends to enhance recruitment strategies.</p>
        </div>
        <div className="strategy-card">
          <FaHandshake className="icon" />
          <h3>Seamless Onboarding</h3>
          <p>Ensuring smooth transitions with customized onboarding experiences.</p>
        </div>
      </div>

      <motion.div 
        className="insights"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Recruitment Intelligence Hub</h2>
        <p>Gain access to in-depth insights, reports, and workforce trend analysis.</p>
        <button className="cta-button">Explore Reports</button>
      </motion.div>

      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Live Hiring Trends</h2>
        <p>Stay ahead with up-to-the-minute insights into recruitment shifts and demands.</p>
        <div className="trend-dashboard">
          <div className="trend-card">Tech Hiring Boom: 20% Increase in Demand</div>
          <div className="trend-card">Remote Work Surge: 35% More Flexible Positions</div>
          <div className="trend-card">Healthcare Hiring Expansion: +18% Growth</div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecruitmentSupport;
