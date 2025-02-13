import React from 'react';
import './OnlineMarketplaceMarketing.css';

const OnlineMarketplaceMarketing = () => {
  return (
    <div className="online-marketplace-marketing-container">
      <header className="header">
        <h1>Online Marketplace Marketing</h1>
        <p>Unlock the full potential of your products on online marketplaces.</p>
      </header>

      <section className="overview">
        <h2>Our Approach</h2>
        <p>
          At 9Dots, we specialize in developing strategies that help you grow your online presence and increase sales on various online marketplaces. From optimization to targeted marketing campaigns, we tailor our services to meet your business needs.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Marketplace Optimization</h3>
          <p>
            We ensure that your product listings are fully optimized with the right keywords, engaging content, and high-quality images, increasing visibility and conversions.
          </p>
        </div>
        <div className="service-card">
          <h3>Advertising Campaigns</h3>
          <p>
            Running paid campaigns on popular marketplaces like Amazon, eBay, and Etsy can boost your sales. We craft ads that target the right audience, ensuring a high return on investment.
          </p>
        </div>
        <div className="service-card">
          <h3>Customer Engagement</h3>
          <p>
            Building customer trust is key. We help you engage with customers through promotions, reviews, and customer support strategies to increase your brand loyalty.
          </p>
        </div>
      </section>

      <section className="statistics">
        <h2>Proven Results</h2>
        <p>Our strategies have delivered exceptional results for clients in diverse industries.</p>
        <ul>
          <li>+30% Sales Increase</li>
          <li>+25% Brand Visibility</li>
          <li>+40% Return on Ad Spend (ROAS)</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Ready to Grow Your Marketplace Presence?</h2>
        <button>Get in Touch</button>
      </section>
    </div>
  );
};

export default OnlineMarketplaceMarketing;
