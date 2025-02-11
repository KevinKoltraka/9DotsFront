// src/pages/Contact/Contact.js
import { React, useState } from 'react';
import './contact.css';
import Social from '../../components/SocialIcons/Social';
import Map from './map'; // Import the Map component
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Icons for contact info

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('Please fill all fields.');
      return;
    }

    setLoading(true);
    setStatus('');

    // Dynamically determine API URL
    const API_URL =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_API_URL_PROD
        : process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(data.error || 'Error sending message');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="parent-container">
        {/* Contact Form & Contact Information - Side by Side */}
        <div className="contact-container">
          {/* Left Side - Form */}
          <div className="contact-form-section">
            <h3 className="form-title">Contact Us</h3>
            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  type="text"
                  name="sender"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  className="contact-input"
                />
                <label>Name</label>
              </div>

              <div className="form-item">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="contact-input"
                />
                <label>Email</label>
              </div>

              <div className="form-item">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder=" "
                  className="contact-input"

                />
                <label>Subject</label>
              </div>

              <div className="form-item">
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  className="contact-textarea"
                />
                <label>Message</label>
              </div>
              <button type="send" className="send-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div>
              {status && <p className={status.startsWith('Error') ? 'error' : 'success'}>{status}</p>}
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="contact-info-section">
            <h3 className="contact-title">Contact Information</h3>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="contact-details">
              <p><FaMapMarkerAlt className="contact-icon" /> <strong>Address:</strong> Rruga e Dibrës, Tiranë, Albania</p>
              <p><FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +355 68 58 61 003</p>
              <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> info@9dotsagency.com </p>
              <p><FaGlobe className="contact-icon" /> <strong>Website:</strong> yoursite.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="social-contact">
        <Social />
      </div>

      {/* Google Map Component */}
      <Map />
    </>
  );
};

export default Contact;
