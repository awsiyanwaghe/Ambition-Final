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
    <nav className="bg-blue-700 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* LEFT SIDE: Logo + Text */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-white shadow-lg"
              />

              <h1 className="text-white text-lg md:text-xl font-semibold whitespace-nowrap">
                Ambition Tutorial
              </h1>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
          </div>

          {/* NAV LINKS */}
          <ul
            className={`
    md:flex md:items-center md:gap-8 md:ml-auto
    absolute md:static
    bg-blue-700 md:bg-transparent
    w-full md:w-auto
    left-0
    transition-all duration-300
    ${isOpen ? 'top-20' : '-top-96'}
    md:top-auto
    shadow-md md:shadow-none
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
