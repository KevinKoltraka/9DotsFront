import React, { Suspense, lazy } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./home.css";
import DotsTeamVideo from "./../../images/9dotsteam.mp4";
import DotsVideo from "./../../images/ourmission.mp4";

// Lazy load components
const AboutZolaha = lazy(() => import("../../components/AboutZolaha/AboutZolaha"));
const Partner = lazy(() => import("../../components/Partners/Partner"));
const Card = lazy(() => import("../Cards/Card"));

const Home = () => {
  return (
    <>
      {/* Lazy Loaded Video Section */}
      <Suspense fallback={<div>Loading Video...</div>}>
        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={DotsTeamVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Suspense>

      {/* Partners Section */}
      <div className="our-partners-homepage">
        <h2>Our Associates</h2>
        <Suspense fallback={<div>Loading Partners...</div>}>
          <Partner className="our-partners-homepage-brands" />
        </Suspense>
      </div>

      {/* Lazy Loaded AboutZolaha Section (Our Mission) */}
      <Suspense fallback={<div>Loading Our Mission & Vision...</div>}>
        <AboutZolaha
          className="about-zolaha-section"
          AboutImg={DotsVideo}
          CompanyName="Our Mission & Vision"
          CompanyScene="Empowering Growth Through Innovative Marketing"
          CompanyDetails="At 9Dots Agency, our mission is to empower businesses with innovative, tailored marketing solutions that drive growth and elevate brands. With over 8 years of expertise, we redefine digital marketing through creativity, cutting-edge tools, and unconventional strategies, excelling in SEO, design, social media, programming, Google Ads, and multimedia to deliver transformative results."
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
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>

            <div className="team-member">
              <img src="/team/4.jpg" alt="Kevin Koltraka" className="team-member-img" />
              <h3 className="team-member-name">Kevin Koltraka</h3>
              <p className="team-member-role">Web Developer</p>
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>

            <div className="team-member">
              <img src="/team/2.jpg" alt="Lida Luka" className="team-member-img" />
              <h3 className="team-member-name">Lida Luka</h3>
              <p className="team-member-role">Human Resources</p>
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>

            <div className="team-member">
              <img src="/team/6.jpg" alt="Paulin Halilaj" className="team-member-img" />
              <h3 className="team-member-name">Paulin Halilaj</h3>
              <p className="team-member-role">Photographer & Videographer</p>
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>

            <div className="team-member">
              <img src="/team/3.jpg" alt="Emiljana Uka" className="team-member-img" />
              <h3 className="team-member-name">Emiljana Uka</h3>
              <p className="team-member-role">Social Media Specialist</p>
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>

            <div className="team-member">
              <img src="/team/5.jpg" alt="Enrik Ymeri" className="team-member-img" />
              <h3 className="team-member-name">Enrik Ymeri</h3>
              <p className="team-member-role">Graphic Designer</p>
              <div className="team-member-social">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
                <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="happy-clients" className="happy-clients-section">
      <div className="container">
        <h2 className="section-title">Happy Clients Said To Us</h2>
        <p className="section-description">Our clients' satisfaction is our top priority. Here's what they have to say about working with us!</p>
        
        <div className="client-testimonials">
          {/* Client 1 */}
          <div className="testimonial-card">
            <p className="testimonial-text">"9Dots Agency transformed our business strategy and helped us reach our target audience more effectively. Their team is incredibly professional and innovative."</p>
            <div className="client-info">
              <h3 className="client-name">John Doe</h3>
              <p className="client-role">CEO, ABC Corp</p>
            </div>
          </div>
          
          {/* Client 2 */}
          <div className="testimonial-card">
            <p className="testimonial-text">"We saw a significant boost in our online presence thanks to 9Dots. Their marketing strategies truly made a difference for our brand!"</p>
            <div className="client-info">
              <h3 className="client-name">Jane Smith</h3>
              <p className="client-role">Marketing Director, XYZ Ltd</p>
            </div>
          </div>
          
          {/* Client 3 */}
          <div className="testimonial-card">
            <p className="testimonial-text">"Professional, reliable, and forward-thinking. The team at 9Dots helped us grow our business in ways we didn't think were possible!"</p>
            <div className="client-info">
              <h3 className="client-name">Michael Johnson</h3>
              <p className="client-role">Founder, StartupX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
