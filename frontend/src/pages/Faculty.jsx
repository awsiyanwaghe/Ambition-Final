// pages/Faculty.jsx
import React, { useState } from 'react'

import mahjabeen from '../assets/Teachers/mahjabeen.jpeg'
import simran from '../assets/Teachers/simran.jpeg'
import sagar from '../assets/Teachers/sagar.png'

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

const facultyMembers = {
  ssc: [
    {
      id: 1,
      name: "Sagar Sir",
      qualification: "Diploma, BE in Electronics",
      expertise: "Maths",
      experience: "10+ years",
      category: "ssc",
      image:sagar,
      description:
        "Experienced Mathematics teacher with strong problem-solving teaching methods.",
      achievements: ["10+ years experience", "Maths expert"],
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
        "Math teacher with strong logical and analytical teaching approach.",
      achievements: ["7+ years experience", "Maths specialist"],
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
        "Highly experienced science teacher with deep knowledge in Physics.",
      achievements: ["10+ years experience", "Science expert"],
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
        "Geography teacher who connects concepts with real-world examples.",
      achievements: ["3 years experience", "Interactive teaching"],
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
        "Highly experienced educator with 16+ years in Economics and Commerce.",
      achievements: ["16+ years experience", "Commerce expert"],
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
        "Expert in Accounting and Mathematics with strong teaching skills.",
      achievements: ["7 years experience", "Accounting expert"],
    },
    {
      id: 7,
      name: "Suraj Sir",
      qualification:
        "B.Sc Biochemistry, MSc Life Sciences, GATE 2023 XL Qualified",
      expertise: "Biology",
      experience: "2 years",
      category: "hsc",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      description:
        "Biology teacher with advanced academic background and modern teaching methods.",
      achievements: ["GATE Qualified", "Biology expert"],
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
        "Marathi teacher focusing on language clarity and communication.",
      achievements: ["Language specialist", "Student-friendly approach"],
    },
  ],
}

  const allFaculty = [...facultyMembers.ssc, ...facultyMembers.hsc]

  const getDisplayedFaculty = () => {
    if (activeCategory === 'all') return allFaculty
    return facultyMembers[activeCategory] || []
  }

  return (
    <div>
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getDisplayedFaculty().map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition cursor-pointer"
              onClick={() => setSelectedFaculty(faculty)}
            >
              <div className="flex justify-center pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600">
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
                <p className="text-gray-500 text-sm mb-2">
                  {faculty.qualification}
                </p>
                <p className="text-blue-600 mb-1">🎯 {faculty.expertise}</p>
                <p className="text-yellow-500 mb-4">⭐ {faculty.experience}</p>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for faculty details */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-4 right-4 text-3xl cursor-pointer text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setSelectedFaculty(null)}
            >
              &times;
            </span>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600">
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
                  <p className="text-blue-600 mb-1">
                    📚 {selectedFaculty.expertise}
                  </p>
                  <p className="text-yellow-500">
                    ⏰ {selectedFaculty.experience}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">About</h3>
                <p className="text-gray-600">{selectedFaculty.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedFaculty.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Faculty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Faculty
