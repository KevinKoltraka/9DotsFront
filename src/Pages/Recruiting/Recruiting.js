import React, { useState } from "react";
import "./recruiting.css";
import recrImage from "../../images/recruitment/Rec1.png";
import recrImage2 from "../../images/recruitment/Rec2.png";
import recrImage3 from "../../images/recruitment/Rec3.png";
import recrImage4 from "../../images/recruitment/Rec4.png";

const RecruitingPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobList, setJobList] = useState([]);

  const toggleShowMore = () => {
    if (showMore) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setShowMore(!showMore);
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    // Logic to send data to the backend (to be implemented later)
    const newJob = { title: jobTitle, description: jobDescription, location: jobLocation };
    setJobList([...jobList, newJob]);
    setJobTitle("");
    setJobDescription("");
    setJobLocation("");
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
            style={{ backgroundImage: `url(${recrImage})` }}
          ></div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${recrImage2})` }}
          ></div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${recrImage3})` }}
          ></div>

          {showMore && (
            <div
              className="service-card"
              style={{ backgroundImage: `url(${recrImage4})` }}
            ></div>
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
              We connect talent with the right opportunities, ensuring every career move is strategic and impactful. Our recruitment process is designed to unlock potential and create professional growth.
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

      {/* Job Post Section */}
      <section className="job-post-section">
        <h2>Post a Job</h2>
        <form onSubmit={handleJobSubmit} className="job-post-form">
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="jobLocation">Job Location</label>
            <input
              type="text"
              id="jobLocation"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="post-job-btn">Post Job</button>
        </form>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings">
        <h2>Job Listings</h2>
        <div className="job-list">
          {jobList.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            jobList.map((job, index) => (
              <div className="job-item" key={index}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <span>{job.location}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <footer className="contactus">
        <p>Contact us for your marketing and recruiting needs</p>
        <button className="getintouch">Get in Touch</button>
      </footer>
    </div>
  );
};

export default RecruitingPage;
