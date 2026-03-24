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
      image: "https://via.placeholder.com/300x300?text=Dr.+Tamisra",
      description: "Dr. Tamisra is a renowned Sanskrit scholar with extensive experience in teaching Vedic literature and classical Sanskrit. She has authored several books on Sanskrit grammar and regularly conducts workshops on Sanskrit for modern applications.",
      achievements: ["Authored 5 books on Sanskrit", "Recipient of National Sanskrit Award", "Visiting faculty at multiple universities"]
    },
    {
      id: 2,
      name: "Prof. Rajesh Sharma",
      qualification: "M.A. Hindi, B.Ed",
      expertise: "Hindi Literature, Poetry",
      experience: "12+ years",
      image: "https://via.placeholder.com/300x300?text=Prof.+Rajesh",
      description: "Prof. Sharma specializes in Hindi literature and has been teaching Hindi for over a decade. His interactive teaching style makes learning Hindi fun and engaging for students of all ages.",
      achievements: ["Published 3 poetry collections", "Best Teacher Award 2022", "Developed innovative Hindi curriculum"]
    },
    {
      id: 3,
      name: "Dr. Meera Iyer",
      qualification: "Ph.D. in Sanskrit",
      expertise: "Sanskrit Philosophy, Grammar",
      experience: "10+ years",
      image: "https://via.placeholder.com/300x300?text=Dr.+Meera",
      description: "Dr. Meera brings a unique perspective to Sanskrit teaching with her background in both traditional and modern educational systems. She focuses on practical applications of Sanskrit in daily life.",
      achievements: ["Research fellow at Sanskrit Academy", "Published 10 research papers", "Developed online Sanskrit course"]
    },
    {
      id: 4,
      name: "Ms. Priya Patel",
      qualification: "M.A. Hindi, Diploma in Teaching",
      expertise: "Hindi Grammar, Communication",
      experience: "8+ years",
      image: "https://via.placeholder.com/300x300?text=Ms.+Priya",
      description: "Ms. Priya specializes in teaching Hindi to beginners and intermediate students. Her patient approach and innovative teaching methods help students build confidence in speaking Hindi.",
      achievements: ["Certified Hindi language trainer", "Developed spoken Hindi curriculum", "Conducted workshops for corporates"]
    },
    {
      id: 5,
      name: "Dr. Anand Tiwari",
      qualification: "Ph.D. in Vedic Studies",
      expertise: "Vedic Texts, Mantras",
      experience: "20+ years",
      image: "https://via.placeholder.com/300x300?text=Dr.+Anand",
      description: "Dr. Tiwari is an expert in Vedic studies and has dedicated his life to understanding and teaching ancient Vedic texts. His classes offer deep insights into Vedic philosophy and its modern relevance.",
      achievements: ["Director of Vedic Research Center", "Authored 8 books on Vedic philosophy", "International speaker"]
    },
    {
      id: 6,
      name: "Ms. Sunita Verma",
      qualification: "M.A. Sanskrit, B.Ed",
      expertise: "Spoken Sanskrit, Children's Education",
      experience: "7+ years",
      image: "https://via.placeholder.com/300x300?text=Ms.+Sunita",
      description: "Ms. Sunita specializes in teaching Sanskrit to children and beginners. Her creative teaching methods make learning Sanskrit enjoyable and accessible for young learners.",
      achievements: ["Created Sanskrit learning app for kids", "Conducted summer camps for children", "Developed Sanskrit storytelling program"]
    }
  ];

  return (
    <div className="faculty-page">
      <div className="page-header">
        <h1>Our Faculty</h1>
        <p>Meet our experienced and dedicated teaching staff</p>
      </div>
      
      <div className="container">
        <div className="faculty-grid">
          {facultyMembers.map(faculty => (
            <div key={faculty.id} className="faculty-card" onClick={() => setSelectedFaculty(faculty)}>
              <div className="faculty-image">
                <img src={faculty.image} alt={faculty.name} />
              </div>
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p className="qualification">{faculty.qualification}</p>
                <p className="expertise">🎯 {faculty.expertise}</p>
                <p className="experience">⭐ {faculty.experience}</p>
                <button className="view-profile">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for faculty details */}
      {selectedFaculty && (
        <div className="modal" onClick={() => setSelectedFaculty(null)}>
          <div className="modal-content faculty-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedFaculty(null)}>&times;</span>
            <div className="modal-header">
              <img src={selectedFaculty.image} alt={selectedFaculty.name} className="modal-img" />
              <div className="modal-header-info">
                <h2>{selectedFaculty.name}</h2>
                <p className="modal-qualification">{selectedFaculty.qualification}</p>
                <p className="modal-expertise">📚 {selectedFaculty.expertise}</p>
                <p className="modal-experience">⏰ {selectedFaculty.experience}</p>
              </div>
            </div>
            <div className="modal-body">
              <h3>About</h3>
              <p>{selectedFaculty.description}</p>
              <h3>Key Achievements</h3>
              <ul>
                {selectedFaculty.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <button className="contact-faculty" onClick={() => window.location.href='/contact'}>Contact Faculty</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;