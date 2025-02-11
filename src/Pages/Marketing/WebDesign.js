import React from "react";
import "./WebDesign.css";
import { CheckCircle, Code, Layout, Brush, Rocket } from "lucide-react";

const WebDesign = () => {
  return (
    <div className="web-design-container">
      <header className="header">
        <h1>Premium Web Design Services</h1>
        <p>Innovative, responsive, and high-performance websites tailored for success.</p>
      </header>

      <section className="overview">
        <h2>Why Our Web Design Stands Out?</h2>
        <p>
          We craft cutting-edge websites that blend creativity with functionality, ensuring 
          a seamless user experience across all devices.
        </p>
      </section>

      <section className="benefits">
        <h2>Our Expertise</h2>
        <ul>
          <li><CheckCircle /> Fully Responsive & Mobile-First</li>
          <li><CheckCircle /> Lightning-Fast Performance</li>
          <li><CheckCircle /> Advanced SEO Integration</li>
          <li><CheckCircle /> Custom UI/UX with Modern Aesthetics</li>
          <li><CheckCircle /> Scalable & Future-Proof Architecture</li>
        </ul>
      </section>

      <section className="process">
        <h2>Our Approach</h2>
        <div className="steps">
          <div className="step2"><Layout size={28} /><h3>1. Discovery & Strategy</h3><p>Deep dive into your brand, competitors, and goals.</p></div>
          <div className="step2"><Brush size={28} /><h3>2. Design & Prototyping</h3><p>Creating interactive UI mockups for a visually engaging experience.</p></div>
          <div className="step2"><Code size={28} /><h3>3. Development & Optimization</h3><p>High-performance coding and seamless functionality.</p></div>
          <div className="step2"><Rocket size={28} /><h3>4. Launch & Growth</h3><p>Deployment, monitoring, and continuous improvements.</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Transform Your Vision Into Reality</h2>
        <button className="contact-btn"><Code /> Get Started Today</button>
      </section>
    </div>
  );
};

export default WebDesign;
