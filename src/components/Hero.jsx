import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      {/* Banner Background */}
      <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center opacity-30" style={{backgroundImage: 'url(/purplebanner.avif)'}}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 mb-4">
              John Kapiti
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-xl text-gray-600">
              Computer Science Student
            </p>
            <p className="text-xl text-gray-600">
              IT Support Technician
            </p>
            <p className="text-xl text-gray-600">
              Software Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
            >
              View Project
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
