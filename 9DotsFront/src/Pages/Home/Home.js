import React, { Suspense, lazy, useState, useRef } from "react";
import "./home.css";
import Ecom from "./../../images/mission.jpg";
import Happy from "./../../images/recruiting.png";
import DotsTeam from "./../../images/9dotsteam.mp4";
import OurVision from "./../../images/vision.mp4";
import OurMission from "./../../images/mission.mp4";

// Lazy load components
const AboutZolaha = lazy(() => import("../../components/AboutZolaha/AboutZolaha"));
const Partner = lazy(() => import("../../components/Partners/Partner"));
const Card = lazy(() => import("../Cards/Card"));

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null); // Reference to the scroll container

  // Mouse down event: Start dragging
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Get the initial mouse position
    setScrollLeft(scrollRef.current.scrollLeft); // Get current scroll position

    // Disable text selection during drag to prevent interference
    document.body.style.userSelect = "none";
  };

  // Mouse move event: While dragging
  const onMouseMove = (e) => {
    if (!isDragging) return; // Only apply movement if dragging

    const moveX = e.clientX - startX; // Calculate horizontal movement
    scrollRef.current.scrollLeft = scrollLeft - moveX; // Update the scroll position

    // Optional: Prevent default behavior to stop text selection on browsers
    e.preventDefault();
  };

  // Mouse up event: End dragging
  const onMouseUp = () => {
    setIsDragging(false);

    // Re-enable text selection after drag
    document.body.style.userSelect = "auto";
  };

  // Mouse leave event: In case the mouse leaves the area while dragging
  const onMouseLeave = () => {
    setIsDragging(false);

    // Re-enable text selection after drag
    document.body.style.userSelect = "auto";
  };

  // Function to scroll left using arrow
  const scrollLeftFunc = () => {
    scrollRef.current.scrollBy({
      left: -300, // Scroll 300px to the left
      behavior: "smooth",
    });
  };

  // Function to scroll right using arrow
  const scrollRightFunc = () => {
    scrollRef.current.scrollBy({
      left: 300, // Scroll 300px to the right
      behavior: "smooth",
    });
  };

  // Scroll to a specific testimonial based on index
  const scrollToTestimonial = (index) => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 64; // Adjust card width + gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index); // Update the active dot
  };

  return (
    <>
      {/* Lazy Loaded Video Section */}
      <Suspense fallback={<div>Loading Video...</div>}>
        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={DotsTeam} />
          </video>
        </div>
      </Suspense>
      {/* Lazy Loaded AboutZolaha Section (Our Mission) */}
      <Suspense fallback={<div>Loading Our Mission & Vision...</div>}>
        <AboutZolaha
          className="about-zolaha-section"
          CompanyName="Our Vision"
          AboutImg={OurVision}
          CompanyScene="Redefining Growth through Innovation"
          CompanyDetails="9Dots Agency aims to redefine the boundaries of digital marketing and recruitment by fostering creativity and innovation. We are committed to going beyond the limitations of traditional marketing and recruitment strategies, offering a fresh and dynamic approach to business growth. By combining expertise in key digital marketing disciplines—SEO, design, social media management, programming, Google Ads, and multimedia—9Dots seeks to take businesses to new heights."
          AboutBtnText="Follow Us on Instagram"
        />
      </Suspense>
      <Suspense fallback={<div>Loading Our Mission & Vision...</div>}>
        <AboutZolaha
          className="about-zolaha-section"
          CompanyName="Our Mission"
          AboutImg={OurMission}
          CompanyScene="Empowering Success Through Innovation"
          CompanyDetails="At the core of 9Dots Agency's mission is empowering businesses to achieve measurable success through customized and innovative marketing solutions. By leveraging the combined expertise of 10 dedicated professionals, 9Dots Agency creates tailored strategies that align with each client's unique market goals and needs. Led by Xhorxhina Maksuti, with over 8 years of experience in digital marketing, 9Dots aims to be a catalyst for transformation, driving growth and elevating brands through the most advanced digital tools and unconventional approaches. The agency is driven by a passion for helping businesses break boundaries and take their marketing to the next level."
          AboutBtnText="Follow Us on Instagram"
        />
      </Suspense>

      {/* Services Section with Lazy Loaded Cards */}
      <div className="home-our-services-section">
        <div className="home-our-services">
          <h2>Services</h2>
        </div>
        <div className="marketing-recruiting">
          <div className="home-our-services-cards-top infinite-scroll">
            <Suspense fallback={<div>Loading Marketing Card...</div>}>
              <Card
              backgroundImage="/mission.png"
                image={Ecom}
                businessPara="Partnering with a marketing agency gives you the expertise and tools to amplify your brand, attract the right audience, and achieve results that drive your business forward."
                businessTitle="Marketing"
                btText1="Learn More"
                marketingPath="/marketing"
                btText2="Contact Us"
                isFirstCard={true}
                direction="left"
                instagramUrl="https://www.instagram.com/9dots.marketing/"
              />
            </Suspense>
          </div>
          <div className="home-our-services-cards-bottom infinite-scroll">
            <Suspense fallback={<div>Loading Recruiting Card...</div>}>
              <Card
               backgroundImage="/rekr.png"
                image={Happy}
                businessTitle="Recruiting"
                businessPara="Leveraging a marketing agency’s recruiting services ensures you attract the best talent with powerful, data-driven strategies, helping your business grow with the right people."
                btText2="Contact Us"
                btText3="Learn More"
                recruitingPath="/recruiting"
                isFirstCard={false}
                direction="right"
                instagramUrl="https://www.instagram.com/9dotsrecruitment/"
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="our-partners-homepage">
        <h2>Our Associates</h2>
        <Suspense fallback={<div>Loading Partners...</div>}>
          <Partner className="our-partners-homepage-brands" />
        </Suspense>
      </div>


      {/* Meet Our Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-members">
            {/* Team Members */}
            <div className="team-member">
              <img src="/team/1.jpg" alt="Xheorxhina Maksuti" className="team-member-img" />
              <h3 className="team-member-name">Xheorxhina Maksuti</h3>
              <p className="team-member-role">CEO</p>

            </div>

            <div className="team-member">
              <img src="/team/4.jpg" alt="Kevin Koltraka" className="team-member-img" />
              <h3 className="team-member-name">Kevin Koltraka</h3>
              <p className="team-member-role">Web Developer</p>

            </div>

            <div className="team-member">
              <img src="/team/2.jpg" alt="Lida Luka" className="team-member-img" />
              <h3 className="team-member-name">Lida Luka</h3>
              <p className="team-member-role">Human Resources</p>

            </div>

            <div className="team-member">
              <img src="/team/6.jpg" alt="Paulin Halilaj" className="team-member-img" />
              <h3 className="team-member-name">Paulin Halilaj</h3>
              <p className="team-member-role">Photographer & Videographer</p>

            </div>

            <div className="team-member">
              <img src="/team/3.jpg" alt="Emiljana Uka" className="team-member-img" />
              <h3 className="team-member-name">Emiljana Uka</h3>
              <p className="team-member-role">Social Media Specialist</p>

            </div>

            <div className="team-member">
              <img src="/team/5.jpg" alt="Enrik Ymeri" className="team-member-img" />
              <h3 className="team-member-name">Enrik Ymeri</h3>
              <p className="team-member-role">Graphic Designer</p>

            </div>
          </div>
        </div>
      </section>


      <section id="happy-clients" className="happy-clients-section">
        <div className="container">
          <h2 className="section-title">Happy Clients Said To Us</h2>
          <p className="section-description">
            Our clients' satisfaction is our top priority. Here's what they have to say about working with us!
          </p>

          {/* Arrows and Testimonials Container */}
          <div className="testimonials-container" style={{ position: "relative" }}>
            {/* Left Arrow */}
            <button
              className="arrow left-arrow"
              onClick={scrollLeftFunc}
              aria-label="Scroll Left"
            >
              ◀
            </button>

            {/* Scrollable Testimonials */}
            <div
              ref={scrollRef}
              className="client-testimonials"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                overflowX: "auto",
                display: "flex",
                scrollBehavior: "smooth",
              }}
            >
              {/* Client Testimonials */}
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "9Dots Agency truly revolutionized our digital presence. Their strategies have allowed us to connect with our target market in a more meaningful and impactful way."
                </p>
                <div className="client-info">
                  <h3 className="client-name">FLEX</h3>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "The difference in our online engagement was immediate. 9Dots' tailored marketing strategies gave our brand the boost it needed to thrive in a competitive market."
                </p>
                <div className="client-info">
                  <h3 className="client-name">Shargan Consulting</h3>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "Working with 9Dots was a game-changer for us. Their innovative approach allowed us to expand our market reach and significantly increase brand visibility."
                </p>
                <div className="client-info">
                  <h3 className="client-name">GoHealth Albania</h3>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "From the moment we partnered with 9Dots, their creativity and professionalism were apparent. They transformed our digital marketing efforts into measurable growth."
                </p>
                <div className="client-info">
                  <h3 className="client-name">AutoRental</h3>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "9Dots exceeded our expectations. Their team's innovative marketing strategies played a key role in improving our customer engagement and building stronger relationships."
                </p>
                <div className="client-info">
                  <h3 className="client-name">Tirana Stay</h3>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "We couldn't have asked for a more dedicated and forward-thinking team. 9Dots helped us elevate our online presence and achieve tangible business results."
                </p>
                <div className="client-info">
                  <h3 className="client-name">Aredo Stones</h3>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="arrow right-arrow"
              onClick={scrollRightFunc}
              aria-label="Scroll Right"
            >
              ▶
            </button>
            {/* Navigation Dots */}
            <div className="testimonial-dots">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                  onClick={() => scrollToTestimonial(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Home;