import React, { useState } from 'react';

const Results = () => {
  // State management
  const [selectedExam, setSelectedExam] = useState(null); // 'ssc' or 'hsc'
  const [selectedYear, setSelectedYear] = useState(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Exam options
  const exams = [
    { id: 'ssc', name: 'SSC (10th)' },
    { id: 'hsc', name: 'HSC (12th)' }
  ];

  // Years data
  const years = {
    ssc: ['2024-2025', '2023-2024', '2022-2023', '2021-2022'],
    hsc: ['2024-2025', '2023-2024', '2022-2023', '2021-2022']
  };

  // Result data for each exam and year
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
        stats: {
          '90%+': 95,
          '85%+': 121,
          '80%+': 194
        },
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
        stats: {
          '90%+': 82,
          '85%+': 115,
          '80%+': 168
        },
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
        stats: {
          '90%+': 68,
          '85%+': 98,
          '80%+': 145
        },
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
        stats: {
          '90%+': 52,
          '85%+': 84,
          '80%+': 128
        },
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
        stats: {
          '90%+': 45,
          '80%+': 89,
          '70%+': 142
        },
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
        stats: {
          '90%+': 38,
          '80%+': 76,
          '70%+': 132
        },
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
        stats: {
          '90%+': 32,
          '80%+': 68,
          '70%+': 118
        },
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
        stats: {
          '90%+': 28,
          '80%+': 62,
          '70%+': 105
        },
        subjectToppers: [
          { subject: 'ACCOUNTS', marks: '96' },
          { subject: 'ECONOMICS', marks: '94' }
        ],
        totalStudents: 215,
        passPercentage: 96.2
      }
    }
  };

  // Handle exam selection
  const handleExamSelect = (examId) => {
    setSelectedExam(examId);
    setShowYearSelector(true);
    setSelectedYear(null);
    setShowResults(false);
  };

  // Handle year selection
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setShowResults(true);
  };

  // Handle back button
  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
      setSelectedYear(null);
    } else if (showYearSelector) {
      setShowYearSelector(false);
      setSelectedExam(null);
    }
  };

  // Get current result data
  const currentResult = selectedExam && selectedYear 
    ? resultsData[selectedExam]?.[selectedYear] 
    : null;

  return (
    <div className="results-page">
      <div className="page-header">
        <h1>Our Results</h1>
        <p>Celebrating the success of our students</p>
      </div>
      
      <div className="container">
        {/* Step 1: Exam Selection */}
        {!showYearSelector && !showResults && (
          <div className="exam-selection">
            <h2 className="selection-title">Select Examination</h2>
            <div className="exam-buttons">
              {exams.map(exam => (
                <button
                  key={exam.id}
                  className="exam-btn"
                  onClick={() => handleExamSelect(exam.id)}
                >
                  <span className="exam-icon">{exam.id === 'ssc' ? '📚' : '🎓'}</span>
                  <span className="exam-name">{exam.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Year Selection */}
        {showYearSelector && !showResults && selectedExam && (
          <div className="year-selection">
            <button className="back-btn" onClick={handleBack}>
              ← Back to Exams
            </button>
            <h2 className="selection-title">
              {selectedExam === 'ssc' ? 'SSC (10th)' : 'HSC (12th)'} - Select Year
            </h2>
            <div className="year-buttons">
              {years[selectedExam].map(year => (
                <button
                  key={year}
                  className="year-btn"
                  onClick={() => handleYearSelect(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Results Display */}
        {showResults && currentResult && (
          <div className="results-display">
            <button className="back-btn" onClick={handleBack}>
              ← Back to Years
            </button>
            
            <div className="result-header">
              <h2>
                {selectedExam === 'ssc' ? 'SSC (10th)' : 'HSC (12th)'} Results
              </h2>
              <div className="year-badge">{selectedYear}</div>
            </div>

            {/* Overall Stats */}
            <div className="result-stats">
              <div className="stat-card">
                <h3>{currentResult.totalStudents}+</h3>
                <p>Total Students</p>
              </div>
              <div className="stat-card">
                <h3>{currentResult.passPercentage}%</h3>
                <p>Pass Percentage</p>
              </div>
            </div>

            {/* Toppers Section */}
            <div className="toppers-section">
              <h3>🏆 Top Performers</h3>
              <div className="toppers-grid">
                {currentResult.toppers.map((topper, index) => (
                  <div key={index} className="topper-card">
                    <div className="topper-rank">#{topper.rank}</div>
                    <div className="topper-name">{topper.name}</div>
                    <div className="topper-percentage">{topper.percentage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Percentage Range Stats */}
            <div className="range-stats">
              <h3>📊 Performance Range</h3>
              <div className="range-bars">
                {Object.entries(currentResult.stats).map(([range, count]) => (
                  <div key={range} className="range-item">
                    <div className="range-label">{range}</div>
                    <div className="range-bar-container">
                      <div 
                        className="range-bar" 
                        style={{ width: `${(count / currentResult.totalStudents) * 100}%` }}
                      ></div>
                      <span className="range-count">{count} Students</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Toppers */}
            <div className="subject-toppers">
              <h3>📖 Subject Toppers</h3>
              <div className="subject-grid">
                {currentResult.subjectToppers.map((subject, index) => (
                  <div key={index} className="subject-card">
                    <div className="subject-name">{subject.subject}</div>
                    <div className="subject-marks">{subject.marks}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stream-wise Results for HSC */}
            {selectedExam === 'hsc' && currentResult.streamWise && (
              <div className="stream-results">
                <h3>📚 Stream-wise Results</h3>
                <div className="stream-grid">
                  <div className="stream-card">
                    <h4>Commerce</h4>
                    <p>Highest: {currentResult.streamWise.commerce.highest}</p>
                    <p>Toppers: {currentResult.streamWise.commerce.toppers.join(', ')}</p>
                  </div>
                  <div className="stream-card">
                    <h4>Science</h4>
                    <p>Highest: {currentResult.streamWise.science.highest}</p>
                    <p>Toppers: {currentResult.streamWise.science.toppers.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Download Results Button */}
            <div className="download-section">
              <button className="download-btn" onClick={() => alert('Result PDF will be available soon')}>
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