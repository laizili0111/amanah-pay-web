
import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-islamic-pattern pt-16 pb-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-islamic-accent/90 to-islamic-primary/90"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Faith Finance Forward</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Bridging traditional Islamic values with modern blockchain technology to revolutionize charitable giving.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
