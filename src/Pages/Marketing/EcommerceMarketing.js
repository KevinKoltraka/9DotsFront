import React, { useState, useEffect } from "react";
import "./ecommerce.css";
import { motion } from "framer-motion";
import { FaShoppingCart, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

const initialServices = [
  { icon: <FaShoppingCart />, title: "E-commerce Strategy", desc: "Tailored strategies to scale your online store." },
  { icon: <FaChartLine />, title: "SEO & PPC", desc: "Optimized campaigns to drive sales and visibility." },
  { icon: <FaUsers />, title: "Customer Retargeting", desc: "Smart retargeting to convert visitors into buyers." },
  { icon: <FaGlobe />, title: "Multi-Channel Marketing", desc: "Sell across marketplaces with ease." }
];

const EcommerceMarketing = () => {
  const [services, setServices] = useState(initialServices);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="ecommerce-marketing">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        E-commerce Marketing Solutions
      </motion.h2>
      <p className="subtitle">Boost your online store with innovative strategies that work.</p>
      
      {/* What We Do Section */}
      <div className="what-we-do">
        <h3>What We Do</h3>
        <p>
          At 9Dots, we specialize in building unique and effective e-commerce marketing strategies tailored to your store’s needs. From increasing visibility through SEO and PPC to leveraging multi-channel marketing, we help brands like yours stand out in a crowded marketplace.
        </p>
      </div>

      {/* Our Approach Section */}
      <div className="our-approach">
        <h3>Our Approach</h3>
        <p>
          Our process involves deeply understanding your target audience and market dynamics. We combine cutting-edge analytics, customized strategies, and creative thinking to elevate your brand. Through data-driven decision-making and constant optimization, we ensure that your marketing efforts are always effective and relevant.
        </p>
      </div>

      {/* Interactive Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={`service-card ${highlighted === index ? "highlight" : ""}`} 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {/* Adding Hover Effect with Detail Slide-In */}
            <motion.div
              className="more-details"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>Learn more about how we can help grow your store.</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Client Testimonials Carousel */}
      <div className="testimonials">
        <h3>What Our Clients Say</h3>
        <motion.div
          className="carousel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>"9Dots helped us scale our online store faster than we expected. Their strategies are top-notch!"</p>
          <p>"We saw a 200% increase in sales within 6 months of working with 9Dots. Truly exceptional work!"</p>
        </motion.div>
      </div>

      {/* Case Studies Section */}
      <div className="case-studies">
        <h3>Case Studies</h3>
        <div className="case-study-card">
          <h4>Case Study 1: E-commerce SEO Optimization</h4>
          <p>We worked with XYZ Clothing to enhance their SEO, resulting in a 40% increase in organic traffic in 3 months.</p>
        </div>
        <div className="case-study-card">
          <h4>Case Study 2: Multi-Channel Growth Strategy</h4>
          <p>We helped ABC Electronics expand to multiple marketplaces, increasing their revenue by 60%.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started With Us
        </motion.button>
      </div>
    </section>
  );
};

export default EcommerceMarketing;
