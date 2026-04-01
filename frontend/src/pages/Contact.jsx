// pages/Contact.jsx
import React, { useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCopy, FaCheck, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = {
    address: "Sanskrit Hub, Andheri East, Mumbai - 400069",
    phone: "+91 91679 65239",
    phoneAlt: "+91 98765 43210",
    email: "ambition.tutorial21@gmail.com",
    emailAlt: "support@sanskrithub.com",
    whatsapp: "+91 91679 65239",
    instagram: "@sanskrithub",
    facebook: "SanskritHub",
    youtube: "@SanskritHub"
  }

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your courses. Can you please provide more information?")
    window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}?subject=Inquiry about Sanskrit Hub Courses`
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you can integrate with a backend service like EmailJS, Formspree, etc.
    // For now, we'll simulate submission and open email
    const subject = encodeURIComponent(formData.subject || "New Inquiry from Website")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `)
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl">We'd love to hear from you! Choose your preferred way to connect.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Card */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 transform hover:scale-105 transition cursor-pointer" onClick={handleWhatsApp}>
            <FaWhatsapp className="text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
            <p className="text-sm opacity-90">Quick response within 24 hours</p>
            <p className="font-semibold mt-2">{contactInfo.whatsapp}</p>
          </div>

          {/* Call Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 transform hover:scale-105 transition cursor-pointer" onClick={() => handleCall(contactInfo.phone)}>
            <FaPhone className="text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-sm opacity-90">Mon-Sat, 9 AM - 7 PM</p>
            <p className="font-semibold mt-2">{contactInfo.phone}</p>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 transform hover:scale-105 transition cursor-pointer" onClick={() => handleEmail(contactInfo.email)}>
            <FaEnvelope className="text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-sm opacity-90">We respond within 48 hours</p>
            <p className="font-semibold mt-2">{contactInfo.email}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-3">{contactInfo.address}</p>
                  <button 
                    onClick={() => window.open('https://maps.google.com/?q=' + encodeURIComponent(contactInfo.address), '_blank')}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Get Directions →
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaPhone className="text-blue-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Phone Numbers</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{contactInfo.phone}</span>
                      <div className="space-x-2">
                        <button 
                          onClick={() => handleCall(contactInfo.phone)}
                          className="text-green-600 hover:text-green-700 text-sm font-semibold"
                        >
                          Call
                        </button>
                        <button 
                          onClick={() => handleCopy(contactInfo.phone, 'phone')}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          {copied === 'phone' ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{contactInfo.phoneAlt}</span>
                      <div className="space-x-2">
                        <button 
                          onClick={() => handleCall(contactInfo.phoneAlt)}
                          className="text-green-600 hover:text-green-700 text-sm font-semibold"
                        >
                          Call
                        </button>
                        <button 
                          onClick={() => handleCopy(contactInfo.phoneAlt, 'phoneAlt')}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          {copied === 'phoneAlt' ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Email Addresses</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{contactInfo.email}</span>
                      <div className="space-x-2">
                        <button 
                          onClick={() => handleEmail(contactInfo.email)}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Compose
                        </button>
                        <button 
                          onClick={() => handleCopy(contactInfo.email, 'email')}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          {copied === 'email' ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{contactInfo.emailAlt}</span>
                      <div className="space-x-2">
                        <button 
                          onClick={() => handleEmail(contactInfo.emailAlt)}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Compose
                        </button>
                        <button 
                          onClick={() => handleCopy(contactInfo.emailAlt, 'emailAlt')}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          {copied === 'emailAlt' ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaClock className="text-blue-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Working Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-red-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/sanskrithub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a 
                  href="https://facebook.com/sanskrithub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a 
                  href="https://youtube.com/@sanskrithub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <FaWhatsapp className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form with Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-4 text-center font-semibold transition ${
                  activeTab === 'contact'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('enquiry')}
                className={`flex-1 py-4 text-center font-semibold transition ${
                  activeTab === 'enquiry'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Quick Enquiry
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'contact' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <p className="text-green-600 text-center bg-green-50 p-3 rounded-lg">
                      ✓ Message opened in email! We'll get back to you soon.
                    </p>
                  )}
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Quick Enquiry</h3>
                    <p className="text-gray-600 mt-2">Choose your preferred way to connect with us</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-3"
                    >
                      <FaWhatsapp className="text-2xl" />
                      <span className="font-semibold">Chat on WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => handleCall(contactInfo.phone)}
                      className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition flex items-center justify-center space-x-3"
                    >
                      <FaPhone className="text-2xl" />
                      <span className="font-semibold">Request Call Back</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        const message = encodeURIComponent("Hi! I'm interested in knowing more about your courses.")
                        window.location.href = `mailto:${contactInfo.email}?subject=Course Inquiry&body=${message}`
                      }}
                      className="w-full bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition flex items-center justify-center space-x-3"
                    >
                      <FaEnvelope className="text-2xl" />
                      <span className="font-semibold">Email Your Query</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Find Us Here</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.236652031867!2d72.84247931534599!3d19.159548252139568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b745d5b7b4b9%3A0x8e5d5c5e5e5e5e5e!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sanskrit Hub Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact