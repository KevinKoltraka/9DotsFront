import React, { Suspense, lazy } from "react";
import "./home.css";
import DotsTeamImage from "./../../images/9Dots2.jpg";
import AboutImage from "./../../images/mission.avif";
import Ecom from "./../../images/9Dots.jpg";
import Portfolio from "./../../images/recruitment.jpg";
import Happy from "./../../images/ourvision.jpg";

// Lazy load components
const Hero = lazy(() => import("../../components/HeroSection/Hero"));
const AboutZolaha = lazy(() => import("../../components/AboutZolaha/AboutZolaha"));
const Partner = lazy(() => import("../../components/Partners/Partner"));
const Card = lazy(() => import("../Cards/Card"));

const Home = () => {
  const email = "marketing@9dotsagency.com";
  const email2 = "recruitment@9dotsagency.com";

  return (
    <>
      {/* Lazy Loaded Hero Component */}
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero
          title="9Dots Agency"
          description="At 9Dots Agency, we craft tailored marketing solutions that blend data, creativity, and expertise to drive sustainable growth and lasting impact. As trusted partners, we help brands achieve their goals and lead in the global market."
          btnText="Contact Marketing Team"
          btnText2="Contact Recruiting Team"
          heroImg={DotsTeamImage}
          alt="9Dots Team Image"
          email={email}
          email2={email2}
        />
      </Suspense>

      {/* Partners Section */}
      <div className="our-partners-homepage">
        <h2>Our Associates</h2>
        <Suspense fallback={<div>Loading Partners...</div>}>
          <Partner className="our-partners-homepage-brands" />
        </Suspense>
      </div>

      {/* Lazy Loaded AboutZolaha Section (Our Mission) */}
      <Suspense fallback={<div>Loading Our Mission...</div>}>
        <AboutZolaha
          className="about-zolaha-section"
          AboutImg={AboutImage}
          AboutZolahaImage="about-zolaha-img"
          CompanyName="Our Mission"
          CompanyScene="Empowering Growth Through Innovative Marketing"
          CompanyDetails="At the core of 9Dots Agency’s mission is to empower businesses to achieve measurable success through personalized and innovative marketing solutions. Leveraging the combined expertise of 10 dedicated professionals, 9dots Agency creates personalized strategies that align with each client’s unique goals and market demands. Led by Georgina Maksuti, with over 8 years of experience in digital marketing, 9dots aims to be a catalyst for transformation, driving growth and elevating brands through cutting-edge digital tools and unconventional approaches."
          AboutBtnText="Follow Us on Instagram"
        />
      </Suspense>

      {/* Services Section with Lazy Loaded Cards */}
      <div className="home-our-services-section">
        <div className="home-our-services">
          <h2>Services</h2>
        </div>
        <div className="home-our-services-cards">
          {/* Lazy Loaded Cards */}
          <Suspense fallback={<div>Loading Marketing Card...</div>}>
            <Card
              image={Ecom}
              businessPara="• Search Engine Optimization (SEO)"
              businessPara2="• Pay-Per-Click (PPC) Marketing"
              businessPara3="• Social Media Marketing & Advertising"
              businessPara4="• Content Marketing"
              businessTitle="Marketing"
              btText1="Learn More"
              marketingPath="/marketing"
              btText2="Contact Us"
              isFirstCard={true}
              direction="left"
              instagramUrl="https://www.instagram.com/9dots.marketing/"
            />
          </Suspense>
          <Suspense fallback={<div>Loading Recruiting Card...</div>}>
            <Card
              image={Portfolio}
              businessTitle="Recruiting"
              businessPara="• Executive Search"
              businessPara2="• Recruitment Support"
              businessPara3="• Sourcing"
              businessPara4="• Candidates Evaluation"
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

      {/* Lazy Loaded AboutZolaha Section (Our Vision) */}
      <Suspense fallback={<div>Loading Our Vision...</div>}>
        <AboutZolaha
          className="about-zolaha-section who-we-are-section"
          AboutImg={Happy}
          AboutZolahaImage="about-zolaha-img"
          CompanyName="Our Vision"
          CompanyScene="Redefining Digital Marketing with Creativity and Innovation"
          CompanyDetails="9Dots Agency aims to redefine the boundaries of digital marketing by fostering creativity and innovation. We are committed to transcending the limitations of traditional marketing strategies, offering a fresh and dynamic approach to growing businesses. By combining expertise in key digital marketing disciplines—SEO, design, social media management, programming, Google Ads, and multimedia—9dots seeks to take businesses to new levels."
        />
      </Suspense>
    </>
  );
};

export default Home;
