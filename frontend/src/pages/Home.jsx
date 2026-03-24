import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend URL when connected
      // await axios.post('http://localhost:5000/api/enquiries', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert('Error submitting enquiry. Please try again.');
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">The Sanskrit Hub</h1>
            <p className="hero-subtitle">Sanskrit & Hindi Language Classes In Andheri, Mumbai</p>
            <div className="hero-quote">
              <p>"Knowledge, Reasoning, Wisdom, Sharp Memory, Preparedness & Diligence"</p>
              <span>- Ancient Wisdom</span>
            </div>
            <div className="stats-container">
              <div className="stat-card">
                <h3>500+</h3>
                <p>Enrollment This Year</p>
              </div>
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Happy Students</p>
              </div>
              <div className="stat-card">
                <h3>800+</h3>
                <p>Passout Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <h2 className="section-title">Our Objectives</h2>
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-icon">🌍</div>
              <h3>Global Level</h3>
              <p>To bring Sanskrit language to the GLOBAL LEVEL</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">💻</div>
              <h3>Scientific Features</h3>
              <p>To highlight the scientific features of Sanskrit grammar for computer applications</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">🔬</div>
              <h3>Vedic Inventions</h3>
              <p>To showcase scientific inventions of Vedic era and connect with modern inventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="enquiry-section">
        <div className="container">
          <h2 className="section-title">Enquire Now</h2>
          <div className="enquiry-container">
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option value="">Select Course</option>
                  <option value="Sanskrit Beginner">Sanskrit Beginner</option>
                  <option value="Sanskrit Advanced">Sanskrit Advanced</option>
                  <option value="Hindi Beginner">Hindi Beginner</option>
                  <option value="Hindi Advanced">Hindi Advanced</option>
                  <option value="Spoken Sanskrit">Spoken Sanskrit</option>
                  <option value="Vedic Studies">Vedic Studies</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Enquiry</button>
              {submitted && <p className="success-msg">Enquiry submitted successfully!</p>}
            </form>
            
            <div className="whatsapp-section">
              <h3>Quick Contact</h3>
              <a href="https://wa.me/919820123456" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Us
              </a>
              <div className="contact-info">
                <p>📞 Call us: +91 98201 23456</p>
                <p>✉️ Email: info@sanskrithub.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <h3>Sanskrit Beginner</h3>
              <p>Learn basics of Sanskrit language, alphabet, and simple conversations</p>
              <Link to="/courses" className="learn-more">Learn More →</Link>
            </div>
            <div className="course-card">
              <h3>Hindi Advanced</h3>
              <p>Master Hindi grammar, literature, and fluent communication skills</p>
              <Link to="/courses" className="learn-more">Learn More →</Link>
            </div>
            <div className="course-card">
              <h3>Vedic Studies</h3>
              <p>Explore ancient Vedic texts and their modern applications</p>
              <Link to="/courses" className="learn-more">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;