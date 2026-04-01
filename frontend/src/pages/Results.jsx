import React, { useState } from 'react'

// ✅ Images Import
import shreyaImg from "../assets/Results/SSC/23-24/shreya.png";
import palakImg from "../assets/Results/SSC/23-24/palak.png";
import gpImg from "../assets/Results/SSC/24-25/gp.jpeg";
import result1Img from "../assets/Results/SSC/24-25/gp.jpeg";
import result2Img from "../assets/Results/SSC/24-25/gp.jpeg";

const Results = () => {
  const [selectedExam, setSelectedExam] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [showYearSelector, setShowYearSelector] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const exams = [
    { id: 'ssc', name: 'SSC (10th)', icon: '📚' },
    { id: 'hsc', name: 'HSC (12th)', icon: '🎓' },
  ]

  const years = {
    ssc: ['2024-2025', '2023-2024'],
    hsc: ['2024-2025', '2023-2024'],
  }

  // ✅ IMAGE BASED DATA
  const resultsImages = {
    ssc: {
      '2024-2025': [gpImg, result1Img, result2Img],
      '2023-2024': [shreyaImg, palakImg],
    },
    hsc: {
      '2024-2025': [gpImg], // abhi same use kar raha hu (baad me change kar lena)
      '2023-2024': [result1Img],
    },
  }

  const handleExamSelect = (examId) => {
    setSelectedExam(examId)
    setShowYearSelector(true)
    setSelectedYear(null)
    setShowResults(false)
  }

  const handleYearSelect = (year) => {
    setSelectedYear(year)
    setShowResults(true)
  }

  const handleBack = () => {
    if (showResults) {
      setShowResults(false)
      setSelectedYear(null)
    } else {
      setShowYearSelector(false)
      setSelectedExam(null)
    }
  }

  const currentImages =
    selectedExam && selectedYear
      ? resultsImages[selectedExam]?.[selectedYear]
      : []

  return (
    <div>
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Results
        </h1>
        <p className="text-xl">Celebrating Student Success 🎉</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* EXAM SELECT */}
        {!showYearSelector && !showResults && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Select Examination
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              {exams.map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => handleExamSelect(exam.id)}
                  className="bg-blue-600 text-white p-8 rounded-xl hover:scale-105 transition shadow-lg"
                >
                  <div className="text-4xl">{exam.icon}</div>
                  <div className="text-lg font-bold mt-2">
                    {exam.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* YEAR SELECT */}
        {showYearSelector && !showResults && (
          <div className="text-center">
            <button
              onClick={handleBack}
              className="mb-6 text-blue-600"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Select Year
            </h2>

            <div className="flex justify-center gap-4 flex-wrap">
              {years[selectedExam].map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULTS SHOW */}
        {showResults && (
          <div>
            <button
              onClick={handleBack}
              className="mb-6 text-blue-600"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
              {selectedExam.toUpperCase()} - {selectedYear} Results
            </h2>

            {/* ✅ IMAGE GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentImages?.map((img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
                >
                  <img
                    src={img}
                    alt="result"
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* ✅ Coaching Style Note */}
            <div className="mt-10 bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                🎉 Congratulations to All Students!
              </h3>
              <p className="text-gray-600">
                Our students consistently achieve excellent results
                every year. We are proud of their hard work and
                dedication.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Results