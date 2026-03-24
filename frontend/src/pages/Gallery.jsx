import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      title: "Sanskrit Workshop",
      category: "events",
      image: "https://via.placeholder.com/400x300?text=Sanskrit+Workshop",
      description: "Interactive Sanskrit grammar workshop with students"
    },
    {
      id: 2,
      title: "Hindi Poetry Session",
      category: "events",
      image: "https://via.placeholder.com/400x300?text=Hindi+Poetry",
      description: "Students performing Hindi poetry recitation"
    },
    {
      id: 3,
      title: "Vedic Chanting Class",
      category: "classes",
      image: "https://via.placeholder.com/400x300?text=Vedic+Chanting",
      description: "Special class on Vedic mantra chanting"
    },
    {
      id: 4,
      title: "Annual Day Celebration",
      category: "events",
      image: "https://via.placeholder.com/400x300?text=Annual+Day",
      description: "Annual day celebration with student performances"
    },
    {
      id: 5,
      title: "Student Achievements",
      category: "achievements",
      image: "https://via.placeholder.com/400x300?text=Achievements",
      description: "Award ceremony for outstanding students"
    },
    {
      id: 6,
      title: "Classroom Session",
      category: "classes",
      image: "https://via.placeholder.com/400x300?text=Classroom",
      description: "Interactive classroom learning environment"
    },
    {
      id: 7,
      title: "Sanskrit Day Celebration",
      category: "events",
      image: "https://via.placeholder.com/400x300?text=Sanskrit+Day",
      description: "World Sanskrit Day celebration"
    },
    {
      id: 8,
      title: "Faculty Meeting",
      category: "classes",
      image: "https://via.placeholder.com/400x300?text=Faculty+Meeting",
      description: "Faculty members discussing curriculum"
    },
    {
      id: 9,
      title: "Student Awards",
      category: "achievements",
      image: "https://via.placeholder.com/400x300?text=Student+Awards",
      description: "Students receiving certificates of achievement"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'classes', name: 'Classes' },
    { id: 'achievements', name: 'Achievements' }
  ];

  const filteredImages = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Capturing moments from our language journey</p>
      </div>
      
      <div className="container">
        <div className="gallery-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${category === cat.id ? 'active' : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
              <img src={image.image} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content image-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
            <div className="image-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className="image-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;