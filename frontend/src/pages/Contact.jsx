import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend URL
      // await axios.post('http://localhost:5000/api/enquiries', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries</p>
      </div>
      
      <div className="container">
        <div className="contact-container">
          <div className="contact-info-side">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123, Sanskrit Hub Building,<br />Andheri East,<br />Mumbai - 400069, India</p>
            </div>
            
            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 98201 23456<br />+91 98765 43210</p>
            </div>
            
            <div className="info-card">
              <h3>✉️ Email</h3>
              <p>info@sanskrithub.com<br />support@sanskrithub.com</p>
            </div>
            
            <div className="info-card">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 7:00 PM<br />Saturday: 9:00 AM - 5:00 PM<br />Sunday: Closed</p>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.236652031867!2d72.84247931534599!3d19.159548252139568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b745d5b7b4b9%3A0x8e5d5c5e5e5e5e5e!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
              {submitted && <p className="success-msg">Message sent successfully! We'll get back to you soon.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;