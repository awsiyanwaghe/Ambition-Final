import React, { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyeMSCL_RqlDFk10pn6WsqCbI7XIo9px7SiBvnzj-OjW67Xw/viewform";

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleEnroll = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  const classes = [
    {
      id: 1,
      name: "Class 5th to 7th",
      description:
        "Strong foundation building in Maths, Science, and all subjects with simple explanation and personal attention.",
      features: [
        "Basic Concept Clarity",
        "All Subjects Covered",
        "Regular Tests",
        "Homework Support",
      ],
    },
    {
      id: 2,
      name: "Class 8th & 9th",
      description:
        "Focused learning in Maths & Science with deep concept understanding and exam preparation.",
      features: [
        "Concept-Based Learning",
        "Maths + Science Focus",
        "Weekly Tests",
        "Doubt Solving",
      ],
    },
    {
      id: 3,
      name: "Class 10th",
      description:
        "Board exam preparation with strong focus on Maths, Science, and scoring techniques.",
      features: [
        "Board Preparation",
        "Important Questions",
        "Test Series",
        "Time Management",
      ],
    },
    {
      id: 4,
      name: "11th Commerce",
      description:
        "Clear understanding of Accounts, Economics, and Business Studies with practical approach.",
      features: [
        "Accounts Basics",
        "Economics Concepts",
        "Regular Practice",
        "Exam Preparation",
      ],
    },
    {
      id: 5,
      name: "12th Commerce",
      description:
        "Advanced Accounts, Economics & BST with board-focused strategy and high scoring techniques.",
      features: [
        "Board Level Preparation",
        "Important Topics Focus",
        "Mock Tests",
        "Revision Strategy",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Classes
        </h1>
        <p className="text-xl">Choose your class</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition cursor-pointer"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {cls.name}
              </h3>
              <p className="text-gray-600 mt-2">{cls.description}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedClass && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-blue-700 pr-6">
              {selectedClass.name}
            </h2>

            <p className="mt-2">{selectedClass.description}</p>

            <div className="mt-3 flex items-center justify-between bg-green-50 border border-green-200 px-4 py-2 rounded-lg animate-pulse">
              <p className="text-green-700 font-semibold flex items-center gap-2">
                <span className="text-lg">⭐</span>
                Limited Seats Available
              </p>

              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full animate-bounce">
                Hurry!
              </span>
            </div>

            {/* Features */}
            <ul className="mt-4 list-disc pl-5">
              {selectedClass.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Fees */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Fees Structure</h3>
              <p>💰 One Installment: ₹27,000</p>
              <p>💰 Two Installments: ₹38,999</p>
              <p>💰 Three Installments: ₹40,999</p>
            </div>

            {/* Button */}
            <button
              onClick={handleEnroll}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
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