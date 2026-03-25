// pages/Gallery.jsx
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      title: "Sanskrit Workshop",
      category: "events",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      description: "Interactive Sanskrit grammar workshop with enthusiastic students"
    },
    {
      id: 2,
      title: "Hindi Poetry Session",
      category: "events",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
      description: "Students performing Hindi poetry recitation with passion"
    },
    {
      id: 3,
      title: "Vedic Chanting Class",
      category: "classes",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop",
      description: "Special class on Vedic mantra chanting and pronunciation"
    },
    {
      id: 4,
      title: "Annual Day Celebration",
      category: "events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description: "Annual day celebration with cultural performances"
    },
    {
      id: 5,
      title: "Student Achievements",
      category: "achievements",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      description: "Award ceremony celebrating outstanding student achievements"
    },
    {
      id: 6,
      title: "Classroom Session",
      category: "classes",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
      description: "Interactive classroom learning environment with modern methods"
    },
    {
      id: 7,
      title: "Sanskrit Day Celebration",
      category: "events",
      image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&h=400&fit=crop",
      description: "World Sanskrit Day celebration with traditional rituals"
    },
    {
      id: 8,
      title: "Faculty Meeting",
      category: "classes",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      description: "Faculty members discussing curriculum and teaching methodologies"
    },
    {
      id: 9,
      title: "Student Awards",
      category: "achievements",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      description: "Students receiving certificates of achievement and recognition"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🖼️' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'classes', name: 'Classes', icon: '📚' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' }
  ];

  const filteredImages = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-xl">Capturing moments from our language journey</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full transition ${
                category === cat.id 
                  ? 'bg-blue-600 text-white' 
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
              onClick={() => setCategory(cat.id)}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => setSelectedImage(image)}>
              <img src={image.image} alt={image.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-600 rounded-full text-xs">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-4 text-3xl cursor-pointer text-white hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[70vh] object-contain bg-black" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-3">{selectedImage.description}</p>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm capitalize">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;