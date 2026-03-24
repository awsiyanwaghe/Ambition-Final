import React, { useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      name: "Sanskrit Beginner",
      duration: "3 months",
      level: "Beginner",
      description: "Introduction to Sanskrit alphabet, basic vocabulary, and simple sentence formation. Perfect for absolute beginners.",
      curriculum: ["Devanagari Script", "Basic Grammar", "Simple Conversations", "Common Vocabulary"],
      fee: "₹5,000"
    },
    {
      id: 2,
      name: "Sanskrit Advanced",
      duration: "6 months",
      level: "Advanced",
      description: "Advanced grammar, literature, and composition. Ideal for those who want to master Sanskrit.",
      curriculum: ["Advanced Grammar", "Literature Study", "Poetry & Prose", "Translation Skills"],
      fee: "₹8,000"
    },
    {
      id: 3,
      name: "Hindi Beginner",
      duration: "2 months",
      level: "Beginner",
      description: "Learn Hindi alphabet, basic conversations, and everyday vocabulary.",
      curriculum: ["Hindi Script", "Basic Grammar", "Daily Conversations", "Common Phrases"],
      fee: "₹4,000"
    },
    {
      id: 4,
      name: "Hindi Advanced",
      duration: "4 months",
      level: "Advanced",
      description: "Advanced Hindi grammar, literature, and fluent communication skills.",
      curriculum: ["Advanced Grammar", "Hindi Literature", "Essay Writing", "Public Speaking"],
      fee: "₹6,000"
    },
    {
      id: 5,
      name: "Spoken Sanskrit",
      duration: "2 months",
      level: "All Levels",
      description: "Focus on conversational Sanskrit for daily use and communication.",
      curriculum: ["Conversational Phrases", "Daily Use Vocabulary", "Role Plays", "Group Discussions"],
      fee: "₹4,500"
    },
    {
      id: 6,
      name: "Vedic Studies",
      duration: "6 months",
      level: "Advanced",
      description: "Study of Vedic texts, mantras, and their modern applications.",
      curriculum: ["Vedic Literature", "Mantra Chanting", "Vedic Philosophy", "Modern Applications"],
      fee: "₹10,000"
    }
  ];

  return (
    <div className="courses-page">
      <div className="page-header">
        <h1>Our Courses</h1>
        <p>Choose the perfect course for your language learning journey</p>
      </div>
      
      <div className="container">
        <div className="courses-grid-full">
          {courses.map(course => (
            <div key={course.id} className="course-card-large" onClick={() => setSelectedCourse(course)}>
              <div className="course-header">
                <h3>{course.name}</h3>
                <span className="course-level">{course.level}</span>
              </div>
              <p className="course-duration">📅 {course.duration}</p>
              <p className="course-description">{course.description}</p>
              <div className="course-footer">
                <span className="course-fee">{course.fee}</span>
                <button className="btn-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for course details */}
      {selectedCourse && (
        <div className="modal" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedCourse(null)}>&times;</span>
            <h2>{selectedCourse.name}</h2>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            <p><strong>Level:</strong> {selectedCourse.level}</p>
            <p><strong>Fee:</strong> {selectedCourse.fee}</p>
            <h3>What You'll Learn:</h3>
            <ul>
              {selectedCourse.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="enroll-btn" onClick={() => window.location.href='/contact'}>Enroll Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;