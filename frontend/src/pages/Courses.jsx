import React, { useState } from 'react';

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyeMSCL_RqlDFk10pn6WsqCbI7XIo9px7SiBvnzj-OjW67Xw/viewform";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  const courses = [
    {
      id: 1,
      name: "Sanskrit Beginner",
      duration: "3 months",
      level: "Beginner",
      description: "Introduction to Sanskrit alphabet, basic vocabulary, and simple sentence formation.",
      curriculum: ["Devanagari Script", "Basic Grammar", "Simple Conversations", "Common Vocabulary"],
      fee: "₹5,000"
    },
    {
      id: 2,
      name: "Sanskrit Advanced",
      duration: "6 months",
      level: "Advanced",
      description: "Advanced grammar, literature, and composition.",
      curriculum: ["Advanced Grammar", "Literature Study", "Poetry & Prose", "Translation Skills"],
      fee: "₹8,000"
    },
    {
      id: 3,
      name: "Hindi Beginner",
      duration: "2 months",
      level: "Beginner",
      description: "Learn Hindi alphabet and conversations.",
      curriculum: ["Hindi Script", "Basic Grammar", "Daily Conversations", "Common Phrases"],
      fee: "₹4,000"
    },
    {
      id: 4,
      name: "Hindi Advanced",
      duration: "4 months",
      level: "Advanced",
      description: "Advanced Hindi grammar and communication.",
      curriculum: ["Advanced Grammar", "Hindi Literature", "Essay Writing", "Public Speaking"],
      fee: "₹6,000"
    },
    {
      id: 5,
      name: "Spoken Sanskrit",
      duration: "2 months",
      level: "All Levels",
      description: "Conversational Sanskrit for daily use.",
      curriculum: ["Conversational Phrases", "Daily Use Vocabulary", "Role Plays", "Group Discussions"],
      fee: "₹4,500"
    },
    {
      id: 6,
      name: "Vedic Studies",
      duration: "6 months",
      level: "Advanced",
      description: "Study of Vedic texts and mantras.",
      curriculum: ["Vedic Literature", "Mantra Chanting", "Vedic Philosophy", "Modern Applications"],
      fee: "₹10,000"
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
        <p className="text-xl">Choose your course</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <h3 className="text-xl font-bold text-blue-700">{course.name}</h3>
              <p className="text-gray-500">📅 {course.duration}</p>
              <p className="text-gray-600">{course.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-blue-700">{course.fee}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center" onClick={() => setSelectedCourse(null)}>
          <div className="bg-white p-6 rounded-xl max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-blue-700">{selectedCourse.name}</h2>
            <p>{selectedCourse.description}</p>

            <button
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;