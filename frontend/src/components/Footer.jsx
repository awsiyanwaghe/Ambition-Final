// components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Ambition Tutorial
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Helping students achieve academic excellence with quality teaching,
            guidance, and personal mentorship.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Courses", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Contact Info
          </h4>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex gap-2 items-start">
              <FaMapMarkerAlt className="mt-1 text-blue-400" />
              <p>
                Group No. 1, Ambition Tutorial,<br />
                Group Modi Chawl, Opp. Siddhivinayak Mandir,<br />
                Tagore Nagar, Vikhroli East,<br />
                Mumbai, Maharashtra
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <FaPhone className="text-green-400" />
              <a href="tel:+919167965239" className="hover:text-white">
                +91 91679 65239
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-purple-400" />
              <a href="mailto:info@sanskrithub.com" className="hover:text-white">
                info@sanskrithub.com
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Ambition Tutorial Vikhroli East Mumbai"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline text-sm inline-block mt-2"
            >
              📍 Open in Google Maps →
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Ambition Tutorial. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer