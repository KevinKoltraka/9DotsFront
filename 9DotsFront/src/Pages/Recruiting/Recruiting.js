import React, { useState, useRef } from 'react';
import "./recruiting.css";
import OT from "../../images/es.jpg";
import SEO from "./../../images/rec.jpg";
import PPC from "./../../images/src.jpg";
import SMM from "./../../images/ce.jpeg";
import axios from "axios";
import { Link } from 'react-router-dom';

const sectionData = [
  {
    name: "Executive Search",
    details: {
      AboutImg: OT,
      CompanyScene: "Executive Search 🕵️👔",
      CompanyDetails:
        "In today’s rapidly evolving business landscape, securing top executive talent is more crucial than ever. A strong leadership team can steer a company toward growth, innovation, and long-term success. At [Your Company Name], we recognize the importance of finding leaders who not only possess the required skills and experience but also align with your company’s unique culture and values. Our Executive Search service is designed to identify and recruit the best leaders who will drive your business forward with vision, expertise, and integrity.",
      CompanyDetails2:
        "Our approach to Executive Search is both strategic and thorough. We leverage an expansive network, combined with in-depth market knowledge and a customized recruitment process, to pinpoint the most qualified candidates. From C-suite executives to senior management, we focus on individuals who can deliver results, inspire teams, and foster a culture of success. We ensure every candidate we present meets your specific needs, both professionally and culturally, offering a perfect fit for your organization’s goals.",
      CompanyDetails3:
        "When you partner with 9Dots Agency, you gain a trusted advisor committed to understanding your company’s unique challenges and objectives. We take a collaborative, transparent approach, working closely with you every step of the way to ensure the leaders we find are poised to make a meaningful impact. With our Executive Search expertise, we help you secure leaders who will shape the future of your business and lead it toward long-term success.",
      Checklist: [
        "Executive Recruitment",
        "Leadership Hiring",
        "Top Executive Talent",
        "C-suite Executive Search",
        "Senior Management Hiring",
        "Executive Search Services",
      ],
    },
  },
  {
    name: "Recruitment Support",
    details: {
      AboutImg: SEO,
      CompanyScene: "Recruitment Support 💼🤝",
      CompanyDetails:
        "In today’s fast-paced and competitive job market, attracting top talent is more than just a process—it’s a strategic necessity. With organizations facing increasing pressure to secure the right candidates quickly, recruitment support has become essential for streamlining hiring and ensuring success. Recruitment support services help businesses tackle challenges such as high volumes of applicants, candidate sourcing, and efficient interview scheduling. It’s about providing the tools and expertise needed to engage with potential hires effectively and in a timely manner.",
      CompanyDetails2:
        "At 9Dots Agency, we understand that every business has unique needs when it comes to hiring. That's why we offer tailored Recruitment Support services designed to streamline and optimize your hiring process. Whether you're struggling to find qualified candidates, need help managing multiple recruitment channels, or want to improve your candidate experience, our team is here to support you every step of the way. From job posting management to interview coordination, we provide comprehensive assistance that takes the stress out of recruitment.",
      CompanyDetails3:
        "By partnering with us, you gain a trusted ally committed to helping you attract and secure top talent quickly and efficiently. With our expert recruitment support, you can stay ahead of the competition, enhance your employer brand, and ensure you’re hiring the right fit for your team. Let us help you transform your recruitment strategy and build the workforce that will drive your business forward.",
      Checklist: [
        "Recruitment Assistance",
        "Talent Acquisition Support",
        "Hiring Support Services",
        "Recruitment Process Optimization",
        "Candidate Sourcing Services",
        "Hiring Solutions",
      ],
    },
  },
  {
    name: "Sourcing",
    details: {
      AboutImg: PPC,
      CompanyScene: "Sourcing 🔍🎯",
      CompanyDetails:
        "In today’s competitive job market, sourcing the right talent is more than just filling vacancies—it’s about finding candidates who align with your company’s values and vision. As businesses strive to grow and innovate, attracting skilled professionals is crucial for staying ahead. Sourcing helps companies identify and reach out to the best candidates, often before they even apply. By leveraging advanced tools, networks, and strategies, effective sourcing ensures you connect with top talent who can contribute to your company’s success.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in creating targeted sourcing strategies that are tailored to meet the specific needs of your business. Whether you need to find candidates for niche roles or build a pipeline of talent for future hiring needs, our team is here to help. We utilize a combination of cutting-edge technology, industry insights, and a vast network to ensure we find the best candidates for your organization. From initial outreach to interview scheduling, we handle every step of the sourcing process to ensure you have access to top-tier talent.",
      CompanyDetails3:
        "By partnering with us, you gain more than just sourcing support—you gain a strategic ally committed to helping you secure the talent you need to drive your business forward. Let 9Dots help you build a strong, skilled team that will set your organization up for long-term success.",
      Checklist: [
        "Talent Sourcing",
        "Candidate Sourcing",
        "Executive Sourcing",
        "Recruitment Sourcing",
        "Talent Pipeline Development",
        "Sourcing Strategy",
      ],
    },
  },
  {
    name: "Candidates Evaluation",
    details: {
      AboutImg: SMM,
      CompanyScene: "Candidates Evaluation 📊✅ ",
      CompanyDetails:
        "In today’s competitive hiring landscape, selecting the right candidates is more than just reviewing resumes—it’s about a thorough evaluation that ensures a perfect fit for both the role and the company culture. With businesses under constant pressure to build strong, capable teams, candidates evaluation has become a cornerstone of the hiring process. It allows employers to assess not only skills and experience but also how candidates will align with their company’s values and vision. A comprehensive evaluation process helps ensure that every hire contributes to long-term success, boosting team performance and organizational growth.",
      CompanyDetails2:
        "At 9Dots Agency, we specialize in providing in-depth Candidates Evaluation to help you make informed, data-driven hiring decisions. Our process includes rigorous assessments of skills, experience, and cultural fit, ensuring that every candidate we recommend can thrive within your team. Using industry-leading evaluation tools and methods, we take the guesswork out of hiring and provide you with clear, actionable insights. Whether you're looking to assess technical capabilities, leadership potential, or team compatibility, our evaluation services are designed to help you select top-tier talent with confidence.",
      CompanyDetails3:
        "By partnering with us, you gain more than just an evaluation service—you gain a trusted partner who understands the importance of making the right hire. With our expertise, you can confidently move forward with candidates who will help drive your business’s success and contribute to a positive, productive work environment. Let us assist you in building a high-performing team that propels your organization toward continued growth and success.",

      Checklist: [
        "Candidate Assessment",
        "Employee Evaluation",
        "Hiring Evaluation Services",
        "Skills Assessment",
        "Candidate Selection Process",
        "Cultural Fit Assessment",
      ],
    },
  },
];

