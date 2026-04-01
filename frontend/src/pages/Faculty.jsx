// pages/Faculty.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import mahjabeen from '../assets/Teachers/mahjabeen.jpeg'
import simran from '../assets/Teachers/simran.jpeg'
import sagar from '../assets/Teachers/sagar.png'

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const navigate = useNavigate()

  const facultyMembers = {
    ssc: [
      {
        id: 1,
        name: "Sagar Sir",
        qualification: "Diploma, BE in Electronics",
        expertise: "Maths",
        experience: "10+ years",
        category: "ssc",
        image: sagar,
        description:
          "Experienced Mathematics teacher with strong problem-solving teaching methods. Specializes in making complex mathematical concepts easy to understand through practical examples and step-by-step approaches.",
        achievements: [
          "10+ years of teaching experience",
          "Mathematics expert with proven track record",
          "Developed unique problem-solving methodology",
          "100% pass rate for board exams"
        ],
      },
      {
        id: 2,
        name: "Sumit Sir",
        qualification: "B.Sc, MCA",
        expertise: "Maths",
        experience: "7+ years",
        category: "ssc",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        description:
          "Dedicated Mathematics teacher with a strong background in computer applications. Uses innovative teaching methods combining logical reasoning with practical applications to help students excel.",
        achievements: [
          "7+ years of teaching experience",
          "Mathematics and Computer Science specialist",
          "Created interactive learning modules",
          "Excellent student feedback record"
        ],
      },
      {
        id: 3,
        name: "Ankit Sir",
        qualification: "B.Sc Physics, M.Sc Physics",
        expertise: "Science",
        experience: "10+ years",
        category: "ssc",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        description:
          "Passionate Physics educator with deep expertise in making science accessible and exciting. Known for conducting engaging experiments and real-world demonstrations that bring concepts to life.",
        achievements: [
          "10+ years of teaching experience",
          "Physics expert with research background",
          "Developed science demonstration kits",
          "Multiple award-winning teacher"
        ],
      },
      {
        id: 4,
        name: "Aastha Ma'am",
        qualification: "B.Sc IT",
        expertise: "Geography",
        experience: "3 years",
        category: "ssc",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
        description:
          "Dynamic Geography teacher who connects geographical concepts with real-world applications. Uses modern teaching aids and interactive sessions to make learning engaging and memorable.",
        achievements: [
          "3 years of teaching experience",
          "Geography specialist",
          "Interactive teaching methodology",
          "Created virtual field trip experiences"
        ],
      },
    ],

    hsc: [
      {
        id: 5,
        name: "Mehjabeen Siddiqui Ma'am",
        qualification: "M.Com, B.Ed, MA in Economics, PET Cleared",
        expertise: "Economics & Commerce",
        experience: "16+ years",
        category: "hsc",
        image: mahjabeen,
        description:
          "Highly accomplished educator with over 16 years of experience in Economics and Commerce education. Known for her exceptional ability to simplify complex economic theories and business concepts. Her teaching methodology combines theoretical knowledge with practical business insights.",
        achievements: [
          "16+ years of teaching experience",
          "PET (Professional Eligibility Test) cleared",
          "Economics & Commerce expert",
          "Published research papers in economics",
          "Guided 5000+ students to academic success"
        ],
      },
      {
        id: 6,
        name: "Simran Ma'am",
        qualification: "M.Com in Accounting",
        expertise: "Accounting & Mathematics",
        experience: "7 years",
        category: "hsc",
        image: simran,
        description:
          "Dedicated Accounting and Mathematics teacher with a passion for numbers. Her systematic approach to teaching complex accounting principles helps students build strong foundations. Known for her patience and ability to make difficult concepts crystal clear.",
        achievements: [
          "7 years of teaching experience",
          "Accounting and Mathematics specialist",
          "Developed simplified accounting techniques",
          "Helped students achieve 90%+ results"
        ],
      },
      {
        id: 7,
        name: "Suraj Sir",
        qualification: "B.Sc Biochemistry, MSc Life Sciences, GATE 2023 XL Qualified",
        expertise: "Biology",
        experience: "2 years",
        category: "hsc",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        description:
          "Young and dynamic Biology educator with advanced qualifications in Life Sciences. His GATE qualification reflects his deep understanding of the subject. Uses modern visualization techniques and interactive sessions to make biology fascinating and easy to understand.",
        achievements: [
          "GATE 2023 XL Qualified",
          "Biology expert with research background",
          "Modern teaching methodology",
          "Excellent student engagement record"
        ],
      },
      {
        id: 8,
        name: "Omkar Sir",
        qualification: "Graduate",
        expertise: "Marathi",
        experience: "10 months",
        category: "hsc",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
        description:
          "Enthusiastic Marathi language teacher focused on developing strong language skills. His student-friendly approach helps learners appreciate the beauty of Marathi literature while mastering language fundamentals.",
        achievements: [
          "Language specialist",
          "Student-friendly teaching approach",
          "Focus on practical language skills",
          "Literature appreciation focus"
        ],
      },
    ],
  }

  const allFaculty = [...facultyMembers.ssc, ...facultyMembers.hsc]

  const getDisplayedFaculty = () => {
    if (activeCategory === 'all') return allFaculty
    return facultyMembers[activeCategory] || []
  }

  const handleContactFaculty = () => {
    // Close the modal
    setSelectedFaculty(null)
    // Navigate to contact page
    navigate('/contact', { 
      state: { 
        fromFaculty: true,
        facultyName: selectedFaculty?.name 
      } 
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
        <p className="text-xl">
          Meet our experienced and dedicated teaching staff
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Teachers
          </button>
          <button
            onClick={() => setActiveCategory('ssc')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === 'ssc'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            SSC Board
          </button>
          <button
            onClick={() => setActiveCategory('hsc')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === 'hsc'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            HSC Board
          </button>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getDisplayedFaculty().map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedFaculty(faculty)}
            >
              <div className="flex justify-center pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 group-hover:border-blue-800 transition">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {faculty.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {faculty.qualification}
                </p>
                <p className="text-blue-600 mb-1">🎯 {faculty.expertise}</p>
                <p className="text-yellow-500 mb-4">⭐ {faculty.experience}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for faculty details */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-4 right-4 text-3xl cursor-pointer text-gray-500 hover:text-gray-700 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => setSelectedFaculty(null)}
            >
              &times;
            </span>
            <div className="p-6">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-blue-700 mb-2">
                    {selectedFaculty.name}
                  </h2>
                  <p className="text-gray-500 mb-1">
                    {selectedFaculty.qualification}
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start mt-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      📚 {selectedFaculty.expertise}
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      ⏰ {selectedFaculty.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedFaculty.description}
                </p>
              </div>

              {/* Achievements Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {selectedFaculty.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Button */}
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold shadow-md"
                onClick={handleContactFaculty}
              >
                Contact {selectedFaculty.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Faculty