import React from "react";
import "./SocialMediaMarketing.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SocialMediaMarketing = () => {
  return (
    <div className="social-media-marketing">
      {/* Hero Section with Dynamic Scroll Effect */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Unleash Your Brand’s Voice with Social Media</h1>
          <p className="hero-description">
            Take your brand to the next level with the power of social media—where engagement turns into influence and creativity knows no bounds.
          </p>
          <Link to="/contact">
            <button className="cta-button">Let’s Get Started</button>
          </Link>
        </motion.div>
      </section>

      {/* The Pulse of Social Media */}
      <section className="pulse-section">
        <div className="pulse-content">
          <h2>Feel the Pulse of Social Media</h2>
          <p>
            Social media is constantly evolving. Our dynamic campaigns respond to real-time trends, driving engagement like never before.
          </p>
          <motion.div
            className="pulse-animation"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
          >
            <div className="pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Journey - Interactive Scrollable Timeline */}
      <section className="journey-section">
        <h2 className="journey-title">Your Social Media Journey</h2>
        <div className="journey-timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3>Stage 1: Crafting the Strategy</h3>
            <p>We begin by understanding your brand, audience, and goals to create a roadmap for success on social media.</p>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3>Stage 2: Building Engagement</h3>
            <p>Our campaigns focus on creating meaningful interactions with your audience—likes, comments, shares, and much more.</p>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <h3>Stage 3: Influencing Through Creativity</h3>
            <p>We push the limits of creativity, crafting visually stunning content and viral posts that capture attention.</p>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <h3>Stage 4: Measuring Success</h3>
            <p>With each campaign, we monitor results in real-time and optimize for the best possible outcomes.</p>
          </motion.div>
        </div>
      </section>

      {/* Creative Impact - Showcasing Work */}
      <section className="creative-section">
        <h2 className="creative-title">Crafting Campaigns that Speak to the Soul</h2>
        <div className="creative-gallery">
          <motion.div
            className="creative-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://source.unsplash.com/1200x800/?social-media,marketing"
              alt="Creative Campaign"
            />
            <p>Campaigns that make an impression.</p>
          </motion.div>
          <motion.div
            className="creative-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://source.unsplash.com/1200x800/?branding,social-media"
              alt="Branding Impact"
            />
            <p>Turning vision into viral content.</p>
          </motion.div>
        </div>
      </section>

      {/* The Impact of Social Media - Interactive Graphs */}
      <section className="impact-section">
        <h2>The Impact of Social Media on Your Brand</h2>
        <motion.div
          className="impact-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="impact-card">
            <h3>Brand Visibility</h3>
            <p>Social media expands your reach beyond traditional advertising, introducing your brand to global audiences.</p>
          </div>
          <div className="impact-card">
            <h3>Increased Engagement</h3>
            <p>Real-time engagement and audience interaction foster stronger relationships and higher brand loyalty.</p>
          </div>
          <div className="impact-card">
            <h3>Revenue Growth</h3>
            <p>Social media drives conversions, helping turn engagement into tangible sales and profits.</p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA - Close with a Bold Statement */}
      <section className="final-cta">
        <h2>Let’s Make Your Brand Unforgettable</h2>
        <p>Join us in revolutionizing your social media presence. We turn every post into an opportunity.</p>
        <Link to="/contact">
          <button className="cta-button">Start Your Campaign</button>
        </Link>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
