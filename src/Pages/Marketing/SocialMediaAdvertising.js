import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SocialMediaAdvertising.css';

const SocialMediaAdvertising = () => {
  // State to manage post interactions like likes, shares, and comments
  const [likes, setLikes] = useState(1000);
  const [shares, setShares] = useState(250);
  const [comments, setComments] = useState(15);

  // Interaction functions
  const handleLike = () => setLikes(likes + 1);
  const handleShare = () => setShares(shares + 1);
  const handleComment = () => setComments(comments + 1);

  return (
    <div className="social-media-ad-template">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Unlock the Power of Social Media Advertising
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Engage your audience with tailored social media campaigns that drive measurable results.
          </motion.p>
        </div>
      </motion.section>

      {/* Dynamic Social Media Feed Section */}
      <motion.section
        className="social-media-feed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Real-Time Campaign Performance</h2>

        <div className="social-feed">
          {/* Animated Social Media Post */}
          <motion.div
            className="social-post"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="post-content">
              <h3>Brand New Campaign</h3>
              <p>Your campaign just went live! Watch the numbers soar!</p>
            </div>

            {/* Post Engagement */}
            <div className="post-stats">
              <motion.div
                className="post-likes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <button className="like-btn" onClick={handleLike}>👍 {likes} Likes</button>
              </motion.div>

              <motion.div
                className="post-shares"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <button className="share-btn" onClick={handleShare}>🔁 {shares} Shares</button>
              </motion.div>

              <motion.div
                className="post-comments"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button className="comment-btn" onClick={handleComment}>💬 {comments} Comments</button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Real-Time Analytics Graph */}
        <motion.div
          className="analytics-graph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div className="graph">
            <div className="graph-title">Post Engagement</div>
            <div className="graph-bars">
              <motion.div
                className="engagement-bar"
                initial={{ width: 0 }}
                animate={{ width: `${(likes / 5000) * 100}%` }}
                transition={{ duration: 1.5 }}
              >
                <span>{(likes / 5000) * 100}% Likes</span>
              </motion.div>
              <motion.div
                className="shares-bar"
                initial={{ width: 0 }}
                animate={{ width: `${(shares / 1000) * 100}%` }}
                transition={{ duration: 1.5 }}
              >
                <span>{(shares / 1000) * 100}% Shares</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action with Interactive Button */}
      <motion.section
        className="cta-social"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Get Started with Your Campaign Today!</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cta-btn"
        >
          Start Campaign
        </motion.button>
      </motion.section>
    </div>
  );
};

export default SocialMediaAdvertising;
