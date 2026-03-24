import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn about our journey and mission</p>
      </div>
      
      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>The Sanskrit Hub was established with a vision to preserve and promote the ancient language of Sanskrit while also providing quality Hindi education. Located in Andheri, Mumbai, we have been serving the community with dedication and excellence.</p>
            <p>Our mission is to make Sanskrit accessible to everyone, showcasing its scientific nature and relevance in today's world. We believe that learning these languages opens doors to rich cultural heritage and enhances cognitive abilities.</p>
          </div>
          
          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>📚 Expert Faculty</h3>
                <p>Highly qualified teachers with years of experience</p>
              </div>
              <div className="feature">
                <h3>🎯 Structured Curriculum</h3>
                <p>Well-designed courses for all levels</p>
              </div>
              <div className="feature">
                <h3>💡 Interactive Learning</h3>
                <p>Modern teaching methods with practical approach</p>
              </div>
              <div className="feature">
                <h3>🏆 Proven Results</h3>
                <p>Consistent track record of student success</p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Our Philosophy</h2>
            <p>We follow the ancient wisdom that states: "One who is having these six qualities – Knowledge, Reasoning, Wisdom, Sharp Memory, Preparedness & Diligence, Nothing is impossible for them." Our teaching methodology focuses on developing these qualities in every student.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;