const Recruiting = () => {
  const [activeSection, setActiveSection] = useState("Executive Search");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);
  const navbarButtonsRef = useRef(null);

  const renderChecklist = (checklist) => (
    <ul>
      {checklist.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ error: 'Please fill in all the fields.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setFormStatus({ success: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ error: 'There was an error sending the message. Please try again later.' });
    }
  };

  const toggleExpansion = () => {
    if (isExpanded) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="About">
      <div className="background-wrapper">
        {/* Horizontal Navbar */}
        <div className="section-navbar">
          <div className="navbar-buttons-containers" ref={navbarButtonsRef}>
            {sectionData.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(section.name)}
                className={activeSection === section.name ? 'active' : ''}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>

        {/* Render Active Section */}
        {activeSection && (
          <div className="active-section-wrapper">
            {/* Close Button for the Active Section */}
            <button
              className="close-section-button"
              onClick={() => setActiveSection('')}
            >
              ✖
            </button>

            {/* Active Section Content */}
            <div className="about-section">
              <img
                src={sectionData.find((sec) => sec.name === activeSection).details.AboutImg}
                alt={activeSection}
                className="about-img"
              />
              <h2>
                {sectionData.find((sec) => sec.name === activeSection).details.CompanyScene}
              </h2>

              {/* Company Details with View More/View Less */}
              <p ref={detailsRef}>
                {isExpanded
                  ? sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails
                  : sectionData
                    .find((sec) => sec.name === activeSection)
                    .details.CompanyDetails.split('. ')
                    .slice(0, 1)
                    .join('. ') + '.'}
                {!isExpanded && (
                  <>
                    <span>... </span>
                    <button className="view-toggle-btn" onClick={toggleExpansion}>View More</button>
                  </>
                )}
              </p>
              {isExpanded && (
                <>
                  <p>
                    {sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails2}
                  </p>
                  <p>
                    {sectionData.find((sec) => sec.name === activeSection).details.CompanyDetails3}
                  </p>
                  <button className="view-toggle-btn" onClick={toggleExpansion}>
                    View Less
                  </button>
                </>
              )}

              {renderChecklist(
                sectionData.find((sec) => sec.name === activeSection).details.Checklist
              )}
            </div>
          </div>
        )}
         <div className="job-button-wrapper">
         {/* Go to Job Post Button Section */}
         <div className="job-post-button-wrapper">
          <Link to="/job-post">
            <button className="go-to-job-post-button">Go to Job Post</button>
          </Link>
        </div>

         {/* Go to Job List Button Section */}
         <div className="job-list-button-wrapper">
          <Link to="/job-list">
            <button className="go-to-job-list-button">Go to Job List</button>
          </Link>
        </div>
        </div>


        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows="4"
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>

          {formStatus && (
            <div className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.error || formStatus.success}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruiting;