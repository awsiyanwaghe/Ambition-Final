// pages/Faculty.jsx
import React, { useState } from 'react';

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Tamisra Bandyopadhyay",
      qualification: "Ph.D. in Sanskrit",
      expertise: "Vedic Literature, Sanskrit Grammar",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      description: "Dr. Tamisra is a renowned Sanskrit scholar with extensive experience in teaching Vedic literature and classical Sanskrit. She has authored several books on Sanskrit grammar and regularly conducts workshops on Sanskrit for modern applications.",
      achievements: ["Authored 5 books on Sanskrit", "Recipient of National Sanskrit Award", "Visiting faculty at multiple universities"]
    },
    {
      id: 2,
      name: "Prof. Rajesh Sharma",
      qualification: "M.A. Hindi, B.Ed",
      expertise: "Hindi Literature, Poetry",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Prof. Sharma specializes in Hindi literature and has been teaching Hindi for over a decade. His interactive teaching style makes learning Hindi fun and engaging for students of all ages.",
      achievements: ["Published 3 poetry collections", "Best Teacher Award 2022", "Developed innovative Hindi curriculum"]
    },
    {
      id: 3,
      name: "Dr. Meera Iyer",
      qualification: "Ph.D. in Sanskrit",
      expertise: "Sanskrit Philosophy, Grammar",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      description: "Dr. Meera brings a unique perspective to Sanskrit teaching with her background in both traditional and modern educational systems. She focuses on practical applications of Sanskrit in daily life.",
      achievements: ["Research fellow at Sanskrit Academy", "Published 10 research papers", "Developed online Sanskrit course"]
    },
    {
      id: 4,
      name: "Ms. Priya Patel",
      qualification: "M.A. Hindi, Diploma in Teaching",
      expertise: "Hindi Grammar, Communication",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      description: "Ms. Priya specializes in teaching Hindi to beginners and intermediate students. Her patient approach and innovative teaching methods help students build confidence in speaking Hindi.",
      achievements: ["Certified Hindi language trainer", "Developed spoken Hindi curriculum", "Conducted workshops for corporates"]
    },
    {
      id: 5,
      name: "Dr. Anand Tiwari",
      qualification: "Ph.D. in Vedic Studies",
      expertise: "Vedic Texts, Mantras",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description: "Dr. Tiwari is an expert in Vedic studies and has dedicated his life to understanding and teaching ancient Vedic texts. His classes offer deep insights into Vedic philosophy and its modern relevance.",
      achievements: ["Director of Vedic Research Center", "Authored 8 books on Vedic philosophy", "International speaker"]
    },
    {
      id: 6,
      name: "Ms. Sunita Verma",
      qualification: "M.A. Sanskrit, B.Ed",
      expertise: "Spoken Sanskrit, Children's Education",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      description: "Ms. Sunita specializes in teaching Sanskrit to children and beginners. Her creative teaching methods make learning Sanskrit enjoyable and accessible for young learners.",
      achievements: ["Created Sanskrit learning app for kids", "Conducted summer camps for children", "Developed Sanskrit storytelling program"]
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
        <p className="text-xl">Meet our experienced and dedicated teaching staff</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map(faculty => (
            <div key={faculty.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition cursor-pointer" onClick={() => setSelectedFaculty(faculty)}>
              <div className="h-64 overflow-hidden">
                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{faculty.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{faculty.qualification}</p>
                <p className="text-blue-600 mb-1">🎯 {faculty.expertise}</p>
                <p className="text-yellow-500 mb-4">⭐ {faculty.experience}</p>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for faculty details */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedFaculty(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-4 text-3xl cursor-pointer text-gray-500 hover:text-gray-700 z-10" onClick={() => setSelectedFaculty(null)}>&times;</span>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0" />
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.name}</h2>
                  <p className="text-gray-500 mb-1">{selectedFaculty.qualification}</p>
                  <p className="text-blue-600 mb-1">📚 {selectedFaculty.expertise}</p>
                  <p className="text-yellow-500">⏰ {selectedFaculty.experience}</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">About</h3>
                <p className="text-gray-600">{selectedFaculty.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedFaculty.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => window.location.href='/contact'}>Contact Faculty</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;