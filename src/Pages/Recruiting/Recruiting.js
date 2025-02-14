import React, { useState } from "react";
import "./recruiting.css";
import marketingImage from "../../images/recruitment/Rec1.png";
import marketingImage2 from "../../images/recruitment/Rec2.png";
import marketingImage3 from "../../images/recruitment/Rec3.png";
import marketingImage4 from "../../images/recruitment/Rec4.png";

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
        <h2>Our Work That Transforms Careers</h2>
        <div className="impact-cards2">
          <div className="impact-card">
            <h3>Redefining Opportunities</h3>
            <p>
              We connect talent with the right opportunities, ensuring every career move is strategic and impactful. Our recruitment process is designed to unlock potential and create lasting professional growth.
            </p>
          </div>
          <div className="impact-card">
            <h3>Building Meaningful Connections</h3>
            <p>
              It's not just about filling roles; it’s about forging meaningful relationships between employers and candidates. We focus on long-term success and mutual growth.
            </p>
          </div>
          <div className="impact-card">
            <h3>Crafting Career Stories</h3>
            <p>
              Every professional has a unique journey. We help shape compelling career narratives that align individuals with organizations where they can truly thrive.
            </p>
          </div>
          <div className="impact-card">
            <h3>Turning Ambition Into Reality</h3>
            <p>
              We take aspirations and transform them into real career opportunities. Through our expertise, we empower candidates and businesses to make confident, future-focused decisions.
            </p>
          </div>
          <div className="impact-card">
            <h3>Driving Workforce Evolution</h3>
            <p>
              Recruitment is more than just hiring; it’s about shaping the future of work. We help companies build agile, skilled, and forward-thinking teams that drive success.
            </p>
          </div>
          <div className="impact-card">
            <h3>Inspiring Career Moves</h3>
            <p>
              We create opportunities that motivate professionals to take the next step—whether it's a new role, a leadership position, or an industry shift. Our recruitment solutions are designed to inspire action and drive results.
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
