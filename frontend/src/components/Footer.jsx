// components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">
            The Sanskrit Hub
          </h3>
          <p className="text-gray-300">
            Preserving the ancient language of Sanskrit and promoting Hindi
            education
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-2xl hover:text-blue-400 transition">
              📘
            </a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">
              📷
            </a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">
              ▶️
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Contact Info
          </h4>
          <p className="text-gray-300">📍 Andheri, Mumbai, India</p>
          <p className="text-gray-300">📞 +91 91679 65239</p>
          <p className="text-gray-300">✉️ info@sanskrithub.com</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Working Hours
          </h4>
          <p className="text-gray-300">Monday - Friday: 9am - 7pm</p>
          <p className="text-gray-300">Saturday: 9am - 5pm</p>
          <p className="text-gray-300">Sunday: Closed</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-gray-400">
        <p>&copy; 2024 The Sanskrit Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
