// pages/Home.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import result images
import result1 from '../assets/Results/result1.jpeg'
import result2 from '../assets/Results/result2.jpeg'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [currentResult, setCurrentResult] = useState(0)

  const results = [result1, result2] // Add more results here if needed

  // Auto-rotate results every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResult((prev) => (prev + 1) % results.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [results.length])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 mt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              The Sanskrit Hub
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-fadeInUp animation-delay-200">
              Sanskrit & Hindi Language Classes In Andheri, Mumbai
            </p>
            <div className="italic text-lg mb-8 animate-fadeInUp animation-delay-400">
              <p>
                "Knowledge, Reasoning, Wisdom, Sharp Memory, Preparedness &
                Diligence"
              </p>
              <span>- Ancient Wisdom</span>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 animate-fadeInUp animation-delay-600">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
                <p>Enrollment This Year</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-400">1000+</h3>
                <p>Happy Students</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-400">800+</h3>
                <p>Passout Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-4">
            Our Objectives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Global Level
              </h3>
              <p className="text-gray-600">
                To bring Sanskrit language to the GLOBAL LEVEL
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Scientific Features
              </h3>
              <p className="text-gray-600">
                To highlight the scientific features of Sanskrit grammar for
                computer applications
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Vedic Inventions
              </h3>
              <p className="text-gray-600">
                To showcase scientific inventions of Vedic era and connect with
                modern inventions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-4">
            Our Results
          </h2>
          <div className="max-w-4xl mx-auto">
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
    <div className="p-6 text-center">
      <img
        src={results[currentResult]}
        alt={`Result ${currentResult + 1}`}
        className="w-full max-h-[500px] rounded-lg shadow-lg object-contain mx-auto"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-4">
            Enquire Now
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Course</option>
                  <option value="Sanskrit Beginner">Sanskrit Beginner</option>
                  <option value="Sanskrit Advanced">Sanskrit Advanced</option>
                  <option value="Hindi Beginner">Hindi Beginner</option>
                  <option value="Hindi Advanced">Hindi Advanced</option>
                  <option value="Spoken Sanskrit">Spoken Sanskrit</option>
                  <option value="Vedic Studies">Vedic Studies</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Enquiry
              </button>
              {submitted && (
                <p className="text-green-600 text-center mt-4">
                  Enquiry submitted successfully!
                </p>
              )}
            </form>

            <div className="bg-green-500 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <a
                href="https://wa.me/919167965239"
                className="inline-block bg-white text-green-500 px-8 py-3 rounded-lg font-bold hover:scale-105 transition mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Us
              </a>
              <div className="mt-4">
                <p>📞 Call us: +91 91679 65239</p>
                <p>✉️ ambition.tutorial21@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-4">
            Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-1 transition text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Sanskrit Beginner
              </h3>
              <p className="text-gray-600 mb-4">
                Learn basics of Sanskrit language, alphabet, and simple
                conversations
              </p>
              <Link
                to="/courses"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-1 transition text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Hindi Advanced
              </h3>
              <p className="text-gray-600 mb-4">
                Master Hindi grammar, literature, and fluent communication
                skills
              </p>
              <Link
                to="/courses"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-1 transition text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Vedic Studies
              </h3>
              <p className="text-gray-600 mb-4">
                Explore ancient Vedic texts and their modern applications
              </p>
              <Link
                to="/courses"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home