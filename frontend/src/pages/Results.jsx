// pages/Results.jsx
import React, { useState } from 'react';

const Results = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const exams = [
    { id: 'ssc', name: 'SSC (10th)', icon: '📚' },
    { id: 'hsc', name: 'HSC (12th)', icon: '🎓' }
  ];

  const years = {
    ssc: ['2024-2025', '2023-2024', '2022-2023', '2021-2022'],
    hsc: ['2024-2025', '2023-2024', '2022-2023', '2021-2022']
  };

  const resultsData = {
    ssc: {
      '2024-2025': {
        toppers: [
          { name: 'SHREYA NALAWADE', percentage: '96.80%', rank: 1 },
          { name: 'SHARVARI SAKPAL', percentage: '96.40%', rank: 2 },
          { name: 'NIYATI PARAB', percentage: '96.40%', rank: 2 },
          { name: 'AARYA NAWAR', percentage: '95.80%', rank: 3 },
          { name: 'PIYUSH SANAP', percentage: '95.80%', rank: 3 }
        ],
        stats: { '90%+': 95, '85%+': 121, '80%+': 194 },
        subjectToppers: [
          { subject: 'MATHS', marks: '99' },
          { subject: 'SANSKRIT', marks: '99' },
          { subject: 'SCIENCE', marks: '98' },
          { subject: 'S.SCIENCE', marks: '98' },
          { subject: 'MARATHI', marks: '97' },
          { subject: 'ENGLISH', marks: '96' },
          { subject: 'HINDI', marks: '95' }
        ],
        totalStudents: 410,
        passPercentage: 98.5
      },
      '2023-2024': {
        toppers: [
          { name: 'ADITYA SHARMA', percentage: '95.50%', rank: 1 },
          { name: 'NEHA PATEL', percentage: '94.80%', rank: 2 },
          { name: 'RAHUL VERMA', percentage: '94.20%', rank: 3 }
        ],
        stats: { '90%+': 82, '85%+': 115, '80%+': 168 },
        subjectToppers: [
          { subject: 'MATHS', marks: '98' },
          { subject: 'SANSKRIT', marks: '97' },
          { subject: 'SCIENCE', marks: '96' }
        ],
        totalStudents: 385,
        passPercentage: 97.8
      },
      '2022-2023': {
        toppers: [
          { name: 'VIKRAM SINGH', percentage: '94.20%', rank: 1 },
          { name: 'POOJA JOSHI', percentage: '93.80%', rank: 2 }
        ],
        stats: { '90%+': 68, '85%+': 98, '80%+': 145 },
        subjectToppers: [
          { subject: 'MATHS', marks: '97' },
          { subject: 'SANSKRIT', marks: '96' }
        ],
        totalStudents: 352,
        passPercentage: 96.5
      },
      '2021-2022': {
        toppers: [
          { name: 'ANKIT MEHTA', percentage: '93.50%', rank: 1 },
          { name: 'DIVYA NAIR', percentage: '92.80%', rank: 2 }
        ],
        stats: { '90%+': 52, '85%+': 84, '80%+': 128 },
        subjectToppers: [
          { subject: 'MATHS', marks: '96' },
          { subject: 'SCIENCE', marks: '95' }
        ],
        totalStudents: 320,
        passPercentage: 95.2
      }
    },
    hsc: {
      '2024-2025': {
        toppers: [
          { name: 'SAHIL PHAD', percentage: '99.71%', rank: 1 },
          { name: 'SIDDHARTH SANGALE', percentage: '99.14%', rank: 2 },
          { name: 'NEEL GURAV', percentage: '98.35%', rank: 3 },
          { name: 'SHREYA GOTAD', percentage: '97.26%', rank: 4 },
          { name: 'SHURTIKA MANE', percentage: '95.13%', rank: 5 }
        ],
        stats: { '90%+': 45, '80%+': 89, '70%+': 142 },
        subjectToppers: [
          { subject: 'ACCOUNTS', marks: '100' },
          { subject: 'OCM', marks: '99' },
          { subject: 'MATHS', marks: '98' },
          { subject: 'SP', marks: '92' },
          { subject: 'ECO', marks: '97' }
        ],
        streamWise: {
          commerce: { toppers: ['SAHIL PHAD', 'SIDDHARTH SANGALE'], highest: '99.71%' },
          science: { toppers: ['NEEL GURAV', 'SHREYA GOTAD'], highest: '98.35%' }
        },
        totalStudents: 285,
        passPercentage: 99.2
      },
      '2023-2024': {
        toppers: [
          { name: 'SHREYA MANDAVKAR', percentage: '95.33%', rank: 1 },
          { name: 'SOHAM PAWASKAR', percentage: '93.50%', rank: 2 },
          { name: 'NEEL BISHT', percentage: '91.83%', rank: 3 }
        ],
        stats: { '90%+': 38, '80%+': 76, '70%+': 132 },
        subjectToppers: [
          { subject: 'ACCOUNTS', marks: '98' },
          { subject: 'ECONOMICS', marks: '96' },
          { subject: 'MATHS', marks: '95' }
        ],
        totalStudents: 265,
        passPercentage: 98.5
      },
      '2022-2023': {
        toppers: [
          { name: 'RITESH KUMAR', percentage: '94.20%', rank: 1 },
          { name: 'ANJALI SINGH', percentage: '93.60%', rank: 2 }
        ],
        stats: { '90%+': 32, '80%+': 68, '70%+': 118 },
        subjectToppers: [
          { subject: 'ACCOUNTS', marks: '97' },
          { subject: 'BUSINESS', marks: '95' }
        ],
        totalStudents: 240,
        passPercentage: 97.2
      },
      '2021-2022': {
        toppers: [
          { name: 'MAYANK PATEL', percentage: '93.80%', rank: 1 },
          { name: 'KAVITA SHARMA', percentage: '92.50%', rank: 2 }
        ],
        stats: { '90%+': 28, '80%+': 62, '70%+': 105 },
        subjectToppers: [
          { subject: 'ACCOUNTS', marks: '96' },
          { subject: 'ECONOMICS', marks: '94' }
        ],
        totalStudents: 215,
        passPercentage: 96.2
      }
    }
  };

  const handleExamSelect = (examId) => {
    setSelectedExam(examId);
    setShowYearSelector(true);
    setSelectedYear(null);
    setShowResults(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setShowResults(true);
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
      setSelectedYear(null);
    } else if (showYearSelector) {
      setShowYearSelector(false);
      setSelectedExam(null);
    }
  };

  const currentResult = selectedExam && selectedYear 
    ? resultsData[selectedExam]?.[selectedYear] 
    : null;

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h1>
        <p className="text-xl">Celebrating the success of our students</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Exam Selection */}
        {!showYearSelector && !showResults && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Select Examination</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {exams.map(exam => (
                <button
                  key={exam.id}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl hover:-translate-y-2 transition shadow-lg min-w-[200px] flex flex-col items-center gap-3"
                  onClick={() => handleExamSelect(exam.id)}
                >
                  <span className="text-5xl">{exam.icon}</span>
                  <span className="text-xl font-bold">{exam.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Year Selection */}
        {showYearSelector && !showResults && selectedExam && (
          <div>
            <button className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2" onClick={handleBack}>
              ← Back to Exams
            </button>
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
              {selectedExam === 'ssc' ? 'SSC (10th)' : 'HSC (12th)'} - Select Year
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {years[selectedExam].map(year => (
                <button
                  key={year}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  onClick={() => handleYearSelect(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Display */}
        {showResults && currentResult && (
          <div>
            <button className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2" onClick={handleBack}>
              ← Back to Years
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">
                {selectedExam === 'ssc' ? 'SSC (10th)' : 'HSC (12th)'} Results
              </h2>
              <span className="inline-block bg-yellow-400 text-blue-700 px-4 py-1 rounded-full font-semibold">{selectedYear}</span>
            </div>

            {/* Overall Stats */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl text-center min-w-[200px]">
                <h3 className="text-3xl font-bold mb-2">{currentResult.totalStudents}+</h3>
                <p>Total Students</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl text-center min-w-[200px]">
                <h3 className="text-3xl font-bold mb-2">{currentResult.passPercentage}%</h3>
                <p>Pass Percentage</p>
              </div>
            </div>

            {/* Toppers Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">🏆 Top Performers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentResult.toppers.map((topper, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-3 left-3 bg-yellow-400 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">#{topper.rank}</div>
                    <div className="mt-4">
                      <div className="text-lg font-bold text-gray-800 mb-2">{topper.name}</div>
                      <div className="text-2xl font-bold text-blue-600">{topper.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Percentage Range Stats */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">📊 Performance Range</h3>
              <div className="space-y-4">
                {Object.entries(currentResult.stats).map(([range, count]) => (
                  <div key={range}>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-700">{range}</span>
                      <span className="text-gray-500">{count} Students</span>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg overflow-hidden relative">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-end pr-3 text-white font-bold" style={{ width: `${(count / currentResult.totalStudents) * 100}%` }}>
                        {Math.round((count / currentResult.totalStudents) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Toppers */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">📖 Subject Toppers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentResult.subjectToppers.map((subject, index) => (
                  <div key={index} className="border-2 border-blue-600 rounded-lg p-4 text-center hover:bg-blue-600 hover:text-white transition group">
                    <div className="font-semibold mb-2 group-hover:text-white">{subject.subject}</div>
                    <div className="text-2xl font-bold text-blue-600 group-hover:text-yellow-400">{subject.marks}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stream-wise Results for HSC */}
            {selectedExam === 'hsc' && currentResult.streamWise && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">📚 Stream-wise Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-600 bg-gray-50 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-blue-700 mb-3">Commerce</h4>
                    <p className="text-gray-600">Highest: {currentResult.streamWise.commerce.highest}</p>
                    <p className="text-gray-600">Toppers: {currentResult.streamWise.commerce.toppers.join(', ')}</p>
                  </div>
                  <div className="border-l-4 border-blue-600 bg-gray-50 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-blue-700 mb-3">Science</h4>
                    <p className="text-gray-600">Highest: {currentResult.streamWise.science.highest}</p>
                    <p className="text-gray-600">Toppers: {currentResult.streamWise.science.toppers.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Download Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition" onClick={() => alert('Result PDF will be available soon')}>
                📥 Download Complete Result PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;