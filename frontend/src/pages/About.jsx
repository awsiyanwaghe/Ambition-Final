// pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn about our journey and mission</p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">The Sanskrit Hub was established with a vision to preserve and promote the ancient language of Sanskrit while also providing quality Hindi education. Located in Andheri, Mumbai, we have been serving the community with dedication and excellence.</p>
          <p className="text-gray-600">Our mission is to make Sanskrit accessible to everyone, showcasing its scientific nature and relevance in today's world. We believe that learning these languages opens doors to rich cultural heritage and enhances cognitive abilities.</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">📚 Expert Faculty</h3>
              <p className="text-gray-600">Highly qualified teachers with years of experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">🎯 Structured Curriculum</h3>
              <p className="text-gray-600">Well-designed courses for all levels</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">💡 Interactive Learning</h3>
              <p className="text-gray-600">Modern teaching methods with practical approach</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">🏆 Proven Results</h3>
              <p className="text-gray-600">Consistent track record of student success</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Philosophy</h2>
          <p className="text-gray-600">We follow the ancient wisdom that states: "One who is having these six qualities – Knowledge, Reasoning, Wisdom, Sharp Memory, Preparedness & Diligence, Nothing is impossible for them." Our teaching methodology focuses on developing these qualities in every student.</p>
        </div>
      </div>
    </div>
  );
};

export default About;