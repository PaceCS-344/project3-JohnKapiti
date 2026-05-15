import React, { useState, useRef } from 'react';

const About = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowEasterEgg(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowEasterEgg(false);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Photo with Easter Egg */}
            <div className="md:col-span-1 flex justify-center relative">
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/temppicturepfp.jpg"
                  alt="John Kapiti"
                  className={`w-full h-full rounded-full shadow-lg object-cover transition-opacity duration-300 ${
                    showEasterEgg ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Easter Egg Video Container */}
                {showEasterEgg && (
                  <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full rounded-full shadow-lg object-cover"
                    onEnded={(e) => e.currentTarget.play()}
                  >
                    <source src="/spongebob-thinking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a Computer Science student at Pace University graduating in the spring of 2026. I am the President of the Coding Club and I like fostering a community of creativity. Currently working as an IT Support Technician, where I work to solve L1 and L2 user issues. My interest span databases, cloud infrastructure, and backend systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
