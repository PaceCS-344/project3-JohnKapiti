import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'C', 'HTML/CSS'],
      color: 'purple',
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['FastAPI', 'React', 'Next.js', 'SQLModel'],
      color: 'purple',
    },
    {
      category: 'Tools & Platforms',
      skills: ['GitHub', 'Docker', 'AWS', 'VS Code', 'Xcode'],
      color: 'purple',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MariaDB', 'SQL Server'],
      color: 'purple',
    },
  ];

  // Filter categories based on search term
  const filteredCategories = searchTerm.trim() === '' 
    ? skillCategories 
    : skillCategories.filter(cat => 
        cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotationX = ((mouseY - centerY) / centerY) * -15;
    const rotationY = ((mouseX - centerX) / centerX) * 15;
    
    setRotation({ x: rotationX, y: rotationY });
    setMousePosition({ x: mouseX, y: mouseY });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setRotation({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white relative">
      {/* Dim overlay when searching */}
      {searchTerm.trim() !== '' && filteredCategories.length > 0 && (
        <motion.div
          className="fixed inset-0 bg-black/40 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-md relative z-50">
            <input
              type="text"
              placeholder="Search skills or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                Found {filteredCategories.length} categor{filteredCategories.length !== 1 ? 'ies' : 'y'}
              </p>
            )}
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 relative z-50">
            <p className="text-lg text-gray-500">
              No skills found matching "{searchTerm}"
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, index) => {
              const isFiltered = filteredCategories.includes(category);
              
              return (
                <motion.div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  variants={cardVariants}
                  className={`relative bg-white rounded-lg shadow-md p-8 overflow-hidden cursor-default transition-all duration-300 ${
                    searchTerm.trim() !== '' && !isFiltered ? 'opacity-30' : 'opacity-100'
                  }`}
                  style={{
                    perspective: '1000px',
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Highlight glow for matching cards */}
                  {searchTerm.trim() !== '' && isFiltered && (
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 70%)',
                        boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), inset 0 0 20px rgba(251, 191, 36, 0.2)',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  {/* Card with 3D rotation */}
                  <motion.div
                    style={{
                      rotateX: hoveredIndex === index ? rotation.x : 0,
                      rotateY: hoveredIndex === index ? rotation.y : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {/* Radial Glow Effect */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute pointer-events-none"
                        style={{
                          left: mousePosition.x,
                          top: mousePosition.y,
                          width: '400px',
                          height: '400px',
                          background:
                            'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 0,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-purple-600">
                        {category.category}
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className={`px-4 py-2 font-semibold rounded-lg border transition-colors ${
                              searchTerm.trim() !== '' &&
                              skill.toLowerCase().includes(searchTerm.toLowerCase())
                                ? 'bg-yellow-200 text-yellow-900 border-yellow-400'
                                : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                            }`}
                            whileHover={{ scale: 1.1, y: -4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
