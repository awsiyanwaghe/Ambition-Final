// components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/courses', name: 'Courses' },
    { path: '/faculty', name: 'Faculty' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/results', name: 'Results' },
    { path: '/contact', name: 'Contact' },
  ]

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  const handleLinkClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo removed from here */}

            {/* Hamburger Menu */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block w-6 h-0.5 bg-white my-1.5"></span>
              <span className="block w-6 h-0.5 bg-white my-1.5"></span>
              <span className="block w-6 h-0.5 bg-white my-1.5"></span>
            </div>

            {/* NAV LINKS - Centered */}
            <ul
              className={`
                md:flex md:items-center md:justify-center md:gap-8
                absolute md:static
                bg-blue-700 md:bg-transparent
                w-full md:w-auto
                left-0
                transition-all duration-300
                ${isOpen ? 'top-20' : '-top-96'}
                md:top-auto
                shadow-md md:shadow-none
                md:mx-auto
              `}
            >
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="border-b md:border-none border-blue-600"
                >
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 md:py-0 hover:text-blue-200 transition text-center ${
                      location.pathname === link.path
                        ? 'text-yellow-300 font-semibold'
                        : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Empty div for spacing on desktop */}
            <div className="hidden md:block w-10"></div>
          </div>
        </div>
      </nav>

      {/* Logo Section - Only on Home Page */}
      {location.pathname === '/' && (
        <div className="pt-20 md:pt-24 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col items-center justify-center text-center">
              <Link to="/" onClick={handleLinkClick} className="inline-block">
                <img
                  src="/logo.jpeg"
                  alt="Ambition Tutorial"
                  className="h-20 w-20 md:h-28 md:w-28 rounded-full object-cover border-4 border-blue-700 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </Link>
              
              {/* Sanskrit Hub Details */}
              <div className="mt-4">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                  Ambition Tutorial
                </h1>
                <p className="text-blue-700 font-medium mt-1">
                  The Sanskrit Hub
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Sanskrit & Hindi Language Classes In Andheri, Mumbai
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-6">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-700">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Enrollment This Year
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-700">
                    1000+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Happy Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-700">
                    800+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Passout Students
                  </div>
                </div>
              </div>

              {/* Ancient Wisdom Quote */}
              <div className="mt-6 max-w-2xl">
                <p className="text-gray-700 italic text-sm md:text-base border-l-4 border-blue-700 pl-4">
                  "Knowledge, Reasoning, Wisdom, Sharp Memory, Preparedness & Diligence"
                </p>
                <p className="text-gray-500 text-xs mt-1">- Ancient Wisdom</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar