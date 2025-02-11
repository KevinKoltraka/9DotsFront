import React, { useState, useCallback } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();

    if (email) {
      openGmailCompose();
    } else {
      alert("Please enter a valid email address.");
    }
  }, [email]);

  const openGmailCompose = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=`;

    const newWindow = window.open(gmailLink, '_blank');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("Popup blocked! Please allow popups for this site to proceed.");
    }
  };

  return (
    <div className="footer-section">
      <div className="footer-section-box">
        <div className="mobile-div">
          <div className="mobile-footer-links">
            <h3>Quick Links</h3>
            <div className="link-in-footer">
              <Link to="/" className="link">Home</Link>
              <Link to="/marketing" className="link">Marketing</Link>
              <Link to="/recruiting" className="link">Recruiting</Link>
              <Link to="/blogs" className="link">Blogs</Link>
              <Link to="/portfolio" className="link">Portfolio</Link>
            </div>
          </div>
          <div className="mobile-footer-links">
            <h3>Services</h3>
            <div className="link-in-footer">
              <Link to="/marketing" className="link">Marketing</Link>
              <Link to="/recruiting" className="link">Recruiting</Link>
            </div>
          </div>
        </div>
        <div className="mobile-div">
          <div className="mobile-footer-links">
            <h3>Company</h3>
            <div className="link-in-footer">
              <Link to="/terms" className="link"><li>Terms</li></Link>
              <Link to="/disclaimer" className="link"><li>Disclaimer</li></Link>
              <Link to="/privacy-policy" className="link"><li>Privacy Policy</li></Link>
            </div>
          </div>
          <div className="mobile-footer-links">
            <h3>Social Links</h3>
            <div className="link-in-footer social-icons">
              <Link to="https://www.instagram.com/9dots_agency/" target="_blank" className="link">
                <FaInstagram size={24} />
              </Link>
              <Link to="https://api.whatsapp.com/send?phone=355688172927" target="_blank" className="link">
                <FaWhatsapp size={24} />
              </Link>
              <Link to="https://www.linkedin.com/company/9dots-agency/posts/?feedView=all" target="_blank" className="link">
                <FaLinkedinIn size={24} />
              </Link>
              <Link to="https://www.tiktok.com/@9dotsagency" target="_blank" className="link">
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-newsletter">
        <h3>Contact Us</h3>
        <input
          type="email"
          id="email"
          name="e-mail"
          placeholder="Enter Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSubscribe}>EMAIL US</button>
      </div>

      <div className="copyright-section">
        <hr />
        <p>Copyright - 9Dots Agency - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
