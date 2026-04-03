import React, { useState } from 'react';

// Class Images
import class1 from '../assets/Gallery/class1.jpeg';
import class2 from '../assets/Gallery/class2.jpeg';
import class3 from '../assets/Gallery/class3.jpeg';
import class4 from '../assets/Gallery/class4.jpeg';
import class5 from '../assets/Gallery/class5.jpeg';
import class6 from '../assets/Gallery/class6.jpeg';
import class7 from '../assets/Gallery/class7.jpeg';

// Event Images (from Event folder)
import event1 from '../assets/Gallery/Event/event1.jpeg';
import event2 from '../assets/Gallery/Event/event2.jpeg';
import event3 from '../assets/Gallery/Event/event3.jpeg';
import event4 from '../assets/Gallery/Event/event4.jpeg';
import event5 from '../assets/Gallery/Event/event5.jpeg';
import event6 from '../assets/Gallery/Event/event6.jpeg';

// Event Videos (from Event folder)
import video1 from '../assets/Gallery/Event/video1.mp4';
import video2 from '../assets/Gallery/Event/video2.mp4';
import video3 from '../assets/Gallery/Event/video3.mp4';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [category, setCategory] = useState('events');

  // Event Videos Array
  const eventVideos = [
    {
      id: 'v1',
      title: "Sanskrit Workshop Highlights",
      category: "events",
      video: video1,
      type: "video",
      description: "Highlights from our annual Sanskrit workshop"
    },
    {
      id: 'v2',
      title: "Cultural Performance",
      category: "events",
      video: video2,
      type: "video",
      description: "Students performing at cultural fest"
    },
    {
      id: 'v3',
      title: "Graduation Day Ceremony",
      category: "events",
      video: video3,
      type: "video",
      description: "Annual graduation day celebration"
    }
  ];

  // Event Images Array
  const eventImages = [
    {
      id: 1,
      title: "Sanskrit Workshop 2024",
      category: "events",
      image: event1,
      type: "image",
      description: "Interactive Sanskrit grammar workshop with enthusiastic students"
    },
    {
      id: 2,
      title: "Hindi Poetry Session",
      category: "events",
      image: event2,
      type: "image",
      description: "Students performing Hindi poetry recitation with passion"
    },
    {
      id: 3,
      title: "Annual Day Celebration",
      category: "events",
      image: event3,
      type: "image",
      description: "Annual day celebration with cultural performances"
    },
    {
      id: 4,
      title: "Vedic Chanting Event",
      category: "events",
      image: event4,
      type: "image",
      description: "Special event on Vedic mantra chanting and pronunciation"
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      category: "events",
      image: event5,
      type: "image",
      description: "Students receiving certificates at graduation ceremony"
    },
    {
      id: 6,
      title: "Cultural Fest",
      category: "events",
      image: event6,
      type: "image",
      description: "Annual cultural fest with various performances"
    }
  ];

  // Class Images Array
  const classImages = [
    {
      id: 7,
      title: "Classroom Session - 5th Grade",
      category: "classes",
      image: class1,
      type: "image",
      description: "Interactive classroom learning environment with modern methods"
    },
    {
      id: 8,
      title: "Maths Foundation Class",
      category: "classes",
      image: class2,
      type: "image",
      description: "Strong foundation building in Mathematics with practical examples"
    },
    {
      id: 9,
      title: "Science Lab Session",
      category: "classes",
      image: class3,
      type: "image",
      description: "Hands-on science experiments and practical learning"
    },
    {
      id: 10,
      title: "Commerce Batch - 11th",
      category: "classes",
      image: class4,
      type: "image",
      description: "Accounts and Economics class for 11th Commerce students"
    },
    {
      id: 11,
      title: "Board Exam Preparation",
      category: "classes",
      image: class5,
      type: "image",
      description: "Focused preparation for 10th and 12th board exams"
    },
    {
      id: 12,
      title: "Doubt Solving Session",
      category: "classes",
      image: class6,
      type: "image",
      description: "One-on-one doubt clearing sessions for students"
    },
    {
      id: 13,
      title: "Faculty Meeting",
      category: "classes",
      image: class7,
      type: "image",
      description: "Faculty members discussing curriculum and teaching methodologies"
    }
  ];

  // Combine all event media (images + videos)
  const eventMedia = [...eventImages, ...eventVideos];

  const categories = [
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'classes', name: 'Classes', icon: '📚' }
  ];

  const getFilteredMedia = () => {
    if (category === 'events') {
      return eventMedia;
    } else if (category === 'classes') {
      return classImages;
    }
    return [];
  };

  const filteredMedia = getFilteredMedia();

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
    setMediaType(item.type);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-xl">Capturing moments from our language journey</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Category Filter - Only Events & Classes */}
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
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleMediaClick(item)}
            >
              {/* Video Thumbnail */}
              {item.type === 'video' ? (
                <div className="relative w-full h-64 bg-black">
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs capitalize">
                      {item.category}
                    </span>
                    {item.type === 'video' && (
                      <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-xs">
                        📹 Video
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No media found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Modal for Images & Videos */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition z-10"
              onClick={() => setSelectedMedia(null)}
            >
              &times;
            </button>

            {/* Video Player */}
            {mediaType === 'video' ? (
              <div className="bg-black">
                <video
                  src={selectedMedia.video}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh]"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img
                src={selectedMedia.image}
                alt={selectedMedia.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {selectedMedia.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {selectedMedia.description}
              </p>
              <div className="flex gap-2">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm capitalize">
                  {selectedMedia.category}
                </span>
                {selectedMedia.type === 'video' && (
                  <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                    Video
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;