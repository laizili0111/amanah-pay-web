
import React from 'react';

const MissionTab = () => {
  return (
    <div className="space-y-6">
      <img 
        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop" 
        alt="Our Mission" 
        className="w-full h-64 object-cover rounded-xl mb-8" 
      />
      
      <div className="prose max-w-none">
        <h2>Our Vision & Mission</h2>
        <p>
          Faith Finance Forward was founded with a clear vision: to create a transparent, accessible, and Shariah-compliant platform that empowers Muslims worldwide to engage in charitable giving with complete confidence.
        </p>
        <p>
          Our mission is to bridge the gap between traditional Islamic values and modern technology, leveraging blockchain to ensure that every donation is traceable, every campaign is authentic, and every transaction adheres to Islamic financial principles.
        </p>
        
        <h3>Our Core Values</h3>
        <ul>
          <li><strong>Transparency:</strong> Complete visibility into how donations are used and distributed.</li>
          <li><strong>Integrity:</strong> Strict adherence to Islamic financial principles and ethical standards.</li>
          <li><strong>Innovation:</strong> Embracing technology to improve the charitable giving experience.</li>
          <li><strong>Community:</strong> Fostering a global ummah connected through shared values and goals.</li>
          <li><strong>Accessibility:</strong> Making Islamic charitable giving available to all, regardless of location or technical expertise.</li>
        </ul>
        
        <h3>Our Team</h3>
        <p>
          Faith Finance Forward was established by a team of Muslim professionals with backgrounds in Islamic finance, blockchain technology, and charitable organizations. United by our faith and commitment to innovation, we saw an opportunity to transform how Muslims give and how Islamic causes receive support.
        </p>
        <p>
          Our team includes Shariah scholars who ensure compliance with Islamic principles, technologists who develop our secure platform, and community organizers who connect us with meaningful causes worldwide.
        </p>
      </div>
    </div>
  );
};

export default MissionTab;
