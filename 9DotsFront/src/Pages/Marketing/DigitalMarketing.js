import React, { useState, useEffect } from 'react';
import './DigitalMarketing.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import { Line } from 'react-chartjs-2'; // Add a chart library like chart.js for dynamic graphs
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DigitalMarketing = () => {
  const { ref: offeringsRef, inView: offeringsInView } = useInView({ triggerOnce: true });

  // Dynamic stats
  const [stats, setStats] = useState({
    leads: 1200,
    conversions: 75,
    clients: 50,
  });

  const [animatedStats, setAnimatedStats] = useState({
    leads: 0,
    conversions: 0,
    clients: 0,
  });

  useEffect(() => {
    // Simulate dynamic stats with animation
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        leads: prevStats.leads + 10,
        conversions: prevStats.conversions + 1,
        clients: prevStats.clients + 1,
      }));
    }, 2000); // Update every 2 seconds

    // Animate stats increase on screen
    const animateStats = setInterval(() => {
      setAnimatedStats((prev) => ({
        leads: prev.leads < stats.leads ? prev.leads + 10 : prev.leads,
        conversions: prev.conversions < stats.conversions ? prev.conversions + 1 : prev.conversions,
        clients: prev.clients < stats.clients ? prev.clients + 1 : prev.clients,
      }));
    }, 50); // Smooth animation

    return () => {
      clearInterval(interval);
      clearInterval(animateStats);
    };
  }, [stats]);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Leads Generated',
        data: [1200, 1500, 1800, 2000, 2500],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="digital-marketing-page">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="/digitalmarketing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </section>

      {/* Key Offerings with Hover Effects */}
      <section ref={offeringsRef} className={`key-offerings ${offeringsInView ? 'animate' : ''}`}>
        <div className="offering">
          <h3>Custom Strategies</h3>
          <p>Tailored plans that fit your unique business needs.</p>
        </div>
        <div className="offering">
          <h3>Data-Driven Results</h3>
          <p>We provide measurable outcomes backed by data.</p>
        </div>
        <div className="offering">
          <h3>Dedicated Team</h3>
          <p>A team that works tirelessly to grow your brand.</p>
        </div>
      </section>

      {/* Real-Time Stats with Animated Values */}
      <section className="real-time-stats">
        <h2>Our Results in Real-Time</h2>
        <div className="stats">
          <div className="stat">
            <h3>{animatedStats.leads}</h3>
            <p>Leads Generated</p>
          </div>
          <div className="stat">
            <h3>{animatedStats.conversions}%</h3>
            <p>Conversion Rate</p>
          </div>
          <div className="stat">
            <h3>{animatedStats.clients}</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Dynamic Chart */}
      <section className="chart-section">
        <h2>Leads Generated Over Time</h2>
        <Line data={chartData} options={{ responsive: true }} />
      </section>

      {/* Client Testimonials Carousel */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <p>"9Dots helped us grow our business exponentially. Their digital marketing strategies are top-notch!"</p>
            <h4>John Doe, CEO</h4>
          </div>
          <div>
            <p>"A dedicated team with the right expertise to take your brand to the next level. Highly recommend!"</p>
            <h4>Jane Smith, Founder</h4>
          </div>
          <div>
            <p>"The results speak for themselves. We saw a significant increase in leads and conversions."</p>
            <h4>Mark Johnson, Marketing Head</h4>
          </div>
        </Carousel>
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Request a Consultation
        </motion.button>
      </motion.section>
    </div>
  );
};

export default DigitalMarketing;
