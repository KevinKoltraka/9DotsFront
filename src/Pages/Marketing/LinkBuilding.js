import React from "react";
import "./LinkBuilding.css";
import { CheckCircle, Mail } from "lucide-react";

const LinkBuilding = () => {
  return (
    <div className="link-building-container">
      <header className="header">
        <h1>Link Building Services</h1>
        <p>Boost your website’s authority with high-quality backlinks.</p>
      </header>

      <section className="overview">
        <h2>What is Link Building?</h2>
        <p>
          Link building is the process of acquiring hyperlinks from other
          websites to your own. It helps improve search rankings and organic
          traffic.
        </p>
      </section>

      <section className="benefits">
        <h2>Benefits of Link Building</h2>
        <ul>
          <li><CheckCircle /> Higher search rankings</li>
          <li><CheckCircle /> Increased website traffic</li>
          <li><CheckCircle /> Better brand authority</li>
          <li><CheckCircle /> Long-term SEO success</li>
        </ul>
      </section>

      <section className="process">
        <h2>Our Process</h2>
        <div className="steps">
          <div className="step1"><h3>1. Research</h3><p>Identifying the best backlink opportunities.</p></div>
          <div className="step1"><h3>2. Outreach</h3><p>Reaching out to relevant websites for collaborations.</p></div>
          <div className="step1"><h3>3. Content Creation</h3><p>Developing high-quality guest posts and linkable assets.</p></div>
          <div className="step1"><h3>4. Monitoring</h3><p>Tracking and optimizing backlink performance.</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Boost Your Rankings?</h2>
        <button className="contact-btn"><Mail /> Contact Us</button>
      </section>
    </div>
  );
};

export default LinkBuilding;
