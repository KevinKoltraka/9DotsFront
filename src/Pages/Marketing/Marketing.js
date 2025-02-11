import React, { useState } from "react";
import "./marketing.css";
import marketingImage from "../../images/marketing/1.png";
import marketingImage2 from "../../images/marketing/2.png";
import marketingImage3 from "../../images/marketing/3.png";
import marketingImage4 from "../../images/marketing/4.png";
import marketingImage5 from "../../images/marketing/5.png";
import marketingImage6 from "../../images/marketing/6.png";
import marketingImage7 from "../../images/marketing/7.png";
import marketingImage8 from "../../images/marketing/8.png";
import marketingImage9 from "../../images/marketing/9.png";
import marketingImage10 from "../../images/marketing/10.png";
import marketingImage11 from "../../images/marketing/11.png";
import marketingImage12 from "../../images/marketing/12.png";

const MarketingPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    // Scroll to top if we are switching to "View Less"d
    if (showMore) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setShowMore(!showMore);
  };

  return (
    <div className="marketing-container">
      <header className="header">
        <h1>Welcome to 9Dots</h1>
        <p>Your trusted marketing and recruiting agency</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div
            className="service-card digital-marketing"
            style={{ backgroundImage: `url(${marketingImage})` }}
          ></div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${marketingImage2})` }}
          ></div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${marketingImage3})` }}
          ></div>

          {/* Only show the rest if 'showMore' is true */}
          {showMore && (
            <>
              <div
                className="service-card"
                style={{ backgroundImage: `url(${marketingImage4})` }}
              ></div>
              <div
                className="service-card seo"
                style={{ backgroundImage: `url(${marketingImage5})` }}
              ></div>
              <div
                className="service-card ppc-marketing"
                style={{ backgroundImage: `url(${marketingImage6})` }}
              ></div>
              <div
                className="service-card social-media-marketing"
                style={{ backgroundImage: `url(${marketingImage7})` }}
              ></div>
              <div
                className="service-card social-media-advertising"
                style={{ backgroundImage: `url(${marketingImage8})` }}
              ></div>
              <div
                className="service-card link-building"
                style={{ backgroundImage: `url(${marketingImage9})` }}
              ></div>
              <div
                className="service-card web-design"
                style={{ backgroundImage: `url(${marketingImage10})` }}
              ></div>
              <div
                className="service-card media-production"
                style={{ backgroundImage: `url(${marketingImage11})` }}
              ></div>
              <div
                className="service-card content-marketing"
                style={{ backgroundImage: `url(${marketingImage12})` }}
              ></div>
            </>
          )}
        </div>

        <div className="toggle-btn-container">
          <button onClick={toggleShowMore} className="toggle-btn">
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </section>

      <section className="impact-stories">
        <h2>Our Work That Leaves an Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <h3>Reimagining Experiences</h3>
            <p>
              We transform digital touchpoints into experiences that not only
              look stunning but also resonate deeply with customers. Every
              click, every interaction is designed to leave a lasting
              impression.
            </p>
          </div>
          <div className="impact-card">
            <h3>Crafting Conversations</h3>
            <p>
              From compelling copy to captivating visuals, we create marketing
              that sparks conversation. It’s not just about selling; it’s about
              building meaningful connections that engage and inspire.
            </p>
          </div>
          <div className="impact-card">
            <h3>Shaping Stories</h3>
            <p>
              Every brand has a story. We help tell yours in the most authentic
              and creative ways, making sure your message is heard by the right
              audience at the right time.
            </p>
          </div>
          <div className="impact-card">
            <h3>Turning Ideas Into Action</h3>
            <p>
              We turn visionary ideas into actionable marketing strategies. With
              a blend of creativity, data, and technology, we ensure your brand
              is seen, heard, and remembered.
            </p>
          </div>
          <div className="impact-card">
            <h3>Driving Change</h3>
            <p>
              Marketing is not just about today; it's about shaping the future.
              We empower brands to innovate, evolve, and lead with strategies
              that drive sustainable change and growth.
            </p>
          </div>
          <div className="impact-card">
            <h3>Inspiring Action</h3>
            <p>
              We create campaigns that move people to take action—whether it’s a
              purchase, a share, or a conversation. Our marketing is designed to
              inspire real-world results.
            </p>
          </div>
        </div>
      </section>

      <footer className="contactus">
        <p>Contact us for your marketing and recruiting needs</p>
        <button className="getintouch">Get in Touch</button>
      </footer>
    </div>
  );
};

export default MarketingPage;
