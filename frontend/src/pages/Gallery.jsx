import React, { useState } from 'react';

// Existing images (make sure these exist in your folder)
import class1 from '../assets/Gallery/class1.jpeg';
import class2 from '../assets/Gallery/class2.jpeg';
import class3 from '../assets/Gallery/class3.jpeg';
import class4 from '../assets/Gallery/class4.jpeg';
import class5 from '../assets/Gallery/class5.jpeg';
import class6 from '../assets/Gallery/class6.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const galleryImages = [
    // Events (using class images temporarily)
    {
      id: 1,
      title: "Sanskrit Workshop",
      category: "events",
      image: class1,
      description: "Interactive Sanskrit grammar workshop with enthusiastic students"
    },
    {
      id: 2,
      title: "Hindi Poetry Session",
      category: "events",
      image: class2,
      description: "Students performing Hindi poetry recitation with passion"
    },
    {
      id: 3,
      title: "Annual Day Celebration",
      category: "events",
      image: class3,
      description: "Annual day celebration with cultural performances"
    },

    // Classes
    {
      id: 4,
      title: "Vedic Chanting Class",
      category: "classes",
      image: class4,
      description: "Special class on Vedic mantra chanting and pronunciation"
    },
    {
      id: 5,
      title: "Classroom Session",
      category: "classes",
      image: class5,
      description: "Interactive classroom learning environment with modern methods"
    },
    {
      id: 6,
      title: "Faculty Meeting",
      category: "classes",
      image: class6,
      description: "Faculty members discussing curriculum and teaching methodologies"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🖼️' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'classes', name: 'Classes', icon: '📚' }
  ];

  const filteredImages =
    category === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === category);

  return (
    <div>
      {/* Header */}
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
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-600 rounded-full text-xs capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {selectedImage.description}
              </p>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm capitalize">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;