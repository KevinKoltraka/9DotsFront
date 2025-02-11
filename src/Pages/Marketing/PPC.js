import React, { useState } from 'react';
import './PPC.css';

const PPC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <div className="ppc-page">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/ppc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Maximize Your Growth with Data-Driven PPC Campaigns</h1>
          <p className="hero-desc">
            Unlock the potential of your business with laser-focused, data-backed PPC strategies. Our team at 9Dots tailors
            every campaign to deliver maximum ROI while building brand awareness and driving high-quality traffic.
          </p>
          <button className="cta-button" onClick={handleModalToggle}>
            Get Your Free PPC Strategy Consultation
          </button>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2 className="section-title">Why Choose Our PPC Services?</h2>
        <p className="section-description">
          Our expertise goes beyond basic ad placement. We specialize in delivering full-funnel PPC strategies that not only
          increase your visibility but also ensure you convert traffic into paying customers. Here’s how we do it.
        </p>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3>Custom PPC Strategy</h3>
            <p>We don’t just run ads. We build strategies tailored to your business goals, industry, and customer behavior.</p>
          </div>
          <div className="expertise-item">
            <h3>Real-Time Data & Insights</h3>
            <p>Gain insights that help you understand your audience better, allowing us to continuously optimize for success.</p>
          </div>
          <div className="expertise-item">
            <h3>Comprehensive Ad Optimization</h3>
            <p>We meticulously craft and test ad copy, targeting, and landing pages to ensure you get the best possible ROI.</p>
          </div>
          <div className="expertise-item">
            <h3>Cross-Platform Advertising</h3>
            <p>Expand your reach through Google Ads, Bing, Facebook, Instagram, and LinkedIn to tap into multiple traffic sources.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <h2 className="section-title">Client Success Stories</h2>
        <div className="cases">
          <div className="case">
            <h3>Client A: SaaS Business</h3>
            <p>
              In just 90 days, we helped this SaaS client increase their lead generation by over 250%. Our hyper-targeted
              Google Ads campaigns were optimized for customer lifecycle stages, increasing conversions at every step.
            </p>
            <p>Results: <strong>+250% Lead Generation</strong>, <strong>60% Lower CPA</strong></p>
          </div>
          <div className="case">
            <h3>Client B: E-Commerce</h3>
            <p>
              A leading e-commerce store saw a 300% return on ad spend (ROAS) after we took over their paid search strategy.
              Our tailored Facebook and Google campaigns drove not only traffic but also high-value conversions.
            </p>
            <p>Results: <strong>300% ROAS</strong>, <strong>+200% Increase in Conversions</strong></p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Working with 9Dots was a game-changer. The targeted campaigns they built for us resulted in a steady increase in
              qualified leads. Their ability to scale our PPC efforts while optimizing cost-per-click was unmatched."
            </p>
            <h4>- Emily Johnson, Marketing Director at X-Tech</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Our business saw a major boost after partnering with 9Dots. They created the perfect balance between PPC strategy and
              budget allocation, providing us with incredible ROI on all platforms."
            </p>
            <h4>- Robert Hayes, CEO of HomePlus</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2 className="cta-title">Are You Ready to Skyrocket Your Business with PPC?</h2>
        <p className="cta-description">
          Let’s start a conversation. Book your free consultation today, and we'll help you plan the perfect PPC campaign that
          drives measurable results.
        </p>
        <button className="cta-button" onClick={handleModalToggle}>
          Book Your Free Consultation
        </button>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Request Your Free PPC Strategy Consultation</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Company" required />
              <textarea placeholder="Tell us about your business and PPC goals" required></textarea>
              <button type="submit">Submit</button>
            </form>
            <button className="close-modal" onClick={handleModalToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PPC;
